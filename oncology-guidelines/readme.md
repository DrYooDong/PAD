# 📖 Hướng Dẫn Sử Dụng & Tài Liệu Phân Hệ Oncology Guidelines

Phân hệ **Oncology Guidelines & Nghiên Cứu Ung Bướu** (`oncology.html`) là một cấu phần quan trọng trong hệ sinh thái **CliniPortal**, được thiết kế chuyên biệt cho mục đích tra cứu, phân tích và đối chiếu các tài liệu hướng dẫn điều trị (trong nước & quốc tế) và các thử nghiệm lâm sàng chuyên khoa Ung bướu dựa trên nguyên tắc **Y học chứng cứ (EBM)**.

---

## ✨ Giới Thiệu Phân Hệ

Phân hệ hỗ trợ bác sĩ lâm sàng và nghiên cứu viên Ung bướu trong việc:
*   **Tổng hợp đa nguồn**: Quản lý song song tài liệu trong nước (Bộ Y tế, VNOA...) và nghiên cứu quốc tế (NCCN, ESMO, ASCO, NEJM, Lancet Oncology...).
*   **Phân tích Y học chứng cứ (EBM)**: Trích xuất và cấu trúc hóa các tiêu chí can thiệp, tiêu chí đánh giá chính (PFS, OS, ORR) và chỉ số thống kê từ nghiên cứu (HR, OR, 95% CI).
*   **Tự động render biều đồ Forest Plot SVG**: Tự động chuyển đổi các chỉ số thống kê (`HR 0.65 (95% CI 0.51-0.83, p=0.001)`) thành biểu đồ Forest Plot trực quan.
*   **Phân tích Subgroup & Mã ICD-10**: Hỗ trợ phân tích phân nhóm bệnh nhân (ví dụ: nhóm Châu Á, di căn não) và mã hóa ICD-10.

---

## 📊 Cấu Trúc Bảng Dữ Liệu (Data Schema)

Để phục vụ phân tích EBM Ung bướu, mỗi nghiên cứu được cấu trúc hóa theo các trường dữ liệu sau:

| Trường dữ liệu | Tên cột hiển thị | Loại dữ liệu | Mô tả chi tiết | Ví dụ |
| :--- | :--- | :--- | :--- | :--- |
| `id` | Mã nghiên cứu | `Text` (PK) | Slug duy nhất của nghiên cứu. | `study_onco_beamion_lung_2026` |
| `title` | Tên nghiên cứu | `Text` (Bắt buộc) | Tên chính thức của tài liệu/nghiên cứu. | *Beamion LUNG-1: Zongertinib cho NSCLC* |
| `drug` | Hoạt chất / Phác đồ | `Text` | Hoạt chất chính hoặc phác đồ can thiệp. | *Zongertinib* |
| `sourceType` | Phân loại nguồn | `Dropdown` | `intl-study`, `intl-guideline`, `vn-moh`, `vn-association`, `fda`. | *Nghiên cứu Quốc tế* |
| `cancerType` | Nhóm ung thư | `Dropdown` | `lung`, `breast`, `gi`, `gu`, `haem`, `cns`, `gynae`, `hn`, `skin`, `reg`, `guide`. | *Phổi (Lung)* |
| `design` | Thiết kế nghiên cứu | `Dropdown` | `rct`, `phase1`, `phase2`, `phase3`, `meta`, `cohort`, `guideline`, `review`. | *Lâm sàng Giai đoạn I* |
| `presentedAt` | Nơi công bố | `Text` | Tạp chí hoặc hội nghị y khoa công bố. | *ELCC 2026 / NEJM* |
| `intervention` | Can thiệp / Đối chứng | `Text` | Tóm tắt nhóm can thiệp và đối chứng. | *Zongertinib 120mg QD vs Placebo* |
| `primaryEndpoint`| Tiêu chí chính | `Text` | Tiêu chí đánh giá chính & ORR. | *ORR (BICR) — 76%* |
| `medianPFS` | mPFS | `Text` | Trung vị sống thêm không tiến triển. | *14.4 tháng* |
| `medianOS` | mOS | `Text` | Trung vị sống thêm toàn bộ. | *Chưa đạt* |
| `keyResults` | Kết quả chính | `Text` (Monospace) | Tỷ số chênh lệch, khoảng tin cậy (CI) vẽ Forest Plot. | *HR 0.65 (95% CI 0.51-0.83, p=0.001)* |
| `impact` | Ảnh hưởng lâm sàng | `Dropdown` | `practice-changing`, `regulatory`, `informative`, `early-signal`, `negative`. | *Practice-Changing* |
| `year` | Năm công bố | `Integer` | Năm xuất bản. | *2026* |
| `organization` | Đơn vị ban hành | `Text` | Tạp chí hoặc tổ chức công bố. | *NEJM / Boehringer Ingelheim* |
| `phase` | Giai đoạn | `Text` | Giai đoạn nghiên cứu. | *Phase I* |
| `sampleSize` | Cỡ mẫu | `Integer` | Số lượng bệnh nhân. | *340* |
| `population` | Đối tượng nghiên cứu | `Text` | Quần thể bệnh nhân tham gia. | *NSCLC tiến triển có đột biến HER2* |
| `summary` | Kết luận cốt lõi | `Text` (Bắt buộc) | Tóm tắt kết quả chính. | *Zongertinib cho thấy hiệu quả bền vững...* |
| `detailedConclusion`| Kết luận chi tiết | `Text` | Tác dụng phụ (AEs), phân tích sâu. | *Đạt ORR 76%, tác dụng phụ nhẹ...* |
| `fdaStatus` | Phê duyệt FDA | `Text` | Trạng thái pháp lý FDA/EMA. | *Đã phê duyệt Feb 2026* |
| `sourceUrl` | Link nguồn | `URL` | Link PubMed / DOI. | *https://www.nejm.org/...* |
| `asianData` | Dữ liệu Châu Á | `Boolean` | Có dữ liệu bệnh nhân Châu Á hay không. | *True* |
| `icd10` | Mã ICD-10 | `JSONB / Array` | Mảng danh sách mã ICD-10 liên quan. | `["C34", "C34.9"]` |
| `subgroups` | Phân tích Subgroup | `JSONB / Object` | Map phân tích phân nhóm (Forest Plot mini). | `{"Châu Á": "HR 0.60 (95% CI 0.43-0.82)"}` |

