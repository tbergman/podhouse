exports.id = "server";
exports.modules = {

/***/ "./src/modules/User/UserType.ts":
/*!**************************************!*\
  !*** ./src/modules/User/UserType.ts ***!
  \**************************************/
/*! exports provided: default, UserConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserConnection\", function() { return UserConnection; });\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserLoader */ \"./src/modules/User/UserLoader.ts\");\n/* harmony import */ var _Podcast_PodcastType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Podcast/PodcastType */ \"./src/modules/Podcast/PodcastType.ts\");\n/* harmony import */ var _Node_TypeRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Node/TypeRegister */ \"./src/modules/Node/TypeRegister.ts\");\n/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ */ \"./src/common/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst UserType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"User\",\n  description: \"UserType\",\n  fields: () => _objectSpread(_objectSpread({\n    id: Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"globalIdField\"])(\"User\")\n  }, _common___WEBPACK_IMPORTED_MODULE_5__[\"mongooseIDResolver\"]), {}, {\n    email: {\n      type: Object(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"])(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]),\n      resolve: ({\n        email\n      }) => email\n    },\n    subscriptions: {\n      type: Object(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"])(_Podcast_PodcastType__WEBPACK_IMPORTED_MODULE_3__[\"PodcastConnection\"].connectionType),\n      args: _objectSpread({}, _common___WEBPACK_IMPORTED_MODULE_5__[\"connectionArgs\"]),\n      resolve: function () {\n        var _ref = _asyncToGenerator(function* ({\n          subscriptions\n        }, args, {\n          dataloaders\n        }) {\n          const podcasts = yield dataloaders.PodcastLoader.loadMany(subscriptions.map(id => id.toString()));\n          return Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"connectionFromArray\"])(podcasts, args);\n        });\n\n        return function resolve(_x, _x2, _x3) {\n          return _ref.apply(this, arguments);\n        };\n      }()\n    },\n    createdAt: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: obj => obj.createdAt ? obj.createdAt.toISOString() : null\n    },\n    updatedAt: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: obj => obj.updatedAt ? obj.updatedAt.toISOString() : null\n    }\n  }),\n  interfaces: () => [_Node_TypeRegister__WEBPACK_IMPORTED_MODULE_4__[\"nodeInterface\"]]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserType);\nObject(_Node_TypeRegister__WEBPACK_IMPORTED_MODULE_4__[\"registerTypeLoader\"])(UserType, _UserLoader__WEBPACK_IMPORTED_MODULE_2__[\"load\"]);\nconst UserConnection = Object(_common___WEBPACK_IMPORTED_MODULE_5__[\"connectionDefinitions\"])({\n  name: \"User\",\n  nodeType: UserType\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJUeXBlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvVXNlci9Vc2VyVHlwZS50cz8xODZiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTFN0cmluZywgR3JhcGhRTE5vbk51bGwgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2xvYmFsSWRGaWVsZCwgY29ubmVjdGlvbkZyb21BcnJheSB9IGZyb20gXCJncmFwaHFsLXJlbGF5XCI7XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSBcIi4vVXNlckxvYWRlclwiO1xuaW1wb3J0IHsgUG9kY2FzdENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vUG9kY2FzdC9Qb2RjYXN0VHlwZVwiO1xuaW1wb3J0IHsgbm9kZUludGVyZmFjZSwgcmVnaXN0ZXJUeXBlTG9hZGVyIH0gZnJvbSBcIi4uL05vZGUvVHlwZVJlZ2lzdGVyXCI7XG5pbXBvcnQgeyBjb25uZWN0aW9uQXJncywgY29ubmVjdGlvbkRlZmluaXRpb25zLCBtb25nb29zZUlEUmVzb2x2ZXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL1wiO1xuY29uc3QgVXNlclR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiBcIlVzZXJcIixcbiAgZGVzY3JpcHRpb246IFwiVXNlclR5cGVcIixcbiAgZmllbGRzOiAoKSA9PiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe1xuICAgIGlkOiBnbG9iYWxJZEZpZWxkKFwiVXNlclwiKVxuICB9LCBtb25nb29zZUlEUmVzb2x2ZXIpLCB7fSwge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICAgIHJlc29sdmU6ICh7XG4gICAgICAgIGVtYWlsXG4gICAgICB9KSA9PiBlbWFpbFxuICAgIH0sXG4gICAgc3Vic2NyaXB0aW9uczoge1xuICAgICAgdHlwZTogR3JhcGhRTE5vbk51bGwoUG9kY2FzdENvbm5lY3Rpb24uY29ubmVjdGlvblR5cGUpLFxuICAgICAgYXJnczogX29iamVjdFNwcmVhZCh7fSwgY29ubmVjdGlvbkFyZ3MpLFxuICAgICAgcmVzb2x2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoe1xuICAgICAgICAgIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgfSwgYXJncywge1xuICAgICAgICAgIGRhdGFsb2FkZXJzXG4gICAgICAgIH0pIHtcbiAgICAgICAgICBjb25zdCBwb2RjYXN0cyA9IHlpZWxkIGRhdGFsb2FkZXJzLlBvZGNhc3RMb2FkZXIubG9hZE1hbnkoc3Vic2NyaXB0aW9ucy5tYXAoaWQgPT4gaWQudG9TdHJpbmcoKSkpO1xuICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uRnJvbUFycmF5KHBvZGNhc3RzLCBhcmdzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlc29sdmUoX3gsIF94MiwgX3gzKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0oKVxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogb2JqID0+IG9iai5jcmVhdGVkQXQgPyBvYmouY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCkgOiBudWxsXG4gICAgfSxcbiAgICB1cGRhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiBvYmogPT4gb2JqLnVwZGF0ZWRBdCA/IG9iai51cGRhdGVkQXQudG9JU09TdHJpbmcoKSA6IG51bGxcbiAgICB9XG4gIH0pLFxuICBpbnRlcmZhY2VzOiAoKSA9PiBbbm9kZUludGVyZmFjZV1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgVXNlclR5cGU7XG5yZWdpc3RlclR5cGVMb2FkZXIoVXNlclR5cGUsIGxvYWQpO1xuZXhwb3J0IGNvbnN0IFVzZXJDb25uZWN0aW9uID0gY29ubmVjdGlvbkRlZmluaXRpb25zKHtcbiAgbmFtZTogXCJVc2VyXCIsXG4gIG5vZGVUeXBlOiBVc2VyVHlwZVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/User/UserType.ts\n");

/***/ })

};