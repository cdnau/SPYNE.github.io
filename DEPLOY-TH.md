# เผยแพร่ SPYNE บน GitHub Pages

ชุดนี้พร้อมสำหรับรีโป https://github.com/cdnau/SPYNE.github.io
ที่อยู่เมื่อ deploy สำเร็จ: https://cdnau.github.io/SPYNE.github.io/

## ค่าที่ใช้ตั้งค่า

| รายการ | ค่า |
| --- | --- |
| Repository | cdnau/SPYNE.github.io |
| Source | Deploy from a branch |
| Branch | main |
| Folder | /docs |
| Custom domain | เว้นว่าง |
| Build command | ไม่ต้องใช้ |

## โครงสร้างที่ต้องเห็นในรีโป

```text
SPYNE/
├── README.md                 ← README โครงงานเดิม
├── assets/                   ← รูป/ไฟล์โครงงานเดิม
└── docs/                     ← อัปโหลดโฟลเดอร์นี้จาก ZIP
    ├── index.html
    ├── style.css
    ├── app.js
    ├── content.js
    ├── demo-data.js
    ├── .nojekyll
    └── assets/
        ├── 0002.jpg
        ├── 0029.jpg
        ├── 0057.png
        └── posture-diagram.svg
```

แตก ZIP ก่อนอัปโหลด อย่าอัปโหลดเฉพาะไฟล์ ZIP และอย่าให้โฟลเดอร์ซ้อนเป็น SPYNE/docs หรือ docs/docs ภายในรีโป
คู่มือ DEPLOY-TH.md และ EDIT-GUIDE.md เก็บไว้อ่านบนเครื่องได้ ไม่จำเป็นต้องอัปโหลด

## อัปโหลดและเปิด Pages
1. แตกไฟล์ SPYNE.github.io-updated.zip
2. เข้าสู่ระบบ GitHub ด้วยบัญชีที่มีสิทธิ์แก้ไข cdnau/SPYNE.github.io
3. เปิด https://github.com/cdnau/SPYNE.github.io แล้วเลือก Add file → Upload files
4. ลากโฟลเดอร์ docs ทั้งโฟลเดอร์เข้าไป ตรวจว่าไฟล์อยู่ที่ docs/index.html และ docs/assets/ แล้ว Commit changes ลง main
5. ไป https://github.com/cdnau/SPYNE.github.io/settings/pages
6. ใน Build and deployment เลือก Source: Deploy from a branch
7. เลือก Branch: main และ Folder: /docs แล้วกด Save
8. รอ GitHub แสดงว่าเผยแพร่สำเร็จ ตรวจสถานะที่ Actions หากมีข้อผิดพลาด
9. เปิด https://cdnau.github.io/SPYNE.github.io/

## ตรวจหลังเผยแพร่

- หน้า Settings → Pages แสดงลิงก์เว็บไซต์ และงาน Pages ใน Actions สำเร็จ
- เปิดหน้าเว็บแล้วเห็นธีมปัจจุบัน รูปสมาชิก และภาพแนวคิด
- กดเมนูและปุ่มจำลองท่านั่งได้
- ถ้าได้ 404 ให้ตรวจว่าเลือก main /docs และมี docs/index.html จริง
- ถ้ารูปหรือ CSS หาย ให้ตรวจว่าอัปโหลดไฟล์ใน docs ครบและชื่อไฟล์ตรงตัวพิมพ์เล็ก/ใหญ่
- ถ้าเห็นหน้าเก่า ให้รอ Actions สำเร็จ แล้วรีเฟรชด้วย Ctrl+F5

ข้อความ commit ที่ใช้ได้: Publish SPYNE presentation website on GitHub Pages

อ้างอิง: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## แก้ไขคลิปและรูปภายหลัง
- แก้ docs/content.js เพื่อใส่ youtubeUrl และ src ของสื่อทดลอง
- อัปโหลดไฟล์ภาพ/วิดีโอไว้ที่ docs/assets/ โดยใช้ path เช่น assets/prototype.jpg
- แก้ผลทดลองใน docs/index.html เมื่อทีมมีข้อมูลจริง
- เมื่อ commit การแก้ไขลง main แล้ว Pages จะอัปเดตตาม source ที่ตั้งไว้

ไม่มีขั้นตอน npm install หรือ build เว็บใช้ HTML/CSS/JavaScript โดยตรง และใช้ path สัมพัทธ์รองรับ /SPYNE/
การ deploy ยังไม่เกิดขึ้นจากการเตรียมไฟล์ชุดนี้ ต้องอัปโหลดและเปิด Pages ตามขั้นตอนด้านบนก่อน
