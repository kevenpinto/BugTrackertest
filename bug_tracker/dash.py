import sqlite3


conn = sqlite3.connect('..\database.db')
cursor = conn.cursor()
sql_stmnt ="""
 SELECT  '1-Total Open Issues:'||COUNT(*)
 FROM    issues
 WHERE   closed_datetime is NULL
 UNION
 SELECT  '2-Total Closed Issues:'||COUNT(*)
 FROM    issues
 WHERE   closed_datetime is NOT NULL
 UNION
 SELECT  '3-Bugs Opened this Week:'||COUNT(*)
 FROM    issues
 WHERE   date(opened_datetime) >= DATE('now','weekday 0','-7 days')
 UNION
 SELECT  '4-Bugs Closed this Week:' || COUNT(*)
 FROM    issues
 WHERE   date(closed_datetime) >= DATE('now', 'weekday 0', '-7 days')
 UNION
 SELECT  '5-Bugs Opened in Last Week:'|| COUNT(*)
 FROM    issues
 WHERE   date(opened_datetime) >= DATE('now','weekday 0','-14 days') 
 AND     date(opened_datetime) <= DATE('now','weekday 0','-7 days')       
 UNION
 SELECT  '6-Bugs Closed in Last Week:'|| COUNT(*)
 FROM    issues
 WHERE   date(closed_datetime) >= DATE('now','weekday 0','-14 days') 
 AND     date(closed_datetime) <= DATE('now','weekday 0','-7 days')
"""
# print(sql_stmnt)

cursor.execute (sql_stmnt)
for x in cursor.fetchall():
    print(x)
conn.close()


# print(cursor.fetchall())
#
# title = "ISSUE5"
# desc = "DESC5"
# op = "2019-01-17 09:48:03"
# cl= "2019-01-18 09:48:03"

# with conn:
#     cursor.execute(
#         """INSERT INTO issues(
#             title,
#             description,
#             opened_datetime,
#             closed_datetime
#         ) VALUES(?,?,?,?);""", (title, desc,op,cl))