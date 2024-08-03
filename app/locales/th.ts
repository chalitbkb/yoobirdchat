import { getClientConfig } from "../config/client";
import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const isApp = !!getClientConfig()?.isApp;

const th: PartialLocaleType = {
  WIP: "เร็วๆ นี้...",
  Error: {
    Unauthorized: isApp
      ? "คีย์ API ไม่ถูกต้อง กรุณาตรวจสอบในหน้าการตั้งค่า [Settings](/#/settings)."
      : "การเข้าถึงไม่ได้รับอนุญาต กรุณาใส่รหัสเข้าถึงในหน้าการยืนยันตัวตน [auth](/#/auth) หรือใส่คีย์ API ของ OpenAI ของคุณ.",
  },
  Auth: {
    Title: "ต้องการรหัสเข้าถึง",
    Tips: "กรุณาใส่รหัสเข้าถึงด้านล่าง",
    SubTips: "หรือใส่คีย์ API ของ OpenAI หรือ Google ของคุณ",
    Input: "รหัสเข้าถึง",
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
      ChatList: "ไปที่รายชื่อการสนทนา",
      CompressedHistory: "บันทึกความจำขนาดประหยัด",
      Export: "ส่งออกข้อความทั้งหมดเป็น Markdown",
      Copy: "คัดลอก",
      Stop: "หยุด",
      Retry: "ลองอีกครั้ง",
      Pin: "ปักหมุด",
      PinToastContent: "ปักหมุดข้อความ 1 ข้อความเพื่อเป็นพรอมป์บริบท",
      PinToastAction: "ดู",
      Delete: "ลบ",
      Edit: "แก้ไข",
    },
    Commands: {
      new: "เริ่มการสนทนาใหม่",
      newm: "เริ่มการสนทนาใหม่พร้อมหน้ากาก",
      next: "สนทนาถัดไป",
      prev: "สนทนาก่อนหน้า",
      clear: "ลบบริบท",
      del: "ลบการสนทนา",
    },
    InputActions: {
      Stop: "หยุด",
      ToBottom: "ไปที่ล่าสุด",
      Theme: {
        auto: "อัตโนมัติ",
        light: "ธีมสว่าง",
        dark: "ธีมมืด",
      },
      Prompt: "พรอมพ์",
      Masks: "หน้ากาก",
      Clear: "เคลียร์บริบท",
      Settings: "การตั้งค่า",
      UploadImage: "อัปโหลดภาพ",
    },
    Rename: "เปลี่ยนชื่อการสนทนา",
    Typing: "กำลังพิมพ์…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} เพื่อส่ง`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter เพื่อลงบรรทัดใหม่";
      }
      return inputHints + ", / เพื่อค้นหาพรอมพ์, : เพื่อใช้คำสั่ง";
    },
    Send: "ส่ง",
    Config: {
      Reset: "รีเซ็ตเป็นค่าเริ่มต้น",
      SaveAs: "บันทึกเป็นหน้ากาก",
    },
    IsContext: "พรอมพ์บริบท",
  },
  Export: {
    Title: "ส่งข้อความออกไป",
    Copy: "คัดลอกทั้งหมด",
    Download: "ดาวน์โหลด",
    MessageFromYou: "ข้อความจากคุณ",
    MessageFromChatGPT: "ข้อความจาก ChatGPT",
    Share: "แชร์ไปที่ ShareGPT",
    Format: {
      Title: "รูปแบบการส่งออก",
      SubTitle: "Markdown หรือ PNG Image",
    },
    IncludeContext: {
      Title: "รวมบริบท",
      SubTitle: "ส่งออกพรอมพ์บริบทในหน้ากากหรือไม่",
    },
    Steps: {
      Select: "เลือก",
      Preview: "ดูตัวอย่าง",
    },
    Image: {
      Toast: "กำลังถ่ายภาพ...",
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
    Title: "พรอมพ์ความจำ",
    EmptyContent: "ยังไม่มีอะไรเลย.",
    Send: "ส่งความจำ",
    Copy: "คัดลอกความจำ",
    Reset: "เริ่มต้นใหม่",
    ResetConfirm:
      "การตั้งค่าใหม่จะลบประวัติการสนทนาปัจจุบันและความจำทางประวัติศาสตร์ คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ต?",
  },
  Home: {
    NewChat: "สนทนาใหม่",
    DeleteChat: "ยืนยันการลบการสนทนาที่เลือก?",
    DeleteToast: "ลบการสนทนาแล้ว",
    Revert: "คืนค่า",
  },
  Settings: {
    Title: "การตั้งค่า",
    SubTitle: "การตั้งค่าทั้งหมด",
    Danger: {
      Reset: {
        Title: "รีเซ็ตการตั้งค่าทั้งหมด",
        SubTitle: "รีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น",
        Action: "รีเซ็ต",
        Confirm: "ยืนยันการรีเซ็ตการตั้งค่าทั้งหมดเป็นค่าเริ่มต้น?",
      },
      Clear: {
        Title: "ลบข้อมูลทั้งหมด",
        SubTitle: "ลบข้อความและการตั้งค่าทั้งหมด",
        Action: "ลบ",
        Confirm: "ยืนยันการลบข้อความและการตั้งค่าทั้งหมด?",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: ค่าของ Lang.Name ต้องใช้เป็น "Language" ซึ่งไม่ต้องแปล
      All: "ทุกภาษา",
    },
    Avatar: "อวาตาร์",
    FontSize: {
      Title: "ขนาดตัวอักษร",
      SubTitle: "ปรับขนาดตัวอักษรของเนื้อหาการสนทนา",
    },
    FontFamily: {
      Title: "ฟอนต์แชท",
      SubTitle:
        "ฟอนต์ของเนื้อหาการสนทนา, ปล่อยว่างไว้เพื่อใช้ฟอนต์เริ่มต้นของระบบ",
      Placeholder: "ชื่อฟอนต์",
    },
    InjectSystemPrompts: {
      Title: "แทรกพรอมพ์ระบบ",
      SubTitle: "แทรกพรอมพ์ระบบทั่วโลกสำหรับทุกคำขอ",
    },
    InputTemplate: {
      Title: "แม่แบบการป้อนข้อมูล",
      SubTitle: "ข้อความใหม่จะถูกเติมในแม่แบบนี้",
    },
    Update: {
      Version: (x: string) => `เวอร์ชั่น: ${x}`,
      IsLatest: "เวอร์ชั่นล่าสุด",
      CheckUpdate: "ตรวจสอบการอัปเดต",
      IsChecking: "กำลังตรวจสอบการอัปเดต...",
      FoundUpdate: (x: string) => `พบเวอร์ชั่นใหม่: ${x}`,
      GoToUpdate: "อัปเดต",
    },
    SendKey: "คีย์การส่ง",
    Theme: "ธีม",
    TightBorder: "ขอบแน่น",
    SendPreviewBubble: {
      Title: "แสดงตัวอย่างการส่ง",
      SubTitle: "แสดงตัวอย่าง markdown ในฟองอากาศ",
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
          Title: "การตั้งค่าการซิงค์",
          Check: "ตรวจสอบการเชื่อมต่อ",
        },
        SyncType: {
          Title: "ประเภทการซิงค์",
          SubTitle: "เลือกบริการซิงค์ที่คุณชื่นชอบ",
        },
        Proxy: {
          Title: "เปิดใช้พร็อกซี CORS",
          SubTitle: "เปิดพร็อกซีเพื่อหลีกเลี่ยงข้อจำกัดของต้นทางข้าม",
        },
        ProxyUrl: {
          Title: "ปลายทางของพร็อกซี",
          SubTitle: "ใช้ได้เฉพาะสำหรับพร็อกซี CORS ที่มีในโปรเจ็กต์นี้",
        },
        WebDav: {
          Endpoint: "ปลายทาง WebDAV",
          UserName: "ชื่อผู้ใช้",
          Password: "รหัสผ่าน",
        },
        UpStash: {
          Endpoint: "URL ของ UpStash Redis REST",
          UserName: "ชื่อแบ็คอัพ",
          Password: "รหัสโทเค็น REST ของ UpStash Redis",
        },
      },
      LocalState: "ข้อมูลท้องถิ่น",
      Overview: (overview: any) => {
        return `${overview.chat} การสนทนา, ${overview.message} ข้อความ, ${overview.prompt} ข้อแนะนำ, ${overview.mask} หน้ากาก`;
      },
      ImportFailed: "ล้มเหลวในการนำเข้าจากไฟล์",
    },
    Mask: {
      Splash: {
        Title: "หน้าต่างฉากหน้ากาก",
        SubTitle: "แสดงหน้าต่างฉากหน้ากากก่อนเริ่มสนทนาใหม่",
      },
      Builtin: {
        Title: "ซ่อนหน้ากากที่ติดตั้งในตัว",
        SubTitle: "ซ่อนหน้ากากที่ติดตั้งในตัวในรายการหน้ากาก",
      },
    },
    Prompt: {
      Disable: {
        Title: "ปิดการเติมอัตโนมัติ",
        SubTitle: "ใส่ / เพื่อเปิดใช้งานการเติมอัตโนมัติ",
      },
      List: "รายการพรอมพ์",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} ติดตั้งในตัว, ${custom} กำหนดโดยผู้ใช้`,
      Edit: "แก้ไข",
      Modal: {
        Title: "รายการพรอมพ์",
        Add: "เพิ่ม",
        Search: "ค้นหาพรอมพ์",
      },
      EditModal: {
        Title: "แก้ไขพรอมพ์",
      },
    },
    HistoryCount: {
      Title: "จำนวนข้อความที่แนบ",
      SubTitle: "จำนวนข้อความที่ส่งแนบต่อคำขอ",
    },
    CompressThreshold: {
      Title: "เกณฑ์การบีบอัดประวัติ",
      SubTitle:
        "จะบีบอัดหากความยาวของข้อความที่ยังไม่บีบอัดเกินค่าที่กำหนด",
    },
    Usage: {
      Title: "ยอดคงเหลือบัญชี",
      SubTitle(used: any, total: any) {
        return `ใช้งานเดือนนี้ $${used}, การสมัครสมาชิก $${total}`;
      },
      IsChecking: "กำลังตรวจสอบ...",
      Check: "ตรวจสอบ",
      NoAccess: "กรุณาใส่คีย์ API เพื่อตรวจสอบยอดคงเหลือ",
    },
    Access: {
      AccessCode: {
        Title: "รหัสเข้าถึง",
        SubTitle: "เปิดใช้การควบคุมการเข้าถึง",
        Placeholder: "ใส่รหัส",
      },
      CustomEndpoint: {
        Title: "ปลายทางแบบกำหนดเอง",
        SubTitle: "ใช้บริการ Azure หรือ OpenAI แบบกำหนดเอง",
      },
      Provider: {
        Title: "ผู้ให้บริการโมเดล",
        SubTitle: "เลือก Azure หรือ OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "คีย์ API ของ OpenAI",
          SubTitle: "ใช้คีย์ API ของ OpenAI แบบกำหนดเอง",
          Placeholder: "sk-xxx",
        },
        Endpoint: {
          Title: "ปลายทางของ OpenAI",
          SubTitle: "ต้องเริ่มด้วย http(s):// หรือใช้ /api/openai เป็นค่าเริ่มต้น",
        },
      },
      Azure: {
        ApiKey: {
          Title: "คีย์ API ของ Azure",
          SubTitle: "ตรวจสอบคีย์ API ของคุณจากคอนโซล Azure",
          Placeholder: "คีย์ API ของ Azure",
        },
        Endpoint: {
          Title: "ปลายทางของ Azure",
          SubTitle: "ตัวอย่าง: ",
        },
        ApiVerion: {
          Title: "เวอร์ชัน API ของ Azure",
          SubTitle: "ตรวจสอบเวอร์ชัน API ของคุณจากคอนโซล Azure",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "คีย์ API ของ Anthropic",
          SubTitle: "ใช้คีย์ Anthropic แบบกำหนดเองเพื่อเลี่ยงการเข้าถึงผ่านรหัสผ่าน",
          Placeholder: "คีย์ API ของ Anthropic",
        },
        Endpoint: {
          Title: "ที่อยู่ปลายทาง",
          SubTitle: "ตัวอย่าง: ",
        },
        ApiVerion: {
          Title: "เวอร์ชัน API (เวอร์ชัน API ของ Claude)",
          SubTitle: "เลือกและใส่เวอร์ชัน API ที่เจาะจง",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "คีย์ API ของ Baidu",
          SubTitle: "ใช้คีย์ API ของ Baidu แบบกำหนดเอง",
          Placeholder: "คีย์ API ของ Baidu",
        },
        SecretKey: {
          Title: "คีย์ลับของ Baidu",
          SubTitle: "ใช้คีย์ลับของ Baidu แบบกำหนดเอง",
          Placeholder: "คีย์ลับของ Baidu",
        },
        Endpoint: {
          Title: "ที่อยู่ปลายทาง",
          SubTitle: "ไม่สนับสนุน, กำหนดค่าใน .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "คีย์ API ของ ByteDance",
          SubTitle: "ใช้คีย์ API ของ ByteDance แบบกำหนดเอง",
          Placeholder: "คีย์ API ของ ByteDance",
        },
        Endpoint: {
          Title: "ที่อยู่ปลายทาง",
          SubTitle: "ตัวอย่าง: ",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "คีย์ API ของ Alibaba",
          SubTitle: "ใช้คีย์ API ของ Alibaba Cloud แบบกำหนดเอง",
          Placeholder: "คีย์ API ของ Alibaba Cloud",
        },
        Endpoint: {
          Title: "ที่อยู่ปลายทาง",
          SubTitle: "ตัวอย่าง: ",
        },
      },
      Stability: {
        ApiKey: {
          Title: "คีย์ API ของ Stability",
          SubTitle: "ใช้คีย์ API ของ Stability แบบกำหนดเอง",
          Placeholder: "คีย์ API ของ Stability",
        },
        Endpoint: {
          Title: "ที่อยู่ปลายทาง",
          SubTitle: "ตัวอย่าง: ",
        },
      },
      CustomModel: {
        Title: "โมเดลที่กำหนดเอง",
        SubTitle: "ตัวเลือกโมเดลที่กำหนดเอง, แยกด้วยเครื่องหมายจุลภาค",
      },
      Google: {
        ApiKey: {
          Title: "คีย์ API",
          SubTitle: "รับคีย์ API ของคุณจาก Google AI",
          Placeholder: "ใส่คีย์ API ของ Google AI Studio ของคุณ",
        },
        Endpoint: {
          Title: "ที่อยู่ปลายทาง",
          SubTitle: "ตัวอย่าง: ",
        },
        ApiVersion: {
          Title: "เวอร์ชัน API (เฉพาะ gemini-pro)",
          SubTitle: "เลือกเวอร์ชัน API ที่เจาะจง",
        },
        GoogleSafetySettings: {
          Title: "การตั้งค่าความปลอดภัยของ Google",
          SubTitle: "เลือกระดับการกรองความปลอดภัย",
        },
      },
    },
    Model: "โมเดล",
    Temperature: {
      Title: "อุณหภูมิ",
      SubTitle: "ค่ายิ่งมากทำให้ผลลัพธ์สุ่มมากขึ้น",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "ไม่เปลี่ยนแปลงค่าค่านี้พร้อมกับอุณหภูมิ",
    },
    MaxTokens: {
      Title: "โทเค็นสูงสุด",
      SubTitle: "ความยาวสูงสุดของโทเค็นอินพุทและโทเค็นที่สร้าง",
    },
    PresencePenalty: {
      Title: "บทลงโทษการปรากฏตัว",
      SubTitle: "ค่าสูงขึ้นเพิ่มโอกาสที่จะพูดถึงหัวข้อใหม่ๆ",
    },
    FrequencyPenalty: {
      Title: "บทลงโทษความถี่",
      SubTitle: "ค่าสูงขึ้นลดโอกาสที่จะพูดซ้ำบรรทัดเดิม",
    },
  },
  Store: {
    DefaultTopic: "การสนทนาใหม่",
    BotHello: "สวัสดี! ฉันช่วยอะไรคุณได้บ้างวันนี้?",
    Error: "มีข้อผิดพลาดเกิดขึ้น กรุณาลองใหม่ภายหลัง.",
    Prompt: {
      History: (content: string) =>
        "นี่คือสรุปประวัติการสนทนาเพื่อสรุป: " + content,
      Topic:
        "กรุณาสร้างหัวข้อที่สรุปการสนทนาของเราในสี่หรือห้าคำ โดยไม่มีการนำเข้า, เครื่องหมายวรรคตอน, เครื่องหมายอัญประกาศ, จุด, สัญลักษณ์, ข้อความตัวหนา หรือข้อความเพิ่มเติม. ลบเครื่องหมายอัญประกาศที่ปิดล้อม.",
      Summarize:
        "สรุปการสนทนาใน 200 คำหรือน้อยกว่านั้นเพื่อใช้เป็นพรอมพ์สำหรับบริบทในอนาคต.",
    },
  },
  Copy: {
    Success: "คัดลอกลงคลิปบอร์ดแล้ว",
    Failed: "การคัดลอกล้มเหลว กรุณาอนุญาตการเข้าถึงคลิปบอร์ด",
  },
      Download: {
        Success: "เนื้อหาได้ดาวน์โหลดไปยังไดเรกทอรีของคุณ",
        Failed: "ดาวน์โหลดล้มเหลว",
    },
    Context: {
        Toast: (x: any) => `ด้วย ${x} พรอมพ์บริบท`,
        Edit: "การตั้งค่าการสนทนาปัจจุบัน",
        Add: "เพิ่มพรอมพ์",
        Clear: "ล้างบริบท",
        Revert: "คืนค่า",
    },
    Plugin: {
        Name: "ปลั๊กอิน",
        Artifacts: "สิ่งประดิษฐ์",
    },
    Discovery: {
        Name: "การค้นพบ",
    },
    FineTuned: {
        Sysmessage: "คุณคือผู้ช่วยที่",
    },
    Mask: {
        Name: "หน้ากาก",
        Page: {
            Title: "แม่แบบพรอมพ์",
            SubTitle: (count: number) => `${count} แม่แบบพรอมพ์`,
            Search: "ค้นหาแม่แบบ",
            Create: "สร้าง",
        },
        Item: {
            Info: (count: number) => `${count} พรอมพ์`,
            Chat: "แชท",
            View: "ดู",
            Edit: "แก้ไข",
            Delete: "ลบ",
            DeleteConfirm: "ยืนยันการลบ?",
        },
        EditModal: {
            Title: (readonly: boolean) =>
                `แก้ไขแม่แบบพรอมพ์ ${readonly ? "(อ่านอย่างเดียว)" : ""}`,
            Download: "ดาวน์โหลด",
            Clone: "โคลน",
        },
        Config: {
            Avatar: "อวาตาร์บอท",
            Name: "ชื่อบอท",
            Sync: {
                Title: "ใช้การตั้งค่าทั่วโลก",
                SubTitle: "ใช้การตั้งค่าทั่วโลกในแชทนี้",
                Confirm: "ยืนยันการแทนที่การตั้งค่าเฉพาะด้วยการตั้งค่าทั่วโลก?",
            },
            HideContext: {
                Title: "ซ่อนพรอมพ์บริบท",
                SubTitle: "ไม่แสดงพรอมพ์บริบทในการแชท",
            },
            Share: {
                Title: "แชร์หน้ากากนี้",
                SubTitle: "สร้างลิงค์ไปยังหน้ากากนี้",
                Action: "คัดลอกลิงค์",
            },
        },
    },
    NewChat: {
        Return: "กลับ",
        Skip: "เริ่มเลย",
        Title: "เลือกหน้ากาก",
        SubTitle: "แชทกับวิญญาณหลังหน้ากาก",
        More: "ค้นหาเพิ่มเติม",
        NotShow: "ไม่ต้องแสดงอีก",
        ConfirmNoShow: "ยืนยันการปิด? คุณสามารถเปิดใช้งานได้ในภายหลังในส่วนการตั้งค่า.",
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
            Title: "จะแสดงเฉพาะข้อความหลังจากการล้างบริบท",
        },
        Model: "โมเดล",
        Messages: "ข้อความ",
        Topic: "หัวข้อ",
        Time: "เวลา",
    },
    URLCommand: {
        Code: "ตรวจพบรหัสเข้าถึงจาก URL, ยืนยันการใช้?",
        Settings: "ตรวจพบการตั้งค่าจาก URL, ยืนยันการใช้?",
    },
    SdPanel: {
        Prompt: "พรอมพ์",
        NegativePrompt: "พรอมพ์เชิงลบ",
        PleaseInput: (name: string) => `กรุณาใส่ ${name}`,
        AspectRatio: "สัดส่วนภาพ",
        ImageStyle: "สไตล์ภาพ",
        OutFormat: "รูปแบบการส่งออก",
        AIModel: "โมเดล AI",
        ModelVersion: "เวอร์ชั่นโมเดล",
        Submit: "ยืนยัน",
        ParamIsRequired: (name: string) => `${name} จำเป็นต้องใส่`,
        Styles: {
            D3Model: "โมเดล 3D",
            AnalogFilm: "ฟิล์มอนาล็อก",
            Anime: "อนิเมะ",
            Cinematic: "ภาพยนตร์",
            ComicBook: "หนังสือการ์ตูน",
            DigitalArt: "ศิลปะดิจิตอล",
            Enhance: "ปรับปรุง",
            FantasyArt: "ศิลปะแฟนตาซี",
            Isometric: "ไอโซเมตริก",
            LineArt: "เส้นอาร์ต",
            LowPoly: "โลว-โพลี",
            ModelingCompound: "การขึ้นรูป",
            NeonPunk: "นีออนพังก์",
            Origami: "โอริกามิ",
            Photographic: "การถ่ายภาพ",
            PixelArt: "พิกเซลอาร์ต",
            TileTexture: "พื้นผิวกระเบื้อง",
        },
    },
    Sd: {
        SubTitle: (count: number) => `${count} ภาพ`,
        Actions: {
            Params: "ดูพารามิเตอร์",
            Copy: "คัดลอกพรอมพ์",
            Delete: "ลบ",
            Retry: "ลองใหม่อีกครั้ง",
            ReturnHome: "กลับหน้าแรก",
            History: "ประวัติ",
        },
        EmptyRecord: "ยังไม่มีภาพ",
        Status: {
            Name: "สถานะ",
            Success: "สำเร็จ",
            Error: "ข้อผิดพลาด",
            Wait: "รอ",
            Running: "กำลังดำเนินการ",
        },
        Danger: {
            Delete: "ยืนยันการลบ?",
        },
        GenerateParams: "พารามิเตอร์การสร้าง",
        Detail: "รายละเอียด",
    },
};
export default th;
