# swift语法入门



## 基础

### 声明常量和变量

- `let`用来声明常量，`var`用来声明变量
- 一行可以声明多个常量或者变量，使用`,`隔开

```swift
let a= 10
var x = 0.0, y = 0.0, z = 0.0
```

### 类型注解

声明常量/变量时可以加上类型注解（type annotation），说明常量/变量中要存储的类型。语法：在常量/变量名后面加上一个冒号和空格，然后加上类型名称。

```swift
var welcomeMessage: String
```

可以在一行中定义多个同样类型的变量，使用逗号分隔，并在最后一个变量名后添加类型注解：

```swift
var red, green, blue: Double
```

### 命名

常量与变量名不能包含数学符号，箭头，保留的（或者非法的）Unicode 码位，连线与制表符。也不能以数字开头，但是可以在常量与变量名的其他地方包含数字。

> 如果你需要使用与 Swift 保留关键字相同的名称作为常量或者变量名，你可以使用反引号（`）将关键字包围的方式将其作为名字使用。无论如何，你应当避免使用关键字作为常量或变量名，除非你别无选择。

```swift
let π = 3.14159
let 你好 = "你好世界"
let 🐶🐮 = "dogcow"
```

**可以更改现有的变量值为其他同类型的值,常量的值一旦被确定就不能更改了**。尝试这样做会导致编译时报错

### 输出

`print(_:separator:terminator:)`函数来输出当前常量或变量的值

Swift 用*字符串插值（string interpolation）*的方式把常量名或者变量名当做占位符加入到长字符串中，Swift 会用当前常量或变量的值替换这些占位符。将常量或变量名放入圆括号中，并在开括号前使用反斜杠将其转义：

```swift
print("The current value of friendlyWelcome is \(friendlyWelcome)")
// 输出“The current value of friendlyWelcome is Bonjour!”
```



### 注释

```swift
// 这是一个注释

/* 这也是一个注释，
但是是多行的 */

/* 这是第一个多行注释的开头
/* 这是第二个被嵌套的多行注释 */
这是第一个多行注释的结尾 */
```

### 分号

Swift 并不强制要求你在每条语句的结尾处使用分号（`;`），当然，你也可以按照你自己的习惯添加分号。有一种情况下必须要用分号，即你打算在同一行内写多条独立的语句：

```swift
let cat = "🐱"; print(cat)
// 输出“🐱”
```

### 数值

#### 整数

Swift 提供了8、16、32和64位的有符号和无符号整数类型。这些整数类型和 C 语言的命名方式很像，比如8位无符号整数类型是 `UInt8`，32位有符号整数类型是 `Int32` 。就像 Swift 的其他类型一样，整数类型采用大写命名法。

#### 范围

```swift
let minValue = UInt8.min  // minValue 为 0，是 UInt8 类型
let maxValue = UInt8.max  // maxValue 为 255，是 UInt8 类型
```

#### Int

一般来说，你不需要专门指定整数的长度。Swift 提供了一个特殊的整数类型 `Int`，长度与当前平台的原生字长相同：

- 在32位平台上，`Int` 和 `Int32` 长度相同。
- 在64位平台上，`Int` 和 `Int64` 长度相同。

#### UInt

长度与当前平台的原生字长相同：

- 在32位平台上，`UInt` 和 `UInt32` 长度相同。
- 在64位平台上，`UInt` 和 `UInt64` 长度相同。

#### 浮点数

`Double` 表示64位浮点数。当你需要存储很大或者很高精度的浮点数时请使用此类型。

`Float` 表示32位浮点数。精度要求不高的话可以使用此类型。

> `Double` 精确度很高，至少有 15 位小数，而 `Float` 只有 6 位小数。选择哪个类型取决于你的代码需要处理的值的范围，在两种类型都匹配的情况下，将优先选择 `Double`。

### 类型推断

当推断浮点数的类型时，Swift 总是会选择 `Double` 而不是 `Float`。

如果表达式中同时出现了整数和浮点数，会被推断为 `Double` 类型

### 类型别名

*类型别名（type aliases）*就是给现有类型定义另一个名字。你可以使用 `typealias` 关键字来定义类型别名。

```swift
typealias AudioSample = UInt16
var maxAmplitudeFound = AudioSample.min
// maxAmplitudeFound 现在是 0
```

### 布尔值

Swift 有一个基本的*布尔（Boolean）类型*，叫做 `Bool`。布尔值指*逻辑*上的值，因为它们只能是真或者假。Swift 有两个布尔常量，`true` 和 `false`

### 元组

*元组（tuples）*把多个值组合成一个复合值。元组内的值可以是任意类型，并不要求是相同类型。

下面这个例子中，`(404, "Not Found")` 是一个描述 *HTTP 状态码（HTTP status code）*的元组。HTTP 状态码是当你请求网页的时候 web 服务器返回的一个特殊值。如果你请求的网页不存在就会返回一个 `404 Not Found` 状态码

```swift
let http404Error = (404, "Not Found")
// http404Error 的类型是 (Int, String)，值是 (404, "Not Found")
```

`(404, "Not Found")` 元组把一个 `Int` 值和一个 `String` 值组合起来表示 HTTP 状态码的两个部分：一个数字和一个人类可读的描述。这个元组可以被描述为“一个类型为 `(Int, String)` 的元组”。

你可以把任意顺序的类型组合成一个元组，这个元组可以包含所有类型。只要你想，你可以创建一个类型为 `(Int, Int, Int)` 或者 `(String, Bool)` 或者其他任何你想要的组合的元组。

你可以将一个元组的内容分解（decompose）成单独的常量和变量，然后你就可以正常使用它们了：

```swift
let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)")
// 输出“The status code is 404”
print("The status message is \(statusMessage)")
// 输出“The status message is Not Found”
```



如果你只需要一部分元组值，分解的时候可以把要忽略的部分用下划线（`_`）标记：

```swift
let (justTheStatusCode, _) = http404Error
print("The status code is \(justTheStatusCode)")
// 输出“The status code is 404”
```

此外，你还可以通过下标来访问元组中的单个元素，下标从零开始：

```swift
print("The status code is \(http404Error.0)")
// 输出“The status code is 404”
print("The status message is \(http404Error.1)")
// 输出“The status message is Not Found”
```

可以在定义元组的时候给单个元素命名：

```swift
let http200Status = (statusCode: 200, description: "OK")

