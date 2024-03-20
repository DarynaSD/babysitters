import{b as i,d as f,R as F,j as e,r as h,u as I,a as P,c as g,e as D}from"./index-p2H9e3bG.js";const S="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let U=(t=21)=>{let n="",s=crypto.getRandomValues(new Uint8Array(t));for(;t--;)n+=S[s[t]&63];return n};const a="/babysitters/assets/sprite-BaA6Qq3Y.svg",r={primaryDark:"#11101c",secondaryDark:"#8a8a89",primaryLightest:"#fff",primaryLight:"#fbfbfb",primaryLighter:"rgba(251, 251, 251, 0.4)",light:"rgba(17, 16, 28, 0.2)",lightA:"rgba(17, 16, 28, 0.3)",lightB:"rgba(17, 16, 28, 0.5)",lightAHover:"rgba(17, 16, 28, 0.6)",accentLighter:"rgb(186, 232, 222)",accent:"#103931",accentHover:"#052b23",accentLight:"rgba(16, 57, 49, 0.2)",secondaryAccent:"rgba(240, 63, 59, 0.2)",back:"#f3f3f3",star:"#ffc531",price:"#38cd3e"},B=i.li`
    display: flex;
	gap: 18px;
	padding: 24px;
	background-color: ${r.primaryLight};
	border-radius: 24px;
	position: relative;

  @media ${f.md} {
    gap: 24px;
  }
`,W=i.div`
	display: flex;
	gap: 48px;
	align-items: center;
	position: absolute;
	right: 24px;
`,Y=i.ul`
	display: flex;
	gap: 32px;
`,d=i.li`
	position: relative;
	display: flex;
	gap: 4px;
`,z=i.svg`
display: block;
	width: 16px;
	height: 16px;
`,u=i.svg`
display: block;
	width: 16px;
	height: 16px;
	fill: ${r.star};
`,E=i.span`
color: ${r.price};
`,M=i.div`
	position: relative;
	width: 120px;
	height: 120px;
	border: 2px solid ${r.secondaryAccent};
	border-radius: 30px;
	padding: 12px;
	flex-shrink: 0;
`,N=i.svg`
   display: block;
	width: 26px;
	height: 26px;
	cursor: pointer;
	transition: stroke 150ms linear, fill 150ms linear;
`,H=i.div`
  position: absolute;
	top: 9px;
	right: 11px;
	display: block;
	width: 14px;
	height: 14px;
	background-color: ${r.price};
	border-radius: 50%;
	border: 2px solid ${r.primaryLight};
`,_=i.img`
border-radius: 15px;
`,T=i.div`
margin-bottom: 24px;
`,O=i.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 24px;
`,c=i.li`
background-color: ${r.back};
	border-radius: 24px;
	padding: 8px 16px;
`,q=i.span`
text-decoration: underline;
`,K=i.button`
	margin-top: 14px;
	text-decoration: underline;
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	background-color: transparent;
	border: none;
	cursor: pointer;
`,Q=i.div`
margin-top: 48px;
`,V=i.ul`
display: flex;
	flex-direction: column;
	gap: 25px;
	margin-bottom: 48px
`,G=i.div`
	display: flex;
	gap: 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.28;
`,J=i.div`
	font-size: 20px;
	font-weight: 500;
	width: 44px;
	height: 44px;
	color: ${r.accent};
	background-color: ${r.accentLight};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`,X=i.p`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	margin-bottom: 4px;
`,Z=i.p`
	display: flex;
	gap: 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.28;
`,ee=i.span`
 line-height: 1.28; 
`,te=i.button`
 font-weight: 500;
	font-size: 16px;
	line-height: 1.25;
	padding: 14px 28px;
	color: ${r.primaryLight};
	background-color: ${r.accent};
	border-radius: 30px;
	border: none;
	cursor: pointer;
	transition: background-color 150ms linear;
    
    &:hover {
    background-color: ${r.accentHover};
    }
`,ie=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(75, 74, 74, 0.8);
  z-index: 100;
