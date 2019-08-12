# stylelint-config-ping
> 代码风格指南npm包，包括ESLint、stylelint，可以继续添加其他语言的lint文件，如react、vue、tslint、scss、less等。
此npm包灵感来源于[eslint shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

## 安装

```sh
#install with HTTPS
$ npm install --save-dev git+https://github.com/JinpingMa/style-guide.git
#install with SSH
$ npm install --save-dev git+git@github.com:JinpingMa/style-guide.git

```

## 使用

`stylelint-config-ping`包安装后，在目标项目的stylelint配置文件的extends属性中加入stylelint-config-ping，示例如下：

```
{
  "extends": "stylelint-config-ping",
  "rules": {
    // Additional, per-project rules...
  }
}
```

#### 与其他的stylelint包一起使用，如`stylelint-config-ping`

```
{
  "extends": ["stylelint-config-recommended", "stylelint-config-ping"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
stylelint规则的源文件在index.js文件中。

#### 建议

在目标文件中加入检测和自动修复的指令
```
"scripts": {
    ...
    "lint:style": "stylelint \"src/**/*.css\"",
    "lint:style:fix": "stylelint --fix \"src/**/*.css\"",
}
```

## 配合git hook使用，在commit和push前检查代码
> 与lint-staged和husky一起使用示例：
```
"scripts": {
    "lint-staged": "lint-staged",
    "lint-staged:style": "stylelint"
  },
"husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged",
      "pre-push": "npm run lint-staged"
    }
  },
  "lint-staged": {
    "**/*.{js,js}": "npm run lint-staged:js"
  }
```
