(this.webpackJsonpworstcasestereo=this.webpackJsonpworstcasestereo||[]).push([[0],{14:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),r=t(7),n=t.n(r),c=(t(14),t(1)),o=t(2),m=t(4),i=t(3),d=t(5),u=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).event_timestamp=new Date(e.data.start_time),t.readable_date=t.event_timestamp.toLocaleString("en-us",{month:"short"})+". "+new Date(e.data.start_time).getDate(),t.is_passed=t.event_timestamp<Date.now()?1:0,t.is_passed_class=t.is_passed?"passed":"",t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row event "+this.is_passed_class},l.a.createElement("div",{className:"col-xs-12 col-md-2 date-event "},this.readable_date),l.a.createElement("div",{className:"col-xs-12 col-md-4 venue"},l.a.createElement("p",{className:"event-name"},this.props.data.title),l.a.createElement("p",{className:"event-description",dangerouslySetInnerHTML:{__html:this.props.data.venue.name}}),l.a.createElement("p",{className:"event-description",dangerouslySetInnerHTML:{__html:this.props.data.venue.address}})),l.a.createElement("div",{className:"col-xs-12 col-md-2 city"},this.props.data.venue.city),l.a.createElement("div",{className:"col-xs-12 col-md-2"},this.props.data.ticket_url&&!this.is_passed&&l.a.createElement("p",{className:"buy"},l.a.createElement("a",{href:this.props.data.ticket_url,target:"_blank",rel:"noopener noreferrer",className:"btn square inverse icon"},l.a.createElement("i",{className:"fa fa-ticket-alt"})," buy ticket"))),l.a.createElement("div",{className:"col-xs-12 col-md-2"},this.props.data.fb_event_url&&!this.is_passed&&l.a.createElement("p",{className:"buy"},l.a.createElement("a",{href:this.props.data.fb_event_url,target:"_blank",rel:"noopener noreferrer",className:"btn square inverse icon"},l.a.createElement("i",{className:"fab fa-facebook-square"})," RSVP"))))}}]),a}(s.Component),f=t(8),E=t.n(f),p=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={loaded:!1,displayPassed:!1,displayPassedText:"Voir les derniers concerts",displayPassedClass:"hidden"},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/wcs-events.json",{}).then((function(e){return e.json()})).then((function(a){return e.setState({jsonData:a,loaded:!0})}))}},{key:"renderCountdown",value:function(e){var a=e.days,t=e.hours,s=e.minutes,r=e.seconds;return l.a.createElement("div",{className:"row upcomming-events-list"},l.a.createElement("div",{className:"col-xs-12 text-center"},l.a.createElement("div",{className:"countdown",countdown:"true"},l.a.createElement("div",{className:"countdown-container days"},l.a.createElement("span",{className:"countdown-value days-bottom","data-days":!0},a),l.a.createElement("span",{className:"countdown-heading days-top"},"days")),l.a.createElement("div",{className:"countdown-container hours"},l.a.createElement("span",{className:"countdown-value hours-bottom","data-hours":!0},t),l.a.createElement("span",{className:"countdown-heading hours-top"},"hours")),l.a.createElement("div",{className:"countdown-container minutes"},l.a.createElement("span",{className:"countdown-value minutes-bottom","data-minutes":!0},s),l.a.createElement("span",{className:"countdown-heading minutes-top"},"minutes")),l.a.createElement("div",{className:"countdown-container seconds"},l.a.createElement("span",{className:"countdown-value seconds-bottom","data-seconds":!0},r),l.a.createElement("span",{className:"countdown-heading seconds-top"},"seconds")))))}},{key:"getFutureEvents",value:function(e){var a=Date.now();return e.filter((function(e){return Date.parse(e.start_time)>=a}))}},{key:"getPastEvents",value:function(e){var a=Date.now();return e.filter((function(e){return Date.parse(e.start_time)<a}))}},{key:"showHidePassedConcerts",value:function(e){this.state.displayPassed?this.setState({displayPassed:!1,displayPassedText:"Voir les derniers concerts",displayPassedClass:"hidden"}):this.setState({displayPassed:!0,displayPassedText:"Masquer les derniers concerts",displayPassedClass:""}),e.preventDefault()}},{key:"render",value:function(){if(this.state.loaded)var e=this.getFutureEvents(this.state.jsonData),a=this.getPastEvents(this.state.jsonData);return l.a.createElement("section",{className:"section container-fluid full-width upcomming-events-list",id:"upcomingEvents"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"voffset70"}),l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",{className:"title"},"CONCERTS")),l.a.createElement("div",{className:"voffset80"}),this.state.loaded&&e.length>0&&l.a.createElement("div",null,l.a.createElement("div",{className:"row next-show"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",{className:"next-show-title"},"Next Show in")))),l.a.createElement("div",{className:"voffset20"}),l.a.createElement(E.a,{date:e[0].start_time,renderer:this.renderCountdown})),this.state.loaded&&0===e.length&&l.a.createElement("div",{className:"text-center"},"Aucun concert n'est pour le moment planifi\xe9..."),l.a.createElement("div",{className:"voffset50"}),l.a.createElement("div",{id:"events"},!this.state.loaded&&l.a.createElement("p",null,"Chargement des concerts..."),this.state.loaded&&e.map((function(e,a){return l.a.createElement(u,{data:e,key:a})}))),l.a.createElement("div",{className:"voffset80"}),l.a.createElement("div",{className:"text-center voffset50"},l.a.createElement("a",{href:"#;",onClick:this.showHidePassedConcerts.bind(this),rel:"noopener noreferrer",className:"btn square inverse"},this.state.displayPassedText)),l.a.createElement("div",{id:"events",className:this.state.displayPassedClass},!this.state.loaded&&l.a.createElement("p",null,"Chargement des concerts..."),this.state.loaded&&a.map((function(e,a){return l.a.createElement(u,{data:e,key:a})}))),l.a.createElement("div",{className:"voffset50"})))}}]),a}(s.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{id:"jHeader"},l.a.createElement("nav",{className:"navbar navbar-default ",role:"navigation"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-ex1-collapse"},l.a.createElement("span",{className:"sr-only"},"Open navigation"),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}))),l.a.createElement("div",{className:"collapse navbar-collapse navbar-ex1-collapse",id:"navbar-muziq"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",{className:"active"},l.a.createElement("a",{href:"#home"},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:"#latestVideo"},"VIDEOS")),l.a.createElement("li",null,l.a.createElement("a",{href:"#latestAlbum"},"A L\u2019ECOUTE")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"PR\xc9SENTATION")),l.a.createElement("li",null,l.a.createElement("a",{href:"#upcomingEvents"},"CONCERTS")),l.a.createElement("li",null,l.a.createElement("a",{href:"#anchor08"},"CONTACT")),l.a.createElement("li",{className:"social-logo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-facebook"}))),l.a.createElement("li",{className:"social-logo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-instagram"}))),l.a.createElement("li",{className:"social-logo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.twitter.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-twitter"}))),l.a.createElement("li",{className:"social-logo"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://soundcloud.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-soundcloud"})))))))}}]),a}(s.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"intro full-width jIntro",id:"home"},l.a.createElement("div",{id:"intro-carousel",className:"carousel slide carousel-fade","data-pause":"true"},l.a.createElement("div",{className:"carousel-inner",role:"listbox"},l.a.createElement("div",{className:"item active intro-fullscreen"},l.a.createElement("div",{className:"fill",style:{backgroundImage:"url('images/splash/worst-case-stereo-band-01.jpg')"}}),l.a.createElement("div",{className:"carousel-caption intro-center"},l.a.createElement("h1",{"data-animation":"animated fadeIn",className:"primary-title"},l.a.createElement("span",null,"Worst Case Stereo")),l.a.createElement("div",{id:"chevron-scroll-down",className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("i",{className:"fa fa-chevron-circle-down"}))))))))}}]),a}(s.Component),N=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"section latest-album",id:"latestAlbum"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"voffset70"}),l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",{className:"title"},"A L\u2019ECOUTE")),l.a.createElement("div",{className:"voffset80"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"info-album"},l.a.createElement("div",{className:"cover"},l.a.createElement("img",{src:"images/albums/EP-a-place-to-call-your-own.jpg",alt:"A place to call your own"})),l.a.createElement("p",{className:"album album-list"},"A place to call your own"),l.a.createElement("p",{className:"artist"},"Worst Case Stereo"),l.a.createElement("div",{className:"voffset20"}),l.a.createElement("p",{className:"description"},"Premier EP (2019)"),l.a.createElement("div",{className:"voffset20"}),l.a.createElement("ul",{className:"links"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://open.spotify.com/album/0csynpBznhWqiflYoKZupE"},"spotify")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.deezer.com/fr/album/109281052"},"deezer")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://music.apple.com/fr/album/a-place-to-call-your-own-ep/1478342744?fbclid=IwAR3_Qz1UX5Uma-hS8L3twogrmiOlmy4Q6wm1NFOG4ijYwf5Mlh7vz5U-3eE"},"itunes"))),l.a.createElement("div",{className:"voffset80"}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("iframe",{title:"Aim for the Heart",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497003118&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),l.a.createElement("div",{className:"voffset20"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("iframe",{title:"The place is dead",width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/670731107&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),l.a.createElement("div",{className:"voffset20"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("iframe",{title:"Pills",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/534429711&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),l.a.createElement("div",{className:"voffset20"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("iframe",{title:"Bad Omens",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605463216&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))),l.a.createElement("div",{className:"voffset70"})))))}}]),a}(s.Component),w=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"section container-fluid full-width biography",id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-md-3 col-md-offset-1 biography-description"},l.a.createElement("h2",{className:"title inverse"},"pr\xe9sentation"),l.a.createElement("div",{className:"voffset40"}),l.a.createElement("blockquote",{className:"cousine"},'"Worst Case Stereo va droit au but.',l.a.createElement("br",null),"Les premiers morceaux d\xe9voil\xe9s affichent une efficacit\xe9 \xe0 toute \xe9preuve, fusionnant \xe0 loisir les m\xe9lodies du rock alternatif \xe0 une certaine furie qu\u2019on pense h\xe9rit\xe9e de l\u2019emo.",l.a.createElement("br",null),"Une d\xe9sinvolture notamment mise en avant par une voix polymorphe, n\u2019h\xe9sitant pas \xe0 passer de lignes claires \xe0 satur\xe9es, allant m\xeame jusqu\u2019\xe0 titiller le parler-chanter cher au post hardcore d\u2019At The Drive In. Ajoutez-y des riffs largement inspir\xe9s par (et non pas copi\xe9s sur) le grunge, et vous obtiendrez une formation on ne peut plus prometteuse.",l.a.createElement("br",null),'A surveiller, dans le meilleur des cas."',l.a.createElement("br",null)),l.a.createElement("p",{className:"cousine bio-author"},"- Cl\xe9ment Duboscq (New Noise / FIP)"),l.a.createElement("p",null,"\xa0"),l.a.createElement("h2",null,"Lineup: ",l.a.createElement("small",{className:"info"},"(de gauche \xe0 droite)")),l.a.createElement("p",{className:"cousine"},"Mathilde (chant)",l.a.createElement("br",null),"Nico (batterie)",l.a.createElement("br",null),"Thomas (basse)",l.a.createElement("br",null),"Julien (guitare)",l.a.createElement("br",null)),l.a.createElement("p",null,"\xa0")),l.a.createElement("div",{className:"col-xs-12 col-md-7 col-sm-offset-1 biography-image"})))}}]),a}(s.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"section inverse-color contact",id:"anchor08"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2"},l.a.createElement("div",{className:"voffset70"}),l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",{className:"title inverse"},"CONTACT")),l.a.createElement("div",{className:"voffset80"}))),l.a.createElement("hr",{className:"hidden-xs"}),l.a.createElement("div",{className:"row no-gutter"},l.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},l.a.createElement("div",{className:"voffset40"}),l.a.createElement("h2",{className:"title-follow"},"LOCALISATION"),l.a.createElement("div",{className:"voffset40"}),l.a.createElement("p",{className:"name"},l.a.createElement("i",{className:"fa fa-location-arrow"})," Paris, France"),l.a.createElement("p",{className:"phone"},l.a.createElement("i",{className:"fa fa-globe-americas"})," Travel worldwide"),l.a.createElement("div",{className:"voffset40"})),l.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},l.a.createElement("div",{className:"voffset40"}),l.a.createElement("h2",{className:"title-follow"},"TELEPHONE"),l.a.createElement("div",{className:"voffset40"}),l.a.createElement("p",{className:"name"},"Nicolas"),l.a.createElement("p",{className:"phone"},l.a.createElement("a",{href:"tel:+33683196902"},l.a.createElement("i",{className:"fa fa-mobile-alt"})," +33 6 83 19 69 02")),l.a.createElement("div",{className:"voffset20"}),l.a.createElement("p",{className:"name"},"Thomas"),l.a.createElement("p",{className:"phone"},l.a.createElement("a",{href:"tel:+33687256091"},l.a.createElement("i",{className:"fa fa-mobile-alt"})," +33 6 87 25 60 91")),l.a.createElement("div",{className:"voffset40"})),l.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},l.a.createElement("div",{className:"voffset40"}),l.a.createElement("h2",{className:"title-follow"},"EMAIL"),l.a.createElement("div",{className:"voffset40"}),l.a.createElement("p",{className:"email"},l.a.createElement("a",{href:"https://www.messenger.com/t/worstcasestereo",target:"_blank",rel:"noopener noreferrer",className:"btn square icon"},l.a.createElement("i",{className:"fab fa-facebook-messenger"})," Contactez-nous")),l.a.createElement("div",{className:"voffset40"})),l.a.createElement("div",{className:"voffset40"})),l.a.createElement("hr",{className:"hidden-xs"}),l.a.createElement("div",{className:"row social"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-facebook"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.twitter.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://soundcloud.com/worstcasestereo"},l.a.createElement("i",{className:"fab fa-soundcloud"})))))}}]),a}(s.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"section new-video",id:"latestVideo"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-xs-12"},l.a.createElement("div",{className:"voffset70"}),l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",{className:"title inverse"},"VIDEOS")),l.a.createElement("div",{className:"voffset70"}),l.a.createElement("iframe",{title:"Worst Case Stereo - Bad Omens",src:"https://www.youtube.com/embed/ZSlkZaVAWwg",width:"1060",height:"596",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),l.a.createElement("div",{className:"voffset70"}),l.a.createElement("iframe",{title:"Lost Innocence - Live at New Morning (Paris)",src:"https://www.youtube.com/embed/USn11G-L5sw",width:"1060",height:"596",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),l.a.createElement("div",{className:"voffset70"})))}}]),a}(s.Component),y=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(v,null),l.a.createElement(g,null),l.a.createElement(N,null),l.a.createElement(w,null),l.a.createElement(p,null),l.a.createElement(b,null))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.212a5a76.chunk.js.map