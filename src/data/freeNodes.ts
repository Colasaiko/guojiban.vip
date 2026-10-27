// 免费公开节点来源（GitHub 开源项目），供读者与付费专线对比体验
// 节点数量、更新频率等均为项目自述，本站未验证；链接内容由项目维护者控制，随时可能变动

export interface FreeNodeSource {
  id: string;
  badge: string;
  name: string;
  type: string;
  url: string;
  // GitHub 项目页：让读者自己查看来源、更新记录后再决定是否使用
  repoUrl: string;
  repoName: string;
  updateFrequency: string;
  nodeCountEstimate: string;
  protocols: string[];
  clientSupport: string;
  description: string;
}

export const freeNodeSources: Record<string, FreeNodeSource> = {
  test1: {
    id: 'test1',
    badge: '公开免费节点 · 线路 A',
    name: '公开节点聚合（Clash 格式）',
    type: 'Clash YAML 配置文件',
    url: 'https://raw.githubusercontent.com/free18/v2ray/main/c.yaml',
    repoUrl: 'https://github.com/free18/v2ray',
    repoName: 'free18/v2ray',
    updateFrequency: '项目自述定期更新（本站未验证）',
    nodeCountEstimate: '数量随更新变化',
    protocols: ['Shadowsocks', 'VMess', 'Trojan', 'VLESS'],
    clientSupport: 'Clash Verge Rev / Clash Meta / Shadowrocket（小火箭）',
    description: 'GitHub 开源项目从公开渠道收集节点，生成 Clash 订阅文件，不需要注册即可导入客户端试用。节点由第三方提供，可用性与安全性本站无法保证。'
  },
  test2: {
    id: 'test2',
    badge: '公开免费节点 · 线路 B',
    name: '公开节点聚合（Clash 格式）',
    type: 'Clash YAML 配置文件',
    url: 'https://raw.githubusercontent.com/Au1rxx/free-vpn-subscriptions/main/output/clash.yaml',
    repoUrl: 'https://github.com/Au1rxx/free-vpn-subscriptions',
    repoName: 'Au1rxx/free-vpn-subscriptions',
    updateFrequency: '项目自述定期更新（本站未验证）',
    nodeCountEstimate: '数量随更新变化',
    protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan'],
    clientSupport: 'Clash Verge Rev / Clash Meta / Shadowrocket（小火箭）',
    description: 'GitHub 开源项目自动收集公开节点并整理成 Clash 订阅文件。节点由第三方提供，可用性与安全性本站无法保证。'
  },
  test3: {
    id: 'test3',
    badge: '公开免费节点 · 线路 C',
    name: '公开节点聚合（通用订阅）',
    type: 'Base64 通用订阅链接',
    url: 'https://raw.githubusercontent.com/free18/v2ray/main/v.txt',
    repoUrl: 'https://github.com/free18/v2ray',
    repoName: 'free18/v2ray',
    updateFrequency: '项目自述定期更新（本站未验证）',
    nodeCountEstimate: '数量随更新变化',
    protocols: ['VLESS', 'VMess', 'Trojan', 'SS'],
    clientSupport: 'v2rayN / v2rayNG / Shadowrocket（小火箭）',
    description: '通用 Base64 格式的公开节点订阅，可以直接填入 v2rayN、v2rayNG 或小火箭。节点由第三方提供，可用性与安全性本站无法保证。'
  }
};
