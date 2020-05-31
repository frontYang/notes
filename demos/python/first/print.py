# # print('hello world')
#
# # 变量定义
#
# a = 10
# print(type(a)) # <class 'int'>
#
# a = 12.6
# print(type(a)) # <class 'float'>
#
# a = 'hahaha'
# print(type(a)) # <class 'str'>
#
# a = True
# print(type(a)) # <class 'bool'>
#
# b = ()
# print(type(b)) # <class 'dict'>
#
# c = []
# print(type(c)) # <class 'list'>
#
# d = {}
# print(type(d)) # <class 'dict'>
#

# a = 7
# b = 3
# print(a + b)
# print(a - b)
# print(a * b)
# print(a / b)
# print(a % b)
# print(a ** b)
# print(a // b)

# name = 'python'
# name1 = 'world'
# a = 10
# print('hello:%s:%s:%d' % (name, name1, a))
# print('换行\n输出')

# name = '老夫子'
# QQ = '6666666'
# phone = '13800138000'
# print('姓名：%s' % (name))
# print('QQ：%s' % (QQ))
# print('手机号：%s' % (phone))

# print('姓名：{}'.format(name))
# print('QQ：{}'.format(QQ))
# print('手机号：{}'.format(phone))

# print('姓名：{}\nQQ：{}\n手机号：{}'.format(name, QQ, phone))
# print('QQ：{}'.format(QQ))
# print('手机号：{}'.format(phone))

# input
name = input('请输入姓名')
age = int(input('请输入年龄'))
QQ = input('请输入QQ')
phone = input('请输入电话')

print('姓名：{}\n年龄：{}\nQQ：{}\n手机号：{}'.format(name, age, QQ, phone))
