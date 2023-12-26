"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Editor_js";
exports.ids = ["components_Editor_js"];
exports.modules = {

/***/ "./components/Editor.js":
/*!******************************!*\
  !*** ./components/Editor.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocknote_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocknote/core */ \"@blocknote/core\");\n/* harmony import */ var _blocknote_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocknote/react */ \"@blocknote/react\");\n/* harmony import */ var _blocknote_core_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocknote/core/style.css */ \"./node_modules/@blocknote/core/dist/style.css\");\n/* harmony import */ var _blocknote_core_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocknote_core_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var yjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yjs */ \"yjs\");\n/* harmony import */ var y_websocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! y-websocket */ \"y-websocket\");\n/* harmony import */ var y_websocket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(y_websocket__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_randomuser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/randomuser */ \"./utils/randomuser.js\");\n/* harmony import */ var _utils_randomuser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_randomuser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constants/data */ \"./constants/data.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blocknote_core__WEBPACK_IMPORTED_MODULE_1__, _blocknote_react__WEBPACK_IMPORTED_MODULE_2__, yjs__WEBPACK_IMPORTED_MODULE_4__]);\n([_blocknote_core__WEBPACK_IMPORTED_MODULE_1__, _blocknote_react__WEBPACK_IMPORTED_MODULE_2__, yjs__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n// Our <Editor> component we can reuse later\nfunction Editor({ data, id }) {\n    console.log(\"data\", data);\n    // console.log(\"id\", id);\n    const initData = data.map((block)=>{\n        return {\n            id: `${block.id}`,\n            type: `${block.type}`,\n            content: `${block.content}`\n        };\n    });\n    console.log(\"initData\", initData);\n    // Creates a new editor instance.\n    // const [note, setNote] = React.useState();\n    const doc = new yjs__WEBPACK_IMPORTED_MODULE_4__.Doc();\n    const provider = new y_websocket__WEBPACK_IMPORTED_MODULE_5__.WebsocketProvider(\"ws://localhost:1234\", \"my-roomname\", doc);\n    const editor = (0,_blocknote_react__WEBPACK_IMPORTED_MODULE_2__.useBlockNote)({\n        // initialContent: initData,\n        collaboration: {\n            provider,\n            // Where to store BlockNote data in the Y.Doc:\n            fragment: doc.getXmlFragment(\"document-store\"),\n            // Information (name and color) for this user:\n            user: (0,_utils_randomuser__WEBPACK_IMPORTED_MODULE_6__.getRandomUser)()\n        },\n        onEditorContentChange: (editor)=>{\n            // setNote(editor.topLevelBlocks);\n            return;\n        } // ...\n    });\n    const handleSave = async ()=>{\n        // const note = localStorage.getItem(\"editorContent\");\n        // const res = axios.post(`${publicUrl()}/note`);\n        // console.log(note);\n        console.log(\"saved\");\n    };\n    // Renders the editor instance using a React component.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleSave,\n                    children: \"Save\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Editor.js\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Editor.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blocknote_react__WEBPACK_IMPORTED_MODULE_2__.BlockNoteView, {\n                    editor: editor,\n                    theme: \"light\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Editor.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Editor.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Development\\\\MERN Stack\\\\Hack-O-Rama\\\\frontend\\\\components\\\\Editor.js\",\n        lineNumber: 53,\n        columnNumber: 13\n    }, this);\n}\n;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VkaXRvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ2E7QUFDNUI7QUFDVjtBQUN1QjtBQUNHO0FBQ1Y7QUFDTTtBQUUvQyw0Q0FBNEM7QUFDN0IsU0FBU1MsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLEVBQUUsRUFBRTtJQUN2Q0MsUUFBUUMsR0FBRyxDQUFDLFFBQVFIO0lBRXBCLHlCQUF5QjtJQUN6QixNQUFNSSxXQUFXSixLQUFLSyxHQUFHLENBQUMsQ0FBQ0M7UUFDdkIsT0FBTztZQUNITCxJQUFJLENBQUMsRUFBRUssTUFBTUwsRUFBRSxDQUFDLENBQUM7WUFDakJNLE1BQU0sQ0FBQyxFQUFFRCxNQUFNQyxJQUFJLENBQUMsQ0FBQztZQUNyQkMsU0FBUyxDQUFDLEVBQUVGLE1BQU1FLE9BQU8sQ0FBQyxDQUFDO1FBQy9CO0lBQ0o7SUFDQU4sUUFBUUMsR0FBRyxDQUFDLFlBQVlDO0lBQ3hCLGlDQUFpQztJQUNqQyw0Q0FBNEM7SUFDNUMsTUFBTUssTUFBTSxJQUFJaEIsb0NBQUs7SUFDckIsTUFBTWtCLFdBQVcsSUFBSWpCLDBEQUFpQkEsQ0FBQyx1QkFBdUIsZUFBZWU7SUFDN0UsTUFBTUcsU0FBU3BCLDhEQUFZQSxDQUFDO1FBQ3hCLDRCQUE0QjtRQUM1QnFCLGVBQWU7WUFDWEY7WUFDQSw4Q0FBOEM7WUFDOUNHLFVBQVVMLElBQUlNLGNBQWMsQ0FBQztZQUM3Qiw4Q0FBOEM7WUFDOUNDLE1BQU1yQixnRUFBYUE7UUFDdkI7UUFDQXNCLHVCQUF1QixDQUFDTDtZQUNwQixrQ0FBa0M7WUFDbEM7UUFDSixFQUFTLE1BQU07SUFDbkI7SUFFQSxNQUFNTSxhQUFhO1FBQ2Ysc0RBQXNEO1FBQ3RELGlEQUFpRDtRQUNqRCxxQkFBcUI7UUFDckJoQixRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFJQSx1REFBdUQ7SUFDdkQscUJBQVEsOERBQUNnQjs7MEJBQ0wsOERBQUNBOzBCQUNHLDRFQUFDQztvQkFBT0MsU0FBU0g7OEJBQVk7Ozs7Ozs7Ozs7OzBCQUtqQyw4REFBQ0M7MEJBQ0csNEVBQUM1QiwyREFBYUE7b0JBQUNxQixRQUFRQTtvQkFBUVUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvRWRpdG9yLmpzP2VlOGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIHRoaXMgcmVnaXN0ZXJzIDxFZGl0b3I+IGFzIGEgQ2xpZW50IENvbXBvbmVudFxyXG5pbXBvcnQgeyBCbG9ja05vdGVFZGl0b3IgfSBmcm9tIFwiQGJsb2Nrbm90ZS9jb3JlXCI7XHJcbmltcG9ydCB7IEJsb2NrTm90ZVZpZXcsIHVzZUJsb2NrTm90ZSB9IGZyb20gXCJAYmxvY2tub3RlL3JlYWN0XCI7XHJcbmltcG9ydCBcIkBibG9ja25vdGUvY29yZS9zdHlsZS5jc3NcIjtcclxuaW1wb3J0ICogYXMgWSBmcm9tIFwieWpzXCI7XHJcbmltcG9ydCB7IFdlYnNvY2tldFByb3ZpZGVyIH0gZnJvbSAneS13ZWJzb2NrZXQnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21Vc2VyIH0gZnJvbSBcIkAvdXRpbHMvcmFuZG9tdXNlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGluaXRpYWxEYXRhIH0gZnJvbSBcIkAvY29uc3RhbnRzL2RhdGFcIjtcclxuXHJcbi8vIE91ciA8RWRpdG9yPiBjb21wb25lbnQgd2UgY2FuIHJldXNlIGxhdGVyXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcih7IGRhdGEsIGlkIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImlkXCIsIGlkKTtcclxuICAgIGNvbnN0IGluaXREYXRhID0gZGF0YS5tYXAoKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGAke2Jsb2NrLmlkfWAsXHJcbiAgICAgICAgICAgIHR5cGU6IGAke2Jsb2NrLnR5cGV9YCxcclxuICAgICAgICAgICAgY29udGVudDogYCR7YmxvY2suY29udGVudH1gXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJpbml0RGF0YVwiLCBpbml0RGF0YSk7XHJcbiAgICAvLyBDcmVhdGVzIGEgbmV3IGVkaXRvciBpbnN0YW5jZS5cclxuICAgIC8vIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBkb2MgPSBuZXcgWS5Eb2MoKTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYnNvY2tldFByb3ZpZGVyKCd3czovL2xvY2FsaG9zdDoxMjM0JywgJ215LXJvb21uYW1lJywgZG9jKTtcclxuICAgIGNvbnN0IGVkaXRvciA9IHVzZUJsb2NrTm90ZSh7XHJcbiAgICAgICAgLy8gaW5pdGlhbENvbnRlbnQ6IGluaXREYXRhLFxyXG4gICAgICAgIGNvbGxhYm9yYXRpb246IHtcclxuICAgICAgICAgICAgcHJvdmlkZXIsXHJcbiAgICAgICAgICAgIC8vIFdoZXJlIHRvIHN0b3JlIEJsb2NrTm90ZSBkYXRhIGluIHRoZSBZLkRvYzpcclxuICAgICAgICAgICAgZnJhZ21lbnQ6IGRvYy5nZXRYbWxGcmFnbWVudChcImRvY3VtZW50LXN0b3JlXCIpLFxyXG4gICAgICAgICAgICAvLyBJbmZvcm1hdGlvbiAobmFtZSBhbmQgY29sb3IpIGZvciB0aGlzIHVzZXI6XHJcbiAgICAgICAgICAgIHVzZXI6IGdldFJhbmRvbVVzZXIoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRWRpdG9yQ29udGVudENoYW5nZTogKGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBzZXROb3RlKGVkaXRvci50b3BMZXZlbEJsb2Nrcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgICAgICAvLyAuLi5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3Qgbm90ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZWRpdG9yQ29udGVudFwiKTtcclxuICAgICAgICAvLyBjb25zdCByZXMgPSBheGlvcy5wb3N0KGAke3B1YmxpY1VybCgpfS9ub3RlYCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm90ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZFwiKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAvLyBSZW5kZXJzIHRoZSBlZGl0b3IgaW5zdGFuY2UgdXNpbmcgYSBSZWFjdCBjb21wb25lbnQuXHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5cclxuICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8QmxvY2tOb3RlVmlldyBlZGl0b3I9e2VkaXRvcn0gdGhlbWU9e1wibGlnaHRcIn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn07Il0sIm5hbWVzIjpbIkJsb2NrTm90ZUVkaXRvciIsIkJsb2NrTm90ZVZpZXciLCJ1c2VCbG9ja05vdGUiLCJZIiwiV2Vic29ja2V0UHJvdmlkZXIiLCJnZXRSYW5kb21Vc2VyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJpbml0aWFsRGF0YSIsIkVkaXRvciIsImRhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJpbml0RGF0YSIsIm1hcCIsImJsb2NrIiwidHlwZSIsImNvbnRlbnQiLCJkb2MiLCJEb2MiLCJwcm92aWRlciIsImVkaXRvciIsImNvbGxhYm9yYXRpb24iLCJmcmFnbWVudCIsImdldFhtbEZyYWdtZW50IiwidXNlciIsIm9uRWRpdG9yQ29udGVudENoYW5nZSIsImhhbmRsZVNhdmUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Editor.js\n");

