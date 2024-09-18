import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;

const th: PartialLocaleType = {
  "WIP": "กำลังจะมา...",
  "Error": {
    "Unauthorized": "แอพ" 
      ? "API Key ไม่ถูกต้อง โปรดตรวจสอบในหน้า [ตั้งค่า](/#/settings)"
      : "ไม่มีสิทธิ์เข้าถึง กรุณาใส่รหัสผ่านในหน้า [ยืนยันตัวตน](/#/auth) หรือใส่ API Key ของ OpenAI",
  },
  "Auth": {
    "Title": "ต้องใส่รหัสผ่าน", 
    "Tips": "กรุณาใส่รหัสผ่านด้านล่าง",
    "SubTips": "หรือใส่ API Key ของ OpenAI หรือ Google",
    "Input": "รหัสผ่าน",
    "Confirm": "ยืนยัน",
    "Later": "ภายหลัง"
  },
  "ChatItem": {
    "ChatItemCount": (count: number) => `${count} ข้อความ`
  },
  "Chat": {
    "SubTitle": (count: number) => `${count} ข้อความ`,
    "EditMessage": {
      "Title": "แก้ไขข้อความทั้งหมด",
      "Topic": {
        "Title": "หัวข้อ",
        "SubTitle": "เปลี่ยนหัวข้อปัจจุบัน"
      }
    },
    "Actions": {
      "ChatList": "ไปที่รายการแชท",
      "CompressedHistory": "คำสั่งบีบอัดประวัติการสนทนา",
      "Export": "ส่งออกข้อความทั้งหมดเป็น Markdown",
      "Copy": "คัดลอก",
      "Stop": "หยุด",
      "Retry": "ลองใหม่",
      "Pin": "ปักหมุด",
      "PinToastContent": "ปักหมุด 1 ข้อความเป็นคำสั่งพื้นฐาน",
      "PinToastAction": "ดู",
      "Delete": "ลบ",
      "Edit": "แก้ไข",
      "FullScreen": "เต็มจอ",
      "RefreshTitle": "รีเฟรชหัวข้อ", 
      "RefreshToast": "ส่งคำขอรีเฟรชหัวข้อแล้ว"
    },
    "Commands": {
      "new": "เริ่มแชทใหม่",
      "newm": "เริ่มแชทใหม่พร้อมหน้ากาก",
      "next": "แชทถัดไป",
      "prev": "แชทก่อนหน้า", 
      "clear": "ล้างบริบท",
      "del": "ลบแชท"
    },
    "InputActions": {
      "Stop": "หยุด",
      "ToBottom": "เลื่อนไปล่างสุด",
      "Theme": {
        "auto": "อัตโนมัติ",
        "light": "ธีมสว่าง",
        "dark": "ธีมมืด"
      },
      "Prompt": "คำแนะนำ",
      "Masks": "หน้ากาก",
      "Clear": "ล้างบริบท",
      "Settings": "ตั้งค่า",
      "UploadImage": "อัปโหลดรูปภาพ"
    },
    "Rename": "เปลี่ยนชื่อแชท",
    "Typing": "กำลังพิมพ์...",
    "Input": (submitKey: string) => {
      var inputHints = `${submitKey} เพื่อส่ง`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter เพื่อขึ้นบรรทัดใหม่";
      }
      return inputHints + ", / เพื่อค้นหาคำแนะนำ, : เพื่อใช้คำสั่ง";
    },
    "Send": "ส่ง",
    "Config": {
      "Reset": "รีเซ็ตเป็นค่าเริ่มต้น",
      "SaveAs": "บันทึกเป็นหน้ากาก"
    },
    "IsContext": "คำแนะนำพื้นฐาน",
    "ShortcutKey": {
      "Title": "ปุ่มลัด",
      "newChat": "เปิดแชทใหม่",
      "focusInput": "โฟกัสช่องป้อนข้อความ",
      "copyLastMessage": "คัดลอกข้อความตอบล่าสุด",
      "copyLastCode": "คัดลอกโค้ดล่าสุด",
      "showShortcutKey": "แสดงปุ่มลัด"
    }
  },
  "Export": {
    "Title": "ส่งออกข้อความ",
    "Copy": "คัดลอกทั้งหมด",
    "Download": "ดาวน์โหลด",
    "MessageFromYou": "ข้อความจากคุณ",
    "MessageFromChatGPT": "ข้อความจาก ChatGPT",
    "Share": "แชร์ไปยัง ShareGPT",
    "Format": {
      "Title": "รูปแบบการส่งออก",
      "SubTitle": "Markdown หรือรูปภาพ PNG"
    },
    "IncludeContext": {
      "Title": "รวมบริบท",
      "SubTitle": "ส่งออกคำแนะนำพื้นฐานในหน้ากากด้วยหรือไม่"
    },
    "Steps": {
      "Select": "เลือก",
      "Preview": "ดูตัวอย่าง"
    },
    "Image": {
      "Toast": "กำลังจับภาพ...",
      "Modal": "กดค้างหรือคลิกขวาเพื่อบันทึกรูปภาพ"
    },
    "Artifacts": {
      "Title": "แชร์สิ่งประดิษฐ์",
      "Error": "แชร์ผิดพลาด"
    }
  },
  "Select": {
    "Search": "ค้นหา",
    "All": "เลือกทั้งหมด",
    "Latest": "เลือกล่าสุด",
    "Clear": "ล้าง"
  },
  "Memory": {
    "Title": "คำสั่งความจำ",
    "EmptyContent": "ยังไม่มีอะไร",
    "Send": "ส่งความจำ",
    "Copy": "คัดลอกความจำ",
    "Reset": "รีเซ็ตเซสชัน",
    "ResetConfirm": "การรีเซ็ตจะล้างประวัติการสนทนาปัจจุบันและความจำในอดีต คุณแน่ใจหรือไม่ที่จะรีเซ็ต?"
  },
  "Home": {
    "NewChat": "แชทใหม่",
    "DeleteChat": "ยืนยันที่จะลบการสนทนาที่เลือกหรือไม่?",
    "DeleteToast": "ลบแชทแล้ว",
    "Revert": "เลิกทำ"
  },
  "Settings": {
    "Title": "ตั้งค่า",
    "SubTitle": "ตั้งค่าทั้งหมด",
    "ShowPassword": "แสดงรหัสผ่าน",
    "Danger": {
      "Reset": {
        "Title": "รีเซ็ตการตั้งค่าทั้งหมด",
        "SubTitle": "รีเซ็ตทุกรายการตั้งค่าเป็นค่าเริ่มต้น",
        "Action": "รีเซ็ต",
        "Confirm": "ยืนยันที่จะรีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้นหรือไม่?"
      },
      "Clear": {
        "Title": "ล้างข้อมูลทั้งหมด",
        "SubTitle": "ล้างข้อความและการตั้งค่าทั้งหมด",
        "Action": "ล้าง",
        "Confirm": "ยืนยันที่จะล้างข้อความและการตั้งค่าทั้งหมดหรือไม่?"
      }
    },
    "Lang": {
      "Name": "Language", // ไม่แปล
      "All": "ภาษาทั้งหมด"
    },
    "Avatar": "รูปโปรไฟล์",
    "FontSize": {
      "Title": "ขนาดตัวอักษร", 
      "SubTitle": "ปรับขนาดตัวอักษรของเนื้อหาแชท"
    },
    "FontFamily": {
      "Title": "แบบอักษรในแชท",
      "SubTitle": "ตั้งแบบอักษรสำหรับเนื้อหาแชท เว้นว่างเพื่อใช้แบบอักษรเริ่มต้น",
      "Placeholder": "ชื่อแบบอักษร"
    },
    "InjectSystemPrompts": {
      "Title": "แทรกคำสั่งระบบ",
      "SubTitle": "บังคับให้เพิ่มคำสั่งระบบทั่วไปในทุกคำขอ"
    },
    "InputTemplate": {
      "Title": "เทมเพลตการป้อนข้อมูล",
      "SubTitle": "ข้อความใหม่จะถูกใส่ในเทมเพลตนี้"
    },
    "Update": {
      "Version": (x: string) => `เวอร์ชัน: ${x}`,
      "IsLatest": "เวอร์ชันล่าสุด",
      "CheckUpdate": "ตรวจสอบอัปเดต",
      "IsChecking": "กำลังตรวจสอบอัปเดต...",
      "FoundUpdate": (x: string) => `พบเวอร์ชันใหม่: ${x}`,
      "GoToUpdate": "อัปเดต"
    },
    "SendKey": "ปุ่มส่ง",
    "Theme": "ธีม",
    "TightBorder": "ขอบชิด",
    "SendPreviewBubble": {
      "Title": "แสดงตัวอย่างข้อความ",
      "SubTitle": "แสดงตัวอย่าง Markdown ในกล่องข้อความ"
    },
    "Mask": {
      "Splash": {
        "Title": "หน้าเปิดหน้ากาก",
        "SubTitle": "แสดงหน้าเปิดหน้ากากก่อนเริ่มแชทใหม่"
      },
      "Builtin": {
        "Title": "ซ่อนหน้ากากในตัว",
        "SubTitle": "ซ่อนหน้ากากในตัวจากรายการหน้ากาก"
      }
    },
    "Prompt": {
      "Disable": {
        "Title": "ปิดการเติมคำอัตโนมัติ",
        "SubTitle": "พิมพ์ / เพื่อเปิดใช้การเติมคำอัตโนมัติ"
      },
      "List": "รายการคำแนะนำ",
      "ListCount": (builtin: number, custom: number) =>
        `${builtin} คำแนะนำในตัว, ${custom} คำแนะนำที่ผู้ใช้กำหนดเอง`,
      "Edit": "แก้ไข",
      "Modal": {
        "Title": "รายการคำแนะนำ",
        "Add": "เพิ่ม",
        "Search": "ค้นหาคำแนะนำ"
      },
      "EditModal": {
        "Title": "แก้ไขคำแนะนำ"
      }
    },
    "HistoryCount": {
      "Title": "จำนวนข้อความที่แนบ",
      "SubTitle": "จำนวนข้อความที่ส่งมาพร้อมกับแต่ละคำขอ"
    },
    "CompressThreshold": {
      "Title": "เกณฑ์การบีบอัดประวัติ",
      "SubTitle": "จะบีบอัดถ้าความยาวของข้อความที่ไม่ถูกบีบอัดเกินค่านี้"
    },
    "Token": {
      "Title": "API Key",
      "SubTitle": "ใช้คีย์ของคุณเพื่อไม่จำกัดรหัสผ่าน",
      "Placeholder": "OpenAI API Key"
    },
    "Usage": {
      "Title": "ยอดคงเหลือในบัญชี",
      "SubTitle": (used: any, total: any) =>
        `เดือนนี้ใช้ไป $${used}, วงเงิน $${total}`,
      "IsChecking": "กำลังตรวจสอบ...",
      "Check": "ตรวจสอบ",
      "NoAccess": "ใส่ API Key เพื่อตรวจสอบยอดคงเหลือ"
    },
    "Access": {
      "AccessCode": {
        "Title": "รหัสเข้าใช้งาน",
        "SubTitle": "เปิดใช้การควบคุมการเข้าถึง",
        "Placeholder": "ใส่รหัส"
      },
      "CustomEndpoint": {
        "Title": "ปลายทางที่กำหนดเอง",
        "SubTitle": "ใช้บริการ Azure หรือ OpenAI ที่กำหนดเอง"
      },
      "Provider": {
        "Title": "ผู้ให้บริการโมเดล",
        "SubTitle": "เลือก Azure หรือ OpenAI"
      },
      "OpenAI": {
        "ApiKey": {
          "Title": "API Key ของ OpenAI",
          "SubTitle": "ใช้ API Key ของ OpenAI ของคุณเอง",
          "Placeholder": "sk-xxx"
        },
        "Endpoint": {
          "Title": "ปลายทาง OpenAI",
          "SubTitle": "ต้องขึ้นต้นด้วย http(s):// หรือใช้ /api/openai เป็นค่าเริ่มต้น"
        }
      },
      "Azure": {
        "ApiKey": {
          "Title": "API Key ของ Azure",
          "SubTitle": "ตรวจสอบ API Key ของคุณจากคอนโซล Azure",
          "Placeholder": "API Key ของ Azure"
        },
        "Endpoint": {
          "Title": "ปลายทาง Azure",
          "SubTitle": "ตัวอย่าง: "
        },
        "ApiVerion": {
          "Title": "เวอร์ชัน API ของ Azure",
          "SubTitle": "ตรวจสอบเวอร์ชัน API ของคุณจากคอนโซล Azure"
        }
      },
      "CustomModel": {
        "Title": "โมเดลที่กำหนดเอง",
        "SubTitle": "ตัวเลือกโมเดลที่กำหนดเอง คั่นด้วยเครื่องหมายจุลภาค"
      }
    },
    "Model": "โมเดล",
    "Temperature": {
      "Title": "อุณหภูมิ",
      "SubTitle": "ค่าที่สูงขึ้นทำให้ผลลัพธ์มีความสุ่มมากขึ้น"
    },
    "MaxTokens": {
      "Title": "โทเค็นสูงสุด",
      "SubTitle": "ความยาวสูงสุดของโทเค็นอินพุตและโทเค็นที่สร้างขึ้น"
    },
    "PresencePenalty": {
      "Title": "บทลงโทษการปรากฏ",
      "SubTitle": "ค่าที่สูงขึ้นเพิ่มโอกาสในการพูดถึงหัวข้อใหม่"
    },
    "FrequencyPenalty": {
      "Title": "บทลงโทษความถี่",
      "SubTitle": "ค่าที่สูงขึ้นลดโอกาสในการพูดซ้ำบรรทัดเดิม"
    }
  },
  "Store": {
    "DefaultTopic": "การสนทนาใหม่",
    "BotHello": "สวัสดีครับ! ผมจะช่วยอะไรคุณดีครับวันนี้?",
    "Error": "เกิดข้อผิดพลาด โปรดลองใหม่ภายหลัง",
    "Prompt": {
      "History": (content: string) => "นี่คือสรุปประวัติการแชทสั้นๆ: " + content,
      "Topic": "กรุณาสร้างหัวข้อสี่ถึงห้าคำที่สรุปการสนทนาของเราโดยไม่มีคำนำหน้า เครื่องหมายวรรคตอน เครื่องหมายคำพูด จุด สัญลักษณ์ ตัวหนา หรือข้อความเพิ่มเติม ลบเครื่องหมายคำพูดที่ล้อมรอบออก",
      "Summarize": "สรุปการสนทนาสั้นๆ ใน 200 คำหรือน้อยกว่าเพื่อใช้เป็นคำแนะนำสำหรับบริบทในอนาคต"
    }
  },
  "Copy": {
    "Success": "คัดลอกไปยังคลิปบอร์ดแล้ว",
    "Failed": "การคัดลอกล้มเหลว โปรดอนุญาตการเข้าถึงคลิปบอร์ด"
  },
  "Context": {
    "Toast": (x: any) => `กับคำแนะนำพื้นฐาน ${x} คำ`,
    "Edit": "การตั้งค่าแชทปัจจุบัน",
    "Add": "เพิ่มคำแนะนำ",
    "Clear": "ล้างบริบทแล้ว",
    "Revert": "เลิกทำ"
  },
  "Plugin": {
    "Name": "ปลั๊กอิน",
  },
  "Mask": {
    "Name": "หน้ากาก",
    "Page": {
      "Title": "เทมเพลตคำแนะนำ",
      "SubTitle": (count: number) => `${count} เทมเพลตคำแนะนำ`,
      "Search": "ค้นหาเทมเพลต",
      "Create": "สร้าง"
    },
    "Item": {
      "Info": (count: number) => `${count} คำแนะนำ`,
      "Chat": "แชท",
      "View": "ดู",
      "Edit": "แก้ไข",
      "Delete": "ลบ",
      "DeleteConfirm": "ยืนยันที่จะลบหรือไม่?"
    },
    "EditModal": {
      "Title": (readonly: boolean) => `แก้ไขเทมเพลตคำแนะนำ ${readonly ? "(อ่านอย่างเดียว)" : ""}`,
      "Download": "ดาวน์โหลด",
      "Clone": "โคลน"
    },
    "Config": {
      "Avatar": "รูปโปรไฟล์บอท",
      "Name": "ชื่อบอท",
      "Sync": {
        "Title": "ใช้การตั้งค่าส่วนกลาง",
        "SubTitle": "ใช้การตั้งค่าส่วนกลางในแชทนี้",
        "Confirm": "ยืนยันที่จะแทนที่การตั้งค่าที่กำหนดเองด้วยการตั้งค่าส่วนกลางหรือไม่?"
      },
      "HideContext": {
        "Title": "ซ่อนคำแนะนำพื้นฐาน",
        "SubTitle": "ไม่แสดงคำแนะนำพื้นฐานในแชท"
      }
    }
  },
  "NewChat": {
    "Return": "กลับ",
    "Skip": "เริ่มเลย",
    "Title": "เลือกหน้ากาก",
    "SubTitle": "แชทกับจิตวิญญาณหลังหน้ากาก",
    "More": "ค้นหาเพิ่มเติม",
    "NotShow": "ไม่ต้องแสดงอีก",
    "ConfirmNoShow": "ยืนยันที่จะปิดใช้งานหรือไม่? คุณสามารถเปิดใช้งานได้ในภายหลังในการตั้งค่า"
  },
  "UI": {
    "Confirm": "ยืนยัน",
    "Cancel": "ยกเลิก",
    "Close": "ปิด",
    "Create": "สร้าง",
    "Edit": "แก้ไข"
  },
  "Exporter": {
    "Model": "โมเดล",
    "Messages": "ข้อความ",
    "Topic": "หัวข้อ",
    "Time": "เวลา"
  }
}
export default th;
