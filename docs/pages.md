# 页面

在启动客户端后，页面的路由拓扑结构应该是这样的

::: mermaid
graph LR;

欢迎 --自动跳转--> 主菜单;
主菜单 --点击按钮--> 新战役;
主菜单 --点击按钮--> 遭遇战;
主菜单 --点击按钮--> 在线游戏;
主菜单 --点击按钮--> 局域网;
主菜单 --点击按钮--> 统计信息;
主菜单 --点击按钮--> 设置;
主菜单 --点击按钮--> 关于;
主菜单 --点击按钮--> 再见;

:::