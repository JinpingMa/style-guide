# eslint-config-ping
> ESLint shareable config for javascript style，实现参考[eslint shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

## 安装

```sh
#install with HTTPS
$ npm install --save-dev git+https://github.com/JinpingMa/style-guide#eslint.git
#install with SSH
$ npm install --save-dev git+git@github.com:JinpingMa/style-guide#eslint.git

```

## 使用

`eslint-config-ping`包安装后，在目标项目的eslint配置文件的extends属性中加入`ping`，示例如下：

```
{
  "extends": "ping",
  "rules": {
    // Additional, per-project rules...
  }
}
```

#### 与其他的eslint包一起使用，如`eslint:recommended`

```
{
  "extends": ["eslint:recommended", "ping"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
eslint规则的源文件在index.js文件中，文件中包含了2019-08-12前的所有eslint规则，eslint:recommended规则在文件中已经标注。

#### 建议

在目标文件中加入检测和自动修复的指令
```
"scripts": {
    ...
    "lint:js": "eslint \"src/**/*.js\"",
    "lint:js:fix": "eslint --fix \"src/**/*.js\""
}
```

## 配合git hook使用，在commit和push前检查代码
> 与lint-staged和husky一起使用示例：
```
"scripts": {
    "lint-staged": "lint-staged",
    "lint-staged:js": "eslint . --ext .js"
  },
"husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged",
      "pre-push": "npm run lint-staged"
    }
  },
  "lint-staged": {
    "**/*.js": "npm run lint-staged:js"
  }
```
