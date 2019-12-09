(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],h=0,p=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("whichMarker"),0==e.marker?r("homePage"):e._e(),5==e.marker?r("finalPage"):e._e(),0!=e.marker&&5!=e.marker?r("div",{attrs:{id:"main"}},[0==e.page?r("my-map"):e._e(),1==e.page?r("imageCheck"):e._e(),2==e.page?r("Info"):e._e(),r("whichPage")],1):e._e()],1)},i=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"home"}},[r("b-card",{attrs:{title:"Welcome to Grove Street Cemetery","img-src":"grove_street.jpg","img-alt":"Card image","img-top":""}},[r("b-card-text",[e._v(" Within these gates rest many notable figures of history: Charles Goodwin, Josiah Willard Gibbs “Father of Thermodynamics”, and the forefathers of Yale. But with this history tour, we hope to remember the forgotten residents of New Haven buried within these grounds. ")]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){e.setMarker(1),e.setPage(0)}}},[e._v("Start Tour")])],1)],1)},s=[],c={methods:{setMarker:function(e){this.$store.dispatch("setActionMarker",e)},setPage:function(e){this.$store.dispatch("setActionPage",e)}}},l=c,u=r("2877"),h=Object(u["a"])(l,a,s,!1,null,null,null),p=h.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Map")]),r("div",{attrs:{id:"map"}})])}],d=(r("d81d"),r("f464")),g=r.n(d),k={mounted:function(){this.initializeWrapper()},data:function(){return{markers:[{},{lat:41.312735,lng:-72.926955},{lat:41.315017,lng:-72.927987},{lat:41.314543,lng:-72.927736},{lat:41.314707,lng:-72.926505}],mapConfig:{zoom:17,center:{lat:41.314001,lng:-72.927009}},userLocation:null,newMarker:Object,map:null,userMarker:null}},components:{},methods:{initializeWrapper:function(){var e=this;g()({apiKey:this.$store.getters.apikey}).then((function(t){e.$store.dispatch("setActionGoogle",t);var r=e.$el.querySelector("#map"),n=e.$store.getters.google.maps.Map;console.log("this is map"),console.log(n),e.map=new n(r,e.mapConfig),e.displayMarker(e.$store.getters.marker),e.getLocation()}))},displayMarker:function(e){var t=this.$store.getters.google.maps.Marker;this.newMarker=new t({position:this.markers[e],map:this.map,title:"Child marker!"})},getLocation:function(){if(navigator.geolocation){var e={timeout:1e4};navigator.geolocation.watchPosition(this.showLocation,this.errorHandler,e)}else alert("Sorry, browser does not support geolocation!")},showLocation:function(e){var t=e.coords.latitude,r=e.coords.longitude;this.userLocation={lat:t,lng:r},this.userMarker&&this.userMarker.setMap(null);var n=this.$store.getters.google.maps.Marker;this.userMarker=new n({position:this.userLocation,map:this.map,title:"Child marker!"})},errorHandler:function(e){1==e.code?alert("Error: Access is denied!"):2==e.code?alert("Error: Position is unavailable!"):0!=e.code&&alert("Error: other error has occured")}}},b=k,v=(r("7b3e"),Object(u["a"])(b,f,m,!1,null,"1b3bc70e",null)),w=v.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-button-group",[r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.setMarker(0)}}},[e._v("Home")]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.setMarker(1)}}},[e._v("Marker 1")]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.setMarker(2)}}},[e._v("Marker 2")]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.setMarker(3)}}},[e._v("Marker 3")]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.setMarker(4)}}},[e._v("Marker 4")]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.setMarker(5)}}},[e._v("Conclusion")])],1),0!=e.marker&&5!=e.marker?r("h2",{staticClass:"p-3"},[e._v("Marker #"+e._s(e.marker))]):e._e()],1)},_=[],M={methods:{setMarker:function(e){this.$store.dispatch("setActionMarker",e)}},computed:{marker:function(){return this.$store.getters.marker}}},P=M,$=Object(u["a"])(P,y,_,!1,null,null,null),x=$.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-button-group",[1==e.page?r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.incrementPage(-1)}}},[e._v("Back to Map")]):e._e(),2!=e.page?r("b-btn",{attrs:{size:"lg"},on:{click:function(t){return e.incrementPage(1)}}},[e._v("I found it!")]):e._e(),2==e.page?r("b-btn",{attrs:{size:"lg"},on:{click:e.incrementMarker}},[e._v("Next Marker")]):e._e()],1)],1)},C=[],j={methods:{incrementPage:function(e){this.$store.dispatch("incrementActionPage",e)},incrementMarker:function(){this.$store.dispatch("incrementActionMarker",1),this.$store.dispatch("incrementActionPage",1)}},computed:{page:function(){return this.$store.getters.page}}},z=j,q=Object(u["a"])(z,O,C,!1,null,null,null),A=q.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container p-3"},[r("h2",[e._v("Do you see this place?")]),r("b-img",{attrs:{thumbnail:"",src:"marker/"+e.marker+".jpg"}})],1)},S=[],H={methods:{incrementPage:function(){this.$store.dispatch("incrementActionPage",1)}},computed:{page:function(){return this.$store.getters.page},marker:function(){return this.$store.getters.marker}}},G=H,I=Object(u["a"])(G,E,S,!1,null,null,null),T=I.exports,W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("Info Goes Here")])])}],B={name:"Info"},Q=B,N=Object(u["a"])(Q,W,L,!1,null,null,null),J=N.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container col-lg-8",attrs:{id:"final"}},[e.showQuestions?e._e():r("b-card",{attrs:{title:"Tour Completed"}},[r("b-card-text",[e._v(" By walking this tour, you have followed the history of the forgotten buried in this cemetery. There are still many unanswered questions about how the movement of remains of the people of color plot and the city plot actually occurred. But, hopefully with time we will learn more. Click here for further research and discussion questions. ")]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){e.showQuestions=!0}}},[e._v("Questions")])],1),e.showQuestions?r("b-card",{attrs:{title:"Questions"}},[r("b-card-text",[r("b",[e._v(e._s(e.questions[e.question].title))]),r("p",[e._v(e._s(e.questions[e.question].text))])]),r("b-btn",{attrs:{size:"lg"},on:{click:function(t){e.question--}}},[e._v("Back")]),4!=e.question?r("b-btn",{attrs:{size:"lg"},on:{click:function(t){e.question++}}},[e._v("Next")]):e._e()],1):e._e()],1)},F=[],Y={data:function(){return{showQuestions:!1,question:0,questions:[{title:"How were the remains actually re-buried?",text:"By 1901, there was a law dictating that cemeteries were supposed to submit paperwork in order to rebury people. City hall does not have any such records of reinterment. Either these records were lost over time, the remains were not, in fact, reburied and only the headstones were moved, the remains were moved in a non-professional fashion, or the paperwork wasn’t submitted but the remains were moved properly. Which hypothesis seems most likely to you? How would you verify this hypothesis?"},{title:"",text:"We don’t know what the social status of the people of color who were buried here -- were they required to pay money? Or was this plot, like the poor people plot, free? How might you go about searching for this information? "},{title:"What happened to the people who did not have headstones?",text:"Many people -- particularly poor people and people of color -- were buried with wooden headstones that have decayed over time. The Grove Street Cemetery records hold a list of names that were buried within the City Plot and the people of color plot; but unlike the plots for white, rich people, the exact location of these people’s remains are unknown. How do we remember their history in a graveyard when we don’t know exactly where they are currently buried? How do we remember this part of our history when the general public doesn’t even know that it exists?"},{title:"",text:"Should the cemetery do anything to honor the people who were moved? If so, what?"},{title:"",text:"If you want to discuss further, please email us at grovestreetquestions@gmail.com."}]}}},K=Y,X=Object(u["a"])(K,D,F,!1,null,null,null),Z=X.exports,R={name:"app",data:function(){return{}},components:{homePage:p,MyMap:w,whichMarker:x,whichPage:A,imageCheck:T,Info:J,finalPage:Z},methods:{},computed:{page:function(){return this.$store.getters.page},marker:function(){return this.$store.getters.marker}}},U=R,V=(r("034f"),Object(u["a"])(U,o,i,!1,null,null,null)),ee=V.exports,te=r("5f5b"),re=(r("f9e3"),r("2dd8"),r("2f62"));n["default"].use(re["a"]);var ne=new re["a"].Store({state:{page:0,marker:0,apikey:"AIzaSyDn3JZPmqYtO73Cd4r1b-x1ClNlF0NsXf8",google:Object},mutations:{incrementPage:function(e,t){e.page=(e.page+t)%3},setPage:function(e,t){e.page=t},incrementMarker:function(e,t){e.marker=(e.marker+t)%6},setMarker:function(e,t){e.marker=t},setGoogle:function(e,t){e.google=t}},actions:{incrementActionPage:function(e,t){var r=e.commit;r("incrementPage",t)},setActionPage:function(e,t){var r=e.commit;r("setPage",t)},incrementActionMarker:function(e,t){var r=e.commit;r("incrementMarker",t)},setActionMarker:function(e,t){var r=e.commit;r("setMarker",t)},setActionGoogle:function(e,t){var r=e.commit;r("setGoogle",t)}},getters:{page:function(e){return e.page},marker:function(e){return e.marker},google:function(e){return e.google},apikey:function(e){return e.apikey}}});n["default"].use(te["a"]),n["default"].use(re["a"]),n["default"].config.productionTip=!1,new n["default"]({store:ne,render:function(e){return e(ee)}}).$mount("#app")},"7b3e":function(e,t,r){"use strict";var n=r("7c19"),o=r.n(n);o.a},"7c19":function(e,t,r){},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.225b2c5f.js.map