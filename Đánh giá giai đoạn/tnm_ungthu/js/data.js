/**
 * TNM & FIGO Cancer Staging Dataset & Custom Configuration (AJCC 8th Edition & FIGO 2023)
 * Có thể thêm, sửa, xoá hoặc nạp file JSON mới.
 */

window.CANCER_DATA_STORAGE_KEY = 'tnm_custom_cancer_data_v2';

const defaultCancerData = {
    "colorectal_v8": {
        "name": "Đại trực tràng (AJCC 8th)",
        "group": "Ung thư Tiêu hóa",
        "extra": "Hệ thống AJCC 8th Edition",
        "T": [
            { "id": "T1", "desc": "Xâm lấn lớp dưới niêm mạc (Submucosa)" },
            { "id": "T2", "desc": "Xâm lấn lớp cơ (Muscularis propria)" },
            { "id": "T3", "desc": "Xâm lấn qua lớp cơ đến mô quanh đại trực tràng" },
            { "id": "T4a", "desc": "Xâm lấn qua phúc mạc tạng (Visceral peritoneum)" },
            { "id": "T4b", "desc": "Xâm lấn trực tiếp/dính cấu trúc/cơ quan lân cận" }
        ],
        "N": [
            { "id": "N0", "desc": "Không di căn hạch vùng" },
            { "id": "N1a", "desc": "Di căn 1 hạch vùng" },
            { "id": "N1b", "desc": "Di căn 2-3 hạch vùng" },
            { "id": "N1c", "desc": "Lắng đọng u trong mạc treo (không có hạch vùng di căn)" },
            { "id": "N2a", "desc": "Di căn 4-6 hạch vùng" },
            { "id": "N2b", "desc": "Di căn ≥ 7 hạch vùng" }
        ],
        "M": [
            { "id": "M0", "desc": "Không di căn xa" },
            { "id": "M1a", "desc": "Di căn 1 cơ quan (gan, phổi, hạch xa...) không phúc mạc" },
            { "id": "M1b", "desc": "Di căn > 1 cơ quan không phúc mạc" },
            { "id": "M1c", "desc": "Di căn phúc mạc (có/không di căn cơ quan khác)" }
        ],
        "rules": [
            { "matchPrefix": { "M": "M1c" }, "stage": "IVC" },
            { "matchPrefix": { "M": "M1b" }, "stage": "IVB" },
            { "matchPrefix": { "M": "M1a" }, "stage": "IVA" },
            { "match": { "T": "T4b", "N": "N2b" }, "stage": "IIIC" },
            { "match": { "T": "T4b", "N": "N2a" }, "stage": "IIIC" },
            { "match": { "T": "T4a", "N": "N2a" }, "stage": "IIIC" },
            { "match": { "T": "T4a", "N": "N2b" }, "stage": "IIIC" },
            { "match": { "T": "T3", "N": "N2b" }, "stage": "IIIC" },
            { "match": { "T": "T3", "N": "N2a" }, "stage": "IIIC" },
            { "match": { "T": "T2", "N": "N2b" }, "stage": "IIIC" },
            { "match": { "T": "T1", "N": "N2b" }, "stage": "IIIC" },
            { "match": { "T": "T4b", "N": "N1a" }, "stage": "IIIC" },
            { "match": { "T": "T4b", "N": "N1b" }, "stage": "IIIC" },
            { "match": { "T": "T4b", "N": "N1c" }, "stage": "IIIC" },
            { "match": { "T": "T4a", "N": "N1a" }, "stage": "IIIB" },
            { "match": { "T": "T4a", "N": "N1b" }, "stage": "IIIB" },
            { "match": { "T": "T4a", "N": "N1c" }, "stage": "IIIB" },
            { "match": { "T": "T3", "N": "N1a" }, "stage": "IIIB" },
            { "match": { "T": "T3", "N": "N1b" }, "stage": "IIIB" },
            { "match": { "T": "T3", "N": "N1c" }, "stage": "IIIB" },
            { "match": { "T": "T2", "N": "N2a" }, "stage": "IIIB" },
            { "match": { "T": "T1", "N": "N2a" }, "stage": "IIIB" },
            { "match": { "T": "T2", "N": "N1a" }, "stage": "IIIA" },
            { "match": { "T": "T2", "N": "N1b" }, "stage": "IIIA" },
            { "match": { "T": "T2", "N": "N1c" }, "stage": "IIIA" },
            { "match": { "T": "T1", "N": "N1a" }, "stage": "IIIA" },
            { "match": { "T": "T1", "N": "N1b" }, "stage": "IIIA" },
            { "match": { "T": "T1", "N": "N1c" }, "stage": "IIIA" },
            { "match": { "T": "T4b", "N": "N0" }, "stage": "IIC" },
            { "match": { "T": "T4a", "N": "N0" }, "stage": "IIB" },
            { "match": { "T": "T3", "N": "N0" }, "stage": "IIA" },
            { "match": { "T": "T2", "N": "N0" }, "stage": "I" },
            { "match": { "T": "T1", "N": "N0" }, "stage": "I" }
        ]
    },
    "stomach_v8": {
        "name": "Dạ dày (AJCC 8th Clinical/pTNM)",
        "group": "Ung thư Tiêu hóa",
        "extra": "Hệ thống AJCC 8th Edition",
        "T": [
            { "id": "T1a", "desc": "Xâm lấn lớp niêm mạc (Lamina propria/muscularis mucosae)" },
            { "id": "T1b", "desc": "Xâm lấn lớp dưới niêm mạc (Submucosa)" },
            { "id": "T2", "desc": "Xâm lấn lớp cơ (Muscularis propria)" },
            { "id": "T3", "desc": "Xâm lấn lớp dưới thanh mạc (Subserosa)" },
            { "id": "T4a", "desc": "Xâm lấn thanh mạc (Serosa/visceral peritoneum)" },
            { "id": "T4b", "desc": "Xâm lấn cấu trúc/cơ quan lân cận" }
        ],
        "N": [
            { "id": "N0", "desc": "Không di căn hạch vùng" },
            { "id": "N1", "desc": "Di căn 1-2 hạch vùng" },
            { "id": "N2", "desc": "Di căn 3-6 hạch vùng" },
            { "id": "N3a", "desc": "Di căn 7-15 hạch vùng" },
            { "id": "N3b", "desc": "Di căn ≥ 16 hạch vùng" }
        ],
        "M": [
            { "id": "M0", "desc": "Không di căn xa" },
            { "id": "M1", "desc": "Di căn xa (bao gồm hạch xa, phúc mạc)" }
        ],
        "rules": [
            { "match": { "M": "M1" }, "stage": "IV" },
            { "match": { "T": "T4b", "N": "N3b" }, "stage": "IIIC" },
            { "match": { "T": "T4b", "N": "N3a" }, "stage": "IIIC" },
            { "match": { "T": "T4a", "N": "N3b" }, "stage": "IIIC" },
            { "match": { "T": "T4b", "N": "N2" }, "stage": "IIIC" },
            { "match": { "T": "T4b", "N": "N1" }, "stage": "IIIC" },
            { "match": { "T": "T4a", "N": "N3a" }, "stage": "IIIB" },
            { "match": { "T": "T3", "N": "N3b" }, "stage": "IIIB" },
            { "match": { "T": "T3", "N": "N3a" }, "stage": "IIIB" },
            { "match": { "T": "T4b", "N": "N0" }, "stage": "IIIB" },
            { "match": { "T": "T4a", "N": "N2" }, "stage": "IIIB" },
            { "match": { "T": "T4a", "N": "N1" }, "stage": "IIIA" },
            { "match": { "T": "T3", "N": "N2" }, "stage": "IIIA" },
            { "match": { "T": "T2", "N": "N3a" }, "stage": "IIIA" },
            { "match": { "T": "T2", "N": "N3b" }, "stage": "IIIB" },
            { "match": { "T": "T4a", "N": "N0" }, "stage": "IIB" },
            { "match": { "T": "T3", "N": "N1" }, "stage": "IIB" },
            { "match": { "T": "T2", "N": "N2" }, "stage": "IIB" },
            { "match": { "T": "T1b", "N": "N3a" }, "stage": "IIB" },
            { "match": { "T": "T1a", "N": "N3a" }, "stage": "IIB" },
            { "match": { "T": "T3", "N": "N0" }, "stage": "IIA" },
            { "match": { "T": "T2", "N": "N1" }, "stage": "IIA" },
            { "match": { "T": "T1b", "N": "N2" }, "stage": "IIA" },
            { "match": { "T": "T1a", "N": "N2" }, "stage": "IIA" },
            { "match": { "T": "T2", "N": "N0" }, "stage": "IB" },
            { "match": { "T": "T1b", "N": "N1" }, "stage": "IB" },
            { "match": { "T": "T1a", "N": "N1" }, "stage": "IB" },
            { "match": { "T": "T1b", "N": "N0" }, "stage": "IA" },
            { "match": { "T": "T1a", "N": "N0" }, "stage": "IA" }
        ]
    },
    "cervix_figo2018": {
        "name": "Cổ tử cung (FIGO 2018)",
        "group": "Ung thư Phụ khoa (FIGO)",
        "extra": "Hệ thống FIGO 2018 & AJCC 8th",
        "T": [
            { "id": "T1a1", "desc": "Khu trú ở CTC, xâm lấn mô đệm ≤ 3 mm sâu" },
            { "id": "T1a2", "desc": "Xâm lấn mô đệm > 3 mm và ≤ 5 mm sâu" },
            { "id": "T1b1", "desc": "Xâm lấn > 5mm sâu, kích thước u ≤ 2 cm" },
            { "id": "T1b2", "desc": "Kích thước u > 2 cm và ≤ 4 cm" },
            { "id": "T1b3", "desc": "Kích thước u > 4 cm" },
            { "id": "T2a1", "desc": "Lan 2/3 trên âm đạo, không lan mô cạnh tử cung, u ≤ 4 cm" },
            { "id": "T2a2", "desc": "Lan 2/3 trên âm đạo, không lan mô cạnh tử cung, u > 4 cm" },
            { "id": "T2b", "desc": "Lan mô cạnh tử cung (chưa tới thành chậu)" },
            { "id": "T3a", "desc": "Lan 1/3 dưới âm đạo, chưa tới thành chậu" },
            { "id": "T3b", "desc": "Lan tới thành chậu và/hoặc thận ứ nước/mất chức năng" },
            { "id": "T4", "desc": "Xâm lấn niêm mạc bàng quang hoặc trực tràng" }
        ],
        "N": [
            { "id": "N0", "desc": "Không di căn hạch vùng" },
            { "id": "N1", "desc": "Di căn hạch chậu (Giai đoạn IIIC1)" },
            { "id": "N2", "desc": "Di căn hạch cạnh động mạch chủ (Giai đoạn IIIC2)" }
        ],
        "M": [
            { "id": "M0", "desc": "Không di căn xa" },
            { "id": "M1", "desc": "Có di căn xa (Giai đoạn IVB)" }
        ],
        "rules": [
            { "match": { "M": "M1" }, "stage": "IVB" },
            { "match": { "T": "T4" }, "stage": "IVA" },
            { "match": { "N": "N2" }, "stage": "IIIC2" },
            { "match": { "N": "N1" }, "stage": "IIIC1" },
            { "match": { "T": "T3b" }, "stage": "IIIB" },
            { "match": { "T": "T3a" }, "stage": "IIIA" },
            { "match": { "T": "T2b" }, "stage": "IIB" },
            { "match": { "T": "T2a2" }, "stage": "IIA2" },
            { "match": { "T": "T2a1" }, "stage": "IIA1" },
            { "match": { "T": "T1b3" }, "stage": "IB3" },
            { "match": { "T": "T1b2" }, "stage": "IB2" },
            { "match": { "T": "T1b1" }, "stage": "IB1" },
            { "match": { "T": "T1a2" }, "stage": "IA2" },
            { "match": { "T": "T1a1" }, "stage": "IA1" }
        ]
    },
    "ovary_figo": {
        "name": "Buồng trứng (FIGO)",
        "group": "Ung thư Phụ khoa (FIGO)",
        "extra": "Phân loại FIGO / AJCC",
        "T": [
            { "id": "T1a", "desc": "U giới hạn ở 1 buồng trứng/vòi trứng, vỏ nguyên vẹn" },
            { "id": "T1b", "desc": "U ở cả 2 buồng trứng/vòi trứng, vỏ nguyên vẹn" },
            { "id": "T1c1", "desc": "Vỡ vỏ bao trong lúc phẫu thuật (Surgical spill)" },
            { "id": "T1c2", "desc": "Vỡ vỏ bao trước mổ hoặc u trên bề mặt" },
            { "id": "T1c3", "desc": "Tế bào ác tính trong dịch báng/dịch rửa ổ bụng" },
            { "id": "T2a", "desc": "Lan tới tử cung / vòi trứng / buồng trứng" },
            { "id": "T2b", "desc": "Lan tới các mô vùng chậu khác (bàng quang, đại tràng)" },
            { "id": "T3a", "desc": "Di căn vi thể phúc mạc ngoài vùng chậu" },
            { "id": "T3b", "desc": "Di căn đại thể phúc mạc ngoài vùng chậu ≤ 2 cm" },
            { "id": "T3c", "desc": "Di căn đại thể phúc mạc ngoài vùng chậu > 2 cm" }
        ],
        "N": [
            { "id": "N0", "desc": "Không di căn hạch vùng" },
            { "id": "N1", "desc": "Di căn hạch sau phúc mạc (Giai đoạn IIIA1)" }
        ],
        "M": [
            { "id": "M0", "desc": "Không di căn xa" },
            { "id": "M1a", "desc": "Tràn dịch màng phổi có tế bào ác tính (IVA)" },
            { "id": "M1b", "desc": "Di căn nhu mô gan/lách, cơ quan ngoài ổ bụng (IVB)" }
        ],
        "rules": [
            { "match": { "M": "M1b" }, "stage": "IVB" },
            { "match": { "M": "M1a" }, "stage": "IVA" },
            { "match": { "T": "T3c" }, "stage": "IIIC" },
            { "match": { "T": "T3b" }, "stage": "IIIB" },
            { "match": { "T": "T3a" }, "stage": "IIIA2" },
            { "match": { "N": "N1" }, "stage": "IIIA1" },
            { "match": { "T": "T2b" }, "stage": "IIB" },
            { "match": { "T": "T2a" }, "stage": "IIA" },
            { "match": { "T": "T1c3" }, "stage": "IC3" },
            { "match": { "T": "T1c2" }, "stage": "IC2" },
            { "match": { "T": "T1c1" }, "stage": "IC1" },
            { "match": { "T": "T1b" }, "stage": "IB" },
            { "match": { "T": "T1a" }, "stage": "IA" }
        ]
    },
    "endometrial_figo2023": {
        "name": "Thân tử cung (FIGO 2023)",
        "group": "Ung thư Phụ khoa (FIGO)",
        "extra": "Cập nhật Phân loại FIGO 2023 mới nhất",
        "T": [
            { "id": "T1a1", "desc": "Grade thấp, khu trú nội mạc tử cung hoặc polyp" },
            { "id": "T1a2", "desc": "Grade thấp, xâm lấn < 50% cơ tử cung" },
            { "id": "T1a3", "desc": "Grade thấp, u đồng thời ở nội mạc & buồng trứng" },
            { "id": "T1b", "desc": "Grade thấp, xâm lấn ≥ 50% cơ tử cung" },
            { "id": "T1c", "desc": "High-grade (Serous, Clear cell, Carcinosarcoma...), khu trú nội mạc/polyp" },
            { "id": "T2a", "desc": "Grade thấp, xâm lấn mô đệm cổ tử cung" },
            { "id": "T2b", "desc": "Grade thấp, xâm lấn mạch bạch huyết rõ rệt (Substantial LVSI)" },
            { "id": "T2c", "desc": "High-grade, có xâm lấn cơ tử cung" },
            { "id": "T3a", "desc": "Xâm lấn thanh mạc tử cung và/hoặc phần phụ" },
            { "id": "T3b", "desc": "Lan tới âm đạo và/hoặc mô cạnh tử cung" },
            { "id": "T3c", "desc": "Di căn phúc mạc vùng chậu" },
            { "id": "T4", "desc": "Xâm lấn niêm mạc bàng quang hoặc trực tràng" }
        ],
        "N": [
            { "id": "N0", "desc": "Không di căn hạch vùng" },
            { "id": "N1", "desc": "Di căn hạch chậu (IIIC1)" },
            { "id": "N2", "desc": "Di căn hạch cạnh động mạch chủ (IIIC2)" }
        ],
        "M": [
            { "id": "M0", "desc": "Không di căn xa" },
            { "id": "M1a", "desc": "Di căn phúc mạc ngoài vùng chậu (IVA)" },
            { "id": "M1b", "desc": "Di căn xa (phổi, gan, xương...) (IVB)" }
        ],
        "rules": [
            { "match": { "M": "M1b" }, "stage": "IVB" },
            { "match": { "M": "M1a" }, "stage": "IVA" },
            { "match": { "T": "T4" }, "stage": "IVA" },
            { "match": { "N": "N2" }, "stage": "IIIC2" },
            { "match": { "N": "N1" }, "stage": "IIIC1" },
            { "match": { "T": "T3c" }, "stage": "IIIC" },
            { "match": { "T": "T3b" }, "stage": "IIIB" },
            { "match": { "T": "T3a" }, "stage": "IIIA" },
            { "match": { "T": "T2c" }, "stage": "IIC" },
            { "match": { "T": "T2b" }, "stage": "IIB" },
            { "match": { "T": "T2a" }, "stage": "IIA" },
            { "match": { "T": "T1c" }, "stage": "IC" },
            { "match": { "T": "T1b" }, "stage": "IB" },
            { "match": { "T": "T1a3" }, "stage": "IA3" },
            { "match": { "T": "T1a2" }, "stage": "IA2" },
            { "match": { "T": "T1a1" }, "stage": "IA1" }
        ]
    },
    "lung_v8_detailed": {
        "name": "Phổi (NSCLC AJCC 8th)",
        "group": "Hô hấp & Ung thư Khác",
        "extra": "Phân loại AJCC 8th Edition",
        "T": [
            { "id": "T1mi", "desc": "Ung thư biểu mô vi xâm lấn ≤ 1 cm" },
            { "id": "T1a", "desc": "Khối u ≤ 1 cm" },
            { "id": "T1b", "desc": "1 cm < U ≤ 2 cm" },
            { "id": "T1c", "desc": "2 cm < U ≤ 3 cm" },
            { "id": "T2a", "desc": "3 cm < U ≤ 4 cm hoặc xâm lấn màng phổi tạng/rốn phổi" },
            { "id": "T2b", "desc": "4 cm < U ≤ 5 cm" },
            { "id": "T3", "desc": "5 cm < U ≤ 7 cm hoặc xâm lấn thành ngực/màng tim/nốt phụ cùng thùy" },
            { "id": "T4", "desc": "U > 7 cm hoặc xâm lấn trung thất/tim/mạch lớn/khác thùy cùng bên" }
        ],
        "N": [
            { "id": "N0", "desc": "Không di căn hạch vùng" },
            { "id": "N1", "desc": "Hạch rốn phổi / quanh phế quản cùng bên" },
            { "id": "N2", "desc": "Hạch trung thất cùng bên / dưới chạc phế quản" },
            { "id": "N3", "desc": "Hạch trung thất/rốn phổi đối bên hoặc hạch thượng đòn" }
        ],
        "M": [
            { "id": "M0", "desc": "Không di căn xa" },
            { "id": "M1a", "desc": "Nốt phổi thùy đối bên / Tràn dịch màng phổi/màng tim ác tính" },
            { "id": "M1b", "desc": "1 ổ di căn xa ngoài lồng ngực" },
            { "id": "M1c", "desc": "Nhiều ổ di căn xa ngoài lồng ngực (1 hoặc nhiều cơ quan)" }
        ],
        "rules": [
            { "match": { "M": "M1c" }, "stage": "IVB" },
            { "match": { "M": "M1b" }, "stage": "IVA" },
            { "match": { "M": "M1a" }, "stage": "IVA" },
            { "match": { "T": "T4", "N": "N3" }, "stage": "IIIC" },
            { "match": { "T": "T3", "N": "N3" }, "stage": "IIIC" },
            { "match": { "T": "T4", "N": "N2" }, "stage": "IIIB" },
            { "match": { "T": "T3", "N": "N2" }, "stage": "IIIB" },
            { "match": { "T": "T2b", "N": "N3" }, "stage": "IIIB" },
            { "match": { "T": "T2a", "N": "N3" }, "stage": "IIIB" },
            { "match": { "T": "T1c", "N": "N3" }, "stage": "IIIB" },
            { "match": { "T": "T1b", "N": "N3" }, "stage": "IIIB" },
            { "match": { "T": "T1a", "N": "N3" }, "stage": "IIIB" },
            { "match": { "T": "T4", "N": "N1" }, "stage": "IIIA" },
            { "match": { "T": "T4", "N": "N0" }, "stage": "IIIA" },
            { "match": { "T": "T3", "N": "N1" }, "stage": "IIIA" },
            { "match": { "T": "T2b", "N": "N2" }, "stage": "IIIA" },
            { "match": { "T": "T2a", "N": "N2" }, "stage": "IIIA" },
            { "match": { "T": "T1c", "N": "N2" }, "stage": "IIIA" },
            { "match": { "T": "T1b", "N": "N2" }, "stage": "IIIA" },
            { "match": { "T": "T1a", "N": "N2" }, "stage": "IIIA" },
            { "match": { "T": "T3", "N": "N0" }, "stage": "IIB" },
            { "match": { "T": "T2b", "N": "N1" }, "stage": "IIB" },
            { "match": { "T": "T2a", "N": "N1" }, "stage": "IIB" },
            { "match": { "T": "T2b", "N": "N0" }, "stage": "IIA" },
            { "match": { "T": "T2a", "N": "N0" }, "stage": "IB" },
            { "match": { "T": "T1c", "N": "N1" }, "stage": "IIA" },
            { "match": { "T": "T1b", "N": "N1" }, "stage": "IIA" },
            { "match": { "T": "T1a", "N": "N1" }, "stage": "IIA" },
            { "match": { "T": "T1c", "N": "N0" }, "stage": "IA3" },
            { "match": { "T": "T1b", "N": "N0" }, "stage": "IA2" },
            { "match": { "T": "T1a", "N": "N0" }, "stage": "IA1" },
            { "match": { "T": "T1mi", "N": "N0" }, "stage": "IA1" }
        ]
    },
    "prostate_v8": {
        "name": "Tiền liệt tuyến (AJCC 8th)",
        "group": "Ung thư Tiết niệu",
        "extra": "Phân loại AJCC 8th Edition & NCCN",
        "T": [
            { "id": "T1c", "desc": "Không sờ thấy/không thấy trên hình ảnh, phát hiện qua PSA cao / sinh thiết" },
            { "id": "T2a", "desc": "U sờ thấy, ở 1/2 của 1 thùy hoặc ít hơn" },
            { "id": "T2b", "desc": "U ở hơn 1/2 của 1 thùy nhưng chưa sang thùy đối bên" },
            { "id": "T2c", "desc": "U ở cả 2 thùy" },
            { "id": "T3a", "desc": "Lan ra ngoài bao tuyến tiền liệt" },
            { "id": "T3b", "desc": "Xâm lấn túi tinh" },
            { "id": "T4", "desc": "Xâm lấn cơ quan lân cận (cơ thắt ngoài, trực tràng, cơ nâng hậu môn/vách chậu)" }
        ],
        "N": [
            { "id": "N0", "desc": "Không di căn hạch vùng (hạch chậu)" },
            { "id": "N1", "desc": "Di căn hạch vùng (hạch chậu nhỏ)" }
        ],
        "M": [
            { "id": "M0", "desc": "Không di căn xa" },
            { "id": "M1a", "desc": "Di căn hạch không thuộc vùng chậu" },
            { "id": "M1b", "desc": "Di căn xương" },
            { "id": "M1c", "desc": "Di căn các vị trí khác (gan, phổi...)" }
        ],
        "rules": [
            { "matchPrefix": { "M": "M1" }, "stage": "IVB" },
            { "match": { "N": "N1" }, "stage": "IVA" },
            { "match": { "T": "T4" }, "stage": "IVA" },
            { "matchPrefix": { "T": "T3" }, "stage": "IIIB" },
            { "matchPrefix": { "T": "T2" }, "stage": "II" },
            { "match": { "T": "T1c" }, "stage": "I" }
        ]
    }
};

/**
 * Lấy dữ liệu TNM hiện tại (ưu tiên từ localStorage nếu người dùng đã lưu)
 */
function getActiveCancerData() {
    try {
        const local = localStorage.getItem(window.CANCER_DATA_STORAGE_KEY);
        if (local) {
            return JSON.parse(local);
        }
    } catch (e) {
        console.error("Không thể tải dữ liệu từ localStorage", e);
    }
    return defaultCancerData;
}

/**
 * Lưu dữ liệu mới vào localStorage
 */
function saveActiveCancerData(data) {
    try {
        localStorage.setItem(window.CANCER_DATA_STORAGE_KEY, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error("Lỗi khi lưu dữ liệu", e);
        return false;
    }
}

/**
 * Khôi phục về dữ liệu mặc định gốc
 */
function resetActiveCancerDataToDefault() {
    localStorage.removeItem(window.CANCER_DATA_STORAGE_KEY);
}
