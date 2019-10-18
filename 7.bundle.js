(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{92:function(e,n,a){"use strict";a.r(n);var l=a(0),i=a.n(l),t=a(19),o=a(88);n.default=()=>{var[e,n]=Object(l.useState)(null);return i.a.createElement("main",null,e&&i.a.createElement("section",null,i.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Submitted Data"),i.a.createElement("ul",null,i.a.createElement("li",null,"DropDown: ",e.formValues.dropdown),i.a.createElement("li",null,"RadioGroup: ",e.formValues.radioGroup),i.a.createElement("li",null,"CheckBox: ",e.formValues.checkbox),i.a.createElement("li",null,"Color: ",e.formValues.color),i.a.createElement("li",null,"Range: ",e.formValues.range))),i.a.createElement("section",null,i.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Text Inputs"),i.a.createElement("div",null,i.a.createElement(o.g,{name:"inputsForm",onSubmit:e=>{console.info("DropDown",e.dropdown),console.info("RadioGroup",e.radioGroup),console.info("CheckBox",e.checkbox),console.info("Color",e.color),console.info("Range",e.range),n({formValues:e})}},i.a.createElement(o.d,{name:"dropdown",label:"Drop Down",initialValue:"2"},i.a.createElement(o.j,{label:"First Group"},i.a.createElement(o.i,{initialValue:"1"},"First"),i.a.createElement(o.i,{initialValue:"2"},"Second"),i.a.createElement(o.i,{initialValue:"3",label:"Third"})),i.a.createElement(o.j,{label:"Second Group"},i.a.createElement(o.i,{initialValue:"11"},"Second First"),i.a.createElement(o.i,{initialValue:"12"},"Second Second"),i.a.createElement(o.i,{initialValue:"13",label:"Second Third"})),i.a.createElement(o.j,{label:"Third Group"},i.a.createElement(o.i,{initialValue:"21"},"Third First"),i.a.createElement(o.i,{initialValue:"22"},"Third Second"),i.a.createElement(o.i,{initialValue:"23",label:"Third Third"}))),i.a.createElement(o.m,{name:"radioGroup",label:"The Radio",initialChecked:"first",options:[{value:"first",label:"First"},{value:"second",label:"Second"}]}),i.a.createElement(o.b,{label:"A Checkbox",isChecked:!0,name:"checkbox",value:"checkbox value"}),i.a.createElement(o.c,{label:"Color",name:"color",initialValue:"#0668fa",required:!0}),i.a.createElement(o.n,{label:"My Range",name:"range",min:0,max:50,step:2,initialValue:24}),i.a.createElement(o.a,null,"Send"))),i.a.createElement("div",{className:"mar-b-md mar-t-md"},i.a.createElement("h3",{className:"mar-b-md"},"Code from Example"),i.a.createElement(t.a,null,'\n  import React, { Component, createRef } from \'react\'\n  import {\n    Form,\n    Meter,\n    Progress,\n  } from \'react-form-elements\'\n\n  export default () =>\n    (<Form>\n      <DropDown name="dropdown" label="Drop Down" initialValue="2">\n        <OptionGroup label="First Group">\n          <Option initialValue="1">First</Option>\n          <Option initialValue="2">Second</Option>\n          <Option initialValue="3" label="Third" />\n        </OptionGroup>\n        <OptionGroup label="Second Group">\n          <Option initialValue="11">Second First</Option>\n          <Option initialValue="12">Second Second</Option>\n          <Option initialValue="13" label="Second Third" />\n        </OptionGroup>\n      </DropDown>\n      <RadioGroup\n        name="radioGroup"\n        label="The Radio"\n        initialChecked="first"\n        options={[\n          { value: \'first\', label: \'First\' },\n          { value: \'second\', label: \'Second\' },\n        ]}\n      />\n      <CheckBox\n        label="A Checkbox"\n        isChecked={true}\n        name="checkbox"\n        value="checkbox value"\n      />\n      <ColorInput\n        label="Color"\n        name="color"\n        initialValue="#0668fa"\n        required\n      />\n      <Range\n        label="My Range"\n        name="range"\n        min={0}\n        max={50}\n        step={2}\n        initialValue={24}\n      />\n    </Form>)\n  '))))}}}]);