---

## 🤖 QUY TRÌNH NẠP DỮ LIỆU TỰ ĐỘNG BẰNG NOTEBOOK LM / AI

### Bước 1: Copy Master Prompt dành cho AI (ChatGPT, Claude, NotebookLM, Gemini)

Sao chép đoạn Prompt sau và gửi kèm bài báo/PDF nghiên cứu vào AI để xuất ra JSON chuẩn:

```text
Bạn là một chuyên gia Y học chứng cứ (EBM) và Bác sĩ Ung bướu (Oncologist).
Nhiệm vụ của bạn là trích xuất dữ liệu từ bài báo / nghiên cứu y khoa được cung cấp và chuyển đổi thành MẢNG DỮ LIỆU JSON CHUẨN (JSON Array) 100% hợp lệ để nạp trực tiếp vào hệ thống web.

⚠️ QUY TẮC BẮT BỘC VỀ ĐỊNH DẠNG JSON:
- Đầu ra CHỈ LÀ KHỐI MÃ JSON bọc trong ```json ... ```. Không thêm bất kỳ lời mở đầu, giải thích hay câu chào hỏi nào khác.
- Phải đảm bảo cú pháp JSON hợp lệ: Cặp dấu ngoặc kép "key": "value", không có dấu phẩy thừa (trailing comma) ở cuối object/array, chuỗi xuống dòng dùng \n.
- Phải xuất ra định dạng mảng: [ { ... } ]

### CẤU TRÚC CHI TIẾT CÁC TRƯỜNG DỮ LIỆU JSON BẮT BỘC:

1. `id`: Chuỗi slug duy nhất dạng "study_onco_[tên_thuốc/nghiên_cứu]_[năm]" (chữ thường, gạch dưới).
2. `title`: Tiêu đề nghiên cứu / bài báo chính thức (chuỗi string, BẮT BỘC).
3. `drug`: Thuốc / Phác đồ can thiệp chính (chuỗi string).
4. `sourceType`: Chọn ĐÚNG 1 trong các giá trị: "intl-study" | "intl-guideline" | "vn-moh" | "vn-association" | "fda".
5. `cancerType`: Chọn ĐÚNG 1 trong các giá trị: "lung" | "breast" | "gi" | "gu" | "haem" | "cns" | "gynae" | "hn" | "skin" | "reg" | "guide".
6. `specialty`: Đặt giá trị GIỐNG HỆT `cancerType`.
7. `design`: Chọn ĐÚNG 1 trong các giá trị: "phase1" | "phase2" | "phase3" | "rct" | "meta" | "cohort" | "guideline" | "review" | "other".
8. `presentedAt`: Hội nghị/Tạp chí công bố (VD: "ASCO 2025", "NEJM 2026").
9. `intervention`: Nhóm can thiệp vs đối chứng (chuỗi string).
10. `primaryEndpoint`: Tiêu chí chính & ORR/PFS (chuỗi string).
11. `medianPFS`: Trung vị PFS (chuỗi string, VD: "14.4 tháng" hoặc "Chưa đạt").
12. `medianOS`: Trung vị OS (chuỗi string, VD: "28.5 tháng" hoặc "Chưa đạt").
13. `keyResults`: Chuỗi định dạng thống kê vẽ Forest Plot SVG: "HR 0.65 (95% CI 0.51-0.83, p=0.001)".
14. `impact`: Chọn ĐÚNG 1 trong các giá trị: "practice-changing" | "regulatory" | "informative" | "early-signal" | "negative".
15. `year`: Năm công bố (số nguyên integer, VD: 2026).
16. `organization`: Tạp chí/Đơn vị công bố (chuỗi string).
17. `phase`: Giai đoạn (chuỗi string, VD: "Phase III").
18. `sampleSize`: Cỡ mẫu (số nguyên integer hoặc null).
19. `population`: Đặc điểm bệnh nhân tham gia (chuỗi string).
20. `summary`: Kết luận cốt lõi ngắn gọn 1-2 câu (chuỗi string, BẮT BỘC).
21. `detailedConclusion`: Kết luận chi tiết, tác dụng phụ/độc tính AEs (chuỗi string).
22. `fdaStatus`: Phê duyệt pháp lý (chuỗi string).
23. `sourceUrl`: Link gốc PubMed/DOI (chuỗi string).
24. `file`: Mặc định để chuỗi rỗng "".
25. `asianData`: boolean (true nếu có dữ liệu bệnh nhân Châu Á, ngược lại false).
26. `bookmarked`: boolean (mặc định false).
27. `icd10`: Mảng mã ICD-10 liên quan (mảng chuỗi, VD: ["C34", "C34.9"]).
28. `subgroups`: Object phân nhóm (VD: {"Châu Á": "HR 0.60 (95% CI 0.43-0.82, p=0.002)"}).

Chỉ xuất khối mã JSON bọc trong ```json ... ```.
```

