/**
 * Editor Logic for TNM Guidelines Data
 */

let cancerData = {};
let currentSelectedCancerKey = null;

function initEditor() {
    cancerData = getActiveCancerData();
    renderCancerList();
}

function renderCancerList() {
    const listContainer = document.getElementById('cancer-list');
    listContainer.innerHTML = '';

    const keys = Object.keys(cancerData);
    if (keys.length === 0) {
        listContainer.innerHTML = '<p class="p-4 text-xs text-slate-400">Chưa có loại ung thư nào.</p>';
        return;
    }

    keys.forEach(key => {
        const item = cancerData[key];
        const activeClass = key === currentSelectedCancerKey ? 'bg-teal-50 border-teal-500 font-bold text-teal-800' : 'hover:bg-slate-50 border-slate-200 text-slate-700';
        
        const btn = document.createElement('button');
        btn.className = `w-full text-left p-3 border-b text-sm transition flex items-center justify-between ${activeClass}`;
        btn.onclick = () => selectCancerForEdit(key);
        btn.innerHTML = `
            <div>
                <p class="font-medium">${item.name || key}</p>
                <p class="text-[10px] text-slate-400">${item.group || 'Khác'}</p>
            </div>
            <span class="text-xs text-slate-400">✏️</span>
        `;
        listContainer.appendChild(btn);
    });

    if (!currentSelectedCancerKey && keys.length > 0) {
        selectCancerForEdit(keys[0]);
    }
}

function selectCancerForEdit(key) {
    currentSelectedCancerKey = key;
    renderCancerList();

    const item = cancerData[key];
    if (!item) return;

    document.getElementById('edit-key').value = key;
    document.getElementById('edit-name').value = item.name || '';
    document.getElementById('edit-group').value = item.group || '';
    document.getElementById('edit-extra').value = item.extra || '';

    renderCategoryItems('t-items-container', item.T || [], 'T');
    renderCategoryItems('n-items-container', item.N || [], 'N');
    renderCategoryItems('m-items-container', item.M || [], 'M');
}

function renderCategoryItems(containerId, list, cat) {
    const container = document.getElementById(containerId);
    container.innerHTML = list.map((item, idx) => `
        <div class="flex items-center gap-2 mb-2">
            <input type="text" value="${item.id}" placeholder="ID (${cat}1a...)" onchange="updateItem('${cat}', ${idx}, 'id', this.value)" class="w-24 p-2 border border-slate-300 rounded-lg text-xs font-bold font-mono">
            <input type="text" value="${item.desc}" placeholder="Mô tả..." onchange="updateItem('${cat}', ${idx}, 'desc', this.value)" class="flex-1 p-2 border border-slate-300 rounded-lg text-xs">
            <button onclick="removeItem('${cat}', ${idx})" class="p-2 text-rose-500 hover:bg-rose-50 rounded-lg text-xs font-bold">✕</button>
        </div>
    `).join('');
}

function updateItem(cat, idx, field, val) {
    if (!currentSelectedCancerKey || !cancerData[currentSelectedCancerKey]) return;
    cancerData[currentSelectedCancerKey][cat][idx][field] = val;
}

function addItem(cat) {
    if (!currentSelectedCancerKey || !cancerData[currentSelectedCancerKey]) return;
    if (!cancerData[currentSelectedCancerKey][cat]) cancerData[currentSelectedCancerKey][cat] = [];
    cancerData[currentSelectedCancerKey][cat].push({ id: `${cat}1`, desc: "Mô tả mới" });
    selectCancerForEdit(currentSelectedCancerKey);
}

function removeItem(cat, idx) {
    if (!currentSelectedCancerKey || !cancerData[currentSelectedCancerKey]) return;
    cancerData[currentSelectedCancerKey][cat].splice(idx, 1);
    selectCancerForEdit(currentSelectedCancerKey);
}

function createNewCancer() {
    const key = prompt("Nhập Mã nhận diện (VD: colon_ajcc8):");
    if (!key) return;
    if (cancerData[key]) {
        alert("Mã này đã tồn tại!");
        return;
    }

    const name = prompt("Nhập tên hiển thị (VD: Đại trực tràng AJCC 8th):");
    if (!name) return;

    cancerData[key] = {
        name: name,
        group: "Các ung thư khác (AJCC)",
        extra: "Theo hệ thống AJCC",
        T: [{ id: "T1", desc: "Mô tả T1" }],
        N: [{ id: "N0", desc: "Không di căn hạch" }],
        M: [{ id: "M0", desc: "Không di căn xa" }],
        rules: [{ matchPrefix: { M: "M1" }, stage: "IV" }, { stage: "I" }]
    };

    selectCancerForEdit(key);
    renderCancerList();
}

function deleteCurrentCancer() {
    if (!currentSelectedCancerKey) return;
    if (confirm(`Bạn có chắc chắn muốn xóa "${cancerData[currentSelectedCancerKey].name}" không?`)) {
        delete cancerData[currentSelectedCancerKey];
        currentSelectedCancerKey = null;
        renderCancerList();
    }
}

function saveMetaInfo() {
    if (!currentSelectedCancerKey || !cancerData[currentSelectedCancerKey]) return;
    cancerData[currentSelectedCancerKey].name = document.getElementById('edit-name').value;
    cancerData[currentSelectedCancerKey].group = document.getElementById('edit-group').value;
    cancerData[currentSelectedCancerKey].extra = document.getElementById('edit-extra').value;
    renderCancerList();
}

function saveAllChanges() {
    saveMetaInfo();
    const success = saveActiveCancerData(cancerData);
    if (success) {
        alert("✅ Đã lưu thay đổi vào bộ nhớ trình duyệt (localStorage)!");
    } else {
        alert("❌ Có lỗi xảy ra khi lưu!");
    }
}

function exportDataJsFile() {
    saveMetaInfo();
    const content = `/**
 * TNM & FIGO Cancer Staging Dataset & Custom Configuration
 */

window.CANCER_DATA_STORAGE_KEY = 'tnm_custom_cancer_data_v1';

const defaultCancerData = ${JSON.stringify(cancerData, null, 4)};

function getActiveCancerData() {
    try {
        const local = localStorage.getItem(window.CANCER_DATA_STORAGE_KEY);
        if (local) return JSON.parse(local);
    } catch (e) {}
    return defaultCancerData;
}

function saveActiveCancerData(data) {
    try {
        localStorage.setItem(window.CANCER_DATA_STORAGE_KEY, JSON.stringify(data));
        return true;
    } catch (e) { return false; }
}

function resetActiveCancerDataToDefault() {
    localStorage.removeItem(window.CANCER_DATA_STORAGE_KEY);
}
`;

    const blob = new Blob([content], { type: 'text/javascript' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'data.js';
    a.click();
}

window.onload = initEditor;
