# 安装与升级 / Installation and Upgrade

> 本文适用于非官方的 MEMO Finance Tracker 中文衍生版。
>
> This document applies to the unofficial MEMO Finance Tracker Chinese derivative.

## 中文

### 推荐：通过 Home Assistant 加载项仓库安装

1. 打开 Home Assistant 的 **设置 -> 加载项 -> 加载项商店**。
2. 点击右上角菜单，选择 **仓库**。
3. 添加：

   ```text
   https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese
   ```

4. 返回加载项商店，找到 **MEMO - Finance Tracker 中文版**。
5. 点击 **安装**，完成后打开配置页并保存 MQTT 设置。
6. 启动加载项，并按需启用 **在侧边栏中显示**。

### 备选：本地加载项安装

1. 下载本仓库源码。
2. 将 `memo-finance-tracker` 文件夹完整复制到 Home Assistant 的 `/addons/`。
3. 确认最终路径为 `/addons/memo-finance-tracker/config.yaml`。
4. 打开加载项商店，使用右上角菜单中的 **检查更新**。
5. 在 **本地加载项** 中找到 MEMO 并安装。

可以使用 Samba share、Studio Code Server 或 SSH 复制文件。Home Assistant
Container 不支持 Supervisor 加载项；此方式仅适用于 Home Assistant OS 或 Supervised。

### 默认设置

- 界面语言：简体中文 `zh-CN`
- 网页货币：人民币 `CNY`
- MQTT 金额传感器单位：`¥`
- 小票 OCR：`chi_sim + eng + deu`
- 本地 AI：默认关闭

如果从旧版升级且数据库中已有设置，原语言和货币设置会继续保留。请进入
**MEMO -> 设置 -> 常规** 手动选择简体中文和 CNY。

`mqtt_currency` 只控制 Home Assistant MQTT 金额传感器的显示单位。网页货币在
MEMO 设置页面中选择；切换货币不会自动换算已有金额。

### 升级

1. 在 MEMO 设置页面导出 JSON 备份。
2. 创建 Home Assistant 完整备份。
3. 在加载项商店中执行 **检查更新**。
4. 打开 MEMO 加载项并执行更新。
5. 启动后检查日志、界面语言和 MQTT 传感器。

Home Assistant 只会在版本号变化时重新构建加载项。如果源码已更新但未显示新版本，
请先确认 `config.yaml` 的 `version` 已更新，再执行 **检查更新**。

### 数据位置

数据保存在加载项持久化目录 `/data`，数据库文件为 `/data/memo.db`。正常升级不会
删除该目录，但升级或重装前仍应创建双重备份。

## English

### Recommended: install from the Home Assistant add-on repository

1. Open **Settings -> Add-ons -> Add-on Store** in Home Assistant.
2. Open the top-right menu and select **Repositories**.
3. Add:

   ```text
   https://github.com/aemediatodd/MEMO-Finance-Tracker-CN_Chinese
   ```

4. Return to the store and open **MEMO - Finance Tracker Chinese Edition**.
5. Select **Install**, then open Configuration and save the MQTT settings.
6. Start the add-on and optionally enable **Show in sidebar**.

### Alternative: install as a local add-on

1. Download this repository's source code.
2. Copy the complete `memo-finance-tracker` directory to `/addons/` in Home Assistant.
3. Verify the final path is `/addons/memo-finance-tracker/config.yaml`.
4. Open the Add-on Store and select **Check for updates** from the top-right menu.
5. Find MEMO under **Local add-ons** and install it.

You can transfer the directory with Samba share, Studio Code Server, or SSH.
Home Assistant Container does not support Supervisor add-ons; use Home Assistant
OS or Supervised.

### Defaults

- Interface language: Simplified Chinese `zh-CN`
- Web currency: Chinese yuan `CNY`
- MQTT monetary sensor unit: `¥`
- Receipt OCR: `chi_sim + eng + deu`
- Local AI: disabled by default

Existing database settings take precedence during an upgrade. If an older
installation keeps its previous language or currency, select Simplified Chinese
and CNY under **MEMO -> Settings -> General**.

`mqtt_currency` controls only the Home Assistant MQTT monetary sensor unit.
Select the web currency inside MEMO. Changing currencies does not convert stored amounts.

### Upgrade

1. Export a JSON backup from MEMO Settings.
2. Create a full Home Assistant backup.
3. Select **Check for updates** in the Add-on Store.
4. Open the MEMO add-on and run the update.
5. After startup, check the log, interface language, and MQTT sensors.

Home Assistant rebuilds an add-on only when its version changes. If updated
source does not appear as a new version, verify `version` in `config.yaml` has
changed and then run **Check for updates** again.

### Data location

Persistent data is stored under `/data`, with the database at `/data/memo.db`.
Normal upgrades preserve this volume, but keep both a MEMO JSON export and a
Home Assistant backup before upgrading or reinstalling.
