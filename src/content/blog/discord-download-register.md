---
title: 'Discord怎么下载注册？为什么打不开？挂了梯子语音一直RTC连接中怎么办（2026）'
description: 'Discord（DC）官网入口与 iPhone、安卓、电脑版下载注册方法，国内打不开的原因，以及挂了梯子/机场后仍然一直连接中、语音卡在 RTC 连接、人机验证不显示的逐项排查方法。'
pubDate: 2026-10-21
updatedDate: 2026-10-23
category: social
tags: ["Discord","DC","Discord下载","Discord打不开","RTC连接","游戏开黑"]
featured: false
author: 国际版VIP编辑部
example: false
---

> **先说结论**：Discord 官方网址是 `https://discord.com/`。国内网络无法直接访问，需要通过梯子。挂了梯子文字能用、语音却一直"RTC 连接中"，几乎都是因为**节点不支持 UDP**；注册时人机验证不显示，则是**验证域名没走代理**，下文逐项讲清楚。

## 一、Discord 是什么？官网入口是哪个？

Discord（简称 DC）是一款社区聊天软件，最早用于游戏语音开黑，现在很多海外游戏、AI 工具、开源项目都用 Discord 做官方社区。

- 官方网址：`https://discord.com/`
- 电脑版下载：`https://discord.com/download`
- 邀请链接格式：`discord.gg/xxxx`

几个基本概念：
- **服务器（Server）**：一个独立社区，通过邀请链接加入；
- **频道（Channel）**：服务器里按主题划分的文字或语音聊天室；
- **身份组（Role）**：区分管理员、成员等不同权限。

## 二、Discord 怎么下载和注册？

### iPhone / iPad

国区 App Store 搜不到，需要切换到**非中国大陆地区的 Apple ID**，搜索"Discord"，认准开发者为 **Discord, Inc.**。

### 安卓手机

在 **Google Play** 搜索"Discord"。没有 Google Play 的手机可以先看：[Google Play 安装前须知](/blog/google-play-android-guide/)。

### 电脑

从 `discord.com/download` 下载 Windows / Mac 客户端，或直接用浏览器打开网页版。

### 注册需要什么？

- 一个邮箱（推荐 Gmail，见 [Gmail 注册指南](/blog/gmail-register-guide/)）；
- 能通过人机验证的网络环境；
- 部分服务器要求验证手机号后才能发言。

## 三、为什么 Discord 在国内打不开？

| 你看到的现象 | 原因 |
| --- | --- |
| 网页打不开 / 客户端一直"正在连接" | 国内网络无法直连 Discord |
| 注册时人机验证不显示或一直失败 | 验证服务的域名没走代理，或 IP 被标记 |
| 文字正常，语音一直"RTC 连接中" | 语音走 UDP，节点或客户端没有转发 UDP |
| 语音能连但卡顿、断断续续 | 节点延迟高或晚高峰不稳定 |
| 提示账号存在异常活动、要求验证 | 注册或登录环境被风控 |

## 四、挂了梯子/机场，Discord 还是用不了？逐项排查

### 1. 语音一直"RTC 连接中"

这是 Discord 最常见的问题。Discord 语音使用 **UDP 协议**，需要同时满足：
- 节点本身**支持 UDP 转发**（部分廉价节点不支持）；
- 代理客户端开启了 **TUN / VPN 模式**（只开系统代理时，UDP 流量不会经过代理）。

电脑客户端还可以在"设置 → 语音和视频"里尝试关闭"服务质量高数据包优先级（QoS）"。

### 2. 人机验证不显示

Discord 的人机验证由第三方服务提供（如 `hcaptcha.com`），这个域名没走代理时验证框就出不来。切**全局模式**再试；一直验证失败，就换一个 IP 更干净的节点。

### 3. 分流规则有没有让 Discord 走代理？

确认以下域名走代理：`discord.com`、`discord.gg`、`discordapp.com`、`discordapp.net`、`discord.media`。

### 4. 客户端一直"正在连接"

- 先用网页版 `discord.com/app` 测试，网页能用说明是客户端没走代理；
- 电脑客户端不一定读取系统代理，开启 TUN 模式最稳妥。

### 5. 账号被要求验证或锁定

按提示完成手机号或邮箱验证。注册和使用时尽量**固定同一地区、同一节点**，新号不要短时间内大量加服务器、私信陌生人。

## 五、用 Discord，梯子要怎么选？

1. **支持 UDP**：想用语音开黑，这是硬条件，购买前确认节点支持 UDP 转发；
2. **低延迟**：语音和游戏对延迟敏感，尽量选离自己近、延迟低的节点（如香港、日本、新加坡）；
3. **晚高峰稳定**：开黑大多在晚上，晚高峰丢包会直接表现为语音卡顿；
4. **先月付再长期**：先实际测试语音和文字都稳定，再考虑续费。

👉 可以参考我们整理的 [梯子推荐与选购指南](/vpn/)，按上面几点对比后再选择。

## 六、常见问题

### Midjourney 还必须通过 Discord 使用吗？

不必须。Midjourney 现在已经有网页版，也仍然保留 Discord 的使用方式，两种方式的区别见：[Midjourney 网页版与 Discord 使用方式](/blog/midjourney-discord-guide/)。

### Discord 和游戏加速器有什么区别？

Discord 是聊天软件，加速器是优化游戏网络的工具，两者用途不同。想了解加速器和梯子的区别，可以看：[游戏加速器和 VPN 有什么区别](/blog/vpn-vs-game-accelerator/)。

### Discord 有中文界面吗？

有。在"用户设置 → 语言"里选择简体中文或繁體中文即可。

---

其他海外 App 的官方入口，可以在 [100+ 海外官方资源直达](/resources/) 查找。
