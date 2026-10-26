export interface SpeedTestNode {
  name: string;
  latency: string;
  speed: string;
  lineType?: string;
  status?: string;
}

export interface BrandSpeedTestReport {
  brandSlug: string;
  brandName: string;
  testDate: string;
  notice: string;
  nodes: SpeedTestNode[];
}

export const brandSpeedTestMap: Record<string, BrandSpeedTestReport> = {
  "weifeng": {
    "brandSlug": "weifeng",
    "brandName": "微风网络",
    "testDate": "2026年10月20日 历史测试记录",
    "notice": "数据来源于整理者 2026-10-20 实测汇总归档（WF-20261020）。测试基于 Cloudflare 握手测试，记录显示香港、日本、德国直连等部分节点在当次测试中出现 Timeout 超时现象，真实反映网络负载，不作虚假 0 丢包宣传；延迟与速率反映当次测试响应，不代表时刻保证速度。",
    "nodes": [
      {
        "name": "新加坡 03 节点",
        "latency": "10ms",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "正常响应"
      },
      {
        "name": "香港 普通节点",
        "latency": "25–28ms",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "部分Timeout"
      },
      {
        "name": "日本 普通节点",
        "latency": "45–52ms",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "部分Timeout"
      },
      {
        "name": "日本 直连节点",
        "latency": "58–61ms",
        "speed": "标称不限速",
        "lineType": "专线直连",
        "status": "正常响应"
      },
      {
        "name": "德国 直连节点",
        "latency": "91–92ms",
        "speed": "标称不限速",
        "lineType": "专线直连",
        "status": "部分Timeout"
      },
      {
        "name": "美国 普通节点",
        "latency": "93–102ms",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "正常响应"
      },
      {
        "name": "美国 直连节点",
        "latency": "130–132ms",
        "speed": "标称不限速",
        "lineType": "专线直连",
        "status": "正常响应"
      }
    ]
  },
  "feimao": {
    "brandSlug": "feimao",
    "brandName": "飞猫云",
    "testDate": "2026年10月26日 客户端节点延迟测试",
    "notice": "数据来源于 2026-10-26 飞猫云客户端内的节点延迟测试（家庭宽带，非晚高峰）。当次日本 10、土耳其、菲律宾、越南（低价区）节点显示 Timeout，如实记录；每个人的实际速度与延迟会因所在地区、网络运营商和使用时段而不同。",
    "nodes": [
      { "name": "香港 17–20 节点", "latency": "27–28ms", "speed": "标称不限速", "lineType": "BGP-IEPL", "status": "正常响应" },
      { "name": "台湾 01–04 节点", "latency": "42–44ms", "speed": "标称不限速", "lineType": "BGP-IEPL", "status": "正常响应" },
      { "name": "新加坡 01–03 节点", "latency": "42–48ms", "speed": "标称不限速", "lineType": "BGP-IEPL", "status": "正常响应" },
      { "name": "日本 08–09 节点", "latency": "56–60ms", "speed": "标称不限速", "lineType": "BGP-IEPL", "status": "正常响应" },
      { "name": "日本 10 节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "BGP-IEPL", "status": "当次Timeout" },
      { "name": "德国 直连 01–04 节点", "latency": "89–98ms", "speed": "标称不限速", "lineType": "BGP直连", "status": "正常响应" },
      { "name": "美国 08–10 节点", "latency": "104–105ms", "speed": "标称不限速", "lineType": "BGP-IEPL", "status": "正常响应" },
      { "name": "土耳其 / 菲律宾 / 越南（低价区）节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "BGP-IEPL", "status": "当次Timeout" }
    ]
  },
  "muguang": {
    "brandSlug": "muguang",
    "brandName": "暮光加速",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "dalao": {
    "brandSlug": "dalao",
    "brandName": "大佬云",
    "testDate": "2026年10月26日 客户端节点延迟测试",
    "notice": "数据来源于 2026-10-26 大佬云客户端内的节点延迟测试（家庭宽带，非晚高峰）。当次日本 3、日本 8 节点显示 Timeout，如实记录；每个人的实际速度与延迟会因所在地区、网络运营商和使用时段而不同。",
    "nodes": [
      { "name": "香港 18–20 节点（日常优选）", "latency": "26–28ms", "speed": "标称不限速", "lineType": "专线", "status": "正常响应" },
      { "name": "台湾 1–5 节点（跨境电商）", "latency": "38–40ms", "speed": "标称不限速", "lineType": "专线", "status": "正常响应" },
      { "name": "新加坡 8–10 节点（流媒体）", "latency": "42–51ms", "speed": "标称不限速", "lineType": "专线", "status": "正常响应" },
      { "name": "日本 1、2、9、10 节点（低延迟）", "latency": "51–57ms", "speed": "标称不限速", "lineType": "专线", "status": "正常响应" },
      { "name": "日本 3、8 节点（低延迟）", "latency": "Timeout", "speed": "标称不限速", "lineType": "专线", "status": "当次Timeout" },
      { "name": "美国 1–5 节点（商务办公）", "latency": "102–104ms", "speed": "标称不限速", "lineType": "专线", "status": "正常响应" }
    ]
  },
  "firefly": {
    "brandSlug": "firefly",
    "brandName": "FireFly 萤火虫",
    "testDate": "2026年10月24日 客户端节点延迟测试",
    "notice": "数据来源于 2026-10-24 Firefly 客户端内的节点延迟测试（家庭宽带，非晚高峰）。当次香港 15 节点显示 Timeout，如实记录；每个人的实际速度与延迟会因所在地区、网络运营商和使用时段而不同。",
    "nodes": [
      {
        "name": "台湾 01–05 节点",
        "latency": "38–40ms",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "正常响应"
      },
      {
        "name": "香港 14 节点",
        "latency": "40ms",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "正常响应"
      },
      {
        "name": "香港 15 节点",
        "latency": "Timeout",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "当次Timeout"
      },
      {
        "name": "新加坡 01–07 节点",
        "latency": "45–47ms",
        "speed": "标称不限速",
        "lineType": "IPLC专线",
        "status": "正常响应"
      }
    ]
  },
  "lingmao": {
    "brandSlug": "lingmao",
    "brandName": "灵猫",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "shanyue": {
    "brandSlug": "shanyue",
    "brandName": "闪跃",
    "testDate": "2026年10月26日 客户端节点延迟测试",
    "notice": "数据来源于 2026-10-26 闪跃客户端内的节点延迟测试（家庭宽带，非晚高峰）。当次台湾 01、03、04 节点显示 Timeout，如实记录；每个人的实际速度与延迟会因所在地区、网络运营商和使用时段而不同。",
    "nodes": [
      { "name": "香港 10–14 节点", "latency": "27–30ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "台湾 02、05 节点", "latency": "42–45ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "台湾 01、03、04 节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "IPLC专线", "status": "当次Timeout" },
      { "name": "新加坡 01–04 节点", "latency": "44–47ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "日本 07–10 节点", "latency": "49–52ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "美国 01–04 节点", "latency": "102–106ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" }
    ]
  },
  "wuyou": {
    "brandSlug": "wuyou",
    "brandName": "无忧链接",
    "testDate": "2026年10月26日 客户端节点延迟测试",
    "notice": "数据来源于 2026-10-26 无忧链接客户端内的节点延迟测试（家庭宽带，非晚高峰）。当次日本 TYO 01–06 节点全部显示 Timeout，台湾 TPE 01、05 与香港 HKG 09 也显示 Timeout，如实记录；每个人的实际速度与延迟会因所在地区、网络运营商和使用时段而不同。",
    "nodes": [
      { "name": "香港 HKG 10–15 节点", "latency": "32–45ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "香港 HKG 09 节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "IPLC专线", "status": "当次Timeout" },
      { "name": "台湾 TPE 02–04 节点", "latency": "48–51ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "台湾 TPE 01、05 节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "IPLC专线", "status": "当次Timeout" },
      { "name": "新加坡 SIN 05–10 节点", "latency": "46–51ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "日本 TYO 01–06 节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "IPLC专线", "status": "当次Timeout" },
      { "name": "美国 LAX 01、03–05 节点", "latency": "103–106ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" }
    ]
  },
  "kuajie": {
    "brandSlug": "kuajie",
    "brandName": "跨界云",
    "testDate": "2026年10月26日 客户端节点延迟测试",
    "notice": "数据来源于 2026-10-26 跨界云客户端内的节点延迟测试（家庭宽带，非晚高峰）。当次日本 JPN 01–03、07–09 与台湾 TWN 01、03 节点显示 Timeout，如实记录；每个人的实际速度与延迟会因所在地区、网络运营商和使用时段而不同。",
    "nodes": [
      { "name": "新加坡 SG 01、08–10 节点", "latency": "16–21ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "香港 HK 12–15 节点", "latency": "27–28ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "台湾 TWN 02、04、05 节点", "latency": "42–47ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "台湾 TWN 01、03 节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "IPLC专线", "status": "当次Timeout" },
      { "name": "日本 JPN 06、10 节点", "latency": "43–46ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" },
      { "name": "日本 JPN 01–03、07–09 节点", "latency": "Timeout", "speed": "标称不限速", "lineType": "IPLC专线", "status": "当次Timeout" },
      { "name": "美国 US 01–05 节点", "latency": "96–98ms", "speed": "标称不限速", "lineType": "IPLC专线", "status": "正常响应" }
    ]
  },
  "flyv": {
    "brandSlug": "flyv",
    "brandName": "FlyV",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "guangnian": {
    "brandSlug": "guangnian",
    "brandName": "光年梯",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "lingdong": {
    "brandSlug": "lingdong",
    "brandName": "灵动云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "invisible": {
    "brandSlug": "invisible",
    "brandName": "隐形人",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "guangsu": {
    "brandSlug": "guangsu",
    "brandName": "光速云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "yifan": {
    "brandSlug": "yifan",
    "brandName": "一翻云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "weitu": {
    "brandSlug": "weitu",
    "brandName": "唯兔云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "edge": {
    "brandSlug": "edge",
    "brandName": "EdgeNova",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "jiuyun": {
    "brandSlug": "jiuyun",
    "brandName": "九云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "bitznet": {
    "brandSlug": "bitznet",
    "brandName": "BitzNet",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "baoyun": {
    "brandSlug": "baoyun",
    "brandName": "宝云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "u1s1": {
    "brandSlug": "u1s1",
    "brandName": "U1S1",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "tizi": {
    "brandSlug": "tizi",
    "brandName": "梯子云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "kexin": {
    "brandSlug": "kexin",
    "brandName": "可信云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "quanqiuyun": {
    "brandSlug": "quanqiuyun",
    "brandName": "全球云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "nanocloud": {
    "brandSlug": "nanocloud",
    "brandName": "NanoCloud",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "shenxing": {
    "brandSlug": "shenxing",
    "brandName": "神行加速",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "phantom": {
    "brandSlug": "phantom",
    "brandName": "Phantom 幻影",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "sujie": {
    "brandSlug": "sujie",
    "brandName": "速界机场",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "jilian": {
    "brandSlug": "jilian",
    "brandName": "极连云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "yuzhouyun": {
    "brandSlug": "yuzhouyun",
    "brandName": "宇宙云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "wavenet": {
    "brandSlug": "wavenet",
    "brandName": "WaveNet 浪网",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "xingdaomeng": {
    "brandSlug": "xingdaomeng",
    "brandName": "星岛梦",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "sogo": {
    "brandSlug": "sogo",
    "brandName": "sogo云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "kuaili": {
    "brandSlug": "kuaili",
    "brandName": "快狸",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "ermao": {
    "brandSlug": "ermao",
    "brandName": "二猫云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  }
};
