import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;

const th: PartialLocaleType = {
WIP: "กำลังจะมาเร็วๆ นี้...",
Error: {
Unauthorized: isApp
? "รหัส API ไม่ถูกต้อง กรุณาตรวจสอบในหน้า ตั้งค่า"
: "ไม่มีสิทธิ์เข้าถึง กรุณาใส่รหัสผ่านในหน้า ยืนยันตัวตน หรือใส่ API Key ของ OpenAI",
},
Auth: {
Title: "ต้องการรหัสผ่าน",
Tips: "กรุณาใส่รหัสผ่านด้านล่าง",
SubTips: "หรือใส่ API Key ของ OpenAI หรือ Google",
Input: "รหัสผ่าน",
Confirm: "ยืนยัน",
Later: "ภายหลัง",
},
ChatItem: {
ChatItemCount: (count: number) => ${count} ข้อความ,
},
Chat: {
SubTitle: (count: number) => ${count} ข้อความ,
EditMessage: {
Title: "แก้ไขข้อความทั้งหมด",
Topic: {
Title: "หัวข้อ",
SubTitle: "เปลี่ยนหัวข้อการสนทนาปัจจุบัน",
},
},
Actions: {
ChatList: "ไปที่รายการแชท",
CompressedHistory: "คำสั่งประวัติแบบย่อ",
Export: "ส่งออกข้อความทั้งหมดเป็น Markdown",
Copy: "คัดลอก",
Stop: "หยุด",
Retry: "ลองใหม่",
Pin: "ปักหมุด",
PinToastContent: "ปักหมุด 1 ข้อความไปยังคำสั่งบริบท",
PinToastAction: "ดู",
Delete: "ลบ",
Edit: "แก้ไข",
FullScreen: "เต็มจอ",
RefreshTitle: "รีเฟรชหัวข้อ",
RefreshToast: "ส่งคำขอรีเฟรชหัวข้อแล้ว",
},
Commands: {
new: "เริ่มแชทใหม่",
newm: "เริ่มแชทใหม่พร้อมหน้ากาก",
next: "แชทถัดไป",
prev: "แชทก่อนหน้า",
clear: "ล้างบริบท",
del: "ลบแชท",
},
InputActions: {
Stop: "หยุด",
ToBottom: "เลื่อนไปล่างสุด",
Theme: {
auto: "อัตโนมัติ",
light: "ธีมสว่าง",
dark: "ธีมมืด",
},
Prompt: "คำสั่ง",
Masks: "หน้ากาก",
Clear: "ล้างบริบท",
Settings: "ตั้งค่า",
UploadImage: "อัปโหลดรูปภาพ",
},
Rename: "เปลี่ยนชื่อแชท",
Typing: "กำลังพิมพ์…",
Input: (submitKey: string) => {
var inputHints = ${submitKey} เพื่อส่ง;
if (submitKey === String(SubmitKey.Enter)) {
inputHints += ", Shift + Enter เพื่อขึ้นบรรทัดใหม่";
}
return inputHints + ", / เพื่อค้นหาคำสั่ง, : เพื่อใช้คำสั่ง";
},
Send: "ส่ง",
Config: {
Reset: "รีเซ็ตเป็นค่าเริ่มต้น",
SaveAs: "บันทึกเป็นหน้ากาก",
},
IsContext: "คำสั่งบริบท",
ShortcutKey: {
Title: "ปุ่มลัด",
newChat: "เปิดแชทใหม่",
focusInput: "โฟกัสช่องป้อนข้อมูล",
copyLastMessage: "คัดลอกข้อความล่าสุด",
copyLastCode: "คัดลอกโค้ดล่าสุด",
showShortcutKey: "แสดงปุ่มลัด",
},
},
Export: {
Title: "ส่งออกข้อความ",
Copy: "คัดลอกทั้งหมด",
Download: "ดาวน์โหลด",
MessageFromYou: "ข้อความจากคุณ",
MessageFromChatGPT: "ข้อความจาก ChatGPT",
Share: "แชร์ไปยัง ShareGPT",
Format: {
Title: "รูปแบบการส่งออก",
SubTitle: "Markdown หรือรูปภาพ PNG",
},
IncludeContext: {
Title: "รวมบริบท",
SubTitle: "ส่งออกคำสั่งบริบทในหน้ากากหรือไม่",
},
Steps: {
Select: "เลือก",
Preview: "ดูตัวอย่าง",
},
Image: {
Toast: "กำลังจับภาพ...",
Modal: "กดค้างหรือคลิกขวาเพื่อบันทึกภาพ",
},
Artifacts: {
Title: "แชร์งานที่สร้างขึ้น",
Error: "แชร์ผิดพลาด",
},
},
Select: {
Search: "ค้นหา",
All: "เลือกทั้งหมด",
Latest: "เลือกล่าสุด",
Clear: "ล้าง",
},
Memory: {
Title: "คำสั่งความจำ",
EmptyContent: "ยังไม่มีอะไร",
Send: "ส่งความจำ",
Copy: "คัดลอกความจำ",
Reset: "รีเซ็ตเซสชัน",
ResetConfirm:
"การรีเซ็ตจะล้างประวัติการสนทนาปัจจุบันและความจำในอดีต คุณแน่ใจหรือไม่ที่จะรีเซ็ต?",
},
Home: {
NewChat: "แชทใหม่",
DeleteChat: "คุณแน่ใจหรือไม่ที่จะลบการสนทนาที่เลือก?",
DeleteToast: "ลบแชทแล้ว",
Revert: "เลิกทำ",
},
Settings: {
Title: "การตั้งค่า",
SubTitle: "ตั้งค่าทั้งหมด",
ShowPassword: "แสดงรหัสผ่าน",
Danger: {
Reset: {
Title: "รีเซ็ตการตั้งค่าทั้งหมด",
SubTitle: "รีเซ็ตทุกการตั้งค่าเป็นค่าเริ่มต้น",
Action: "รีเซ็ต",
Confirm: "ยืนยันการรีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น?",
},
Clear: {
Title: "ล้างข้อมูลทั้งหมด",
SubTitle: "ล้างข้อความและการตั้งค่าทั้งหมด",
Action: "ล้าง",
Confirm: "ยืนยันการล้างข้อความและการตั้งค่าทั้งหมด?",
},
},
Lang: {
Name: "Language", // คงไว้เป็นภาษาอังกฤษตามคำแนะนำ
All: "ภาษาทั้งหมด",
},
Avatar: "รูปประจำตัว",
FontSize: {
Title: "ขนาดตัวอักษร",
SubTitle: "ปรับขนาดตัวอักษรของเนื้อหาแชท",
},
FontFamily: {
Title: "รูปแบบตัวอักษรของแชท",
SubTitle:
"รูปแบบตัวอักษรของเนื้อหาแชท ปล่อยว่างเพื่อใช้ตัวอักษรเริ่มต้นของระบบ",
Placeholder: "ชื่อรูปแบบตัวอักษร",
},
InjectSystemPrompts: {
Title: "แทรกคำสั่งระบบ",
SubTitle: "แทรกคำสั่งระบบทั่วไปสำหรับทุกคำขอ",
},
InputTemplate: {
Title: "แม่แบบการป้อนข้อมูล",
SubTitle: "ข้อความล่าสุดจะถูกเติมลงในแม่แบบนี้",
},
Update: {
  Version: (x: string) => `เวอร์ชัน: ${x}`,
  IsLatest: "เวอร์ชันล่าสุด",
  CheckUpdate: "ตรวจสอบการอัปเดต",
  IsChecking: "กำลังตรวจสอบการอัปเดต...",
  FoundUpdate: (x: string) => `พบเวอร์ชันใหม่: ${x}`,
  GoToUpdate: "อัปเดต",
},
SendKey: "ปุ่มส่ง",
Theme: "ธีม",
TightBorder: "ขอบแคบ",
SendPreviewBubble: {
  Title: "แสดงตัวอย่างข้อความ",
  SubTitle: "แสดงตัวอย่าง Markdown ในกล่องข้อความ",
},
AutoGenerateTitle: {
  Title: "สร้างหัวข้ออัตโนมัติ",
  SubTitle: "สร้างหัวข้อที่เหมาะสมตามเนื้อหาการสนทนา",
},
Sync: {
  CloudState: "อัปเดตล่าสุด",
  NotSyncYet: "ยังไม่ได้ซิงค์",
  Success: "ซิงค์สำเร็จ",
  Fail: "ซิงค์ล้มเหลว",

  Config: {
    Modal: {
      Title: "ตั้งค่าการซิงค์",
      Check: "ตรวจสอบการเชื่อมต่อ",
    },
    SyncType: {
      Title: "ประเภทการซิงค์",
      SubTitle: "เลือกบริการซิงค์ที่คุณชอบ",
    },
    Proxy: {
      Title: "เปิดใช้งานพร็อกซี CORS",
      SubTitle: "เปิดใช้งานพร็อกซีเพื่อหลีกเลี่ยงข้อจำกัดการเข้าถึงข้ามโดเมน",
    },
    ProxyUrl: {
      Title: "จุดเชื่อมต่อพร็อกซี",
      SubTitle:
        "ใช้ได้เฉพาะกับพร็อกซี CORS ที่มาพร้อมกับโปรเจกต์นี้เท่านั้น",
    },

    WebDav: {
      Endpoint: "จุดเชื่อมต่อ WebDAV",
      UserName: "ชื่อผู้ใช้",
      Password: "รหัสผ่าน",
    },

    UpStash: {
      Endpoint: "URL REST ของ UpStash Redis",
      UserName: "ชื่อการสำรองข้อมูล",
      Password: "โทเค็น REST ของ UpStash Redis",
    },
  },

  LocalState: "ข้อมูลในเครื่อง",
  Overview: (overview: any) => {
    return `${overview.chat} แชท, ${overview.message} ข้อความ, ${overview.prompt} คำสั่ง, ${overview.mask} หน้ากาก`;
  },
  ImportFailed: "นำเข้าจากไฟล์ล้มเหลว",
},
Mask: {
  Splash: {
    Title: "หน้าจอเริ่มต้นหน้ากาก",
    SubTitle: "แสดงหน้าจอเริ่มต้นหน้ากากก่อนเริ่มแชทใหม่",
},
Builtin: {
Title: "ซ่อนหน้ากากในตัว",
SubTitle: "ซ่อนหน้ากากในตัวในรายการหน้ากาก",
},
},
Prompt: {
Disable: {
Title: "ปิดการแนะนำอัตโนมัติ",
SubTitle: "พิมพ์ / เพื่อเรียกใช้การแนะนำอัตโนมัติ",
},
List: "รายการคำสั่ง",
ListCount: (builtin: number, custom: number) =>
${builtin} คำสั่งในตัว, ${custom} คำสั่งที่ผู้ใช้กำหนดเอง,
Edit: "แก้ไข",
Modal: {
Title: "รายการคำสั่ง",
Add: "เพิ่มคำสั่ง",
Search: "ค้นหาคำสั่ง",
},
EditModal: {
Title: "แก้ไขคำสั่ง",
},
},
HistoryCount: {
Title: "จำนวนข้อความที่แนบมา",
SubTitle: "จำนวนข้อความที่ส่งมาในแต่ละคำขอ",
},
CompressThreshold: {
Title: "ขีดจำกัดการบีบอัดประวัติ",
SubTitle:
"จะทำการบีบอัดหากความยาวของข้อความที่ไม่ได้บีบอัดเกินค่านี้",
},

Usage: {
  Title: "ยอดคงเหลือในบัญชี",
  SubTitle(used: any, total: any) {
    return `ใช้ไปแล้วเดือนนี้ $${used}, วงเงิน $${total}`;
  },
  IsChecking: "กำลังตรวจสอบ...",
  Check: "ตรวจสอบ",
  NoAccess: "ใส่ API Key เพื่อตรวจสอบยอดคงเหลือ",
},
Access: {
  AccessCode: {
    Title: "รหัสเข้าถึง",
    SubTitle: "เปิดใช้งานการควบคุมการเข้าถึง",
    Placeholder: "ใส่รหัสเข้าถึง",
  },
  CustomEndpoint: {
    Title: "จุดเชื่อมต่อที่กำหนดเอง",
    SubTitle: "ใช้บริการ Azure หรือ OpenAI ที่กำหนดเอง",
  },
  Provider: {
    Title: "ผู้ให้บริการโมเดล",
    SubTitle: "เลือก Azure หรือ OpenAI",
  },
  OpenAI: {
    ApiKey: {
      Title: "API Key ของ OpenAI",
      SubTitle: "ใช้ API Key ของ OpenAI ที่กำหนดเอง",
      Placeholder: "sk-xxx",
    },

    Endpoint: {
      Title: "จุดเชื่อมต่อ OpenAI",
      SubTitle: "ต้องขึ้นต้นด้วย http(s):// หรือใช้ /api/openai เป็นค่าเริ่มต้น",
    },
  },
  Azure: {
    ApiKey: {
      Title: "API Key ของ Azure",
      SubTitle: "ตรวจสอบ API Key ของคุณจากคอนโซล Azure",
      Placeholder: "API Key ของ Azure",
    },

    Endpoint: {
      Title: "จุดเชื่อมต่อ Azure",
      SubTitle: "ตัวอย่าง: ",
    },

    ApiVerion: {
      Title: "เวอร์ชัน API ของ Azure",
      SubTitle: "ตรวจสอบเวอร์ชัน API จากคอนโซล Azure",
    },
  },
  Anthropic: {
    ApiKey: {
      Title: "API Key ของ Anthropic",
      SubTitle:
        "ใช้ API Key ของ Anthropic เพื่อข้ามข้อจำกัดการเข้าถึงด้วยรหัสผ่าน",
      Placeholder: "API Key ของ Anthropic",
    },

    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ตัวอย่าง: ",
    },

    ApiVerion: {
      Title: "เวอร์ชัน API (claude api version)",
      SubTitle: "เลือกและป้อนเวอร์ชัน API ที่ต้องการ",
    },
  },
  Baidu: {
    ApiKey: {
      Title: "API Key ของ Baidu",
      SubTitle: "ใช้ API Key ของ Baidu ที่กำหนดเอง",
      Placeholder: "API Key ของ Baidu",
    },
    SecretKey: {
      Title: "Secret Key ของ Baidu",
      SubTitle: "ใช้ Secret Key ของ Baidu ที่กำหนดเอง",
      Placeholder: "Secret Key ของ Baidu",
    },
    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ไม่รองรับ ให้กำหนดค่าใน .env",
    },
  },
  Tencent: {
    ApiKey: {
      Title: "API Key ของ Tencent",
      SubTitle: "ใช้ API Key ของ Tencent ที่กำหนดเอง",
      Placeholder: "API Key ของ Tencent",
    },
    SecretKey: {
      Title: "Secret Key ของ Tencent",
      SubTitle: "ใช้ Secret Key ของ Tencent ที่กำหนดเอง",
      Placeholder: "Secret Key ของ Tencent",
    },
    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ไม่รองรับ ให้กำหนดค่าใน .env",
    },
  },
  ByteDance: {
    ApiKey: {
      Title: "API Key ของ ByteDance",
      SubTitle: "ใช้ API Key ของ ByteDance ที่กำหนดเอง",
      Placeholder: "API Key ของ ByteDance",
    },
    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ตัวอย่าง: ",
    },
  },
  Alibaba: {
    ApiKey: {
      Title: "API Key ของ Alibaba Cloud",
      SubTitle: "ใช้ API Key ของ Alibaba Cloud ที่กำหนดเอง",
      Placeholder: "API Key ของ Alibaba Cloud",
    },
    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ตัวอย่าง: ",
    },
  },
  Moonshot: {
    ApiKey: {
      Title: "API Key ของ Moonshot",
      SubTitle: "ใช้ API Key ของ Moonshot ที่กำหนดเอง",
      Placeholder: "API Key ของ Moonshot",
    },
    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ตัวอย่าง: ",
    },
  },
  Stability: {
    ApiKey: {
      Title: "API Key ของ Stability",
      SubTitle: "ใช้ API Key ของ Stability ที่กำหนดเอง",
      Placeholder: "API Key ของ Stability",
    },
    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ตัวอย่าง: ",
    },
  },
  Iflytek: {
    ApiKey: {
      Title: "API Key ของ Iflytek",
      SubTitle: "ใช้ API Key ของ Iflytek",
      Placeholder: "API Key ของ Iflytek",
    },
    ApiSecret: {
      Title: "API Secret ของ Iflytek",
      SubTitle: "ใช้ API Secret ของ Iflytek",
      Placeholder: "API Secret ของ Iflytek",
    },
    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ตัวอย่าง: ",
    },
  },
  CustomModel: {
    Title: "โมเดลที่กำหนดเอง",
    SubTitle: "ตัวเลือกโมเดลที่กำหนดเอง คั่นด้วยเครื่องหมายจุลภาค",
  },
  Google: {
    ApiKey: {
      Title: "API Key",
      SubTitle: "รับ API Key ของคุณจาก Google AI",
      Placeholder: "ป้อน API Key ของ Google AI Studio ของคุณ",
    },

    Endpoint: {
      Title: "ที่อยู่จุดเชื่อมต่อ",
      SubTitle: "ตัวอย่าง: ",
    },

    ApiVersion: {
      Title: "เวอร์ชัน API (เฉพาะ gemini-pro)",
      SubTitle: "เลือกเวอร์ชัน API ที่ต้องการ",
    },
    GoogleSafetySettings: {
      Title: "การตั้งค่าความปลอดภัยของ Google",
      SubTitle: "เลือกระดับการกรองความปลอดภัย",
    },
  },
},

