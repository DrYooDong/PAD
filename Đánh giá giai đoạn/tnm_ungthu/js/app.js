/**
 * TNM & FIGO Calculator Logic
 */

let cancerData = {};
let currentT = '', currentN = '', currentM = '';

function initTnmApp() {
    cancerData = getActiveCancerData();
    populateSelectOptions();
    loadCancerType();
}

function populateSelectOptions() {
    const select = document.getElementById('cancer-select');
    select.innerHTML = '';

    // Group cancers by group field
    const groups = {};
    Object.keys(cancerData).forEach(key => {
        const item = cancerData[key];
        const groupName = item.group || 'Khác';
        if (!groups[groupName]) groups[groupName] = [];
        groups[groupName].push({ key, name: item.name });
    });

    Object.keys(groups).forEach(groupName => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = groupName;
        groups[groupName].forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.key;
            opt.textContent = c.name;
            optgroup.appendChild(opt);
        });
        select.appendChild(optgroup);
    });
}

function loadCancerType() {
    const key = document.getElementById('cancer-select').value;
    const data = cancerData[key];
    if (!data) return;

    renderGroup('t-container', data.T || [], 'T');
    renderGroup('n-container', data.N || [], 'N');
    renderGroup('m-container', data.M || [], 'M');

    resetSelection();
}

function renderGroup(containerId, options, cat) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (options.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 italic">Không có tiêu chuẩn ${cat}</p>`;
        return;
    }

    container.innerHTML = options.map(item => `
        <button onclick="selectOption('${cat}', '${item.id}')" id="btn-${item.id}" class="option-btn w-full text-left p-3 rounded-xl hover:bg-slate-50 text-sm flex gap-3 flex-col sm:flex-row border border-slate-200 transition-all">
            <span class="font-black text-teal-800 shrink-0 w-10">${item.id}</span>
            <span class="text-slate-600">${item.desc}</span>
        </button>
    `).join('');
}

function selectOption(cat, id) {
    const container = document.getElementById(`${cat.toLowerCase()}-container`);
    if (container) {
        container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        const btn = document.getElementById(`btn-${id}`);
        if (btn) btn.classList.add('active');
    }

    if (cat === 'T') currentT = id;
    if (cat === 'N') currentN = id;
    if (cat === 'M') currentM = id;

    calculate();
}

function calculate() {
    if (!currentT || !currentN || !currentM) return;
    const key = document.getElementById('cancer-select').value;
    const data = cancerData[key];
    if (!data) return;

    document.getElementById('res-tnm').innerText = `${currentT}${currentN}${currentM}`;

    let stage = '--';
    let extra = data.extra || '';

    if (data.rules && Array.isArray(data.rules)) {
        for (const rule of data.rules) {
            if (rule.match) {
                let isMatch = true;
                if (rule.match.T && rule.match.T !== currentT) isMatch = false;
                if (rule.match.N && rule.match.N !== currentN) isMatch = false;
                if (rule.match.M && rule.match.M !== currentM) isMatch = false;
                if (isMatch) {
                    stage = rule.stage;
                    break;
                }
            } else if (rule.matchPrefix) {
                let isMatch = true;
                if (rule.matchPrefix.T && !currentT.startsWith(rule.matchPrefix.T)) isMatch = false;
                if (rule.matchPrefix.N && !currentN.startsWith(rule.matchPrefix.N)) isMatch = false;
                if (rule.matchPrefix.M && !currentM.startsWith(rule.matchPrefix.M)) isMatch = false;
                if (isMatch) {
                    stage = rule.stage;
                    break;
                }
            } else if (rule.matchNot) {
                let isMatch = true;
                if (rule.matchNot.T && currentT === rule.matchNot.T) isMatch = false;
                if (rule.matchNot.N && currentN === rule.matchNot.N) isMatch = false;
                if (rule.matchNot.M && currentM === rule.matchNot.M) isMatch = false;
                if (isMatch) {
                    stage = rule.stage;
                    break;
                }
            } else if (rule.defaultT) {
                stage = currentT.replace('T', '').toUpperCase();
                break;
            } else if (rule.stage) {
                stage = rule.stage;
                break;
            }
        }
    }

    document.getElementById('res-stage').innerText = stage;
    document.getElementById('res-extra').innerText = extra;
}

function resetSelection() {
    currentT = ''; currentN = ''; currentM = '';
    const resTnm = document.getElementById('res-tnm');
    const resStage = document.getElementById('res-stage');
    const resExtra = document.getElementById('res-extra');

    if (resTnm) resTnm.innerText = '-- -- --';
    if (resStage) resStage.innerText = '--';
    if (resExtra) resExtra.innerText = '';
}

function resetTool() {
    resetSelection();
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
}

function copyResult() {
    const tnm = document.getElementById('res-tnm').innerText;
    const stage = document.getElementById('res-stage').innerText;
    const select = document.getElementById('cancer-select');
    const type = select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : '';
    const extra = document.getElementById('res-extra') ? document.getElementById('res-extra').innerText : '';
    
    if (!currentT || !currentN || !currentM) {
        alert("Vui lòng chọn đầy đủ tiêu chuẩn T, N và M trước khi sao chép!");
        return;
    }

    const text = `[KẾT QUẢ ĐÁNH GIÁ GIAI ĐOẠN UNG THƯ - ONCOPORTAL]\n- Bệnh học: ${type}\n- Phân loại TNM: ${tnm}\n- Giai đoạn Lâm sàng: GIAI ĐOẠN ${stage}\n- Ghi chú: ${extra}`;
    
    navigator.clipboard.writeText(text).then(() => {
        alert("✅ Đã sao chép tóm tắt chẩn đoán vào bộ nhớ tạm!");
    }).catch(err => {
        console.error("Lỗi copy: ", err);
    });
}

/**
 * Nạp dữ liệu JSON từ file bên ngoài
 */
function handleImportJsonFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (typeof importedData === 'object' && importedData !== null) {
                saveActiveCancerData(importedData);
                cancerData = importedData;
                populateSelectOptions();
                loadCancerType();
                alert("✅ Nạp dữ liệu TNM thành công!");
            } else {
                alert("❌ Địng dạng file JSON không hợp lệ!");
            }
        } catch (err) {
            alert("❌ Lỗi khi đọc file JSON: " + err.message);
        }
    };
    reader.readAsText(file);
}

/**
 * Tải file dữ liệu JSON hiện tại về máy
 */
function handleExportJsonFile() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cancerData, null, 4));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "tnm_cancer_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

/**
 * Khôi phục về dữ liệu mặc định
 */
function handleResetToDefault() {
    if (confirm("Bạn có chắc chắn muốn khôi phục về dữ liệu mặc định ban đầu không?")) {
        resetActiveCancerDataToDefault();
        initTnmApp();
        alert("✅ Đã khôi phục về dữ liệu mặc định!");
    }
}

window.onload = initTnmApp;