/***/ }),

/***/ "./utils/randomuser.js":
/*!*****************************!*\
  !*** ./utils/randomuser.js ***!
  \*****************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"getRandomUser\", ({\n    enumerable: true,\n    get: function() {\n        return getRandomUser;\n    }\n}));\nconst _data = __webpack_require__(/*! ../constants/data */ \"./constants/data.js\");\nconst colors = [\n    \"#958DF1\",\n    \"#F98181\",\n    \"#FBBC88\",\n    \"#FAF594\",\n    \"#70CFF8\",\n    \"#94FADB\",\n    \"#B9F18D\"\n];\n// some random gpt generated names\n// const names = [\n//     \"Lorem Ipsumovich\",\n//     \"Typy McTypeface\",\n//     \"Collabo Rative\",\n//     \"Edito Von Editz\",\n//     \"Wordsworth Writywrite\",\n//     \"Docu D. Mentor\",\n//     \"Scrivener Scribblesworth\",\n//     \"Digi Penman\",\n//     \"Ernest Wordway\",\n//     \"Sir Typalot\",\n//     \"Comic Sans-Serif\",\n//     \"Miss Spellcheck\",\n//     \"Bullet Liston\",\n//     \"Autonomy Backspace\",\n//     \"Ctrl Zedson\",\n// ];\nconst getRandomElement = (list)=>list[Math.floor(Math.random() * list.length)];\nconst getRandomColor = ()=>getRandomElement(colors);\nconst getRandomName = ()=>getRandomElement(_data.names);\nconst getRandomUser = ()=>({\n        name: getRandomName(),\n        color: getRandomColor()\n    });\nmodule.exports = {\n    getRandomUser,\n    getRandomColor,\n    getRandomElement,\n    getRandomName\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9yYW5kb211c2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7aURBb0NhQTs7O2VBQUFBOzs7a0NBcENPLDhDQUFtQjtBQUN2QyxNQUFNQyxTQUFTO0lBQ1g7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDSDtBQUVELGtDQUFrQztBQUNsQyxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQix3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckIsS0FBSztBQUVMLE1BQU1DLG1CQUFtQixDQUFDQyxPQUN0QkEsSUFBSSxDQUFDQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0gsS0FBS0ksTUFBTSxFQUFFO0FBRWpELE1BQU1DLGlCQUFpQixJQUFNTixpQkFBaUJEO0FBQzlDLE1BQU1RLGdCQUFnQixJQUFNUCxpQkFBaUJRLFdBQUs7QUFFM0MsTUFBTVYsZ0JBQWdCLElBQU87UUFDaENXLE1BQU1GO1FBQ05HLE9BQU9KO0lBQ1g7QUFHQUssT0FBT0MsT0FBTyxHQUFHO0lBQ2JkO0lBQ0FRO0lBQ0FOO0lBQ0FPO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3V0aWxzL3JhbmRvbXVzZXIuanM/MjQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge25hbWVzfSBmcm9tIFwiLi4vY29uc3RhbnRzL2RhdGFcIjtcclxuY29uc3QgY29sb3JzID0gW1xyXG4gICAgXCIjOTU4REYxXCIsXHJcbiAgICBcIiNGOTgxODFcIixcclxuICAgIFwiI0ZCQkM4OFwiLFxyXG4gICAgXCIjRkFGNTk0XCIsXHJcbiAgICBcIiM3MENGRjhcIixcclxuICAgIFwiIzk0RkFEQlwiLFxyXG4gICAgXCIjQjlGMThEXCIsXHJcbl07XHJcblxyXG4vLyBzb21lIHJhbmRvbSBncHQgZ2VuZXJhdGVkIG5hbWVzXHJcbi8vIGNvbnN0IG5hbWVzID0gW1xyXG4vLyAgICAgXCJMb3JlbSBJcHN1bW92aWNoXCIsXHJcbi8vICAgICBcIlR5cHkgTWNUeXBlZmFjZVwiLFxyXG4vLyAgICAgXCJDb2xsYWJvIFJhdGl2ZVwiLFxyXG4vLyAgICAgXCJFZGl0byBWb24gRWRpdHpcIixcclxuLy8gICAgIFwiV29yZHN3b3J0aCBXcml0eXdyaXRlXCIsXHJcbi8vICAgICBcIkRvY3UgRC4gTWVudG9yXCIsXHJcbi8vICAgICBcIlNjcml2ZW5lciBTY3JpYmJsZXN3b3J0aFwiLFxyXG4vLyAgICAgXCJEaWdpIFBlbm1hblwiLFxyXG4vLyAgICAgXCJFcm5lc3QgV29yZHdheVwiLFxyXG4vLyAgICAgXCJTaXIgVHlwYWxvdFwiLFxyXG4vLyAgICAgXCJDb21pYyBTYW5zLVNlcmlmXCIsXHJcbi8vICAgICBcIk1pc3MgU3BlbGxjaGVja1wiLFxyXG4vLyAgICAgXCJCdWxsZXQgTGlzdG9uXCIsXHJcbi8vICAgICBcIkF1dG9ub215IEJhY2tzcGFjZVwiLFxyXG4vLyAgICAgXCJDdHJsIFplZHNvblwiLFxyXG4vLyBdO1xyXG5cclxuY29uc3QgZ2V0UmFuZG9tRWxlbWVudCA9IChsaXN0KSA9PlxyXG4gICAgbGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaXN0Lmxlbmd0aCldO1xyXG5cclxuY29uc3QgZ2V0UmFuZG9tQ29sb3IgPSAoKSA9PiBnZXRSYW5kb21FbGVtZW50KGNvbG9ycyk7XHJcbmNvbnN0IGdldFJhbmRvbU5hbWUgPSAoKSA9PiBnZXRSYW5kb21FbGVtZW50KG5hbWVzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21Vc2VyID0gKCkgPT4gKHtcclxuICAgIG5hbWU6IGdldFJhbmRvbU5hbWUoKSxcclxuICAgIGNvbG9yOiBnZXRSYW5kb21Db2xvcigpLFxyXG59KTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldFJhbmRvbVVzZXIsXHJcbiAgICBnZXRSYW5kb21Db2xvcixcclxuICAgIGdldFJhbmRvbUVsZW1lbnQsXHJcbiAgICBnZXRSYW5kb21OYW1lXHJcbn07Il0sIm5hbWVzIjpbImdldFJhbmRvbVVzZXIiLCJjb2xvcnMiLCJnZXRSYW5kb21FbGVtZW50IiwibGlzdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImdldFJhbmRvbUNvbG9yIiwiZ2V0UmFuZG9tTmFtZSIsIm5hbWVzIiwibmFtZSIsImNvbG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/randomuser.js\n");

/***/ })

};
;