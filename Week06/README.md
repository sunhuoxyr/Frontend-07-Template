---

语言按语法分类

- 非形式语言
- 形式语言 ⇒ 精确的数学或机器可处理的公式定义的语言

## 乔姆斯基谱系

⇒ 具有上下包含关系

- 0型：无限制文法 ⇒ 图灵机，都是递归可枚举的。
- 1型：上下文相关文法 ⇒ 线性有界自动机。
- 2型：上下文无关文法 ⇒ 下推自动机。
- 3型：正则文法。

## 产生式（BNF：巴克斯诺尔范式）

> 产生式：在计算机中通过 Tiger 编译器将原程序经过词法分析 `Lexical Analysis` 和 语法分析 `Syntax Analysis` 后得到一系列符合文法规则 `Backus-Naur Form` 的语句

通常用于表示因果关系的语句 P → Q

> 巴克斯诺尔范式：表示上下文无关文法

- 用 `<>` 括起来的名称来表示语法结构名
- 语法结构
    - 基础结构：终结符 `terminal symbol`
    - 复合结构：非终结符 `nonterminal symbol`；需要用其他语法结构定义
- 引号和中间的字符表示终结字符
- 可以用 `()`
- `*` 表示重复多次AST
- `|`  或
- `+` 至少重复一次
- `::=`

### 四则运算

> 终结符：<Number>, +, -, *, /, 
非终结符：<AdditiveExpression>, <MultiplicativeExpression>
结束符：<EOF>

```c
<Expression> :==
	<AdditiveExpression><EOF>

<PriorityExpression> ::= 
	<Number>
	| "("<AdditiveExpression>")"

<MultiplicativeExpression> ::=
	<PriorityExpression>
	| <MultiplicativeExpression>"*"<PriorityExpression>
	| <MultiplicativeExpression>"/"<PriorityExpression>

<AdditiveExpression> ::=
	<MultiplicativeExpression>
	| <AdditiveExpression>"+"<MultiplicativeExpression>
	| <MultiplicativeExpression>
```

## 图灵完备性

> 具有无限存储能力的通用物理机器或编程语言

> 能够描述所有可计算的问题

- 命令式 ⇒ 图灵机
    - goto
    - if while
- 声明式
    - 递归

## 形式语言分类

### 用途

- 数据描述语言

    CSS, HTMl, JSON, SQL

- 编程语言

    JS, C, C++, C#, Python, Java, Ruby, Lisp 

### 表达方式

- 声明式语言 ⇒  结果

    JSON, CSS, HTML, SQL, Lisp

- 命令型语言 ⇒ 过程

    JS, C, C++, C#, Python, Java

### 类型检查时间

- 动态类型
    - Runtime, 运行时
- 静态类型
    - CompileTime, 编译时

### 类型转换

- 强类型
- 弱类型

### 泛型 ⇒ TS

- 逆变
- 协变

## JS的设计模式

语法 ⇒ 语义 ⇒ 运行时

### Atom

- Grammar
    - Litera
    - Variable
    - Keywords
    - Whitespaces
    - Line Terminator
- Runtime
    - Types
    - Execution Context

### Expression

- Atom
- Operator

### Statement

- Expression
- Keyword
- Punctuator

### Structure

- Function
- Class
- Progress
- Namespace

### Program

- Program
- Module
- Package
- Libary

## 双精度浮点数

### 存储

以科学计数法存储

- 符号位 1位
    - 0 正
    - 1 负
- 指数位 11 位

    > 偏移量为 `1023`
     1023 表示 `0`,  范围  `-1023 ~ 1024`

    - 指数 + 偏移量
- 分数位 52

### 精度损失

从转换二进制时就开始了