Model: "โมเดล",
CompressModel: {
  Title: "โมเดลการบีบอัด",
  SubTitle: "โมเดลที่ใช้บีบอัดประวัติ",
},
Temperature: {
  Title: "อุณหภูมิ",
  SubTitle: "ค่าที่สูงขึ้นทำให้ผลลัพธ์มีความสุ่มมากขึ้น",
},
TopP: {
  Title: "Top P",
  SubTitle: "อย่าเปลี่ยนค่านี้พร้อมกับอุณหภูมิ",
},
MaxTokens: {
  Title: "โทเค็นสูงสุด",
  SubTitle: "ความยาวสูงสุดของโทเค็นอินพุตและโทเค็นที่สร้างขึ้น",
},
PresencePenalty: {
  Title: "บทลงโทษการปรากฏ",
  SubTitle:
    "ค่าที่สูงขึ้นเพิ่มโอกาสที่จะพูดถึงหัวข้อใหม่",
},
FrequencyPenalty: {
  Title: "บทลงโทษความถี่",
  SubTitle:
    "ค่าที่สูงขึ้นลดโอกาสที่จะพูดซ้ำประโยคเดิม",
},

},
Store: {
DefaultTopic: "การสนทนาใหม่",
BotHello: "สวัสดีครับ! ผมจะช่วยอะไรคุณได้บ้างวันนี้?",
Error: "เกิดข้อผิดพลาด กรุณาลองใหม่ภายหลัง",
Prompt: {
History: (content: string) =>
"นี่คือสรุปประวัติการแชทแบบสั้นๆ: " + content,
Topic:
"กรุณาสร้างหัวข้อสั้นๆ 4-5 คำที่สรุปบทสนทนาของเรา โดยไม่ต้องมีคำนำหน้า เครื่องหมายวรรคตอน เครื่องหมายคำพูด จุด สัญลักษณ์ ตัวหนา หรือข้อความเพิ่มเติมใดๆ ลบเครื่องหมายคำพูดที่ล้อมรอบด้วย",
Summarize:
"สรุปการสนทนาอย่างสั้นๆ ภายใน 200 คำหรือน้อยกว่า เพื่อใช้เป็นคำแนะนำสำหรับบริบทในอนาคต",
},
},
Copy: {
Success: "คัดลอกไปยังคลิปบอร์ดแล้ว",
Failed: "การคัดลอกล้มเหลว กรุณาอนุญาตการเข้าถึงคลิปบอร์ด",
},
Download: {
Success: "ดาวน์โหลดเนื้อหาลงในไดเรกทอรีของคุณแล้ว",
Failed: "การดาวน์โหลดล้มเหลว",
},
Context: {
Toast: (x: any) => กับคำสั่งบริบท ${x} คำสั่ง,
Edit: "การตั้งค่าแชทปัจจุบัน",
Add: "เพิ่มคำสั่ง",
Clear: "ล้างบริบทแล้ว",
Revert: "เลิกทำ",
},
Discovery: {
Name: "การค้นพบ",
},
FineTuned: {
Sysmessage: "คุณเป็นผู้ช่วยที่",
},
SearchChat: {
Name: "ค้นหา",
Page: {
Title: "ค้นหาประวัติแชท",
Search: "ป้อนคำค้นหาเพื่อค้นหาประวัติแชท",
NoResult: "ไม่พบผลลัพธ์",
NoData: "ไม่มีข้อมูล",
Loading: "กำลังโหลด...",
  SubTitle: (count: number) => `พบ ${count} ผลลัพธ์`,
},
Item: {
  View: "ดู",
},

},
Plugin: {
Name: "ปลั๊กอิน",
Page: {
Title: "ปลั๊กอิน",
SubTitle: (count: number) => ${count} ปลั๊กอิน,
Search: "ค้นหาปลั๊กอิน",
Create: "สร้าง",
Find: "คุณสามารถหาปลั๊กอินที่น่าสนใจได้ที่ github: ",
},
Item: {
Info: (count: number) => ${count} วิธี,
View: "ดู",
Edit: "แก้ไข",
Delete: "ลบ",
DeleteConfirm: "ยืนยันการลบ?",
},
Auth: {
None: "ไม่มี",
Basic: "พื้นฐาน",
Bearer: "Bearer",
Custom: "กำหนดเอง",
CustomHeader: "ชื่อพารามิเตอร์",
Token: "โทเค็น",
Proxy: "ใช้พร็อกซี",
ProxyDescription: "ใช้พร็อกซีเพื่อแก้ไขข้อผิดพลาด CORS",
Location: "ตำแหน่ง",
LocationHeader: "ส่วนหัว",
LocationQuery: "คิวรี",
LocationBody: "เนื้อหา",
},
EditModal: {
Title: (readonly: boolean) =>
แก้ไขปลั๊กอิน ${readonly ? "(อ่านอย่างเดียว)" : ""},
Download: "ดาวน์โหลด",
Auth: "ประเภทการยืนยันตัวตน",
Content: "โครงร่าง OpenAPI",
Load: "โหลดจาก URL",
Method: "วิธี",
Error: "ข้อผิดพลาดโครงร่าง OpenAPI",
},
},
Mask: {
Name: "หน้ากาก",
Page: {
Title: "แม่แบบคำสั่ง",
SubTitle: (count: number) => ${count} แม่แบบคำสั่ง,
Search: "ค้นหาแม่แบบ",
Create: "สร้าง",
},
Item: {
Info: (count: number) => ${count} คำสั่ง,
Chat: "แชท",
View: "ดู",
Edit: "แก้ไข",
Delete: "ลบ",
DeleteConfirm: "ยืนยันการลบ?",
},
EditModal: {
Title: (readonly: boolean) =>
แก้ไขแม่แบบคำสั่ง ${readonly ? "(อ่านอย่างเดียว)" : ""},
Download: "ดาวน์โหลด",
Clone: "โคลน",
},
Config: {
Avatar: "รูปประจำตัวบอท",
Name: "ชื่อบอท",
Sync: {
Title: "ใช้การตั้งค่าทั่วไป",
SubTitle: "ใช้การตั้งค่าทั่วไปในแชทนี้",
Confirm: "ยืนยันการแทนที่การตั้งค่าที่กำหนดเองด้วยการตั้งค่าทั่วไป?",
},
HideContext: {
Title: "ซ่อนคำสั่งบริบท",
SubTitle: "ไม่แสดงคำสั่งบริบทในแชท",
},
Artifacts: {
Title: "เปิดใช้งานงานที่สร้างขึ้น",
SubTitle: "สามารถแสดงหน้า HTML เมื่อเปิดใช้งานงานที่สร้างขึ้น",
},
Share: {
Title: "แชร์หน้ากากนี้",
SubTitle: "สร้างลิงก์ไปยังหน้ากากนี้",
Action: "คัดลอกลิงก์",
},
},
},
NewChat: {
Return: "กลับ",
Skip: "เริ่มเลย",
Title: "เลือกหน้ากาก",
SubTitle: "แชทกับจิตวิญญาณหลังหน้ากาก",
More: "ค้นหาเพิ่มเติม",
NotShow: "ไม่ต้องแสดงอีก",
ConfirmNoShow: "ยืนยันการปิดใช้งาน? คุณสามารถเปิดใช้งานได้ในการตั้งค่าภายหลัง",
},

