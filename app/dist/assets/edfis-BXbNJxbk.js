const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EdFisForm-DrJ9J-g5.js","assets/index-C1Kn7LbF.js","assets/index-cmaRC7w9.css","assets/SocialName-HZKovcq3.js","assets/SocialName-CXEMvukQ.css","assets/GenDiv-Dz7EGFEr.js","assets/SwitchDiv-BYjTwbx3.js"])))=>i.map(i=>d[i]);
import{r as o,u as J,e as u,a as i,j as e,i as Q,h as K,k as X,l as Y,m as q,p as h,t as s,n as Z,o as f,q as ee,s as ne,v as se,w as te,x as re,y as W,E as ae,G as le,S as oe,_ as me}from"./index-C1Kn7LbF.js";import{T as ie}from"./TipsBtn-xgur9iM4.js";import{a as ce,v as de,H as ue,S as he}from"./SwitchDiv-BYjTwbx3.js";import{h as xe}from"./gRoutingHandlers-CSpceJ5l.js";function V({state:l,dispatch:c}){const d=o.useRef(null),[x,a]=J();return o.useEffect(()=>(x.set("tips","open"),a(x),()=>{x.delete("tips"),a(x)}),[a,x]),o.useEffect(()=>{const n=m=>{var j;m.key==="ESCAPE"&&(c(!l),!l&&((j=d.current)==null||j.close()))};try{if(!(d.current instanceof HTMLDialogElement))throw u(d.current,`${V.prototype.constructor.name}`,i(new Error));d.current.showModal(),addEventListener("keypress",n)}catch(m){console.error(`Error executing useEffect for PanelTips:
${m.message}`)}return()=>removeEventListener("keypress",n)},[d,c]),o.useEffect(()=>{try{const n=document.getElementById("mathFirstBlock");if(!(n instanceof HTMLElement))throw u(n,"mathFirstBlock",i(new Error));n.innerHTML=`
      <math className="italic math-lg">
      <mfrac>
        <mrow>
          <mi>Peso</mi>
        </mrow>
        <msup>
          <mi>(Altura)</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </math>
      `}catch(n){console.error(`Error executing procedure for adding first math block:
${n.message}`)}try{const n=document.getElementById("mathSecondBlock");if(!(n instanceof HTMLElement))throw u(n,"mathSecondBlock",i(new Error));n.innerHTML=`
      <summary className="noInvert">Fórmula</summary>
      <br />
      <math className="italic math">
        <mfrac>
          <mrow>
            <mn>495</mn>
          </mrow>
          <mrow>
            <munder>
              <mi>C1</mi>
              <mo>&#x23DF</mo>
            </munder>
            <mo>-</mo>
            <munder>
              <mi>C2</mi>
              <mo>&#x23DF</mo>
            </munder>
            <mo>x</mo>
            <mi>SDC</mi>
            <mo>+</mo>
            <munder>
              <mi>C3</mi>
              <mo>&#x23DF</mo>
            </munder>
            <mo>x</mo>
            <msup>
              <mi>SDC</mi>
              <mn>2</mn>
            </msup>
            <mo>-</mo>
            <munder>
              <mn>C4</mn>
              <mo>&#x23DF</mo>
            </munder>
            <mo>x</mo>
            <mi>Idade</mi>
          </mrow>
        </mfrac>
        <mo>-</mo>
        <mn>450</mn>
      </math>
      `}catch(n){console.error(`Error executing procedure for adding second math block:
${n.message}`)}try{const n=document.getElementById("mathThirdBlock");if(!(n instanceof HTMLElement))throw u(n,"mathThirdBlock",i(new Error));n.innerHTML=`
      <math className="italic math-sm">
      <munder>
        <mn>C1</mn>
        <mo>&#x23DF</mo>
      </munder>
      <mo>+</mo>
      <mi>(</mi>
      <munder>
        <mn>C2</mn>
        <mo>&#x23DF</mo>
      </munder>
      <mn>&nbsp;x&nbsp;</mn>
      <mn>Peso</mn>
      <mo>+</mo>
      <munder>
        <mn>C3</mn>
        <mo>&#x23DF</mo>
      </munder>
      <mo>-</mo>
      <mn>Altura</mn>
      <mo>x</mo>
      <mn>Idade</mn>
      <mi>)</mi>
    </math>
      `}catch(n){console.error(`Error executing procedure for adding third math block:
${n.message}`)}try{const n=document.getElementById("mathFourthBlock");if(!(n instanceof HTMLElement))throw u(n,"mathFourthBlock",i(new Error));n.innerHTML=`
      <math className="italic math-sm">
      <mn>10</mn>
      <mo>x</mo>
      <mi>Peso</mi>
      <mo>+</mo>
      <mn>6.25</mn>
      <mo>x</mo>
      <mi>Altura</mi>
      <mo>-</mo>
      <mn>5</mn>
      <mo>x</mo>
      <mi>Idade</mi>
      <mo>+</mo>
      <munder>
        <mi>C1</mi>
        <mo>&#x23DF</mo>
      </munder>
    </math>
      `}catch(n){console.error(`Error executing procedure for adding fourth math block:
${n.message}`)}try{const n=document.getElementById("mathLastBlock");if(!(n instanceof HTMLElement))throw u(n,"mathLastBlock",i(new Error));n.innerHTML=`
      <math className="italic math-sm">
      <mi>TMB</mi>
      <mo>x</mo>
      <munder>
        <mi>Fator de Atividade</mi>
        <mo>&#x23DF</mo>
      </munder>
    </math>
      `}catch(n){console.error(`Error executing procedure for adding last math block:
${n.message}`)}try{const n=document.getElementById("hbFormula");if(!(n instanceof HTMLElement))throw u(n,"Harris-Benedict formula div",i(new Error));n.innerHTML=`
      <math>
        <munder>
          <mn>C1</mn>
          <mo>&#x23DF</mo>
        </munder>
        <mo>+</mo>
        <mi>&#40</mi>
        <munder>
          <mn>C2</mn>
          <mo>&#x23DF</mo>
        </munder>
        <mn>&nbsp;x&nbsp;</mn>
        <mn>Peso</mn>
        <mo>+</mo>
        <munder>
          <mn>C3</mn>
          <mo>&#x23DF</mo>
        </munder>
        <mo>-</mo>
        <mn>Altura</mn>
        <mo>x</mo>
        <mn>Idade</mn>
        <mi>&#41</mi>
      </math>
      `}catch(n){console.error(`Error executing hbFormula:
${n.message}`)}},[]),l?e.jsxs("dialog",{ref:d,onClick:n=>{Q(n,n.currentTarget).some(m=>m===!0)&&(n.currentTarget.close(),c(!l))},className:"modal-content-fit defDp wid50v",id:"tipsDlg",children:[e.jsxs("section",{className:"flexNoW flexAlItCt flexJBt",children:[e.jsx("h3",{className:"bolded",children:"Manual para controle de formulário"}),e.jsx("button",{className:"btn btn-close forceInvert",id:"tipsClose",onClick:n=>{var m;c(!l),!l&&((m=n.currentTarget.closest("dialog"))==null||m.close())}})]}),e.jsx("hr",{className:"noInvert"}),e.jsxs("article",{className:"flexNoWC noInvert",children:[e.jsxs("section",{className:"odTipsSect",id:"fillTips",children:[e.jsx("h4",{className:"bolded mg-2bv",children:"1. Controle de Entradas"}),e.jsx("div",{className:"flexNoWC pdL1v",children:e.jsxs("p",{className:"dicas",id:"dicaUppercase",children:[e.jsx("strong",{children:"1.1. "}),e.jsx("em",{children:"As primeiras letras, exceto conjunções, são capitalizadas automaticamente por padrão. Outras correções de campos complexos podem precisar de mais texto — Continue digitando!"})]})})]}),e.jsx("hr",{className:"noInvert"}),e.jsxs("section",{className:"odTipsSect",id:"mathTips",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"bolded mg-2bv noInvert",children:"2. Cálculos"}),e.jsx("hr",{className:"noInvert"}),e.jsxs("details",{children:[e.jsx("summary",{className:"mg-1b",children:"Siglas"}),e.jsx("small",{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("abbr",{className:"noInvert",children:"C: "}),e.jsx("dfn",{className:"noInvert",children:"Constante"})]}),e.jsxs("li",{children:[e.jsx("abbr",{className:"noInvert",children:"IMC: "}),e.jsx("dfn",{className:"noInvert",children:"Índice de Massa Corporal"})]}),e.jsxs("li",{children:[e.jsx("abbr",{className:"noInvert",children:"PGC: "}),e.jsx("dfn",{className:"noInvert",children:"Percentual de Gordura Corporal"})]}),e.jsxs("li",{children:[e.jsx("abbr",{className:"noInvert",children:"MLG: "}),e.jsx("dfn",{className:"noInvert",children:"Massa Livre de Gordura"})]}),e.jsxs("li",{children:[e.jsx("abbr",{className:"noInvert",children:"SDC: "}),e.jsx("dfn",{className:"noInvert",children:"Soma de Dobras Cutâneas"})]}),e.jsxs("li",{children:[e.jsx("abbr",{className:"noInvert",children:"TMB: "}),e.jsx("dfn",{className:"noInvert",children:"Taxa Metabólica Basal"})]}),e.jsxs("li",{children:[e.jsx("abbr",{className:"noInvert",children:"GET: "}),e.jsx("dfn",{className:"noInvert",children:"Gasto Energético Total"})]})]})})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"gridAt rGap5v",children:[e.jsxs("div",{className:"flexNoWC pdL1v noInvert",children:[e.jsx("span",{className:"dicas",id:"dicaIMC",children:e.jsx("strong",{children:"2.1. IMC:"})}),e.jsx("br",{}),e.jsxs("details",{children:[e.jsx("summary",{children:"Fórmula"}),e.jsx("br",{}),e.jsx("div",{id:"mathFirstBlock"})]})]}),e.jsxs("div",{className:"flexNoWC pdL1v noInvert",children:[e.jsx("span",{className:"dicas",id:"dicaPGC",children:e.jsx("strong",{children:"2.2. PGC:"})}),e.jsx("br",{}),e.jsxs("details",{className:"noInvert",id:"mathSecondBlock",children:[e.jsx("summary",{className:"noInvert",children:"Fórmula"}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsx("div",{children:e.jsxs("details",{className:"noInvert",children:[e.jsx("summary",{className:"mg-1b",children:"Constantes"}),e.jsx("small",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Homem"}),e.jsx("span",{children:": 1.10938; 0.0008267; 0.0000016; 0.0002574"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Mulher"}),e.jsx("span",{children:": 1.0994921; 0.0009929; 0.0000023; 0.0001392"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Neutro"}),e.jsx("span",{children:": 1.10443605; 0.0009098; 0.00000195; 0.0001983"})]})})]})})]})})]}),e.jsxs("div",{className:"flexNoWC pdL1v",children:[e.jsx("span",{className:"dicas",id:"dicaTMB",children:e.jsx("strong",{children:"2.3. TMB:"})}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Harris-Benedict"})}),e.jsxs("details",{children:[e.jsx("br",{}),e.jsx("summary",{children:"Fórmula"}),e.jsx("div",{id:"hbFormula"}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsxs("details",{children:[e.jsx("summary",{className:"mg-1b",children:"Constantes"}),e.jsx("small",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Homem"}),e.jsx("span",{children:": 13.8; 5.0; 6,8"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Mulher"}),e.jsx("span",{children:": 9.6; 1.9; 4.7"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Neutro"}),e.jsx("span",{children:": 11.7; 3.45; 5.75"})]})})]})})]})]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Tinsley"})}),e.jsxs("details",{children:[e.jsx("br",{}),e.jsx("summary",{children:"Fórmula"}),e.jsx("div",{id:"mathThirdBlock"}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsxs("details",{children:[e.jsx("summary",{children:"Constantes"}),e.jsx("br",{}),e.jsx("small",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("span",{children:"Fator "}),e.jsx("em",{children:"Peso:"}),e.jsx("span",{children:" 24.8; 10"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("span",{children:"Fator "}),e.jsx("em",{children:"MLG:"}),e.jsx("span",{children:" 25.9; 284"})]})})]})})]})]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("strong",{children:"Mifflin-St. Jeor"})}),e.jsxs("details",{children:[e.jsx("br",{}),e.jsx("summary",{className:"mg-1b",children:"Fórmula"}),e.jsx("div",{id:"mathFourthBlock"}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsxs("details",{children:[e.jsx("br",{}),e.jsx("summary",{className:"mg-1b",children:"Constantes"}),e.jsx("div",{className:"noInvert",children:e.jsx("small",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Homem"}),e.jsx("span",{children:": 5"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Mulher"}),e.jsx("span",{children:": -161"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Neutro"}),e.jsx("span",{children:": -78"})]})})]})})}),e.jsx("br",{})]})]})]}),e.jsxs("div",{className:"flexNoWC pdL1v noInvert",children:[e.jsx("span",{className:"dicas",id:"dicaGET",children:e.jsx("strong",{children:"2.4. GET:"})}),e.jsx("br",{}),e.jsxs("details",{children:[e.jsx("br",{}),e.jsx("summary",{children:"Fórmula"}),e.jsx("div",{id:"mathLastBlock"}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsxs("details",{children:[e.jsx("br",{}),e.jsx("summary",{className:"mg-1b",children:"Fatores"}),e.jsx("div",{children:e.jsx("small",{className:"noInvert",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Sedentário"}),e.jsx("span",{children:": 1.2"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Leve"}),e.jsx("span",{children:": 1.4"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Moderado"}),e.jsx("span",{children:": 1.6"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Intenso"}),e.jsx("span",{children:": 1.9"})]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("em",{children:"Muito intenso"}),e.jsx("span",{children:": 2.2"})]})})]})})}),e.jsx("br",{})]})]})]})]})]})]}):e.jsx(e.Fragment,{})}function je(){const[l,c]=o.useState(!1),[d]=J();return o.useEffect(()=>{d.get("tips")==="open"&&c(!0)},[d]),e.jsxs(e.Fragment,{children:[e.jsx(ie,{dispatch:c,state:l}),l&&e.jsx(V,{state:l,dispatch:c})]})}function pe(){const[l,c]=o.useState(!1),[d,x]=o.useState(!1);return o.useEffect(()=>{const a=document.getElementById("selFactorAtleta"),n=document.getElementById("genId");s.edGenValue=n instanceof HTMLSelectElement||n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n.value:"masculino",s.edIsAutoCorrectOn=K(s.edIsAutoCorrectOn,"num"),xe("ed","EN Page Style"),X(Array.from(document.querySelectorAll(".fsAnamGDiv"))),a instanceof HTMLSelectElement?s.factorAtleta=a.value:u(a,"selFactorAtleta",i(new Error));const m=setInterval(j=>{document.getElementById("tabIndPerc")&&(c(!0),clearInterval(j))},200);setTimeout(()=>{c(!0),clearInterval(m),!document.getElementById("tabIndPerc")&&console.warn("Could not find tabIndPerc")},1e4)},[]),o.useEffect(()=>{var a,n,m,j,E,v,b,C,y,T,N,L;if(l&&document.getElementsByTagName("table").length>3){const r=document.getElementById("selectNumCons"),z=document.getElementById("fsProgConsId"),p=document.getElementById("genId"),g=document.getElementById("selectLvlAtFis");document.querySelectorAll(".tabInpProg").forEach((t,U)=>{try{if(!(t instanceof HTMLInputElement&&(t.type==="number"||t.type==="text")))throw Y(t,"Validation of Input instance and type",i(new Error));t.required&&(t.minLength=1,t.maxLength=99,t.pattern="^[\\d,.]+$",t.classList.add("minText","maxText","pattern"),t.type==="number"&&(t.min="0.05",t.max="999999",t.classList.add("minNum","maxNum"))),t.type==="number"?t.addEventListener("input",I=>q(I.currentTarget,{minNum:.05,maxNum:999999,min:1,max:99,pattern:["^[\\d,.]+$",""]})):t.addEventListener("input",I=>q(I.currentTarget,{min:1,max:99,pattern:["^[\\d,.]+$",""]}))}catch(I){console.error(`Error executing iteration ${U} for Tab Inp Prog application of requirements:
${I.message}`)}}),s.IMC=parseFloat(parseFloat(((a=s.targInpIMC)==null?void 0:a.value)||"0").toFixed(4))||0,s.MLG=parseFloat(parseFloat(((n=s.targInpMLG)==null?void 0:n.value)||"0").toFixed(4))||0,s.TMB=parseFloat(parseFloat(((m=s.targInpTMB)==null?void 0:m.value)||"0").toFixed(4))||0,s.GET=parseFloat(parseFloat(((j=s.targInpGET)==null?void 0:j.value)||"0").toFixed(4))||0,s.PGC=parseFloat(parseFloat(((E=s.targInpPGC)==null?void 0:E.value)||"0").toFixed(4))||0,s.factorAtvLvl=h((v=document.getElementById("nafType"))==null?void 0:v.value)||1.4;try{if(!(r instanceof HTMLSelectElement||r instanceof HTMLDataListElement))throw u(r,"Select Num Cons instance",i(new Error));if(s.numCons=h((r==null?void 0:r.value)||"1")||1,!(r.lastElementChild instanceof HTMLOptionElement))throw u(r.lastElementChild,"Last Element of Select for Número de Consulta",i(new Error));if(s.numConsLastOp=h(((b=r==null?void 0:r.lastElementChild)==null?void 0:b.value)??"1",1),s.numColsCons=Math.min(...Array.from(document.querySelectorAll("table")).map(t=>t instanceof HTMLTableElement?t.querySelectorAll("col").length:0)),!(s.numConsLastOp===s.numColsCons&&s.numConsLastOp>=3))throw console.error(`
          numConsLastOp: ${s.numConsLastOp};
          numColsCons: ${s.numColsCons};
          numConsLastOp: ${s.numConsLastOp};
          `),Z(((C=r==null?void 0:r.lastElementChild)==null?void 0:C.value)??"1","Options para Consultas",i(new Error));s.areNumConsOpsValid=!0}catch(t){console.error(`Error executing procedure for determining Número de Consulta:
${t.message}`)}f.gen=(p==null?void 0:p.value)||"masculino",f.age=h(((y=document.getElementById("dateAgeId"))==null?void 0:y.value)??"0")||0,s.numCons=h((r==null?void 0:r.value)||"1")||1,f.sumDCut=h(((T=document.getElementById(`tabInpRowDCut9_${s.numCons+1}`))==null?void 0:T.value)??"0",0,"float")||0,f.weight=h(((N=document.getElementById(`tabInpRowMedAnt2_${s.numCons+1}`))==null?void 0:N.value)??"0",0,"float")||0,f.height=h(((L=document.getElementById(`tabInpRowMedAnt3_${s.numCons+1}`))==null?void 0:L.value)??"0",0,"float")||0,f.atvLvl=(g==null?void 0:g.value)??"leve",[s.numColsCons,s.areColGroupsSimilar]=ce(z,s.numColsCons,s.areColGroupsSimilar),[s.targInpWeigth,s.targInpHeigth,s.targInpIMC,s.targInpMLG,s.targInpTMB,s.targInpGET,s.targInpSumDCut,s.targInpPGC]=de(s.numCons);try{if(!(p instanceof HTMLSelectElement||p instanceof HTMLInputElement))throw u(p,"Gen Element",i(new Error))}catch(t){console.error(`Error executing procure for adding listeners to genElements:
${t.message}`)}const M=document.getElementById("tabInpRowMedAnt2_2");M instanceof HTMLInputElement&&(M.value="70");const F=document.getElementById("tabInpRowMedAnt2_3");F instanceof HTMLInputElement&&(F.value="30");const B=document.getElementById("tabInpRowMedAnt2_4");B instanceof HTMLInputElement&&(B.value="200");const w=document.getElementById("tabInpRowMedAnt3_2");w instanceof HTMLInputElement&&(w.value="2");const S=document.getElementById("tabInpRowMedAnt3_3");S instanceof HTMLInputElement&&(S.value="1");const A=document.getElementById("tabInpRowMedAnt3_4");A instanceof HTMLInputElement&&(A.value="1.8");const H=document.getElementById("tabInpRowDCut4_2");H instanceof HTMLInputElement&&(H.value="18");const D=document.getElementById("tabInpRowDCut7_2");D instanceof HTMLInputElement&&(D.value="18");const _=document.getElementById("tabInpRowDCut8_2");_ instanceof HTMLInputElement&&(_.value="18");const k=document.getElementById("tabInpRowDCut4_3");k instanceof HTMLInputElement&&(k.value="10");const P=document.getElementById("tabInpRowDCut7_3");P instanceof HTMLInputElement&&(P.value="10");const G=document.getElementById("tabInpRowDCut8_3");G instanceof HTMLInputElement&&(G.value="10");const R=document.getElementById("tabInpRowDCut4_4");R instanceof HTMLInputElement&&(R.value="40");const $=document.getElementById("tabInpRowDCut7_4");$ instanceof HTMLInputElement&&($.value="40");const O=document.getElementById("tabInpRowDCut8_4");O instanceof HTMLInputElement&&(O.value="40"),ee(Array.from(document.querySelectorAll('input[type="date"]'))),ne(document.querySelectorAll("[class*='flexTwin']"),[["width","px"]]),se(document.querySelectorAll("*")),te()}l&&(d||(re(),x(!0)))},[l]),o.useEffect(()=>{setTimeout(()=>{for(const n of document.querySelectorAll("form"))W(n)},1e3);const a=setInterval(()=>{for(const n of document.querySelectorAll("form"))W(n)},12e4);return()=>clearInterval(a)},[]),o.useEffect(()=>{setTimeout(()=>{for(const a of document.querySelectorAll(".divAdd.divAntFamCheck"))a instanceof HTMLElement&&(a.style.display="none")},1e3)},[]),e.jsx("div",{className:"watcher",id:"watcher-en",style:{display:"none"}})}const fe=o.lazy(()=>me(()=>import("./EdFisForm-DrJ9J-g5.js"),__vite__mapDeps([0,1,2,3,4,5,6])));function be(){return e.jsxs(ae,{FallbackComponent:()=>e.jsx(le,{message:"Error loading form Physical Education and Nutrition"}),children:[e.jsxs("div",{id:"bgDiv",children:[e.jsx("header",{children:e.jsx("div",{role:"group",className:"pad1pc",children:e.jsxs("div",{role:"group",className:"flexNoW flexDiv flexAlItT flexSimple flexQ900NoWC",id:"hDiv",children:[e.jsxs("div",{role:"group",id:"hTextDiv",className:"noInvert",children:[e.jsx("h1",{className:"bolded flexJBt",id:"hForm",children:e.jsx("strong",{children:"Ficha de Avaliação:"})}),e.jsx("h2",{children:e.jsx("strong",{children:"Educação Física & Nutrição"})}),e.jsx("p",{children:e.jsx("strong",{children:"PROSSaúde — UFRJ"})}),e.jsx(je,{})]}),e.jsx(ue,{})]})})}),e.jsxs("main",{children:[e.jsx(he,{autofill:!0}),e.jsx("hr",{}),e.jsx(o.Suspense,{fallback:e.jsx(oe,{fs:!0}),children:e.jsx(fe,{})})]})]}),e.jsx(pe,{})]})}export{be as default};
