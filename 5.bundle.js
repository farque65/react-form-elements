(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./example/src/examples/others.js":
/*!****************************************!*\
  !*** ./example/src/examples/others.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/styles/prism/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nconst ContactForm = () => {\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n        _useState2 = _slicedToArray(_useState, 2),\n        data = _useState2[0],\n        setData = _useState2[1];\n\n  const codeString = `\n  import React, { Component, createRef } from 'react'\n  import {\n    Form,\n    Meter,\n    Progress,\n  } from 'react-form-elements'\n\n  export default () =>\n    (<Form>\n      <Meter\n        label=\"Meter\"\n        name=\"meter\"\n        initialValue={30}\n        min={10}\n        max={50}\n        low={15}\n        high={40}\n        optimum={30}\n      />\n      <Progress\n        initialValue={35}\n        label=\"Progress Bar\"\n        name=\"progressBar\"\n      />\n    </Form>)\n  `;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Submitted Data\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Meter: \", data.formValues.meter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"High Meter: \", data.formValues.highMeter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Low Meter: \", data.formValues.lowMeter))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Other Elements\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    name: \"inputsForm\",\n    onSubmit: values => {\n      setData({\n        formValues: values\n      });\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Meter\"], {\n    label: \"Meter\",\n    name: \"meter\",\n    initialValue: 30,\n    min: 10,\n    max: 50,\n    low: 15,\n    high: 40,\n    optimum: 30\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Meter\"], {\n    label: \"High Meter\",\n    name: \"highMeter\",\n    initialValue: 41,\n    min: 10,\n    max: 50,\n    low: 15,\n    high: 40,\n    optimum: 30\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Meter\"], {\n    label: \"Low Meter\",\n    name: \"lowMeter\",\n    initialValue: 12,\n    min: 10,\n    max: 50,\n    low: 15,\n    high: 40,\n    optimum: 30\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Progress\"], {\n    initialValue: 35,\n    label: \"Progress Bar\",\n    name: \"progressBar\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Check\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pad-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://css-tricks.com/html5-meter-element/\",\n    target: \"blank\"\n  }, \"For information styling a the Meter element\", ' ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"https://css-tricks.com/html5-progress-element/\",\n    target: \"blank\"\n  }, \"For information styling a the Progress element\", ' ')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mar-b-md mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md\"\n  }, \"Code from Example\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"Prism\"], {\n    language: \"jsx\",\n    style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"tomorrow\"]\n  }, codeString)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\n//# sourceURL=webpack:///./example/src/examples/others.js?");

/***/ })

}]);