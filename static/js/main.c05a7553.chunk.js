(this["webpackJsonpguliev-dev"]=this["webpackJsonpguliev-dev"]||[]).push([[0],[,,function(e,t,a){e.exports={header:"Header__header___3bMN6",header_nav:"Header__header_nav___1r_lG",nav:"Header__nav___3wxEr",header_button:"Header__header_button___bTi_U",active:"Header__active___1Z5Aq",button_top:"Header__button_top___3fkCv",button_mid:"Header__button_mid___169L2",button_bot:"Header__button_bot___30fG2",header_list:"Header__header_list___37DdA",header_item:"Header__header_item___2bNeJ",header_link:"Header__header_link___2CO_2"}},,,,,,,,,function(e,t,a){e.exports={block:"PortfolioItem__block___3HxwB",block_img:"PortfolioItem__block_img___3xedf",block_title:"PortfolioItem__block_title___zlQzh",block_img_box:"PortfolioItem__block_img_box___35oSw",block_text_content:"PortfolioItem__block_text_content___3q__P",block_info:"PortfolioItem__block_info___16tid",block_hashtags:"PortfolioItem__block_hashtags___yOY-l",clickThis:"PortfolioItem__clickThis___1mXT7"}},,,,,function(e,t,a){e.exports={block:"PortfolioContent__block___1hitG",block_wrapper:"PortfolioContent__block_wrapper___1l2Rn"}},,,,,,,function(e,t,a){e.exports={App:"App__App___wmyqV"}},,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/aurora.6b332b61.png"},function(e,t,a){e.exports=a.p+"static/media/kanban.9f2f78fd.png"},function(e,t,a){e.exports=a.p+"static/media/aqua.bdafa195.jpg"},function(e,t,a){e.exports=a.p+"static/media/leto.d5a359d1.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),c=a.n(r),l=(a(31),a(14)),i=a(12),_=a(23),s=a.n(_),u=a(5),m=a(6),h=a(8),b=a(7),p=a(9),d=a(2),f=a.n(d),g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleToggleBurgerMenu=function(){a.setState({burgerMenu:!a.state.burgerMenu})},a.state={burgerMenu:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.burgerMenu,t=f.a.header_button,a=null;return e&&(t+=" ".concat(f.a.active),a=o.a.createElement("nav",{className:f.a.header_nav},o.a.createElement("ul",{className:f.a.header_list},o.a.createElement("li",{className:f.a.header_item},o.a.createElement(l.b,{className:f.a.header_link,onClick:this.handleToggleBurgerMenu,to:"/"},"Home")),o.a.createElement("li",{className:f.a.header_item},o.a.createElement(l.b,{className:f.a.header_link,onClick:this.handleToggleBurgerMenu,to:"/about"},"About")),o.a.createElement("li",{className:f.a.header_item},o.a.createElement(l.b,{className:f.a.header_link,onClick:this.handleToggleBurgerMenu,to:"/portfolio"},"Portfolio"))))),o.a.createElement("header",{className:f.a.header},o.a.createElement("button",{onClick:this.handleToggleBurgerMenu,className:t,type:"button"},o.a.createElement("span",{className:f.a.button_top}),o.a.createElement("span",{className:f.a.button_mid}),o.a.createElement("span",{className:f.a.button_bot})),a)}}]),t}(n.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("section",null)}}]),t}(n.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"About")}}]),t}(n.Component),j=a(16),E=a.n(j),O=a(11),N=a.n(O),S=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("a",{href:this.props.href,target:"_blank",className:N.a.block},o.a.createElement("div",{className:N.a.block_img_box},o.a.createElement("img",{className:N.a.block_img,src:this.props.projectAvatar,alt:this.props.avatarAlt})),o.a.createElement("div",{className:N.a.block_text_content},o.a.createElement("h2",{className:N.a.block_title},this.props.projectName),o.a.createElement("p",{className:N.a.block_info},this.props.projectInfo),o.a.createElement("p",{className:N.a.block_hashtags},o.a.createElement("span",{className:N.a.block_hashtag},this.props.hashtags))))}}]),t}(n.Component),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={projects:[{id:5,name:"Aurora Streaming Solutions",href:"http://bk.auroraproduction.ru/",imgSrc:a(37),info:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u043b\u044d\u043d\u0434\u0438\u043d\u0433 \u0434\u043b\u044f \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u043e\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",hashtags:"#Gulp #PUG #SASS #JQuery #JavaScript #OnePageScroll"},{id:2,name:"\u041a\u0430\u043d\u0431\u0430\u043d-\u0434\u043e\u0441\u043a\u0430",href:"https://likeavenus.github.io/canban-test/",imgSrc:a(38),info:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0441\u0432\u043e\u044e \u043a\u0430\u043d\u0431\u0430\u043d \u0434\u043e\u0441\u043a\u0443, \u043d\u0430 \u0447\u0438\u0441\u0442\u043e\u043c JavaScript, \u0431\u0435\u0437 \u0431\u044d\u043a\u0435\u043d\u0434\u0430. \u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \u0412 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043c\u0435\u043d\u044f \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043b\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438.",hashtags:"#JavaScript #Drag'n'Drop"},{id:3,name:"\u0410\u043a\u0432\u0430\u041f\u043e\u043c\u043e\u0449\u044c",href:"https://www.aquapomosh.ru/",imgSrc:a(39),info:"\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b \u0441\u0430\u0439\u0442 \u043f\u043e \u0433\u043e\u0442\u043e\u0432\u043e\u043c\u0443 \u0434\u0438\u0437\u0430\u0439\u043d\u0443 \u0434\u043b\u044f \u0444\u0438\u0440\u043c\u044b \u043f\u043e \u0440\u0435\u043c\u043e\u043d\u0442\u0443 / \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044e \u0432\u043e\u0434\u043e\u0441\u043d\u0430\u0431\u0436\u0430\u044e\u0449\u0438\u0445 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043e\u0432 \u0434\u043b\u044f \u0447\u0430\u0441\u0442\u043d\u044b\u0445 \u0434\u043e\u043c\u043e\u0432",hashtags:"#Gulp #PUG #SASS #JQuery #JavaScript"},{id:4,name:"Leto",href:"https://likeavenus.github.io/Leto/",imgSrc:a(40),info:"\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043b \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f\u043c\u0438",hashtags:"#CSS Animations"}]},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.projects,t=[];return e.map((function(e){return t.push(o.a.createElement(S,{key:e.id,href:e.href,projectName:e.name,projectAvatar:e.imgSrc,avatarAlt:e.name,projectInfo:e.info,hashtags:e.hashtags}))})),o.a.createElement("div",{className:E.a.block},o.a.createElement("div",{className:E.a.block_wrapper},t),o.a.createElement("div",{className:E.a.block}))}}]),t}(n.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null))}}]),t}(n.Component),w=a(3);Object(w.a)();var A=function(){return o.a.createElement(l.a,null,o.a.createElement("div",{className:s.a.App},o.a.createElement(g,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:k}),o.a.createElement(i.a,{exact:!0,path:"/about",component:v}),o.a.createElement(i.a,{exact:!0,path:"/portfolio",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,1,2]]]);
//# sourceMappingURL=main.c05a7553.chunk.js.map