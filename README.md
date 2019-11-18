# typescript-west-world

## 安装和调试

1. 安装

```
npm install typescript -g
npm install ts-node -g
```

> 记下 ts-node 安装路径：/usr/local/bin/ts-node

2. 调试

    1. > 创建 tsdemo/.vscode/launch.json 文件

    ```
    {
        "configurations": [
            {
            "name": "ts-node",
            "type": "node",
            "request": "launch",
            "program": "注意看这里，要写成ts-node对应的可执行文件，Windows 用户注意了，你应该写成 ${workspaceRoot}/node_modules/ts-node/dist/bin.js",
            "args": ["${relativeFile}"],
            "cwd": "${workspaceRoot}",
            "protocol": "inspector"
            }
        ]
    }
    ```

    2. 创建 tsdemo/index.ts，找到调试选项，选择 ts-node，然后点击调试
    3. 命令行输入 tsc index.ts 会把 ts 编译成 js

3. 格式化

    - 配置 prettier

    ```
    "prettier.tabWidth": 4,
    "prettier.semi": false,
    "prettier.singleQuote": true,
    ```

## ts 不会检查 undefined