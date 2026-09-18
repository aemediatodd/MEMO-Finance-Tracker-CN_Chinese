# MEMO Finance Tracker 中文版 / Chinese Edition

> **非官方中文衍生版 / Unofficial Chinese derivative**
>
> 本加载项基于 [LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker)
> 修改，由 [aemediatodd](https://github.com/aemediatodd) 独立维护，与上游维护者无隶属或背书关系。
>
> This add-on is derived from
> [LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker),
> independently maintained by [aemediatodd](https://github.com/aemediatodd),
> and is not affiliated with or endorsed by upstream.

## 中文说明

MEMO 是一款在 Home Assistant 中运行、本地优先的个人记账工具。Web 界面通过
Ingress 提供，数据保存在本地 SQLite 数据库中，关键指标可通过 MQTT Discovery
发布为 Home Assistant 传感器。

### 中文版特性

- 完整简体中文界面和中文日期格式。
- 默认使用人民币 `CNY` 和 MQTT 单位 `¥`。
- 支持中文、英文和德文小票 OCR。
- 快速记账和多条件筛选。
- 仪表盘、周期支出、项目预算、预测和报表。
- CSV/PDF 导出和 JSON 备份恢复。
- 可选本地视觉 AI；默认关闭，无需云服务。

### 前置条件

- Home Assistant OS 或 Supervised。
- 正在运行的 MQTT broker，推荐 Mosquitto broker 加载项。
- 已配置 Home Assistant MQTT 集成。

没有 MQTT 时仍可记账，但不会生成 Home Assistant 传感器。

### 安装

在 Home Assistant 加载项商店的 **仓库** 中添加：

```text
https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese
```

安装后保存配置并启动加载项。详细步骤见
[安装与升级说明](INSTALL-ZH-CN.md)。

### 配置

| 配置项 | 默认值 | 说明 |
|---|---:|---|
| `ai_enabled` | `false` | 可选本地视觉 AI；首次启用下载约 2.8 GB。 |
| `mqtt_host` | `core-mosquitto` | MQTT broker 主机名。 |
| `mqtt_port` | `1883` | MQTT broker 端口。 |
| `mqtt_username` | 空 | MQTT 用户名；留空时继承服务凭据。 |
| `mqtt_password` | 空 | MQTT 密码；留空时继承服务凭据。 |
| `mqtt_base_topic` | `memo` | MQTT 主题前缀。 |
| `mqtt_discovery_prefix` | `homeassistant` | MQTT Discovery 前缀。 |
| `mqtt_currency` | `¥` | MQTT 金额传感器单位。 |
| `mqtt_publish_interval` | `300` | 指标发布间隔，单位为秒。 |

### 数据与备份

数据库位于 `/data/memo.db`。Home Assistant 加载项备份包含该数据。升级前建议同时
从 MEMO 导出 JSON，并创建 Home Assistant 完整备份。

### 小票识别

新建交易时可拍照或选择图片。基础识别使用 Tesseract 和 OpenCV，在本机提取金额、
日期和商户名称，保存前必须由用户核对。启用本地 AI 后，会使用视觉模型再次分析图片。

### 本地 AI

本地 AI 默认关闭，使用 Qwen2.5-VL-3B-Instruct GGUF 和 `llama.cpp`。首次启用需要
下载约 2.8 GB，建议预留约 4 GB 内存、3 GB 磁盘，并使用支持 AVX2 的 64 位 CPU。
模型下载后，推理在本机完成。关闭 AI 后，小票识别会自动使用 Tesseract。

### MQTT 传感器

- `sensor.memo_income_this_month`
- `sensor.memo_expenses_this_month`
- `sensor.memo_balance_this_month`
- `sensor.memo_transactions_this_month`

### 常见问题

- **没有传感器：** 检查 Mosquitto、MQTT 集成和 MEMO 日志，然后重启加载项。
- **OCR 不可用：** 重启加载项并检查日志中的 Tesseract/OCR 错误。
- **AI 一直未就绪：** 检查网络、`/data` 剩余空间和日志中的 `[MEMO AI]`；也可保持关闭。
- **语言或货币未变化：** 旧数据库设置会被保留，请在 MEMO 的 **设置 -> 常规** 中修改。

## English

MEMO is a local-first personal finance tracker for Home Assistant. Its web UI is
served through Ingress, data is stored in a local SQLite database, and key
metrics can be published as Home Assistant entities through MQTT Discovery.

### Chinese edition features

- Complete Simplified Chinese interface and localized dates.
- CNY defaults with `¥` as the MQTT monetary unit.
- Chinese, English, and German receipt OCR.
- Fast transaction entry and multi-field filters.
- Dashboard, schedules, project budgets, forecasts, and reports.
- CSV/PDF export and JSON backup/restore.
- Optional on-device vision AI, disabled by default and requiring no cloud service.

### Prerequisites

- Home Assistant OS or Supervised.
- A running MQTT broker; the Mosquitto broker add-on is recommended.
- The Home Assistant MQTT integration configured.

MEMO remains usable without MQTT, but Home Assistant sensor entities will not be created.

### Installation

Add this URL under **Repositories** in the Home Assistant Add-on Store:

```text
https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese
```

Install the add-on, save its configuration, and start it. See
[Installation and Upgrade](INSTALL-ZH-CN.md) for detailed steps.

### Configuration

| Option | Default | Description |
|---|---:|---|
| `ai_enabled` | `false` | Optional local vision AI; first enable downloads about 2.8 GB. |
| `mqtt_host` | `core-mosquitto` | MQTT broker hostname. |
| `mqtt_port` | `1883` | MQTT broker port. |
| `mqtt_username` | empty | MQTT username; leave empty to inherit service credentials. |
| `mqtt_password` | empty | MQTT password; leave empty to inherit service credentials. |
| `mqtt_base_topic` | `memo` | MQTT base topic. |
| `mqtt_discovery_prefix` | `homeassistant` | MQTT Discovery prefix. |
| `mqtt_currency` | `¥` | MQTT monetary sensor unit. |
| `mqtt_publish_interval` | `300` | Metric publish interval in seconds. |

### Data and backups

The database is stored at `/data/memo.db` and is included in Home Assistant
add-on backups. Before upgrading, export JSON from MEMO and create a full Home
Assistant backup.

### Receipt scanning

Take a photo or select an image while creating a transaction. The baseline
Tesseract and OpenCV pipeline extracts the amount, date, and merchant locally;
always review the suggestion before saving. When local AI is enabled, a vision
model also analyzes the image.

### Local AI

Local AI is disabled by default and uses Qwen2.5-VL-3B-Instruct GGUF with
`llama.cpp`. First enable downloads about 2.8 GB. Allow roughly 4 GB of RAM,
3 GB of disk, and a modern 64-bit AVX2 CPU. Inference is local after download.
With AI disabled, receipt scanning automatically falls back to Tesseract.

### MQTT sensors

- `sensor.memo_income_this_month`
- `sensor.memo_expenses_this_month`
- `sensor.memo_balance_this_month`
- `sensor.memo_transactions_this_month`

### Troubleshooting

- **No sensors:** check Mosquitto, the MQTT integration, and the MEMO log, then restart.
- **OCR unavailable:** restart and inspect the log for Tesseract/OCR errors.
- **AI never ready:** check network access, free space under `/data`, and `[MEMO AI]` log entries.
- **Language or currency unchanged:** older database settings persist; update them under **Settings -> General**.

## Privacy and license / 隐私与许可证

MEMO 不使用账户、遥测或云同步。仅在用户启用本地 AI 时联网下载模型。

MEMO has no accounts, telemetry, or cloud synchronization. It accesses the
network for AI only when the user enables the model download.

本修改版与上游代码均按照 GNU GPL v3 分发。完整归属声明见仓库根目录的
`NOTICE.md`。This derivative and the upstream code are distributed under GNU
GPL v3. See the repository-level `NOTICE.md` for full attribution.
