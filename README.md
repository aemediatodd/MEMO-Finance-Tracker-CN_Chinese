# MEMO Finance Tracker 中文版 / Chinese Edition

> [!IMPORTANT]
> **非官方中文衍生版。** 本项目由 [aemediatodd](https://github.com/aemediatodd)
> 独立维护，基于 [LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker)
> 修改，并未获得上游作者的官方认可或背书。
>
> **Unofficial Chinese derivative.** This repository is independently maintained
> by [aemediatodd](https://github.com/aemediatodd), based on
> [LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker),
> and is not affiliated with or endorsed by the upstream maintainer.

<div align="center">

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
![Home Assistant Add-on](https://img.shields.io/badge/Home%20Assistant-Add--on-41BDF5?logo=home-assistant&logoColor=white)
![Version](https://img.shields.io/badge/version-1.4.0--cn.1-success.svg)
![Languages](https://img.shields.io/badge/languages-中文%20%7C%20English-informational.svg)

一款在 Home Assistant 中运行、本地优先的个人记账工具。

A local-first personal finance tracker running as a Home Assistant add-on.

[一键添加到 Home Assistant / Add to Home Assistant](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Faemediatodd%2FMEMO-Finance-Tracker-CN_Chinese)

</div>

## 中文说明

### 项目定位

本仓库不是对上游项目的简单镜像，而是面向中文 Home Assistant 用户维护的衍生版本。
它保留 MEMO 的本地存储、Ingress、MQTT、报表和项目管理能力，并补充了完整简体中文、
人民币和中文小票识别支持。

| 项目 | 说明 |
|---|---|
| 本项目 | [aemediatodd/MEMO-Finance-Tracker-CN_Chinese](https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese) |
| 上游项目 | [LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker) |
| 基础版本 | MEMO 1.4.0 |
| 许可证 | GNU GPL v3 |
| 维护关系 | 独立维护，不代表上游作者 |

详细归属和修改范围见 [NOTICE.md](NOTICE.md)。

### 中文版新增内容

- 完整简体中文界面，默认语言为 `zh-CN`。
- 默认货币为人民币 `CNY`，金额和 Home Assistant MQTT 传感器使用 `¥`。
- 中文小票 OCR，使用 `chi_sim + eng + deu`，并识别中文合计和金额关键词。
- 中文日期、月份、季度、通知和无障碍标签。
- 修复窄屏手机上设置页面的布局问题。
- 保留英语和德语，可在设置页面切换语言与货币。

### 主要功能

- 快速记录收入和支出，并按类型、分类、项目、收款方和时间筛选。
- 仪表盘展示收入、支出、余额和趋势。
- 管理周期性支出，并根据历史交易生成建议。
- 使用看板或瀑布模式管理项目预算、计划成本与实际成本。
- 按月、季度和年度预测支出。
- 在浏览器本地导出 CSV 和 PDF 报表。
- 通过摄像头或图片识别小票；可选本地视觉 AI 提升识别效果。
- JSON 数据备份与恢复。
- 通过 MQTT Discovery 创建 Home Assistant 金额和交易数量传感器。
- 所有账本数据默认保存在加载项的 SQLite 数据库中。

### 安装要求

- Home Assistant OS 或 Home Assistant Supervised。
- 已安装并运行 MQTT broker，推荐官方 Mosquitto broker 加载项。
- 已在 Home Assistant 中配置 MQTT 集成。

没有 MQTT 时，MEMO 的记账界面仍可使用，但不会创建 Home Assistant MQTT 传感器。

### 安装

点击页面顶部的 Home Assistant 链接，或手动操作：

1. 打开 **设置 -> 加载项 -> 加载项商店**。
2. 打开右上角菜单，选择 **仓库**。
3. 添加以下地址：

   ```text
   https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese
   ```

4. 找到 **MEMO - Finance Tracker 中文版** 并安装。
5. 在加载项配置页填写 MQTT 设置，保存后启动加载项。
6. 从侧边栏或 **打开 Web UI** 进入 MEMO。

本地安装和升级说明见
[memo-finance-tracker/INSTALL-ZH-CN.md](memo-finance-tracker/INSTALL-ZH-CN.md)。

### 配置

| 配置项 | 默认值 | 说明 |
|---|---:|---|
| `ai_enabled` | `false` | 启用可选本地视觉 AI。首次启用会下载约 2.8 GB 模型。 |
| `mqtt_host` | `core-mosquitto` | MQTT broker 主机名。 |
| `mqtt_port` | `1883` | MQTT broker 端口。 |
| `mqtt_username` | 空 | MQTT 用户名；留空时尝试继承 Mosquitto 服务凭据。 |
| `mqtt_password` | 空 | MQTT 密码；留空时尝试继承 Mosquitto 服务凭据。 |
| `mqtt_base_topic` | `memo` | MQTT 主题前缀。 |
| `mqtt_discovery_prefix` | `homeassistant` | Home Assistant MQTT Discovery 前缀。 |
| `mqtt_currency` | `¥` | MQTT 金额传感器单位。 |
| `mqtt_publish_interval` | `300` | 指标重新发布间隔，单位为秒。 |

网页中的货币需要在 MEMO 的 **设置 -> 常规** 中选择。修改 `mqtt_currency` 不会换算
已有金额，也不会改变网页货币。

### 数据、备份与隐私

- SQLite 数据库位于加载项持久化目录 `/data/memo.db`。
- 数据会包含在 Home Assistant 的加载项备份中。
- 建议升级前同时创建 Home Assistant 备份并从 MEMO 导出 JSON。
- 项目没有账户、遥测或云同步。
- 仅在用户主动启用本地 AI 时，需要联网下载一次模型；推理在本机完成。

### 本地 AI

本地 AI 默认关闭。它使用 Qwen2.5-VL-3B-Instruct GGUF 和 `llama.cpp`，用于小票读取、
自动分类和月度摘要。建议预留约 4 GB 内存、3 GB 磁盘空间，并使用支持 AVX2 的 64 位 CPU。
硬件不足时保持关闭即可，普通 Tesseract OCR 和其他记账功能仍然可用。

### Home Assistant 传感器

配置 MQTT 后会创建：

```yaml
sensor.memo_income_this_month
sensor.memo_expenses_this_month
sensor.memo_balance_this_month
sensor.memo_transactions_this_month
```

## English

### About this edition

This repository is a maintained derivative for Chinese-speaking Home Assistant
users, not a mirror and not an official upstream localization. It keeps MEMO's
local storage, Ingress, MQTT, reporting, and project-management features while
adding Simplified Chinese, CNY defaults, and Chinese receipt recognition.

| Item | Details |
|---|---|
| This project | [aemediatodd/MEMO-Finance-Tracker-CN_Chinese](https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese) |
| Upstream | [LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker) |
| Base version | MEMO 1.4.0 |
| License | GNU GPL v3 |
| Relationship | Independently maintained; does not represent upstream |

See [NOTICE.md](NOTICE.md) for attribution and the complete modification scope.

### Changes in the Chinese edition

- Complete Simplified Chinese interface with `zh-CN` as the default locale.
- CNY as the default currency and `¥` for Home Assistant MQTT monetary sensors.
- Chinese receipt OCR using `chi_sim + eng + deu`, including Chinese total keywords.
- Localized dates, months, quarters, notifications, and accessibility labels.
- Responsive fixes for the Settings page on narrow mobile screens.
- English and German remain available from Settings.

### Features

- Fast income and expense entry with type, category, project, recipient, and date filters.
- Dashboard for income, expenses, balance, and trends.
- Recurring schedules and pattern-based suggestions.
- Kanban and waterfall project planning with budgets and forecast-versus-booked costs.
- Monthly, quarterly, and yearly expense forecasts.
- Local CSV and PDF report export in the browser.
- Receipt scanning from camera or image, with optional on-device vision AI.
- JSON backup and restore.
- Home Assistant sensors through MQTT Discovery.
- Local SQLite storage in the add-on's persistent data volume.

### Requirements

- Home Assistant OS or Home Assistant Supervised.
- A running MQTT broker; the official Mosquitto broker add-on is recommended.
- The MQTT integration configured in Home Assistant.

MEMO still works as a finance application without MQTT, but Home Assistant MQTT
sensor entities will not be created.

### Installation

Use the Home Assistant link at the top of this page, or install manually:

1. Open **Settings -> Add-ons -> Add-on Store**.
2. Open the top-right menu and choose **Repositories**.
3. Add:

   ```text
   https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese
   ```

4. Install **MEMO - Finance Tracker Chinese Edition**.
5. Configure MQTT, save the configuration, and start the add-on.
6. Open MEMO from the sidebar or **Open Web UI**.

See [memo-finance-tracker/INSTALL-ZH-CN.md](memo-finance-tracker/INSTALL-ZH-CN.md)
for local installation and upgrade instructions.

### Configuration

| Option | Default | Description |
|---|---:|---|
| `ai_enabled` | `false` | Enable the optional local vision AI. The first enable downloads about 2.8 GB. |
| `mqtt_host` | `core-mosquitto` | MQTT broker hostname. |
| `mqtt_port` | `1883` | MQTT broker port. |
| `mqtt_username` | empty | MQTT username; leave empty to inherit Mosquitto service credentials. |
| `mqtt_password` | empty | MQTT password; leave empty to inherit Mosquitto service credentials. |
| `mqtt_base_topic` | `memo` | MQTT base topic. |
| `mqtt_discovery_prefix` | `homeassistant` | Home Assistant MQTT Discovery prefix. |
| `mqtt_currency` | `¥` | Unit used by MQTT monetary sensors. |
| `mqtt_publish_interval` | `300` | Metric republish interval in seconds. |

The web application's currency is selected under **Settings -> General**.
Changing `mqtt_currency` neither converts existing amounts nor changes the web currency.

### Data, backups, and privacy

- The SQLite database is stored at `/data/memo.db` in the persistent add-on volume.
- Home Assistant add-on backups include this data.
- Before upgrading, create a Home Assistant backup and export JSON from MEMO.
- There are no accounts, telemetry, or cloud synchronization.
- Network access for AI is needed only for the model download initiated by the user;
  inference then runs locally.

### Local AI

Local AI is disabled by default. It uses Qwen2.5-VL-3B-Instruct GGUF with
`llama.cpp` for receipt reading, auto-categorization, and monthly insights.
Allow roughly 4 GB of RAM, 3 GB of disk space, and a modern 64-bit AVX2 CPU.
Leave it disabled on limited hardware; Tesseract OCR and the rest of MEMO continue to work.

### Home Assistant sensors

After MQTT is configured, MEMO creates:

```yaml
sensor.memo_income_this_month
sensor.memo_expenses_this_month
sensor.memo_balance_this_month
sensor.memo_transactions_this_month
```

## Screenshots / 界面截图

| Transactions / 交易 | Reports / 报表 |
|---|---|
| ![Transactions](images/screenshot-transactions.png) | ![Reports](images/screenshot-reports.png) |

| Projects / 项目 | Settings / 设置 |
|---|---|
| ![Projects](images/screenshot-projects.png) | ![Settings](images/screenshot-settings.png) |

## Development / 开发

```bash
# Standalone Docker / 独立 Docker 运行
docker compose up --build

# Backend / 后端
cd memo-finance-tracker/backend
python -m uvicorn app.main:app --reload --port 8000

# Frontend / 前端
cd memo-finance-tracker/frontend
npm install
npm run dev
```

## Support and attribution / 支持与归属

- 中文衍生版问题请提交到本仓库的
  [Issues](https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese/issues)。
- Issues for this Chinese derivative belong in this repository's
  [issue tracker](https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese/issues).
- 如需支持原项目作者，可访问
  [LuMeX88 的赞助页面](https://www.buymeacoffee.com/LuMeX88)。
- To support the upstream author, visit
  [LuMeX88's sponsorship page](https://www.buymeacoffee.com/LuMeX88).

## License / 许可证

原始代码和本项目修改均按照 **GNU General Public License v3.0** 分发。
保留版权、许可证和源码提供义务。详见 [LICENSE](LICENSE) 和 [NOTICE.md](NOTICE.md)。

The upstream code and this project's modifications are distributed under the
**GNU General Public License v3.0**. Preserve copyright, license, and source
availability requirements. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
