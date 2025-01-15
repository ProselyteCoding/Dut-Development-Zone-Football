

# Dut Development Zone Football 大工开发区足球

约球、打卡、战术、新闻、论坛、球星卡DIY...用爱发电，尝试仿照其他大俱乐部官网做一个网站，磨练自己web技术的同时希望能为平时的足球生活带来一些趣味和便利。

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://github.com/ProselyteCoding/Dut-Development-Zone-Football/">
    <img src="readmeAssets/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Dut Development Zone Football 大工开发区足球</h3>
  <p align="center">
    约球、打卡、战术、新闻、论坛、球星卡DIY...用爱发电，尝试仿照其他大俱乐部官网做一个网站，磨练自己web技术的同时希望能为平时的足球生活带来一些趣味和便利。
    <br />
    <a href="https://github.com/ProselyteCoding/Dut-Development-Zone-Football"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ProselyteCoding/Dut-Development-Zone-Football">查看Demo</a>
    ·
    <a href="https://github.com/ProselyteCoding/Dut-Development-Zone-Football/issues">报告Bug</a>
    ·
    <a href="https://github.com/ProselyteCoding/Dut-Development-Zone-Football/issues">提出新特性</a>
  </p>

</p>

 
## 目录

- [上手指南](#上手指南)
  - [开发前的配置要求](#开发前的配置要求)
  - [安装步骤](#安装步骤)
- [文件目录说明](#文件目录说明)
- [技术栈](#技术栈)
- [部署](#部署)
- [使用到的框架](#使用到的框架)
- [贡献者](#贡献者)
  - [如何参与开源项目](#如何参与开源项目)
- [版本控制](#版本控制)
- [作者](#作者)
- [鸣谢](#鸣谢)

##### 当前进展
1. 页面设计: Navbar、Sidebar、Footer进行了初步设计，样式有待打磨。
2. authentication: 使用了之前todolist项目的代码，还未适配。
3. DIY球星卡: 对于默认图片实现了可拖拽和变形功能，实现了导出图片功能，右侧控制部分设计已完成还差逻辑实现以及与左侧的关联以及和服务器连接。是Card页面的主要组件。
4. 顶部Feature大图片和Slider轮换图设计已完成，图片切换功能已完成，后续添加切换动画。增加了弹幕和打字机特效。计划将整体做成类似B站的视频播放器窗口。
5. 打卡部分，刚完成布局框架。引入3d模型世界杯。排行榜和打卡图还未开始。打卡信息等待完善。
6. Footer初步设计，细节有待增多完善。
7. 重构Card部分为CardPF，主体为旋转卡片列表。提供一个跳转链接，将因空间所限无法完整显示的部分改为新的Card页。
8. 将Home页分为不同模块，黏性滑轮。
9. 在Home页做了NewsPF部分，作为新闻预览，主体为双面翻页卡。
其他：将CSS替换为SASS（.scss），进一步完善了项目框架。
plus.参加大创及其他比赛，更新进度暂缓

###### 开发前的配置要求

1. xxxxx x.x.x
2. xxxxx x.x.x

###### **安装步骤**

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo

```sh
git clone https://github.com/shaojintian/Best_README_template.git
```

### 文件目录说明

暂未完成，更新变化大，不便展示

### 技术栈

前端：React框架、sass预处理css，之后将使用typescript、jsx代码将逐步改为tsx 
后端：node.js、express框架
数据库管理：MySQL

### 部署

目前使用github-pages工具部署，部署路径：[https://proselytecoding.github.io/Dut-Development-Zone-Football/](https://proselytecoding.github.io/Dut-Development-Zone-Football/)。
后续将购置专用域名及服务器。

### 使用到的框架

- [React](https://react.com)
- [Express](https://express.com)
- [Sass](https://sass.com)

### 贡献者

请阅读**CONTRIBUTING.md** 查阅为该项目做出贡献的开发者。（暂未编写）

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。
（暂未编写）

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

王一帆
邮箱:3197908785@qq.com
微信:wxid_d3cab3vag4dr22
qq:3197908785   

 *您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/ProselyteCoding/Dut-Development-Zone-Football/blob/master/LICENSE.txt)

### 鸣谢

感谢支持我这项工作并提出许多brilliant ideas的朋友们，感谢你们不吝赞美之词给了我无限的动力坚持下去。感谢大连理工大学OurEDA实验室将我领入Web开发的大门，让我有了全新的方向和学习的动力。最后，感谢足球，感谢那份热爱。


- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [xxxxxxxxxxxxxx](https://connoratherton.com/loaders)

<!-- links -->
[your-project-path]:ProselyteCoding/Dut-Development-Zone-Football
[contributors-shield]: https://img.shields.io/github/contributors/ProselyteCoding/Dut-Development-Zone-Football.svg?style=flat-square
[contributors-url]: https://github.com/ProselyteCoding/Dut-Development-Zone-Football/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ProselyteCoding/Dut-Development-Zone-Football.svg?style=flat-square
[forks-url]: https://github.com/ProselyteCoding/Dut-Development-Zone-Football/network/members
[stars-shield]: https://img.shields.io/github/stars/ProselyteCoding/Dut-Development-Zone-Football.svg?style=flat-square
[stars-url]: https://github.com/ProselyteCoding/Dut-Development-Zone-Football/stargazers
[issues-shield]: https://img.shields.io/github/issues/ProselyteCoding/Dut-Development-Zone-Football.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/ProselyteCoding/Dut-Development-Zone-Football.svg
[license-shield]: https://img.shields.io/github/license/ProselyteCoding/Dut-Development-Zone-Football.svg?style=flat-square
[license-url]: https://github.com/ProselyteCoding/Dut-Development-Zone-Football/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ProselyteCoding
