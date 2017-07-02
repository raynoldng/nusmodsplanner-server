import config
import sys
import json
import queryParserBV

data = sys.argv[1]
data = json.loads(data)

semester = data['semester']
numTake = data['numToTake']
if 'compMods' in data:
    compMods = data['compMods']
else:
    compMods = []

if 'optMods' in data:
    optMods = data['optMods']
else:
    optMods = []

if 'options' in data:
    options = data['options']
else:
    options = {}

''' Print out the SMTLIB 2 query first followed by the module mapping (JSON)
Last line of output will be module mapping
'''
smtlib2, moduleMapping = queryParserBV.parseQuery(int(numTake), compMods, optMods, options, semester)
print smtlib2
print json.dumps(moduleMapping)


sys.stdout.flush()