UI: {
Confirm: "ยืนยัน",
Cancel: "ยกเลิก",
Close: "ปิด",
Create: "สร้าง",
Edit: "แก้ไข",
Export: "ส่งออก",
Import: "นำเข้า",
Sync: "ซิงค์",
Config: "ตั้งค่า",
},
Exporter: {
Description: {
Title: "จะแสดงเฉพาะข้อความหลังจากล้างบริบทเท่านั้น",
},
Model: "โมเดล",
Messages: "ข้อความ",
Topic: "หัวข้อ",
Time: "เวลา",
},
URLCommand: {
Code: "ตรวจพบรหัสเข้าถึงจาก URL ต้องการใช้งานหรือไม่? ",
Settings: "ตรวจพบการตั้งค่าจาก URL ต้องการใช้งานหรือไม่?",
},
SdPanel: {
Prompt: "คำสั่ง",
NegativePrompt: "คำสั่งเชิงลบ",
PleaseInput: (name: string) => กรุณาป้อน ${name},
AspectRatio: "สัดส่วนภาพ",
ImageStyle: "สไตล์ภาพ",
OutFormat: "รูปแบบเอาต์พุต",
AIModel: "โมเดล AI",
ModelVersion: "เวอร์ชันโมเดล",
Submit: "ส่ง",
ParamIsRequired: (name: string) => ${name} จำเป็นต้องระบุ,
Styles: {
D3Model: "โมเดล 3 มิติ",
AnalogFilm: "ฟิล์มอนาล็อก",
Anime: "อนิเมะ",
Cinematic: "ภาพยนตร์",
ComicBook: "การ์ตูน",
DigitalArt: "ดิจิทัลอาร์ต",
Enhance: "ปรับปรุง",
FantasyArt: "แฟนตาซีอาร์ต",
Isometric: "ไอโซเมตริก",
LineArt: "ภาพลายเส้น",
LowPoly: "โพลีต่ำ",
ModelingCompound: "สารประกอบสำหรับขึ้นรูป",
NeonPunk: "นีออนพังก์",
Origami: "โอริกามิ",
Photographic: "ภาพถ่าย",
PixelArt: "พิกเซลอาร์ต",
TileTexture: "พื้นผิวกระเบื้อง",
},
},
Sd: {
SubTitle: (count: number) => ${count} รูปภาพ,
Actions: {
Params: "ดูพารามิเตอร์",
Copy: "คัดลอกคำสั่ง",
Delete: "ลบ",
Retry: "ลองใหม่",
ReturnHome: "กลับหน้าหลัก",
History: "ประวัติ",
},
EmptyRecord: "ยังไม่มีรูปภาพ",
Status: {
Name: "สถานะ",
Success: "สำเร็จ",
Error: "ผิดพลาด",
Wait: "กำลังรอ",
Running: "กำลังทำงาน",
},
Danger: {
Delete: "ยืนยันการลบ?",
},
GenerateParams: "สร้างพารามิเตอร์",
Detail: "รายละเอียด",
},
};


export default th;
