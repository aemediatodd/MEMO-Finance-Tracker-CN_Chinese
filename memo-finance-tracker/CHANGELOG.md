# 更新日志 / Changelog

本文件先列出中文衍生版的变更，再以中英双语概述所采用的上游版本历史。

This file lists changes made by the Chinese derivative first, followed by a
bilingual summary of the included upstream release history.

## 1.4.0-cn.1

### 中文

- 增加完整简体中文界面，并将新安装的默认语言设为 `zh-CN`。
- 增加 CNY/人民币金额格式，MQTT 金额传感器默认使用 `¥`。
- 增加简体中文小票 OCR 和中文合计、金额关键词。
- 本地化日期、月份、季度、通知和无障碍标签。
- 修复窄屏手机上的设置页面布局。
- 替换残留的未翻译德语界面文本。
- 增加中英双语 README、加载项文档、安装说明、更新日志和归属声明。
- 明确标注本仓库为非官方、独立维护的中文衍生版本。

### English

- Added a complete Simplified Chinese interface and made `zh-CN` the default
  locale for new installations.
- Added CNY/RMB formatting with `¥` as the default MQTT monetary sensor unit.
- Added Simplified Chinese receipt OCR and Chinese total/amount keywords.
- Localized dates, months, quarters, notifications, and accessibility labels.
- Fixed the Settings layout on narrow mobile screens.
- Replaced remaining untranslated German interface strings.
- Added bilingual README, add-on documentation, installation guide, changelog,
  and attribution notice.
- Clearly identified this repository as an unofficial, independently maintained
  Chinese derivative.

## 上游版本摘要 / Upstream Release Summary

以下版本由上游 [LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker)
开发。本节仅作摘要，完整原始历史请查阅上游仓库。

The releases below were developed by upstream
[LuMeX88/MEMO-Finance-Tracker](https://github.com/LuMeX88/MEMO-Finance-Tracker).
This section is a summary; consult the upstream repository for its complete
original history.

## 1.4.0 - 2026-06-24

### 中文

- 使用可选的 Qwen2.5-VL-3B 本地视觉模型直接读取小票图片。
- 本地 AI 改为默认关闭，并在启用前显示硬件和下载要求。
- 模型按需下载，并在设置页显示下载进度。
- AI 未启用时提供明确提示，小票识别自动回退到 Tesseract。
- 更新 AI 系统要求和主要界面截图。

### English

- Added optional Qwen2.5-VL-3B vision-based receipt reading.
- Made local AI opt-in and added a requirements confirmation before enablement.
- Added on-demand model download with progress reporting.
- Added clear disabled-state guidance and automatic Tesseract fallback.
- Updated AI requirements and the screenshot gallery.

## 1.3.0 - 2026-06-24

### 中文

- 完成英语和德语界面翻译，并将语言与货币设置同步到服务器。
- 扩展支出预测明细和 1、3、6、12 个月预测范围。
- 增加应用内小票相机和项目来源标记。
- 改进项目交易编辑流程和弱硬件上的 OCR 超时处理。

### English

- Completed English and German localization and server-side language/currency sync.
- Expanded forecast details and added 1, 3, 6, and 12 month horizons.
- Added an in-app receipt camera and project-origin badges.
- Improved project-booking editing and OCR timeout handling on slower hardware.

## 1.2.2 - 2026-06-24

### 中文

- 项目任务成本可分配到分类。
- 看板任务增加预计完成日期。
- 计划中的项目成本进入按月份的支出预测。
- 修复图标选择器中的损坏图标。

### English

- Added category allocation for project task costs.
- Added estimated completion dates to Kanban tasks.
- Included planned project costs in monthly expense forecasts.
- Fixed a broken icon in the icon picker.

## 1.2.1 - 2026-06-24

### 中文

- 已完成任务的成本会同步为实际支出交易。
- 项目卡片区分预测与已入账金额。
- 修复项目图标选择，并在创建项目后直接打开项目。

### English

- Mirrored completed task costs into real expense transactions.
- Distinguished forecast and booked amounts on project cards.
- Fixed project icon selection and opened new projects immediately after creation.

## 1.2.0 - 2026-06-23

### 中文

- 增加看板和瀑布两种项目管理模式及预算跟踪。
- 交易列表增加类型、分类、项目和收款方筛选。
- 增加月、季度、年和自定义日期范围。
- 修复交易页重复显示快速添加按钮。

### English

- Added Kanban and waterfall project management with budget tracking.
- Added transaction filters for type, category, project, and recipient.
- Added month, quarter, year, and custom date ranges.
- Fixed the duplicated quick-add button on the transaction page.

## 1.1.1 - 2026-06-23

### 中文

- 修复 Home Assistant Ingress 下创建分类、项目、交易和周期计划失败的问题。
- 修复列表、月份筛选、分类筛选和分页。
- 增加完整交易管理入口和报表分类跳转。

### English

- Fixed creation of categories, projects, transactions, and schedules behind Ingress.
- Fixed lists, month/category filters, and pagination.
- Added the transaction manager entry and report-to-category navigation.

## 1.1.0 - 2026-06-23

### 中文

- 增加本地 AI 开关、演示数据和建议分类管理。
- 增加本地 AI 自动分类、OCR 清理和月度摘要。
- 改进 OpenCV 小票预处理并增加 CSV/PDF 导出。
- 显示版本与构建日期，并修复旧 CPU/虚拟机兼容性和日志配置。

### English

- Added local AI controls, demo data, and suggested category management.
- Added local auto-categorization, OCR cleanup, and monthly insights.
- Improved OpenCV receipt preprocessing and added CSV/PDF export.
- Added version/build information and fixed older CPU/VM compatibility and logging.

## 1.0.0

### 中文

- 首个 Home Assistant 加载项版本。
- 通过 Ingress 提供 Web UI。
- 通过 MQTT Discovery 发布本月收入、支出、余额和交易数量。
- 使用 `/data` 持久化 SQLite 数据库。

### English

- Initial Home Assistant add-on release.
- Served the web UI through Ingress.
- Published monthly income, expenses, balance, and transaction count through MQTT Discovery.
- Persisted the SQLite database under `/data`.
