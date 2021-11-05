'''takes text lists made by the AI and turns into JSON 
for the website to use
'''
import json
import os

files = os.listdir('text')

for f in files:
	if f[-3:] == 'txt':
		with open('text/'+f) as fp:
			d = [n.strip() for n in  fp.readlines()]

		outPath = 'json/'+f[:-4] + '.json'
		with open(outPath, 'w', encoding='utf8') as op:
			json.dump(d, op, indent=4) 

		print(outPath,"Done")