### Bước 2: Kết quả JSON đầu ra từ AI mẫu chuẩn 100%

```json
[
  {
    "id": "study_onco_beamion_lung_2026",
    "title": "Beamion LUNG-1: Zongertinib cho ung thư phổi không tế bào nhỏ (NSCLC) đột biến HER2",
    "drug": "Zongertinib",
    "sourceType": "intl-study",
    "cancerType": "lung",
    "specialty": "lung",
    "design": "phase1",
    "presentedAt": "ELCC 2026",
    "intervention": "Zongertinib 120 mg PO QD (<90kg) hoặc 180 mg (>=90kg)",
    "primaryEndpoint": "Tỷ lệ đáp ứng khách quan (ORR) (BICR) — 76%",
    "medianPFS": "14.4 tháng",
    "medianOS": "Chưa đạt",
    "keyResults": "HR 0.65 (95% CI 0.51-0.83, p=0.001)",
    "impact": "practice-changing",
    "year": 2026,
    "organization": "NEJM / Boehringer Ingelheim",
    "phase": "Phase I",
    "sampleSize": 340,
    "population": "NSCLC không vảy tiến triển/di căn có đột biến kích hoạt HER2 TKD",
    "summary": "Zongertinib cho thấy hiệu quả bền vững ở bệnh nhân NSCLC có đột biến HER2 tiến triển.",
    "detailedConclusion": "Zongertinib đạt ORR 76% và mPFS 14.4 tháng ở bệnh nhân NSCLC HER2+.",
    "fdaStatus": "Đã phê duyệt (Accelerated approval) Feb 2026",
    "sourceUrl": "https://www.nejm.org/doi/full/10.1056/NEJMoa2516969",
    "file": "",
    "asianData": true,
    "bookmarked": true,
    "icd10": ["C34", "C34.9"],
    "subgroups": {
      "Châu Á": "HR 0.60 (95% CI 0.43-0.82, p=0.002)",
      "Di căn não": "HR 0.58 (95% CI 0.39-0.85, p=0.005)"
    },
    "createdAt": "2026-08-05T09:00:00.000Z"
  }
]
```

---

## ☁️ TÍCH HỢP SUPABASE & ĐỒNG BỘ ĐÁM MÂY

### 1. Tạo Bảng SQL trên Supabase (DDL)

Truy cập **SQL Editor** trong dự án Supabase của bạn và chạy câu lệnh SQL sau:

