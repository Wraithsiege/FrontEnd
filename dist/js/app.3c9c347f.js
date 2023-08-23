(function(){"use strict";var e={1517:function(e,t,n){var o=n(6369),s=function(){var e=this,t=e._self._c;return t("div",[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("b-navbar-brand",{attrs:{to:"/"}},[e._v("eKnjižara")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-form",[t("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),t("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1),t("b-nav-item-dropdown",{attrs:{text:"Kategorije",right:""}},[t("b-dropdown-item",{on:{click:function(t){return e.goToBooks()}}},[e._v("Knjige")]),t("b-dropdown-item",{on:{click:function(t){return e.goToMovies()}}},[e._v("Filmovi")]),t("b-dropdown-item",{on:{click:function(t){return e.goToMusic()}}},[e._v("Muzika")]),t("b-dropdown-item",{on:{click:function(t){return e.goToToys()}}},[e._v("Igračke")]),t("b-dropdown-item",{on:{click:function(t){return e.goToSchoolAccessories()}}},[e._v("Školski Pribor")]),t("b-dropdown-item",{on:{click:function(t){return e.goToWritingAccessories()}}},[e._v("Pisaći Pribor")]),t("b-dropdown-item",{on:{click:function(t){return e.goToCongratulationsCards()}}},[e._v("Čestitke")]),t("b-dropdown-item",{on:{click:function(t){return e.goToGiftCards()}}},[e._v("Poklon Kartice")]),t("b-dropdown-item",{on:{click:function(t){return e.goToMessages()}}},[e._v("Knjiga Utisaka")])],1),t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e.token?t("em",[e._v(e._s(e.currentUserUsername))]):t("em",[e._v("Uloguj Se")])]},proxy:!0}])},[t("b-dropdown-item",{on:{click:function(t){return e.goToUsers()}}},[e._v("Korisnici")]),e.token?e._e():t("b-dropdown-item",{attrs:{to:"/login"}},[e._v("Uloguj Se")]),e.token?t("b-dropdown-item",{on:{click:function(t){return e.logout()}}},[e._v("Izloguj Se")]):t("b-dropdown-item",{attrs:{to:"/register"}},[e._v("Registruj Se")])],1)],1)],1)],1),t("router-view")],1)},i=[],a=(n(7658),function(){var e=this;e._self._c;return e._m(0)}),r=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("eKnjižara")])])}],c={name:"Header",props:{title:String}},l=c,d=n(1001),u=(0,d.Z)(l,a,r,!1,null,null,null),m=u.exports,h=n(3822),p={name:"App",components:{},data(){return{current:0}},mounted(){localStorage.token&&this.setToken(localStorage.token),localStorage.currentUserUsername&&this.setUsername(localStorage.currentUserUsername)},methods:{...(0,h.OI)(["removeToken","setToken","login","setUsername","removeUsername"]),goToGiftCards(){this.$router.push({name:"GiftCards"})},goToCongratulationsCards(){this.$router.push({name:"CongratulationsCards"})},goToBooks(){this.$router.push({name:"Books"})},goToMovies(){this.$router.push({name:"Movies"})},goToMusic(){this.$router.push({name:"Music"})},goToToys(){this.$router.push({name:"Toys"})},goToSchoolAccessories(){this.$router.push({name:"SchoolAccessories"})},goToWritingAccessories(){this.$router.push({name:"WritingAccessories"})},goToUsers(){this.$router.push({name:"Users"})},goToMessages(){this.$router.push({name:"Guestbook"})},logout(){this.removeToken(),this.removeUsername()}},computed:{...(0,h.rn)(["token","currentUserUsername"])}},f=p,g=(0,d.Z)(f,s,i,!1,null,null,null),v=g.exports,b=n(2631),y=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Home"}}),t("img",{attrs:{src:"https://staticsmartlife.mondo.rs/Picture/88891/jpeg/Otvorena-knjiga.jpeg?ts=2022-04-20T13:23:25",width:"400"}}),t("p",[e._v("est. 2023 Wraithsiege™ eKnjižara®")])],1)},C=[],E={name:"Home",components:{Header:m}},k=E,I=(0,d.Z)(k,y,C,!1,null,null,null),w=I.exports,A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Poklon Kartice")]),t("button",{on:{click:function(t){return e.loadGiftCards()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"giftCardsList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},D=[];let T=0;const _=[0];var P={data(){return{gcID:[],gcValue:[]}},mounted(){this.fetchGiftCards(),this.gcID=this.giftCardsID,this.gcValue=this.giftCardsValue},methods:{...(0,h.nv)(["fetchGiftCards"]),loadGiftCards(){const e=document.getElementById("giftCardsList");if(0==T){let t=0;if(void 0!=this.giftCardsID[t]){while(void 0!=this.gcID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Vrednost kartice: "+this.giftCardsValue[t]+"RSD"),n.appendChild(o);let s=document.createElement("img");s.src="https://cdn-icons-png.flaticon.com/512/6664/6664569.png";let i=document.createElement("hr"),a=document.createElement("container");a.hidden=!0,a.id="con"+this.gcID[t];let r=document.createElement("button");r.id=this.gcID[t];let c="Poklon Kartica: "+this.gcValue[t]+"RSD",l=document.createElement("ul");l.append(c),e.append(l),r.append("Više Informacija"),e.appendChild(r),e.appendChild(a),a.appendChild(s),a.appendChild(n),e.appendChild(i),document.getElementById(`${r.id}`).addEventListener("click",this.saznajVise),T=1,_[r.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==_[e]?(document.getElementById("con"+e).hidden=!1,_[e]=0):0==_[e]&&(document.getElementById("con"+e).hidden=!0,_[e]=1)},resetLoad(){T=0}},computed:{...(0,h.rn)(["giftCardsID","giftCardsValue"])}},j=P,L=(0,d.Z)(j,A,D,!1,null,"6708adf6",null),$=L.exports,B=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Čestitke")]),t("button",{on:{click:function(t){return e.loadCongratulationsCards()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"congratulationsCardsList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},M=[];let U=0;const S=[0];var N={data(){return{ccID:[],ccType:[],ccPrice:[]}},mounted(){this.fetchCongratulationsCards(),this.ccID=this.congratulationsCardsID,this.ccType=this.congratulationsCardsType,this.ccPrice=this.congratulationsCardsPrice},methods:{...(0,h.nv)(["fetchCongratulationsCards"]),loadCongratulationsCards(){const e=document.getElementById("congratulationsCardsList");if(0==U){let t=0;if(void 0!=this.congratulationsCardsID[t]){while(void 0!=this.ccID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Tip čestitke: "+this.congratulationsCardsType[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Cena: "+this.congratulationsCardsPrice[t]+"RSD"),n.appendChild(s);let i=document.createElement("img");i.src="https://play-lh.googleusercontent.com/BrJfbG71QlV-P4bMzv9cbY31UjZuBd-BKThMsXRJcr34owr-BHOm6SueA6pbtN44_Eo";let a=document.createElement("hr"),r=document.createElement("container");r.hidden=!0,r.id="con"+this.ccID[t];let c=document.createElement("button");c.id=this.ccID[t];let l="Čestitka: "+this.ccType[t],d=document.createElement("ul");d.append(l),e.append(d),c.append("Više Informacija"),e.appendChild(c),e.appendChild(r),r.appendChild(i),r.appendChild(n),e.appendChild(a),document.getElementById(`${c.id}`).addEventListener("click",this.saznajVise),U=1,S[c.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==S[e]?(document.getElementById("con"+e).hidden=!1,S[e]=0):0==S[e]&&(document.getElementById("con"+e).hidden=!0,S[e]=1)},resetLoad(){U=0}},computed:{...(0,h.rn)(["congratulationsCardsID","congratulationsCardsType","congratulationsCardsPrice"])}},V=N,G=(0,d.Z)(V,B,M,!1,null,null,null),z=G.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Knjige")]),t("button",{on:{click:function(t){return e.loadBooks()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"booksList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},O=[];let Z=0;const K=[0];var H={data(){return{bID:[],bTitle:[],bAuthor:[],bGenre:[],bPublisher:[],bPrice:[]}},mounted(){this.fetchBooks(),this.bID=this.bookID,this.bTItle=this.bookTitle,this.bAuthor=this.bookAuthor,this.bGenre=this.bookGenre,this.bPublisher=this.bookPublisher,this.bPrice=this.bookPrice},methods:{...(0,h.nv)(["fetchBooks"]),loadBooks(){const e=document.getElementById("booksList");if(0==Z){let t=0;if(void 0!=this.bookID[t]){while(void 0!=this.bID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Naziv knjige: "+this.bookTitle[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Autor: "+this.bookAuthor[t]),n.appendChild(s);let i=document.createElement("ul");i.append("Žanr: "+this.bookGenre[t]),n.appendChild(i);let a=document.createElement("ul");a.append("Izdavač: "+this.bookPublisher[t]),n.appendChild(a);let r=document.createElement("ul");r.append("Cena: "+this.bookPrice[t]+"RSD"),n.appendChild(r);let c=document.createElement("img");c.src="https://freepngimg.com/thumb/book/37064-8-book-hd.png";let l=document.createElement("hr"),d=document.createElement("container");d.hidden=!0,d.id="con"+this.bID[t];let u=document.createElement("button");u.id=this.bID[t];let m=this.bTItle[t],h=document.createElement("ul");h.append(m),e.append(h),u.append("Više Informacija"),e.appendChild(u),e.appendChild(d),d.appendChild(c),d.appendChild(n),e.appendChild(l),document.getElementById(`${u.id}`).addEventListener("click",this.saznajVise),Z=1,K[u.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==K[e]?(document.getElementById("con"+e).hidden=!1,K[e]=0):0==K[e]&&(document.getElementById("con"+e).hidden=!0,K[e]=1)},resetLoad(){Z=0}},computed:{...(0,h.rn)(["bookID","bookTitle","bookAuthor","bookGenre","bookPublisher","bookPrice"])}},R=H,W=(0,d.Z)(R,x,O,!1,null,null,null),q=W.exports,F=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Filmovi")]),t("button",{on:{click:function(t){return e.loadMovies()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"moviesList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},J=[];let X=0;const Q=[0];var Y={data(){return{mID:[],mName:[],mGenre:[],mPrice:[]}},mounted(){this.fetchMovies(),this.mID=this.movieID,this.mName=this.movieName,this.mGenre=this.movieGenre,this.mPrice=this.moviePrice},methods:{...(0,h.nv)(["fetchMovies"]),loadMovies(){const e=document.getElementById("moviesList");if(0==X){let t=0;if(void 0!=this.movieID[t]){while(void 0!=this.mID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Naziv filma: "+this.movieName[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Žanr: "+this.movieGenre[t]),n.appendChild(s);let i=document.createElement("ul");i.append("Cena: "+this.moviePrice[t]+"RSD"),n.appendChild(i);let a=document.createElement("img");a.src="https://www.pngmart.com/files/5/Movie-PNG-Transparent-Image.png";let r=document.createElement("hr"),c=document.createElement("container");c.hidden=!0,c.id="con"+this.mID[t];let l=document.createElement("button");l.id=this.mID[t];let d=this.mName[t],u=document.createElement("ul");u.append(d),e.append(u),l.append("Više Informacija"),e.appendChild(l),e.appendChild(c),c.appendChild(a),c.appendChild(n),e.appendChild(r),document.getElementById(`${l.id}`).addEventListener("click",this.saznajVise),X=1,Q[l.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==Q[e]?(document.getElementById("con"+e).hidden=!1,Q[e]=0):0==Q[e]&&(document.getElementById("con"+e).hidden=!0,Q[e]=1)},resetLoad(){X=0}},computed:{...(0,h.rn)(["movieID","movieName","movieGenre","moviePrice"])}},ee=Y,te=(0,d.Z)(ee,F,J,!1,null,null,null),ne=te.exports,oe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Music")]),t("button",{on:{click:function(t){return e.loadMusic()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"musicList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},se=[];let ie=0;const ae=[0];var re={data(){return{mID:[],mAlbumName:[],mPerformer:[],mGenre:[],mPrice:[]}},mounted(){this.fetchMusic(),this.mID=this.musicID,this.mAlbumName=this.musicAlbumName,this.mPerformer=this.musicPerformer,this.mGenre=this.musicGenre,this.mPrice=this.musicPrice},methods:{...(0,h.nv)(["fetchMusic"]),loadMusic(){const e=document.getElementById("musicList");if(0==ie){let t=0;if(void 0!=this.musicID[t]){while(void 0!=this.mID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Naziv albuma: "+this.musicAlbumName[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Izvođač: "+this.musicPerformer[t]),n.appendChild(s);let i=document.createElement("ul");i.append("Žanr: "+this.musicGenre[t]),n.appendChild(i);let a=document.createElement("ul");a.append("Cena: "+this.musicPrice[t]+"RSD"),n.appendChild(a);let r=document.createElement("img");r.src="https://cdn-icons-png.flaticon.com/512/3175/3175047.png";let c=document.createElement("hr"),l=document.createElement("container");l.hidden=!0,l.id="con"+this.mID[t];let d=document.createElement("button");d.id=this.mID[t];let u=this.mAlbumName[t],m=document.createElement("ul");m.append(u),e.append(m),d.append("Više Informacija"),e.appendChild(d),e.appendChild(l),l.appendChild(r),l.appendChild(n),e.appendChild(c),document.getElementById(`${d.id}`).addEventListener("click",this.saznajVise),ie=1,ae[d.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==ae[e]?(document.getElementById("con"+e).hidden=!1,ae[e]=0):0==ae[e]&&(document.getElementById("con"+e).hidden=!0,ae[e]=1)},resetLoad(){ie=0}},computed:{...(0,h.rn)(["musicID","musicAlbumName","musicPerformer","musicGenre","musicPrice"])}},ce=re,le=(0,d.Z)(ce,oe,se,!1,null,null,null),de=le.exports,ue=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Igračke")]),t("button",{on:{click:function(t){return e.loadToys()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"toysList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},me=[];let he=0;const pe=[0];var fe={data(){return{tID:[],tManufacturer:[],tType:[],tName:[],tColor:[],bPrice:[]}},mounted(){this.fetchToys(),this.tID=this.toyID,this.tManufacturer=this.toyManufacturer,this.tType=this.toyType,this.tName=this.toyName,this.tColor=this.toyColor,this.bPrice=this.toyPrice},methods:{...(0,h.nv)(["fetchToys"]),loadToys(){const e=document.getElementById("toysList");if(0==he){let t=0;if(void 0!=this.toyID[t]){while(void 0!=this.tID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Proizvođač: "+this.toyManufacturer[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Tip igračke: "+this.toyType[t]),n.appendChild(s);let i=document.createElement("ul");i.append("Ime igračke: "+this.toyName[t]),n.appendChild(i);let a=document.createElement("ul");a.append("Boja igračke: "+this.toyColor[t]),n.appendChild(a);let r=document.createElement("ul");r.append("Cena: "+this.toyPrice[t]+"RSD"),n.appendChild(r);let c=document.createElement("img");c.src="https://cdn-icons-png.flaticon.com/512/3082/3082048.png";let l=document.createElement("hr"),d=document.createElement("container");d.hidden=!0,d.id="con"+this.tID[t];let u=document.createElement("button");u.id=this.tID[t];let m=this.tName[t],h=document.createElement("ul");h.append(m),e.append(h),u.append("Više Informacija"),e.appendChild(u),e.appendChild(d),d.appendChild(c),d.appendChild(n),e.appendChild(l),document.getElementById(`${u.id}`).addEventListener("click",this.saznajVise),he=1,pe[u.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==pe[e]?(document.getElementById("con"+e).hidden=!1,pe[e]=0):0==pe[e]&&(document.getElementById("con"+e).hidden=!0,pe[e]=1)},resetLoad(){he=0}},computed:{...(0,h.rn)(["toyID","toyManufacturer","toyType","toyName","toyColor","toyPrice"])}},ge=fe,ve=(0,d.Z)(ge,ue,me,!1,null,null,null),be=ve.exports,ye=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Školski Pribor")]),t("button",{on:{click:function(t){return e.loadSchoolAccessories()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"schoolAccessoriesList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},Ce=[];let Ee=0;const ke=[0];var Ie={data(){return{scID:[],scManufacturer:[],scType:[],scColor:[],scPrice:[]}},mounted(){this.fetchSchoolAccessories(),this.scID=this.schoolAccessoryID,this.scManufacturer=this.schoolAccessoryManufacturer,this.scType=this.schoolAccessoryType,this.scColor=this.schoolAccessoryColor,this.scPrice=this.schoolAccessoryPrice},methods:{...(0,h.nv)(["fetchSchoolAccessories"]),loadSchoolAccessories(){const e=document.getElementById("schoolAccessoriesList");if(0==Ee){let t=0;if(void 0!=this.schoolAccessoryID[t]){while(void 0!=this.scID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Proizvođač: "+this.schoolAccessoryManufacturer[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Tip: "+this.schoolAccessoryType[t]),n.appendChild(s);let i=document.createElement("ul");i.append("Boja: "+this.schoolAccessoryColor[t]),n.appendChild(i);let a=document.createElement("ul");a.append("Cena: "+this.schoolAccessoryPrice[t]+"RSD"),n.appendChild(a);let r=document.createElement("img");r.src="https://cdn1.iconfinder.com/data/icons/education-flat-2/48/81-512.png";let c=document.createElement("hr"),l=document.createElement("container");l.hidden=!0,l.id="con"+this.scID[t];let d=document.createElement("button");d.id=this.scID[t];let u=this.schoolAccessoryManufacturer[t]+" "+this.schoolAccessoryType[t],m=document.createElement("ul");m.append(u),e.append(m),d.append("Više Informacija"),e.appendChild(d),e.appendChild(l),l.appendChild(r),l.appendChild(n),e.appendChild(c),document.getElementById(`${d.id}`).addEventListener("click",this.saznajVise),Ee=1,ke[d.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==ke[e]?(document.getElementById("con"+e).hidden=!1,ke[e]=0):0==ke[e]&&(document.getElementById("con"+e).hidden=!0,ke[e]=1)},resetLoad(){Ee=0}},computed:{...(0,h.rn)(["schoolAccessoryID","schoolAccessoryManufacturer","schoolAccessoryType","schoolAccessoryColor","schoolAccessoryPrice"])}},we=Ie,Ae=(0,d.Z)(we,ye,Ce,!1,null,null,null),De=Ae.exports,Te=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Pisaći Pribor")]),t("button",{on:{click:function(t){return e.loadWritingAccessories()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"writingAccessoriesList",alignContent:"center"}})]),t("body",{attrs:{onLoadedData:e.resetLoad()}})],1)},_e=[];let Pe=0;const je=[0];var Le={data(){return{waID:[],waManufacturer:[],waType:[],waColor:[],waPrice:[]}},mounted(){this.fetchWritingAccessories(),this.waID=this.writingAccessoryID,this.waManufacturer=this.writingAccessoryManufacturer,this.waType=this.writingAccessoryType,this.waColor=this.writingAccessoryColor,this.waPrice=this.writingAccessoryPrice},methods:{...(0,h.nv)(["fetchWritingAccessories"]),loadWritingAccessories(){const e=document.getElementById("writingAccessoriesList");if(0==Pe){let t=0;if(void 0!=this.writingAccessoryID[t]){while(void 0!=this.waID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Proizvođač: "+this.writingAccessoryManufacturer[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Tip: "+this.writingAccessoryType[t]),n.appendChild(s);let i=document.createElement("ul");i.append("Boja: "+this.writingAccessoryColor[t]),n.appendChild(i);let a=document.createElement("ul");a.append("Cena: "+this.writingAccessoryPrice[t]+"RSD"),n.appendChild(a);let r=document.createElement("img");r.src="https://cdn4.iconfinder.com/data/icons/stationery-40/64/pen-writing-sign-office-accessory-512.png";let c=document.createElement("hr"),l=document.createElement("container");l.hidden=!0,l.id="con"+this.waID[t];let d=document.createElement("button");d.id=this.waID[t];let u=this.writingAccessoryType[t]+" "+this.writingAccessoryColor[t],m=document.createElement("ul");m.append(u),e.append(m),d.append("Više Informacija"),e.appendChild(d),e.appendChild(l),l.appendChild(r),l.appendChild(n),e.appendChild(c),document.getElementById(`${d.id}`).addEventListener("click",this.saznajVise),Pe=1,je[d.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==je[e]?(document.getElementById("con"+e).hidden=!1,je[e]=0):0==je[e]&&(document.getElementById("con"+e).hidden=!0,je[e]=1)},resetLoad(){Pe=0}},computed:{...(0,h.rn)(["writingAccessoryID","writingAccessoryManufacturer","writingAccessoryType","writingAccessoryColor","writingAccessoryPrice"])}},$e=Le,Be=(0,d.Z)($e,Te,_e,!1,null,null,null),Me=Be.exports,Ue=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",{attrs:{onLoad:e.resetLoad()}},[e._v("Korisnici")]),t("button",{on:{click:function(t){return e.loadUsers()}}},[e._v("Load Data")]),t("br"),t("ul"),t("ul",{staticClass:"list",attrs:{id:"usersList",alignContent:"center"}})]),t("body",{attrs:{onLoadeddata:e.resetLoad()}})],1)},Se=[];let Ne=0;const Ve=[0];var Ge={data(){return{uName:[],uCreatedAt:[]}},mounted(){this.fetchUsers(),this.uName=this.username,this.uCreatedAt=this.createdAtUser},methods:{...(0,h.nv)(["fetchUsers"]),loadUsers(){const e=document.getElementById("usersList");if(0==Ne){let t=0;if(void 0!=this.username[t]){while(void 0!=this.uName[t])t++;let n=t;t=0;while(n>t){let n=this.uCreatedAt[t].split("-"),o=n[2].split("T"),s=o[1].split(":");console.log(n),console.log(o);let i=document.createElement("ul"),a=document.createElement("ul");a.append("Korisničko ime: "+this.username[t]),i.appendChild(a);let r=document.createElement("ul");r.append("Registrovan: "+o[0]+"."+n[1]+"."+n[0]+" u "+s[0]+":"+s[1]),i.appendChild(r);let c=document.createElement("img");c.src="https://www.shareicon.net/data/2015/08/12/84086_user_512x512.png";let l=document.createElement("hr"),d=document.createElement("container");d.hidden=!0,d.id="con"+this.username[t];let u=document.createElement("button");u.id=this.username[t];let m=this.username[t],h=document.createElement("ul");h.append(m),e.append(h),u.append("Više Informacija"),e.appendChild(u),e.appendChild(d),d.appendChild(c),d.appendChild(i),e.appendChild(l),document.getElementById(`${u.id}`).addEventListener("click",this.saznajVise),Ne=1,Ve[u.id]=1,t++}}}},saznajVise(){let e=event.srcElement.id;1==Ve[e]?(document.getElementById("con"+e).hidden=!1,Ve[e]=0):0==Ve[e]&&(document.getElementById("con"+e).hidden=!0,Ve[e]=1)},resetLoad(){Ne=0}},computed:{...(0,h.rn)(["username","createdAtUser"])}},ze=Ge,xe=(0,d.Z)(ze,Ue,Se,!1,null,null,null),Oe=xe.exports,Ze=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"zbirizu"}},[t("Header",{attrs:{subtitle:"Log In"}}),t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"eMail:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",placeholder:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)},Ke=[],He={name:"Login",components:{Header:m,App:v},data(){return{form:{email:"",password:""}}},methods:{...(0,h.nv)(["login"]),onSubmit(e){e.preventDefault(),this.login(this.form),this.$router.push({name:"Home"})}}},Re=He,We=(0,d.Z)(Re,Ze,Ke,!1,null,null,null),qe=We.exports,Fe=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Create account"}}),t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),t("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])],1),t("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),t("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[e._v("Never share your password with anyone including our support team.")])],1),t("b-form-checkbox",{attrs:{id:"admin",value:!0,"unchecked-value":!1},model:{value:e.form.admin,callback:function(t){e.$set(e.form,"admin",t)},expression:"form.admin"}},[e._v("Admin")]),t("br"),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)},Je=[],Xe={name:"Register",components:{Header:m,App:v},data(){return{form:{username:"",email:"",password:"",admin:!1}}},methods:{...(0,h.nv)(["register"]),onSubmit(e){e.preventDefault(),this.register(this.form),this.$router.push({name:"Home"})}}},Qe=Xe,Ye=(0,d.Z)(Qe,Fe,Je,!1,null,"720699a3",null),et=Ye.exports,tt=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("center",[t("h1",[e._v("Knjiga Utisaka")]),t("button",{on:{click:function(t){return e.loadGuestbook()}}},[e._v("Load Data")]),t("br"),t("ul"),e.token?t("textarea",{staticClass:"form-control",attrs:{id:"content",name:"content",rows:"2"}},[e._v("Unesite komentar")]):t("button",{staticStyle:{color:"#FF0000"},on:{click:function(t){return e.loginClick()}}},[e._v("Ulogujte Se")]),e.token?t("button",[e._v("Postavi komentar")]):e._e(),t("ul",{staticClass:"list",attrs:{id:"guestbookList",alignContent:"center"}})]),t("body",{attrs:{onLoad:e.resetLoad()}})],1)},nt=[];let ot=0;const st=[0];var it={data(){return{gID:[],gUsername:[],gContent:[]}},mounted(){this.fetchMessages(),this.gID=this.messageID,this.gUsername=this.messageUsername,this.gContent=this.messageContent},methods:{...(0,h.nv)(["fetchMessages"]),loadGuestbook(){const e=document.getElementById("guestbookList");if(0==ot){let t=0;if(void 0!=this.messageID[t]){while(void 0!=this.gID[t])t++;let n=t;t=0;while(n>t){let n=document.createElement("ul"),o=document.createElement("ul");o.append("Korisnik: "+this.messageUsername[t]),n.appendChild(o);let s=document.createElement("ul");s.append("Poruka: "+this.bookAuthor[t]),n.appendChild(s);let i=document.createElement("hr"),a=document.createElement("container");a.hidden=!0,a.id="con"+this.gID[t];let r=document.createElement("button");r.id=this.gID[t];let c=document.createElement("ul");c.append(value),e.append(c),r.append("Više Informacija"),e.appendChild(r),e.appendChild(a),a.appendChild(image),a.appendChild(n),e.appendChild(i),document.getElementById(`${r.id}`).addEventListener("click",this.saznajVise),loadBooks=1,st[r.id]=1,t++}}}},resetLoad(){ot=0},loginClick(){window.location.assign("/login")}},computed:{...(0,h.rn)(["messageID","messageUsername","messageContent","token"])}},at=it,rt=(0,d.Z)(at,tt,nt,!1,null,null,null),ct=rt.exports;o["default"].use(b.ZP);const lt=[{path:"/",name:"Home",component:w},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5399))},{path:"/giftCards",name:"GiftCards",component:$},{path:"/congratulationsCards",name:"CongratulationsCards",component:z},{path:"/books",name:"Books",component:q},{path:"/movies",name:"Movies",component:ne},{path:"/music",name:"Music",component:de},{path:"/toys",name:"Toys",component:be},{path:"/schoolAccessories",name:"SchoolAccessories",component:De},{path:"/writingAccessories",name:"WritingAccessories",component:Me},{path:"/users",name:"Users",component:Oe},{path:"/login",name:"Login",component:qe},{path:"/register",name:"Register",component:et},{path:"/guestbook",name:"Guestbook",component:ct}],dt=new b.ZP({mode:"history",base:"/",routes:lt});var ut=dt;o["default"].use(h.ZP);var mt=new h.ZP.Store({state:{items:[],token:"",bookID:[],bookTitle:[],bookAuthor:[],bookGenre:[],bookPublisher:[],bookPrice:[],movieID:[],movieName:[],movieGenre:[],moviePrice:[],musicID:[],musicAlbumName:[],musicPerformer:[],musicGenre:[],musicPrice:[],giftCardsID:[],giftCardsValue:[],toyID:[],toyManufacturer:[],toyType:[],toyName:[],toyColor:[],toyPrice:[],congratulationsCardsID:[],congratulationsCardsType:[],congratulationsCardsPrice:[],schoolAccessoryID:[],schoolAccessoryManufacturer:[],schoolAccessoryType:[],schoolAccessoryColor:[],schoolAccessoryPrice:[],writingAccessoryID:[],writingAccessoryManufacturer:[],writingAccessoryType:[],writingAccessoryColor:[],writingAccessoryPrice:[],username:[],createdAtUser:[],messageID:[],messageUsername:[],messageContent:[],currentUserUsername:""},getters:{},mutations:{setToken(e,t){e.token=t,localStorage.token=t},removeToken(e){e.token="",localStorage.token=""},setUsername(e,t){e.currentUserUsername=t,localStorage.currentUserUsername=t},removeUsername(e){e.currentUserUsername="",localStorage.currentUserUsername=""}},actions:{async fetchBooks({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/books/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.bookID[t]=`${e.id}`,this.state.bookTitle[t]=`${e.title}`,this.state.bookAuthor[t]=`${e.author}`,this.state.bookGenre[t]=`${e.genre}`,this.state.bookPublisher[t]=`${e.publisher}`,this.state.bookPrice[t]=`${e.price}`,t++}))}))},async fetchMovies({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/movies/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.movieID[t]=`${e.id}`,this.state.movieName[t]=`${e.name}`,this.state.movieGenre[t]=`${e.genre}`,this.state.moviePrice[t]=`${e.price}`,t++}))}))},async fetchMusic({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/music/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.musicID[t]=`${e.id}`,this.state.musicAlbumName[t]=`${e.albumName}`,this.state.musicPerformer[t]=`${e.performer}`,this.state.musicGenre[t]=`${e.genre}`,this.state.musicPrice[t]=`${e.price}`,t++}))}))},async fetchGiftCards({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/gift_cards/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.giftCardsID[t]=`${e.id}`,this.state.giftCardsValue[t]=`${e.value}`,t++}))}))},async fetchToys({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/toys/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.toyID[t]=`${e.id}`,this.state.toyManufacturer[t]=`${e.manufacturer}`,this.state.toyType[t]=`${e.type}`,this.state.toyName[t]=`${e.name}`,this.state.toyColor[t]=`${e.color}`,this.state.toyPrice[t]=`${e.price}`,t++}))}))},async fetchCongratulationsCards({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/congratulations_cards/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.congratulationsCardsID[t]=`${e.id}`,this.state.congratulationsCardsType[t]=`${e.type}`,this.state.congratulationsCardsPrice[t]=`${e.price}`,t++}))}))},async fetchSchoolAccessories({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/school_accessories/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.schoolAccessoryID[t]=`${e.id}`,this.state.schoolAccessoryManufacturer[t]=`${e.manufacturer}`,this.state.schoolAccessoryType[t]=`${e.type}`,this.state.schoolAccessoryColor[t]=`${e.color}`,this.state.schoolAccessoryPrice[t]=`${e.price}`,t++}))}))},async fetchMessages({commit:e}){let t=0;await fetch("http://127.0.0.1/8000/api/messages").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.messageID[t]=`${e.id}`,this.state.messageUsername=`${e.username}`,this.state.messageContent=`${e.content}`,t++}))}))},async fetchWritingAccessories({commit:e}){let t=0;await fetch("http://127.0.0.1:8000/api/writing_accessories/").then((e=>e.json())).then((e=>{e.forEach((e=>{this.state.writingAccessoryID[t]=`${e.id}`,this.state.writingAccessoryManufacturer[t]=`${e.manufacturer}`,this.state.writingAccessoryType[t]=`${e.type}`,this.state.writingAccessoryColor[t]=`${e.color}`,this.state.writingAccessoryPrice[t]=`${e.price}`,t++}))}))},async fetchUsers(){let e=0;await fetch("http://127.0.0.1:8000/api/users/").then((e=>e.json())).then((t=>{t.forEach((t=>{this.state.username[e]=`${t.username}`,this.state.createdAtUser[e]=`${t.createdAt}`,e++}))}))},login({commit:e},t){fetch("http://127.0.0.1:9000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((n=>{if(n.msg)alert(n.msg),window.location.href="http://127.0.0.1:8080/login";else{e("setToken",n.token);let o=t.email;fetch("http://127.0.0.1:8000/api/users").then((e=>e.json())).then((t=>{t.forEach((t=>{o===t.email&&e("setUsername",t.username)}))}))}}))},register({commit:e},t){fetch("http://127.0.0.1:9000/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((n=>{if(n.msg)alert(n.msg);else{e("setToken",n.token);let o=t.username;fetch("http://127.0.0.1:8000/api/users").then((e=>e.json())).then((t=>{t.forEach((t=>{o===t.username&&e("setUsername",t.username)}))}))}}))}},modules:{}}),ht=n(6681),pt=n(9425);n(7024);o["default"].use(ht.XG7),o["default"].use(pt.A7),o["default"].config.productionTip=!1,new o["default"]({router:ut,store:mt,render:e=>e(v)}).$mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],i=e[d][2];for(var r=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,i<a&&(a=i));if(r){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.6d36ee6b.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontaca:";n.l=function(o,s,i,a){if(e[o])e[o].push(s);else{var r,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+i){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+i),r.src=o),e[o]=[s];var m=function(t,n){r.onerror=r.onload=null,clearTimeout(h);var s=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var i=new Promise((function(n,o){s=e[t]=[n,o]}));o.push(s[2]=i);var a=n.p+n.u(t),r=new Error,c=function(o){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",r.name="ChunkLoadError",r.type=i,r.request=a,s[1](r)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,i,a=o[0],r=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(c)var d=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkfrontaca"]=self["webpackChunkfrontaca"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1517)}));o=n.O(o)})();
//# sourceMappingURL=app.3c9c347f.js.map