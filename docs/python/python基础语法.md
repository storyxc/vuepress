# python基础语法



```python
print('hello world')
```



 ## 基础语法

### 标识符

- 第一个字符必须是字母或下划线`_`
- 标识符由字母、数字、下划线组成
- 标识符对大小写敏感

python3中支持中文变量名

### python关键字

```python
import keyword


print(keyword.kwlist)


['False', 'None', 'True', '__peg_parser__', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

### 注释

python中单行注释`#`

多行注释可以多个`#`或者三单引号`'''`和三双引号`"""`

### 行与缩进

python使用缩进来表示代码块，而不是像Java一样的`{}`，目前还很不习惯。。

```python
if True:
    print('true')
else:
    print('false')
```

### 多行语句

python一般一行写一条一句，特殊情况可以使用反斜杠`\`实现多行语句

```python
total = item_one + \
        item_two + \
        item_three
```

在`[]`,`{}`,`()`中的多行语句不需要`\`

### 数字类型

python中的数字有四种类型：

- int整型
- bool布尔
- float浮点
- complex复数 例如 1+2j

### 字符串

- python中的单引号和双引号完全相同
- 使用三引号可以指定多行字符串
- 转义符`\`
- 反斜杠可用作转移，使用r可以让反斜杠不发生转义。例如 r‘this is a line with \n’ 则会显示\n而非换行
- 级联字符串“this” “is” “string” 会转换为“this is string”
- 字符串可以用+运算符实现拼接，用*表示重复
- python中字符串有两种索引方式，从左往右从0开始，从右往左从-1开始
- python中字符串不能改变（和java一样）
- python没有字符类型，一个字符就是长度为1的字符串
- 字符串切片：变量[头下标:尾下标:步长]

### 空行

函数之间或类之间用空行分隔，一般是两个空行，以分隔两段不同功能或含义的代码

同一行显示多条语句

使用`;`分隔（ps，python的语句后面不用每行加分号，好不习惯。。。）

### 代码块

缩进相同的一组语句构成一个代码块，我们称首行及后面的代码称为一个子句（clause）

### print输出

print输出类似java中的println，默认是换行的，如果不想换行在print函数中加入参数`ene=''`

例如 `print('x', end ='' )`



## 基本数据类型

python中的变量不需要声明（但python是强类型语言），使用变量前必须赋值，赋值以后变量才会创建。

在python中，变量就是变量，没有类型。我们所说的类型是变量所指的内存中对象的数据类型

### 多个变量赋值

```python
a = b = c = 1
```

以上实例，创建一个整型对象1，从后向前赋值，三个变量被赋予相同的值

```python
a, b, c = 1, 2, 'noob'
```

以上实例，两个整型对象1，2分配给a和b，字符串对象`noob`分配给变量c



### 标准数据类型

python3中有六个标准数据类型

- Number
- String
- List
- Tuple
- Set
- Dictionary

其中

- 可变数据类型：List、Dictionary、Set
- 不可变：Number、String、Tuple



### 判断数据类型

`type()`函数或者`isinstance()`函数

区别：

- type()不会认为子类是父类的类型
- isinstance()会认为子类是父类类型



### 数值运算符

特殊：

- `//`除法，得到一个整数
- `%`取余数（取模）
- 混合计算时，python会把整型转换为浮点型



### String

python的字符串用单引号或双引号括起来

字符串截取语法：`变量[头下标:尾下标]` 前闭后开

字符串的切片: 

```python
str = 'Runoob'

print (str)          # 输出字符串
print (str[0:-1])    # 输出第一个到倒数第二个的所有字符 
print (str[0])       # 输出字符串第一个字符
print (str[2:5])     # 输出从第三个开始到第五个的字符
print (str[2:])      # 输出从第三个开始的后的所有字符
print (str * 2)      # 输出字符串两次，也可以写成 print (2 * str)
print (str + "TEST") # 连接字符串

结果:
Runoob
Runoo
R
noo
noob
RunoobRunoob
RunoobTEST
```

### List

List是python中使用最频繁的数据类型

列表是写在方括号`[]`之间、用逗号分隔开的元素列表

和字符串一样，列表可以被索引和截取，列表被截取后返回一个新列表

**注意：**

- 列表可以使用`+`进行拼接



