import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;

const th: PartialLocaleType = {
  "WIP": "กำลังจะมาเร็วๆ นี้...",
  "Error": {
    "Unauthorized": isApp
      ? "คีย์ API ไม่ถูกต้อง กรุณาตรวจสอบในหน้าการตั้งค่า [Settings](/#/settings)."
      : "การเข้าถึงไม่ได้รับอนุญาต กรุณาใส่รหัสเข้าถึงในหน้า [auth](/#/auth) หรือใส่คีย์ API ของ OpenAI ของคุณ.",
  },
  "Auth": {
    "Title": "ต้องการรหัสเข้าถึง",
    "Tips": "กรุณาใส่รหัสเข้าถึงด้านล่าง",
    "SubTips": "หรือใส่คีย์ API ของ OpenAI หรือ Google",
    "Input": "รหัสเข้าถึง",
    "Confirm": "ยืนยัน",
    "Later": "ภายหลัง",
  },
  "ChatItem": {
    "ChatItemCount": (count: number) => `${count} ข้อความ`,
  },
  "Chat": {
    "SubTitle": (count: number) => `${count} ข้อความ`,
    "EditMessage": {
      "Title": "แก้ไขข้อความทั้งหมด",
      "Topic": {
        "Title": "หัวข้อ",
        "SubTitle": "เปลี่ยนหัวข้อปัจจุบัน",
      },
    },
    "Actions": {
      "ChatList": "ไปที่รายการแชท",
      "CompressedHistory": "บันทึกประวัติการสนทนาแบบย่อ",
      "Export": "ส่งออกข้อความทั้งหมดเป็น Markdown",
      "Copy": "คัดลอก",
      "Stop": "หยุด",
      "Retry": "ลองใหม่",
      "Pin": "ปักหมุด",
      "PinToastContent": "ปักหมุด 1 ข้อความไปยังคำสั่งบริบท",
      "PinToastAction": "ดู",
      "Delete": "ลบ",
      "Edit": "แก้ไข",
      "FullScreen": "เต็มจอ",
      "RefreshTitle": "รีเฟรชหัวข้อ",
      "RefreshToast": "ส่งคำขอรีเฟรชหัวข้อแล้ว",
    },
    "Commands": {
      "new": "เริ่มแชทใหม่",
      "newm": "เริ่มแชทใหม่พร้อมหน้ากาก",
      "next": "แชทถัดไป",
      "prev": "แชทก่อนหน้า",
      "clear": "ล้างบริบท",
      "del": "ลบแชท",
    },
    "InputActions": {
      "Stop": "หยุด",
      "ToBottom": "ไปที่ล่าสุด",
      "Theme": {
        "auto": "อัตโนมัติ",
        "light": "ธีมสว่าง",
        "dark": "ธีมมืด",
      },
      "Prompt": "คำสั่ง",
      "Masks": "หน้ากาก",
      "Clear": "ล้างบริบท",
      "Settings": "การตั้งค่า",
      "UploadImage": "อัปโหลดรูปภาพ",
    },
    "Rename": "เปลี่ยนชื่อแชท",
    "Typing": "กำลังพิมพ์...",
    "Input": (submitKey: string) => {
      var inputHints = `${submitKey} เพื่อส่ง`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter เพื่อขึ้นบรรทัดใหม่";
      }
      return inputHints + ", / เพื่อค้นหาคำสั่ง, : เพื่อใช้คำสั่ง";
    },
    "Send": "ส่ง",
    "Config": {
      "Reset": "รีเซ็ตเป็นค่าเริ่มต้น",
      "SaveAs": "บันทึกเป็นหน้ากาก",
    },
    "IsContext": "คำสั่งบริบท",
    "ShortcutKey": {
      "Title": "คีย์ลัด",
      "newChat": "เปิดแชทใหม่",
      "focusInput": "โฟกัสที่ช่องพิมพ์",
      "copyLastMessage": "คัดลอกข้อความล่าสุด",
      "copyLastCode": "คัดลอกโค้ดบล็อกล่าสุด",
      "showShortcutKey": "แสดงคีย์ลัด",
    },
  },
  "Export": {
    "Title": "ส่งออกข้อความ",
    "Copy": "คัดลอกทั้งหมด",
    "Download": "ดาวน์โหลด",
    "MessageFromYou": "ข้อความจากคุณ",
    "MessageFromChatGPT": "ข้อความจาก ChatGPT",
    "Share": "แชร์ไปที่ ShareGPT",
    "Format": {
      "Title": "รูปแบบการส่งออก",
      "SubTitle": "Markdown หรือรูปภาพ PNG",
    },
    "IncludeContext": {
      "Title": "รวมบริบท",
      "SubTitle": "ส่งออกคำสั่งบริบทในหน้ากากหรือไม่",
    },
    "Steps": {
      "Select": "เลือก",
      "Preview": "ดูตัวอย่าง",
    },
    "Image": {
      "Toast": "กำลังจับภาพ...",
      "Modal": "กดค้างหรือคลิกขวาเพื่อบันทึกรูปภาพ",
    },
    "Artifacts": {
      "Title": "แชร์สิ่งประดิษฐ์",
      "Error": "เกิดข้อผิดพลาดในการแชร์",
    },
  },
  "Select": {
    "Search": "ค้นหา",
    "All": "เลือกทั้งหมด",
    "Latest": "เลือกล่าสุด",
    "Clear": "ล้าง",
  },
  "Memory": {
    "Title": "คำสั่งความจำ",
    "EmptyContent": "ยังไม่มีอะไร",
    "Send": "ส่งความจำ",
    "Copy": "คัดลอกความจำ",
    "Reset": "รีเซ็ตเซสชัน",
    "ResetConfirm": "การรีเซ็ตจะล้างประวัติการสนทนาและความจำเก่า คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ต?",
  },
  "Home": {
    "NewChat": "แชทใหม่",
    "DeleteChat": "ยืนยันการลบการสนทนาที่เลือก?",
    "DeleteToast": "ลบแชทแล้ว",
    "Revert": "ย้อนกลับ",
  },
  "Settings": {
    "Title": "การตั้งค่า",
    "SubTitle": "การตั้งค่าทั้งหมด",
    "ShowPassword": "แสดงรหัสผ่าน",
    "Danger": {
      "Reset": {
        "Title": "รีเซ็ตการตั้งค่าทั้งหมด",
        "SubTitle": "รีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น",
        "Action": "รีเซ็ต",
        "Confirm": "ยืนยันการรีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น?",
      },
      "Clear": {
        "Title": "ล้างข้อมูลทั้งหมด",
        "SubTitle": "ล้างข้อความและการตั้งค่าทั้งหมด",
        "Action": "ล้าง",
        "Confirm": "ยืนยันการล้างข้อความและการตั้งค่าทั้งหมด?",
      },
    },
    "Lang": {
      "Name": "Language", // คำนี้ไม่แปลตามคำแนะนำ
      "All": "ทุกภาษา",
    },
    "Avatar": "อวาตาร์",
    "FontSize": {
      "Title": "ขนาดตัวอักษร",
      "SubTitle": "ปรับขนาดตัวอักษรของเนื้อหาแชท",
    },
    "FontFamily": {
      "Title": "ฟอนต์ของแชท",
      "SubTitle": "ฟอนต์ของเนื้อหาแชท ปล่อยว่างเพื่อใช้ฟอนต์เริ่มต้น",
      "Placeholder": "ชื่อฟอนต์",
    },
    "InjectSystemPrompts": {
      "Title": "แทรกคำสั่งระบบ",
      "SubTitle": "แทรกคำสั่งระบบทั่วโลกสำหรับทุกคำขอ",
    },
    "InputTemplate": {
      "Title": "แม่แบบการป้อนข้อมูล",
      "SubTitle": "ข้อความล่าสุดจะถูกเติมลงในแม่แบบนี้",
    },
    "Update": {
      "Version": (x: string) => `เวอร์ชัน: ${x}`,
      "IsLatest": "เป็นเวอร์ชันล่าสุด",
      "CheckUpdate": "ตรวจสอบการอัปเดต",
      "IsChecking": "กำลังตรวจสอบการอัปเดต...",
      "FoundUpdate": (x: string) => `พบเวอร์ชันใหม่: ${x}`,
      "GoToUpdate": "อัปเดต",
    },
    "SendKey": "คีย์ส่ง",
    "Theme": "ธีม",
    "TightBorder": "ขอบแน่น",
    "SendPreviewBubble": {
      "Title": "แสดงตัวอย่างก่อนส่ง",
      "SubTitle": "แสดงตัวอย่าง markdown ในฟองข้อความ",
    },
    "AutoGenerateTitle": {
      "Title": "สร้างหัวข้ออัตโนมัติ",
      "SubTitle": "สร้างหัวข้อที่เหมาะสมตามเนื้อหาการสนทนา",
    },
    "Sync": {
      "CloudState": "อัปเดตล่าสุด",
      "NotSyncYet": "ยังไม่ได้ซิงค์",
      "Success": "ซิงค์สำเร็จ",
      "Fail": "ซิงค์ล้มเหลว",
      "Config": {
        "Modal": {
          "Title": "การตั้งค่าการซิงค์",
          "Check": "ตรวจสอบการเชื่อมต่อ",
        },
        "SyncType": {
          "Title": "ประเภทการซิงค์",
          "SubTitle": "เลือกบริการซิงค์ที่คุณชื่นชอบ",
        },
        "Proxy": {
          "Title": "เปิดใช้งานพร็อกซี CORS",
          "SubTitle": "เปิดใช้งานพร็อกซีเพื่อหลีกเลี่ยงข้อจำกัดการข้ามโดเมน",
        },
        "ProxyUrl": {
          "Title": "ปลายทางพร็อกซี",
          "SubTitle": "ใช้ได้เฉพาะกับพร็อกซี CORS ที่สร้างขึ้นในโครงการนี้",
        },
        "WebDav": {
          "Endpoint": "ปลายทาง WebDAV",
          "UserName": "ชื่อผู้ใช้",
          "Password": "รหัสผ่าน",
        },
        "UpStash": {
          "Endpoint": "URL ของ UpStash Redis REST",
          "UserName": "ชื่อสำรอง",
          "Password": "โทเค็น UpStash Redis REST",
        },
      },
      "LocalState": "ข้อมูลในเครื่อง",
      "Overview": (overview: any) => {
        return `${overview.chat} แชท, ${overview.message} ข้อความ, ${overview.prompt} คำสั่ง, ${overview.mask} หน้ากาก`;
      },
      "ImportFailed": "นำเข้าจากไฟล์ล้มเหลว",
    },
    "Mask": {
      "Splash": {
        "Title": "หน้าจอหน้ากาก",
        "SubTitle": "แสดงหน้าจอหน้ากากก่อนเริ่มแชทใหม่",
      },
      "Builtin": {
        "Title": "ซ่อนหน้ากากที่มีอยู่",
        "SubTitle": "ซ่อนหน้ากากที่มีอยู่ในรายการหน้ากาก",
      },
    },
    "Prompt": {
      "Disable": {
        "Title": "ปิดการเติมคำอัตโนมัติ",
        "SubTitle": "พิมพ์ / เพื่อเรียกการเติมคำอัตโนมัติ",
      },
      "List": "รายการคำสั่ง",
      "ListCount": (builtin: number, custom: number) =>
        `${builtin} คำสั่งในตัว, ${custom} คำสั่งที่ผู้ใช้กำหนด`,
      "Edit": "แก้ไข",
      "Modal": {
        "Title": "รายการคำสั่ง",
        "Add": "เพิ่มหนึ่งคำสั่ง",
        "Search": "ค้นหาคำสั่ง",
      },
      "EditModal": {
        "Title": "แก้ไขคำสั่ง",
      },
    },
    "HistoryCount": {
      "Title": "จำนวนข้อความที่แนบมา",
      "SubTitle": "จำนวนข้อความที่ส่งต่อคำขอแต่ละครั้ง",
    },
    "CompressThreshold": {
      "Title": "เกณฑ์การบีบอัดประวัติ",
      "SubTitle": "จะบีบอัดหากความยาวของข้อความที่ไม่บีบอัดเกินค่า",
    },
    "Usage": {
      "Title": "ยอดคงเหลือบัญชี",
      "SubTitle": (used: any, total: any) => `ใช้ไปในเดือนนี้ ${used}, สมัครสมาชิก ${total}`,
      "IsChecking": "กำลังตรวจสอบ...",
      "Check": "ตรวจสอบ",
      "NoAccess": "ใส่คีย์ API เพื่อดูยอดคงเหลือ",
    },
    "Access": {
      "AccessCode": {
        "Title": "รหัสเข้าถึง",
        "SubTitle": "เปิดใช้งานการควบคุมการเข้าถึง",
        "Placeholder": "ใส่รหัส",
      },
      "CustomEndpoint": {
        "Title": "ปลายทางที่กำหนดเอง",
        "SubTitle": "ใช้บริการ Azure หรือ OpenAI ที่กำหนดเอง",
      },
      "Provider": {
        "Title": "ผู้ให้บริการโมเดล",
        "SubTitle": "เลือก Azure หรือ OpenAI",
      },
      "OpenAI": {
        "ApiKey": {
          "Title": "คีย์ API ของ OpenAI",
          "SubTitle": "ใช้คีย์ API ของ OpenAI ที่กำหนดเอง",
          "Placeholder": "sk-xxx",
        },
        "Endpoint": {
          "Title": "ปลายทาง OpenAI",
          "SubTitle": "ต้องเริ่มต้นด้วย http(s):// หรือใช้ /api/openai เป็นค่าเริ่มต้น",
        },
      },
      "Azure": {
        "ApiKey": {
          "Title": "คีย์ API ของ Azure",
          "SubTitle": "ตรวจสอบคีย์ API ของคุณจากคอนโซล Azure",
          "Placeholder": "คีย์ API ของ Azure",
        },
        "Endpoint": {
          "Title": "ปลายทาง Azure",
          "SubTitle": "ตัวอย่าง: ",
        },
        "ApiVerion": {
          "Title": "เวอร์ชัน API ของ Azure",
          "SubTitle": "ตรวจสอบเวอร์ชัน API ของคุณจากคอนโซล Azure",
        },
      },
      "Anthropic": {
        "ApiKey": {
          "Title": "คีย์ API ของ Anthropic",
          "SubTitle": "ใช้คีย์ Anthropic ที่กำหนดเองเพื่อข้ามข้อจำกัดการเข้าถึงด้วยรหัสผ่าน",
          "Placeholder": "คีย์ API ของ Anthropic",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ตัวอย่าง: ",
        },
        "ApiVerion": {
          "Title": "เวอร์ชัน API (เวอร์ชัน API ของ Claude)",
          "SubTitle": "เลือกและใส่เวอร์ชัน API ที่เฉพาะเจาะจง",
        },
      },
      "Baidu": {
        "ApiKey": {
          "Title": "คีย์ API ของ Baidu",
          "SubTitle": "ใช้คีย์ API ของ Baidu ที่กำหนดเอง",
          "Placeholder": "คีย์ API ของ Baidu",
        },
        "SecretKey": {
          "Title": "คีย์ลับของ Baidu",
          "SubTitle": "ใช้คีย์ลับของ Baidu ที่กำหนดเอง",
          "Placeholder": "คีย์ลับของ Baidu",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ไม่รองรับ, กำหนดค่าใน .env",
        },
      },
      "Tencent": {
        "ApiKey": {
          "Title": "คีย์ API ของ Tencent",
          "SubTitle": "ใช้คีย์ API ของ Tencent ที่กำหนดเอง",
          "Placeholder": "คีย์ API ของ Tencent",
        },
        "SecretKey": {
          "Title": "คีย์ลับของ Tencent",
          "SubTitle": "ใช้คีย์ลับของ Tencent ที่กำหนดเอง",
          "Placeholder": "คีย์ลับของ Tencent",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ไม่รองรับ, กำหนดค่าใน .env",
        },
      },
      "ByteDance": {
        "ApiKey": {
          "Title": "คีย์ API ของ ByteDance",
          "SubTitle": "ใช้คีย์ API ของ ByteDance ที่กำหนดเอง",
          "Placeholder": "คีย์ API ของ ByteDance",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ตัวอย่าง: ",
        },
      },
      "Alibaba": {
        "ApiKey": {
          "Title": "คีย์ API ของ Alibaba",
          "SubTitle": "ใช้คีย์ API ของ Alibaba Cloud ที่กำหนดเอง",
          "Placeholder": "คีย์ API ของ Alibaba Cloud",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ตัวอย่าง: ",
        },
      },
      "Moonshot": {
        "ApiKey": {
          "Title": "คีย์ API ของ Moonshot",
          "SubTitle": "ใช้คีย์ API ของ Moonshot ที่กำหนดเอง",
          "Placeholder": "คีย์ API ของ Moonshot",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ตัวอย่าง: ",
        },
      },
      "Stability": {
        "ApiKey": {
          "Title": "คีย์ API ของ Stability",
          "SubTitle": "ใช้คีย์ API ของ Stability ที่กำหนดเอง",
          "Placeholder": "คีย์ API ของ Stability",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ตัวอย่าง: ",
        },
      },
      "Iflytek": {
        "ApiKey": {
          "Title": "คีย์ API ของ Iflytek",
          "SubTitle": "ใช้คีย์ API ของ Iflytek",
          "Placeholder": "คีย์ API ของ Iflytek",
        },
        "ApiSecret": {
          "Title": "คีย์ลับของ Iflytek",
          "SubTitle": "ใช้คีย์ลับของ Iflytek",
          "Placeholder": "คีย์ลับของ Iflytek",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ตัวอย่าง: ",
        },
      },
      "CustomModel": {
        "Title": "โมเดลที่กำหนดเอง",
        "SubTitle": "ตัวเลือกโมเดลที่กำหนดเอง แยกด้วยเครื่องหมายจุลภาค",
      },
      "Google": {
        "ApiKey": {
          "Title": "คีย์ API",
          "SubTitle": "รับคีย์ API ของคุณจาก Google AI",
          "Placeholder": "ใส่คีย์ API ของ Google AI Studio",
        },
        "Endpoint": {
          "Title": "ที่อยู่ปลายทาง",
          "SubTitle": "ตัวอย่าง: ",
        },
        "ApiVersion": {
          "Title": "เวอร์ชัน API (เฉพาะสำหรับ gemini-pro)",
          "SubTitle": "เลือกเวอร์ชัน API ที่เฉพาะเจาะจง",
        },
        "GoogleSafetySettings": {
          "Title": "การตั้งค่าความปลอดภัยของ Google",
          "SubTitle": "เลือกระดับการกรองความปลอดภัย",
        },
      },
    },
    "Model": "โมเดล",
    "CompressModel": {
      "Title": "โมเดลการบีบอัด",
      "SubTitle": "โมเดลที่ใช้ในการบีบอัดประวัติ",
    },
    "Temperature": {
      "Title": "อุณหภูมิ",
      "SubTitle": "ค่าที่มากขึ้นจะทำให้ผลลัพธ์มีความสุ่มมากขึ้น",
    },
    "TopP": {
      "Title": "Top P",
      "SubTitle": "อย่าปรับค่านี้พร้อมกับอุณหภูมิ",
    },
    "MaxTokens": {
      "Title": "จำนวนโทเค็นสูงสุด",
      "SubTitle": "ความยาวสูงสุดของโทเค็นที่ป้อนและโทเค็นที่สร้าง",
    },
    "PresencePenalty": {
      "Title": "บทลงโทษการปรากฏตัว",
      "SubTitle": "ค่าที่มากขึ้นจะเพิ่มโอกาสในการพูดถึงหัวข้อใหม่",
    },
    "FrequencyPenalty": {
      "Title": "บทลงโทษความถี่",
      "SubTitle": "ค่าที่มากขึ้นจะลดโอกาสในการพูดซ้ำบรรทัดเดิม",
    },
  },
  "Store": {
    "DefaultTopic": "การสนทนาใหม่",
    "BotHello": "สวัสดี! มีอะไรให้ช่วยไหม?",
    "Error": "เกิดข้อผิดพลาด กรุณาลองใหม่ภายหลัง.",
    "Prompt": {
      "History": (content: string) => "นี่คือสรุปประวัติการสนทนา: " + content,
      "Topic": "กรุณาสร้างหัวข้อสรุปการสนทนาใน 4-5 คำ โดยไม่ต้องมีเครื่องหมายวรรคตอนหรือสัญลักษณ์ใดๆ",
      "Summarize": "สรุปการสนทนาใน 200 คำหรือน้อยกว่า เพื่อใช้เป็นบริบทในอนาคต",
    },
  },
  "Copy": {
    "Success": "คัดลอกไปยังคลิปบอร์ดแล้ว",
    "Failed": "คัดลอกล้มเหลว กรุณาอนุญาตการเข้าถึงคลิปบอร์ด",
  },
  "Download": {
    "Success": "ดาวน์โหลดเนื้อหาไปยังไดเรกทอรีของคุณแล้ว",
    "Failed": "ดาวน์โหลดล้มเหลว",
  },
  "Context": {
    "Toast": (x: any) => `มี ${x} คำสั่งบริบท`,
    "Edit": "การตั้งค่าแชทปัจจุบัน",
    "Add": "เพิ่มคำสั่ง",
    "Clear": "ล้างบริบท",
    "Revert": "ย้อนกลับ",
  },
  "Discovery": {
    "Name": "การค้นพบ",
  },
  "FineTuned": {
    "Sysmessage": "คุณคือผู้ช่วยที่",
  },
  "SearchChat": {
    "Name": "ค้นหา",
    "Page": {
      "Title": "ค้นหาประวัติแชท",
      "Search": "ใส่คำค้นหาเพื่อค้นหาประวัติแชท",
      "NoResult": "ไม่พบผลลัพธ์",
      "NoData": "ไม่มีข้อมูล",
      "Loading": "กำลังโหลด...",
      "SubTitle": (count: number) => `พบ ${count} ผลลัพธ์`,
    },
    "Item": {
      "View": "ดู",
    },
  },
  "Plugin": {
    "Name": "ปลั๊กอิน",
    "Page": {
      "Title": "ปลั๊กอิน",
      "SubTitle": (count: number) => `${count} ปลั๊กอิน`,
      "Search": "ค้นหาปลั๊กอิน",
      "Create": "สร้าง",
      "Find": "คุณสามารถค้นหาปลั๊กอินที่ยอดเยี่ยมได้ที่ github: ",
    },
    "Item": {
      "Info": (count: number) => `${count} วิธีการ`,
      "View": "ดู",
      "Edit": "แก้ไข",
      "Delete": "ลบ",
      "DeleteConfirm": "ยืนยันการลบ?",
    },
    "Auth": {
      "None": "ไม่มี",
      "Basic": "พื้นฐาน",
      "Bearer": "Bearer",
      "Custom": "กำหนดเอง",
      "CustomHeader": "ชื่อพารามิเตอร์",
      "Token": "โทเค็น",
      "Proxy": "ใช้พร็อกซี",
      "ProxyDescription": "ใช้พร็อกซีเพื่อแก้ไขข้อผิดพลาด CORS",
      "Location": "ตำแหน่ง",
      "LocationHeader": "ส่วนหัว",
      "LocationQuery": "คำค้นหา",
      "LocationBody": "เนื้อหา",
    },
    "EditModal": {
      "Title": (readonly: boolean) => `แก้ไขปลั๊กอิน ${readonly ? "(อ่านอย่างเดียว)" : ""}`,
      "Download": "ดาวน์โหลด",
      "Auth": "ประเภทการยืนยันตัวตน",
      "Content": "OpenAPI Schema",
      "Load": "โหลดจาก URL",
      "Method": "วิธีการ",
      "Error": "เกิดข้อผิดพลาดใน OpenAPI Schema",
    },
  },
  "Mask": {
    "Name": "หน้ากาก",
    "Page": {
      "Title": "แม่แบบคำสั่ง",
      "SubTitle": (count: number) => `${count} แม่แบบคำสั่ง`,
      "Search": "ค้นหาแม่แบบ",
      "Create": "สร้าง",
    },
    "Item": {
      "Info": (count: number) => `${count} คำสั่ง`,
      "Chat": "แชท",
      "View": "ดู",
      "Edit": "แก้ไข",
      "Delete": "ลบ",
      "DeleteConfirm": "ยืนยันการลบ?",
    },
    "EditModal": {
      "Title": (readonly: boolean) => `แก้ไขแม่แบบคำสั่ง ${readonly ? "(อ่านอย่างเดียว)" : ""}`,
      "Download": "ดาวน์โหลด",
      "Clone": "โคลน",
    },
    "Config": {
      "Avatar": "อวาตาร์บอท",
      "Name": "ชื่อบอท",
      "Sync": {
        "Title": "ใช้การตั้งค่าทั่วโลก",
        "SubTitle": "ใช้การตั้งค่าทั่วโลกในแชทนี้",
        "Confirm": "ยืนยันการแทนที่การตั้งค่าที่กำหนดเองด้วยการตั้งค่าทั่วโลก?",
      },
      "HideContext": {
        "Title": "ซ่อนคำสั่งบริบท",
        "SubTitle": "ไม่แสดงคำสั่งบริบทในแชท",
      },
      "Artifacts": {
        "Title": "เปิดใช้งานสิ่งประดิษฐ์",
        "SubTitle": "สามารถแสดงหน้า HTML เมื่อเปิดใช้งานสิ่งประดิษฐ์",
      },
      "Share": {
        "Title": "แชร์หน้ากากนี้",
        "SubTitle": "สร้างลิงก์ไปยังหน้ากากนี้",
        "Action": "คัดลอกลิงก์",
      },
    },
  },
  "NewChat": {
    "Return": "กลับ",
    "Skip": "เริ่มเลย",
    "Title": "เลือกหน้ากาก",
    "SubTitle": "แชทกับจิตวิญญาณเบื้องหลังหน้ากาก",
    "More": "ค้นหาเพิ่มเติม",
    "NotShow": "ไม่แสดงอีก",
    "ConfirmNoShow": "ยืนยันการปิดใช้งาน? คุณสามารถเปิดใช้งานได้ในภายหลังในการตั้งค่า",
  },
  "UI": {
    "Confirm": "ยืนยัน",
    "Cancel": "ยกเลิก",
    "Close": "ปิด",
    "Create": "สร้าง",
    "Edit": "แก้ไข",
    "Export": "ส่งออก",
    "Import": "นำเข้า",
    "Sync": "ซิงค์",
    "Config": "การตั้งค่า",
  },
  "Exporter": {
    "Description": {
      "Title": "จะแสดงเฉพาะข้อความหลังจากล้างบริบท",
    },
    "Model": "โมเดล",
    "Messages": "ข้อความ",
    "Topic": "หัวข้อ",
    "Time": "เวลา",
  },
  "URLCommand": {
    "Code": "ตรวจพบรหัสเข้าถึงจาก URL ยืนยันการใช้งาน?",
    "Settings": "ตรวจพบการตั้งค่าจาก URL ยืนยันการใช้งาน?",
  },
  "SdPanel": {
    "Prompt": "คำสั่ง",
    "NegativePrompt": "คำสั่งเชิงลบ",
    "PleaseInput": (name: string) => `กรุณาใส่ ${name}`,
    "AspectRatio": "อัตราส่วนภาพ",
    "ImageStyle": "สไตล์ภาพ",
    "OutFormat": "รูปแบบผลลัพธ์",
    "AIModel": "โมเดล AI",
    "ModelVersion": "เวอร์ชันโมเดล",
    "Submit": "ส่ง",
    "ParamIsRequired": (name: string) => `${name} จำเป็นต้องใส่`,
    "Styles": {
      "D3Model": "โมเดล 3D",
      "AnalogFilm": "ฟิล์มอนาล็อก",
      "Anime": "อนิเมะ",
      "Cinematic": "ภาพยนตร์",
      "ComicBook": "หนังสือการ์ตูน",
      "DigitalArt": "ศิลปะดิจิทัล",
      "Enhance": "เพิ่มประสิทธิภาพ",
      "FantasyArt": "ศิลปะแฟนตาซี",
      "Isometric": "ไอโซเมตริก",
      "LineArt": "ศิลปะเส้น",
      "LowPoly": "โลว์โพลี",
      "ModelingCompound": "สารประกอบการสร้างแบบจำลอง",
      "NeonPunk": "นีออนพังค์",
      "Origami": "โอริกามิ",
      "Photographic": "การถ่ายภาพ",
      "PixelArt": "พิกเซลอาร์ต",
      "TileTexture": "พื้นผิวกระเบื้อง",
    },
  },
  "Sd": {
    "SubTitle": (count: number) => `${count} รูปภาพ`,
    "Actions": {
      "Params": "ดูพารามิเตอร์",
      "Copy": "คัดลอกคำสั่ง",
      "Delete": "ลบ",
      "Retry": "ลองใหม่",
      "ReturnHome": "กลับหน้าหลัก",
      "History": "ประวัติ",
    },
    "EmptyRecord": "ยังไม่มีรูปภาพ",
    "Status": {
      "Name": "สถานะ",
      "Success": "สำเร็จ",
      "Error": "ข้อผิดพลาด",
      "Wait": "รอ",
      "Running": "กำลังทำงาน",
    },
    "Danger": {
      "Delete": "ยืนยันการลบ?",
    },
    "GenerateParams": "สร้างพารามิเตอร์",
    "Detail": "รายละเอียด",
  }
}



export default th;
