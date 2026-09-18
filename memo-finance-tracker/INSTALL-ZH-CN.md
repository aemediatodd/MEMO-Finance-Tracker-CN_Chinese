# MEMO Finance Tracker 中文版安装说明

本版本基于 MEMO Finance Tracker 1.4.0，增加了完整简体中文界面、人民币（CNY）金额格式、中文小票 OCR，以及 Home Assistant MQTT 人民币单位。

## 安装

1. 解压交付的 `memo-finance-tracker-cn-1.4.0.zip`。
2. 将解压后的 `memo-finance-tracker` 文件夹完整复制到 Home Assistant 的 `/addons/` 目录，使 `config.yaml` 的最终路径为 `/addons/memo-finance-tracker/config.yaml`。
3. 打开 Home Assistant 的“设置 → 加载项 → 加载项商店”。
4. 点击右上角菜单并选择“检查更新”，然后在“本地加载项”中打开 `MEMO – Finance Tracker 中文版`。
5. 点击“安装”。首次安装需要在 Home Assistant 主机上构建镜像和下载依赖，所需时间取决于网络及设备性能。
6. 安装后启动加载项，并启用“在侧边栏中显示”。

可使用 Samba share、Studio Code Server 或 SSH 将文件夹复制到 `/addons/`。Home Assistant Container 不支持 Supervisor 加载项；此安装包适用于 Home Assistant OS 或 Supervised。

## 默认设置

- 界面语言：简体中文
- 网页货币：CNY（人民币）
- MQTT 金额传感器单位：`¥`
- 中文小票 OCR：`chi_sim + eng + deu`

如果从旧版升级且已有数据库，原来保存的语言和货币设置会保留。请进入 MEMO 的“设置 → 常规”，手动选择“简体中文”和“CNY - 人民币”。

修改加载项配置中的 `mqtt_currency` 只会改变 Home Assistant MQTT 传感器的单位；MEMO 网页的货币需在 MEMO 设置页面中选择。切换货币不会自动换算已有金额。

## 数据位置

数据由加载项保存在映射的 `/data` 目录。升级或重装前，建议先在 MEMO 设置页面下载 JSON 备份，并使用 Home Assistant 备份功能创建完整备份。
