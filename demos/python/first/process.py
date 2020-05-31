# score = 95
#
# if score < 60:
#     print('不及格')
#     pass # 空语句
# print('ddd')


# if score < 60:
#     print('不及格')
#     pass # 空语句
# else:
#     print('及格')
#     pass
#
# print('执行完毕')

# score = int(input('请输入成绩'))
#
# if score >= 90:
#     print('优秀')
#     pass
# elif score >= 80:
#     print('良好')
#     pass
# elif score >= 60:
#     print('及格')
#     pass
# else:
#     print('不及格')
#     pass
#
# print('执行完毕')

#
# import random
# person = int(input('请出拳：[0: 石头，1：剪刀，2：布]'))
# computer = random.randint(0, 2)
# if person == 0 and computer == 1 or person == 1 and computer == 2 or person == 2 and computer == 1:
#     print('你赢了')
#     pass
# elif person == computer:
#     print('平手')
#     pass
# else:
#     print('你输了')

# i = 0
# while i <= 1:
#     print(i)
#     i += 1
#     pass
# print('end')

# 九九乘法表
# row = 9
# while row >= 1:
#     col = 1
#     while col <= row:
#         print('%d*%d=%d' % (row, col, row*col), end=' ')
#         col += 1
#         pass
#     print()
#     row -= 1
#     pass

# 直角三角形
# row = 7
# while row >= 1:
#     j = 1
#     while j <= row:
#         print('*', end=' ')
#         j += 1
#         pass
#     print()
#     row -= 1
#     pass

# 等腰三角形
# row = 1
# while row <= 5:
#     j = 1
#     while j <= 5 - row:
#         print(' ', end='')
#         j += 1
#         pass
#     k = 1
#     while k <= 2 * row - 1:
#         print('*', end='')
#         k += 1
#         pass
#     print()
#     row += 1
#     pass
# tags = 'hello'
# for item in tags:
#     print(item)
#     pass
# range 此函数可以生成一个数据集合列表
# range(起始值,结束,步长（步长不能为0）)
# sum = 0
# for data in range(1, 101, 1):
#     # print(data,end=' ')
#     sum += data
#     pass
# print('sum=%d'% (sum))

# for data in range(50, 201):
#     if data % 2 == 0:
#         print('偶数%d'%data)
#         pass
#     else:
#         print('奇数%d'%data)
#
# # 用for循环实现九九乘法表
# for i in range(1,10):
#     for j in range(1, i + 1):
#         print('%d*%d=%d' % (i, j, i*j), end=' ')
#         pass
#     print()
#     pass

# for item in range(1, 11):
#     print(item, end=' ')
#     if item >= 5:
#         break
#     pass
# else:
#     print('已经执行完了')

# account = 'dd'
# pwd = '123'
# for i in range(3):
#     zh = input('账号')
#     pd = input('密码')
#     if zh == account and pwd == pd:
#         print('登录成功')
#     pass
# else:
#     print('您的账号已被系统锁定')


times = 0
while times <= 3:
    age = int(input('请输入年龄'))
    if age == 18:
        print('回答正确')
        break
        pass
    else:
        print('回答错误')
        pass
    times += 1
    if times >= 3:
        choose = input('是否继续Y/N:')
        if choose == 'Y' or choose == 'y':
            times = 0
            pass
        else:
            break
    pass


