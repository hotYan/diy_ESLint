module.exports={
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    "root": true,
    "extends": [
        "plugin:vue/essential"
      ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "jsx": false
        }
    },
    "plugins": [
        "@vue",
    ],
    "rules": {
        /** 
         * ESLint: http://eslint.cn/docs/rules/
         * off->关闭
         * warn-> 警告
         * off-> 错误
         */
        /**
         * 默认先关闭 配置文件中的 "extends": "eslint:recommended" 属性启用了的规则
         * 注释来自AlloyTeam  https://github.com/AlloyTeam/eslint-config-alloy/blob/master/index.js
         */
        /**
         * 禁止方向错误的 for 循环
         */
         "for-direction": "off",
         /**
         * getter 必须有返回值，并且禁止返回空
         */
        "getter-return": "off",
        /**
         * 禁止将 async 函数做为 new Promise 的回调函数
         * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
         */
        "no-async-promise-executor": "off",
        /**
         * 禁止与负零进行比较
         */
        "no-compare-neg-zero": "off",
        /**
         * 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
         */
        "no-cond-assign": "off",
        /**
         * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
         */
        "no-constant-condition": "off",
        /**
         * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
         * @reason 几乎不会遇到这种场景
         */
        "no-control-regex": "off",
        /**
         * 禁止使用 debugger
         */
        "no-debugger": "off",
        /**
         * 禁止在函数参数中出现重复名称的参数
         * @reason 编译阶段就会报错了
         */
        "no-dupe-args": "off",
        /**
         * 禁止在对象字面量中出现重复的键名
         */
        "no-dupe-keys": "off",
        /**
         * 禁止在 switch 语句中出现重复测试表达式的 case
         */
        "no-duplicate-case": "off",
        /**
         * 禁止出现空代码块，允许 catch 为空代码块
         */
        "no-empty": "off",
        /**
         * 禁止在正则表达式中使用空的字符集 []
         */
        "no-empty-character-class": "off",
        /**
         * 禁止将 catch 的第一个参数 off 重新赋值
         */
        "no-ex-assign": "off",
        /**
         * 禁止不必要的布尔类型转换
         */
        "no-extra-boolean-cast": "off",
        /**
         * 禁止不必要的分号
         */
        "no-extra-semi": "off",
        /**
         * 禁止将一个函数声明重新赋值
         */
        "no-func-assign": "off",
        /**
         * 禁止在 if 代码块内出现函数声明
         */
        "no-inner-declarations": "off",
        /**
         * 禁止在 RegExp 构造函数中出现非法的正则表达式
         */
        "no-invalid-regexp": "off",
        /**
         * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
         */
        "no-irregular-whitespace": "off",
        /**
         * 禁止正则表达式中使用肉眼无法区分的特殊字符
         * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
         */
        "no-misleading-character-class": "off",
        /**
         * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
         */
        "no-obj-calls": "off",
        /**
         * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
         * @reason hasOwnProperty 比较常用
         */
        "no-prototype-builtins": "off",
        /**
         * 禁止在正则表达式中出现连续的空格
         */
        "no-regex-spaces": "off",
        /**
         * 禁止在数组中出现连续的逗号
         */
        "no-sparse-arrays": "off",
        /**
         * 禁止出现令人困惑的多行表达式
         */
        "no-unexpected-multiline": "off",
        /**
         * 禁止在 return, throw, break 或 continue 之后还有代码
         */
        "no-unreachable": "off",
        /**
         * 禁止在 finally 中出现 return, throw, break 或 continue
         * @reason finally 中的语句会在 try 之前执行
         */
        "no-unsafe-finally": "off",
        /**
         * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
         */
        "no-unsafe-negation": "off",
        /**
         * 禁止将 await 或 yield 的结果做为运算符的后面项
         * https://github.com/eslint/eslint/issues/11899
         * 在上面 issue 修复之前，关闭此规则
         * @reason 这样会导致不符合预期的结果
         */
        "require-atomic-updates": "off",
        /**
         * 必须使用 isNaN(foo) 而不是 foo === NaN
         */
        "use-isnan": "off",
        /**
         * typeof 表达式比较的对象必须是 "undefined", "object", "boolean", "number", "string", "function", "symbol", 或 "bigint"
         */
        "valid-typeof": "off",
        /**
         * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
         */
        "no-case-declarations": "off",
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        "no-empty-pattern": "off",
        /**
         * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
         */
        "no-fallthrough": "off",
        /**
         * 禁止对全局变量赋值
         */
        "no-global-assign": "off",
        /**
         * 禁止使用 0 开头的数字表示八进制数
         * @reason 编译阶段就会报错了
         */
        "no-octal": "off",
        /**
         * 禁止重复定义变量
         * @reason 禁用 var 之后，编译阶段就会报错了
         */
        "no-redeclare": "off",
        /**
         * 禁止将自己赋值给自己
         */
        "no-self-assign": "off",
        /**
         * 禁止出现没用到的 label
         * @reason 已经禁止使用 label 了
         */
        "no-unused-labels": "off",
        /**
         * 禁止在 catch 中仅仅只是把错误 throw 出去
         * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
         */
        "no-useless-catch": "off",
        /**
         * 禁止出现没必要的转义
         * @reason 转义可以使代码更易懂
         */
        "no-useless-escape": "off",
        /**
         * 禁止使用 with
         * @reason 编译阶段就会报错了
         */
        "no-with": "off",
        /**
         * 禁止对一个变量使用 delete
         * @reason 编译阶段就会报错了
         */
        "no-delete-var": "off",
        /**
         * 禁止使用保留字作为变量名
         */
        "no-shadow-restricted-names": "off",
        /**
         * 禁止使用未定义的变量
         */
        "no-undef": "off",
        /**
         * 已定义的变量必须使用
         */
        "no-unused-vars": "off",
        /**
         *禁止空格和 tab 的混合缩进
         */
        "no-mixed-spaces-and-tabs":"off", 
        /**
         * constructor 中必须有 super
         */
        "constructor-super": "off",
        /**
         * 禁止对已定义的 class 重新赋值
         */
        "no-class-assign": "off",
        /**
         * 禁止对使用 const 定义的常量重新赋值
         */
        "no-const-assign": "off",
        /**
         * 禁止重复定义类的成员
         */
        "no-dupe-class-members": "off",
        /**
         * 禁止使用 new 来生成 Symbol
         */
        "no-new-symbol": "off",
        /**
         * 禁止在 super 被调用之前使用 this 或 super
         */
        "no-this-before-super": "off",
        /**
         * generator 函数内必须有 yield
         */
        "require-yield": "off",

///////////////////////////////////////
////////自定义规范//////////////////////
///////////////////////////////////////
        /**
         * 禁止使用 var，用let、const
         */
        "no-var": "error",
        /**
         * 禁止使用保留字作为变量名
         */
        'no-shadow-restricted-names': 'error',
        /*
        * 代码2空格缩进
        */
       "indent":["error",2],
       /**
         * 强制行注释只在代码行后面
         */
        'line-comment-position': 2,
        /**
         * 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
         */
        "comma-dangle": ["error", "only-multiline"],
        /**
         * 字符串使用单引号或反引号
         */
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        /**
         * new 后面的类名必须首字母大写
         */
        "new-cap": [
            "error",
            {
                "newIsCap": true,
                "capIsNew": false,
                "properties": true
            }
        ],
        /**
         * 要求在一元操作符之前或之后存在空格 
         */
       "space-unary-ops":["error",{"nonwords": true}],
       /**
        * 强制在代码块中开括号前和闭括号后有一个或多个空格
        */
       "block-spacing":"error",
        ///////////////////////////////////////
        /////////   vue  //////////////////////
        ///////////////////////////////////////
       /**
         * props 如果不是 required 的字段，必须有默认值
         */
        'vue/require-default-prop': 'error',
        /**
         * v-for 指令的元素必须有 v-bind:key
         */
        'vue/require-v-for-key': 'error',
        /**
         * 变量名必须是 camelcase 风格的
         * @reason 很多 api 或文件名都不是 camelcase 风格的
         */
        'vue/camelcase': 'error',
    }
}