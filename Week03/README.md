学习笔记

AST：抽象语法树

构建AST：语法分析

LL算法：从左到右 left left

LR算法

编程语言 ⇒ 分词 ⇒  形成嵌套的语法树

## 四则运算

### 词法

- tokenNumber
    - . 1 2 3 4 5 6 7 8 9 0
- operator
    - + - * /
- Whitespace
    - <sp>
- lineTerminator 行终结符
    - <LF>
    - <CR>

### 语法

产生式：一个由条件和动作组成的指令，通常用于表示具有因果关系的知识 P ⇒ Q

在计算器中指编译器将源程序经过词法分析和语法分析后生成的符合文法规则的语句

加法和乘法 ⇒ 先计算乘法，再计算加法

~~加法是由左右两个乘法组成的~~

递归

<Expression>::=
<AdditiveExpression><EOF>  //  End Of File

<AdditiveExpression>::=
	<MultiplicativeExpression> // 特殊的加法
	| <AdditiveExpression><+><MultiplicativeExpression>
	| <AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::=
	<Number>  // 单独的数字也是乘法
	| <MultiplicativeExpression><*><Number>
	| <MultiplicativeExpression></><Number>

  终结符  

Number ⇒ 乘法，Number * 1

乘法 ⇒ 数字 * 数字

加法 ⇒ 乘法 + 乘法

表达式 ⇒ 加法

顺序 