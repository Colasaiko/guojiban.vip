// 免费公开节点来源（GitHub 开源项目），供读者与付费专线对比体验
// 更新频率依据 GitHub 提交记录；「最近更新」时间在构建时与页面打开时从 GitHub API 读取
// 节点数量与可用性本站未验证；链接内容由项目维护者控制，随时可能变动

export interface FreeNodeSource {
  id: string;
  badge: string;
  name: string;
  type: string;
  url: string;
  // GitHub 项目页：让读者自己查看来源、更新记录后再决定是否使用
  repoUrl: string;
  repoName: string;
  // 订阅文件在仓库中的路径，用于查询最后一次提交时间
  filePath: string;
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
    filePath: 'c.yaml',
    updateFrequency: '每天自动更新一次',
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
    filePath: 'output/clash.yaml',
    updateFrequency: '约每小时自动更新',
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
    filePath: 'v.txt',
    updateFrequency: '每天自动更新一次',
    nodeCountEstimate: '数量随更新变化',
    protocols: ['VLESS', 'VMess', 'Trojan', 'SS'],
    clientSupport: 'v2rayN / v2rayNG / Shadowrocket（小火箭）',
    description: '通用 Base64 格式的公开节点订阅，可以直接填入 v2rayN、v2rayNG 或小火箭。节点由第三方提供，可用性与安全性本站无法保证。'
  }
};

// 构建时读取订阅文件在 GitHub 的最后一次提交时间；失败（网络、限流）时返回 null，页面打开后会再尝试
export async function fetchLastUpdated(source: FreeNodeSource): Promise<string | null> {
  const api = `https://api.github.com/repos/${source.repoName}/commits?path=${encodeURIComponent(source.filePath)}&per_page=1`;
  try {
    const res = await fetch(api, { headers: { Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const commits = await res.json();
    return commits?.[0]?.commit?.committer?.date ?? null;
  } catch {
    return null;
  }
}
