---
sidebar_position: 1
title: 👋 欢迎！
---

这里是数字支持服务的全部笔记。你可以点击下方按钮开始阅读，也可以参与贡献，帮助完善笔记内容！

<!--truncate-->

import Link from '@docusaurus/Link';
import GridLink from '@site/src/components/GridLink';
import GetStartedCard from '@site/src/components/GetStartedCard';
import {
  DeviceTabletIcon,
  CodeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid';
import {
  Discord as DiscordIcon,
} from '@styled-icons/boxicons-logos';
import {
  ReactIcon,
  FlutterIcon,
  JSIcon,
  AndroidIcon,
  AppleIcon,
  SDKIcon,
  APIIcon,
  ReactRevolveIcon,
  KotlinIcon,
  SwiftIcon,
  ReactNativeIcon,
} from '@site/src/assets/icons';
import { HashChange } from '@site/src/components/HashChange';

<!-- Hack for highlighting menu links with anchor tags -->

<HashChange
  onLoad={() => {
    const topLink = document.querySelector(
      'a.menu__link[href="/docs/home/introduction"]'
    );
    if (topLink) {
      topLink.onclick = (e) => {
        document
          .querySelectorAll('a.menu__link')
          ?.forEach((link) => link?.classList.remove('menu__link--active'));
        e.target.classList.add('menu__link--active');
      };
    }
  }}
  onChange={() => {
    const { hash } = window.location;
    if (hash < 2) return;
    document
      .querySelectorAll('a.menu__link')
      ?.forEach((link) => link.classList.remove('menu__link--active'));
    let link =
      document.querySelector(`a.menu__link[href="${hash}"]`) ??
      document.querySelector('a.menu__link[href="/docs/home/introduction"]');
    link?.classList.add('menu__link--active');
  }}
/>


## 快速开始

<div className="grid xl:grid-cols-6 gap-4">

<GetStartedCard
  title="业务背景"
  className="xl:col-span-2 from-[#4B6CB7] to-[#3d6e25]"
  getStartedLink="/business/About-business"
  repoLink="/business/About-business"
  bgClassName="h-48 rotate-[-28deg] right-[-48px] bottom-[-6rem]"
/>
<GetStartedCard
  title="数据"
  className="xl:col-span-2 from-[#3b5694] to-[#7d3059]"
  getStartedLink="/data/About-data"
  repoLink="/data/About-data"
  bgClassName="h-48 rotate-[-28deg] right-[-48px] bottom-[-6rem]"
/>
<GetStartedCard
  title="数字环境"
  className="xl:col-span-2 from-[#3b5694] to-[#296b69]"
  getStartedLink="/digital-environments/About-digital-environments"
  repoLink="/digital-environments/About-digital-environments"
  bgClassName="h-48 rotate-[-28deg] right-[-48px] bottom-[-6rem]"
/>
</div>

<!-- ### Pick a client SDK

<div className="grid xl:grid-cols-6 gap-4">

<GridLink
  to="/react/quickstart"
  className="xl:col-span-3 py-6"
  title="Client SDK"
  Icon={
    <ReactIcon className="h-10 mr-4" />
  }
/>

</div> -->

## 最近更新

<div className="grid xl:grid-cols-6 gap-4">

<GridLink
  to="/testing/testing/white-box"
  className="xl:col-span-2 py-4"
  title="⬜ 白盒测试"
  subtitle="新增白盒测试页面"
/>

<GridLink
  to="/tools/mis-dashboard"
  className="xl:col-span-2 py-4"
  title="🖥️ MIS 仪表板"
  subtitle="新增 MIS 仪表板页面"
/>
</div>
