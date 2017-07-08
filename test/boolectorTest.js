var expect = require("chai").expect;
var fetch = require('node-fetch');
var request = require("request");
var boolectorUtils = require("../utils/boolectorUtils");

sample_query = "(set-logic QF_BV)\n(declare-fun m_105 () (_ BitVec 16))\n(declare-fun MA1101R_Lecture () (_ BitVec 16))\n(declare-fun m_104 () (_ BitVec 16))\n(declare-fun m_225 () (_ BitVec 16))\n(declare-fun m_224 () (_ BitVec 16))\n(declare-fun m_33 () (_ BitVec 16))\n(declare-fun m_32 () (_ BitVec 16))\n(declare-fun m_153 () (_ BitVec 16))\n(declare-fun m_152 () (_ BitVec 16))\n(declare-fun m_89 () (_ BitVec 16))\n(declare-fun m_88 () (_ BitVec 16))\n(declare-fun m_209 () (_ BitVec 16))\n(declare-fun m_208 () (_ BitVec 16))\n(declare-fun m_17 () (_ BitVec 16))\n(declare-fun m_16 () (_ BitVec 16))\n(declare-fun m_137 () (_ BitVec 16))\n(declare-fun m_136 () (_ BitVec 16))\n(declare-fun x_3 () (_ BitVec 16))\n(declare-fun x_2 () (_ BitVec 16))\n(declare-fun x_1 () (_ BitVec 16))\n(declare-fun x_0 () (_ BitVec 16))\n(declare-fun m_60 () (_ BitVec 16))\n(declare-fun MA1101R_Tutorial () (_ BitVec 16))\n(declare-fun m_180 () (_ BitVec 16))\n(declare-fun m_59 () (_ BitVec 16))\n(declare-fun m_179 () (_ BitVec 16))\n(declare-fun m_41 () (_ BitVec 16))\n(declare-fun m_161 () (_ BitVec 16))\n(declare-fun m_10 () (_ BitVec 16))\n(declare-fun m_130 () (_ BitVec 16))\n(declare-fun m_108 () (_ BitVec 16))\n(declare-fun m_228 () (_ BitVec 16))\n(declare-fun m_38 () (_ BitVec 16))\n(declare-fun m_158 () (_ BitVec 16))\n(declare-fun m_13 () (_ BitVec 16))\n(declare-fun m_133 () (_ BitVec 16))\n(declare-fun m_109 () (_ BitVec 16))\n(declare-fun m_229 () (_ BitVec 16))\n(declare-fun m_87 () (_ BitVec 16))\n(declare-fun m_207 () (_ BitVec 16))\n(declare-fun m_86 () (_ BitVec 16))\n(declare-fun m_206 () (_ BitVec 16))\n(declare-fun m_64 () (_ BitVec 16))\n(declare-fun m_184 () (_ BitVec 16))\n(declare-fun m_11 () (_ BitVec 16))\n(declare-fun m_131 () (_ BitVec 16))\n(declare-fun m_40 () (_ BitVec 16))\n(declare-fun m_160 () (_ BitVec 16))\n(declare-fun m_39 () (_ BitVec 16))\n(declare-fun m_159 () (_ BitVec 16))\n(declare-fun m_57 () (_ BitVec 16))\n(declare-fun m_177 () (_ BitVec 16))\n(declare-fun m_63 () (_ BitVec 16))\n(declare-fun m_183 () (_ BitVec 16))\n(declare-fun m_14 () (_ BitVec 16))\n(declare-fun m_134 () (_ BitVec 16))\n(declare-fun m_56 () (_ BitVec 16))\n(declare-fun m_176 () (_ BitVec 16))\n(declare-fun m_230 () (_ BitVec 16))\n(declare-fun MA1101R_Laboratory () (_ BitVec 16))\n(declare-fun m_231 () (_ BitVec 16))\n(declare-fun m_202 () (_ BitVec 16))\n(declare-fun m_232 () (_ BitVec 16))\n(declare-fun m_201 () (_ BitVec 16))\n(declare-fun m_233 () (_ BitVec 16))\n(declare-fun m_155 () (_ BitVec 16))\n(declare-fun m_204 () (_ BitVec 16))\n(declare-fun m_154 () (_ BitVec 16))\n(declare-fun m_203 () (_ BitVec 16))\n(declare-fun m_156 () (_ BitVec 16))\n(declare-fun m_157 () (_ BitVec 16))\n(declare-fun GER1000_Tutorial () (_ BitVec 16))\n(declare-fun m_182 () (_ BitVec 16))\n(declare-fun m_181 () (_ BitVec 16))\n(declare-fun m_35 () (_ BitVec 16))\n(declare-fun m_34 () (_ BitVec 16))\n(declare-fun m_44 () (_ BitVec 16))\n(declare-fun m_43 () (_ BitVec 16))\n(declare-fun m_185 () (_ BitVec 16))\n(declare-fun m_200 () (_ BitVec 16))\n(declare-fun m_82 () (_ BitVec 16))\n(declare-fun m_81 () (_ BitVec 16))\n(declare-fun m_129 () (_ BitVec 16))\n(declare-fun m_128 () (_ BitVec 16))\n(declare-fun m_135 () (_ BitVec 16))\n(declare-fun m_12 () (_ BitVec 16))\n(declare-fun m_83 () (_ BitVec 16))\n(declare-fun m_37 () (_ BitVec 16))\n(declare-fun m_36 () (_ BitVec 16))\n(declare-fun m_84 () (_ BitVec 16))\n(declare-fun m_132 () (_ BitVec 16))\n(declare-fun m_15 () (_ BitVec 16))\n(declare-fun m_85 () (_ BitVec 16))\n(declare-fun m_80 () (_ BitVec 16))\n(declare-fun m_9 () (_ BitVec 16))\n(declare-fun m_8 () (_ BitVec 16))\n(declare-fun m_227 () (_ BitVec 16))\n(declare-fun m_226 () (_ BitVec 16))\n(declare-fun m_164 () (_ BitVec 16))\n(declare-fun m_163 () (_ BitVec 16))\n(declare-fun m_205 () (_ BitVec 16))\n(declare-fun m_107 () (_ BitVec 16))\n(declare-fun MA1102R_Lecture () (_ BitVec 16))\n(declare-fun m_106 () (_ BitVec 16))\n(declare-fun MA1102R_Tutorial () (_ BitVec 16))\n(declare-fun m_112 () (_ BitVec 16))\n(declare-fun m_62 () (_ BitVec 16))\n(declare-fun m_18 () (_ BitVec 16))\n(declare-fun m_138 () (_ BitVec 16))\n(declare-fun m_113 () (_ BitVec 16))\n(declare-fun MA1102R_Laboratory () (_ BitVec 16))\n(declare-fun m_61 () (_ BitVec 16))\n(declare-fun m_58 () (_ BitVec 16))\n(declare-fun MA1100_Tutorial () (_ BitVec 16))\n(declare-fun m_110 () (_ BitVec 16))\n(declare-fun MA1100_Lecture () (_ BitVec 16))\n(declare-fun CS1231_Tutorial () (_ BitVec 16))\n(declare-fun m_178 () (_ BitVec 16))\n(declare-fun m_111 () (_ BitVec 16))\n(declare-fun |CS1231_Sectional Teaching| () (_ BitVec 16))\n(assert\n (let (($x1193 (= MA1101R_Lecture (_ bv1 16))))\n(let (($x1209 (=> $x1193 (= m_105 (_ bv42 16)))))\n(let (($x1207 (=> $x1193 (= m_104 (_ bv42 16)))))\n(let (($x1205 (=> $x1193 (= m_225 (_ bv42 16)))))\n(let (($x1203 (=> $x1193 (= m_224 (_ bv42 16)))))\n(let (($x1201 (=> $x1193 (= m_33 (_ bv42 16)))))\n(let (($x1199 (=> $x1193 (= m_32 (_ bv42 16)))))\n(let (($x1197 (=> $x1193 (= m_153 (_ bv42 16)))))\n(let (($x1195 (=> $x1193 (= m_152 (_ bv42 16)))))\n(let (($x1176 (= MA1101R_Lecture (_ bv0 16))))\n(let (($x1192 (=> $x1176 (= m_89 (_ bv42 16)))))\n(let (($x1190 (=> $x1176 (= m_88 (_ bv42 16)))))\n(let (($x1188 (=> $x1176 (= m_209 (_ bv42 16)))))\n(let (($x1186 (=> $x1176 (= m_208 (_ bv42 16)))))\n(let (($x1184 (=> $x1176 (= m_17 (_ bv42 16)))))\n(let (($x1182 (=> $x1176 (= m_16 (_ bv42 16)))))\n(let (($x1180 (=> $x1176 (= m_137 (_ bv42 16)))))\n(let (($x1178 (=> $x1176 (= m_136 (_ bv42 16)))))\n(let (($x1034 (or (= x_0 (_ bv4 16)) (= x_1 (_ bv4 16)) (= x_2 (_ bv4 16)) (= x_3 (_ bv4 16)))))\n(let (($x1175 (=> $x1034 (and (bvsge MA1101R_Lecture (_ bv0 16)) (bvslt MA1101R_Lecture (_ bv2 16))))))\n(let (($x1170 (=> (= MA1101R_Tutorial (_ bv17 16)) (= m_60 (_ bv48 16)))))\n(let (($x1168 (=> (= MA1101R_Tutorial (_ bv17 16)) (= m_180 (_ bv48 16)))))\n(let (($x1165 (=> (= MA1101R_Tutorial (_ bv16 16)) (= m_59 (_ bv48 16)))))\n(let (($x1163 (=> (= MA1101R_Tutorial (_ bv16 16)) (= m_179 (_ bv48 16)))))\n(let (($x1160 (=> (= MA1101R_Tutorial (_ bv15 16)) (= m_41 (_ bv48 16)))))\n(let (($x1158 (=> (= MA1101R_Tutorial (_ bv15 16)) (= m_161 (_ bv48 16)))))\n(let (($x1155 (=> (= MA1101R_Tutorial (_ bv14 16)) (= m_10 (_ bv48 16)))))\n(let (($x1153 (=> (= MA1101R_Tutorial (_ bv14 16)) (= m_130 (_ bv48 16)))))\n(let (($x1150 (=> (= MA1101R_Tutorial (_ bv13 16)) (= m_108 (_ bv48 16)))))\n(let (($x1148 (=> (= MA1101R_Tutorial (_ bv13 16)) (= m_228 (_ bv48 16)))))\n(let (($x1145 (=> (= MA1101R_Tutorial (_ bv12 16)) (= m_38 (_ bv48 16)))))\n(let (($x1143 (=> (= MA1101R_Tutorial (_ bv12 16)) (= m_158 (_ bv48 16)))))\n(let (($x1140 (=> (= MA1101R_Tutorial (_ bv11 16)) (= m_13 (_ bv48 16)))))\n(let (($x1138 (=> (= MA1101R_Tutorial (_ bv11 16)) (= m_133 (_ bv48 16)))))\n(let (($x1135 (=> (= MA1101R_Tutorial (_ bv10 16)) (= m_109 (_ bv48 16)))))\n(let (($x1133 (=> (= MA1101R_Tutorial (_ bv10 16)) (= m_229 (_ bv48 16)))))\n(let (($x1130 (=> (= MA1101R_Tutorial (_ bv9 16)) (= m_87 (_ bv48 16)))))\n(let (($x1128 (=> (= MA1101R_Tutorial (_ bv9 16)) (= m_207 (_ bv48 16)))))\n(let (($x1125 (=> (= MA1101R_Tutorial (_ bv8 16)) (= m_86 (_ bv48 16)))))\n(let (($x1123 (=> (= MA1101R_Tutorial (_ bv8 16)) (= m_206 (_ bv48 16)))))\n(let (($x1120 (=> (= MA1101R_Tutorial (_ bv7 16)) (= m_64 (_ bv48 16)))))\n(let (($x1118 (=> (= MA1101R_Tutorial (_ bv7 16)) (= m_184 (_ bv48 16)))))\n(let (($x1115 (=> (= MA1101R_Tutorial (_ bv6 16)) (= m_11 (_ bv48 16)))))\n(let (($x1113 (=> (= MA1101R_Tutorial (_ bv6 16)) (= m_131 (_ bv48 16)))))\n(let (($x1110 (=> (= MA1101R_Tutorial (_ bv5 16)) (= m_40 (_ bv48 16)))))\n(let (($x1108 (=> (= MA1101R_Tutorial (_ bv5 16)) (= m_160 (_ bv48 16)))))\n(let (($x1105 (=> (= MA1101R_Tutorial (_ bv4 16)) (= m_39 (_ bv48 16)))))\n(let (($x1103 (=> (= MA1101R_Tutorial (_ bv4 16)) (= m_159 (_ bv48 16)))))\n(let (($x1100 (=> (= MA1101R_Tutorial (_ bv3 16)) (= m_57 (_ bv48 16)))))\n(let (($x1098 (=> (= MA1101R_Tutorial (_ bv3 16)) (= m_177 (_ bv48 16)))))\n(let (($x1095 (=> (= MA1101R_Tutorial (_ bv2 16)) (= m_63 (_ bv48 16)))))\n(let (($x1093 (=> (= MA1101R_Tutorial (_ bv2 16)) (= m_183 (_ bv48 16)))))\n(let (($x1090 (=> (= MA1101R_Tutorial (_ bv1 16)) (= m_14 (_ bv48 16)))))\n(let (($x1088 (=> (= MA1101R_Tutorial (_ bv1 16)) (= m_134 (_ bv48 16)))))\n(let (($x1085 (=> (= MA1101R_Tutorial (_ bv0 16)) (= m_56 (_ bv48 16)))))\n(let (($x1083 (=> (= MA1101R_Tutorial (_ bv0 16)) (= m_176 (_ bv48 16)))))\n(let (($x1080 (=> $x1034 (and (bvsge MA1101R_Tutorial (_ bv0 16)) (bvslt MA1101R_Tutorial (_ bv18 16))))))\n(let (($x1075 (=> (= MA1101R_Laboratory (_ bv11 16)) (= m_230 (_ bv41 16)))))\n(let (($x1072 (=> (= MA1101R_Laboratory (_ bv10 16)) (= m_231 (_ bv41 16)))))\n(let (($x1069 (=> (= MA1101R_Laboratory (_ bv9 16)) (= m_202 (_ bv41 16)))))\n(let (($x1066 (=> (= MA1101R_Laboratory (_ bv8 16)) (= m_232 (_ bv41 16)))))\n(let (($x1063 (=> (= MA1101R_Laboratory (_ bv7 16)) (= m_201 (_ bv41 16)))))\n(let (($x1060 (=> (= MA1101R_Laboratory (_ bv6 16)) (= m_233 (_ bv41 16)))))\n(let (($x1057 (=> (= MA1101R_Laboratory (_ bv5 16)) (= m_155 (_ bv41 16)))))\n(let (($x1054 (=> (= MA1101R_Laboratory (_ bv4 16)) (= m_204 (_ bv41 16)))))\n(let (($x1051 (=> (= MA1101R_Laboratory (_ bv3 16)) (= m_154 (_ bv41 16)))))\n(let (($x1048 (=> (= MA1101R_Laboratory (_ bv2 16)) (= m_203 (_ bv41 16)))))\n(let (($x1045 (=> (= MA1101R_Laboratory (_ bv1 16)) (= m_156 (_ bv41 16)))))\n(let (($x1042 (=> (= MA1101R_Laboratory (_ bv0 16)) (= m_157 (_ bv41 16)))))\n(let (($x1039 (=> $x1034 (and (bvsge MA1101R_Laboratory (_ bv0 16)) (bvslt MA1101R_Laboratory (_ bv12 16))))))\n(let (($x1029 (=> (= GER1000_Tutorial (_ bv64 16)) (= m_155 (_ bv38 16)))))\n(let (($x1028 (=> (= GER1000_Tutorial (_ bv64 16)) (= m_154 (_ bv38 16)))))\n(let (($x783 (= m_182 (_ bv38 16))))\n(let (($x1025 (=> (= GER1000_Tutorial (_ bv63 16)) $x783)))\n(let (($x763 (= m_181 (_ bv38 16))))\n(let (($x1024 (=> (= GER1000_Tutorial (_ bv63 16)) $x763)))\n(let (($x1021 (=> (= GER1000_Tutorial (_ bv62 16)) (= m_35 (_ bv38 16)))))\n(let (($x1020 (=> (= GER1000_Tutorial (_ bv62 16)) (= m_34 (_ bv38 16)))))\n(let (($x1017 (=> (= GER1000_Tutorial (_ bv61 16)) (= m_33 (_ bv38 16)))))\n(let (($x1015 (=> (= GER1000_Tutorial (_ bv61 16)) (= m_32 (_ bv38 16)))))\n(let (($x1011 (=> (= GER1000_Tutorial (_ bv60 16)) (= m_225 (_ bv38 16)))))\n(let (($x1009 (=> (= GER1000_Tutorial (_ bv60 16)) (= m_224 (_ bv38 16)))))\n(let (($x1005 (=> (= GER1000_Tutorial (_ bv59 16)) (= m_44 (_ bv38 16)))))\n(let (($x1003 (=> (= GER1000_Tutorial (_ bv59 16)) (= m_43 (_ bv38 16)))))\n(let (($x999 (=> (= GER1000_Tutorial (_ bv58 16)) (= m_185 (_ bv38 16)))))\n(let (($x997 (=> (= GER1000_Tutorial (_ bv58 16)) (= m_184 (_ bv38 16)))))\n(let (($x993 (=> (= GER1000_Tutorial (_ bv57 16)) (= m_11 (_ bv38 16)))))\n(let (($x992 (=> (= GER1000_Tutorial (_ bv57 16)) (= m_10 (_ bv38 16)))))\n(let (($x989 (=> (= GER1000_Tutorial (_ bv56 16)) (= m_153 (_ bv38 16)))))\n(let (($x987 (=> (= GER1000_Tutorial (_ bv56 16)) (= m_152 (_ bv38 16)))))\n(let (($x983 (=> (= GER1000_Tutorial (_ bv55 16)) (= m_201 (_ bv38 16)))))\n(let (($x982 (=> (= GER1000_Tutorial (_ bv55 16)) (= m_200 (_ bv38 16)))))\n(let (($x978 (=> (= GER1000_Tutorial (_ bv54 16)) (= m_159 (_ bv38 16)))))\n(let (($x977 (=> (= GER1000_Tutorial (_ bv54 16)) (= m_158 (_ bv38 16)))))\n(let (($x974 (=> (= GER1000_Tutorial (_ bv53 16)) (= m_82 (_ bv38 16)))))\n(let (($x973 (=> (= GER1000_Tutorial (_ bv53 16)) (= m_81 (_ bv38 16)))))\n(let (($x970 (=> (= GER1000_Tutorial (_ bv52 16)) (= m_129 (_ bv38 16)))))\n(let (($x968 (=> (= GER1000_Tutorial (_ bv52 16)) (= m_128 (_ bv38 16)))))\n(let (($x964 (=> (= GER1000_Tutorial (_ bv51 16)) (= m_135 (_ bv38 16)))))\n(let (($x963 (=> (= GER1000_Tutorial (_ bv51 16)) (= m_134 (_ bv38 16)))))\n(let (($x960 (=> (= GER1000_Tutorial (_ bv50 16)) (= m_202 (_ bv38 16)))))\n(let (($x959 (=> (= GER1000_Tutorial (_ bv50 16)) (= m_201 (_ bv38 16)))))\n(let (($x955 (=> (= GER1000_Tutorial (_ bv49 16)) (= m_13 (_ bv38 16)))))\n(let (($x954 (=> (= GER1000_Tutorial (_ bv49 16)) (= m_12 (_ bv38 16)))))\n(let (($x951 (=> (= GER1000_Tutorial (_ bv48 16)) (= m_230 (_ bv38 16)))))\n(let (($x768 (= m_229 (_ bv38 16))))\n(let (($x949 (=> (= GER1000_Tutorial (_ bv48 16)) $x768)))\n(let (($x946 (=> (= GER1000_Tutorial (_ bv47 16)) (= m_177 (_ bv38 16)))))\n(let (($x945 (=> (= GER1000_Tutorial (_ bv47 16)) (= m_176 (_ bv38 16)))))\n(let (($x942 (=> (= GER1000_Tutorial (_ bv46 16)) (= m_83 (_ bv38 16)))))\n(let (($x941 (=> (= GER1000_Tutorial (_ bv46 16)) (= m_82 (_ bv38 16)))))\n(let (($x937 (=> (= GER1000_Tutorial (_ bv45 16)) (= m_157 (_ bv38 16)))))\n(let (($x936 (=> (= GER1000_Tutorial (_ bv45 16)) (= m_156 (_ bv38 16)))))\n(let (($x933 (=> (= GER1000_Tutorial (_ bv44 16)) (= m_13 (_ bv38 16)))))\n(let (($x931 (=> (= GER1000_Tutorial (_ bv44 16)) (= m_12 (_ bv38 16)))))\n(let (($x927 (=> (= GER1000_Tutorial (_ bv43 16)) (= m_177 (_ bv38 16)))))\n(let (($x925 (=> (= GER1000_Tutorial (_ bv43 16)) (= m_176 (_ bv38 16)))))\n(let (($x921 (=> (= GER1000_Tutorial (_ bv42 16)) (= m_87 (_ bv38 16)))))\n(let (($x920 (=> (= GER1000_Tutorial (_ bv42 16)) (= m_86 (_ bv38 16)))))\n(let (($x917 (=> (= GER1000_Tutorial (_ bv41 16)) (= m_37 (_ bv38 16)))))\n(let (($x916 (=> (= GER1000_Tutorial (_ bv41 16)) (= m_36 (_ bv38 16)))))\n(let (($x850 (= m_84 (_ bv38 16))))\n(let (($x913 (=> (= GER1000_Tutorial (_ bv40 16)) $x850)))\n(let (($x912 (=> (= GER1000_Tutorial (_ bv40 16)) (= m_83 (_ bv38 16)))))\n(let (($x908 (=> (= GER1000_Tutorial (_ bv39 16)) (= m_133 (_ bv38 16)))))\n(let (($x907 (=> (= GER1000_Tutorial (_ bv39 16)) (= m_132 (_ bv38 16)))))\n(let (($x904 (=> (= GER1000_Tutorial (_ bv38 16)) (= m_15 (_ bv38 16)))))\n(let (($x903 (=> (= GER1000_Tutorial (_ bv38 16)) (= m_14 (_ bv38 16)))))\n(let (($x901 (=> (= GER1000_Tutorial (_ bv37 16)) (= m_85 (_ bv38 16)))))\n(let (($x900 (=> (= GER1000_Tutorial (_ bv37 16)) $x850)))\n(let (($x897 (=> (= GER1000_Tutorial (_ bv36 16)) (= m_183 (_ bv38 16)))))\n(let (($x896 (=> (= GER1000_Tutorial (_ bv36 16)) $x783)))\n(let (($x893 (=> (= GER1000_Tutorial (_ bv35 16)) (= m_161 (_ bv38 16)))))\n(let (($x891 (=> (= GER1000_Tutorial (_ bv35 16)) (= m_160 (_ bv38 16)))))\n(let (($x887 (=> (= GER1000_Tutorial (_ bv34 16)) (= m_81 (_ bv38 16)))))\n(let (($x885 (=> (= GER1000_Tutorial (_ bv34 16)) (= m_80 (_ bv38 16)))))\n(let (($x881 (=> (= GER1000_Tutorial (_ bv33 16)) (= m_9 (_ bv38 16)))))\n(let (($x879 (=> (= GER1000_Tutorial (_ bv33 16)) (= m_8 (_ bv38 16)))))\n(let (($x875 (=> (= GER1000_Tutorial (_ bv32 16)) (= m_35 (_ bv38 16)))))\n(let (($x873 (=> (= GER1000_Tutorial (_ bv32 16)) (= m_34 (_ bv38 16)))))\n(let (($x869 (=> (= GER1000_Tutorial (_ bv31 16)) (= m_159 (_ bv38 16)))))\n(let (($x867 (=> (= GER1000_Tutorial (_ bv31 16)) (= m_158 (_ bv38 16)))))\n(let (($x863 (=> (= GER1000_Tutorial (_ bv30 16)) (= m_11 (_ bv38 16)))))\n(let (($x861 (=> (= GER1000_Tutorial (_ bv30 16)) (= m_10 (_ bv38 16)))))\n(let (($x857 (=> (= GER1000_Tutorial (_ bv29 16)) (= m_207 (_ bv38 16)))))\n(let (($x856 (=> (= GER1000_Tutorial (_ bv29 16)) (= m_206 (_ bv38 16)))))\n(let (($x853 (=> (= GER1000_Tutorial (_ bv28 16)) (= m_85 (_ bv38 16)))))\n(let (($x851 (=> (= GER1000_Tutorial (_ bv28 16)) $x850)))\n(let (($x848 (=> (= GER1000_Tutorial (_ bv27 16)) (= m_227 (_ bv38 16)))))\n(let (($x846 (=> (= GER1000_Tutorial (_ bv27 16)) (= m_226 (_ bv38 16)))))\n(let (($x842 (=> (= GER1000_Tutorial (_ bv26 16)) (= m_203 (_ bv38 16)))))\n(let (($x841 (=> (= GER1000_Tutorial (_ bv26 16)) (= m_202 (_ bv38 16)))))\n(let (($x837 (=> (= GER1000_Tutorial (_ bv25 16)) $x768)))\n(let (($x836 (=> (= GER1000_Tutorial (_ bv25 16)) (= m_228 (_ bv38 16)))))\n(let (($x833 (=> (= GER1000_Tutorial (_ bv24 16)) (= m_89 (_ bv38 16)))))\n(let (($x831 (=> (= GER1000_Tutorial (_ bv24 16)) (= m_88 (_ bv38 16)))))\n(let (($x827 (=> (= GER1000_Tutorial (_ bv23 16)) (= m_39 (_ bv38 16)))))\n(let (($x826 (=> (= GER1000_Tutorial (_ bv23 16)) (= m_38 (_ bv38 16)))))\n(let (($x823 (=> (= GER1000_Tutorial (_ bv22 16)) $x763)))\n(let (($x761 (= m_180 (_ bv38 16))))\n(let (($x822 (=> (= GER1000_Tutorial (_ bv22 16)) $x761)))\n(let (($x738 (= m_204 (_ bv38 16))))\n(let (($x820 (=> (= GER1000_Tutorial (_ bv21 16)) $x738)))\n(let (($x819 (=> (= GER1000_Tutorial (_ bv21 16)) (= m_203 (_ bv38 16)))))\n(let (($x816 (=> (= GER1000_Tutorial (_ bv20 16)) (= m_207 (_ bv38 16)))))\n(let (($x814 (=> (= GER1000_Tutorial (_ bv20 16)) (= m_206 (_ bv38 16)))))\n(let (($x811 (=> (= GER1000_Tutorial (_ bv19 16)) (= m_164 (_ bv38 16)))))\n(let (($x809 (=> (= GER1000_Tutorial (_ bv19 16)) (= m_163 (_ bv38 16)))))\n(let (($x806 (=> (= GER1000_Tutorial (_ bv18 16)) (= m_15 (_ bv38 16)))))\n(let (($x804 (=> (= GER1000_Tutorial (_ bv18 16)) (= m_14 (_ bv38 16)))))\n(let (($x801 (=> (= GER1000_Tutorial (_ bv17 16)) (= m_209 (_ bv38 16)))))\n(let (($x799 (=> (= GER1000_Tutorial (_ bv17 16)) (= m_208 (_ bv38 16)))))\n(let (($x796 (=> (= GER1000_Tutorial (_ bv16 16)) (= m_133 (_ bv38 16)))))\n(let (($x794 (=> (= GER1000_Tutorial (_ bv16 16)) (= m_132 (_ bv38 16)))))\n(let (($x791 (=> (= GER1000_Tutorial (_ bv15 16)) (= m_157 (_ bv38 16)))))\n(let (($x789 (=> (= GER1000_Tutorial (_ bv15 16)) (= m_156 (_ bv38 16)))))\n(let (($x786 (=> (= GER1000_Tutorial (_ bv14 16)) (= m_183 (_ bv38 16)))))\n(let (($x784 (=> (= GER1000_Tutorial (_ bv14 16)) $x783)))\n(let (($x781 (=> (= GER1000_Tutorial (_ bv13 16)) (= m_41 (_ bv38 16)))))\n(let (($x779 (=> (= GER1000_Tutorial (_ bv13 16)) (= m_40 (_ bv38 16)))))\n(let (($x776 (=> (= GER1000_Tutorial (_ bv12 16)) $x761)))\n(let (($x775 (=> (= GER1000_Tutorial (_ bv12 16)) (= m_179 (_ bv38 16)))))\n(let (($x772 (=> (= GER1000_Tutorial (_ bv11 16)) (= m_205 (_ bv38 16)))))\n(let (($x771 (=> (= GER1000_Tutorial (_ bv11 16)) $x738)))\n(let (($x769 (=> (= GER1000_Tutorial (_ bv10 16)) $x768)))\n(let (($x767 (=> (= GER1000_Tutorial (_ bv10 16)) (= m_228 (_ bv38 16)))))\n(let (($x764 (=> (= GER1000_Tutorial (_ bv9 16)) $x763)))\n(let (($x762 (=> (= GER1000_Tutorial (_ bv9 16)) $x761)))\n(let (($x759 (=> (= GER1000_Tutorial (_ bv8 16)) (= m_233 (_ bv38 16)))))\n(let (($x757 (=> (= GER1000_Tutorial (_ bv8 16)) (= m_232 (_ bv38 16)))))\n(let (($x754 (=> (= GER1000_Tutorial (_ bv7 16)) (= m_131 (_ bv38 16)))))\n(let (($x753 (=> (= GER1000_Tutorial (_ bv7 16)) (= m_130 (_ bv38 16)))))\n(let (($x751 (=> (= GER1000_Tutorial (_ bv6 16)) (= m_37 (_ bv38 16)))))\n(let (($x749 (=> (= GER1000_Tutorial (_ bv6 16)) (= m_36 (_ bv38 16)))))\n(let (($x746 (=> (= GER1000_Tutorial (_ bv5 16)) (= m_87 (_ bv38 16)))))\n(let (($x744 (=> (= GER1000_Tutorial (_ bv5 16)) (= m_86 (_ bv38 16)))))\n(let (($x741 (=> (= GER1000_Tutorial (_ bv4 16)) (= m_205 (_ bv38 16)))))\n(let (($x739 (=> (= GER1000_Tutorial (_ bv4 16)) $x738)))\n(let (($x736 (=> (= GER1000_Tutorial (_ bv3 16)) (= m_131 (_ bv38 16)))))\n(let (($x734 (=> (= GER1000_Tutorial (_ bv3 16)) (= m_130 (_ bv38 16)))))\n(let (($x731 (=> (= GER1000_Tutorial (_ bv2 16)) (= m_135 (_ bv38 16)))))\n(let (($x729 (=> (= GER1000_Tutorial (_ bv2 16)) (= m_134 (_ bv38 16)))))\n(let (($x726 (=> (= GER1000_Tutorial (_ bv1 16)) (= m_39 (_ bv38 16)))))\n(let (($x724 (=> (= GER1000_Tutorial (_ bv1 16)) (= m_38 (_ bv38 16)))))\n(let (($x721 (=> (= GER1000_Tutorial (_ bv0 16)) (= m_155 (_ bv38 16)))))\n(let (($x719 (=> (= GER1000_Tutorial (_ bv0 16)) (= m_154 (_ bv38 16)))))\n(let (($x715 (=> (or (= x_0 (_ bv3 16)) (= x_1 (_ bv3 16)) (= x_2 (_ bv3 16)) (= x_3 (_ bv3 16))) (and (bvsge GER1000_Tutorial (_ bv0 16)) (bvslt GER1000_Tutorial (_ bv65 16))))))\n(let (($x689 (= MA1102R_Lecture (_ bv1 16))))\n(let (($x705 (=> $x689 (= m_107 (_ bv22 16)))))\n(let (($x703 (=> $x689 (= m_106 (_ bv22 16)))))\n(let (($x701 (=> $x689 (= m_227 (_ bv22 16)))))\n(let (($x699 (=> $x689 (= m_226 (_ bv22 16)))))\n(let (($x697 (=> $x689 (= m_35 (_ bv22 16)))))\n(let (($x695 (=> $x689 (= m_34 (_ bv22 16)))))\n(let (($x693 (=> $x689 (= m_155 (_ bv22 16)))))\n(let (($x691 (=> $x689 (= m_154 (_ bv22 16)))))\n(let (($x671 (= MA1102R_Lecture (_ bv0 16))))\n(let (($x688 (=> $x671 (= m_87 (_ bv22 16)))))\n(let (($x686 (=> $x671 (= m_86 (_ bv22 16)))))\n(let (($x684 (=> $x671 (= m_207 (_ bv22 16)))))\n(let (($x682 (=> $x671 (= m_206 (_ bv22 16)))))\n(let (($x680 (=> $x671 (= m_15 (_ bv22 16)))))\n(let (($x678 (=> $x671 (= m_14 (_ bv22 16)))))\n(let (($x676 (=> $x671 (= m_135 (_ bv22 16)))))\n(let (($x674 (=> $x671 (= m_134 (_ bv22 16)))))\n(let (($x16 (= x_2 (_ bv2 16))))\n(let (($x545 (or (= x_0 (_ bv2 16)) (= x_1 (_ bv2 16)) $x16 (= x_3 (_ bv2 16)))))\n(let (($x670 (=> $x545 (and (bvsge MA1102R_Lecture (_ bv0 16)) (bvslt MA1102R_Lecture (_ bv2 16))))))\n(let (($x665 (=> (= MA1102R_Tutorial (_ bv14 16)) (= m_37 (_ bv28 16)))))\n(let (($x663 (=> (= MA1102R_Tutorial (_ bv14 16)) (= m_157 (_ bv28 16)))))\n(let (($x660 (=> (= MA1102R_Tutorial (_ bv13 16)) (= m_112 (_ bv28 16)))))\n(let (($x658 (=> (= MA1102R_Tutorial (_ bv13 16)) (= m_232 (_ bv28 16)))))\n(let (($x655 (=> (= MA1102R_Tutorial (_ bv12 16)) (= m_62 (_ bv28 16)))))\n(let (($x653 (=> (= MA1102R_Tutorial (_ bv12 16)) (= m_182 (_ bv28 16)))))\n(let (($x650 (=> (= MA1102R_Tutorial (_ bv11 16)) (= m_105 (_ bv28 16)))))\n(let (($x648 (=> (= MA1102R_Tutorial (_ bv11 16)) (= m_225 (_ bv28 16)))))\n(let (($x645 (=> (= MA1102R_Tutorial (_ bv10 16)) (= m_104 (_ bv28 16)))))\n(let (($x643 (=> (= MA1102R_Tutorial (_ bv10 16)) (= m_224 (_ bv28 16)))))\n(let (($x640 (=> (= MA1102R_Tutorial (_ bv9 16)) (= m_63 (_ bv28 16)))))\n(let (($x638 (=> (= MA1102R_Tutorial (_ bv9 16)) (= m_183 (_ bv28 16)))))\n(let (($x635 (=> (= MA1102R_Tutorial (_ bv8 16)) (= m_36 (_ bv28 16)))))\n(let (($x633 (=> (= MA1102R_Tutorial (_ bv8 16)) (= m_156 (_ bv28 16)))))\n(let (($x630 (=> (= MA1102R_Tutorial (_ bv7 16)) (= m_59 (_ bv28 16)))))\n(let (($x628 (=> (= MA1102R_Tutorial (_ bv7 16)) (= m_179 (_ bv28 16)))))\n(let (($x625 (=> (= MA1102R_Tutorial (_ bv6 16)) (= m_64 (_ bv28 16)))))\n(let (($x623 (=> (= MA1102R_Tutorial (_ bv6 16)) (= m_184 (_ bv28 16)))))\n(let (($x620 (=> (= MA1102R_Tutorial (_ bv5 16)) (= m_18 (_ bv28 16)))))\n(let (($x618 (=> (= MA1102R_Tutorial (_ bv5 16)) (= m_138 (_ bv28 16)))))\n(let (($x615 (=> (= MA1102R_Tutorial (_ bv4 16)) (= m_60 (_ bv28 16)))))\n(let (($x613 (=> (= MA1102R_Tutorial (_ bv4 16)) (= m_180 (_ bv28 16)))))\n(let (($x610 (=> (= MA1102R_Tutorial (_ bv3 16)) (= m_9 (_ bv28 16)))))\n(let (($x608 (=> (= MA1102R_Tutorial (_ bv3 16)) (= m_129 (_ bv28 16)))))\n(let (($x605 (=> (= MA1102R_Tutorial (_ bv2 16)) (= m_17 (_ bv28 16)))))\n(let (($x603 (=> (= MA1102R_Tutorial (_ bv2 16)) (= m_137 (_ bv28 16)))))\n(let (($x600 (=> (= MA1102R_Tutorial (_ bv1 16)) (= m_10 (_ bv28 16)))))\n(let (($x598 (=> (= MA1102R_Tutorial (_ bv1 16)) (= m_130 (_ bv28 16)))))\n(let (($x595 (=> (= MA1102R_Tutorial (_ bv0 16)) (= m_113 (_ bv28 16)))))\n(let (($x593 (=> (= MA1102R_Tutorial (_ bv0 16)) (= m_233 (_ bv28 16)))))\n(let (($x589 (=> $x545 (and (bvsge MA1102R_Tutorial (_ bv0 16)) (bvslt MA1102R_Tutorial (_ bv15 16))))))\n(let (($x584 (=> (= MA1102R_Laboratory (_ bv10 16)) (= m_39 (_ bv21 16)))))\n(let (($x581 (=> (= MA1102R_Laboratory (_ bv9 16)) (= m_82 (_ bv21 16)))))\n(let (($x578 (=> (= MA1102R_Laboratory (_ bv8 16)) (= m_38 (_ bv21 16)))))\n(let (($x575 (=> (= MA1102R_Laboratory (_ bv7 16)) (= m_83 (_ bv21 16)))))\n(let (($x572 (=> (= MA1102R_Laboratory (_ bv6 16)) (= m_11 (_ bv21 16)))))\n(let (($x569 (=> (= MA1102R_Laboratory (_ bv5 16)) (= m_61 (_ bv21 16)))))\n(let (($x566 (=> (= MA1102R_Laboratory (_ bv4 16)) (= m_57 (_ bv21 16)))))\n(let (($x563 (=> (= MA1102R_Laboratory (_ bv3 16)) (= m_81 (_ bv21 16)))))\n(let (($x560 (=> (= MA1102R_Laboratory (_ bv2 16)) (= m_58 (_ bv21 16)))))\n(let (($x557 (=> (= MA1102R_Laboratory (_ bv1 16)) (= m_84 (_ bv21 16)))))\n(let (($x554 (=> (= MA1102R_Laboratory (_ bv0 16)) (= m_12 (_ bv21 16)))))\n(let (($x550 (=> $x545 (and (bvsge MA1102R_Laboratory (_ bv0 16)) (bvslt MA1102R_Laboratory (_ bv11 16))))))\n(let (($x541 (=> (= MA1100_Tutorial (_ bv5 16)) (= m_109 (_ bv18 16)))))\n(let (($x539 (=> (= MA1100_Tutorial (_ bv5 16)) (= m_229 (_ bv18 16)))))\n(let (($x536 (=> (= MA1100_Tutorial (_ bv4 16)) (= m_10 (_ bv18 16)))))\n(let (($x534 (=> (= MA1100_Tutorial (_ bv4 16)) (= m_130 (_ bv18 16)))))\n(let (($x531 (=> (= MA1100_Tutorial (_ bv3 16)) (= m_9 (_ bv18 16)))))\n(let (($x529 (=> (= MA1100_Tutorial (_ bv3 16)) (= m_129 (_ bv18 16)))))\n(let (($x526 (=> (= MA1100_Tutorial (_ bv2 16)) (= m_110 (_ bv18 16)))))\n(let (($x524 (=> (= MA1100_Tutorial (_ bv2 16)) (= m_230 (_ bv18 16)))))\n(let (($x521 (=> (= MA1100_Tutorial (_ bv1 16)) (= m_60 (_ bv18 16)))))\n(let (($x519 (=> (= MA1100_Tutorial (_ bv1 16)) (= m_180 (_ bv18 16)))))\n(let (($x516 (=> (= MA1100_Tutorial (_ bv0 16)) (= m_61 (_ bv18 16)))))\n(let (($x514 (=> (= MA1100_Tutorial (_ bv0 16)) (= m_181 (_ bv18 16)))))\n(let (($x511 (=> (or (= x_0 (_ bv1 16)) (= x_1 (_ bv1 16)) (= x_2 (_ bv1 16)) (= x_3 (_ bv1 16))) (and (bvsge MA1100_Tutorial (_ bv0 16)) (bvslt MA1100_Tutorial (_ bv6 16))))))\n(let (($x490 (= MA1100_Lecture (_ bv0 16))))\n(let (($x506 (=> $x490 (= m_85 (_ bv12 16)))))\n(let (($x504 (=> $x490 (= m_84 (_ bv12 16)))))\n(let (($x502 (=> $x490 (= m_205 (_ bv12 16)))))\n(let (($x500 (=> $x490 (= m_204 (_ bv12 16)))))\n(let (($x498 (=> $x490 (= m_13 (_ bv12 16)))))\n(let (($x496 (=> $x490 (= m_12 (_ bv12 16)))))\n(let (($x494 (=> $x490 (= m_133 (_ bv12 16)))))\n(let (($x492 (=> $x490 (= m_132 (_ bv12 16)))))\n(let (($x489 (=> (or (= x_0 (_ bv1 16)) (= x_1 (_ bv1 16)) (= x_2 (_ bv1 16)) (= x_3 (_ bv1 16))) (and (bvsge MA1100_Lecture (_ bv0 16)) (bvslt MA1100_Lecture (_ bv1 16))))))\n(let (($x396 (= m_113 (_ bv8 16))))\n(let (($x476 (= CS1231_Tutorial (_ bv19 16))))\n(let (($x480 (=> $x476 $x396)))\n(let (($x394 (= m_112 (_ bv8 16))))\n(let (($x479 (=> $x476 $x394)))\n(let (($x392 (= m_233 (_ bv8 16))))\n(let (($x478 (=> $x476 $x392)))\n(let (($x390 (= m_232 (_ bv8 16))))\n(let (($x477 (=> $x476 $x390)))\n(let (($x470 (= CS1231_Tutorial (_ bv18 16))))\n(let (($x474 (=> $x470 (= m_61 (_ bv8 16)))))\n(let (($x473 (=> $x470 (= m_60 (_ bv8 16)))))\n(let (($x472 (=> $x470 (= m_181 (_ bv8 16)))))\n(let (($x471 (=> $x470 (= m_180 (_ bv8 16)))))\n(let (($x464 (= CS1231_Tutorial (_ bv17 16))))\n(let (($x468 (=> $x464 (= m_63 (_ bv8 16)))))\n(let (($x467 (=> $x464 (= m_62 (_ bv8 16)))))\n(let (($x466 (=> $x464 (= m_183 (_ bv8 16)))))\n(let (($x465 (=> $x464 (= m_182 (_ bv8 16)))))\n(let (($x353 (= m_59 (_ bv8 16))))\n(let (($x458 (= CS1231_Tutorial (_ bv16 16))))\n(let (($x462 (=> $x458 $x353)))\n(let (($x351 (= m_58 (_ bv8 16))))\n(let (($x461 (=> $x458 $x351)))\n(let (($x349 (= m_179 (_ bv8 16))))\n(let (($x460 (=> $x458 $x349)))\n(let (($x347 (= m_178 (_ bv8 16))))\n(let (($x459 (=> $x458 $x347)))\n(let (($x452 (= CS1231_Tutorial (_ bv15 16))))\n(let (($x456 (=> $x452 (= m_109 (_ bv8 16)))))\n(let (($x455 (=> $x452 (= m_108 (_ bv8 16)))))\n(let (($x454 (=> $x452 (= m_229 (_ bv8 16)))))\n(let (($x453 (=> $x452 (= m_228 (_ bv8 16)))))\n(let (($x446 (= CS1231_Tutorial (_ bv14 16))))\n(let (($x450 (=> $x446 (= m_83 (_ bv8 16)))))\n(let (($x449 (=> $x446 (= m_82 (_ bv8 16)))))\n(let (($x448 (=> $x446 (= m_203 (_ bv8 16)))))\n(let (($x447 (=> $x446 (= m_202 (_ bv8 16)))))\n(let (($x440 (= CS1231_Tutorial (_ bv13 16))))\n(let (($x444 (=> $x440 $x353)))\n(let (($x443 (=> $x440 $x351)))\n(let (($x442 (=> $x440 $x349)))\n(let (($x441 (=> $x440 $x347)))\n(let (($x430 (= CS1231_Tutorial (_ bv12 16))))\n(let (($x438 (=> $x430 (= m_61 (_ bv8 16)))))\n(let (($x436 (=> $x430 (= m_60 (_ bv8 16)))))\n(let (($x434 (=> $x430 (= m_181 (_ bv8 16)))))\n(let (($x432 (=> $x430 (= m_180 (_ bv8 16)))))\n(let (($x420 (= CS1231_Tutorial (_ bv11 16))))\n(let (($x428 (=> $x420 (= m_63 (_ bv8 16)))))\n(let (($x426 (=> $x420 (= m_62 (_ bv8 16)))))\n(let (($x424 (=> $x420 (= m_183 (_ bv8 16)))))\n(let (($x422 (=> $x420 (= m_182 (_ bv8 16)))))\n(let (($x410 (= CS1231_Tutorial (_ bv10 16))))\n(let (($x418 (=> $x410 (= m_89 (_ bv8 16)))))\n(let (($x416 (=> $x410 (= m_88 (_ bv8 16)))))\n(let (($x414 (=> $x410 (= m_209 (_ bv8 16)))))\n(let (($x412 (=> $x410 (= m_208 (_ bv8 16)))))\n(let (($x335 (= m_111 (_ bv8 16))))\n(let (($x404 (= CS1231_Tutorial (_ bv9 16))))\n(let (($x408 (=> $x404 $x335)))\n(let (($x333 (= m_110 (_ bv8 16))))\n(let (($x407 (=> $x404 $x333)))\n(let (($x331 (= m_231 (_ bv8 16))))\n(let (($x406 (=> $x404 $x331)))\n(let (($x329 (= m_230 (_ bv8 16))))\n(let (($x405 (=> $x404 $x329)))\n(let (($x398 (= CS1231_Tutorial (_ bv8 16))))\n(let (($x402 (=> $x398 $x396)))\n(let (($x401 (=> $x398 $x394)))\n(let (($x400 (=> $x398 $x392)))\n(let (($x399 (=> $x398 $x390)))\n(let (($x389 (= CS1231_Tutorial (_ bv7 16))))\n(let (($x397 (=> $x389 $x396)))\n(let (($x395 (=> $x389 $x394)))\n(let (($x393 (=> $x389 $x392)))\n(let (($x391 (=> $x389 $x390)))\n(let (($x379 (= CS1231_Tutorial (_ bv6 16))))\n(let (($x387 (=> $x379 (= m_87 (_ bv8 16)))))\n(let (($x385 (=> $x379 (= m_86 (_ bv8 16)))))\n(let (($x383 (=> $x379 (= m_207 (_ bv8 16)))))\n(let (($x381 (=> $x379 (= m_206 (_ bv8 16)))))\n(let (($x370 (= CS1231_Tutorial (_ bv5 16))))\n(let (($x378 (=> $x370 (= m_109 (_ bv8 16)))))\n(let (($x376 (=> $x370 (= m_108 (_ bv8 16)))))\n(let (($x374 (=> $x370 (= m_229 (_ bv8 16)))))\n(let (($x372 (=> $x370 (= m_228 (_ bv8 16)))))\n(let (($x361 (= CS1231_Tutorial (_ bv4 16))))\n(let (($x369 (=> $x361 (= m_85 (_ bv8 16)))))\n(let (($x367 (=> $x361 (= m_84 (_ bv8 16)))))\n(let (($x365 (=> $x361 (= m_205 (_ bv8 16)))))\n(let (($x363 (=> $x361 (= m_204 (_ bv8 16)))))\n(let (($x355 (= CS1231_Tutorial (_ bv3 16))))\n(let (($x359 (=> $x355 $x335)))\n(let (($x358 (=> $x355 $x333)))\n(let (($x357 (=> $x355 $x331)))\n(let (($x356 (=> $x355 $x329)))\n(let (($x346 (= CS1231_Tutorial (_ bv2 16))))\n(let (($x354 (=> $x346 $x353)))\n(let (($x352 (=> $x346 $x351)))\n(let (($x350 (=> $x346 $x349)))\n(let (($x348 (=> $x346 $x347)))\n(let (($x337 (= CS1231_Tutorial (_ bv1 16))))\n(let (($x345 (=> $x337 (= m_83 (_ bv8 16)))))\n(let (($x343 (=> $x337 (= m_82 (_ bv8 16)))))\n(let (($x341 (=> $x337 (= m_203 (_ bv8 16)))))\n(let (($x339 (=> $x337 (= m_202 (_ bv8 16)))))\n(let (($x327 (= CS1231_Tutorial (_ bv0 16))))\n(let (($x336 (=> $x327 $x335)))\n(let (($x334 (=> $x327 $x333)))\n(let (($x332 (=> $x327 $x331)))\n(let (($x330 (=> $x327 $x329)))\n(let (($x326 (=> (or (= x_0 (_ bv0 16)) (= x_1 (_ bv0 16)) (= x_2 (_ bv0 16)) (= x_3 (_ bv0 16))) (and (bvsge CS1231_Tutorial (_ bv0 16)) (bvslt CS1231_Tutorial (_ bv20 16))))))\n(let (($x308 (= |CS1231_Sectional Teaching| (_ bv1 16))))\n(let (($x320 (=> $x308 (= m_106 (_ bv6 16)))))\n(let (($x318 (=> $x308 (= m_226 (_ bv6 16)))))\n(let (($x316 (=> $x308 (= m_82 (_ bv6 16)))))\n(let (($x314 (=> $x308 (= m_81 (_ bv6 16)))))\n(let (($x312 (=> $x308 (= m_202 (_ bv6 16)))))\n(let (($x310 (=> $x308 (= m_201 (_ bv6 16)))))\n(let (($x294 (= |CS1231_Sectional Teaching| (_ bv0 16))))\n(let (($x307 (=> $x294 (= m_107 (_ bv6 16)))))\n(let (($x305 (=> $x294 (= m_227 (_ bv6 16)))))\n(let (($x303 (=> $x294 (= m_85 (_ bv6 16)))))\n(let (($x301 (=> $x294 (= m_84 (_ bv6 16)))))\n(let (($x299 (=> $x294 (= m_205 (_ bv6 16)))))\n(let (($x297 (=> $x294 (= m_204 (_ bv6 16)))))\n(let (($x292 (and (bvsge |CS1231_Sectional Teaching| (_ bv0 16)) (bvslt |CS1231_Sectional Teaching| (_ bv2 16)))))\n(let (($x293 (=> (or (= x_0 (_ bv0 16)) (= x_1 (_ bv0 16)) (= x_2 (_ bv0 16)) (= x_3 (_ bv0 16))) $x292)))\n(let (($x44 (bvslt x_3 (_ bv5 16))))\n(let (($x42 (bvsge x_0 (_ bv0 16))))\n(let (($x41 (bvslt x_2 x_3)))\n(let (($x40 (bvslt x_1 x_2)))\n(let (($x39 (bvslt x_0 x_1)))\n(let (($x18 (= x_3 (_ bv3 16))))\n(let (($x14 (= x_1 (_ bv1 16))))\n(let (($x12 (= x_0 (_ bv0 16))))\n(and $x12 $x14 $x16 $x18 $x39 $x40 $x41 $x42 $x44 $x293 $x297 $x299 $x301 $x303 $x305 $x307 $x310 $x312 $x314 $x316 $x318 $x320 $x326 $x330 $x332 $x334 $x336 $x339 $x341 $x343 $x345 $x348 $x350 $x352 $x354 $x356 $x357 $x358 $x359 $x363 $x365 $x367 $x369 $x372 $x374 $x376 $x378 $x381 $x383 $x385 $x387 $x391 $x393 $x395 $x397 $x399 $x400 $x401 $x402 $x405 $x406 $x407 $x408 $x412 $x414 $x416 $x418 $x422 $x424 $x426 $x428 $x432 $x434 $x436 $x438 $x441 $x442 $x443 $x444 $x447 $x448 $x449 $x450 $x453 $x454 $x455 $x456 $x459 $x460 $x461 $x462 $x465 $x466 $x467 $x468 $x471 $x472 $x473 $x474 $x477 $x478 $x479 $x480 $x489 $x492 $x494 $x496 $x498 $x500 $x502 $x504 $x506 $x511 $x514 $x516 $x519 $x521 $x524 $x526 $x529 $x531 $x534 $x536 $x539 $x541 $x550 $x554 $x557 $x560 $x563 $x566 $x569 $x572 $x575 $x578 $x581 $x584 $x589 $x593 $x595 $x598 $x600 $x603 $x605 $x608 $x610 $x613 $x615 $x618 $x620 $x623 $x625 $x628 $x630 $x633 $x635 $x638 $x640 $x643 $x645 $x648 $x650 $x653 $x655 $x658 $x660 $x663 $x665 $x670 $x674 $x676 $x678 $x680 $x682 $x684 $x686 $x688 $x691 $x693 $x695 $x697 $x699 $x701 $x703 $x705 $x715 $x719 $x721 $x724 $x726 $x729 $x731 $x734 $x736 $x739 $x741 $x744 $x746 $x749 $x751 $x753 $x754 $x757 $x759 $x762 $x764 $x767 $x769 $x771 $x772 $x775 $x776 $x779 $x781 $x784 $x786 $x789 $x791 $x794 $x796 $x799 $x801 $x804 $x806 $x809 $x811 $x814 $x816 $x819 $x820 $x822 $x823 $x826 $x827 $x831 $x833 $x836 $x837 $x841 $x842 $x846 $x848 $x851 $x853 $x856 $x857 $x861 $x863 $x867 $x869 $x873 $x875 $x879 $x881 $x885 $x887 $x891 $x893 $x896 $x897 $x900 $x901 $x903 $x904 $x907 $x908 $x912 $x913 $x916 $x917 $x920 $x921 $x925 $x927 $x931 $x933 $x936 $x937 $x941 $x942 $x945 $x946 $x949 $x951 $x954 $x955 $x959 $x960 $x963 $x964 $x968 $x970 $x973 $x974 $x977 $x978 $x982 $x983 $x987 $x989 $x992 $x993 $x997 $x999 $x1003 $x1005 $x1009 $x1011 $x1015 $x1017 $x1020 $x1021 $x1024 $x1025 $x1028 $x1029 $x1039 $x1042 $x1045 $x1048 $x1051 $x1054 $x1057 $x1060 $x1063 $x1066 $x1069 $x1072 $x1075 $x1080 $x1083 $x1085 $x1088 $x1090 $x1093 $x1095 $x1098 $x1100 $x1103 $x1105 $x1108 $x1110 $x1113 $x1115 $x1118 $x1120 $x1123 $x1125 $x1128 $x1130 $x1133 $x1135 $x1138 $x1140 $x1143 $x1145 $x1148 $x1150 $x1153 $x1155 $x1158 $x1160 $x1163 $x1165 $x1168 $x1170 $x1175 $x1178 $x1180 $x1182 $x1184 $x1186 $x1188 $x1190 $x1192 $x1195 $x1197 $x1199 $x1201 $x1203 $x1205 $x1207 $x1209)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))\n(check-sat)\n\n(exit)"


