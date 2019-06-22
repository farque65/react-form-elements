(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{133:function(e,a,n){"use strict";n.r(a);var l=n(0),t=n.n(l),m=n(83),r=n(17),o=n(87);a.default=()=>{const[e,a]=Object(l.useState)(null);return t.a.createElement("main",null,e&&t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Submitted Data"),t.a.createElement("ul",null,t.a.createElement("li",null,"TextBox: ",e.formValues.userName),t.a.createElement("li",null,"EmailInput: ",e.formValues.userEmail),t.a.createElement("li",null,"UrlInput: ",e.formValues.webAddress),t.a.createElement("li",null,"Telephone: ",e.formValues.telephoneNumber),t.a.createElement("li",null,"TextArea: ",e.formValues.message))),t.a.createElement("section",null,t.a.createElement("h2",{className:"mar-b-md mar-t-md"},"Text Inputs"),t.a.createElement("div",null,t.a.createElement(o.g,{name:"inputsForm",onSubmit:e=>{console.info("Name",e.userName),console.info("Password",e.password),console.info("Email",e.userEmail),console.info("Message",e.message),console.info("URL",e.webAddress),console.info("Telephone",e.telephoneNumber),a({formValues:e})}},t.a.createElement(o.q,{name:"name",label:"TextBox",initialValue:""}),t.a.createElement(o.k,{name:"password",label:"Password Input",initialValue:""}),t.a.createElement(o.e,{name:"emailAddress",label:"Email Input",initialValue:""}),t.a.createElement(o.r,{name:"webAddress",label:"UrlInput",initialValue:""}),t.a.createElement(o.o,{name:"telephoneNumber",label:"Telephone Number",initialValue:""}),t.a.createElement(o.p,{label:"TextArea",name:"message"}),t.a.createElement(o.a,null,"Send"))),t.a.createElement("div",{className:"mar-b-md mar-t-md"},t.a.createElement("h3",{className:"mar-b-md"},"Code from Example"),t.a.createElement(m.a,{language:"jsx",style:r.tomorrow},'\n  import React, { Component, createRef } from \'react\'\n  import {\n    Button,\n    Form,\n    TextBox,\n  } from \'react-form-elements\'\n\n  export default () =>\n    (<Form\n      onSubmit={values => {\n        console.log(\'formValues\', values)\n      }}\n    >\n      <TextBox name="name" label="TextBox" initialValue="" />\n      <Password\n        name="password"\n        label="Password Input"\n        initialValue=""\n      />\n      <EmailInput\n        name="emailAddress"\n        label="Email Input"\n        initialValue=""\n      />\n      <UrlInput name="webAddress" label="UrlInput" initialValue="" />\n      <Telephone\n        name="telephoneNumber"\n        label="Telephone Number"\n        initialValue=""\n      />\n      <TextArea label="TextArea" name="message" />\n      <Button>Submit</Button>\n    </Form>)\n  '))))}}}]);