`,re=i.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 380px;
max-width: 90vw;
height: 160px;
margin: auto;
padding: 25px;
background: #FCFCFC;
border-radius: 10px;

transition: stroke 250ms linear, rotate 200ms linear;
`,se=i.svg`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 44px;
  height: 44px;
  padding: 10px;
  stroke: ${r.secondaryDark};

  cursor: pointer;
  transition: stroke 250ms linear;

  &:is(:hover, :focus) {
    stroke: ${r.price};
  }
`,ne=({closePopUp:t})=>{document.body.style.overflow="hidden";const n=s=>{(s.target.dataset.type==="backdrop"||s.target.dataset.type==="close-modal")&&(document.body.style.overflow="scroll",t())};return F.createPortal(e.jsx(ie,{onClick:n,"data-type":"backdrop",children:e.jsxs(re,{children:[e.jsx(se,{onClick:n,"data-type":"close-modal",children:e.jsx("use",{href:`${a}#icon-x`})}),e.jsx("p",{children:"Adding to favorites is only available to logged users."})]})}),document.getElementById("popup"))},xe=t=>t.nannies.nannies,oe=t=>t.nannies.favorites,ae=({one:t,isOnFavPage:n})=>{const[s,b]=h.useState(!1),[m,j]=h.useState(!1),l=I(),v=new Date(t.birthday),y=new Date,k=v.getFullYear(),w=y.getFullYear()-k,p=P(oe).map(o=>o.id).includes(t.id),$=o=>{console.log(o),l(n?g(t):p?g(t):D(t))},L=()=>{j(!1)},A=()=>{b(!s)},R=t.characters.join(", "),x=Math.round(t.rating*10)/10;return e.jsxs(B,{children:[e.jsxs(W,{children:[e.jsxs(Y,{children:[e.jsxs(d,{children:[e.jsx(z,{children:e.jsx("use",{href:`${a}#icon-mapPin`})}),t.location]}),e.jsxs(d,{children:[e.jsx(u,{children:e.jsx("use",{href:`${a}#icon-star`})}),"Rating: ",x]}),e.jsxs(d,{children:["Price / 1 hour: ",e.jsxs(E,{children:[t.price_per_hour,"$"]})]})]}),e.jsx(N,{onClick:()=>$(t.id),children:p?e.jsx("use",{href:`${a}#icon-heart-active`}):e.jsx("use",{href:`${a}#icon-heart`})})]}),e.jsxs(M,{children:[e.jsx(H,{}),e.jsx(_,{src:t.avatar_url,alt:"avatar"})]}),e.jsxs("div",{children:[e.jsxs(T,{children:[e.jsx("p",{children:"Nanny"}),e.jsx("h2",{children:t.name})]}),e.jsxs(O,{children:[e.jsxs(c,{children:["Age: ",e.jsx(q,{children:w})]}),e.jsxs(c,{children:["Experience: ",t.experience]}),e.jsxs(c,{children:["Kids Age: ",t.kids_age]}),e.jsxs(c,{children:["Characters: ",R]}),e.jsxs(c,{children:["Education: ",t.education]})]}),e.jsx("p",{children:t.about}),!s&&e.jsx(K,{type:"button",onClick:A,children:"Read more"}),s&&e.jsxs(Q,{children:[e.jsx(V,{children:t.reviews.map((o,C)=>e.jsxs("li",{children:[e.jsxs(G,{children:[e.jsx(J,{children:o.reviewer.charAt(0)}),e.jsxs("div",{children:[e.jsx(X,{children:o.reviewer}),e.jsxs(Z,{children:[e.jsx(u,{children:e.jsx("use",{href:`${a}#icon-star`})})," ",e.jsx(ee,{children:x})]})]})]}),e.jsx("p",{children:o.comment})]},C))}),e.jsx(te,{type:"button",children:"Make an appointment"})]})]}),m&&e.jsx(ne,{closePopUp:L})]})},ce=i.ul`
     display: flex;
    flex-direction: column;
    gap: 24px;

  @media ${f.md} {
    gap: 32px;
  }

`,he=({data:t,isOnFavPage:n})=>e.jsx(ce,{children:t.map(s=>e.jsx(ae,{one:s,isOnFavPage:n},U()))});export{he as L,oe as a,xe as s};
