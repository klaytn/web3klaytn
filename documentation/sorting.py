import os

in_f = open('index.yaml', "r")
out_f = open('outIndex.yaml', "w")
lines = in_f.readlines()

block_dividers = []
for i in range(len(lines)):
    temp = lines[i].strip()
    prev_line = 0
    if len(temp) != 0 and temp[0] == '#':
        block_dividers.append(prev_line + i)
        prev_line = prev_line + i

all_apis = []
apis = {}
for i in range(len(block_dividers)):
    if i == len(block_dividers) - 1:
        start = block_dividers[i]+1
        end = len(lines)
    else:
        start = block_dividers[i]+1
        end = block_dividers[i+1]-1
    
    for api in range(len(lines[start:end]) // 2):
        apis[lines[start+api*2]] = [lines[start+api*2], lines[start+api*2+1]]

    all_apis.append(apis)
    apis = {}

# sorting
sorted_all_apis = []
for apis in all_apis:
    sorted_apis = dict(sorted(apis.items()))
    sorted_all_apis.append(sorted_apis)

for line in lines[:block_dividers[0]]:
    out_f.write(line)
out_f.write('\n')
for i, apis in enumerate(sorted_all_apis):
    out_f.write('\n')
    out_f.write(lines[block_dividers[i]])
    for key in apis.keys():
        out_f.write(apis[key][0])
        out_f.write(apis[key][1])

in_f.close()
out_f.close()