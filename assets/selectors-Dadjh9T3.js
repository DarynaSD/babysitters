import{b as i,d as u,R,j as e,r as h,u as C,t as F,c as P,e as D}from"./index-C1E0EIuC.js";const I="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let U=(t=21)=>{let s="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)s+=I[n[t]&63];return s};const a="/babysitters/assets/sprite-BaA6Qq3Y.svg",r={primaryDark:"#11101c",secondaryDark:"#8a8a89",primaryLightest:"#fff",primaryLight:"#fbfbfb",primaryLighter:"rgba(251, 251, 251, 0.4)",light:"rgba(17, 16, 28, 0.2)",lightA:"rgba(17, 16, 28, 0.3)",lightB:"rgba(17, 16, 28, 0.5)",lightAHover:"rgba(17, 16, 28, 0.6)",accentLighter:"rgb(186, 232, 222)",accent:"#103931",accentHover:"#052b23",accentLight:"rgba(16, 57, 49, 0.2)",secondaryAccent:"rgba(240, 63, 59, 0.2)",back:"#f3f3f3",star:"#ffc531",price:"#38cd3e"},B=i.li`
    display: flex;
	gap: 18px;
	padding: 24px;
	background-color: ${r.primaryLight};
	border-radius: 24px;
	position: relative;

  @media ${u.md} {
    gap: 24px;
  }
`,S=i.div`
	display: flex;
	gap: 48px;
	align-items: center;
	position: absolute;
	right: 24px;
`,W=i.ul`
	display: flex;
	gap: 32px;
`,p=i.li`
	position: relative;
	display: flex;
	gap: 4px;
`,Y=i.svg`
display: block;
	width: 16px;
	height: 16px;
`,g=i.svg`
display: block;
	width: 16px;
	height: 16px;
	fill: ${r.star};
`,z=i.span`
color: ${r.price};
`,E=i.div`
	position: relative;
	width: 120px;
	height: 120px;
	border: 2px solid ${r.secondaryAccent};
	border-radius: 30px;
	padding: 12px;
	flex-shrink: 0;
`,M=i.svg`
   display: block;
	width: 26px;
	height: 26px;
	cursor: pointer;
	transition: stroke 150ms linear, fill 150ms linear;
`,N=i.div`
  position: absolute;
	top: 9px;
	right: 11px;
	display: block;
	width: 14px;
	height: 14px;
	background-color: ${r.price};
	border-radius: 50%;
	border: 2px solid ${r.primaryLight};
`,H=i.img`
border-radius: 15px;
`,_=i.div`
margin-bottom: 24px;
`,T=i.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 24px;
`,c=i.li`
background-color: ${r.back};
	border-radius: 24px;
	padding: 8px 16px;
`,O=i.span`
text-decoration: underline;
`,q=i.button`
	margin-top: 14px;
	text-decoration: underline;
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	background-color: transparent;
	border: none;
	cursor: pointer;
`,K=i.div`
margin-top: 48px;
`,Q=i.ul`
display: flex;
	flex-direction: column;
	gap: 25px;
	margin-bottom: 48px
`,V=i.div`
	display: flex;
	gap: 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.28;
`,G=i.div`
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
`,J=i.p`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 500;
	margin-bottom: 4px;
`,X=i.p`
	display: flex;
	gap: 8px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.28;
`,Z=i.span`
 line-height: 1.28; 
`,ee=i.button`
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
`,te=i.div`
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
`,ie=i.div`
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
`,re=i.svg`
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
`,se=({closePopUp:t})=>{document.body.style.overflow="hidden";const s=n=>{(n.target.dataset.type==="backdrop"||n.target.dataset.type==="close-modal")&&(document.body.style.overflow="scroll",t())};return R.createPortal(e.jsx(te,{onClick:s,"data-type":"backdrop",children:e.jsxs(ie,{children:[e.jsx(re,{onClick:s,"data-type":"close-modal",children:e.jsx("use",{href:`${a}#icon-x`})}),e.jsx("p",{children:"Adding to favorites is only available to logged users."})]})}),document.getElementById("popup"))},ne=({one:t})=>{const[s,n]=h.useState(!1),[f,b]=h.useState(!1),l=C(),m=new Date(t.birthday),j=new Date,v=m.getFullYear(),y=j.getFullYear()-v,{isLiked:d}=t,k=o=>{console.log(o),l(F(o)),l(d?P(t):D(t))},w=()=>{b(!1)},$=()=>{n(!s)},L=t.characters.join(", "),x=Math.round(t.rating*10)/10;return e.jsxs(B,{children:[e.jsxs(S,{children:[e.jsxs(W,{children:[e.jsxs(p,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${a}#icon-mapPin`})}),t.location]}),e.jsxs(p,{children:[e.jsx(g,{children:e.jsx("use",{href:`${a}#icon-star`})}),"Rating: ",x]}),e.jsxs(p,{children:["Price / 1 hour: ",e.jsxs(z,{children:[t.price_per_hour,"$"]})]})]}),e.jsx(M,{onClick:()=>k(t.id),children:d?e.jsx("use",{href:`${a}#icon-heart-active`}):e.jsx("use",{href:`${a}#icon-heart`})})]}),e.jsxs(E,{children:[e.jsx(N,{}),e.jsx(H,{src:t.avatar_url,alt:"avatar"})]}),e.jsxs("div",{children:[e.jsxs(_,{children:[e.jsx("p",{children:"Nanny"}),e.jsx("h2",{children:t.name})]}),e.jsxs(T,{children:[e.jsxs(c,{children:["Age: ",e.jsx(O,{children:y})]}),e.jsxs(c,{children:["Experience: ",t.experience]}),e.jsxs(c,{children:["Kids Age: ",t.kids_age]}),e.jsxs(c,{children:["Characters: ",L]}),e.jsxs(c,{children:["Education: ",t.education]})]}),e.jsx("p",{children:t.about}),!s&&e.jsx(q,{type:"button",onClick:$,children:"Read more"}),s&&e.jsxs(K,{children:[e.jsx(Q,{children:t.reviews.map((o,A)=>e.jsxs("li",{children:[e.jsxs(V,{children:[e.jsx(G,{children:o.reviewer.charAt(0)}),e.jsxs("div",{children:[e.jsx(J,{children:o.reviewer}),e.jsxs(X,{children:[e.jsx(g,{children:e.jsx("use",{href:`${a}#icon-star`})})," ",e.jsx(Z,{children:x})]})]})]}),e.jsx("p",{children:o.comment})]},A))}),e.jsx(ee,{type:"button",children:"Make an appointment"})]})]}),f&&e.jsx(se,{closePopUp:w})]})},oe=i.ul`
     display: flex;
    flex-direction: column;
    gap: 24px;

  @media ${u.md} {
    gap: 32px;
  }

`,le=({data:t})=>e.jsx(oe,{children:t.map(s=>e.jsx(ne,{one:s},U()))}),pe=t=>t.nannies.nannies,de=t=>t.nannies.favorites;export{le as L,de as a,pe as s};
