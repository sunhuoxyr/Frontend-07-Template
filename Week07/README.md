Completion Record: 语句状态

- [[type]]: normal, break, continue, return , throw
- [[value]]: 基本类型
- [[target]]: label

简单语句: 计算 + 流程控制

- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement
- VariableStatement: 变量声明

复合语句

- BlockStatement
- IfStatement
- SwithStatment
- IterationStatement
- ~~WithStatement~~
- LabellidStatement
- TryStatement

声明: 预处理, 作用域

- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGenerationDevlaration
- VariableStatement
- ClassDeclaration
- LexicalDeclaration: const, let


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

- Grammar
    - Grammar Tree vs Prority
    - Left Hand Side & Rigth Hand Side
- Runtime
    - Type Conversion
    - Reference

### Statement

- Grammar
    - 简单语句
    - 组合语句
    - 声明
- Runtime
    - Completion Record
    - Lexical Environment