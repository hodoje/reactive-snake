(this["webpackJsonpreactive-snake"]=this["webpackJsonpreactive-snake"]||[]).push([[0],[,function(e,t,n){e.exports={Menu:"Menu_Menu__1_tXN",MenuOut:"Menu_MenuOut__o6KpC",MenuSlideOut:"Menu_MenuSlideOut__32DQP","left-to-right":"Menu_left-to-right__6-5Y_",NoSelect:"Menu_NoSelect__Mvcla",CurrentScore:"Menu_CurrentScore__1kUaE",Heading:"Menu_Heading__3S0CV",Highscore:"Menu_Highscore__1VdVw",NewHighscore:"Menu_NewHighscore__tIno5",WhiteText:"Menu_WhiteText__13okY",Button:"Menu_Button__33zyE",pulse:"Menu_pulse__1wyKe",DisabledButton:"Menu_DisabledButton__1oE3u",Controls:"Menu_Controls__1KCC7",ControlsHeading:"Menu_ControlsHeading__2d3Xq",DifficultyHeading:"Menu_DifficultyHeading__3trqT",SpeedSettings:"Menu_SpeedSettings__Abp5d",WallsSettings:"Menu_WallsSettings__1uTvk",FoodContainer:"Menu_FoodContainer__3TIOs",FoodHolder:"Menu_FoodHolder__1vZlO",Food:"Menu_Food__2D-tY"}},,,,,,function(e,t,n){e.exports={SlideContainer:"RangeSlider_SlideContainer__1QNbC",Slider:"RangeSlider_Slider__29pdY",SliderLabelsContainer:"RangeSlider_SliderLabelsContainer__15yMD",SliderLabel:"RangeSlider_SliderLabel__3HTx0"}},function(e,t,n){e.exports={Form:"ControlForm_Form__139Ll",Button:"ControlForm_Button__r93-E",Direction:"ControlForm_Direction__-wXZe",Input:"ControlForm_Input__3lTuA"}},,,,,,,,,,,,function(e,t,n){e.exports={Countdown:"Countdown_Countdown__26EMm"}},function(e,t,n){e.exports={Snake:"Snake_Snake__1xLHX"}},function(e,t,n){e.exports=n.p+"static/media/background.0439cea2.png"},function(e,t,n){e.exports={Game:"Game_Game__2dFUv"}},,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),i=n.n(r),c=(n(30),n(31),n(3)),l=n(12),s=n(1),u=n.n(s),d=n(11),h=n(5),f=function(e){return e.children},m=n(7),_=n.n(m),E=function(e){var t=e.background,n=e.labels,a=e.min,r=e.max,i=e.step,c=e.width,l=e.height,s=e.initialValue,u=e.onChange,d={background:t,width:c,height:l,boxShadow:"0 0 10px ".concat(t)};return o.a.createElement("div",{className:_.a.SlideContainer},o.a.createElement("div",{className:_.a.SliderLabelsContainer,style:{width:c}},o.a.createElement(f,null,n.map((function(e){return o.a.createElement("span",{key:e,className:_.a.SliderLabel},e)})))),o.a.createElement("input",{type:"range",min:a,max:r,step:i,className:_.a.Slider,defaultValue:s,onChange:u,style:d}))},O=Object.freeze({canvasWidth:700,canvasHeight:700,scale:35,stroke:"white",bonusFoodSpawnInterval:15e3,bonusFoodSpawnDuration:5e3}),g=Object.freeze({head:{fill:"#93FF19",stroke:"black"},body:{fill:"white",stroke:"black"},food:{fill:"#FF0080",stroke:"black"},bonusFood:{fill:"yellow",stroke:"black"},wall:{fill:"black",stroke:"black"}}),w=Object.freeze({easy:{name:"EASY",value:1},medium:{name:"MEDIUM",value:2},hard:{name:"HARD",value:3}}),S=Object.freeze({easy:{speed:8,points:15},medium:{speed:10,points:30},hard:{speed:13,points:50}}),p=Object.freeze({easy:{walls:0,points:0},medium:{walls:3,points:35},hard:{walls:6,points:70}}),C=n(17),v=function(e,t){return Object(C.a)(Object(C.a)({},e),t)},b={keys:{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,KEY_0:48,KEY_1:49,KEY_2:50,KEY_3:51,KEY_4:52,KEY_5:53,KEY_6:54,KEY_7:55,KEY_8:56,KEY_9:57,KEY_A:65,KEY_B:66,KEY_C:67,KEY_D:68,KEY_E:69,KEY_F:70,KEY_G:71,KEY_H:72,KEY_I:73,KEY_J:74,KEY_K:75,KEY_L:76,KEY_M:77,KEY_N:78,KEY_O:79,KEY_P:80,KEY_Q:81,KEY_R:82,KEY_S:83,KEY_T:84,KEY_U:85,KEY_V:86,KEY_W:87,KEY_X:88,KEY_Y:89,KEY_Z:90,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMICOLON:186,EQUALS:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRACKET:221,SINGLE_QUOTE:222}},y={keys:{8:"&lArr;",9:"TAB",13:"&#9166;",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSE",20:"C_LOCK",27:"ESC",32:"SPACE",33:"PGUP",34:"PGDN",35:"END",36:"HOME",37:"&larr;",38:"&uarr;",39:"&rarr;",40:"&darr;",45:"INS",46:"DEL",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",93:"SELECT",96:"N_0",97:"N_1",98:"N_2",99:"N_3",100:"N_4",101:"N_5",102:"N_6",103:"N_7",104:"N_8",105:"N_9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"N_LOCK",145:"S_LOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"{",220:"\\",221:"}",222:"'"}},N=function(e,t,n){var a=Math.floor(e/n),o=Math.floor(t/n),r=Math.floor(a/2),i=Math.floor(o/2);return{innerOuterEdgeCol:r/2,innerOuterEdgeRow:i/2,middleCol:r,middleRow:i,cols:a,rows:o}},k=n(8),T=n.n(k),F=function(e){var t=e.control,n=e.direction,r=e.onAssignKey,i=Object(a.useRef)(null),c=function(e){i.current.innerHTML=y.keys[e]};return Object(a.useEffect)((function(){c(t)}),[t]),o.a.createElement("div",{className:T.a.Form},o.a.createElement(d.a,{icon:n,className:T.a.Direction}),o.a.createElement("button",{className:T.a.Button,onKeyDown:function(e){c(e.keyCode),r(e.keyCode)}},o.a.createElement("span",{ref:i,className:T.a.Input})))},M=n(20),A=n.n(M),L=function(e){var t=Object(a.useState)(3),n=Object(l.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var t;return r>0?t=setTimeout((function(){return i(r-1)}),1e3):e.callback(),function(){clearTimeout(t)}}),[e,r]),o.a.createElement("div",{className:A.a.Countdown},o.a.createElement("div",null,r))},R=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.c)((function(e){return e.game.gameOver})),s=Object(c.c)((function(e){return e.game.initialLoad})),m=Object(c.c)((function(e){return e.game.currentScore})),_=Object(c.c)((function(e){return e.game.highscore})),O=Object(c.c)((function(e){return e.game.isNewHighscore})),g=Object(c.c)((function(e){return e.game.speedGameMode})),S=Object(c.c)((function(e){return e.game.wallsGameMode})),p=Object(c.c)((function(e){return e.controls.leftControl})),C=Object(c.c)((function(e){return e.controls.upControl})),v=Object(c.c)((function(e){return e.controls.rightControl})),b=Object(c.c)((function(e){return e.controls.downControl})),y=Object(c.b)(),N=[u.a.Button];i||N.push(u.a.DisabledButton);var k=o.a.createElement("p",{className:[u.a.Highscore,u.a.WhiteText,u.a.NoSelect].join(" ")},"Best score: ",_);O&&(k=o.a.createElement(f,null,o.a.createElement("span",{className:[u.a.NewHighscore,u.a.NoSelect].join(" ")},"New!"),"\xa0",o.a.createElement("p",{className:[u.a.Highscore,u.a.WhiteText,u.a.NoSelect].join(" ")},"Best score: ",_),";"));var T=null,M=o.a.createElement("h1",{className:[u.a.Heading,u.a.WhiteText,u.a.NoSelect].join(" ")},"Snake Game"),A=o.a.createElement(f,null,o.a.createElement("p",{className:[u.a.CurrentScore,u.a.WhiteText,u.a.NoSelect].join(" ")},m),k),R=[u.a.Menu];s?i&&(R.push(u.a.MenuSlideOut),T=A):(T=M,R.push(u.a.MenuOut));var D=o.a.createElement(F,{control:p,direction:h.b,onAssignKey:function(e){y({type:"SET_LEFT_CONTROL",control:e})}}),x=o.a.createElement(F,{control:C,direction:h.d,onAssignKey:function(e){y({type:"SET_UP_CONTROL",control:e})}}),j=o.a.createElement(F,{control:v,direction:h.c,onAssignKey:function(e){y({type:"SET_RIGHT_CONTROL",control:e})}}),K=o.a.createElement(F,{control:b,direction:h.a,onAssignKey:function(e){y({type:"SET_DOWN_CONTROL",control:e})}}),H=o.a.createElement(f,null,o.a.createElement("div",null,T),o.a.createElement("div",null,o.a.createElement("div",{className:u.a.FoodContainer},o.a.createElement("div",{className:u.a.FoodHolder},o.a.createElement("span",{className:[u.a.WhiteText,u.a.NoSelect].join(" ")},"Food"),o.a.createElement("br",null),o.a.createElement("div",{className:u.a.Food,style:{background:"#FF0080",boxShadow:"0 0 10px #FF0080"}})),o.a.createElement("div",{className:u.a.FoodHolder},o.a.createElement("span",{className:[u.a.WhiteText,u.a.NoSelect].join(" ")},"Bonus"),o.a.createElement("br",null),o.a.createElement("div",{className:u.a.Food,style:{background:"yellow",boxShadow:"0 0 10px yellow"}})))),o.a.createElement("div",null,o.a.createElement("h3",{className:[u.a.WhiteText,u.a.NoSelect,u.a.DifficultyHeading].join(" ")},"Difficulty"),o.a.createElement("div",{className:u.a.SpeedSettings},o.a.createElement("h4",{className:[u.a.WhiteText,u.a.NoSelect].join(" ")},"Speed"),o.a.createElement(E,{background:"rgba(0, 0, 0, 1)",labels:["easy","medium","hard"],width:"300px",height:"6px",min:"1",max:"3",step:"1",initialValue:g.value,onChange:function(e){var t,n=e.target.value;t=+n===w.easy.value?w.easy:+n===w.medium.value?w.medium:w.hard,y(function(e){return{type:"SET_SPEED",mode:e}}(t))}})),o.a.createElement("div",{className:u.a.WallsSettings},o.a.createElement("h4",{className:[u.a.WhiteText,u.a.NoSelect].join(" ")},"Walls"),o.a.createElement(E,{background:"rgba(0, 0, 0, 1)",labels:["easy","medium","hard"],width:"300px",height:"6px",min:"1",max:"3",step:"1",initialValue:S.value,onChange:function(e){var t,n=e.target.value;t=+n===w.easy.value?w.easy:+n===w.medium.value?w.medium:w.hard,y(function(e){return{type:"SET_WALLS",mode:e}}(t))}}))),o.a.createElement("div",null,o.a.createElement("h3",{className:[u.a.WhiteText,u.a.NoSelect,u.a.ControlsHeading].join(" ")},"Controls"),o.a.createElement("div",{className:u.a.Controls},D,x,j,K)),o.a.createElement("div",null,o.a.createElement(d.a,{icon:h.e,className:N.join(" "),onClick:function(){r(!0)}})));return n&&(H=o.a.createElement(L,{callback:function(){y({type:"START_GAME"})}})),o.a.createElement("div",{className:R.join(" ")},H)},D=n(21),x=n.n(D),j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.predraw,o=t.postdraw,r=Object(a.useRef)(null);return Object(a.useEffect)((function(){var a,i,c,l,s,u=r.current,d=u.getContext(t.context||"2d"),h=t.frameRate;return i=1e3/h,l=window.performance.now(),function t(r){a=window.requestAnimationFrame(t),(s=(c=r)-l)>i&&(l=c-s%i,n(d,u),e(d),o(d))}(),function(){window.cancelAnimationFrame(a)}}),[e,t,n,o]),r},K=function(e,t){e.save();var n=e.canvas,a=n.width,o=n.height;e.clearRect(0,0,a,o)},H=function(e){e.restore()},W=function(e){var t=e.draw,n=e.frameRate,a=e.predraw,r=void 0===a?K:a,i=e.postdraw,c=void 0===i?H:i,l=e.width,s=e.height,u=j(t,{predraw:r,postdraw:c,frameRate:n});return o.a.createElement("canvas",{width:l,height:s,ref:u})},I=n(6),Y=function e(t,n){Object(I.a)(this,e),this.x=t,this.y=n},P=function e(t,n,a,o,r,i){var c=this;Object(I.a)(this,e),this.pickFoodLocationRandom=function(){var e=Math.floor(Math.random()*c.cols),t=Math.floor(Math.random()*c.rows);return new Y(e*c.scale,t*c.scale)},this.checkIfIsOnTail=function(e,t,n){for(var a=!1,o=0;o<n.length;o++){var r=n[o];if(r.x===e&&r.y===t){a=!0;break}}return a},this.checkIfIsOnWall=function(e,t,n){for(var a=!1,o=0;o<n.length;o++){var r=n[o];if(r.x===e&&r.y===t){a=!0;break}}return a},this.checkIfIsOnHead=function(e,t,n){return n.x===e&&n.y===t},this.checkIfFreeFoodLocation=function(e,t,n,a,o){var r=!0;return(c.checkIfIsOnTail(e,t,a)||c.checkIfIsOnWall(e,t,o)||c.checkIfIsOnHead(e,t,n))&&(r=!1),r},this.pickFoodLocationFromAvailableLocations=function(e,t,n){for(var a=null,o=0;o<c.rows;o++)for(var r=0;r<c.cols;r++){var i=r*c.scale,l=o*c.scale;if(c.checkIfFreeFoodLocation(i,l,e,t,n)){a=new Y(i,l);break}}return a},this.pickFoodLocation=function(e,t,n){var a;return null!==(a=c.pickLocationAttempt<c.pickLocationAttemptLimit?c.pickFoodLocationRandom():c.pickFoodLocationFromAvailableLocations(e,t,n))&&(c.checkIfFreeFoodLocation(a.x,a.y,e,t,n)?(c.x=a.x,c.y=a.y,c.pickLocationAttempt=0):(c.pickLocationAttempt++,c.pickFoodLocation(e,t,n)),!0)},this.setFoodSpawnPoint=function(e,t,n){c.pickFoodLocation(e,t,n)||c.triggerEndGame()},this.show=function(e){e.shadowBlur=10,e.shadowColor=c.fill,e.fillStyle=c.fill,e.fillRect(c.x,c.y,c.scale,c.scale)},this.x=0,this.y=0,this.pickLocationAttempt=0,this.pickLocationAttemptLimit=3,this.cols=t,this.rows=n,this.scale=a,this.triggerEndGame=i,this.fill=o,this.stroke=r},B=function e(t,n,a,o,r,i,c){var l=this;Object(I.a)(this,e),this.update=function(){if(!l.isDead){l.length===l.tail.length&&l.tail.shift(),l.tail[l.length-1]=new Y(l.x,l.y);var e=l.x+l.dx*l.scale,t=l.y+l.dy*l.scale;e>=0&&e<=l.canvasWidth-l.scale&&(l.x=e),t>=0&&t<=l.canvasHeight-l.scale&&(l.y=t),l.setLastKnownDirection()}},this.show=function(e){e.shadowBlur=10,e.shadowColor=g.body.fill,e.fillStyle=g.body.fill;for(var t=0;t<l.tail.length;t++)e.fillRect(l.tail[t].x,l.tail[t].y,l.scale,l.scale);e.shadowBlur=10,e.shadowColor=g.head.fill,e.fillStyle=g.head.fill,e.fillRect(l.x,l.y,l.scale,l.scale)},this.getDirection=function(e){if(!l.isDead){var t=e.keyCode;switch(t){case l.upControl:l.setDirection(0,-1,t);break;case l.downControl:l.setDirection(0,1,t);break;case l.leftControl:l.setDirection(-1,0,t);break;case l.rightControl:l.setDirection(1,0,t)}}},this.setDirection=function(e,t,n){var a=!0;switch(n){case l.upControl:l.lastKnownDirection===l.downControl&&(a=!1);break;case l.downControl:l.lastKnownDirection===l.upControl&&(a=!1);break;case l.leftControl:l.lastKnownDirection===l.rightControl&&(a=!1);break;case l.rightControl:l.lastKnownDirection===l.leftControl&&(a=!1)}a&&(l.direction=n,l.dx=e,l.dy=t)},this.eat=function(e,t){return l.x===e.x&&l.y===e.y&&(l.grow(),t(),!0)},this.grow=function(){l.length++},this.deathByOutOfBounds=function(e,t){if(e<0||e>=l.canvasWidth||t<0||t>=l.canvasHeight)return l.isDead=!0,!0},this.deathByWalls=function(e,t,n){for(var a=0;a<n.length;a++){var o=n[a];if(e===o.x&&t===o.y)return l.isDead=!0,!0}},this.deathBySuicide=function(e,t){for(var n=0;n<l.tail.length;n++){var a=l.tail[n];if(e===a.x&&t===a.y)return l.isDead=!0,!0}},this.death=function(e){var t=l.x+l.dx*l.scale,n=l.y+l.dy*l.scale;return!!l.deathByOutOfBounds(t,n)||(!!l.deathByWalls(t,n,e)||!!l.deathBySuicide(t,n))},this.getSnakeHead=function(){return new Y(l.x,l.y)},this.getSnakeTail=function(){return l.tail},this.setLastKnownDirection=function(){l.lastKnownDirection=l.direction},this.x=0,this.y=0,this.direction=b.keys.RIGHT_ARROW,this.lastKnownDirection=this.direction,this.dx=1,this.dy=0,this.canvasWidth=t,this.canvasHeight=n,this.scale=a,this.length=0,this.tail=[],this.isDead=!1,this.leftControl=o,this.upControl=r,this.rightControl=i,this.downControl=c},G=n(22),U=n.n(G),V=function(){var e,t,n=Object(c.c)((function(e){return e.game.gameOver})),r=Object(c.c)((function(e){return e.game.initialLoad})),i=Object(c.c)((function(e){return e.game.speed})),l=Object(c.c)((function(e){return e.game.walls})),s=Object(c.c)((function(e){return e.controls.leftControl})),u=Object(c.c)((function(e){return e.controls.upControl})),d=Object(c.c)((function(e){return e.controls.rightControl})),h=Object(c.c)((function(e){return e.controls.downControl})),f=Object(c.b)(),m=Object(a.useCallback)((function(){f({type:"END_GAME"})}),[f]),_=Object(a.useCallback)((function(){f({type:"EAT_FOOD"})}),[f]),E=Object(a.useCallback)((function(){f({type:"EAT_BONUS_FOOD"})}),[f]),w=i.speed,S=O.canvasWidth,p=O.canvasHeight,C=O.scale,v=Math.floor(S/C),b=Math.floor(p/C),y=[],k=new B(O.canvasWidth,O.canvasHeight,O.scale,s,u,d,h),T=new P(v,b,C,g.food.fill,g.food.stroke,m),F=new P(v,b,C,g.bonusFood.fill,g.bonusFood.stroke,m),M=O.bonusFoodSpawnInterval,A=O.bonusFoodSpawnDuration,L=!1,R=Object(a.useCallback)((function(){F.x=Number.MIN_SAFE_INTEGER,F.y=Number.MIN_SAFE_INTEGER,L=!1,e=Date.now()}),[F,L,e]),D=Object(a.useCallback)((function(){for(var e=l.walls/100,t=v*b*e,n=function(e){var t=Math.random()>.5,n=void 0;if(n=t?function(e,t,n){var a=N(e,t,n),o=a.innerOuterEdgeCol,r=a.innerOuterEdgeRow,i=a.middleCol,c=a.middleRow;return{x:(i+(Math.floor(Math.random()*o)+1)*(Math.random()>.5?1:-1))*n,y:(c+(Math.floor(Math.random()*r)+1)*(Math.random()>.5?1:-1))*n}}(S,p,C):function(e,t,n){var a,o,r=N(e,t,n),i=r.innerOuterEdgeCol,c=r.innerOuterEdgeRow,l=r.cols,s=r.rows,u=Math.floor(Math.random()*i),d=Math.floor(Math.random()*c),h=Math.random(),f=Math.random();if(h<.33)a=1+u;else if(h<.66)a=l-u;else{a=Math.random()>.5?l/2-u:l/2+u}if(f<.33)o=1+d;else if(f<.66)o=s-d;else{o=Math.random()>.5?s/2-d:s/2+d}return{x:a*n,y:o*n}}(S,p,C),-1!==y.findIndex((function(e){return e.x===n.x&&e.y===n.y})))return e--,a=e,"continue";y.push(n),a=e},a=0;a<t;a++)n(a)}),[v,b,l,y,S,p,C]),j=function(a){if(r&&!n){if(function(e){e.shadowBlur=10,e.shadowColor=g.wall.fill,e.fillStyle=g.wall.fill;for(var t=0;t<y.length;t++)e.fillRect(y[t].x,y[t].y,C,C)}(a),k.death(y))return void m();k.update(),k.show(a),k.eat(T,_)&&T.setFoodSpawnPoint(k.getSnakeHead(),k.getSnakeTail(),y),k.eat(F,E)&&R(),T.show(a);var o=Date.now();o-e>M&&(L||(F.setFoodSpawnPoint(k.getSnakeHead(),k.getSnakeTail(),y),L=!0,t=Date.now())),L&&(o-t>A&&(R(),t=o),F.show(a))}},K=Object(a.useCallback)((function(){D(),T.setFoodSpawnPoint(k.getSnakeHead(),k.getSnakeTail(),y),R()}),[D,k,y,T,R]);return Object(a.useEffect)((function(){return document.removeEventListener("keydown",k.getDirection),document.addEventListener("keydown",k.getDirection),function(){document.removeEventListener("keydown",k.getDirection)}}),[k.getDirection]),Object(a.useEffect)((function(){K()}),[K]),o.a.createElement("div",{className:x.a.Snake},o.a.createElement("img",{src:U.a,alt:""}),o.a.createElement(W,{draw:function(e){j(e)},width:S,height:p,frameRate:w}))},z=n(23),Q=n.n(z),X=function(){var e=Object(c.c)((function(e){return e.game.gameOver}));return o.a.createElement("div",{className:Q.a.Game},e&&o.a.createElement(R,null),o.a.createElement(V,null))},J=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(4),q=n(24),$={gameOver:!0,initialLoad:!1,speed:S.easy,walls:p.easy,speedGameMode:w.easy,wallsGameMode:w.easy,bonusFoodPercent:S.easy.speed+p.easy.walls,currentScore:0,highscore:0,isNewHighscore:!1,upControl:b.keys.UP_ARROW,downControl:b.keys.DOWN_ARROW,leftControl:b.keys.LEFT_ARROW,rightControl:b.keys.RIGHT_ARROW},ee=function(e,t){return v(e,{gameOver:!1,currentScore:0,isNewHighscore:!1,initialLoad:!0})},te=function(e,t){var n=e.currentScore>e.highscore?e.currentScore:e.highscore,a=e.currentScore>e.highscore;return v(e,{gameOver:!0,highscore:n,isNewHighscore:a})},ne=function(e,t){var n=e.speed.points+e.walls.points,a=e.currentScore+n;return v(e,{currentScore:a})},ae=function(e,t){var n=e.speed.points+e.walls.points+Math.floor(.5*(e.speed.points+e.walls.points)),a=e.currentScore+n;return v(e,{currentScore:a})},oe=function(e,t){var n,a;switch(t.mode){case w.easy:n=S.easy,a=w.easy;break;case w.medium:n=S.medium,a=w.medium;break;case w.hard:n=S.hard,a=w.hard;break;default:n=e.speed,a=e.speedGameMode}return v(e,{speed:n,speedGameMode:a})},re=function(e,t){var n,a;switch(t.mode){case w.easy:n=p.easy,a=w.easy;break;case w.medium:n=p.medium,a=w.medium;break;case w.hard:n=p.hard,a=w.hard;break;default:n=e.walls,a=e.wallsGameMode}return v(e,{walls:n,wallsGameMode:a})},ie=function(e,t){return v(e,{upControl:t.control})},ce=function(e,t){return v(e,{downControl:t.control})},le=function(e,t){return v(e,{leftControl:t.control})},se=function(e,t){return v(e,{rightControl:t.control})},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_GAME":return ee(e);case"END_GAME":return te(e);case"EAT_FOOD":return ne(e);case"EAT_BONUS_FOOD":return ae(e);case"SET_SPEED":return oe(e,t);case"SET_WALLS":return re(e,t);case"SET_UP_CONTROL":return ie(e,t);case"SET_DOWN_CONTROL":return ce(e,t);case"SET_LEFT_CONTROL":return le(e,t);case"SET_RIGHT_CONTROL":return se(e,t);default:return e}},de={upControl:b.keys.UP_ARROW,downControl:b.keys.DOWN_ARROW,leftControl:b.keys.LEFT_ARROW,rightControl:b.keys.RIGHT_ARROW},he=function(e,t){return v(e,{upControl:t.control})},fe=function(e,t){return v(e,{downControl:t.control})},me=function(e,t){return v(e,{leftControl:t.control})},_e=function(e,t){return v(e,{rightControl:t.control})},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_UP_CONTROL":return he(e,t);case"SET_DOWN_CONTROL":return fe(e,t);case"SET_LEFT_CONTROL":return me(e,t);case"SET_RIGHT_CONTROL":return _e(e,t);default:return e}},Oe=Object(Z.c)({game:ue,controls:Ee}),ge=Object(Z.e)(Oe,Object(Z.d)(Object(Z.a)(q.a)));i.a.render(o.a.createElement(c.a,{store:ge},o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.93d63818.chunk.js.map