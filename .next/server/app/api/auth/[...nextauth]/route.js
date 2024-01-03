"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_chathurangacpm_Documents_Chathuranga_Others_nextjs_auth_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/chathurangacpm/Documents/Chathuranga/Others/nextjs-auth/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_chathurangacpm_Documents_Chathuranga_Others_nextjs_auth_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmNoYXRodXJhbmdhY3BtJTJGRG9jdW1lbnRzJTJGQ2hhdGh1cmFuZ2ElMkZPdGhlcnMlMkZuZXh0anMtYXV0aCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZjaGF0aHVyYW5nYWNwbSUyRkRvY3VtZW50cyUyRkNoYXRodXJhbmdhJTJGT3RoZXJzJTJGbmV4dGpzLWF1dGgmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDa0Q7QUFDL0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC8/YmZhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvY2hhdGh1cmFuZ2FjcG0vRG9jdW1lbnRzL0NoYXRodXJhbmdhL090aGVycy9uZXh0anMtYXV0aC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvY2hhdGh1cmFuZ2FjcG0vRG9jdW1lbnRzL0NoYXRodXJhbmdhL090aGVycy9uZXh0anMtYXV0aC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _models_useModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/useModels */ \"(rsc)/./models/useModels.js\");\n/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/connect */ \"(rsc)/./utils/connect.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function login(credentials) {\n    try {\n        (0,_utils_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const user = await _models_useModels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            email: credentials.email\n        });\n        if (!user) throw new Error(\"Wrong Credentials\");\n        const isCorrectUser = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.password);\n        if (!isCorrectUser) throw new Error(\"Password is wrong please check!\");\n        return user;\n    } catch (error) {\n        console.log(\"server error: \", error);\n    }\n}\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_2___default()({\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            credentials: {\n                email: {},\n                password: {}\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                try {\n                    const user = await login(credentials);\n                    return user;\n                } catch (error) {\n                    throw new Error(\"Failed to login\");\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.userName = user.userName;\n                token.email = user.email;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session) {\n                session.user.userName = token.userName;\n                session.user.email = token.email;\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUNQO0FBQ2lDO0FBQ3RDO0FBRTVCLGVBQWVLLE1BQU1DLFdBQVc7SUFDNUIsSUFBSTtRQUNBTCwwREFBU0E7UUFDVCxNQUFNTSxPQUFPLE1BQU1QLHlEQUFJQSxDQUFDUSxPQUFPLENBQUM7WUFBRUMsT0FBT0gsWUFBWUcsS0FBSztRQUFDO1FBQzNELElBQUksQ0FBQ0YsTUFBTSxNQUFNLElBQUlHLE1BQU07UUFDM0IsTUFBTUMsZ0JBQWdCLE1BQU1QLHFEQUFjLENBQUNFLFlBQVlPLFFBQVEsRUFBRU4sS0FBS00sUUFBUTtRQUU5RSxJQUFJLENBQUNGLGVBQWUsTUFBTSxJQUFJRCxNQUFNO1FBRXBDLE9BQU9IO0lBQ1gsRUFBRSxPQUFPTyxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO0lBQ2xDO0FBQ0o7QUFFQSxNQUFNRyxVQUFVZixnREFBUUEsQ0FBQztJQUNyQmdCLE9BQU87UUFDSEMsUUFBUTtJQUNaO0lBQ0FDLFNBQVM7UUFDTEMsVUFBVTtJQUNkO0lBQ0FDLFdBQVc7UUFDUG5CLDJFQUFtQkEsQ0FBQztZQUNoQixtRUFBbUU7WUFDbkVvQixNQUFNO1lBQ05qQixhQUFhO2dCQUNURyxPQUFPLENBQUM7Z0JBQ1JJLFVBQVUsQ0FBQztZQUNmO1lBQ0EsTUFBTVcsV0FBVWxCLFdBQVcsRUFBRW1CLEdBQUc7Z0JBQzVCLG1FQUFtRTtnQkFDbkUsSUFBSTtvQkFDQSxNQUFNbEIsT0FBTyxNQUFNRixNQUFNQztvQkFDekIsT0FBT0M7Z0JBQ1gsRUFBRSxPQUFPTyxPQUFPO29CQUNaLE1BQU0sSUFBSUosTUFBTTtnQkFDcEI7WUFDSjtRQUNKO0tBQ0g7SUFDRGdCLFdBQVc7UUFDUCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRXJCLElBQUksRUFBRTtZQUNyQixJQUFJQSxNQUFNO2dCQUNOcUIsTUFBTUMsUUFBUSxHQUFHdEIsS0FBS3NCLFFBQVE7Z0JBQzlCRCxNQUFNbkIsS0FBSyxHQUFHRixLQUFLRSxLQUFLO2dCQUN4Qm1CLE1BQU1FLEVBQUUsR0FBR3ZCLEtBQUt1QixFQUFFO1lBQ3RCO1lBQ0EsT0FBT0Y7UUFDWDtRQUVBLE1BQU1SLFNBQVEsRUFBRUEsT0FBTyxFQUFFUSxLQUFLLEVBQUU7WUFDNUIsSUFBSVIsU0FBUztnQkFDVEEsUUFBUWIsSUFBSSxDQUFDc0IsUUFBUSxHQUFHRCxNQUFNQyxRQUFRO2dCQUN0Q1QsUUFBUWIsSUFBSSxDQUFDRSxLQUFLLEdBQUdtQixNQUFNbkIsS0FBSztnQkFDaENXLFFBQVFiLElBQUksQ0FBQ3VCLEVBQUUsR0FBR0YsTUFBTUUsRUFBRTtZQUM5QjtZQUNBLE9BQU9WO1FBQ1g7SUFDSjtBQUNKO0FBRTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWF1dGgvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz9kYTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL3VzZU1vZGVscyc7XG5pbXBvcnQgY29ubmVjdERCIGZyb20gJ0AvdXRpbHMvY29ubmVjdCc7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKGNyZWRlbnRpYWxzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29ubmVjdERCKCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XG4gICAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgQ3JlZGVudGlhbHNcIik7XG4gICAgICAgIGNvbnN0IGlzQ29ycmVjdFVzZXIgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKCFpc0NvcnJlY3RVc2VyKSB0aHJvdyBuZXcgRXJyb3IoXCJQYXNzd29yZCBpcyB3cm9uZyBwbGVhc2UgY2hlY2shXCIpO1xuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgZXJyb3I6ICcsIGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XG4gICAgcGFnZXM6IHtcbiAgICAgICAgc2lnbkluOiAnL2xvZ2luJ1xuICAgIH0sXG4gICAgc2Vzc2lvbjoge1xuICAgICAgICBzdHJhdGVneTogJ2p3dCdcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiBcIlNpZ24gaW4gd2l0aC4uLlwiKVxuICAgICAgICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDoge30sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKGNyZWRlbnRpYWxzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGxvZ2luXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICBdLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRva2VuLnVzZXJOYW1lID0gdXNlci51c2VyTmFtZTtcbiAgICAgICAgICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXIuZW1haWw7XG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci51c2VyTmFtZSA9IHRva2VuLnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5lbWFpbCA9IHRva2VuLmVtYWlsO1xuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiVXNlciIsImNvbm5lY3REQiIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiRXJyb3IiLCJpc0NvcnJlY3RVc2VyIiwiY29tcGFyZSIsInBhc3N3b3JkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlciIsInBhZ2VzIiwic2lnbkluIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwibmFtZSIsImF1dGhvcml6ZSIsInJlcSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlck5hbWUiLCJpZCIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/useModels.js":
/*!*****************************!*\
  !*** ./models/useModels.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet User;\ntry {\n    User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\");\n} catch (error) {\n    if (error.name === \"OverwriteModelError\") {\n        User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\");\n    } else {\n        const UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n            userName: {\n                type: String,\n                required: [\n                    true,\n                    \"Must provide a username\"\n                ],\n                unique: [\n                    true,\n                    \"Must be unique\"\n                ]\n            },\n            email: {\n                type: String,\n                required: [\n                    true,\n                    \"Must provide an email\"\n                ],\n                unique: [\n                    true,\n                    \"Must be unique\"\n                ]\n            },\n            password: {\n                type: String,\n                required: [\n                    true,\n                    \"Must provide a password\"\n                ]\n            },\n            roles: {\n                type: [\n                    String\n                ],\n                default: [\n                    \"user\"\n                ]\n            },\n            isEmailVerified: {\n                type: Boolean,\n                default: false\n            },\n            isDeleted: {\n                type: Boolean,\n                default: false\n            },\n            isActive: {\n                type: Boolean,\n                default: true\n            },\n            createdAt: {\n                type: Date,\n                default: Date.now\n            },\n            updatedAt: {\n                type: Date,\n                default: Date.now\n            }\n        });\n        // Middleware to update 'updatedAt' field before saving\n        UserSchema.pre(\"save\", function(next) {\n            this.updatedAt = new Date();\n            next();\n        });\n        User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlTW9kZWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQztBQUVKLElBQUk7SUFDQUEsT0FBT0QscURBQWMsQ0FBQztBQUMxQixFQUFFLE9BQU9HLE9BQU87SUFDWixJQUFJQSxNQUFNQyxJQUFJLEtBQUssdUJBQXVCO1FBQ3RDSCxPQUFPRCxxREFBYyxDQUFDO0lBQzFCLE9BQU87UUFDSCxNQUFNSyxhQUFhLElBQUlMLHdEQUFlLENBQUM7WUFDbkNPLFVBQVU7Z0JBQ05DLE1BQU1DO2dCQUNOQyxVQUFVO29CQUFDO29CQUFNO2lCQUEwQjtnQkFDM0NDLFFBQVE7b0JBQUM7b0JBQU07aUJBQWlCO1lBQ3BDO1lBQ0FDLE9BQU87Z0JBQ0hKLE1BQU1DO2dCQUNOQyxVQUFVO29CQUFDO29CQUFNO2lCQUF3QjtnQkFDekNDLFFBQVE7b0JBQUM7b0JBQU07aUJBQWlCO1lBQ3BDO1lBQ0FFLFVBQVU7Z0JBQ05MLE1BQU1DO2dCQUNOQyxVQUFVO29CQUFDO29CQUFNO2lCQUEwQjtZQUMvQztZQUNBSSxPQUFPO2dCQUNITixNQUFNO29CQUFDQztpQkFBTztnQkFDZE0sU0FBUztvQkFBQztpQkFBTztZQUNyQjtZQUNBQyxpQkFBaUI7Z0JBQ2JSLE1BQU1TO2dCQUNORixTQUFTO1lBQ2I7WUFDQUcsV0FBVztnQkFDUFYsTUFBTVM7Z0JBQ05GLFNBQVM7WUFDYjtZQUNBSSxVQUFVO2dCQUNOWCxNQUFNUztnQkFDTkYsU0FBUztZQUNiO1lBQ0FLLFdBQVc7Z0JBQ1BaLE1BQU1hO2dCQUNOTixTQUFTTSxLQUFLQyxHQUFHO1lBQ3JCO1lBQ0FDLFdBQVc7Z0JBQ1BmLE1BQU1hO2dCQUNOTixTQUFTTSxLQUFLQyxHQUFHO1lBQ3JCO1FBQ0o7UUFFQSx1REFBdUQ7UUFDdkRqQixXQUFXbUIsR0FBRyxDQUFDLFFBQVEsU0FBVUMsSUFBSTtZQUNqQyxJQUFJLENBQUNGLFNBQVMsR0FBRyxJQUFJRjtZQUNyQkk7UUFDSjtRQUVBeEIsT0FBT0QscURBQWMsQ0FBQyxRQUFRSztJQUNsQztBQUNKO0FBRUEsaUVBQWVKLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC8uL21vZGVscy91c2VNb2RlbHMuanM/NjE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmxldCBVc2VyO1xuXG50cnkge1xuICAgIFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicpO1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ092ZXJ3cml0ZU1vZGVsRXJyb3InKSB7XG4gICAgICAgIFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICAgICAgICAgIHVzZXJOYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJNdXN0IHByb3ZpZGUgYSB1c2VybmFtZVwiXSxcbiAgICAgICAgICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIk11c3QgYmUgdW5pcXVlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJNdXN0IHByb3ZpZGUgYW4gZW1haWxcIl0sXG4gICAgICAgICAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJNdXN0IGJlIHVuaXF1ZVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiTXVzdCBwcm92aWRlIGEgcGFzc3dvcmRcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9sZXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbU3RyaW5nXSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBbJ3VzZXInXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0VtYWlsVmVyaWZpZWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRGVsZXRlZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNBY3RpdmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWlkZGxld2FyZSB0byB1cGRhdGUgJ3VwZGF0ZWRBdCcgZmllbGQgYmVmb3JlIHNhdmluZ1xuICAgICAgICBVc2VyU2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFVzZXIgPSBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlVzZXIiLCJtb2RlbCIsImVycm9yIiwibmFtZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlcyIsImRlZmF1bHQiLCJpc0VtYWlsVmVyaWZpZWQiLCJCb29sZWFuIiwiaXNEZWxldGVkIiwiaXNBY3RpdmUiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwidXBkYXRlZEF0IiwicHJlIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/useModels.js\n");

/***/ }),

/***/ "(rsc)/./utils/connect.js":
/*!**************************!*\
  !*** ./utils/connect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_URL);\n        console.log(\"connected DB...\");\n    } catch (error) {\n        console.log(\"error\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9jb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2QsSUFBSTtRQUNBLE1BQU1ELHVEQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLE1BQU07UUFDekNDLFFBQVFDLEdBQUcsQ0FBQztJQUNoQixFQUFFLE9BQU9DLE9BQU87UUFDWkYsUUFBUUMsR0FBRyxDQUFDLFNBQVNDO0lBQ3pCO0FBQ0o7QUFDQSxpRUFBZVAsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1hdXRoLy4vdXRpbHMvY29ubmVjdC5qcz9jYTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREJfVVJMKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCBEQi4uLicpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkRCX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/connect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fchathurangacpm%2FDocuments%2FChathuranga%2FOthers%2Fnextjs-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();