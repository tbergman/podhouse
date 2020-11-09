exports.id = "server";
exports.modules = {

/***/ "./src/modules/User/mutations/UserUnsubscribeToPodcast.ts":
/*!****************************************************************!*\
  !*** ./src/modules/User/mutations/UserUnsubscribeToPodcast.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"mutationWithClientMutationId\"])({\n  name: \"UserUnsubscribeToPodcast\",\n  inputFields: {\n    podcastId: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    }\n  },\n  mutateAndGetPayload: function () {\n    var _ref = _asyncToGenerator(function* ({\n      podcastId\n    }, {\n      user\n    }) {\n      if (!user) {\n        return {\n          error: \"User not authenticated\"\n        };\n      }\n\n      const subscribedToPodcast = user.subscriptions.includes(podcastId);\n\n      if (subscribedToPodcast === true) {\n        const podcastIdIndex = user.subscriptions.indexOf(podcastId);\n        const subscriptions = user.subscriptions.filter((_, index) => index !== podcastIdIndex);\n        user.subscriptions = subscriptions;\n        yield user.save();\n        return {\n          message: null,\n          error: \"Unsubscribed successfully\"\n        };\n      } else {\n        return {\n          message: null,\n          error: \"Already unsubscribed to podcast\"\n        };\n      }\n    });\n\n    return function mutateAndGetPayload(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(),\n  outputFields: {\n    message: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        message\n      }) => message\n    },\n    error: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        error\n      }) => error\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyVW5zdWJzY3JpYmVUb1BvZGNhc3QudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyVW5zdWJzY3JpYmVUb1BvZGNhc3QudHM/ZjI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgeyBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTm9uTnVsbCB9IGZyb20gXCJncmFwaHFsXCI7XG5pbXBvcnQgeyBtdXRhdGlvbldpdGhDbGllbnRNdXRhdGlvbklkIH0gZnJvbSBcImdyYXBocWwtcmVsYXlcIjtcbmV4cG9ydCBkZWZhdWx0IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICBuYW1lOiBcIlVzZXJVbnN1YnNjcmliZVRvUG9kY2FzdFwiLFxuICBpbnB1dEZpZWxkczoge1xuICAgIHBvZGNhc3RJZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpXG4gICAgfVxuICB9LFxuICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHtcbiAgICAgIHBvZGNhc3RJZFxuICAgIH0sIHtcbiAgICAgIHVzZXJcbiAgICB9KSB7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkXCJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3Vic2NyaWJlZFRvUG9kY2FzdCA9IHVzZXIuc3Vic2NyaXB0aW9ucy5pbmNsdWRlcyhwb2RjYXN0SWQpO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlZFRvUG9kY2FzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBwb2RjYXN0SWRJbmRleCA9IHVzZXIuc3Vic2NyaXB0aW9ucy5pbmRleE9mKHBvZGNhc3RJZCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSB1c2VyLnN1YnNjcmlwdGlvbnMuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggIT09IHBvZGNhc3RJZEluZGV4KTtcbiAgICAgICAgdXNlci5zdWJzY3JpcHRpb25zID0gc3Vic2NyaXB0aW9ucztcbiAgICAgICAgeWllbGQgdXNlci5zYXZlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICBlcnJvcjogXCJVbnN1YnNjcmliZWQgc3VjY2Vzc2Z1bGx5XCJcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICBlcnJvcjogXCJBbHJlYWR5IHVuc3Vic2NyaWJlZCB0byBwb2RjYXN0XCJcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBtdXRhdGVBbmRHZXRQYXlsb2FkKF94LCBfeDIpIHtcbiAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpLFxuICBvdXRwdXRGaWVsZHM6IHtcbiAgICBtZXNzYWdlOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKHtcbiAgICAgICAgbWVzc2FnZVxuICAgICAgfSkgPT4gbWVzc2FnZVxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoe1xuICAgICAgICBlcnJvclxuICAgICAgfSkgPT4gZXJyb3JcbiAgICB9XG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/UserUnsubscribeToPodcast.ts\n");

/***/ })

};