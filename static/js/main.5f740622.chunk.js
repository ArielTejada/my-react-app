(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{41:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(33),s=n.n(a),r=(n(41),n(34)),d=n(19),o=n(5),l=n(6),u=n(9),b=n(7),j=n(8),h=n(22),p=n.n(h),x=n(4),O=n(2),m=n(0),f=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(c.Component),v=f,g=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(m.jsx)("h1",{children:"Bank of React"}),Object(m.jsx)(x.b,{to:"/userProfile",children:"User Profile"}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{to:"/login",children:"Login"}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{to:"/credits",children:"Credits (to be implemented in the Assignment)"}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{to:"/debits",children:"Debits (to be implemented in the Assignment)"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(c.Component),y=g,k=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"User Profile"}),Object(m.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(m.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),A=k,w=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).handleChange=function(t){var e=Object(d.a)({},c.state.user);e.userName=t.target.value,c.setState({user:e})},c.handleSubmit=function(t){t.preventDefault(),c.props.mockLogIn(c.state.user),c.setState({redirect:!0})},c.state={user:{userName:c.props.user.userName,password:""},redirect:!1},c}return Object(l.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(O.a,{to:"/userProfile"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"User Name"}),Object(m.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password"})]}),Object(m.jsx)("button",{children:"Log In"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{to:"/",children:"Return to Home"})]})}}]),n}(c.Component),I={title:{textAlign:"center",outline:"1px solid black"},wholePage:{marginLeft:"20%",marginRight:"20%"},categories:{display:"flex",outline:"1px solid black"}},B=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).handleDescriptionInput=function(t){var e=c.state.creditInput;e.description=t.target.value,c.setState({creditInput:e})},c.handleAmountInput=function(t){var e=c.state.creditInput;e.amount=t.target.value,c.setState({creditInput:e})},c.handleAddCredit=function(){c.props.updateCredits(c.state.creditInput);var t=c.props.accountBalance+c.state.creditInput.amount;c.props.updateAccountBalance(t.toFixed(2)),c.setState({creditInput:{description:"",amount:0,date:(new Date).toISOString()}});for(var e=document.getElementsByTagName("input"),n=0;n<e.length;n++)e[n].value=""},c.state={accountBalance:c.props.accountBalance,credits:c.props.credits,creditInput:{description:"",amount:0,date:(new Date).toISOString()},debitsTotal:c.props.debitsTotal,creditsTotal:c.props.creditsTotal},c.handleDescriptionInput=c.handleDescriptionInput.bind(Object(u.a)(c)),c.handleAmountInput=c.handleAmountInput.bind(Object(u.a)(c)),c.handleAddCredit=c.handleAddCredit.bind(Object(u.a)(c)),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{style:I.wholePage,children:[Object(m.jsx)("h1",{style:I.title,children:"Credits"}),Object(m.jsxs)("div",{style:I.categories,children:[Object(m.jsx)("h2",{style:{width:"50%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"},children:"Description"}),Object(m.jsx)("h2",{style:{width:"30%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"},children:"Date"}),Object(m.jsx)("h2",{style:{width:"20%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"},children:"Amount"})]}),Object(m.jsxs)("div",{children:[this.props.credits.map((function(t,e){return Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("p",{style:{width:"50%",outline:"1px solid black"},children:t.description}),Object(m.jsx)("p",{style:{width:"30%",outline:"1px solid black"},children:t.date.slice(0,10)}),Object(m.jsxs)("p",{style:{width:"20%",outline:"1px solid black"},children:["$",t.amount," "]})]},e)})),Object(m.jsxs)("h2",{children:["Total Debits: ",this.props.debitsTotal]}),Object(m.jsxs)("h2",{children:["Total Credits: ",this.props.creditsTotal]}),Object(m.jsx)("h2",{children:"Balance = (Credits - Debits)"}),Object(m.jsxs)("h2",{children:["Your Current Balance: ",this.props.accountBalance]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{style:{outline:"1px solid black",textAlign:"center"},children:"Add A Credit"}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("h2",{style:{width:"50%",paddingLeft:"5%"},children:"Description"}),Object(m.jsx)("h2",{style:{width:"50%",paddingLeft:"5%"},children:"amount"})]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("input",{type:"text",placeholder:"add description...",style:{width:"50%",marginLeft:"3%"},onChange:this.handleDescriptionInput}),Object(m.jsx)("input",{type:"number",placeholder:"add amount...",style:{width:"20%"},onChange:this.handleAmountInput}),Object(m.jsx)("button",{type:"submit",style:{width:"20%"},onClick:this.handleAddCredit,children:"Add Credits"})]})]}),Object(m.jsx)("br",{})]}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{to:"/",onClick:this.handleBackToHome,children:"Return to Home"})]})}}]),n}(c.Component),C=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).handleDescriptionInput=function(t){var e=c.state.debitInput;e.description=t.target.value,c.setState({debitInput:e})},c.handleAmountInput=function(t){var e=c.state.debitInput;e.amount=t.target.value,c.setState({debitInput:e})},c.handleAddDebit=function(){c.props.updateDebits(c.state.debitInput);var t=c.props.accountBalance-c.state.debitInput.amount;c.props.updateAccountBalance(t.toFixed(2)),c.setState({debitInput:{description:"",amount:0,date:(new Date).toISOString()}});for(var e=document.getElementsByTagName("input"),n=0;n<e.length;n++)e[n].value=""},c.state={accountBalance:c.props.accountBalance,debits:c.props.debits,debitInput:{description:"",amount:0,date:(new Date).toISOString()},debitsTotal:c.props.debitsTotal,creditsTotal:c.props.creditsTotal},c.handleDescriptionInput=c.handleDescriptionInput.bind(Object(u.a)(c)),c.handleAmountInput=c.handleAmountInput.bind(Object(u.a)(c)),c.handleAddDebit=c.handleAddDebit.bind(Object(u.a)(c)),c}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{style:I.wholePage,children:[Object(m.jsx)("h1",{style:I.title,children:"Debits"}),Object(m.jsxs)("div",{style:I.categories,children:[Object(m.jsx)("h2",{style:{width:"50%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"},children:"Description"}),Object(m.jsx)("h2",{style:{width:"30%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"},children:"Date"}),Object(m.jsx)("h2",{style:{width:"20%",margin:"auto",outline:"1px solid black",flexGrow:"1",textAlign:"center"},children:"Amount"})]}),Object(m.jsxs)("div",{children:[this.props.debits.map((function(t,e){return Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("p",{style:{width:"50%",outline:"1px solid black"},children:t.description}),Object(m.jsx)("p",{style:{width:"30%",outline:"1px solid black"},children:t.date.slice(0,10)}),Object(m.jsxs)("p",{style:{width:"20%",outline:"1px solid black"},children:["$",t.amount," "]})]},e)})),Object(m.jsxs)("h2",{children:["Total Debits: ",this.props.debitsTotal]}),Object(m.jsxs)("h2",{children:["Total Credits: ",this.props.creditsTotal]}),Object(m.jsx)("h2",{children:"Balance = (Credits - Debits)"}),Object(m.jsxs)("h2",{children:["Your Current Balance: ",this.props.accountBalance]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{style:{outline:"1px solid black",textAlign:"center"},children:"Add A Debit"}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("h2",{style:{width:"50%",paddingLeft:"5%"},children:"Description"}),Object(m.jsx)("h2",{style:{width:"50%",paddingLeft:"5%"},children:"amount"})]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("input",{type:"text",placeholder:"add description...",style:{width:"50%",marginLeft:"3%"},onChange:this.handleDescriptionInput}),Object(m.jsx)("input",{type:"number",placeholder:"add amount...",style:{width:"20%"},onChange:this.handleAmountInput}),Object(m.jsx)("button",{type:"submit",style:{width:"20%"},onClick:this.handleAddDebit,children:"Add Debits"})]})]}),Object(m.jsx)("br",{})]}),Object(m.jsx)("br",{}),Object(m.jsx)(x.b,{to:"/",onClick:this.handleBackToHome,children:"Return to Home"})]})}}]),n}(c.Component),T=n(24),D=n.n(T),S=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).mockLogIn=function(t){var e=Object(d.a)({},c.state.currentUser);e.userName=t.userName,c.setState({currentUser:e})},c.state={accountBalance:1234567.89,credits:[],debits:[],creditsTotal:0,debitsTotal:0,currentUser:{userName:"Joe Smith",memberSince:"11/22/99"},date:""},c.updateDebits=c.updateDebits.bind(Object(u.a)(c)),c.updateCredits=c.updateCredits.bind(Object(u.a)(c)),c.updateAccountBalance=c.updateAccountBalance.bind(Object(u.a)(c)),c}return Object(l.a)(n,[{key:"updateDebits",value:function(t){this.state.debits.push(t);var e=this.state.debitsTotal;e+=parseFloat(t.amount),this.setState({debitsTotal:e})}},{key:"updateCredits",value:function(t){this.state.credits.push(t);var e=this.state.creditsTotal;e+=parseFloat(t.amount),this.setState({creditsTotal:e})}},{key:"updateAccountBalance",value:function(t){this.setState({accountBalance:t})}},{key:"componentDidMount",value:function(){var t=Object(r.a)(p.a.mark((function t(){var e,n,c=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0,n=0,D.a.get("https://moj-api.herokuapp.com/debits").then((function(t){c.setState({debits:t.data}),t.data.forEach((function(t){e+=t.amount})),c.setState({debitsTotal:e})})),D.a.get("https://moj-api.herokuapp.com/credits").then((function(t){c.setState({credits:t.data}),t.data.forEach((function(t){n+=t.amount})),c.setState({creditsTotal:n})})).then((function(){c.setState({accountBalance:(n-e).toFixed(2)})}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.accountBalance,n=this.state.debitsTotal;this.state.creditsTotal;return Object(m.jsx)(x.a,{basename:"/my-react-app",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(y,{accountBalance:t.state.accountBalance})}}),Object(m.jsx)(O.b,{exact:!0,path:"/userProfile",render:function(){return Object(m.jsx)(A,{userName:t.state.currentUser.userName,memberSince:t.state.currentUser.memberSince})}}),Object(m.jsx)(O.b,{exact:!0,path:"/login",render:function(){return Object(m.jsx)(w,{user:t.state.currentUser,mockLogIn:t.mockLogIn})}}),Object(m.jsx)(O.b,{exact:!0,path:"/debits",render:function(){return Object(m.jsx)(C,{debits:t.state.debits,updateDebits:t.updateDebits,creditsTotal:t.state.creditsTotal,debitsTotal:t.state.debitsTotal,accountBalance:t.state.accountBalance,updateAccountBalance:t.updateAccountBalance})}}),Object(m.jsx)(O.b,{exact:!0,path:"/credits",render:function(){return Object(m.jsx)(B,{credits:t.state.credits,updateCredits:t.updateCredits,creditsTotal:t.state.creditsTotal,debitsTotal:t.state.debitsTotal,accountBalance:t.state.accountBalance,updateAccountBalance:t.updateAccountBalance})}})]})})}}]),n}(c.Component),L=S,N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),N()}},[[70,1,2]]]);
//# sourceMappingURL=main.5f740622.chunk.js.map