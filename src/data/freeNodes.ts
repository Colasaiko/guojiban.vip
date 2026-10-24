// 每日自动更新免费测试节点数据源
// 聚合 GitHub 活跃开源每日自动化维护与测速订阅源

export interface FreeNodeSource {
  id: string;
  badge: string;
  name: string;
  type: string;
  url: string;
  updateFrequency: string;
  nodeCountEstimate: string;
  protocols: string[];
  clientSupport: string;
  statusTag: string;
  description: string;
}

export const freeNodeSources: Record<string, FreeNodeSource> = {
  test1: {
    id: 'test1',
    badge: '每日自动更新 · 线路 A',
    name: '全协议公益聚合节点池',
    type: 'Clash YAML 配置文件',
    url: 'https://raw.githubusercontent.com/free18/v2ray/main/c.yaml',
    updateFrequency: '每小时自动轮询抓取 · 每日健康检测',
    nodeCountEstimate: '约 80~150+ 节点',
    protocols: ['Shadowsocks', 'VMess', 'Trojan', 'VLESS'],
    clientSupport: 'Clash Verge / Clash Nyanpasu / Shadowrocket（小火箭）',
    statusTag: '每日自动化抓取',
    description: '通过开源爬虫每日全网抓取并清洗公开节点，自动生成标准 Clash 订阅配置文件，无须注册即可直接导入客户端免费试用。'
  },
  test2: {
    id: 'test2',
    badge: '实时清洗优选 · 线路 B',
    name: '真实流量验证高可用节点池',
    type: 'Clash YAML 配置文件',
    url: 'https://raw.githubusercontent.com/Au1rxx/free-vpn-subscriptions/main/output/clash.yaml',
    updateFrequency: '每小时自动化轮询抓取 · 0 重名节点清洗',
    nodeCountEstimate: '约 300~400+ 节点',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan'],
    clientSupport: 'Clash Verge Rev / Clash Nyanpasu / 小火箭 / Mihomo',
    statusTag: '严格格式校验通过',
    description: '每小时自动从开源渠道抓取，经自动化脚本进行真实 HTTP 流量验证与全局唯一节点重命名清洗，0 冲突重名，完美通过 Clash 内核配置校验。'
  },
  test3: {
    id: 'test3',
    badge: '全平台通用 · 线路 C',
    name: '多协议通用 Base64 订阅源',
    type: 'Base64 通用订阅链接',
    url: 'https://raw.githubusercontent.com/free18/v2ray/main/v.txt',
    updateFrequency: '每日定时自动化抓取去重 · 真实流量验证',
    nodeCountEstimate: '约 100~300+ 节点',
    protocols: ['VLESS', 'VMess', 'Trojan', 'SS'],
    clientSupport: 'v2rayN / v2rayNG / Shadowrocket / NekoBox / Karing',
    statusTag: '每日健康巡检',
    description: '标准 Base64 格式订阅源，自动聚合数百条 VLESS、Trojan 与 VMess 节点，无需转换即可直接填入 v2rayN、v2rayNG 或小火箭订阅管理中一键更新节点。'
  }
};
