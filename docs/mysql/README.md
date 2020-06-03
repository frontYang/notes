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

```sql
-- 参考：https://blog.csdn.net/Tong_zhi/article/details/84716210
use mysql
select host, user, authentication_string, plugin from user;
alter user 'root'@'localhost' identified by 'newpassword'; -- 修改密码
flush privileges; --刷新权限
```

10、注释ini中的跳过密码

11、重启mysql，链接测试，如果链接成功则ok了

```
net stop mysql
net start mysql
```



## 可视化软件  SQLyog

```
练习：
新建一个数据库 school
新建一张表 student
字段：id,name,age

1、在右侧root@localhost右键 => 新建数据库 => 命名school => utf8 => utf8_general_ci
2、在school数据库下的表右键 => 创建表 => 命名student  => utf8 => utf8_general_ci
3、填写列，保存
4、在school数据库下的表右键 => 打开表 => 填写表数据 => 刷新保存变更
```



## 基本命令行操作

### 连接数据库

命令行连接：

```sql
mysql -uroot -p123456 --连接数据库
--------
-- 所有的语句都用分号结尾
show databases; -- 查看所有的数据库

use school -- 切换数据库 use 数据库名

show tables; -- 查看数据库中所有的表
describe student; -- 显示数据库中所有的表信息

create database westos; -- 创建一个数据库

exit; -- 退出连接

-- 单行注释（sql的本身注释）
/*
	sql的多行注释
*/  
```



**数据库XXX语言**，CRUD 增删改查

DDL：数据库定义语言

DML：数据库管理语言

DQL：数据库查询语言

DCL：数据库控制语言



### 操作数据库（了解）

操作数据库 => 操作数据库中的表 => 操作数据库中表的数据

mysql关键字不区分大小写

1、创建数据库

```sql
CREATE DATABASE [IF NOT EXISTS] 数据库名;
```



2、删除数据库

```sql
DROP DATABASE 数据库名
```



3、使用数据库

```sql
USE 数据库名
-- 如果表名或字段名是一个特殊字符，需要用反引号 `` 包含
```



4、查看数据库

```sql
SHOW DATABASES --查看所有的数据库
```



### 数据库的列类型

> 数值

- tinyint：十分小的数据，1个字节

- smallint：较小的数据，2个字节

- middleint：中等大小的数据，3个字节

- **init：标准的整数，4个字节**  （常用）

- big：较大的数据，8个字节

- float：浮点数，4个字节

- double：浮点数，8个字节

- decimal：字符串形式的浮点数，金融计算的时候一般使用

  

> 字符串

- char：字符串固定大小的， 0~255
- **varchar：可变字符串， 0-65535**（常用）
- tinytext：微型文本， 2^8 - 1
- **text：文本串， 2^16 - 1**  （保存大文本）



> 时间日期

- date：YYYY-MM-DD，日期格式
- time：HH-mm-ss，时间格式
- **datetime：YYYY-MM-DD HH-mm-ss**   (最常用的时间格式)
- **timestamp：时间戳，1970/01/01到现在的毫秒数** (也较为常用)
- year：年份



> null

- 没有值，未知
- 注意，不要是用NULL进行运算，结果为NULL



### 数据库的字段属性（重点）

Unsigned: 

- 无符号的整数
- 声明了该列不能声明为负数

zerofill：

- 0填充的
- 不足的位数使用0来填充，例如：int(3) => 5 => 005

自增：

- 通常理解为自增，自动在上一条记录的基础上 +1 (默认)
- 通常用来设计唯一的主键 index，必须是整数类型
- 也可以自定设计主键的自增起始值

非空： NULL not null

- 假设勾选了非空，如果不给它赋值就会报错
- NULL，如果不填写值，默认是就是null

默认：

- 设置默认值
- 例如：gender，默认值：女，如果不指定该列的值，则会使用默认的值



拓展：

```sql
-- 每一个表都必须存在以下加个字段：
id 主键
`version` 乐观锁
is_delete 伪删除
gmt_create 创建时间
gmt_update 修改时间
```











