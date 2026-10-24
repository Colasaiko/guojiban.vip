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
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
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
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "firefly": {
    "brandSlug": "firefly",
    "brandName": "FireFly 萤火虫",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
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
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "wuyou": {
    "brandSlug": "wuyou",
    "brandName": "无忧链接",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
  },
  "kuajie": {
    "brandSlug": "kuajie",
    "brandName": "跨界云",
    "testDate": "未测试",
    "notice": "该品牌尚未进行实测，测速数据待补充。",
    "nodes": []
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
