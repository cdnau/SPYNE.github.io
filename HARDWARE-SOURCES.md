# แหล่งรูป Hardware

ค้นผ่าน Google เมื่อ 25 ตุลาคม 2026 แล้วตรวจสอบกับหน้าสินค้าต้นทางและข้อความบนบอร์ด
รูปเป็นภาพผลิตภัณฑ์สำหรับประกอบคำอธิบาย ไม่ใช่ภาพชิ้นงานหรือผลทดลองของทีม

## Arduino UNO R4 WiFi

- รุ่นในไฟล์: Arduino UNO R4 WiFi
- รุ่นที่ตรวจจากต้นทาง: Arduino UNO R4 WiFi, SKU ABX00087
- Google: https://www.google.com/search?q=Arduino+UNO+R4+WiFi+official+product
- แหล่งภาพ: https://store.arduino.cc/products/uno-r4-wifi
- ไฟล์ภาพต้นทาง: https://cdn.shopify.com/s/files/1/0438/4735/2471/files/ABX00087_00.front_934x700.jpg?v=1749566714
- ไฟล์ในเว็บ: docs/assets/hardware/arduino-uno-r4-wifi.jpg
- ตรวจภาพแล้วเห็นชื่อ UNO R4 WIFI และ LED matrix บนบอร์ด

## HC-SR04

- รุ่นในไฟล์: HC-SR04 จำนวน 2 ตัว
- ภาพต้นทาง: HC-SR04 รุ่นมาตรฐาน 5V, SparkFun SKU SEN-15569 (รหัสร้านของแหล่งภาพ)
- Google: https://www.google.com/search?q=HC-SR04+5V+SparkFun+15569
- แหล่งภาพ: https://www.sparkfun.com/ultrasonic-distance-sensor-hc-sr04.html
- ไฟล์ภาพต้นทาง: https://cdn.sparkfun.com/assets/parts/1/3/5/0/8/15569-Ultrasonic_Distance_Sensor_-_HC-SR04-01a.jpg
- ไฟล์ในเว็บ: docs/assets/hardware/hc-sr04.jpg
- ตรวจภาพแล้วเห็นชื่อ HC-SR04 และขา VCC, Trig, Echo, GND

## อุปกรณ์ที่ยังไม่มีรูป

ผู้ใช้ยืนยันว่าไม่ทราบรหัสรุ่นของ LCD, RGB LED และ Buzzer จึงไม่เลือกรูปคนละรุ่นมาแทน รวมถึง Breadboard, Jumper wires และ Resistors ที่ไม่มีรายละเอียดเพียงพอ
หน้าเว็บแสดงชื่อและข้อมูลเท่าที่มีในไฟล์ พร้อมสถานะรอยืนยันรุ่น
เอกสารเดิมระบุ Active Buzzer แต่โค้ดระบุ Passive Buzzer และใช้ tone() จึงยังไม่ยืนยันชนิดจริง

## ที่มาของรายละเอียดโครงงาน

- เว็บไซต์: SPYNE.github.io.zip ที่ผู้ใช้แนบในรอบนี้
- Firmware: SPYNE.ino ที่ผู้ใช้แนบก่อนหน้า คัดลอกครบโดยไม่แก้โปรแกรม
- Cloud variables: Cloud Varibale.docx ที่ผู้ใช้แนบก่อนหน้า
- ยังไม่ได้รับ thingProperties.h หรือการตั้งค่าเชื่อมต่อ Arduino Cloud จึงไม่อ้างว่าสามารถคอมไพล์ firmware ได้ครบจากไฟล์นี้เพียงไฟล์เดียว
