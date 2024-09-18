import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;

const th: PartialLocaleType = {
  WIP: "กำลังมาเร็ว ๆ นี้...",
  Error: {
    Unauthorized: isApp
      ? "API Key ไม่ถูกต้อง กรุณาตรวจสอบที่หน้า [การตั้งค่า](/#/settings)"
      : "การเข้าถึงถูกปฏิเสธ กรุณาใส่รหัสการเข้าถึงที่หน้า [auth](/#/auth) หรือใส่ OpenAI API Key ของคุณ",
  },
  Auth: {
    Title: "ต้องการรหัสการเข้าถึง",
    Tips: "กรุณาใส่รหัสการเข้าถึงด้านล่าง",
    SubTips: "หรือใส่ OpenAI หรือ Google API Key ของคุณ",
    Input: "รหัสการเข้าถึง",
    Confirm: "ยืนยัน",
    Later: "ภายหลัง",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} ข้อความ`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} ข้อความ`,
    EditMessage: {
      Title: "แก้ไขข้อความทั้งหมด",
      Topic: {
        Title: "หัวข้อ",
        SubTitle: "เปลี่ยนหัวข้อปัจจุบัน",
      },
    },
    Actions: {
      ChatList: "ไปยังรายการแชท",
      CompressedHistory: "ประวัติแชทแบบย่อ",
      Export: "ส่งออกข้อความทั้งหมดเป็น Markdown",
      Copy: "คัดลอก",
      Stop: "หยุด",
      Retry: "ลองใหม่",
      Pin: "ปักหมุด",
      PinToastContent: "ปักหมุด 1 ข้อความไปยังคำสั่งแบบมีบริบท",
      PinToastAction: "ดู",
      Delete: "ลบ",
      Edit: "แก้ไข",
      FullScreen: "เต็มจอ",
      RefreshTitle: "รีเฟรชชื่อเรื่อง",
      RefreshToast: "ส่งคำขอรีเฟรชชื่อเรื่องแล้ว",
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
      ToBottom: "ไปยังล่าสุด",
      Theme: {
        auto: "อัตโนมัติ",
        light: "ธีมสว่าง",
        dark: "ธีมมืด",
      },
      Prompt: "คำสั่ง",
      Masks: "หน้ากาก",
      Clear: "ล้างบริบท",
      Settings: "การตั้งค่า",
      UploadImage: "อัพโหลดภาพ",
    },
    Rename: "เปลี่ยนชื่อแชท",
    Typing: "กำลังพิมพ์…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} เพื่อส่ง`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter เพื่อเว้นบรรทัด";
      }
      return inputHints + ", / เพื่อค้นหาคำสั่ง, : เพื่อใช้คำสั่ง";
    },
    Send: "ส่ง",
    Config: {
      Reset: "รีเซ็ตเป็นค่าเริ่มต้น",
      SaveAs: "บันทึกเป็นหน้ากาก",
    },
    IsContext: "คำสั่งแบบมีบริบท",
    ShortcutKey: {
      Title: "ทางลัดแป้นพิมพ์",
      newChat: "เปิดแชทใหม่",
      focusInput: "โฟกัสที่ช่องพิมพ์",
      copyLastMessage: "คัดลอกข้อความล่าสุด",
      copyLastCode: "คัดลอกโค้ดล่าสุด",
      showShortcutKey: "แสดงทางลัด",
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
      SubTitle: "Markdown หรือภาพ PNG",
    },
    IncludeContext: {
      Title: "รวมบริบท",
      SubTitle: "ส่งออกคำสั่งแบบมีบริบทในหน้ากากหรือไม่",
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
      Title: "แชร์สิ่งประดิษฐ์",
      Error: "เกิดข้อผิดพลาดในการแชร์",
    },
  },
  Select: {
    Search: "ค้นหา",
    All: "เลือกทั้งหมด",
    Latest: "เลือกล่าสุด",
    Clear: "ล้าง",
  },
  Memory: {
    Title: "คำสั่งแบบจำ",
    EmptyContent: "ยังไม่มีอะไร",
    Send: "ส่งความจำ",
    Copy: "คัดลอกความจำ",
    Reset: "รีเซ็ตเซสชัน",
    ResetConfirm:
      "การรีเซ็ตจะล้างประวัติการสนทนาและความจำทั้งหมด คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ต?",
  },
  Home: {
    NewChat: "เริ่มแชทใหม่",
    DeleteChat: "ยืนยันการลบการสนทนาที่เลือก?",
    DeleteToast: "ลบแชทแล้ว",
    Revert: "ยกเลิกการกระทำ",
  },
  Settings: {
    Title: "การตั้งค่า",
    SubTitle: "การตั้งค่าทั้งหมด",
    ShowPassword: "แสดงรหัสผ่าน",
    Danger: {
      Reset: {
        Title: "รีเซ็ตการตั้งค่าทั้งหมด",
        SubTitle: "รีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น",
        Action: "รีเซ็ต",
        Confirm: "ยืนยันการรีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น?",
      },
      Clear: {
        Title: "ล้างข้อมูลทั้งหมด",
        SubTitle: "ลบข้อความและการตั้งค่าทั้งหมด",
        Action: "ล้าง",
        Confirm: "ยืนยันการลบข้อความและการตั้งค่าทั้งหมด?",
      },
    },
    Lang: {
      Name: "Language", // โปรดทราบ: หากต้องการเพิ่มการแปลใหม่ โปรดอย่าแปลค่านี้ ให้คงค่าเป็น `Language`
      All: "ทุกภาษา",
    },
    Avatar: "อวาตาร์",
    FontSize: {
      Title: "ขนาดตัวอักษร",
      SubTitle: "ปรับขนาดตัวอักษรของเนื้อหาแชท",
    },
    FontFamily: {
      Title: "แบบตัวอักษรของแชท",
      SubTitle:
        "แบบตัวอักษรของเนื้อหาแชท ทิ้งว่างเพื่อใช้ตัวอักษรเริ่มต้นทั่วทั้งระบบ",
      Placeholder: "ชื่อแบบตัวอักษร",
    },
    InjectSystemPrompts: {
      Title: "ใส่คำสั่งระบบ",
      SubTitle: "ใส่คำสั่งระบบทั่วโลกสำหรับทุกคำขอ",
    },
    InputTemplate: {
      Title: "แม่แบบการพิมพ์",
      SubTitle: "ข้อความล่าสุดจะถูกเติมลงในแม่แบบนี้",
    },

    Update: {
      Version: (x: string) => `เวอร์ชั่น: ${x}`,
      IsLatest: "เวอร์ชั่นล่าสุด",
      CheckUpdate: "ตรวจสอบการอัพเดต",
      IsChecking: "กำลังตรวจสอบการอัพเดต...",
      FoundUpdate: (x: string) => `พบเวอร์ชั่นใหม่: ${x}`,
      GoToUpdate: "อัพเดต",
    },
    SendKey: "ปุ่มส่ง",
    Theme: "ธีม",
    TightBorder: "ขอบแน่น",
    SendPreviewBubble: {
      Title: "ส่งฟองคำแนะนำ",
      SubTitle: "ดูตัวอย่าง Markdown ในฟอง",
    },
    AutoGenerateTitle: {
      Title: "สร้างชื่ออัตโนมัติ",
      SubTitle: "สร้างชื่อที่เหมาะสมตามเนื้อหาการสนทนา",
    },
    Sync: {
      CloudState: "การอัพเดตล่าสุด",
      NotSyncYet: "ยังไม่ซิงค์",
      Success: "ซิงค์สำเร็จ",
      Fail: "ซิงค์ล้มเหลว",

      Config: {
        Modal: {
          Title: "การซิงค์การตั้งค่า",
          Check: "ตรวจสอบการเชื่อมต่อ",
        },
        SyncType: {
          Title: "ประเภทการซิงค์",
          SubTitle: "เลือกบริการซิงค์ที่คุณชื่นชอบ",
        },
        Proxy: {
          Title: "เปิดใช้งาน CORS Proxy",
          SubTitle: "เปิดใช้งาน Proxy เพื่อหลีกเลี่ยงข้อจำกัดการเข้าถึงข้ามโดเมน",
        },
        ProxyUrl: {
          Title: "ที่อยู่ Proxy",
          SubTitle:
            "ใช้งานได้เฉพาะสำหรับฟีเจอร์ GitHub GraphQL API (เช่นเดียวกับ Gist)",
        },
        Webdav: {
          Endpoint: "ที่อยู่ WebDAV",
          Username: "ชื่อผู้ใช้",
          Password: "รหัสผ่าน",
        },
      },
    },
    Mask: {
      Splash: {
        Title: "หน้ากากที่กำหนดเอง",
        SubTitle: "ตั้งค่าการเริ่มต้นโดยใช้หน้ากากที่กำหนดเอง",
        Modal: {
          Title: "หน้ากากที่กำหนดเอง",
          Footer: "ปิด",
        },
        Toast: "ตั้งค่าหน้ากากที่กำหนดเองสำเร็จ",
      },
      Add: "เพิ่มหน้ากากใหม่",
      Edit: "แก้ไขหน้ากาก",
      Delete: "ลบหน้ากาก",
    },
    Prompt: {
      Disable: {
        Title: "ปิดการใช้งานการบันทึกอัตโนมัติ",
        SubTitle:
          "หากเปิดใช้งานแล้ว จะไม่บันทึกข้อความในหน้าต่างคำสั่งการพิมพ์อัตโนมัติ",
      },
      Template: {
        Title: "แม่แบบการพิมพ์",
        SubTitle:
          "ข้อความล่าสุดจะถูกเติมลงในแม่แบบนี้โดยอัตโนมัติ",
        Placeholder: "ทิ้งว่างเพื่อใช้ค่าพื้นฐาน",
      },
    },
    Balancer: {
      Enable: "เปิดใช้งานการสมดุลการโหลด",
      Disable: "ปิดใช้งานการสมดุลการโหลด",
    },
    CustomModel: {
      Placeholder: "ค่าพื้นฐาน",
    },
  },
  Connection: {
    Error: "เชื่อมต่อกับเซิร์ฟเวอร์ล้มเหลว",
    Refresh: "รีเฟรช",
  },
  Mask: {
    Splash: {
      Title: "หน้ากากที่กำหนดเอง",
      SubTitle: "ตั้งค่าการเริ่มต้นโดยใช้หน้ากากที่กำหนดเอง",
      Modal: {
        Title: "หน้ากากที่กำหนดเอง",
        Footer: "ปิด",
      },
      Toast: "ตั้งค่าหน้ากากที่กำหนดเองสำเร็จ",
    },
    Add: "เพิ่มหน้ากากใหม่",
    Edit: "แก้ไขหน้ากาก",
    Delete: "ลบหน้ากาก",
    Usage: "ใช้หน้ากาก",
  },
  Avatar: {
    Title: "เลือกอวาตาร์",
  },
  User: {
    Avatar: "อวาตาร์",
    Name: "ชื่อ",
    Role: "บทบาท",
  },
  Balance: {
    Title: "ข้อมูลสมดุล",
    Info: "คุณมีเครดิตคงเหลือเท่ากับ",
  },
  Shortcuts: {
    Title: "ทางลัด",
    SubTitle: "ทางลัดแป้นพิมพ์",
    Refresh: "รีเฟรช",
    Search: "ค้นหา",
    All: "เลือกทั้งหมด",
    Latest: "เลือกล่าสุด",
    Clear: "ล้าง",
    Show: "แสดง",
  },
  ChatList: {
    Title: "รายการแชท",
    NoContent: "ไม่มีข้อความ",
  },
};


export default th;
