# style-guide
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

###ESLint

`style-guide`包安装后，在目标项目的eslint配置文件的extends属性中加入customize-eslint，示例如下：

```
{
  "extends": "style-guide/customize-eslint",
  "rules": {
    // Additional, per-project rules...
  }
}
```

#### 与其他的eslint包一起使用，如`eslint:recommended`

```
{
  "extends": ["eslint:recommended", "style-guide/customize-eslint"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
eslint规则的源文件在customize-eslint.js文件中，文件中包含了2019-08-12前的所有eslint规则，eslint:recommended规则在文件中已经标注。

#### 建议

在目标文件中加入检测和自动修复的指令
```
"scripts": {
    ...
    "lint:js": "eslint \"src/**/*.js\"",
    "lint:js:fix": "eslint --fix \"src/**/*.js\""
}
```

### stylelint

`style-guide`包安装后，在目标项目的stylelint配置文件的extends属性中加入customize-stylelint，示例如下：

```
{
  "extends": "style-guide/customize-stylelint",
  "rules": {
    // Additional, per-project rules...
  }
}
```

#### 与其他的stylelint包一起使用，如`stylelint-config-recommended`

```
{
  "extends": ["stylelint-config-recommended", "style-guide/customize-stylelint"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
stylelint规则的源文件在customize-stylelint.js文件中。

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
    "lint-staged:js": "eslint . --ext .js",
    "lint-staged:style": "stylelint"
  },
"husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged",
      "pre-push": "npm run lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.css": "npm run lint-staged:style",
    "**/*.{js,js}": "npm run lint-staged:js"
  }
```

## 开发
如果要添加其他文件的lint规则，在本项目根目录下创建对应的js文件并编写规则，使用时在对应的extends中引入style-guide/yourconfigfile即可。