```sql
CREATE TABLE IF NOT EXISTS oncology_clinical_updates (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  drug TEXT,
  "sourceType" TEXT DEFAULT 'intl-study',
  "cancerType" TEXT DEFAULT 'lung',
  design TEXT DEFAULT 'rct',
  "presentedAt" TEXT,
  intervention TEXT,
  "primaryEndpoint" TEXT,
  "medianPFS" TEXT,
  "medianOS" TEXT,
  "keyResults" TEXT,
  impact TEXT DEFAULT 'informative',
  year INTEGER DEFAULT 2026,
  organization TEXT,
  phase TEXT,
  "sampleSize" INTEGER,
  population TEXT,
  summary TEXT NOT NULL,
  "detailedConclusion" TEXT,
  "fdaStatus" TEXT,
  "sourceUrl" TEXT,
  file TEXT,
  "asianData" BOOLEAN DEFAULT false,
  bookmarked BOOLEAN DEFAULT false,
  icd10 JSONB DEFAULT '[]'::jsonb,
  subgroups JSONB DEFAULT '{}'::jsonb,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Phân quyền Row Level Security (RLS)
ALTER TABLE oncology_clinical_updates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON oncology_clinical_updates FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update access" ON oncology_clinical_updates FOR ALL USING (true) WITH CHECK (true);
```

### 2. Nạp Dữ Liệu Qua SQL Insert / Upsert

```sql
INSERT INTO oncology_clinical_updates (
  id, title, drug, "sourceType", "cancerType", design, "presentedAt", 
  intervention, "primaryEndpoint", "medianPFS", "medianOS", "keyResults", 
  impact, year, organization, phase, "sampleSize", population, 
  summary, "detailedConclusion", "fdaStatus", "sourceUrl", file, 
  "asianData", bookmarked, icd10, subgroups, "createdAt"
)
VALUES 
(
  'study_onco_beamion_lung_2026',
  'Beamion LUNG-1: Zongertinib cho ung thư phổi không tế bào nhỏ (NSCLC) đột biến HER2',
  'Zongertinib',
  'intl-study',
  'lung',
  'phase1',
  'ELCC 2026',
  'Zongertinib 120 mg PO QD (<90kg) hoặc 180 mg (>=90kg)',
  'Tỷ lệ đáp ứng khách quan (ORR) (BICR) — 76%',
  '14.4 tháng',
  'Chưa đạt',
  'HR 0.65 (95% CI 0.51-0.83, p=0.001)',
  'practice-changing',
  2026,
  'NEJM / Boehringer Ingelheim',
  'Phase I',
  340,
  'NSCLC không vảy tiến triển/di căn có đột biến kích hoạt HER2 TKD',
  'Zongertinib cho thấy hiệu quả bền vững ở bệnh nhân NSCLC có đột biến HER2.',
  'Zongertinib đạt ORR 76% và mPFS 14.4 tháng ở bệnh nhân NSCLC HER2+.',
  'Đã phê duyệt (Accelerated approval) Feb 2026',
  'https://www.nejm.org/doi/full/10.1056/NEJMoa2516969',
  '',
  true,
  true,
  '["C34", "C34.9"]'::jsonb,
  '{"Châu Á": "HR 0.60 (95% CI 0.43-0.82, p=0.002)"}'::jsonb,
  NOW()
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  drug = EXCLUDED.drug,
  "keyResults" = EXCLUDED."keyResults",
  summary = EXCLUDED.summary,
  subgroups = EXCLUDED.subgroups;
```

### 3. Nạp Tự Động Qua Browser Console (JS SDK)

Bạn mở Console trình duyệt (F12) tại trang Oncology Guidelines và chạy:

```javascript
async function uploadJsonToSupabase(jsonData) {
  const url = localStorage.getItem('supabaseUrl');
  const key = localStorage.getItem('supabaseKey');
  if (!window.supabase || !url || !key) return alert("Chưa kết nối Supabase URL/Key!");

  const client = window.supabase.createClient(url, key);
  const formattedData = jsonData.map(s => ({
    ...s,
    icd10: Array.isArray(s.icd10) ? JSON.stringify(s.icd10) : (s.icd10 || null),
    subgroups: typeof s.subgroups === 'object' ? JSON.stringify(s.subgroups) : (s.subgroups || null)
  }));

  const { data, error } = await client
    .from('oncology_clinical_updates')
    .upsert(formattedData, { onConflict: 'id' });

  if (error) console.error("Lỗi:", error);
  else alert("✅ Nạp thành công " + formattedData.length + " nghiên cứu lên Supabase!");
}
```

---

## 📂 Cấu Trúc Tập Tin Phân Hệ

```text
oncology-guidelines/
├── oncology.html (Giao diện chính phân hệ Ung Bướu)
├── oncology.css (Style giao diện)
├── oncology.js (Logic nghiệp vụ & Kết nối Supabase)
├── oncologydata.js (Dữ liệu mẫu mặc định & Config enum)
├── OPERATIONS.md (Tài liệu kỹ thuật nội bộ)
└── README.md (Hướng dẫn sử dụng này)
```
