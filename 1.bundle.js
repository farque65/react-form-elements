(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./example/src/examples/attributes-form.js":
/*!*************************************************!*\
  !*** ./example/src/examples/attributes-form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/styles/prism/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src */ \"./src/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nconst ContactForm = () => {\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n        _useState2 = _slicedToArray(_useState, 2),\n        data = _useState2[0],\n        setData = _useState2[1];\n\n  const codeString = `\n  import React, { Component, createRef } from 'react'\n  import {\n    Button,\n    Form,\n    TextBox,\n  } from 'react-form-elements'\n\n  export default () =>\n    (<Form\n      name=\"attributesForm\"\n      onSubmit={values => {}}\n    >\n    <TextBox name=\"name\" label=\"TextBox\" initialValue=\"\" required />\n    <EmailInput\n      name=\"emailAddress\"\n      label=\"Email Input\"\n      initialValue=\"\"\n    />\n    <UrlInput\n      name=\"webAddress\"\n      label=\"UrlInput\"\n      initialValue=\"\"\n      placeholder=\"https://www.example.com\"\n      required\n    />\n    <Telephone\n      name=\"telephoneNumber\"\n      label=\"Telephone Number\"\n      initialValue=\"\"\n    />\n    <TextArea label=\"TextArea\" name=\"message\" />\n    <Button>Send</Button>\n    </Form>)\n  `;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Submitted Data\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"TextBox: \", data.formValues.userName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"EmailInput: \", data.formValues.userEmail), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"UrlInput: \", data.formValues.webAddress), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Telephone: \", data.formValues.telephoneNumber), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"TextArea: \", data.formValues.message))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Native Attributes\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    name: \"inputsForm\",\n    onSubmit: values => {\n      console.log('Name', values.userName);\n      console.log('Email', values.userEmail);\n      console.log('Message', values.message);\n      console.log('URL', values.webAddress);\n      console.log('Telephone', values.telephoneNumber);\n      setData({\n        formValues: values\n      });\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"TextBox\"], {\n    name: \"name\",\n    label: \"TextBox\",\n    initialValue: \"\",\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"EmailInput\"], {\n    name: \"emailAddress\",\n    label: \"Email Input\",\n    initialValue: \"\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"UrlInput\"], {\n    name: \"webAddress\",\n    label: \"UrlInput\",\n    initialValue: \"\",\n    placeholder: \"https://www.example.com\",\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Telephone\"], {\n    name: \"telephoneNumber\",\n    label: \"Telephone Number\",\n    initialValue: \"\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"TextArea\"], {\n    label: \"TextArea\",\n    name: \"message\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], null, \"Send\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mar-b-md mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"Prism\"], {\n    language: \"jsx\",\n    style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"tomorrow\"]\n  }, codeString))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\n\n//# sourceURL=webpack:///./example/src/examples/attributes-form.js?");

/***/ })

}]);