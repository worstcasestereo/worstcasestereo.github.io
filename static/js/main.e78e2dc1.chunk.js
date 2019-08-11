(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(7),r=t.n(l),c=(t(14),t(1)),o=t(2),m=t(4),i=t(3),d=t(5),u=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).event_timestamp=new Date(e.data.start_time),t.readable_date=t.event_timestamp.toLocaleString("en-us",{month:"short"})+". "+new Date(e.data.start_time).getDate(),t.is_passed=t.event_timestamp<Date.now()?1:0,t.is_passed_class=t.is_passed?"passed":"",t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row event "+this.is_passed_class},n.a.createElement("div",{className:"col-xs-12 col-md-2 date-event "},this.readable_date),n.a.createElement("div",{className:"col-xs-12 col-md-4 venue"},n.a.createElement("p",{className:"event-name"},this.props.data.title),n.a.createElement("p",{className:"event-description",dangerouslySetInnerHTML:{__html:this.props.data.venue.name}}),n.a.createElement("p",{className:"event-description",dangerouslySetInnerHTML:{__html:this.props.data.venue.address}})),n.a.createElement("div",{className:"col-xs-12 col-md-3 city"},this.props.data.venue.city),n.a.createElement("div",{className:"col-xs-12 col-md-3"},this.props.data.ticket_url&&!this.is_passed&&n.a.createElement("p",{className:"buy"},n.a.createElement("a",{href:this.props.data.ticket_url,target:"_blank",rel:"noopener noreferrer",className:"btn square inverse icon"},n.a.createElement("i",{className:"fa fa-ticket-alt"})," buy ticket"))))}}]),a}(s.Component),f=t(8),E=t.n(f),h=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={loaded:!1,displayPassed:!1,displayPassedText:"Afficher les concerts pr\xe9c\xe9dents",displayPassedClass:"hidden"},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/wcs-events.json",{}).then(function(e){return e.json()}).then(function(a){return e.setState({jsonData:a,loaded:!0})})}},{key:"renderCountdown",value:function(e){var a=e.days,t=e.hours,s=e.minutes,l=e.seconds;return n.a.createElement("div",{className:"row upcomming-events-list"},n.a.createElement("div",{className:"col-xs-12 text-center"},n.a.createElement("div",{className:"countdown",countdown:"true"},n.a.createElement("div",{className:"countdown-container days"},n.a.createElement("span",{className:"countdown-value days-bottom","data-days":!0},a),n.a.createElement("span",{className:"countdown-heading days-top"},"days")),n.a.createElement("div",{className:"countdown-container hours"},n.a.createElement("span",{className:"countdown-value hours-bottom","data-hours":!0},t),n.a.createElement("span",{className:"countdown-heading hours-top"},"hours")),n.a.createElement("div",{className:"countdown-container minutes"},n.a.createElement("span",{className:"countdown-value minutes-bottom","data-minutes":!0},s),n.a.createElement("span",{className:"countdown-heading minutes-top"},"minutes")),n.a.createElement("div",{className:"countdown-container seconds"},n.a.createElement("span",{className:"countdown-value seconds-bottom","data-seconds":!0},l),n.a.createElement("span",{className:"countdown-heading seconds-top"},"seconds")))))}},{key:"getFutureEvents",value:function(e){var a=Date.now();return e.filter(function(e){return Date.parse(e.start_time)>=a})}},{key:"getPastEvents",value:function(e){var a=Date.now();return e.filter(function(e){return Date.parse(e.start_time)<a})}},{key:"showHidePassedConcerts",value:function(e){this.state.displayPassed?this.setState({displayPassed:!1,displayPassedText:"Afficher les concerts pr\xe9c\xe9dents",displayPassedClass:"hidden"}):this.setState({displayPassed:!0,displayPassedText:"Masquer les concerts pr\xe9c\xe9dents",displayPassedClass:""}),e.preventDefault()}},{key:"render",value:function(){if(this.state.loaded)var e=this.getFutureEvents(this.state.jsonData),a=this.getPastEvents(this.state.jsonData);return n.a.createElement("section",{className:"section container-fluid full-width upcomming-events-list",id:"upcomingEvents"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"voffset70"}),n.a.createElement("div",{className:"title-wrapper"},n.a.createElement("h2",{className:"title"},"CONCERTS")),n.a.createElement("div",{className:"voffset80"}),this.state.loaded&&e.length>0&&n.a.createElement("div",null,n.a.createElement("div",{className:"row next-show"},n.a.createElement("div",{className:"col-xs-12"},n.a.createElement("div",{className:"title-wrapper"},n.a.createElement("h2",{className:"next-show-title"},"Next Show in")))),n.a.createElement("div",{className:"voffset20"}),n.a.createElement(E.a,{date:e[0].start_time,renderer:this.renderCountdown})),this.state.loaded&&0===e.length&&n.a.createElement("div",{className:"text-center"},"Aucun concert n'est pour le moment planifi\xe9..."),n.a.createElement("div",{className:"voffset50"}),n.a.createElement("div",{id:"events"},!this.state.loaded&&n.a.createElement("p",null,"Chargement des concerts..."),this.state.loaded&&e.map(function(e,a){return n.a.createElement(u,{data:e,key:a})})),n.a.createElement("div",{className:"voffset80"}),n.a.createElement("div",{className:"text-center voffset50"},n.a.createElement("a",{href:"#;",onClick:this.showHidePassedConcerts.bind(this),rel:"noopener noreferrer",className:"btn square inverse"},this.state.displayPassedText)),n.a.createElement("div",{id:"events",className:this.state.displayPassedClass},!this.state.loaded&&n.a.createElement("p",null,"Chargement des concerts..."),this.state.loaded&&a.map(function(e,a){return n.a.createElement(u,{data:e,key:a})})),n.a.createElement("div",{className:"voffset50"})))}}]),a}(s.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{id:"jHeader"},n.a.createElement("nav",{className:"navbar navbar-default ",role:"navigation"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-ex1-collapse"},n.a.createElement("span",{className:"sr-only"},"Open navigation"),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"}))),n.a.createElement("div",{className:"collapse navbar-collapse navbar-ex1-collapse",id:"navbar-muziq"},n.a.createElement("ul",{className:"nav navbar-nav navbar-right"},n.a.createElement("li",{className:"active"},n.a.createElement("a",{href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#latestAlbum"},"A L\u2019ECOUTE")),n.a.createElement("li",null,n.a.createElement("a",{href:"#about"},"BIOGRAPHIE")),n.a.createElement("li",null,n.a.createElement("a",{href:"#upcomingEvents"},"CONCERTS")),n.a.createElement("li",null,n.a.createElement("a",{href:"#anchor08"},"CONTACT")),n.a.createElement("li",{className:"social-logo"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-facebook"}))),n.a.createElement("li",{className:"social-logo"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-instagram"}))),n.a.createElement("li",{className:"social-logo"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.twitter.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-twitter"}))),n.a.createElement("li",{className:"social-logo"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://soundcloud.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-soundcloud"})))))))}}]),a}(s.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"intro full-width jIntro",id:"home"},n.a.createElement("div",{id:"intro-carousel",className:"carousel slide carousel-fade","data-pause":"true"},n.a.createElement("div",{className:"carousel-inner",role:"listbox"},n.a.createElement("div",{className:"item active intro-fullscreen"},n.a.createElement("div",{className:"fill",style:{backgroundImage:"url('images/splash/worst-case-stereo-band-01.jpg')"}}),n.a.createElement("div",{className:"carousel-caption intro-center"},n.a.createElement("h1",{"data-animation":"animated fadeIn",className:"primary-title"},n.a.createElement("span",null,"Worst Case Stereo")),n.a.createElement("div",{id:"chevron-scroll-down",className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("i",{className:"fa fa-chevron-circle-down"}))))))))}}]),a}(s.Component),N=(s.Component,function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section latest-album",id:"latestAlbum"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:""},n.a.createElement("div",{className:"voffset70"}),n.a.createElement("div",{className:"title-wrapper"},n.a.createElement("h2",{className:"title"},"A L\u2019ECOUTE")),n.a.createElement("div",{className:"voffset80"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10 col-md-offset-1"},n.a.createElement("iframe",{title:"Bad Omens",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605463216&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),n.a.createElement("div",{className:"voffset40"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10 col-md-offset-1"},n.a.createElement("iframe",{title:"Pills",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/534429711&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),n.a.createElement("div",{className:"voffset40"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10 col-md-offset-1"},n.a.createElement("iframe",{title:"Aim for the Heart",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497003118&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),n.a.createElement("div",{className:"voffset40"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10 col-md-offset-1"},n.a.createElement("iframe",{title:"Hello",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/433091274&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),n.a.createElement("div",{className:"voffset70"})))}}]),a}(s.Component)),w=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section container-fluid full-width biography",id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-md-3 col-md-offset-1 biography-description"},n.a.createElement("h2",{className:"title inverse"},"biographie"),n.a.createElement("div",{className:"voffset40"}),n.a.createElement("blockquote",{className:"cousine"},'"Worst Case Stereo va droit au but.',n.a.createElement("br",null),"Les premiers morceaux d\xe9voil\xe9s affichent une efficacit\xe9 \xe0 toute \xe9preuve, fusionnant \xe0 loisir les m\xe9lodies du rock alternatif \xe0 une certaine furie qu\u2019on pense h\xe9rit\xe9e de l\u2019emo.",n.a.createElement("br",null),"Une d\xe9sinvolture notamment mise en avant par une voix polymorphe, n\u2019h\xe9sitant pas \xe0 passer de lignes claires \xe0 satur\xe9es, allant m\xeame jusqu\u2019\xe0 titiller le parler-chanter cher au post hardcore d\u2019At The Drive In. Ajoutez-y des riffs largement inspir\xe9s par (et non pas copi\xe9s sur) le grunge, et vous obtiendrez une formation on ne peut plus prometteuse.",n.a.createElement("br",null),'A surveiller, dans le meilleur des cas."',n.a.createElement("br",null)),n.a.createElement("p",{className:"cousine bio-author"},"- Cl\xe9ment Duboscq (New Noise / FIP)"),n.a.createElement("p",null,"\xa0"),n.a.createElement("h2",null,"Lineup: ",n.a.createElement("small",{className:"info"},"(de gauche \xe0 droite)")),n.a.createElement("p",{className:"cousine"},"Mathilde (chant)",n.a.createElement("br",null),"Nico (batterie)",n.a.createElement("br",null),"Thomas (basse)",n.a.createElement("br",null),"Julien (guitare)",n.a.createElement("br",null)),n.a.createElement("p",null,"\xa0"),n.a.createElement("p",null,n.a.createElement("a",{href:"https://drive.google.com/drive/folders/1WUy5cikcI-7bwWGLgQFBtIpk1i3EnjAM",className:"btn square",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fa fa-file-pdf"})," Media & fiche technique"))),n.a.createElement("div",{className:"col-xs-12 col-md-7 col-sm-offset-1 biography-image"})))}}]),a}(s.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"section inverse-color contact",id:"anchor08"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 col-md-offset-2"},n.a.createElement("div",{className:"voffset70"}),n.a.createElement("div",{className:"title-wrapper"},n.a.createElement("h2",{className:"title inverse"},"CONTACT")),n.a.createElement("div",{className:"voffset80"}))),n.a.createElement("hr",{className:"hidden-xs"}),n.a.createElement("div",{className:"row no-gutter"},n.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},n.a.createElement("div",{className:"voffset40"}),n.a.createElement("h2",{className:"title-follow"},"LOCALISATION"),n.a.createElement("div",{className:"voffset40"}),n.a.createElement("p",{className:"name"},n.a.createElement("i",{className:"fa fa-location-arrow"})," Paris, France"),n.a.createElement("p",{className:"phone"},n.a.createElement("i",{className:"fa fa-globe-americas"})," Travel worldwide"),n.a.createElement("div",{className:"voffset40"})),n.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},n.a.createElement("div",{className:"voffset40"}),n.a.createElement("h2",{className:"title-follow"},"TELEPHONE"),n.a.createElement("div",{className:"voffset40"}),n.a.createElement("p",{className:"name"},"Nicolas"),n.a.createElement("p",{className:"phone"},n.a.createElement("a",{href:"tel:+33683196902"},n.a.createElement("i",{className:"fa fa-mobile-alt"})," +33 6 83 19 69 02")),n.a.createElement("div",{className:"voffset20"}),n.a.createElement("p",{className:"name"},"Thomas"),n.a.createElement("p",{className:"phone"},n.a.createElement("a",{href:"tel:+33687256091"},n.a.createElement("i",{className:"fa fa-mobile-alt"})," +33 6 87 25 60 91")),n.a.createElement("div",{className:"voffset40"})),n.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},n.a.createElement("div",{className:"voffset40"}),n.a.createElement("h2",{className:"title-follow"},"EMAIL"),n.a.createElement("div",{className:"voffset40"}),n.a.createElement("p",{className:"email"},n.a.createElement("a",{href:"https://www.messenger.com/t/worstcasestereo",target:"_blank",rel:"noopener noreferrer",className:"btn square icon"},n.a.createElement("i",{className:"fab fa-facebook-messenger"})," Contactez-nous")),n.a.createElement("div",{className:"voffset40"})),n.a.createElement("div",{className:"voffset40"})),n.a.createElement("hr",{className:"hidden-xs"}),n.a.createElement("div",{className:"row social"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-facebook"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-instagram"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.twitter.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-twitter"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://soundcloud.com/worstcasestereo"},n.a.createElement("i",{className:"fab fa-soundcloud"})))))}}]),a}(s.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(v,null),n.a.createElement(N,null),n.a.createElement(w,null),n.a.createElement(h,null),n.a.createElement(b,null))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.e78e2dc1.chunk.js.map