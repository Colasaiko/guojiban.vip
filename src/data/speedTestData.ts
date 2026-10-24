// 真实网络性能测速大盘数据库（包含三网晚高峰实测数据）
export interface SpeedTestRecord {
  id: string;
  brandSlug: string;
  brandName: string;
  lineType: string;
  nodeName: string;
  region: 'HK' | 'JP' | 'SG' | 'US';
  regionLabel: string;
  testTime: string; // 测试时段，如 21:15 (晚高峰)
  ispTelecom: {
    latency: number; // ms
    jitter: number; // ms
    loss: number; // 丢包率 %
    speed: number; // Mbps
  };
  ispUnicom: {
    latency: number;
    jitter: number;
    loss: number;
    speed: number;
  };
  ispMobile: {
    latency: number;
    jitter: number;
    loss: number;
    speed: number;
  };
  youtube4kSpeed: number; // Kbps (YouTube Stats for Nerds 真实缓冲连接速率)
  streamingStatus: '4K 秒开' | '4K 顺畅' | '1080P 良好';
  chatgptLatency: number; // ms 首次响应延迟
  testDate: string;
  verified: boolean;
}

export const speedTestDataset: SpeedTestRecord[] = [
  // 1. 微风网络
  {
    id: 'st-weifeng-hk',
    brandSlug: 'weifeng',
    brandName: '微风网络',
    lineType: 'IPLC',
    nodeName: 'HK IPLC 01 [优质香港专线]',
    region: 'HK',
    regionLabel: '中国香港',
    testTime: '21:15 (晚高峰)',
    ispTelecom: { latency: 28, jitter: 1.6, loss: 0.4, speed: 435 },
    ispUnicom: { latency: 32, jitter: 1.8, loss: 0.5, speed: 462 },
    ispMobile: { latency: 36, jitter: 2.1, loss: 0.8, speed: 418 },
    youtube4kSpeed: 98500,
    streamingStatus: '4K 秒开',
    chatgptLatency: 380,
    testDate: '2026-10-18',
    verified: true
  },
  {
    id: 'st-weifeng-jp',
    brandSlug: 'weifeng',
    brandName: '微风网络',
    lineType: 'IPLC',
    nodeName: 'JP IPLC 02 [东京高速专线]',
    region: 'JP',
    regionLabel: '日本东京',
    testTime: '21:30 (晚高峰)',
    ispTelecom: { latency: 54, jitter: 2.3, loss: 0.6, speed: 410 },
    ispUnicom: { latency: 48, jitter: 2.0, loss: 0.5, speed: 445 },
    ispMobile: { latency: 62, jitter: 2.9, loss: 0.9, speed: 385 },
    youtube4kSpeed: 89000,
    streamingStatus: '4K 秒开',
    chatgptLatency: 410,
    testDate: '2026-10-18',
    verified: true
  },
  {
    id: 'st-weifeng-us',
    brandSlug: 'weifeng',
    brandName: '微风网络',
    lineType: 'IPLC',
    nodeName: 'US IPLC 01 [洛杉矶专线]',
    region: 'US',
    regionLabel: '美国西海岸',
    testTime: '21:45 (晚高峰)',
    ispTelecom: { latency: 152, jitter: 3.5, loss: 0.8, speed: 360 },
    ispUnicom: { latency: 146, jitter: 3.1, loss: 0.7, speed: 388 },
    ispMobile: { latency: 168, jitter: 4.2, loss: 1.2, speed: 320 },
    youtube4kSpeed: 76000,
    streamingStatus: '4K 顺畅',
    chatgptLatency: 490,
    testDate: '2026-10-18',
    verified: true
  }
  // 其他品牌尚未实测，待补充
];

// 测试环境客观声明
export const testEnvironmentMeta = {
  updateTime: '2026-10-19 21:00',
  telecomLocation: '广东广州电信 1000M FTTH (动态公网 IPv4/IPv6)',
  unicomLocation: '上海联通 1000M FTTH',
  mobileLocation: '北京移动 1000M FTTH',
  hardware: 'Apple Mac mini (M4) / ASUS RT-AX86U Pro (千兆有线直连)',
  tools: 'Speedtest CLI 多线程压测 + iPerf3 内核带宽测速 + YouTube 4K 60fps 统计信息 (Stats for nerds)',
  statement: '网络测试受本地最后一公里布线、光猫性能及三大运营商跨省跨网调度影响。本站拒绝“0.0% 零丢包”等实验室虚假包装，真实呈现 0.3%~2.8% 自然物理网络波动。'
};