### Tuple元组

tuple和列表类似，但是是由`()`括起来的，且不可变数据类型

元素一样可以被索引和截取，元组也可以使用+进行拼接



### Set

set可以使用大括号`{}`或者`set()`函数创建集合，创建一个空集合时必须使用set()函数而非`{ }`，因为`{ }`被用来创建一个空字典

set和java中的set集合一样存储的数据都是不重复的



### Dictionary

字典（dictionary）是Python中另一个非常有用的内置数据类型。 类似java的Map

列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。

字典是一种映射类型，字典用 **{ }** 标识，它是一个无序的 **键(key) : 值(value)** 的集合。

键(key)必须使用不可变类型。

在同一个字典中，键(key)必须是唯一的。



### python的数据类型转换

| [int(x [,base\])](https://www.runoob.com/python3/python-func-int.html) | 将x转换为一个整数                                   |
| ------------------------------------------------------------ | --------------------------------------------------- |
| [float(x)](https://www.runoob.com/python3/python-func-float.html) | 将x转换到一个浮点数                                 |
| [complex(real [,imag\])](https://www.runoob.com/python3/python-func-complex.html) | 创建一个复数                                        |
| [str(x)](https://www.runoob.com/python3/python-func-str.html) | 将对象 x 转换为字符串                               |
| [repr(x)](https://www.runoob.com/python3/python-func-repr.html) | 将对象 x 转换为表达式字符串                         |
| [eval(str)](https://www.runoob.com/python3/python-func-eval.html) | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
| [tuple(s)](https://www.runoob.com/python3/python3-func-tuple.html) | 将序列 s 转换为一个元组                             |
| [list(s)](https://www.runoob.com/python3/python3-att-list-list.html) | 将序列 s 转换为一个列表                             |
| [set(s)](https://www.runoob.com/python3/python-func-set.html) | 转换为可变集合                                      |
| [dict(d)](https://www.runoob.com/python3/python-func-dict.html) | 创建一个字典。d 必须是一个 (key, value)元组序列。   |
| [frozenset(s)](https://www.runoob.com/python3/python-func-frozenset.html) | 转换为不可变集合                                    |
| [chr(x)](https://www.runoob.com/python3/python-func-chr.html) | 将一个整数转换为一个字符                            |
| [ord(x)](https://www.runoob.com/python3/python-func-ord.html) | 将一个字符转换为它的整数值                          |
| [hex(x)](https://www.runoob.com/python3/python-func-hex.html) | 将一个整数转换为一个十六进制字符串                  |
| [oct(x)](https://www.runoob.com/python3/python-func-oct.html) | 将一个整数转换为一个八进制字符串                    |



## 运算符

### 算术运算符

| 运算符 | 描述                                            | 实例                      |
| :----- | :---------------------------------------------- | :------------------------ |
| +      | 加 - 两个对象相加                               | a + b 输出结果 31         |
| -      | 减 - 得到负数或是一个数减去另一个数             | a - b 输出结果 -11        |
| *      | 乘 - 两个数相乘或是返回一个被重复若干次的字符串 | a * b 输出结果 210        |
| /      | 除 - x 除以 y                                   | b / a 输出结果 2.1        |
| %      | 取模 - 返回除法的余数                           | b % a 输出结果 1          |
| **     | 幂 - 返回x的y次幂                               | a**b 为10的21次方         |
| //     | 取整除 - 向下取接近商的整数                     | `>>> 9//2 4 >>> -9//2 -5` |

### 比较运算符

| 运算符 | 描述                                                         | 实例                  |
| :----- | :----------------------------------------------------------- | :-------------------- |
| ==     | 等于 - 比较对象是否相等                                      | (a == b) 返回 False。 |
| !=     | 不等于 - 比较两个对象是否不相等                              | (a != b) 返回 True。  |
| >      | 大于 - 返回x是否大于y                                        | (a > b) 返回 False。  |
| <      | 小于 - 返回x是否小于y。所有比较运算符返回1表示真，返回0表示假。这分别与特殊的变量True和False等价。注意，这些变量名的大写。 | (a < b) 返回 True。   |
| >=     | 大于等于 - 返回x是否大于等于y。                              | (a >= b) 返回 False。 |
| <=     | 小于等于 - 返回x是否小于等于y。                              | (a <= b) 返回 True。  |

### 赋值运算符

| 运算符 | 描述                                                         | 实例                                                         |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| =      | 简单的赋值运算符                                             | c = a + b 将 a + b 的运算结果赋值为 c                        |
| +=     | 加法赋值运算符                                               | c += a 等效于 c = c + a                                      |
| -=     | 减法赋值运算符                                               | c -= a 等效于 c = c - a                                      |
| *=     | 乘法赋值运算符                                               | c *= a 等效于 c = c * a                                      |
| /=     | 除法赋值运算符                                               | c /= a 等效于 c = c / a                                      |
| %=     | 取模赋值运算符                                               | c %= a 等效于 c = c % a                                      |
| **=    | 幂赋值运算符                                                 | c **= a 等效于 c = c ** a                                    |
| //=    | 取整除赋值运算符                                             | c //= a 等效于 c = c // a                                    |
| :=     | 海象运算符，可在表达式内部为变量赋值。**Python3.8 版本新增运算符**。 | 在这个示例中，赋值表达式可以避免调用 len() 两次:`if (n := len(a)) > 10:    print(f"List is too long ({n} elements, expected <= 10)")`（这个特性java中默认就有） |

### 逻辑运算符

| 运算符 | 逻辑表达式 | 描述                                                         | 实例                    |
| :----- | :--------- | :----------------------------------------------------------- | :---------------------- |
| and    | x and y    | 布尔"与" - 如果 x 为 False，x and y 返回 x 的值，否则返回 y 的计算值。 | (a and b) 返回 20。     |
| or     | x or y     | 布尔"或" - 如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值。 | (a or b) 返回 10。      |
| not    | not x      | 布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。 | not(a and b) 返回 False |

### 成员运算符

| 运算符 | 描述                                                    | 实例                                              |
| :----- | :------------------------------------------------------ | :------------------------------------------------ |
| in     | 如果在指定的序列中找到值返回 True，否则返回 False。     | x 在 y 序列中 , 如果 x 在 y 序列中返回 True。     |
| not in | 如果在指定的序列中没有找到值返回 True，否则返回 False。 | x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。 |

### 身份运算符

| 运算符 | 描述                                        | 实例                                                         |
| :----- | :------------------------------------------ | :----------------------------------------------------------- |
| is     | is 是判断两个标识符是不是引用自一个对象     | **x is y**, 类似 **id(x) == id(y)** , 如果引用的是同一个对象则返回 True，否则返回 False |
| is not | is not 是判断两个标识符是不是引用自不同对象 | **x is not y** ， 类似 **id(a) != id(b)**。如果引用的不是同一个对象则返回结果 True，否则返回 False。 |



## 流程控制语句

### if条件控制

python的条件控控制语法上和格式上和java一些区别

```python
if condition_1:
    statement_block_1
elif condition_2:
    statement_block_2
else:
    statement_block_3
```

Python 中用 **elif** 代替了 **else if**，所以if语句的关键字为：**if – elif – else**。

**注意：**

- 1、每个条件后面要使用冒号 **:**，表示接下来是满足条件后要执行的语句块。
- 2、使用缩进来划分语句块，相同缩进数的语句在一起组成一个语句块。
- 3、在Python中没有switch – case语句。

#### if后跟的表达式

- 如果if后面的条件是数字，只要这个数字不是0，python都会把它当做True处理
- 如果if后面跟的是字符串，则只要这个字符串不为空串，python就把它看作True

- 同样的如果if后跟元组，list，set，字典 只要不为空就是true



### 循环控制语句

python中的循环有for和while两种

#### while

```python
while 判断条件(condition)：
    执行语句(statements)……
```

##### while循环使用else

while...else在条件语句为false时执行else的代码块

```python
while expr:
    statement1
else:
    statement2
```

#### for

 for 循环可以遍历任何可选代对象，如一个列表或者一个字符串。

for循环的一般格式如下：

```python
for <variable> in <sequence>:
    <statements>
else:
    <statements>
```

#### continue和break

用法上基本和java一样

**break区别**：

- python中的else和配合循环使用，在循环穷尽列表(for循环)或条件变为 false (while循环)导致循环终止时被执行，但循环被 break 终止时不执行。

例如:

```python
_list = [1, 2, 3, 4, 5]

for i in _list:
    if i == 3:
        print('33333333')
else:
    print('循环完毕')

执行结果：
33333333
循环完毕
```

而当循环是break终止的时候，else代码块不会执行：

```python
_list = [1, 2, 3, 4, 5]

for i in _list:
    if i == 3:
        print('333')
        break
else:
    print('循环完毕')

执行结果：
333
```

#### pass

Python pass是空语句，是为了保持程序结构的完整性。

pass 不做任何事情，一般用做占位语句

例如：

```python
class MyTestClass:
    pass


def my_func():
    pass


if expr:
    pass
```





## 迭代器与生成器

### 迭代器

迭代器是python中访问集合元素的一种方式，有两个基本方法`iter()`和`next()`

字符串、列表或元组对象都可以创建迭代器

```python
_list = [1,2,3,4]
it = iter(_list)
print(next(it))
print(next(it))

结果：
1
2
```

迭代器对象可以使用常规for语句进行遍历：

```python
_list = [1, 2, 3, 4]
it = iter(_list)
for x in it:
    print(x, end=" ")

结果：
1 2 3 4
```

### 生成器

在 Python 中，使用了 yield 的函数被称为生成器（generator）。

跟普通函数不同的是，生成器是一个返回迭代器的函数，只能用于迭代操作，更简单点理解生成器就是一个迭代器。

在调用生成器运行的过程中，每次遇到 yield 时函数会暂停并保存当前所有的运行信息，返回 yield 的值, 并在下一次执行 next() 方法时从当前位置继续运行。

调用一个生成器函数，返回的是一个迭代器对象。



## 函数

对应java中的方法

### 定义一个函数

- 函数代码块以 **def** 关键词开头，后接函数标识符名称和圆括号 **()**。
- 任何传入参数和自变量必须放在圆括号中间，圆括号之间可以用于定义参数。
- 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
- 函数内容以冒号 **:** 起始，并且缩进。
- **return [表达式]** 结束函数，选择性地返回一个值给调用方，不带表达式的 return 相当于返回 None。

一般格式：

```python
def 函数名（参数列表）:
    函数体
```

默认情况下，参数值和名称是按声明的顺序匹配的



### 参数传递

由于python中的变量没有类型，所以不像java的参数列表都是有类型声明的

在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list,dict 等则是可以修改的对象。

- **不可变类型:** 变量赋值 **a=5** 后再赋值 **a=10**，这里实际是新生成一个 int 值对象 10，再让 a 指向它，而 5 被丢弃，不是改变 a 的值，相当于新生成了 a。
- **可变类型:** 变量赋值 **la=[1,2,3,4]** 后再赋值 **la[2]=5** 则是将 list la 的第三个元素值更改，本身la没有动，只是其内部的一部分值被修改了。

#### python函数的参数传递：**这个和java有区别，java都是值传递**

- **不可变类型:** 值传递，如整数、字符串、元组。如 fun(a)，传递的只是 a 的值，没有影响 a 对象本身。如果在 fun(a) 内部修改 a 的值，则是新生成一个 a 的对象。
- **可变类型:** 引用传递，如 列表，字典。如 fun(la)，则是将 la 真正的传过去，修改后 fun 外部的 la 也会受影响



### 参数

以下是调用函数时可使用的正式参数类型：

#### 必需参数

按照正确顺序传入参数，调用的数量和声明的数量必须一致

#### 关键字参数

调用使用关键字参数来确定传入的参数值，使用关键字参数允许调用时与声明时的顺序不一致，因为python解释器能用参数名匹配参数值

```python
def print_me(str):
    print(str)
    
#调用
print_me(str = 'tom')

结果：
tom


def printinfo( name, age ):
   "打印任何传入的字符串"
   print ("名字: ", name)
   print ("年龄: ", age)
   return
 
#调用printinfo函数
printinfo( age=50, name="mike" )
结果：
名字： mike
年龄： 50
```

#### 默认参数

调用函数时，如果没有传递参数，则会使用默认参数。以下实例中如果没有传入 age 参数，则使用默认值

```python
def printinfo( name, age = 35 ):
   print ("名字: ", name)
   print ("年龄: ", age)
   return
 
#调用printinfo函数
printinfo( age=50, name="tom" )
print ("------------------------")
printinfo( name="tom" )

结果：
名字:  tom
年龄:  50
------------------------
名字:  tom
年龄:  35
```



#### 不定长参数

你可能需要一个函数能处理比当初声明时更多的参数。这些参数叫做不定长参数，和上述 2 种参数不同，声明时不会命名。

##### *args

*args就是就是传递一个可变参数列表给函数实参，这个参数列表的数目未知，甚至长度可以为0。下面这段代码演示了如何使用args

```python
def test_args(first, *args):
    print('Required argument: ', first)
    print(type(args))
    for v in args:
        print ('Optional argument: ', v)

test_args(1, 2, 3, 4)

结果：
Required argument:  1
<class 'tuple'>
Optional argument:  2
Optional argument:  3
Optional argument:  4
```

##### **kwargs

而**kwargs则是将一个可变的关键字参数的字典传给函数实参，同样参数列表长度可以为0或为其他值。下面这段代码演示了如何使用kwargs

```python
def test_kwargs(first, *args, **kwargs):
   print('Required argument: ', first)
   print(type(kwargs))
   for v in args:
      print ('Optional argument (args): ', v)
   for k, v in kwargs.items():
      print ('Optional argument %s (kwargs): %s' % (k, v))

test_kwargs(1, 2, 3, 4, k1=5, k2=6)

结果：
Required argument:  1
<class 'dict'>
Optional argument (args):  2
Optional argument (args):  3
Optional argument (args):  4
Optional argument k2 (kwargs): 6
Optional argument k1 (kwargs): 5
```

##### 参数中单独的*

声明函数时，参数中星号 ***** 可以单独出现，例如:

参数列表里的 * 星号，标志着位置参数的就此终结，之后的那些参数，都只能以关键字形式来指定。

```python
def f(a,b,*,c):
    return a+b+c

# f（1，2，3）->会报错
# f（1，2，c=3) -> 正常 
```

##### 调用

args和kwargs不仅可以在函数定义中使用，还可以在函数调用中使用。在调用时使用就相当于pack（打包）和unpack（解包），类似于元组的打包和解包。

首先来看一下使用args来解包调用函数的代码，

```python
def test_args_kwargs(arg1, arg2, arg3):
    print("arg1:", arg1)
    print("arg2:", arg2)
    print("arg3:", arg3)

args = ("two", 3, 5)
test_args_kwargs(*args)

结果:
arg1: two
arg2: 3
arg3: 5
```

kwargs的用法类似：

```bash
kwargs = {"arg3": 3, "arg2": "two", "arg1": 5}
test_args_kwargs(**kwargs)

#result
arg1: 5
arg2: two
arg3: 3
```



### 匿名函数

python中使用lambda来创建匿名函数

所谓匿名，意即不再使用 def 语句这样标准的形式定义一个函数。

- lambda 只是一个表达式，函数体比 def 简单很多。
- lambda的主体是一个表达式，而不是一个代码块。仅仅能在lambda表达式中封装有限的逻辑进去。
- lambda 函数拥有自己的命名空间，且不能访问自己参数列表之外或全局命名空间里的参数。
- lambda函数只能写一行

#### 语法

```python
lambda [arg1 [,arg2,.....argn]]:expression
```



例子：

```python
sum = lambda arg1, arg2: arg1 + arg2
 
# 调用sum函数
print ("相加后的值为 : ", sum( 10, 20 ))
print ("相加后的值为 : ", sum( 20, 20 ))

相加后的值为 :  30
相加后的值为 :  40
```

### 强制位置参数

Python3.8 新增了一个函数形参语法 / 用来指明函数形参必须使用指定位置参数，不能使用关键字参数的形式。

在以下的例子中，形参 a 和 b 必须使用指定位置参数，c 或 d 可以是位置形参或关键字形参，而 e 或 f 要求为关键字形参:

```python
def f(a, b, /, c, d, *, e, f):
    print(a, b, c, d, e, f)
```

正确：

```python
f(10, 20, 30, d=40, e=50, f=60)
```

错误：

```python
f(10, b=20, c=30, d=40, e=50, f=60)   # b 不能使用关键字参数的形式
f(10, 20, 30, 40, 50, f=60)           # e 必须使用关键字参数的形式
```