//给元组中的元素命名后，你可以通过名字来获取这些元素的值：
print("The status code is \(http200Status.statusCode)")
// 输出“The status code is 200”
print("The status message is \(http200Status.description)")
// 输出“The status message is OK”
```

作为函数返回值时，元组非常有用。一个用来获取网页的函数可能会返回一个 `(Int, String)` 元组来描述是否获取成功。和只能返回一个类型的值比较起来，一个包含两个不同类型值的元组可以让函数的返回信息更有用。

> 当遇到一些相关值的简单分组时，元组是很有用的。元组不适合用来创建复杂的数据结构。如果你的数据结构比较复杂，不要使用元组，用类或结构体去建模。

## 可选类型

使用*可选类型（optionals）*来处理值可能缺失的情况。可选类型表示两种可能： 或者有值， 你可以解析可选类型访问这个值， 或者根本没有值。

```swift
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)
// convertedNumber 被推测为类型 "Int?"， 或者类型 "optional Int"
```

因为该构造器可能会失败，所以它返回一个*可选类型*（optional）`Int`，而不是一个 `Int`。一个可选的 `Int` 被写作 `Int?` 而不是 `Int`。问号暗示包含的值是可选类型，也就是说可能包含 `Int` 值也可能*不包含值*。（不能包含其他任何值比如 `Bool` 值或者 `String` 值。只能是 `Int` 或者什么都没有。）

## nil

可以给可选变量赋值为 `nil` 来表示它没有值：

```swift
var serverResponseCode: Int? = 404
// serverResponseCode 包含一个可选的 Int 值 404
serverResponseCode = nil
// serverResponseCode 现在不包含值
```

> `nil` 不能用于非可选的常量和变量。如果你的代码中有常量或者变量需要处理值缺失的情况，请把它们声明成对应的可选类型。

如果声明一个可选常量或者变量但是没有赋值，它们会自动被设置为 `nil`：

```swift
var surveyAnswer: String?
// surveyAnswer 被自动设置为 nil
```

## 可选绑定

使用*可选绑定（optional binding）*来判断可选类型是否包含值，如果包含就把值赋给一个临时常量或者变量。可选绑定可以用在 `if` 和 `while` 语句中，这条语句不仅可以用来判断可选类型中是否有值，同时可以将可选类型中的值赋给一个常量或者变量。

```swift
if let constantName = someOptional {
    statements
}else {
  	statements
}
```

```swift
if let actualNumber = Int(possibleNumber) {
    print("\'\(possibleNumber)\' has an integer value of \(actualNumber)")
} else {
    print("\'\(possibleNumber)\' could not be converted to an integer")
}
// 输出“'123' has an integer value of 123”
```

这段代码可以被理解为：

“如果 `Int(possibleNumber)` 返回的可选 `Int` 包含一个值，创建一个叫做 `actualNumber` 的新常量并将可选包含的值赋给它。”

如果转换成功，`actualNumber` 常量可以在 `if` 语句的第一个分支中使用。它已经被可选类型 *包含的* 值初始化过，所以不需要再使用 `!` 后缀来获取它的值。在这个例子中，`actualNumber` 只被用来输出转换结果。

## if 语句以及强制解析

你可以使用 `if` 语句和 `nil` 比较来判断一个可选值是否包含值。你可以使用“相等”(`==`)或“不等”(`!=`)来执行比较。

如果可选类型有值，它将不等于 `nil`：

```swift
if convertedNumber != nil {
    print("convertedNumber contains some integer value.")
}
// 输出“convertedNumber contains some integer value.”
```

当你确定可选类型确实包含值之后，你可以在可选的名字后面加一个感叹号（`!`）来获取值。这个惊叹号表示“我知道这个可选有值，请使用它。”这被称为可选值的*强制解析（forced unwrapping）*：

```swift
if convertedNumber != nil {
    print("convertedNumber has an integer value of \(convertedNumber!).")
}
// 输出“convertedNumber has an integer value of 123.”
```

> 使用 `!` 来获取一个不存在的可选值会导致运行时错误。使用 `!` 来强制解析值之前，一定要确定可选包含一个非 `nil` 的值。

## 隐式解析可选类型

可选类型暗示了常量或者变量可以“没有值”。可选可以通过 `if` 语句来判断是否有值，如果有值的话可以通过可选绑定来解析值。

有时候在程序架构中，第一次被赋值之后，可以确定一个可选类型*总会*有值。在这种情况下，每次都要判断和解析可选值是非常低效的，因为可以确定它总会有值。

这种类型的可选状态被定义为隐式解析可选类型（implicitly unwrapped optionals）。把想要用作可选的类型的后面的问号（`String?`）改成感叹号（`String!`）来声明一个隐式解析可选类型。与其在使用时把感叹号放在可选类型的名称的后面，你可以在定义它时，直接把感叹号放在可选类型的后面。

当可选类型被第一次赋值之后就可以确定之后一直有值的时候，隐式解析可选类型非常有用。

```swift
let possibleString: String? = "An optional string."
let forcedString: String = possibleString! // 需要感叹号来获取值

