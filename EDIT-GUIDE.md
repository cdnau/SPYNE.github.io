# แก้เว็บตรงไหน

โค้ดจัดบรรทัดและเยื้องแล้ว ไม่ต้องติดตั้งเครื่องมือ build

| ต้องการแก้ | ไฟล์ | คำที่ใช้ค้นหา (Ctrl+F) |
| --- | --- | --- |
| ชื่อและคำโปรยหน้าแรก | docs/index.html | 01. หน้าแรก |
| แนวคิดโครงการ | docs/index.html | 03. แนวคิด |
| คลิป YouTube | docs/content.js | youtubeUrl |
| ภาพและคลิปทดลอง | docs/content.js | evidence |
| ผลการทดลองจริง | docs/index.html | 07. ผลการทดลอง |
| รายการอุปกรณ์และ Cloud | docs/index.html | 08. อุปกรณ์ |
| รายชื่อและรูปสมาชิก | docs/index.html | 09. ทีมผู้จัดทำ |
| สีหลักของเว็บ | docs/style.css | :root |
| การแสดงผลมือถือ | docs/style.css | 09. หน้าจอ |
| ภาพคนนั่ง | docs/assets/posture-diagram.svg | ขา |
| ข้อมูลจำลองท่านั่ง | docs/demo-data.js | code |
| การทำงานของปุ่มและคลิป | docs/app.js | 01. หรือ 02. หรือ 03. |

## เพิ่มคลิป YouTube

แก้ใน docs/content.js:

```js
youtubeUrl: 'https://www.youtube.com/watch?v=รหัสวิดีโอ',
```

## เพิ่มภาพหรือวิดีโอทดลอง

1. วางไฟล์ที่ docs/assets เช่น prototype.jpg
2. แก้รายการที่ต้องการใน docs/content.js:

```js
{
  title: 'ชิ้นงานและการติดตั้ง',
  note: 'คำอธิบายภาพที่ทีมถ่ายเอง',
  src: 'assets/prototype.jpg',
  type: 'image'
}
```

วิดีโอให้ใช้ type: 'video' และไฟล์เช่น assets/test.mp4

## สำหรับ GitHub Pages

ชุด ZIP สำหรับ GitHub Pages ใช้โฟลเดอร์ docs แทน docs ทุกไฟล์ด้านบนจึงอยู่ใน docs/ เช่น docs/content.js หลังแก้ให้อัปโหลดไฟล์ขึ้นรีโป แล้ว Pages จะเผยแพร่ตาม main /docs ที่ตั้งไว้

สื่อทดลองและผลลัพธ์จริงรอทีมจัดทำ ข้อมูลจำลองในหน้าเว็บมีป้ายกำกับ และโค้ดอุปกรณ์ยังอยู่ระหว่างพัฒนา


## ส่วนที่เพิ่ม: บทคัดย่อ Hardware และ Source Code

- บทคัดย่อไทย/อังกฤษ: docs/index.html ค้นหา id="abstract"
- รูป Hardware และเครดิต: docs/index.html ค้นหา id="hardware"
- ตารางขา ตัวแปร Cloud และตรรกะ: docs/index.html ค้นหา id="technical-details"
- โค้ดอุปกรณ์ต้นฉบับ: docs/source/SPYNE.ino
- โค้ดที่แสดงบนหน้าเว็บ: docs/index.html ค้นหา id="firmware-code" (ต้อง escape &, <, > หากแก้ด้วยมือ)
- เมื่อเปลี่ยน firmware ให้เปลี่ยนทั้งไฟล์ดาวน์โหลดและเนื้อหาที่แสดงบนหน้าเว็บให้ตรงกัน
- สไตล์เฉพาะส่วนที่เพิ่ม: docs/project-details.css
- ปุ่มคัดลอกโค้ด: docs/source-viewer.js
- แหล่งรูปและผลการยืนยันรุ่น: HARDWARE-SOURCES.md
