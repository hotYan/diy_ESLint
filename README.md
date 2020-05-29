# 前端项目开发代码规范V1.0.0

## JS规范

#### 1.禁止使用`var`关键字声名变量；
- 设置
	```readme
    "no-var": "error"	//禁止使用 var，用let、const
	```


#### 2.变量名禁止使用保留字；
- 设置
	```readme
    'no-shadow-restricted-names': 'error'
	```


#### 3.代码缩进为两个空格；
- 设置
	```readme
	"indent":["error",2]
	```


#### 4. 单行注释必须在行尾
- 设置
	```readme
    'line-comment-position': ['error', { 'position': 'beside' }],	//强制行注释只在代码行后面
	```
- 正确用例

	```js
	let a ; //变量a

	/**
	*函数b
	*/
	function(){
		...
	}
	```


#### 5. 末尾逗号：
- 设置
	
	```readme
	"comma-dangle": ["error", "only-multiline"]	//当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
	```
		

- 正确用例

	```js
	let arr1 = [1, 2, 3, 4, ];
	let obj1 = {a:1, b:2, c:3, };

	let arr2 = [
		1,
		2,
	]
	let obj2 = {
		a:1,
		b:2,
	}
	```

#### 6. 字符串最外层必须使用单引号或反引号；
- 设置
	```readme
	"quotes": ["error", "single", { "allowTemplateLiterals": true }]	//字符串使用单引号或反引号
	```


#### 7. 构造函数必须以大写开头；
- 设置
	```readme
	"new-cap": ["error",
		{
        	"newIsCap": true,	//(默认) 要求调用 new 操作符时有首字母大小的函数
            "capIsNew": false,	//允许调用 new 操作符有首字母小写或首字母大写的函数
            "properties": true	//(默认) 检查对象属性
        }
    ],
	```
- 正确用例
	```js
	let obj = new Car();
	```
#### 8. 操作符号前后必须有空格；
- 设置
	```readme
    "space-unary-ops":["error",{"nonwords": true}]	//要求在一元操作符之前或之后存在空格 
	```
- 正确用例
	```js
	let a = 1 + 3;
	```

<br/>

## vue规范

#### 1. 组件使用`props`时必须使用对像的方式，必须指明传值类型和是否必填；
- 设置
	```readme
    'vue/require-default-prop': 'error'	//props 如果不是 required 的字段，必须有默认值
	```

- 正确用例
	```js
	props:{
		formData:{
			type:Object,
			require:true,
		}
	}
	```

#### 2. 使用`v-for`时必须使用`key`属性；
- 设置
	```readme
    'vue/require-v-for-key': 'error'	//v-for 指令的元素必须有 v-bind:key
	```

- 正确用例
	```html
	<p v-for="(item, index) in formData" :key="index"></p>
	```
	
<br/>

## 命名规范

#### 1. vue的单文件组件命名必须以大驼峰格式；
- 设置
	```readme
    'vue/camelcase': 'error'	//变量名必须是 camelcase 风格的
	```


#### 2. 组件名的命名格式：动词+名词；

- 正确用例
	```
	CreatedEnterprise.vue
	```
#### 3. 其他js, css, 图片等文件使用小驼峰格式；

- 正确用例
	```
	index.js
	homeLayout.css
	```

	
<br/>

## 代码规范建议

#### 1. 单行代码块建议大括号与代码之间有空格；
- 设置
	```readme
    "block-spacing":"error"	//强制在代码块中开括号前和闭括号后有一个或多个空格
	```
- 正确用例

	```
	{ a:2, }
	```
#### 2. 函数调用时，建议函数名与括号之间不要有空格；

