exports.id = "server";
exports.modules = {

/***/ "./src/modules/User/mutations/UserUnsubscribeToPodcast.ts":
/*!****************************************************************!*\
  !*** ./src/modules/User/mutations/UserUnsubscribeToPodcast.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"mutationWithClientMutationId\"])({\n  name: \"UserUnsubscribeToPodcast\",\n  inputFields: {\n    podcastId: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    }\n  },\n  mutateAndGetPayload: function () {\n    var _ref = _asyncToGenerator(function* ({\n      podcastId\n    }, {\n      user\n    }) {\n      if (!user) {\n        return {\n          error: \"User not authenticated\"\n        };\n      }\n\n      const subscribedToPodcast = user.subscriptions.includes(podcastId);\n\n      if (subscribedToPodcast === true) {\n        user.subscriptions = user.subscriptions.filter(id => id !== podcastId);\n        return {\n          message: null,\n          error: \"Unsubscribed successfully\"\n        };\n      } else {\n        return {\n          message: null,\n          error: \"Already unsubscribed to podcast\"\n        };\n      }\n    });\n\n    return function mutateAndGetPayload(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(),\n  outputFields: {\n    message: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        message\n      }) => message\n    },\n    error: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        error\n      }) => error\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyVW5zdWJzY3JpYmVUb1BvZGNhc3QudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyVW5zdWJzY3JpYmVUb1BvZGNhc3QudHM/ZjI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgeyBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTm9uTnVsbCB9IGZyb20gXCJncmFwaHFsXCI7XG5pbXBvcnQgeyBtdXRhdGlvbldpdGhDbGllbnRNdXRhdGlvbklkIH0gZnJvbSBcImdyYXBocWwtcmVsYXlcIjtcbmV4cG9ydCBkZWZhdWx0IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICBuYW1lOiBcIlVzZXJVbnN1YnNjcmliZVRvUG9kY2FzdFwiLFxuICBpbnB1dEZpZWxkczoge1xuICAgIHBvZGNhc3RJZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpXG4gICAgfVxuICB9LFxuICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHtcbiAgICAgIHBvZGNhc3RJZFxuICAgIH0sIHtcbiAgICAgIHVzZXJcbiAgICB9KSB7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkXCJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3Vic2NyaWJlZFRvUG9kY2FzdCA9IHVzZXIuc3Vic2NyaXB0aW9ucy5pbmNsdWRlcyhwb2RjYXN0SWQpO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlZFRvUG9kY2FzdCA9PT0gdHJ1ZSkge1xuICAgICAgICB1c2VyLnN1YnNjcmlwdGlvbnMgPSB1c2VyLnN1YnNjcmlwdGlvbnMuZmlsdGVyKGlkID0+IGlkICE9PSBwb2RjYXN0SWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgZXJyb3I6IFwiVW5zdWJzY3JpYmVkIHN1Y2Nlc3NmdWxseVwiXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgZXJyb3I6IFwiQWxyZWFkeSB1bnN1YnNjcmliZWQgdG8gcG9kY2FzdFwiXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbXV0YXRlQW5kR2V0UGF5bG9hZChfeCwgX3gyKSB7XG4gICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0oKSxcbiAgb3V0cHV0RmllbGRzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6ICh7XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH0pID0+IG1lc3NhZ2VcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKHtcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pID0+IGVycm9yXG4gICAgfVxuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/UserUnsubscribeToPodcast.ts\n");

/***/ }),

/***/ "./src/modules/User/mutations/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/User/mutations/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserSignInWithEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSignInWithEmail */ \"./src/modules/User/mutations/UserSignInWithEmail.ts\");\n/* harmony import */ var _UserSignUpWithEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSignUpWithEmail */ \"./src/modules/User/mutations/UserSignUpWithEmail.ts\");\n/* harmony import */ var _UserChangePassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserChangePassword */ \"./src/modules/User/mutations/UserChangePassword.ts\");\n/* harmony import */ var _UserSubscribeToPodcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserSubscribeToPodcast */ \"./src/modules/User/mutations/UserSubscribeToPodcast.ts\");\n/* harmony import */ var _UserUnsubscribeToPodcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserUnsubscribeToPodcast */ \"./src/modules/User/mutations/UserUnsubscribeToPodcast.ts\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  UserSignInWithEmail: _UserSignInWithEmail__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  UserSignUpWithEmail: _UserSignUpWithEmail__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  UserChangePassword: _UserChangePassword__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  UserSubscribeToPodcast: _UserSubscribeToPodcast__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  UserUnsubscribeToPodcast: _UserUnsubscribeToPodcast__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1VzZXIvbXV0YXRpb25zL2luZGV4LnRzP2M5MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJTaWduSW5XaXRoRW1haWwgZnJvbSBcIi4vVXNlclNpZ25JbldpdGhFbWFpbFwiO1xuaW1wb3J0IFVzZXJTaWduVXBXaXRoRW1haWwgZnJvbSBcIi4vVXNlclNpZ25VcFdpdGhFbWFpbFwiO1xuaW1wb3J0IFVzZXJDaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi9Vc2VyQ2hhbmdlUGFzc3dvcmRcIjtcbmltcG9ydCBVc2VyU3Vic2NyaWJlVG9Qb2RjYXN0IGZyb20gXCIuL1VzZXJTdWJzY3JpYmVUb1BvZGNhc3RcIjtcbmltcG9ydCBVc2VyVW5zdWJzY3JpYmVUb1BvZGNhc3QgZnJvbSBcIi4vVXNlclVuc3Vic2NyaWJlVG9Qb2RjYXN0XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIFVzZXJTaWduSW5XaXRoRW1haWwsXG4gIFVzZXJTaWduVXBXaXRoRW1haWwsXG4gIFVzZXJDaGFuZ2VQYXNzd29yZCxcbiAgVXNlclN1YnNjcmliZVRvUG9kY2FzdCxcbiAgVXNlclVuc3Vic2NyaWJlVG9Qb2RjYXN0XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/index.ts\n");

/***/ })

};