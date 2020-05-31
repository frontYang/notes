# MySQL 学习笔记



[通过视频学习所记](https://www.bilibili.com/video/BV1NJ411J79W)



思考：

为什么要学习数据库？

什么是数据库？



## 数据库分类

**关系型数据库：**(SQL)

- MySQL、Oracle、Sql Server、DB2、SQLlite
- 通过表和表之间，行和列之间的关系进行数据的存储

**非关系型数据库：**(NoSQL)  Not Only

- Redis，MongDB
- 非关系型数据库，对象存储，通过对象的自身的属性来决定



**DBMS(数据库管理系统)**

- 数据库的管理软件，科学有效的管理我们的数据。维护和获取数据
- MySQL ，数据库管理系统



## 简介

MySQL是一个关系型数据库管理系统

由瑞典MySQL AB 公司开发，属于 [Oracle](https://baike.baidu.com/item/Oracle) 旗下产品 

在 WEB 应用方面，MySQL是最好的 [RDBMS](https://baike.baidu.com/item/RDBMS/1048260) (Relational Database Management System，关系数据库管理系统) 应用软件之一

开源

体积小、速度快、总体拥有成本低 

[官网](https://www.mysql.com/)



## 安装

[下载地址](https://dev.mysql.com/downloads/mysql/)

1、解压

2、将包放到自己的电脑环境目录下

3、添加到环境变量

4、在根目录下新建MySQL核心配置文件 `my.ini`

```ini
[mysqlld]
# 目录换成自己的
basedir=D:\dev\mysql-8.0.20\
datadir=D:\dev\mysql-8.0.20\data\
port=3306

#跳过秘密验证
skip-grant-tables
```

5、启动管理员模式下的CMD，运行所有的命令 

6、安装mysql服务 `mysqld -install `，tip：该命令遇到的问题，报错，缺少 vcruntime140_1.dll，根据[这个篇文章](https://www.cnblogs.com/zfy-220/p/12313007.html)安装了一个运行库解决

7、初始化数据库文件 `mysqld –-initialize-insecure --user=mysql`

8、启动mysql，进去修改密码 ` net start mysql `，tip：出现错误， "'net'不是内部或外部命令，也不是可运行的程序或批处理文件" ， 解决方法：
我的电脑->右键->属性->高级->环境变量->系统变量->Path，再点“编辑”就可以了。在“变量值”对话框里面加“C:\windows\system32“，这是cmd.exe存在的路径，然后点确定就可以了。 



9、进入mysql通过命令行`mysql -u root -p`，修改密码（sql语句后面一定要加分号）

mysql8以前的版本修改密码：`update mysql.user set authentication_string=password('123456') where user='root' and Host='localhost';`

mysql8修改密码：

```
# 参考：https://blog.csdn.net/Tong_zhi/article/details/84716210
use mysql
select host, user, authentication_string, plugin from user;
alter user 'root'@'localhost' identified by 'newpassword';
flush privileges;

```



10、注释ini中的跳过密码

11、重启mysql，链接测试，如果链接成功则ok了

```
net stop mysql
net start mysql
```

















