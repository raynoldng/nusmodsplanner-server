import sys
import json
sys.path.append('nusmods-planner/nusmodsplanner')
import querySolver

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

schedule = querySolver.timetablePlanner(int(numTake), compMods, optMods)
print schedule

sys.stdout.flush()
