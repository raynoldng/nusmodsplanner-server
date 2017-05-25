import config
import sys
import json
import querySolverBV

data = sys.argv[1]
data = json.loads(data)

numTake = data['numToTake']
if 'compMods' in data:
    compMods = data['compMods']
else:
    compMods = []

if 'optMods' in data:
    optMods = data['optMods']
else:
    optMods = []

''' Removed since solving the query has been moved to the client side
schedule = querySolver.timetablePlanner(int(numTake), compMods, optMods)
print schedule
'''
#print 'Calling: ' + str(int(numTake)) + " " + str(compMods) + " " + str(optMods)
smtlib2 = querySolverBV.parseQuery(int(numTake), compMods, optMods)
print smtlib2

sys.stdout.flush()
