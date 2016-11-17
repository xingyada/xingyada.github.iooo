function Bullet(t){this.type=t,this.x=0,this.y=0,this.rotate=0,this.iSpeed=2*this.type,this.move()}function Cannon(t){this.type=t,this.x=431,this.y=570,this.rotate=0,this.count=0,this.timer=null}function Coin(t){this.x=0,this.y=0,this.type=t,this.cur=0,this.move()}function loadImg(t,e){for(var r=0,i=0;i<t.length;i++){var n=new Image;n.src="img/"+t[i]+".png",function(i){n.onload=function(){JSON[t[i]]=this,r++,r==t.length&&e&&e()}}(i)}}function d2a(t){return t*Math.PI/180}function a2d(t){return 180*t/Math.PI}function rnd(t,e){return parseInt(Math.random()*(e-t)+t)}function Delfish(t){this.x=0,this.y=0,this.type=t,this.rotate=0,this.cur=0,this.move()}function Delshark(t){this.x=0,this.y=0,this.type=t,this.rotate=0,this.cur=0,this.move()}function Fish(t){this.type=t,this.x=0,this.y=0,this.rotate=130,this.move(),this.cur=0,this.iSpeed=1,this.collR=FISH_SIZE[this.type].collR}function Money(){this.coinText=0}function Shark(t){this.type=t,this.x=0,this.y=0,this.rotate=130,this.move(),this.cur=0,this.iSpeed=2,this.collR=68}function Web(t){this.x=0,this.y=0,this.scale=1,this.type=t}var BULLET_SIZE=[null,{x:86,y:0,w:24,h:26},{x:62,y:0,w:25,h:29},{x:30,y:0,w:31,h:35},{x:32,y:35,w:27,h:31},{x:30,y:82,w:29,h:33},{x:0,y:82,w:30,h:34},{x:0,y:0,w:30,h:44}];Bullet.prototype.draw=function(t){var e=BULLET_SIZE[this.type].w,r=BULLET_SIZE[this.type].h,i=BULLET_SIZE[this.type].x,n=BULLET_SIZE[this.type].y;t.save(),t.translate(this.x,this.y),t.rotate(d2a(this.rotate)),t.drawImage(JSON.bullet,i,n,e,r,-e/2,-r/2,e,r),t.restore()},Bullet.prototype.move=function(){var t=this;setInterval(function(){t.x+=Math.sin(d2a(t.rotate))*t.iSpeed,t.y-=Math.cos(d2a(t.rotate))*t.iSpeed},30),setInterval(function(){t.cur++,4==t.cur&&(t.cur=0)},100)};var CANNON_SIZE=[null,{w:74,h:74},{w:74,h:76},{w:74,h:76},{w:74,h:83},{w:74,h:85},{w:74,h:90},{w:74,h:94}];Cannon.prototype.draw=function(t){var e=CANNON_SIZE[this.type].w,r=CANNON_SIZE[this.type].h;t.save(),t.translate(this.x,this.y),t.rotate(d2a(this.rotate)),t.drawImage(JSON["cannon"+this.type],0,r*this.count,e,r,-e/2,-r/2,e,r),t.restore()},Cannon.prototype.emitChange=function(){var t=this;clearInterval(this.timer),this.timer=setInterval(function(){t.count++,5==t.count&&(t.count=0,clearInterval(t.timer))},30)},Coin.prototype.draw=function(t){t.save(),t.translate(this.x,this.y),this.type<3?t.drawImage(JSON.coinAni1,0,60*this.cur,60,60,-30,-30,60,60):t.drawImage(JSON.coinAni2,0,60*this.cur,60,60,-30,-30,60,60),t.restore()},Coin.prototype.move=function(){var t=this;setInterval(function(){t.x+=(20-t.x)/20,t.y+=(580-t.y)/20,t.cur++,10==t.cur&&(t.cur=0)},30)};var JSON={};Delfish.prototype.draw=function(t){var e=FISH_SIZE[this.type].w,r=FISH_SIZE[this.type].h;t.save(),t.translate(this.x,this.y),t.rotate(d2a(this.rotate)),this.rotate>90&&this.rotate<270&&t.scale(1,-1),t.drawImage(JSON["fish"+this.type],0,r*(this.cur+4),e,r,-e/2,-r/2,e,r),t.restore()},Delfish.prototype.move=function(){var t=this;setInterval(function(){t.cur++,4==t.cur&&(t.cur=0)},100)},Delshark.prototype.draw=function(t){if(1==this.type)var e=509,r=270;else var e=516,r=273;t.save(),t.translate(this.x,this.y),t.rotate(d2a(this.rotate)),this.rotate>90&&this.rotate<270&&t.scale(1,-1),t.drawImage(JSON["shark"+this.type],0,r*(this.cur+6),e,r,-e/4,-r/4,e/2,r/2),t.restore()},Delshark.prototype.move=function(){var t=this;setInterval(function(){t.cur++,6==t.cur&&(t.cur=0)},100)};var FISH_SIZE=[null,{w:55,h:37,collR:17},{w:78,h:64,collR:24},{w:72,h:56,collR:20},{w:77,h:59,collR:22},{w:107,h:122,collR:29}];Fish.prototype.draw=function(t){var e=FISH_SIZE[this.type].w,r=FISH_SIZE[this.type].h;t.save(),t.translate(this.x,this.y),t.rotate(d2a(this.rotate)),this.rotate>90&&this.rotate<270&&t.scale(1,-1),t.drawImage(JSON["fish"+this.type],0,r*this.cur,e,r,-e/2,-r/2,e,r),t.restore()},Fish.prototype.move=function(){var t=this;setInterval(function(){t.x+=Math.cos(d2a(t.rotate))*t.iSpeed,t.y+=Math.sin(d2a(t.rotate))*t.iSpeed},30),setInterval(function(){t.cur++,4==t.cur&&(t.cur=0)},100)},Fish.prototype.isIn=function(t,e){var r=this.x-t,i=this.y-e,n=Math.sqrt(r*r+i*i);return n<this.collR},window.onload=function(){var t=document.getElementById("c1"),e=t.getContext("2d"),r=50,i=[r,-r],n=.05,a=new Money;loadImg(resource,function(){var h=new Cannon(7),s=[],o=[],c=[],l=[],y=[],u=[],p=[];setInterval(function(){e.clearRect(0,0,t.width,t.height),e.beginPath(),e.drawImage(JSON.bottom,0,0,765,70,0,t.height-70,765,70),a.draw(e);for(var f=0;f<s.length;f++)s[f].draw(e);for(var f=0;f<s.length;f++)(s[f].x<r||s[f].x>t.width-r||s[f].y<r||s[f].y>t.width-r)&&(s.splice(f,1),f--);if(h.draw(e),Math.random()<n)if(i.sort(function(){return Math.random()-.5}),i[0]>0){var v=new Fish(rnd(1,6));v.x=-r,v.y=rnd(r,t.height-r),v.rotate=rnd(-45,45),o.push(v)}else{var v=new Fish(rnd(1,6));v.x=t.width+r,v.y=rnd(r,t.height-r),v.rotate=rnd(135,225),o.push(v)}for(var f=0;f<o.length;f++)o[f].draw(e);if(Math.random()<.001)if(i.sort(function(){return Math.random()-.5}),i[0]>0){var d=new Shark(rnd(1,3));d.x=-r,d.y=rnd(r,t.height-r),d.rotate=rnd(-45,45),c.push(d)}else{var d=new Shark(rnd(1,3));d.x=t.width+r,d.y=rnd(r,t.height-r),d.rotate=rnd(135,225),c.push(d)}for(var f=0;f<c.length;f++)c[f].draw(e);for(var f=0;f<o.length;f++)(o[f].x<-r||o[f].x>t.width+r||o[f].y<-r||o[f].y>t.width+r)&&(o.splice(f,1),f--);for(var f=0;f<c.length;f++)(c[f].x<-r||c[f].x>t.width+r||c[f].y<-r||c[f].y>t.width+r)&&(c.splice(f,1),f--);for(var f=0;f<c.length;f++)for(var w=0;w<s.length;w++)if(c[f].isIn(s[w].x,s[w].y)){var x=c[f].x,I=c[f].y,S=c[f].type,g=c[f].rotate;a.coinText+=100*S,c.splice(f,1),f--,s.splice(w,1),w--;var m=new Coin(S);m.x=x,m.y=I,l.push(m);var E=new Delshark(S);E.x=x,E.y=I,E.rotate=g,u.push(E);var N=new Web(h.type);N.x=x,N.y=I,p.push(N)}for(var f=0;f<o.length;f++)for(var w=0;w<s.length;w++)if(o[f].isIn(s[w].x,s[w].y)){var x=o[f].x,I=o[f].y,S=o[f].type,g=o[f].rotate;a.coinText+=S,o.splice(f,1),f--,s.splice(w,1),w--;var m=new Coin(S);m.x=x,m.y=I,l.push(m);var M=new Delfish(S);M.x=x,M.y=I,M.rotate=g,y.push(M);var N=new Web(h.type);N.x=x,N.y=I,p.push(N)}for(var f=0;f<l.length;f++)l[f].draw(e);for(var f=0;f<l.length;f++)(l[f].x<25||l[f].y>570)&&(l.splice(f,1),f--);for(var f=0;f<p.length;f++)p[f].draw(e),p[f].scale+=.01,p[f].scale>1.2&&p.splice(f,1);for(var f=0;f<y.length;f++)y[f].draw(e),setTimeout(function(){y.shift()},500);for(var f=0;f<u.length;f++)u[f].draw(e),setTimeout(function(){u.shift()},500)},30),t.onclick=function(e){var r=e.clientX-t.offsetLeft-h.x,i=h.y-e.clientY+t.offsetTop,n=90-a2d(Math.atan2(i,r));h.rotate=n,h.emitChange();var a=new Bullet(h.type);a.x=h.x,a.y=h.y,a.rotate=n,s.push(a)}})},COINTEXT_NUMBER=[1,10,100,1e3,1e4,1e5],Money.prototype.draw=function(t){for(var e=0;e<6;e++)t.drawImage(JSON.coinText,36*(parseInt(this.coinText/COINTEXT_NUMBER[5-e])%10),0,36,49,24*e+20,576,15,20)};var resource=["fish1","fish2","fish3","fish4","fish5","bottom","cannon1","cannon2","cannon3","cannon4","cannon5","cannon6","cannon7","bullet","coinAni1","coinAni2","web","coinText","shark1","shark2"];Shark.prototype.draw=function(t){if(1==this.type)var e=509,r=270;else var e=516,r=273;t.save(),t.translate(this.x,this.y),t.rotate(d2a(this.rotate)),this.rotate>90&&this.rotate<270&&t.scale(1,-1),t.drawImage(JSON["shark"+this.type],0,r*this.cur,e,r,-e/4,-r/4,e/2,r/2),t.restore()},Shark.prototype.move=function(){var t=this;setInterval(function(){t.x+=Math.cos(d2a(t.rotate))*t.iSpeed,t.y+=Math.sin(d2a(t.rotate))*t.iSpeed},30),setInterval(function(){t.cur++,7==t.cur&&(t.cur=0)},100)},Shark.prototype.isIn=function(t,e){var r=this.x-t,i=this.y-e,n=Math.sqrt(r*r+i*i);return n<this.collR};var WEB_SIZE=[null,{x:332,y:372,w:87,h:86},{x:13,y:412,w:109,h:108},{x:175,y:370,w:128,h:126},{x:252,y:195,w:150,h:147},{x:0,y:244,w:162,h:154},{x:0,y:240,w:182,h:182},{x:21,y:21,w:198,h:200}];Web.prototype.draw=function(t){var e=WEB_SIZE[this.type].x,r=WEB_SIZE[this.type].y,i=WEB_SIZE[this.type].w,n=WEB_SIZE[this.type].h;t.save(),t.translate(this.x,this.y),t.scale(this.scale,this.scale),t.drawImage(JSON.web,e,r,i,n,-i/2,-n/2,i,n),t.restore()};