let assumedString: String! = "An implicitly unwrapped optional string."
let implicitString: String = assumedString  // 不需要感叹号
```

你**可以把隐式解析可选类型当做一个可以自动解析的可选类型**。当你**使用一个隐式解析可选值时，Swift 首先会把它当作普通的可选值；如果它不能被当成可选类型使用，Swift 会强制解析可选值。**在以上的代码中，可选值 `assumedString` 在把自己的值赋给 `implicitString` 之前会被强制解析，原因是 `implicitString` 本身的类型是非可选类型的 `String`。在下面的代码中，`optionalString` 并没有显式的数据类型。那么根据类型推断，它就是一个普通的可选类型。

```swift
let optionalString = assumedString
// optionalString 的类型是 "String?"，assumedString 也没有被强制解析。
```

如果你在隐式解析可选类型没有值的时候尝试取值，会触发运行时错误。和你在没有值的普通可选类型后面加一个感叹号一样。

你可以把隐式解析可选类型当做普通可选类型来判断它是否包含值：

```swift
if assumedString != nil {
    print(assumedString!)
}
// 输出“An implicitly unwrapped optional string.”
```

你也可以在可选绑定中使用隐式解析可选类型来检查并解析它的值：

```swift
if let definiteString = assumedString {
    print(definiteString)
}
// 输出“An implicitly unwrapped optional string.”
```

> 如果一个变量之后可能变成 `nil` 的话请不要使用隐式解析可选类型。如果你需要在变量的生命周期中判断是否是 `nil` 的话，请使用普通可选类型。

## 错误处理

```swift 
func canThrowAnError() throws {
    // 这个函数有可能抛出错误
}

do {
    try canThrowAnError()
    // 没有错误消息抛出
} catch {
    // 有一个错误消息抛出
}


```

一个 `do` 语句创建了一个新的包含作用域，使得错误能被传播到一个或多个 `catch` 从句。

这里有一个错误处理如何用来应对不同错误条件的例子。

```swift
func makeASandwich() throws {
    // ...
}

