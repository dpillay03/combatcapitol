(this["webpackJsonpcombat-capitol"]=this["webpackJsonpcombat-capitol"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/combat_capitol_logo.60912907.png"},32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},55:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(29),i=a.n(l),r=(a(37),a(2)),s=a(3),o=a(5),m=a(4),u=a(7),d=a(9),g=a.n(d),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).TopStoriesPage=function(e){g.a.get("https://newsapi.org/v2/everything?q=mma+boxing+wrestling+bjj&apiKey=4418706137bb4eac83503f80399fcfc5").then((function(e){return e.data.articles.map((function(e){return{image:"".concat(e.urlToImage),date:"".concat(e.publishedAt),title:"".concat(e.title),url:"".concat(e.url),source:"".concat(e.source.name),description:"".concat(e.description)}}))})).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}))},n.state={articles:[],isLoading:!0,errors:null},n.TopStoriesPage=n.TopStoriesPage.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.TopStoriesPage()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.articles;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Top Stories in Combat Sports"),c.a.createElement("div",{className:"article"},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.date,a=e.title,n=e.url,l=e.image,i=e.source,r=e.description;return c.a.createElement("a",{key:a,href:n},c.a.createElement("div",{className:"article-container"},"null"!==e.image?c.a.createElement("img",{className:"article-image",src:l,alt:a}):c.a.createElement("img",{className:"article-image",src:"https://i.ibb.co/RvVv7Dt/2.png",alt:"no image"}),c.a.createElement("div",{className:"source-date-container"},c.a.createElement("div",{className:"source-div"},c.a.createElement("p",{className:"article-source"},i)),c.a.createElement("div",null,c.a.createElement("p",{className:"article-date"},t))),c.a.createElement("p",{className:"article-title"},a),c.a.createElement("p",{className:"article-description"},r)))}))))}}]),a}(c.a.Component),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null))}}]),a}(c.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getAllMMA=function(e){g.a.get("https://newsapi.org/v2/everything?q=mma&apiKey=4418706137bb4eac83503f80399fcfc5").then((function(e){return e.data.articles.map((function(e){return{image:"".concat(e.urlToImage),date:"".concat(e.publishedAt),title:"".concat(e.title),url:"".concat(e.url),source:"".concat(e.source.name),description:"".concat(e.description)}}))})).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}))},n.state={articles:[],isLoading:!0,errors:null},n.getAllMMA=n.getAllMMA.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getAllMMA()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.articles;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Mixed Martial Arts News"),c.a.createElement("div",{className:"article"},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.date,a=e.title,n=e.url,l=e.image,i=e.source,r=e.description;return c.a.createElement("a",{key:a,href:n},c.a.createElement("div",{className:"article-container"},"null"!==e.image?c.a.createElement("img",{className:"article-image",src:l,alt:a}):c.a.createElement("img",{className:"article-image",src:"https://i.ibb.co/RvVv7Dt/2.png",alt:"no image"}),c.a.createElement("div",{className:"source-date-container"},c.a.createElement("div",{className:"source-div"},c.a.createElement("p",{className:"article-source"},i)),c.a.createElement("div",null,c.a.createElement("p",{className:"article-date"},t))),c.a.createElement("p",{className:"article-title"},a),c.a.createElement("p",{className:"article-description"},r)))}))))}}]),a}(c.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getAllBoxing=function(e){g.a.get("https://newsapi.org/v2/everything?q=boxing&apiKey=4418706137bb4eac83503f80399fcfc5").then((function(e){return e.data.articles.map((function(e){return{image:"".concat(e.urlToImage),date:"".concat(e.publishedAt),title:"".concat(e.title),url:"".concat(e.url),source:"".concat(e.source.name),description:"".concat(e.description)}}))})).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}))},n.state={articles:[],isLoading:!0,errors:null},n.getAllBoxing=n.getAllBoxing.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getAllBoxing()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.articles;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Boxing News"),c.a.createElement("div",{className:"article"},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.date,a=e.title,n=e.url,l=e.image,i=e.source,r=e.description;return c.a.createElement("a",{key:a,href:n},c.a.createElement("div",{className:"article-container"},"null"!==e.image?c.a.createElement("img",{className:"article-image",src:l,alt:a}):c.a.createElement("img",{className:"article-image",src:"https://i.ibb.co/RvVv7Dt/2.png",alt:"no image"}),c.a.createElement("div",{className:"source-date-container"},c.a.createElement("div",{className:"source-div"},c.a.createElement("p",{className:"article-source"},i)),c.a.createElement("div",null,c.a.createElement("p",{className:"article-date"},t))),c.a.createElement("p",{className:"article-title"},a),c.a.createElement("p",{className:"article-description"},r)))}))))}}]),a}(c.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getAllWrestling=function(e){g.a.get("https://newsapi.org/v2/everything?q=ncaa+wrestling&apiKey=4418706137bb4eac83503f80399fcfc5").then((function(e){return e.data.articles.map((function(e){return{image:"".concat(e.urlToImage),date:"".concat(e.publishedAt),title:"".concat(e.title),url:"".concat(e.url),source:"".concat(e.source.name),description:"".concat(e.description)}}))})).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}))},n.state={articles:[],isLoading:!0,errors:null},n.getAllWrestling=n.getAllWrestling.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getAllWrestling()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.articles;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Wrestling News"),c.a.createElement("div",{className:"article"},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.date,a=e.title,n=e.url,l=e.image,i=e.source,r=e.description;return c.a.createElement("a",{key:a,href:n},c.a.createElement("div",{className:"article-container"},"null"!==e.image?c.a.createElement("img",{className:"article-image",src:l,alt:a}):c.a.createElement("img",{className:"article-image",src:"https://i.ibb.co/RvVv7Dt/2.png",alt:"no image"}),c.a.createElement("div",{className:"source-date-container"},c.a.createElement("div",{className:"source-div"},c.a.createElement("p",{className:"article-source"},i)),c.a.createElement("div",null,c.a.createElement("p",{className:"article-date"},t))),c.a.createElement("p",{className:"article-title"},a),c.a.createElement("p",{className:"article-description"},r)))}))))}}]),a}(c.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getAllMuayThai=function(e){g.a.get("https://newsapi.org/v2/everything?q=muay+thai&apiKey=4418706137bb4eac83503f80399fcfc5").then((function(e){return e.data.articles.map((function(e){return{image:"".concat(e.urlToImage),date:"".concat(e.publishedAt),title:"".concat(e.title),url:"".concat(e.url),source:"".concat(e.source.name),description:"".concat(e.description)}}))})).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}))},n.state={articles:[],isLoading:!0,errors:null},n.getAllMuayThai=n.getAllMuayThai.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getAllMuayThai()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.articles;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Muay Thai News"),c.a.createElement("div",{className:"article"},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.date,a=e.title,n=e.url,l=e.image,i=e.source,r=e.description;return c.a.createElement("a",{key:a,href:n},c.a.createElement("div",{className:"article-container"},"null"!==e.image?c.a.createElement("img",{className:"article-image",src:l,alt:a}):c.a.createElement("img",{className:"article-image",src:"https://i.ibb.co/RvVv7Dt/2.png",alt:"no image"}),c.a.createElement("div",{className:"source-date-container"},c.a.createElement("div",{className:"source-div"},c.a.createElement("p",{className:"article-source"},i)),c.a.createElement("div",null,c.a.createElement("p",{className:"article-date"},t))),c.a.createElement("p",{className:"article-title"},a),c.a.createElement("p",{className:"article-description"},r)))}))))}}]),a}(c.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getAllJudo=function(e){g.a.get("https://newsapi.org/v2/everything?q=judo&apiKey=4418706137bb4eac83503f80399fcfc5").then((function(e){return e.data.articles.map((function(e){return{image:"".concat(e.urlToImage),date:"".concat(e.publishedAt),title:"".concat(e.title),url:"".concat(e.url),source:"".concat(e.source.name),description:"".concat(e.description)}}))})).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}))},n.state={articles:[],isLoading:!0,errors:null},n.getAllJudo=n.getAllJudo.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getAllJudo()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.articles;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Judo News"),c.a.createElement("div",{className:"article"},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.date,a=e.title,n=e.url,l=e.image,i=e.source,r=e.description;return c.a.createElement("a",{key:a,href:n},c.a.createElement("div",{className:"article-container"},"null"!==e.image?c.a.createElement("img",{className:"article-image",src:l,alt:a}):c.a.createElement("img",{className:"article-image",src:"https://i.ibb.co/RvVv7Dt/2.png",alt:"no image"}),c.a.createElement("div",{className:"source-date-container"},c.a.createElement("div",{className:"source-div"},c.a.createElement("p",{className:"article-source"},i)),c.a.createElement("div",null,c.a.createElement("p",{className:"article-date"},t))),c.a.createElement("p",{className:"article-title"},a),c.a.createElement("p",{className:"article-description"},r)))}))))}}]),a}(c.a.Component),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getAllJiuJitsu=function(e){g.a.get("https://newsapi.org/v2/everything?q=brazilian+jiu+jitsu&apiKey=4418706137bb4eac83503f80399fcfc5").then((function(e){return e.data.articles.map((function(e){return{image:"".concat(e.urlToImage),date:"".concat(e.publishedAt),title:"".concat(e.title),url:"".concat(e.url),source:"".concat(e.source.name),description:"".concat(e.description)}}))})).then((function(e){n.setState({articles:e,isLoading:!1})})).catch((function(e){return n.setState({error:e,isLoading:!1})}))},n.state={articles:[],isLoading:!0,errors:null},n.getAllJiuJitsu=n.getAllJiuJitsu.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getAllJiuJitsu()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.articles;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Jiu Jitsu News"),c.a.createElement("div",{className:"article"},t?c.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.date,a=e.title,n=e.url,l=e.image,i=e.source,r=e.description;return c.a.createElement("a",{key:a,href:n},c.a.createElement("div",{className:"article-container"},"null"!==e.image?c.a.createElement("img",{className:"article-image",src:l,alt:a}):c.a.createElement("img",{className:"article-image",src:"https://i.ibb.co/RvVv7Dt/2.png",alt:"no image"}),c.a.createElement("div",{className:"source-date-container"},c.a.createElement("div",{className:"source-div"},c.a.createElement("p",{className:"article-source"},i)),c.a.createElement("div",null,c.a.createElement("p",{className:"article-date"},t))),c.a.createElement("p",{className:"article-title"},a),c.a.createElement("p",{className:"article-description"},r)))}))))}}]),a}(c.a.Component),y=a(8),O=a(1),A=a(30),M=a.n(A),L=(a(55),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={showMenu:!1},e.showMenu=e.showMenu.bind(Object(u.a)(e)),e}return Object(s.a)(a,[{key:"showMenu",value:function(e){e.preventDefault(),this.setState({showMenu:!this.state.showMenu})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,null,c.a.createElement("div",null,c.a.createElement("div",{class:"menu-container"},c.a.createElement("a",{href:"https://combatcapital.com"},c.a.createElement("img",{src:M.a,id:"logo",alt:"the combat capital logo"}))),c.a.createElement("div",{className:"main-menu"},c.a.createElement("nav",{className:"main-menu-nav"},c.a.createElement("ul",{className:"main-menu-ul"},c.a.createElement("li",{className:"main-menu-li"},c.a.createElement(y.b,{to:"/"},"Home")),c.a.createElement("li",{className:"main-menu-li"},c.a.createElement(y.b,{to:"/mma"},"MMA")),c.a.createElement("li",{className:"main-menu-li"},c.a.createElement(y.b,{to:"/jiu-jitsu"},"Jiu Jitsu")),c.a.createElement("li",{className:"main-menu-li"},c.a.createElement(y.b,{to:"/boxing"},"Boxing")),c.a.createElement("li",{className:"main-menu-li"},c.a.createElement(y.b,{to:"/wrestling"},"Wrestling")),c.a.createElement("li",{className:"main-menu-li"},c.a.createElement(y.b,{to:"/muay-thai"},"Muay Thai")),c.a.createElement("li",{className:"main-menu-li"},c.a.createElement(y.b,{to:"/judo"},"Judo")))),c.a.createElement("div",{id:"hamburger",onClick:this.showMenu,tabindex:"1"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),this.state.showMenu?c.a.createElement("nav",{id:"mobile-menu-nav"},c.a.createElement("ul",{id:"mobile-ul-nav"},c.a.createElement("li",{className:"mobile-menu-li"},c.a.createElement(y.b,{to:"/"},"Home")),c.a.createElement("li",{className:"mobile-menu-li"},c.a.createElement(y.b,{to:"/mma"},"Mixed Martial Arts")),c.a.createElement("li",{className:"mobile-menu-li"},c.a.createElement(y.b,{to:"/jiu-jitsu"},"Jiu Jitsu")),c.a.createElement("li",{className:"mobile-menu-li"},c.a.createElement(y.b,{to:"/boxing"},"Boxing")),c.a.createElement("li",{className:"mobile-menu-li"},c.a.createElement(y.b,{to:"/wrestling"},"Wrestling")),c.a.createElement("li",{className:"mobile-menu-li"},c.a.createElement(y.b,{to:"/muay-thai"},"Muay Thai")),c.a.createElement("li",{className:"mobile-menu-li"},c.a.createElement(y.b,{to:"/judo"},"Judo")))):null),c.a.createElement("div",{class:"clearfix"}),c.a.createElement("div",null),c.a.createElement(O.a,{exact:!0,path:"/",component:E}),c.a.createElement(O.a,{path:"/mma",component:h}),c.a.createElement(O.a,{path:"/boxing",component:v}),c.a.createElement(O.a,{path:"/wrestling",component:b}),c.a.createElement(O.a,{path:"/muay-thai",component:f}),c.a.createElement(O.a,{path:"/judo",component:N}),c.a.createElement(O.a,{path:"/jiu-jitsu",component:j}))))}}]),a}(c.a.Component)),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(L,null))}}]),a}(c.a.Component);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.dd13af22.chunk.js.map