(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{135:function(e,n,a){"use strict";a.r(n);var l=a(0),t=a.n(l),o=a(83),i=a(17),r=a(87);n.default=()=>{const[e,n]=Object(l.useState)(null);return t.a.createElement("main",null,e&&t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Submitted Data"),t.a.createElement("ul",null,t.a.createElement("li",null,"DropDown: ",e.formValues.dropdown),t.a.createElement("li",null,"RadioGroup: ",e.formValues.radioGroup),t.a.createElement("li",null,"CheckBox: ",e.formValues.checkbox),t.a.createElement("li",null,"Color: ",e.formValues.color),t.a.createElement("li",null,"Range: ",e.formValues.range))),t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Text Inputs"),t.a.createElement("div",null,t.a.createElement(r.g,{name:"inputsForm",onSubmit:e=>{console.info("DropDown",e.dropdown),console.info("RadioGroup",e.radioGroup),console.info("CheckBox",e.checkbox),console.info("Color",e.color),console.info("Range",e.range),n({formValues:e})}},t.a.createElement(r.d,{name:"dropdown",label:"Drop Down",initialValue:"2"},t.a.createElement(r.j,{label:"First Group"},t.a.createElement(r.i,{initialValue:"1"},"First"),t.a.createElement(r.i,{initialValue:"2"},"Second"),t.a.createElement(r.i,{initialValue:"3",label:"Third"})),t.a.createElement(r.j,{label:"Second Group"},t.a.createElement(r.i,{initialValue:"11"},"Second First"),t.a.createElement(r.i,{initialValue:"12"},"Second Second"),t.a.createElement(r.i,{initialValue:"13",label:"Second Third"})),t.a.createElement(r.j,{label:"Third Group"},t.a.createElement(r.i,{initialValue:"21"},"Third First"),t.a.createElement(r.i,{initialValue:"22"},"Third Second"),t.a.createElement(r.i,{initialValue:"23",label:"Third Third"}))),t.a.createElement(r.m,{name:"radioGroup",label:"The Radio",initialChecked:"first",options:[{value:"first",label:"First"},{value:"second",label:"Second"}]}),t.a.createElement(r.b,{label:"A Checkbox",isChecked:!0,name:"checkbox",value:"checkbox value"}),t.a.createElement(r.c,{label:"Color",name:"color",initialValue:"#0668fa",required:!0}),t.a.createElement(r.n,{label:"My Range",name:"range",min:0,max:50,step:2,initialValue:24}),t.a.createElement(r.a,null,"Send"))),t.a.createElement("div",{className:"mar-b-md mar-t-md"},t.a.createElement("h3",{className:"mar-b-md"},"Code from Example"),t.a.createElement(o.a,{language:"jsx",style:i.tomorrow},'\n  import React, { Component, createRef } from \'react\'\n  import {\n    Form,\n    Meter,\n    Progress,\n  } from \'react-form-elements\'\n\n  export default () =>\n    (<Form>\n      <DropDown name="dropdown" label="Drop Down" initialValue="2">\n        <OptionGroup label="First Group">\n          <Option initialValue="1">First</Option>\n          <Option initialValue="2">Second</Option>\n          <Option initialValue="3" label="Third" />\n        </OptionGroup>\n        <OptionGroup label="Second Group">\n          <Option initialValue="11">Second First</Option>\n          <Option initialValue="12">Second Second</Option>\n          <Option initialValue="13" label="Second Third" />\n        </OptionGroup>\n      </DropDown>\n      <RadioGroup\n        name="radioGroup"\n        label="The Radio"\n        initialChecked="first"\n        options={[\n          { value: \'first\', label: \'First\' },\n          { value: \'second\', label: \'Second\' },\n        ]}\n      />\n      <CheckBox\n        label="A Checkbox"\n        isChecked={true}\n        name="checkbox"\n        value="checkbox value"\n      />\n      <ColorInput\n        label="Color"\n        name="color"\n        initialValue="#0668fa"\n        required\n      />\n      <Range\n        label="My Range"\n        name="range"\n        min={0}\n        max={50}\n        step={2}\n        initialValue={24}\n      />\n    </Form>)\n  '))))}}}]);