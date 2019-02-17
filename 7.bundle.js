(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./example/src/examples/styling.js":
/*!*****************************************!*\
  !*** ./example/src/examples/styling.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/styles/prism */ \"./node_modules/react-syntax-highlighter/dist/styles/prism/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Home = () => {\n  const formMarkup = `<form\n    class=\"rfe-form\"\n    name=\"testForm\"\n  >\n  ...\n  </form>`;\n  const textBox = `<div class=\"rfe-form__row \">\n    <label for=\"id-3-1\">\n      My Label\n    </label>\n    <input\n      id=\"id-3-1\"\n      name=\"TextBox\"\n      type=\"text\"\n      value=\"My Input Value\"\n    />\n  </div>`;\n  const radio = `<div class=\"rfe-form__row rfe-radiogroup\">\n  <label>The Radio</label>\n  <div class=\"rfe-radiogroup__row\">\n    <label  for=\"id-1-1\"> irst</label>\n    <input\n      checked=\"\"\n      id=\"id-1-1\"\n      name=\"mygroup\"\n      type=\"radio\"\n      value=\"first\"\n    />\n  </div>\n  <div class=\"rfe-radiogroup__row\">\n    <label for=\"id-2-1\">Second</label>\n    <input\n      id=\"id-2-1\"\n      name=\"mygroup\"\n      type=\"radio\"\n      value=\"second\"\n    />\n  </div>\n  <input\n    type=\"hidden\"\n    value=\"first\"\n  />\n</div>\n`;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"Styling\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \" mar-t-md\"\n  }, \"The form elements do not contain any styles applied. However they do have certain class names applied that you can use to style.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \" mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"The Form Element\"), \"The form element renders just a form tag with the class\", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"\\\"rfe-form\\\"\"), \"applied.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mar-b-md mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md\"\n  }, \"Form Markup\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"Prism\"], {\n    language: \"jsx\",\n    style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"tomorrow\"]\n  }, formMarkup)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \" mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"The Text Inputs\"), \"The text input element renders a div with the class\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"\\\"rfe-form__row\\\"\"), \"applied. Then a label element and an input element as a sibling to the label. If you are using a range element it also a span as a sibling to the label and input element.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mar-b-md mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md\"\n  }, \"TextBox Markup\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"Prism\"], {\n    language: \"jsx\",\n    style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"tomorrow\"]\n  }, textBox)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \" mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md mar-t-md\"\n  }, \"The Radio Group\"), \"The RadioGroup element renders a div with the class\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"\\\"rfe-form__row rfe-radiogroup\\\"\"), \"applied. Then a label element and \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"N\"), \" number of divs for the number of options passed. Each div has the\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"\\\"rfe-radiogroup__row\\\"\"), \" applied.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mar-b-md mar-t-md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"mar-b-md\"\n  }, \"RadioGroup Markup\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__[\"Prism\"], {\n    language: \"jsx\",\n    style: react_syntax_highlighter_dist_styles_prism__WEBPACK_IMPORTED_MODULE_2__[\"tomorrow\"]\n  }, radio))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./example/src/examples/styling.js?");

/***/ })

}]);