do {
    try makeASandwich()
    eatASandwich()
} catch SandwichError.outOfCleanDishes {
    washDishes()
} catch SandwichError.missingIngredients(let ingredients) {
    buyGroceries(ingredients)
}
```

在此例中，`makeASandwich()`（做一个三明治）函数会抛出一个错误消息如果没有干净的盘子或者某个原料缺失。因为 `makeASandwich()` 抛出错误，函数调用被包裹在 `try` 表达式中。将函数包裹在一个 `do` 语句中，任何被抛出的错误会被传播到提供的 `catch` 从句中。

如果没有错误被抛出，`eatASandwich()` 函数会被调用。如果一个匹配 `SandwichError.outOfCleanDishes` 的错误被抛出，`washDishes()` 函数会被调用。如果一个匹配 `SandwichError.missingIngredients` 的错误被抛出，`buyGroceries(_:)` 函数会被调用，并且使用 `catch` 所捕捉到的关联值 `[String]` 作为参数。

## 断言和先决条件

断言和先决条件是在运行时所做的检查。你可以用他们来检查在执行后续代码之前是否一个必要的条件已经被满足了。如果断言或者先决条件中的布尔条件评估的结果为 true（真），则代码像往常一样继续执行。如果布尔条件评估结果为 false（假），程序的当前状态是无效的，则代码执行结束，应用程序中止。

使用断言和先决条件不是一个能够避免出现程序出现无效状态的编码方法。然而，如果一个无效状态程序产生了，断言和先决条件可以强制检查你的数据和程序状态，使得你的程序可预测的中止（译者：不是系统强制的，被动的中止），并帮助使这个问题更容易调试。一旦探测到无效的状态，执行则被中止，防止无效的状态导致的进一步对于系统的伤害。

断言和先决条件的不同点是，他们什么时候进行状态检测：断言仅在调试环境运行，而先决条件则在调试环境和生产环境中运行。在生产环境中，断言的条件将不会进行评估。这个意味着你可以使用很多断言在你的开发阶段，但是这些断言在生产环境中不会产生任何影响。

### 使用断言调试

可以调用 Swift 标准库的 `assert(_:_:file:line:)` 函数来写一个断言。向这个函数传入一个结果为 `true` 或者 `false` 的表达式以及一条信息，当表达式的结果为 `false` 的时候这条信息会被显示：

```swift
let age = -3
assert(age >= 0, "A person's age cannot be less than zero")
// 因为 age < 0，所以断言会触发
```

在这个例子中，只有 `age >= 0` 为 `true` 时，即 `age` 的值非负的时候，代码才会继续执行。如果 `age` 的值是负数，就像代码中那样，`age >= 0` 为 `false`，断言被触发，终止应用。

如果不需要断言信息，可以就像这样忽略掉：

```swift
assert(age >= 0)
```

如果代码已经检查了条件，你可以使用 `assertionFailure(_:file:line:)` 函数来表明断言失败了，例如：

```swift
if age > 10 {
    print("You can ride the roller-coaster or the ferris wheel.")
} else if age > 0 {
    print("You can ride the ferris wheel.")
} else {
    assertionFailure("A person's age can't be less than zero.")
}
```

### 强制执行先决条件

当一个条件可能为假，但是继续执行代码要求条件必须为真的时候，需要使用先决条件。例如使用先决条件来检查是否下标越界，或者来检查是否将一个正确的参数传给函数。

你可以使用全局 `precondition(_:_:file:line:)` 函数来写一个先决条件。向这个函数传入一个结果为 `true` 或者 `false` 的表达式以及一条信息，当表达式的结果为 `false` 的时候这条信息会被显示：

```swift
// 在一个下标的实现里...
precondition(index > 0, "Index must be greater than zero.")
```

可以调用 `preconditionFailure(_:file:line:)` 方法来表明出现了一个错误，例如，switch 进入了 default 分支，但是所有的有效值应该被任意一个其他分支（非 default 分支）处理。

## 运算符

### 一元、二元和三元运算符

- *一元*运算符对单一操作对象操作（如 `-a`）。一元运算符分前置运算符和后置运算符，*前置运算符*需紧跟在操作对象之前（如 `!b`），*后置运算符*需紧跟在操作对象之后（如 `c!`）。

* 二元*运算符操作两个操作对象（如 `2 + 3`），是*中置*的，因为它们出现在两个操作对象之间。

* 三元运算符操作三个操作对象，和 C 语言一样，Swift 只有一个三元运算符，就是三目运算符（`a ? b : c`）。

### 基本运算符

swift的运算符方面跟java基本都一样的用法

- 算数运算符：=、+、-、*、/、%

- 组合赋值：+=、-=。。

- 比较运算符： ==、 !+、>、<、>=、<=...

> Swift 也提供恒等（`===`）和不恒等（`!==`）这两个比较符来判断两个对象是否引用同一个对象实例。

- 逻辑运算符： 逻辑非 !、逻辑与&&、逻辑或||

### 空合运算符

*空合运算符*（`a ?? b`）将对可选类型 `a` 进行空判断，如果 `a` 包含一个值就进行解包，否则就返回一个默认值 `b`。表达式 `a` 必须是 Optional 类型。默认值 `b` 的类型必须要和 `a` 存储值的类型保持一致。空合运算符是对以下代码的简短表达方法：

```swift
a != nil ? a! : b
```

### 区间运算符

*闭区间运算符*（`a...b`）定义一个包含从 `a` 到 `b`（包括 `a` 和 `b`）的所有值的区间。`a` 的值不能超过 `b`。

```swift
for index in 1...5 {
    print("\(index) * 5 = \(index * 5)")
}
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
```

> shell中也有这个语法

### 半开区间运算符

*半开区间运算符*（`a..<b`）定义一个从 `a` 到 `b` 但不包括 `b` 的区间。 之所以称为*半开区间*，是因为该区间包含第一个值而不包括最后的值。

半开区间的实用性在于当你使用一个从 0 开始的列表（如数组）时，非常方便地从0数到列表的长度。

```swift
let names = ["Anna", "Alex", "Brian", "Jack"]
let count = names.count
for i in 0..<count {
    print("第 \(i + 1) 个人叫 \(names[i])")
}
// 第 1 个人叫 Anna
// 第 2 个人叫 Alex
// 第 3 个人叫 Brian
// 第 4 个人叫 Jack
```

### 单侧区间

闭区间操作符有另一个表达形式，可以表达往一侧无限延伸的区间 —— 例如，一个包含了数组从索引 2 到结尾的所有值的区间。在这些情况下，你可以省略掉区间操作符一侧的值。这种区间叫做单侧区间，因为操作符只有一侧有值。例如：

```swift
for name in names[2...] {
    print(name)
}
// Brian
// Jack

