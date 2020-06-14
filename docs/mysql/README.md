# MySQL 学习笔记



[通过视频学习所记](https://www.bilibili.com/video/BV1NJ411J79W)



思考：

为什么要学习数据库？

什么是数据库？

****

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



## 操作数据库

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



创建数据库表

```sql
-- 注意点：使用英文括号，表的名称和字段尽量使用 ``括起来
-- AUTO_INCREMENT 自增
-- 字符串使用 单引号括起来
-- 所有的语句后面加英文逗号，最后一个不用加
-- 一般一个表只有一个唯一的组件
CREATE TABLE IF NOT EXISTS `student` (
    `id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',  
    `name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
    `pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
    `gender` VARCHAR(2) NOT NULL DEFAULT '男' COMMENT '性别',
    `birthday` DATETIME DEFAULT NULL COMMENT '出生日期',
    `address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',
    `email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',
    PRIMARY KEY (`id`)	
)ENGINE=INNODB DEFAULT CHARSET=utf8
```

格式

```sql
CREATE TABLE IF NOT EXISTS `表名`(
	'字段名' 列类型 [属性] [索引] [注释],
  '字段名' 列类型 [属性] [索引] [注释],
  ......
  '字段名' 列类型 [属性] [索引] [注释]
)[表类型][字符集设置][注释]
```



```sql
-- 查看数据库的语句
SHOW CREATE DATABASE 数据库名

-- 查看数据表的定义语句
SHOW CREATE TABLE 表名

-- 显示表的结构
DESC 表名
```



### 数据库表的类型

**数据库引擎**

MyISAM和InnoDB的区别

InnoDB 默认使用

MyISAM 早些年使用

|              | MyISAM | InnoDB                |
| ------------ | ------ | --------------------- |
| 事务支持     | 不支持 | 支持                  |
| 数据行锁定   | 不支持 | 支持                  |
| 外键         | 不支持 | 支持                  |
| 全文检索     | 支持   | 不支持                |
| 表空间的大小 | 较小   | 较大，约为MyISAM的2倍 |

常规的使用操作：

- MyISAM：节约空间，速度较快
- InnoDB：安全性高，支持事务的处理，多表多用户操作



> 在物理空间存在的位置

所有的数据库文件都存在 `data`目录下，一个文件夹就对应一个数据库

本质还是文件的存储



MySQL引擎在物理文件上的区别

- InnoDB 在数据库表中只有一个`*.frm`文件，8.0以上是 `*.idb`文件，以及上级目录下的`ibdata1`文件
- MyISAM 对应的文件
  - `*.frm`文件，8.0以上是`*.sdi`：表结构定义的文件
  - `*.MYD`，数据文件 (data)
  - `*.MYI`，索引文件 (index)



> 设置数据库表的字符编码

```sqp
CHARSET=utf8
```

如果不设置，会是mysql默认的字符编码 （不支持中文）

MySQL的默认编码是Latin1，不支持中文

在my.ini 中配置默认的编码

```sql
character-set-server=utf8
```



### 修改和删除表

> 修改

```sql
-- 修改表名
ALTER TABLE 旧表名 RENAME AS 新表名

-- 添加字段
ALTER TABLE 表名 ADD 字段名 列属性

-- 修改表的字段(修改约束)
ALTER TABLE 表名 MODIFY 字段名 列属性

-- 修改表的字段（字段重命名）
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 列属性

-- 删除表的字段
ALTER TABLE 表名 DROP 字段名
```



> 删除

```sql
-- 删除表（如果存在再删除）
DROP TABLE IF EXISTS 表名
```

==所有的创建和删除操作尽量加上判断，以免报错==



注意点：

- 所有的字段名使用 `` 包裹
- 注释：--，/**/
- sql 关键字大小写不敏感，建议写小写
- 所有的符号全部用中文



## MySQL的数据管理

### 外键（了解）

> 方式一：在创建表的时候增加约束（麻烦，比较复杂）

```sql
CREATE TABLE IF NOT EXISTS `grade` (
    `gradeid` INT(10) NOT NULL AUTO_INCREMENT COMMENT '年级id',
    `gradename` VARCHAR(50) NOT NULL COMMENT '年级名称',
    PRIMARY KEY (`gradeid`)
)ENGINE=INNODB DEFAULT CHARSET=utf8