describe("Boolector", function() {
	it("request boolector from server", function() {
		var url = 'http://localhost:3001/static/boolector.js';
		request(url, function(error, response, body) {
        	expect(response.statusCode).to.equal(200);
    	});
	});
});

describe("Boolector query", function() {
	it("Boolector should be able to solve sample_query", function() {
		var result = boolectorUtils.solve(sample_query)[0];
		expect(result).to.equal('SAT');
	});

	it("Generate timetable from the model output", function() {
		var model = "sat \nm_105 0000000000101010 \nMA1101R_Lecture 0000000000000001 \nm_104 0000000000101010 \nm_225 0000000000101010 \nm_224 0000000000101010 \nm_33 0000000000101010 \nm_32 0000000000101010 \nm_153 0000000000101010 \nm_152 0000000000101010 \nm_89 0000000000001010 \nm_88 0000000000001010 \nm_209 0000000000001010 \nm_208 0000000000001010 \nm_17 0000000000101010 \nm_16 0000000000101010 \nm_137 0000000000101010 \nm_136 0000000000101010 \nx_3 0000000000000011 \nx_2 0000000000000010 \nx_1 0000000000000001 \nx_0 0000000000000000 \nm_41 0000000000110000 \nMA1101R_Tutorial 0000000000000001 \nm_161 0000000000110000 \nm_56 0000000000110000 \nm_176 0000000000110000 \nm_109 0000000000010000 \nm_229 0000000000010000 \nm_57 0000000000110000 \nm_177 0000000000110000 \nm_63 0000000000110010 \nm_183 0000000000110000 \nm_10 0000000000110000 \nm_130 0000000000110000 \nm_11 0000000000011000 \nm_131 0000000000110000 \nm_13 0000000000010110 \nm_133 0000000000010110 \nm_14 0000000000100000 \nm_134 0000000000100000 \nm_38 0000000000011000 \nm_158 0000000000110000 \nm_39 0000000000011000 \nm_159 0000000000110000 \nm_40 0000000000110000 \nm_160 0000000000110000 \nm_87 0000000000100000 \nm_207 0000000000100000 \nm_86 0000000000100000 \nm_206 0000000000100000 \nm_60 0000000000010010 \nm_180 0000000000010010 \nm_108 0000000000110000 \nm_228 0000000000010000 \nm_64 0000000000110000 \nm_184 0000000000110000 \nm_59 0000000000110010 \nm_179 0000000000110000 \nm_204 0000000000010110 \nMA1101R_Laboratory 0000000000000010 \nm_230 0000000000011100 \nm_202 0000000000010000 \nm_203 0000000000001000 \nm_157 0000000000101000 \nm_201 0000000000010000 \nm_155 0000000000101000 \nm_156 0000000000101000 \nm_154 0000000000101000 \nm_232 0000000000101001 \nm_233 0000000000101000 \nm_231 0000000000101001 \nm_107 0000000000100000 \nMA1102R_Lecture 0000000000000000 \nm_106 0000000000010000 \nm_227 0000000000001000 \nm_226 0000000000010000 \nm_35 0000000000001000 \nm_34 0000000000001000 \nm_15 0000000000100000 \nm_135 0000000000100000 \nMA1102R_Tutorial 0000000000000111 \nm_62 0000000000010010 \nm_182 0000000000000010 \nm_9 0000000000001000 \nm_129 0000000000001100 \nm_18 0000000000100110 \nm_138 0000000000100110 \nm_36 0000000000001000 \nm_37 0000000000001000 \nm_113 0000000000010010 \nm_112 0000000000010010 \nm_81 0000000000010000 \nMA1102R_Laboratory 0000000000000000 \nm_82 0000000000010000 \nm_58 0000000000010010 \nm_61 0000000000010010 \nm_12 0000000000010110 \nm_84 0000000000010110 \nm_83 0000000000011111 \nMA1100_Tutorial 0000000000000000 \nm_181 0000000000010010 \nm_110 0000000000011100 \nm_85 0000000000010110 \nMA1100_Lecture 0000000000000000 \nm_205 0000000000010110 \nm_132 0000000000010110 \nCS1231_Tutorial 0000000000001110 \nm_178 0000000000010010 \nm_111 0000000000010010 \n|CS1231_Sectional Teaching| 0000000000000000 \nGER1000_Tutorial 0000000000111111 \nm_8 0000000000001000 \nm_44 0000000000001000 \nm_43 0000000000001000 \nm_128 0000000000001000 \nm_164 0000000000001000 \nm_163 0000000000001000 \nm_200 0000000000001000 \nm_185 0000000000001000 \nm_80 0000000000001000"
		var moduleMapping = {"MA1101R":{"Laboratory":["B10","B12","B11","B01","B03","B02","B05","B04","B07","B06","B09","B08"],"Tutorial":["T11","T14","T17","T12","T15","T16","T07","T06","T05","T04","T03","T02","T01","T13","T10","T18","T09","T08"],"Lecture":["SL1","SL2"]},"GER1000":{"Tutorial":["S03","E11","E10","E13","E12","E15","E14","S05","S06","S04","U11","U10","U13","S07","U04","A15","A14","E08","U05","A11","A10","A13","A12","U02","U14","D07","D06","D05","D04","D03","D02","D01","E09","E06","E07","E04","E05","E02","E03","D08","U08","U09","U06","C01","C02","C03","C04","U03","U07","U01","S08","S09","A08","A09","U12","A02","A03","S02","A01","A06","A07","A04","A05","E01","S01"]},"MA1102R":{"Laboratory":["B10","B11","B01","B03","B02","B05","B04","B07","B06","B09","B08"],"Tutorial":["T11","T14","T12","T15","T07","T06","T05","T04","T03","T02","T01","T13","T10","T09","T08"],"Lecture":["SL1","SL2"]},"CS1231":{"Sectional Teaching":["1","2"],"Tutorial":["11","10","13","12","15","14","17","16","19","18","1","3","2","5","4","7","6","9","20","8"]},"MA1100":{"Lecture":["SL1"],"Tutorial":["T06","T05","T04","T03","T02","T01"]}}
		var compMods = ['GER1000', 'CS1231', 'MA1100', 'MA1102R'];
		var optMods = ['MA1101R'];

		var timetable = boolectorUtils.slotsFromModel(model, compMods, optMods, 4, moduleMapping);
		var expectedTimetable = ["MA1102R_Lecture_SL1", "MA1102R_Tutorial_T04", "MA1102R_Laboratory_B10", "MA1100_Tutorial_T06", "MA1100_Lecture_SL1", "CS1231_Tutorial_4", "CS1231_Sectional Teaching_1", "GER1000_Tutorial_E01"];

		expect(timetable).to.deep.equal(expectedTimetable)
	})
});