for name in names[...2] {
    print(name)
}
// Anna
// Alex
// Brian
```

## 字符串和字符

### 多行字符串字面量

多行字符串：使用一对三引号`"""`包裹的文本。

如果你的代码中，多行字符串字面量包含换行符的话，则多行字符串字面量中也会包含换行符。如果你想换行，以便加强代码的可读性，但是你又不想在你的多行字符串字面量中出现换行符的话，你可以用在行尾写一个反斜杠（`\`）作为续行符。

```swift
let softWrappedQuotation = """
The White Rabbit put on his spectacles.  "Where shall I begin, \
please your Majesty?" he asked.

"Begin at the beginning," the King said gravely, "and go on \
till you come to the end; then stop."
"""
/*
The White Rabbit put on his spectacles.  "Where shall I begin,please your Majesty?" he asked.

"Begin at the beginning," the King said gravely, "and go ontill you come to the end; then stop."
*/

```

为了让一个多行字符串字面量开始和结束于换行符，请将换行写在第一行和最后一行，例如：

```swift
let lineBreaks = """

This string starts with a line break.
It also ends with a line break.

"""

//"\nThis string starts with a line break.\nIt also ends with a line break.\n"
```

### 字符串字面量的特殊字符

字符串字面量可以包含以下特殊字符：

- 转义字符 `\0`(空字符)、`\\`(反斜线)、(水平制表符)、(换行符)、(回车符)、`\"`(双引号)、`\'`(单引号)。
- Unicode 标量，写成 `\u{n}`(u 为小写)，其中 `n` 为任意一到八位十六进制数且可用的 Unicode 位码。

### 扩展字符串分隔符

您可以将字符串文字放在扩展分隔符中，这样字符串中的特殊字符将会被直接包含而非转义后的效果。将字符串放在引号（`"`）中并用数字符号（`#`）括起来。例如，打印字符串文字 `#"Line 1 \nLine 2"#` 会打印换行符转义序列（）而不是给文字换行。作用类似python中的r字符串。

如果需要字符串文字中字符的特殊效果，请匹配转义字符（`\`）后面添加与起始位置个数相匹配的 `#` 符。 例如，如果您的字符串是 `#"Line 1 \nLine 2"#` 并且您想要换行，则可以使用 `#"Line 1 \#nLine 2"#` 来代替。 同样，`###"Line1 \###nLine2"###` 也可以实现换行效果。

```swift
let s1 = #"Line 1 \nLine 2"#
let s2 = #"Line 1 \#nLine 2"#
print(s1)
print(s2)

/*
Line 1 \nLine 2
Line 1 
Line 2
*/
```

### 空字符串

```swift
var emptyString = ""               // 空字符串字面量
var anotherEmptyString = String()  // 初始化方法
// 两个字符串均为空并等价。
```

可以通过检查 `Bool` 类型的 `isEmpty` 属性来判断该字符串是否为空：

```swift
if emptyString.isEmpty {
    print("Nothing to see here")
}
// 打印输出：“Nothing to see here”
```

### 字符串可变性

变量可以拼接修改，常量不可以修改

### 使用字符

```swift
for character in "Dog!🐶" {
    print(character)
}
// D
// o
// g
// !
// 🐶

let exclamationMark: Character = "!" //声明独立的字符常量

//字符串可以通过传递值类型为Character的数组来初始化
let catCharacters: [Character] = ["C", "a", "t", "!", "🐱"]
let catString = String(catCharacters)
print(catString)
// 打印输出：“Cat!🐱”
```

### 连接字符串和字符

`+`或`append()`方法

### 字符串插值

*字符串插值*是一种构建新字符串的方式，可以在其中包含常量、变量、字面量和表达式。**字符串字面量**和**多行字符串字面量**都可以使用字符串插值。你插入的字符串字面量的每一项都在以反斜线为前缀的圆括号中：

```swift
let multiplier = 3
let message = "\(multiplier) times 2.5 is \(Double(multiplier) * 2.5)"
// message 是 "3 times 2.5 is 7.5"
```

如果要在使用扩展字符串分隔符的字符串中使用字符串插值，需要在反斜杠后面添加与开头和结尾数量相同扩展字符串分隔符。例如：

```swift
print(#"6 times 7 is \#(6 * 7)."#)
// 打印 "6 times 7 is 42."
```

### 字符串索引

使用 `startIndex` 属性可以获取一个 `String` 的第一个 `Character` 的索引。使用 `endIndex` 属性可以获取最后一个 `Character` 的后一个位置的索引。因此，`endIndex` 属性不能作为一个字符串的有效下标。如果 `String` 是空串，`startIndex` 和 `endIndex` 是相等的。

通过调用 `String` 的 `index(before:)` 或 `index(after:)` 方法，可以立即得到前面或后面的一个索引。你还可以通过调用 `index(_:offsetBy:)` 方法来获取对应偏移量的索引，这种方式可以避免多次调用 `index(before:)` 或 `index(after:)` 方法。

你可以使用下标语法来访问 `String` 特定索引的 `Character`。

```swift
let greeting = "Guten Tag!"
greeting[greeting.startIndex]
// G
greeting[greeting.index(before: greeting.endIndex)]
// !
greeting[greeting.index(after: greeting.startIndex)]
// u
let index = greeting.index(greeting.startIndex, offsetBy: 7)
greeting[index]
// a
```

使用 `indices` 属性会创建一个包含全部索引的范围（`Range`），用来在一个字符串中访问单个字符。

```swift
for index in greeting.indices {
   print("\(greeting[index]) ", terminator: "")
}
// 打印输出“G u t e n   T a g ! ”
```



### 插入和删除

调用 `insert(_:at:)` 方法可以在一个字符串的指定索引插入一个字符，调用 `insert(contentsOf:at:)` 方法可以在一个字符串的指定索引插入一个段字符串。

```swift
var welcome = "hello"
welcome.insert("!", at: welcome.endIndex)
// welcome 变量现在等于 "hello!"

welcome.insert(contentsOf:" there", at: welcome.index(before: welcome.endIndex))
// welcome 变量现在等于 "hello there!"
```

调用 `remove(at:)` 方法可以在一个字符串的指定索引删除一个字符，调用 `removeSubrange(_:)` 方法可以在一个字符串的指定索引删除一个子字符串。

```swift
welcome.remove(at: welcome.index(before: welcome.endIndex))
// welcome 现在等于 "hello there"

let range = welcome.index(welcome.endIndex, offsetBy: -6)..<welcome.endIndex
welcome.removeSubrange(range)
// welcome 现在等于 "hello"
```

### 比较字符串

#### 字符串/字符相等

`==`和`!=`

#### 前缀/后缀相等

`hasPrefix()`和`hasSuffix()`方法



## 集合类型

Swift 语言提供数组（Array）、集合（Set）和字典（Dictionary）三种基本的*集合类型*用来存储集合数据。数组是有序数据的集。集合是无序无重复数据的集。字典是无序的键值对的集。

![image-20220312233450651](https://io.storyxc.com/blog/image-20220312233450651.png)

Swift 中的数组、集合和字典必须明确其中保存的键和值类型，这样就可以避免插入一个错误数据类型的值。同理，对于获取到的值你也可以放心，其数据类型是确定的。

### 集合的可变性

如果创建一个数组、集合或字典并且把它分配成一个变量，这个集合将会是*可变的*。这意味着可以在创建之后添加、修改或者删除数据项。如果把数组、集合或字典分配成常量，那么它就是*不可变的*，它的大小和内容都不能被改变。

### 数组（Arrays）

#### 创建空数组

```swift
var someInts: [Int] = []
print("someInts is of type [Int] with \(someInts.count) items.")
// 打印“someInts is of type [Int] with 0 items.”
```

通过构造函数的类型，`someInts` 的值类型被推断为 `[Int]`。

或者，如果代码上下文中已经提供了类型信息，例如一个函数参数或者一个已经定义好类型的常量或者变量，你可以使用空数组语句创建一个空数组，它的写法很简单：`[]`（一对空方括号）：

```swift
someInts.append(3)
// someInts 现在包含一个 Int 值
someInts = []
// someInts 现在是空数组，但是仍然是 [Int] 类型的。
```

#### 创建带默认值的数组

```
var threeDoubles = Array(repeating: 0.0, count: 3)
// threeDoubles 是一种 [Double] 数组，等价于 [0.0, 0.0, 0.0]
```

#### 数组相加创建数组

可以使用加法操作符（`+`）来组合两个已存在的相同类型数组

#### 用数组字面量构造数组

```swift
var shoppingList: [String] = ["Eggs", "Milk"]
var shoppingList = ["Eggs", "Milk"]
// shoppingList 已经被构造并且拥有两个初始项。
```



#### 访问和修改

你可以通过数组的方法和属性来访问和修改数组，或者使用下标语法。

可以使用数组的只读属性 `count` 来获取数组中的数据项数量，使用布尔属性 `isEmpty` 作为一个缩写形式去检查 `count` 属性是否为 `0`，使用 `append(_:)` 方法在数组后面添加新的数据项，使用加法赋值运算符（`+=`）直接将另一个相同类型数组中的数据添加到该数组后面，使用*下标语法*来获取数组中的数据项，也可以用下标来改变某个有效索引值对应的数据值。

还可以利用下标来一次改变一系列数据值，即使新数据和原有数据的数量是不一样的。下面的例子把 `"Chocolate Spread"`、`"Cheese"` 和 `"Butter"` 替换为 `"Bananas"` 和 `"Apples"`：

```swift
shoppingList[4...6] = ["Bananas", "Apples"]
// shoppingList 现在有6项
```

通过调用数组的 `insert(_:at:)` 方法在某个指定索引值之前添加数据项：

```swift
shoppingList.insert("Maple Syrup", at: 0)
// shoppingList 现在有7项
// 现在是这个列表中的第一项是“Maple Syrup”
```

类似的可以使用 `remove(at:)` 方法来移除数组中的某一项。

### 集合（Sets）

*集合*用来存储相同类型并且没有确定顺序的值。当集合元素顺序不重要时或者希望确保每个元素只出现一次时可以使用集合而不是数组。

#### 集合类型的哈希值

一个类型为了存储在集合中，该类型必须是*可哈希化*的——也就是说，该类型必须提供一个方法来计算它的*哈希值*。一个哈希值是 `Int` 类型的，相等的对象哈希值必须相同，比如 `a == b`,因此必须 `a.hashValue == b.hashValue`。

Swift 的所有基本类型（比如 `String`、`Int`、`Double` 和 `Bool`）默认都是可哈希化的，可以作为集合值的类型或者字典键的类型。没有关联值的枚举成员值默认也是可哈希化的。

> 因为 `Hashable` 协议遵循 `Equatable` 协议，所以遵循该协议的类型也必须提供一个“是否相等”运算符（`==`）的实现。这个 `Equatable` 协议要求任何遵循 `==` 实现的实例间都是一种相等的关系。也就是说，对于 `a,b,c` 三个值来说，`==` 的实现必须满足下面三种情况：
>
> - `a == a`(自反性)
> - `a == b` 意味着 `b == a`(对称性)
> - `a == b && b == c` 意味着 `a == c`(传递性)

#### 创建和构造一个空的集合

```swift
var letters = Set<Character>()
print("letters is of type Set<Character> with \(letters.count) items.")
// 打印“letters is of type Set<Character> with 0 items.”
```

#### 用数组字面量创建集合

```swift
var favoriteGenres: Set<String> = ["Rock", "Classical", "Hip hop"]
var favoriteGenres: Set = ["Rock", "Classical", "Hip hop"]
// favoriteGenres 被构造成含有三个初始值的集合
```

#### 集合操作

##### 基本集合操作

- 使用 `intersection(_:)` 方法根据两个集合的交集创建一个新的集合。

- 使用 `symmetricDifference(_:)` 方法根据两个集合不相交的值创建一个新的集合。

- 使用 `union(_:)` 方法根据两个集合的所有值创建一个新的集合。

- 使用 `subtracting(_:)` 方法根据不在另一个集合中的值创建一个新的集合。

```swift
let oddDigits: Set = [1, 3, 5, 7, 9]
let evenDigits: Set = [0, 2, 4, 6, 8]
let singleDigitPrimeNumbers: Set = [2, 3, 5, 7]

oddDigits.union(evenDigits).sorted()
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
oddDigits.intersection(evenDigits).sorted()
// []
oddDigits.subtracting(singleDigitPrimeNumbers).sorted()
// [1, 9]
oddDigits.symmetricDifference(singleDigitPrimeNumbers).sorted()
// [1, 2, 9]
```

#### 集合成员关系和相等

- 使用“是否相等”运算符（`==`）来判断两个集合包含的值是否全部相同。

- 使用 `isSubset(of:)` 方法来判断一个集合中的所有值是否也被包含在另外一个集合中。

- 使用 `isSuperset(of:)` 方法来判断一个集合是否包含另一个集合中所有的值。

- 使用 `isStrictSubset(of:)` 或者 `isStrictSuperset(of:)` 方法来判断一个集合是否是另外一个集合的子集合或者父集合并且两个集合并不相等。

- 使用 `isDisjoint(with:)` 方法来判断两个集合是否不含有相同的值（是否没有交集）。

```swift
let houseAnimals: Set = ["🐶", "🐱"]
let farmAnimals: Set = ["🐮", "🐔", "🐑", "🐶", "🐱"]
let cityAnimals: Set = ["🐦", "🐭"]

houseAnimals.isSubset(of: farmAnimals)
// true
farmAnimals.isSuperset(of: houseAnimals)
// true
farmAnimals.isDisjoint(with: cityAnimals)
// true
```

### 字典

*字典*是一种无序的集合，它存储的是键值对之间的关系，其所有键的值需要是相同的类型，所有值的类型也需要相同。每个值（value）都关联唯一的*键*（key），键作为字典中这个值数据的标识符。和数组中的数据项不同，字典中的数据项并没有具体顺序。你在需要通过标识符（键）访问数据的时候使用字典，这种方法很大程度上和在现实世界中使用字典查字义的方法一样。

#### 字典类型简化语法

Swift 的字典使用 `Dictionary<Key, Value>` 定义，其中 `Key` 是一种可以在字典中被用作键的类型，`Value` 是字典中对应于这些键所存储值的数据类型。

你也可以用 `[Key: Value]` 这样简化的形式去表示字典类型。虽然这两种形式功能上相同，但是后者是首选，并且本教程中涉及到字典类型时通篇采用后者。

#### 创建一个空字典

```swift
var namesOfIntegers: [Int: String] = [:]
// namesOfIntegers 是一个空的 [Int: String] 字典
```

如果上下文已经提供了类型信息，你可以使用空字典字面量来创建一个空字典，记作 `[:]` （一对方括号中放一个冒号）：

```swift
namesOfIntegers[16] = "sixteen"
// namesOfIntegers 现在包含一个键值对
namesOfIntegers = [:]
// namesOfIntegers 又成为了一个 [Int: String] 类型的空字典
```

#### 用字典字面量创建字典

```swift
var airports: [String: String] = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
```

和数组一样，你在用字典字面量构造字典时，如果它的键和值都有各自一致的类型，那么就不必写出字典的类型。 `airports` 字典也可以用这种简短方式定义：

```swift
var airports = ["YYZ": "Toronto Pearson", "DUB": "Dublin"]
```

#### 访问和修改字典

- `count` 来获取字典的数据项数量

- isEmpty` 作为一个缩写形式去检查 `count` 属性是否为 `0
- 通过下标语法来给字典添加新的数据项
- 也可以使用下标语法来改变特定键对应的值

作为一种替代下标语法的方式，字典的 `updateValue(_:forKey:)` 方法可以设置或者更新特定键对应的值。就像上面所示的下标示例，`updateValue(_:forKey:)` 方法在这个键不存在对应值的时候会设置新值或者在存在时更新已存在的值。和下标的方式不同，`updateValue(_:forKey:)` 这个方法返回更新值之前的*原值*。这样使得你可以检查更新是否成功。

`updateValue(_:forKey:)` 方法会返回对应值类型的可选类型。举例来说：对于存储 `String` 值的字典，这个函数会返回一个 `String?` 或者“可选 `String`”类型的值。如果有值存在于更新前，则这个可选值包含了旧值，否则它将会是 `nil` ：

```swift
if let oldValue = airports.updateValue("Dublin Airport", forKey: "DUB") {
    print("The old value for DUB was \(oldValue).")
}
// 输出“The old value for DUB was Dublin.”
```

还可以使用下标语法通过将某个键的对应值赋值为 `nil` 来从字典里移除一个键值对：

```swift
airports["APL"] = "Apple Internation"
// “Apple Internation”不是真的 APL 机场，删除它
airports["APL"] = nil
// APL 现在被移除了
```

此外，`removeValue(forKey:)` 方法也可以用来在字典中移除键值对。这个方法在键值对存在的情况下会移除该键值对并且返回被移除的值或者在没有对应值的情况下返回 `nil`：

```swift
if let removedValue = airports.removeValue(forKey: "DUB") {
    print("The removed airport's name is \(removedValue).")
} else {
    print("The airports dictionary does not contain a value for DUB.")
}
// 打印“The removed airport's name is Dublin Airport.”
```

#### 字典遍历

```swift
for (airportCode, airportName) in airports {
    print("\(airportCode): \(airportName)")
}
// YYZ: Toronto Pearson
// LHR: London Heathrow
```

遍历key或value

```swift
for airportCode in airports.keys {
    print("Airport code: \(airportCode)")
}
// Airport code: YYZ
// Airport code: LHR

for airportName in airports.values {
    print("Airport name: \(airportName)")
}
// Airport name: Toronto Pearson
// Airport name: London Heathrow
```

如果你需要使用某个字典的键集合或者值集合来作为某个接受 `Array` 实例的 API 的参数，可以直接使用 `keys` 或者 `values` 属性构造一个新数组：

```swift
let airportCodes = [String](airports.keys)
// airportCodes 是 ["YYZ", "LHR"]

let airportNames = [String](airports.values)
// airportNames 是 ["Toronto Pearson", "London Heathrow"]
```

## 流程控制语句

- For-in循环

- while循环

  - while
  - repeat-while

- if-else if-else

- switch

  - 不需要break

  - 可以单个case同时匹配多个值，组成复合匹配，例如 case "a", "A"

  - 支持区间匹配，例如 `case 1..5` 

  - 支持switch元组

  - 值绑定：case 分支允许将匹配的值声明为临时常量或变量，并且在 case 分支体内使用 —— 这种行为被称为*值绑定*（value binding），因为匹配的值在 case 分支体内，与临时的常量或变量绑定。

    ```swift
    let anotherPoint = (2, 0)
    switch anotherPoint {
    case (let x, 0):
        print("on the x-axis with an x value of \(x)")
    case (0, let y):
        print("on the y-axis with a y value of \(y)")
    case let (x, y):
        print("somewhere else at (\(x), \(y))")
    }
    // 输出“on the x-axis with an x value of 2”
    ```

  - case 分支的模式可以使用 `where` 语句来判断额外的条件

## 控制转移语句

- continue
- break
  - 循环语句中的 break
  - Switch 语句中的 break

- fallthrough：在 Swift 里，`switch` 语句不会从上一个 case 分支跳转到下一个 case 分支中。相反，只要第一个匹配到的 case 分支完成了它需要执行的语句，整个 `switch` 代码块完成了它的执行。相比之下，C 语言要求你显式地插入 `break` 语句到每个 case 分支的末尾来阻止自动落入到下一个 case 分支中。Swift 的这种避免默认落入到下一个分支中的特性意味着它的 `switch` 功能要比 C 语言的更加清晰和可预测，可以避免无意识地执行多个 case 分支从而引发的错误。

  如果你确实需要 C 风格的贯穿的特性，你可以在每个需要该特性的 case 分支中使用 `fallthrough` 关键字。下面的例子使用 `fallthrough` 来创建一个数字的描述语句。	

  ```swift
  let integerToDescribe = 5
  var description = "The number \(integerToDescribe) is"
  switch integerToDescribe {
  case 2, 3, 5, 7, 11, 13, 17, 19:
      description += " a prime number, and also"
      fallthrough
  default:
      description += " an integer."
  }
  print(description)
  // 输出“The number 5 is a prime number, and also an integer.”
  ```

  

- return

- Throw