-- 学生表的 gradeid 字段要去引用年级表的 gradeid
-- 定义外键key
-- 给这个外键添加约束
CREATE TABLE IF NOT EXISTS `student` (
    `id` INT(4) NOT NULL AUTO_INCREMENT COMMENT '学号',  
    `gradeid` INT(10) NOT NULL COMMENT '学生年级',
    `name` VARCHAR(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',
    `pwd` VARCHAR(20) NOT NULL DEFAULT '123456' COMMENT '密码',
    `gender` VARCHAR(2) NOT NULL DEFAULT '男' COMMENT '性别',
    `birthday` DATETIME DEFAULT NULL COMMENT '出生日期',
    `address` VARCHAR(100) DEFAULT NULL COMMENT '家庭住址',
    `email` VARCHAR(50) DEFAULT NULL COMMENT '邮箱',
    PRIMARY KEY (`id`),
    KEY `FK_gradeid` (`gradeid`),  
    CONSTRAINT `FK_gradeid` FOREIGN KEY (`gradeid`) REFERENCES `grade` (gradeid)    
)ENGINE=INNODB DEFAULT CHARSET=utf8
```

删除有外键关系的表的时候，必须要先删除引用别人的表（从表），再删除被引用的表（主表）

> 方式二：创建表成功后，添加外键约束

```sql
-- ALTER TABLE `主表名` ADD CONSTRAINT `约束名` FOREIGN KEY (`字段名`) REFERENCES `从表名` (`字段名`);

ALTER TABLE `student` 
ADD CONSTRAINT `FK_gradeid` FOREIGN KEY (gradeid) REFERENCES `grade` (`gradeid`);
```



以上的操作都是物理外键，数据库级别的外键，不建议使用！（避免数据库过多造成的困扰，只做了解）



==最佳实践==

- 数据库就是单纯的表，只用来存数据，只有行（数据）和列（字段）
- 想使用多张表的数据或外键（程序去实现）



### DML语言（记住）

**数据库的意义**：数据存储，数据管理

DML语言：数据操作语言

- insert
- update

- delete



### 添加

> insert

语法：==insert into 表名([字段1,字段2...]) values (值1),(值2...)==

```
-- 插入语句 insert
-- insert into 表名([字段1,字段2...]) values (值1),(值2...)
-- 一般写插入语句，一定要数据和字段一一对应
INSERT INTO `grade`(`gradename`) VALUES('大四')

-- 插入多个字段
INSERT INTO `grade`(`gradename`) VALUES('大一'),('大二'),('大三')

INSERT INTO `student`(`name`,`pwd`,`gender`) 
VALUES('张三','1111','男')

INSERT INTO `student`(`name`,`pwd`,`gender`) 
VALUES('李四','1111','男')
```

==注意事项==：

- 字段与字段之间使用英文逗号隔开
- 字段是可以省略的，但是后面的值必须一一对应，不能少
- 可以同时插入多条数据，VALUES后面的值需要使用逗号隔开 ==VALUES(),()...==



### 修改

> update

语法：==UPDATE `表名` SET `字段名`=值 ,[`字段名`=值 ],[`字段名`=值 ]... WHERE 条件==

```sql
-- 修改学名名字，带条件，如果不指定条件，会改动所有的表
UPDATE `student` SET `name`='王五' WHERE id=1

-- 修改多个属性，逗号隔开
UPDATE `student` SET `name`='王五',`email`='10101010' WHERE id=1
```

条件：where子句运算符 id等于某个值，大雨某个值，在某个区间内修改，返回布尔值



| 操作符             | 含义       | 案例               | 结果  |
| ------------------ | ---------- | ------------------ | ----- |
| =                  | 等于       | 1=2                | false |
| <> 或者 !=         | 不等于     | 1<>2               | true  |
| >                  | 大于       | 1 > 2              | false |
| <                  | 小于       | 1<2                | true  |
| >=                 | 大于等于   | 1>=2               | false |
| <=                 | 小于等于   | 1<=2               | true  |
| BETWEEN... AND ... | 在某个区间 | 2 BEETWEEN 2 AND 5 | true  |
| AND                | 并         | 5 AND1             |       |
| OR                 | 或         | 5 OR 1             |       |

```sql
-- 通过多个条件定位数据
UPDATE `student` SET `name`='王五' WHERE `name`='王五' AND `gender`='女'
```

语法：==UPDATE `表名` SET `字段名`=值,[`字段名`=值...] WHERE [条件]==

==注意==：

- 字段名尽量用 `` 包含
- 条件，筛选的条件，如果没有指定，则会修改所有的列
- 值可以是一个变量
- 多个设置的属性之间，使用英文逗号隔开



### 删除

> delete

语法：==DELETE FROM `表名` [WHERE条件]==

```sql
-- 删除数据（避免这样写，会全部删除）
DELETE FROM `student` 

-- 删除指定数据
DELETE FROM `student`  WHERE id=1
```



> truncate 命令

作用：完全清空一个数据库表，表的结构和索引约束不会变

```sql
-- 清空表
TRUNCATE `student`
```



> delete 和 truncate 的区别

- 相同点：都能删除数据，而且都不会删除表结构
- 不同点：
  - truncate 会重新设置自增列，计数器会归零
  - truncate 不会影响事务

了解即可：==delete删除的问题==，重启数据库现象

- InnoDB 自增列会从1开始（存在内存中，断电即失）
- MyISAM，继续从上一个自增量开始（存在文件中，不会丢失）



## DQL查询数据(最重点)

### DQL

(Data Query Language,数据查询语言)

- 所有的查询操作都用Select
- 简单的查询，复杂的查询它都能做
- ==数据库中最核心的语言，最重要的语句==
- 使用频率最高的语句



### 指定查询字段

```sql
-- 查询全部的学生
-- SELECT * FROM 表名
SELECT * FROM student

-- 查询指定字段
SELECT `StudentNo`,`StudentName` FROM student

-- 别名，给结构起一个名字， AS, 可以给字段起别名，也可以给表起别名
SELECT `StudentNo` AS 学号,`StudentName` AS 学生名字 FROM student AS s

-- 函数 Concat (a,b)
SELECT CONCAT('姓名：', StudentName) AS 新名字 FROM student
```

语法：==SELECT  字段,... FROM 表==

> 有时候，列名字不是那么见名知意。可以起别名 AS， 字段名 as 别名  表名 as 别名



> 去重 `distinct`

作用：去除 SELECT查询出来的结果中重复的数据，重复的数据只显示一条

```sql
-- 查询一下又哪些同学参加了考试，成绩
SELECT * FROM result -- 查询全部的考试的成绩
SELECT `StudentNo` FROM result -- 查询有哪些同学参加了考试
SELECT DISTINCT `StudentNo` FROM result -- 去重
```



> 数据库的列（表达式）

```sql
SELECT VERSION() -- 查询系统版本 （函数）
SELECT 100*3-1 AS 计算结果 -- 计算结果 （表达式）
SELECT @@auto_increment_increment -- 查询自增的步长 （变量）
-- 学员考试成绩 + 1 分查看
SELECT `StudentNo`, `StudentResult` + 1 AS '提分后' FROM result
```



==数据库汇中表达式：文本值，列，Null，函数，计算表达式...==

select ==表达式== from 表



### where 条件子句

作用：检索数据中==符合条件==的值

搜索条件由一个或者多个表达式组成呢个，结果为布尔值

> 逻辑运算符

| 运算符         | 语法                  | 描述                             |
| -------------- | --------------------- | -------------------------------- |
| and  或者   && | a and b  或者 a && b  | 逻辑与，两者为真，结果为真       |
| or  或者  \|\| | a or b  或者  a\|\| b | 逻辑或，其中一个为真，则结果为真 |
| Not  或者  !   | Not a  或者 !a        | 逻辑非，真为假，假为真           |

==尽量使用英文字母==

```sql
-- ==================== where ================

-- 查询考试成绩在 95-100之间
SELECT `studentno`, `studentresult` FROM result
WHERE `studentresult` >= 95 AND `studentresult` <= 100

-- &&
SELECT `studentno`, `studentresult` FROM result
WHERE `studentresult` >= 95 && `studentresult` <= 100

--  模糊查询（区间）
SELECT `studentno`, `studentresult` FROM result
WHERE `studentresult` BETWEEN 90 AND 100

-- 除了1000号学生之外的同学的成绩
SELECT `studentno`, `studentresult` FROM result
WHERE `studentno` != 1000

-- Not
SELECT `studentno`, `studentresult` FROM result
WHERE NOT `studentno` = 1000
```



> 模糊查询：比较运算符

| 运算符      | 语法               | 描述                                          |
| ----------- | ------------------ | --------------------------------------------- |
| IS NULL     | a IS NULL          | 如果操作符为null，则结果为真                  |
| IS NOT NULL | a IS NOT NULL      | 如果操作符为not null，则结果为真              |
| BETWEEN     | a BETWEEN b AND c  | 如果a在b和c之间，则为真                       |
| **Like**    | a LIKE b           | SQl 匹配，如果a匹配b，则结果为真              |
| **In**      | a In (a1,a2,a3...) | 假设a在 a1,a2,a3...其中的某个值中，则结果为真 |

```sql
-- 模糊查询

-- 查询姓赵的同学
-- like结合 %(代表0到任意字符) _(一个字符)
SELECT `studentno`,`studentname` FROM `student`
WHERE `studentname` LIKE '赵%'

-- 查询姓赵的同学，名字后面只有一个字的
SELECT `studentno`,`studentname` FROM `student`
WHERE `studentname` LIKE '赵_'


-- 查询姓赵的同学，名字后面只有两个字的
SELECT `studentno`,`studentname` FROM `student`
WHERE `studentname` LIKE '赵__'

-- 查询名字中间有嘉字的同学
SELECT `studentno`,`studentname` FROM `student`	
WHERE `studentname` LIKE '%嘉%'


-- ========= in(具体的一个或者多个值) ============
-- 查询 1001,1002,1003 号学员 
SELECT `studentno`,`studentname` FROM `student`
WHERE `studentno` IN (1001,1002,1003)

-- 查询在广东深圳的学生
SELECT `studentno`,`studentname` FROM `student`
WHERE `address` IN ('广东深圳','北京朝阳')

-- ========== null not null================
-- 查询地址为空的学生 null
SELECT `studentno`,`studentname` FROM `student`
WHERE `address`='' OR `address` IS NULL

-- 查询有出生日期的同学,不为空
SELECT `studentno`,`studentname` FROM `student`
WHERE `borndate` IS NOT NULL

-- 查询没有出生日期的同学,为空
SELECT `studentno`,`studentname` FROM `student`
WHERE `borndate` IS NULL
```



### 联表查询

> JOIN 对比



<img src="D:\Document\Front\vuepress\docs\assets\images\sql\join.png" style="zoom: 80%;" />



```sql
-- ==== 联表查询 ====

-- 查询参加了考试的同学（学号，姓名，科目编号，分数）

SELECT * FROM student
SELECT * FROM result
/* 思路
1、分析需求，分析查询的字段来自哪些表（联表查询）
2、确定使用哪种连接查询？7这种
确定交叉点（这两个表中哪个数据是相同的）
判断的条件：学生表中的`studentno`=成绩表中的`studentno`
*/

-- join （连接的表） on （判断的条件） 连接查询
-- where  等值查询

SELECT s.`studentno`,`studentname`,`subjectno`,`studentresult`
FROM student AS s
INNER JOIN result AS r
WHERE s.studentno = r.studentno


-- right join
SELECT s.`studentno`,`studentname`,`subjectno`,`studentresult`
FROM student AS s
RIGHT JOIN result AS r
ON s.studentno = r.studentno

-- left join
SELECT s.`studentno`,`studentname`,`subjectno`,`studentresult`
FROM student AS s
LEFT JOIN result AS r
ON s.studentno = r.studentno


-- 查询缺考的同学
SELECT s.`studentno`,`studentname`,`subjectno`,`studentresult`
FROM student AS s
LEFT JOIN result AS r
ON s.studentno = r.studentno
WHERE `studentresult` IS NULL
```



| 操作       | 描述                                       |
| ---------- | ------------------------------------------ |
| inner join | 如果表中至少有一个匹配，就返回行           |
| left join  | 会从左表中返回所有的值，即使右表中没有匹配 |
| rigth join | 会从右表中返回所有的值，即使左表中没有匹配 |



> 自连接

