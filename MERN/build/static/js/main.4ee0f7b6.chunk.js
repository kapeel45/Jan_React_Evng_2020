(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var a=i(0),u=i.n(a),n=i(8),r=i.n(n),o=i(1),s=i(2),l=i(4),m=i(3),c=i(5),d=(i(14),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={title:"React App",keywords:"User text here"},e}return Object(c.a)(t,e),Object(s.a)(t,[{key:"inputChange",value:function(e){this.setState({keywords:e.target.value?e.target.value:"User text here"}),this.props.userText(e.target.value)}},{key:"render",value:function(){return u.a.createElement("header",null,u.a.createElement("div",{className:"logo",onClick:function(){console.log("hiii")}},this.state.title),u.a.createElement("center",null,u.a.createElement("input",{onChange:this.inputChange.bind(this)})),u.a.createElement("p",{className:"uin"},this.state.keywords))}}]),t}(a.Component)),p=function(e){var t=e.newsDB.map((function(e,t){return u.a.createElement("div",{key:t},u.a.createElement("h3",null,e.title),u.a.createElement("div",null,e.feed))}));return u.a.createElement("div",null,t)},v=i(6),f=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={news:v,filtered:v},i}return Object(c.a)(t,e),Object(s.a)(t,[{key:"filterNews",value:function(e){var t=this.state.news.filter((function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1||t.feed.toLowerCase().indexOf(e.toLowerCase())>-1}));this.setState({filtered:t})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(d,{userText:function(t){return e.filterNews(t)}}),u.a.createElement(p,{newsDB:this.state.filtered}))}}]),t}(a.Component);r.a.render(u.a.createElement(f,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"title":"New ES6 upgrade available $","feed":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},{"id":2,"title":"The importance of & REACT in the development","feed":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},{"id":3,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":4,"title":"Say what again. I dare you,...x","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":5,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":6,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}]')},9:function(e,t,i){e.exports=i(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4ee0f7b6.chunk.js.map