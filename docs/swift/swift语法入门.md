# swift语法入门



## 常量和变量

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



## 注释

```swift
// 这是一个注释

/* 这也是一个注释，
但是是多行的 */

/* 这是第一个多行注释的开头
/* 这是第二个被嵌套的多行注释 */
这是第一个多行注释的结尾 */
```

## 分号

Swift 并不强制要求你在每条语句的结尾处使用分号（`;`），当然，你也可以按照你自己的习惯添加分号。有一种情况下必须要用分号，即你打算在同一行内写多条独立的语句：

```swift
let cat = "🐱"; print(cat)
// 输出“🐱”
```

## 数值

### 整数

Swift 提供了8、16、32和64位的有符号和无符号整数类型。这些整数类型和 C 语言的命名方式很像，比如8位无符号整数类型是 `UInt8`，32位有符号整数类型是 `Int32` 。就像 Swift 的其他类型一样，整数类型采用大写命名法。

### 范围

```swift
let minValue = UInt8.min  // minValue 为 0，是 UInt8 类型
let maxValue = UInt8.max  // maxValue 为 255，是 UInt8 类型
```

### Int

一般来说，你不需要专门指定整数的长度。Swift 提供了一个特殊的整数类型 `Int`，长度与当前平台的原生字长相同：

- 在32位平台上，`Int` 和 `Int32` 长度相同。
- 在64位平台上，`Int` 和 `Int64` 长度相同。

### UInt

长度与当前平台的原生字长相同：

- 在32位平台上，`UInt` 和 `UInt32` 长度相同。
- 在64位平台上，`UInt` 和 `UInt64` 长度相同。

### 浮点数

`Double` 表示64位浮点数。当你需要存储很大或者很高精度的浮点数时请使用此类型。

`Float` 表示32位浮点数。精度要求不高的话可以使用此类型。

> `Double` 精确度很高，至少有 15 位小数，而 `Float` 只有 6 位小数。选择哪个类型取决于你的代码需要处理的值的范围，在两种类型都匹配的情况下，将优先选择 `Double`。

## 类型推断

当推断浮点数的类型时，Swift 总是会选择 `Double` 而不是 `Float`。

如果表达式中同时出现了整数和浮点数，会被推断为 `Double` 类型

## 类型别名

*类型别名（type aliases）*就是给现有类型定义另一个名字。你可以使用 `typealias` 关键字来定义类型别名。

```swift
typealias AudioSample = UInt16
var maxAmplitudeFound = AudioSample.min
// maxAmplitudeFound 现在是 0
```

## 布尔值

Swift 有一个基本的*布尔（Boolean）类型*，叫做 `Bool`。布尔值指*逻辑*上的值，因为它们只能是真或者假。Swift 有两个布尔常量，`true` 和 `false`

## 元组

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