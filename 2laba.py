import re
f1= open('access.log' , 'r')
q=set()
for line in f1.readlines():
    result = re.findall('\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}', line)
    q.update(result) 
q = list(q)
dp=set()
for line2 in q:
    result = re.findall('(\d{1,3}\.\d{1,3}\.\d{1,3}\.)\d{1,3}', line2)
    dp.update(result)
dp = list(dp)
for line2 in dp:
    for line3 in q:
        if line3.startswith(line2):
            print(line3)
    print(" ")    
