(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{92:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(17),m=t(87);a.default=()=>{const[e,a]=Object(l.useState)(null);return n.a.createElement("main",null,e&&n.a.createElement("section",null,n.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Submitted Data"),n.a.createElement("ul",null,n.a.createElement("li",null,"Meter: ",e.formValues.meter),n.a.createElement("li",null,"High Meter: ",e.formValues.highMeter),n.a.createElement("li",null,"Low Meter: ",e.formValues.lowMeter))),n.a.createElement("section",null,n.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Other Elements"),n.a.createElement("div",null,n.a.createElement(m.g,{name:"inputsForm",onSubmit:e=>{a({formValues:e})}},n.a.createElement(m.h,{label:"Meter",name:"meter",initialValue:30,min:10,max:50,low:15,high:40,optimum:30}),n.a.createElement(m.h,{label:"High Meter",name:"highMeter",initialValue:41,min:10,max:50,low:15,high:40,optimum:30}),n.a.createElement(m.h,{label:"Low Meter",name:"lowMeter",initialValue:12,min:10,max:50,low:15,high:40,optimum:30}),n.a.createElement(m.l,{initialValue:35,label:"Progress Bar",name:"progressBar"}),n.a.createElement(m.a,null,"Check")),n.a.createElement("div",{className:"pad-t-md"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://css-tricks.com/html5-meter-element/",target:"blank"},"For information styling a the Meter element"," ")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://css-tricks.com/html5-progress-element/",target:"blank"},"For information styling a the Progress element"," ")))),n.a.createElement("div",{className:"mar-b-md mar-t-md"},n.a.createElement("h3",{className:"mar-b-md"},"Code from Example"),n.a.createElement(r.a,null,'\n  import React from \'react\'\n  import {\n    Form,\n    Meter,\n    Progress,\n  } from \'react-form-elements\'\n\n  export default () =>\n    (<Form>\n      <Meter\n        label="Meter"\n        name="meter"\n        initialValue={30}\n        min={10}\n        max={50}\n        low={15}\n        high={40}\n        optimum={30}\n      />\n      <Progress\n        initialValue={35}\n        label="Progress Bar"\n        name="progressBar"\n      />\n    </Form>)\n  ')))))}}}]);