exports.id = "server";
exports.modules = {

/***/ "./src/modules/Node/TypeRegister.ts":
/*!******************************************!*\
  !*** ./src/modules/Node/TypeRegister.ts ***!
  \******************************************/
/*! exports provided: registerTypeLoader, nodeInterface, nodeField, nodesField */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from /Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/packages/server/src/modules/Node/TypeRegister.ts: Unexpected token, expected \\\";\\\" (41:40)\\n\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m    (globalId\\u001b[33m,\\u001b[39m context\\u001b[33m:\\u001b[39m \\u001b[33mGraphQLContext\\u001b[39m) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m      \\u001b[36mconst\\u001b[39m { id\\u001b[33m,\\u001b[39m type } \\u001b[33m=\\u001b[39m fromGlobalId(globalId)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 41 | \\u001b[39m      \\u001b[36mif\\u001b[39m (type \\u001b[33m===\\u001b[39m \\u001b[32m\\\"User\\\"\\u001b[39m) \\u001b[36mreturn\\u001b[39m await \\u001b[33mUserLoader\\u001b[39m\\u001b[33m.\\u001b[39mload(context\\u001b[33m,\\u001b[39m id)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 | \\u001b[39m      \\u001b[36mif\\u001b[39m (type \\u001b[33m===\\u001b[39m \\u001b[32m\\\"Podcast\\\"\\u001b[39m) \\u001b[36mreturn\\u001b[39m await \\u001b[33mPodcastLoader\\u001b[39m\\u001b[33m.\\u001b[39mload(context\\u001b[33m,\\u001b[39m id)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 43 | \\u001b[39m      \\u001b[36mif\\u001b[39m (type \\u001b[33m===\\u001b[39m \\u001b[32m\\\"Episode\\\"\\u001b[39m) \\u001b[36mreturn\\u001b[39m await \\u001b[33mEpisodeLoader\\u001b[39m\\u001b[33m.\\u001b[39mload(context\\u001b[33m,\\u001b[39m id)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 44 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m \\u001b[36mnull\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:799:17)\\n    at Object.raiseWithData (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:792:17)\\n    at Object.raise (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:786:17)\\n    at Object.unexpected (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9089:16)\\n    at Object.semicolon (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9071:40)\\n    at Object.parseReturnStatement (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11947:12)\\n    at Object.parseStatementContent (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11625:21)\\n    at Object.parseStatementContent (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:6786:18)\\n    at Object.parseStatement (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11577:17)\\n    at Object.parseIfStatement (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11931:28)\\n    at Object.parseStatementContent (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11622:21)\\n    at Object.parseStatementContent (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:6786:18)\\n    at Object.parseStatement (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11577:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:12159:25)\\n    at Object.parseBlockBody (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:12145:10)\\n    at Object.parseBlock (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:12129:10)\\n    at Object.parseFunctionBody (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11108:24)\\n    at Object.parseArrowExpression (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11077:10)\\n    at Object.parseParenAndDistinguishExpression (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:10635:12)\\n    at Object.parseExprAtom (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:10311:21)\\n    at Object.parseExprSubscripts (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9976:23)\\n    at Object.parseUpdate (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9956:21)\\n    at Object.parseMaybeUnary (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9945:17)\\n    at Object.parseMaybeUnary (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:7106:20)\\n    at Object.parseExprOps (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9815:23)\\n    at Object.parseMaybeConditional (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9789:23)\\n    at Object.parseMaybeAssign (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9752:21)\\n    at Object.parseMaybeAssign (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:7051:20)\\n    at /Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:9718:39\\n    at Object.allowInAnd (/Users/user/Desktop/Leonardo/Projects/podhouse/podhouse/node_modules/@babel/parser/lib/index.js:11448:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Ob2RlL1R5cGVSZWdpc3Rlci50cy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Node/TypeRegister.ts\n");

/***/ })

};