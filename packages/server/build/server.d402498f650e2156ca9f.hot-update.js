exports.id = "server";
exports.modules = {

/***/ "./src/modules/User/UserModel.ts":
/*!***************************************!*\
  !*** ./src/modules/User/UserModel.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  email: {\n    type: String,\n    trim: true,\n    required: true,\n    lowercase: true\n  },\n  password: {\n    type: String,\n    hidden: true,\n    required: true,\n    minlength: 3\n  },\n  subscriptions: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"].Types.ObjectId,\n    ref: \"Podcast\",\n    description: \"Podcast that user is subscribed\"\n  }]\n}, {\n  timestamps: {\n    createdAt: \"createdAt\",\n    updatedAt: \"updatedAt\"\n  },\n  collection: \"User\"\n});\nUserSchema.pre(\"save\", function (next) {\n  if (!this.isModified(\"password\")) return next();\n  if (!this.password) return next();\n  return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, 8).then(hash => {\n    this.password = hash;\n    next();\n  });\n});\nUserSchema.methods = {\n  authenticate(plainTextPassword) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compareSync(plainTextPassword, this.password);\n  },\n\n  encryptPassword(password) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(password, 8);\n  }\n\n};\nconst UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJNb2RlbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1VzZXIvVXNlck1vZGVsLnRzPzdkMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHRyaW06IHRydWUsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbG93ZXJjYXNlOiB0cnVlXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDNcbiAgfSxcbiAgc3Vic2NyaXB0aW9uczogW3tcbiAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiBcIlBvZGNhc3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQb2RjYXN0IHRoYXQgdXNlciBpcyBzdWJzY3JpYmVkXCJcbiAgfV1cbn0sIHtcbiAgdGltZXN0YW1wczoge1xuICAgIGNyZWF0ZWRBdDogXCJjcmVhdGVkQXRcIixcbiAgICB1cGRhdGVkQXQ6IFwidXBkYXRlZEF0XCJcbiAgfSxcbiAgY29sbGVjdGlvbjogXCJVc2VyXCJcbn0pO1xuVXNlclNjaGVtYS5wcmUoXCJzYXZlXCIsIGZ1bmN0aW9uIChuZXh0KSB7XG4gIGlmICghdGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpIHJldHVybiBuZXh0KCk7XG4gIGlmICghdGhpcy5wYXNzd29yZCkgcmV0dXJuIG5leHQoKTtcbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDgpLnRoZW4oaGFzaCA9PiB7XG4gICAgdGhpcy5wYXNzd29yZCA9IGhhc2g7XG4gICAgbmV4dCgpO1xuICB9KTtcbn0pO1xuVXNlclNjaGVtYS5tZXRob2RzID0ge1xuICBhdXRoZW50aWNhdGUocGxhaW5UZXh0UGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYmNyeXB0LmNvbXBhcmVTeW5jKHBsYWluVGV4dFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbiAgfSxcblxuICBlbmNyeXB0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCA4KTtcbiAgfVxuXG59O1xuY29uc3QgVXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/User/UserModel.ts\n");

/***/ })

};