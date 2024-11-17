(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(504)}])},504:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var o=a(4848),l=a(6540),s=a(3596);let i=e=>{let{compositions:t,extras:a,profitPercentage:l,totalCost:i,totalCompositions:n,totalExtras:r}=e;return(0,o.jsx)("div",{className:"buttonContainer",children:(0,o.jsx)("button",{className:"generatePdfButton",onClick:()=>{let e=new s.uE;e.addImage("/images/arom-logo.png","PNG",15,10,50,50),e.setFontSize(22),e.setFont("helvetica","bold"),e.text("Relat\xf3rio de C\xe1lculos de Aromaterapia",20,80),e.setFontSize(14),e.setFont("helvetica","normal"),e.text("Composi\xe7\xf5es:",20,100),t.forEach((t,a)=>{let o=110+30*a;e.text("Composi\xe7\xe3o ".concat(a+1,":"),20,o),e.text("\xd3leo: ".concat(t.oil||"N\xe3o informado"),20,o+10),e.text("Quantidade: ".concat(t.quantity?"".concat(t.quantity,"ml"):"N\xe3o informado"),20,o+20),e.text("Pre\xe7o Total: R$ ".concat(t.price?t.price.toFixed(2):"N\xe3o informado"),20,o+30),e.text("Total Composi\xe7\xe3o: R$ ".concat(t.totalComposition?t.totalComposition.toFixed(2):"N\xe3o informado"),20,o+40)}),e.setFontSize(14),e.setFont("helvetica","normal"),e.text("Extras:",20,150+30*t.length),a.forEach((a,o)=>{let l=160+10*o+30*t.length;e.text("".concat(a.name||"N\xe3o informado",": R$ ").concat(a.value?a.value.toFixed(2):"N\xe3o informado"),20,l)}),e.setFontSize(14),e.setFont("helvetica","bold"),e.text("Total Composi\xe7\xf5es: R$ ".concat(n?n.toFixed(2):"N\xe3o informado"),20,170+10*a.length+30*t.length),e.text("Total Extras: R$ ".concat(r?r.toFixed(2):"N\xe3o informado"),20,180+10*a.length+30*t.length),e.text("Total de Custo: R$ ".concat(i?i.toFixed(2):"N\xe3o informado"),20,190+10*a.length+30*t.length),e.text("Porcentagem de Lucro: ".concat(void 0!==l?l+"%":"N\xe3o informado"),20,200+10*a.length+30*t.length),e.text("Valor Final: R$ ".concat(i&&void 0!==l?(i*(1+l/100)).toFixed(2):"N\xe3o informado"),20,210+10*a.length+30*t.length),e.save("relatorio-aromaterapia.pdf")},children:"Gerar PDF"})})};var n=a(9123),r=a.n(n);let c=()=>{let[e,t]=(0,l.useState)([{oil:"",quantity:"",price:"",dilution:"",totalDrops:"",usedDrops:0,valuePerDrop:0,totalComposition:0}]),[a,s]=(0,l.useState)([{name:"Vidro",value:0},{name:"R\xf3tulo",value:0}]),[n,r]=(0,l.useState)(0),c=e=>20*e,d=(e,t)=>e*t*.25,m=(e,t)=>t?e/t:0,p=(e,t)=>e*t,u=()=>e.reduce((e,t)=>e+parseFloat(t.totalComposition),0),x=()=>a.reduce((e,t)=>e+t.value,0),h=()=>parseFloat(u())+parseFloat(x()),N=()=>{t([...e,{oil:"",quantity:5,price:0,dilution:0,totalDrops:100,usedDrops:0,valuePerDrop:0,totalComposition:0}])},g=a=>{t(e.filter((e,t)=>t!==a))},j=()=>{s([...a,{name:"",value:0}])},b=e=>{s(a.filter((t,a)=>a!==e))},v=(a,o,l)=>{let s=[...e];if(s[a][o]=l,["quantity","dilution","price"].includes(o)){let{quantity:e,dilution:t,price:o}=s[a],l=c(e),i=d(e,t),n=m(o,l),r=p(i,n);s[a].totalDrops=l,s[a].usedDrops=i,s[a].valuePerDrop=parseFloat(n),s[a].totalComposition=parseFloat(r)}t(s)};return(0,o.jsxs)("div",{className:"calculatorContainer",children:[(0,o.jsx)("h2",{children:"BLEND"}),(0,o.jsx)("input",{className:"blendInput",type:"text",placeholder:"Nome ou Descri\xe7\xe3o do Blend",onChange:e=>v(0,"blend",e.target.value)}),(0,o.jsx)("h3",{children:"COMPOSI\xc7\xd5ES"}),e.map((e,t)=>(0,o.jsxs)("div",{className:"compositionItem",children:[(0,o.jsxs)("h4",{children:["Composi\xe7\xe3o ",t+1]}),(0,o.jsx)("label",{className:"compositionLabel",children:"\xd3leo:"}),(0,o.jsx)("input",{className:"compositionInput",type:"text",value:e.oil,placeholder:"Nome do \xd3leo",onChange:e=>v(t,"oil",e.target.value)}),(0,o.jsx)("label",{className:"compositionLabel",children:"Quantidade de \xd3leo Vegetal (em ml):"}),(0,o.jsx)("input",{className:"compositionInput",type:"number",value:e.quantity||"",onChange:e=>v(t,"quantity",Number(e.target.value)),min:"1"}),(0,o.jsx)("label",{className:"compositionLabel",children:"Pre\xe7o Total do Frasco:"}),(0,o.jsx)("input",{className:"compositionInput",type:"number",value:e.price,onChange:e=>v(t,"price",Number(e.target.value)),min:"0"}),(0,o.jsx)("label",{className:"compositionLabel",children:"Porcentagem de Dilui\xe7\xe3o de \xd3leo Essencial (%):"}),(0,o.jsx)("input",{className:"compositionInput",type:"number",value:e.dilution,onChange:e=>v(t,"dilution",Number(e.target.value)),min:"0.1",max:"100"}),(0,o.jsx)("label",{className:"compositionLabel",children:"N\xfamero Total de Gotas no Frasco:"}),(0,o.jsx)("span",{className:"totais",children:e.totalDrops||0}),(0,o.jsx)("label",{className:"compositionLabel",children:"Gotas Utilizadas:"}),(0,o.jsx)("span",{className:"totais",children:e.usedDrops||0}),(0,o.jsx)("label",{className:"compositionLabel",children:"Valor por Gota:"}),(0,o.jsx)("span",{className:"totais",children:e.valuePerDrop?e.valuePerDrop.toFixed(2):"0.00"}),(0,o.jsxs)("label",{className:"compositionLabel",children:["Total Composi\xe7\xe3o ",t+1,":"]}),(0,o.jsx)("span",{className:"totais",children:e.totalComposition.toFixed(2)}),(0,o.jsx)("button",{className:"buttonRemove",type:"button",onClick:()=>g(t),children:"REMOVER"}),(0,o.jsx)("button",{className:"buttonAdd",type:"button",onClick:N,children:"ADICIONAR"})]},t)),(0,o.jsxs)("div",{className:"compositionItem",children:[(0,o.jsx)("h3",{children:"EXTRAS"}),a.map((e,t)=>(0,o.jsxs)("div",{className:"compositionInput",children:[(0,o.jsx)("label",{className:"compositionLabel",children:e.name}),(0,o.jsx)("input",{className:"extraInput",type:"text",value:e.name,onChange:e=>{let o=[...a];o[t].name=e.target.value,s(o)}}),(0,o.jsx)("label",{className:"compositionLabel",children:"Valor:"}),(0,o.jsx)("input",{className:"extraInput",type:"number",value:e.value,onChange:e=>{let o=[...a];o[t].value=Number(e.target.value),s(o)}}),(0,o.jsx)("button",{className:"buttonRemove",type:"button",onClick:()=>b(t),children:"REMOVER"}),(0,o.jsx)("button",{className:"buttonAdd",type:"button",onClick:j,children:"ADICIONAR"})]},t))]}),(0,o.jsxs)("div",{className:"compositionItem",children:[(0,o.jsx)("h3",{children:"TOTAL"}),(0,o.jsx)("label",{className:"compositionLabel",children:"Total Composi\xe7\xf5es:"}),(0,o.jsx)("span",{className:"totais",children:u().toFixed(2)}),(0,o.jsx)("label",{className:"compositionLabel",children:"Total Extras:"}),(0,o.jsx)("span",{className:"totais",children:x().toFixed(2)}),(0,o.jsx)("label",{className:"compositionLabel",children:"Total Final de Custo do Blend:"}),(0,o.jsx)("span",{className:"totais",children:h().toFixed(2)}),(0,o.jsx)("label",{className:"compositionLabel",children:"Porcentagem de Lucro (%):"}),(0,o.jsx)("input",{className:"compositionInput",type:"number",value:n,onChange:e=>r(Number(e.target.value)),min:"0.1",max:"100"}),(0,o.jsx)("label",{className:"compositionLabel",children:"Valor Final do Blend:"}),(0,o.jsx)("span",{className:"totais",children:((e,t)=>e+e*t/100)(h(),n).toFixed(2)})]}),(0,o.jsx)(i,{compositions:e,extras:a,profitPercentage:n,totalCost:h(),totalCompositions:u(),totalExtras:x()})]})},d=e=>{let{ageRange:t,essentialOilDrops:a,maxDilution:l}=e;return(0,o.jsx)("div",{className:"buttonContainer",children:(0,o.jsx)("button",{className:"generatePdfButton",onClick:()=>{let e=new s.uE,o=e.internal.pageSize.width-50-15;e.setFillColor(255,255,255),e.circle(o+25,35,25,"F"),e.addImage("/images/arom-logo.png","PNG",o,10,50,50),e.setFontSize(22),e.setFont("helvetica","bold");let i="Relat\xf3rio de C\xe1lculos de Aromaterapia",n=e.getTextWidth(i),r=(e.internal.pageSize.width-n)/2;e.text(i,r,80),e.setFontSize(14),e.setFont("helvetica","normal");let c=e.getTextWidth("Faixa Et\xe1ria:"),d=(e.internal.pageSize.width-c)/2;e.text("Faixa Et\xe1ria:",d,100);let m=e.getTextWidth(t),p=(e.internal.pageSize.width-m)/2;e.text(t,p,110);let u="Gotas de \xd3leo Essencial:",x=e.getTextWidth(u),h=(e.internal.pageSize.width-x)/2;e.text(u,h,120);let N=e.getTextWidth(a),g=(e.internal.pageSize.width-N)/2;e.text(a,g,130);let j="Dilui\xe7\xe3o M\xe1xima (% de ess\xeancia):",b=e.getTextWidth(j),v=(e.internal.pageSize.width-b)/2;e.text(j,v,140);let C=e.getTextWidth(l),F=(e.internal.pageSize.width-C)/2;e.text(l,F,150),e.setFontSize(8),e.setFont("helvetica","normal");let f="\xa9 2024 Aromaterapia Inc.",S=e.getTextWidth(f),E=(e.internal.pageSize.width-S)/2;e.text(f,E,e.internal.pageSize.height-10),e.save("calculadora-aromaterapia.pdf")},children:"Gerar PDF"})})},m=()=>{let[e,t]=(0,l.useState)(""),[a,s]=(0,l.useState)(""),[i,n]=(0,l.useState)(""),r={"De 3 \xe0 12 meses":{drops:"1 a 3 gotas",dilution:"at\xe9 1% de ess\xeancia"},"De 1 a 5 anos":{drops:"1 a 5 gotas",dilution:"at\xe9 3% de ess\xeancia"},"De 5 \xe0 12 anos":{drops:"1 a 7 gotas",dilution:"at\xe9 3% de ess\xeancia"},"De 12 \xe0 18 anos":{drops:"1 a 11 gotas",dilution:"at\xe9 5% de ess\xeancia"},"Mais de 18 anos":{drops:"1 a 44 gotas",dilution:"at\xe9 20% de ess\xeancia"}};return(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Calculadora de Aromaterapia - Kaio Val\xe9rio"}),(0,o.jsx)("label",{className:"compositionLabel2",htmlFor:"ageRange",children:"Selecione a Faixa Et\xe1ria:"}),(0,o.jsxs)("select",{className:"compositionInput",id:"ageRange",value:e,onChange:e=>{let a=e.target.value;t(a),r[a]?(s(r[a].drops),n(r[a].dilution)):(s(""),n(""))},children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"Selecione a Faixa Et\xe1ria"}),Object.keys(r).map(e=>(0,o.jsx)("option",{value:e,children:e},e))]}),e&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:"Gotas de \xd3leo Essencial"}),(0,o.jsx)("p",{children:a}),(0,o.jsx)("h4",{children:"Dilui\xe7\xe3o M\xe1xima (% de ess\xeancia)"}),(0,o.jsx)("p",{children:i})]}),(0,o.jsx)(d,{ageRange:e,essentialOilDrops:a,maxDilution:i})]})};var p=a(5133),u=a.n(p);let x=()=>(0,o.jsxs)("div",{className:u().socialLinks,children:[(0,o.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-facebook ".concat(u().socialIcon)})}),(0,o.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-instagram ".concat(u().socialIcon)})}),(0,o.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-twitter ".concat(u().socialIcon)})})]});function h(){let[e,t]=(0,l.useState)(!0);return(0,o.jsxs)("div",{className:r().pageContainer,children:[(0,o.jsx)("p",{className:r().companyname,children:"COLOCAR O NOME DO CLIENTE"}),(0,o.jsx)(x,{})," ",(0,o.jsxs)("div",{className:r().buttonGroup,children:[(0,o.jsx)("button",{onClick:()=>t(!0),className:r().button,children:"Calculadora de Produto"}),(0,o.jsx)("button",{onClick:()=>t(!1),className:r().button,children:"Calculadora de Pessoa"})]}),(0,o.jsx)("div",{className:r().calculatorContainer,children:e?(0,o.jsx)(c,{}):(0,o.jsx)(m,{})})]})}},5133:e=>{e.exports={socialLinks:"SocialMediaLinks_socialLinks__Zhobn",socialIcon:"SocialMediaLinks_socialIcon__e6jrK"}}},e=>{var t=t=>e(e.s=t);e.O(0,[673,264,636,593,792],()=>t(7276)),_N_E=e.O()}]);