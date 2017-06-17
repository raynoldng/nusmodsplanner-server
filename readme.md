NUSModsPlanner-Server
========

Simple node express app to support timetable queries
for [NUSMods](https://github.com/nusmodifications/nusmods). The actual
implementation of `NUSModsPlanner` can be
found [here](https://github.com/raynoldng/nusmods-planner) and is required as
dependency.

## Prerequisites

- Python2.7
- Node.js

## Set-up

### Python Dependencies

Install z3-solver and requests

```shell
pip install z3-solver
```

### Node.js

```
npm install
```

## API 

### `GET freeday/:numToTake/:compMods`

Retrieves a schedule from the given list of mods that has a free day. Returns `[]` if none exist.

**Examples**
```
localhost:3001/api/freeday/4/null/CS2020,ST2131,CS2100,MA1101R,CS1231,CS2105,CS1020
```

Returns a very long query in [ SMTLIB ]( http://smtlib.cs.uiowa.edu/language.shtml ) 2 syntax. 

```
; benchmark
(set-info :status unknown)
(set-logic QF_BV)
(declare-fun m_239 () (_ BitVec 16))
(declare-fun m_238 () (_ BitVec 16))
;; truncated
(check-sat)
```

```
GET /freeday/4/CS2020,ST2131,CS2100,MA1101R,CS1231,CS2105,CS1020
```

### `GET freeday/:numToTake/:compMods/:optMods`

Retrieves a schedule from the given list of mods that has a free day. Mods in
`compMods` will definitely be in the timetable while a subset of mods from
`optMods` are choosen to that the total number of mods is `numToTake`. Returns
`[]` if none exist.

**Example**

```
GET freeday/4/CS2020,ST2131,CS2100,MA1101R,CS1231/CS2105,CS1020
```
```
['ST2131_Lecture_SL1', 'ST2131_Tutorial_T13', 'CS2100_Laboratory_5', 
 'CS2100_Tutorial_9', 'CS2100_Lecture_1', 'MA1101R_Laboratory_B01', 
 'MA1101R_Tutorial_T11', 'MA1101R_Lecture_SL1', 
 'CS1231_Sectional Teaching_1', 'CS1231_Tutorial_3']
```












