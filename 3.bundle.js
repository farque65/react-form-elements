(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./example/src/examples/hook.js":
/*!**************************************!*\
  !*** ./example/src/examples/hook.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/styles/prism/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\n/* harmony import */ var _utils_boundry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/boundry */ \"./example/src/utils/boundry.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nconst HookedForm = () => {\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n        _useState2 = _slicedToArray(_useState, 2),\n        data = _useState2[0],\n        setData = _useState2[1];\n\n  const codeString = `\n  import React, { createRef } from 'react'\n  import {\n    useFormElement,\n    Button,\n    Form,\n  } from 'react-form-elements'\n\n  export default () => {\n    const ref = createRef()\n    const { id, value, handleChange, inputRef } = useFormElement('', ref)\n    return (<Form\n        name=\"sampleForm\"\n        onSubmit={values => {\n          sendData({ formValues: values })\n        }}\n      >\n        <input\n          id={id}\n          name=\"hookedInput\"\n          type=\"text\"\n          value={value}\n          onChange={handleChange}\n          ref={inputRef}\n        />\n        <Button>Submit</Button>\n      </Form>)\n    }\n  `;\n  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"])();\n\n  const _useFormElement = Object(_src__WEBPACK_IMPORTED_MODULE_3__[\"useFormElement\"])('', ref),\n        id = _useFormElement.id,\n        value = _useFormElement.value,\n        handleChange = _useFormElement.handleChange,\n        inputRef = _useFormElement.inputRef;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_boundry__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Submitted Data\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Hook: \", data.formValues.hookedInput))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Hook\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    name: \"contactForm\",\n    onSubmit: values => {\n      console.log('From Hooked Input', values.hookedInput);\n      setData({\n        formValues: values\n      });\n    }\n  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: id\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Custom Hook Input\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: id,\n    name: \"hookedInput\",\n    type: \"text\",\n    value: value,\n    onChange: handleChange,\n    ref: inputRef\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Submit\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mar-b-md mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md\"\n  }, \"Code from Example\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"Prism\"], {\n    language: \"jsx\",\n    style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"tomorrow\"]\n  }, codeString)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HookedForm);\n\n//# sourceURL=webpack:///./example/src/examples/hook.js?");

/***/ })

}]);