import{r as m,o as l,j as e,P as E,t as i,z as T,a as r,D as h,e as u,a5 as f,l as c}from"./index-C1Kn7LbF.js";import{k as x,l as v}from"./SwitchDiv-BYjTwbx3.js";function H(){const[p,n]=m.useState(""),[o,a]=m.useState(""),t=m.useRef(null);return m.useEffect(()=>{t.current&&t.current.value===""&&(t.current.value="30")},[]),m.useEffect(()=>{t.current&&t.current.value===""&&(t.current.value="0"),n(l.age.toString())},[p]),e.jsx("input",{type:"number",name:"age",id:"dateAgeId",className:"form-control noInvert inpIdentif minText maxText minNum maxNum patternText",min:"0",max:"255",ref:t,required:!0,"data-title":"Idade","data-reqlength":"1","data-maxlength":"4","data-minnum":"0","data-maxnum":"255","data-pattern":"^[\\d,.]+$",onInput:s=>{var I;const g=s.currentTarget.value;l instanceof E&&"age"in l&&typeof l.age=="number"&&typeof i.isAutoFillActive=="boolean"?(n(g),a(g),l.age=x(s.currentTarget,l.age),i.isAutoFillActive&&v(s.currentTarget,i.isAutoFillActive,"cons"),console.log([g,s.currentTarget.value,l.age])):(n(o),T(r(new Error),"argumentas for callbackAgeElement()",`${JSON.stringify(l)}`,(I=l)==null?void 0:I.age,s.currentTarget,`${[i.numCons||1,[l.weight,l.height,l.sumDCut],[i.IMC,i.MLG,i.TMB,i.GET,i.PGC],[i.targInpWeigth,i.targInpHeigth,i.targInpIMC,i.targInpMLG,i.targInpTMB,i.targInpGET,i.targInpSumDCut,i.targInpPGC]].toString()}`,i.isAutoFillActive)),h(s.currentTarget)}})}let d;function L({flux:p=!1}){return m.useEffect(()=>{try{document.getElementById("agBody")instanceof HTMLElement&&(d=document.getElementById("genId"),d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement||d instanceof HTMLSelectElement?l.gen=d.value:u(d,"instance of agGenElement for DOM initialization",r(new Error)))}catch(n){console.error(`Error executing procedure for agBody:
${n.message}`)}},[]),e.jsxs("div",{className:"gridTwoCol noInvert",id:"genDiv",role:"group",children:[e.jsxs("span",{role:"group",className:"fsAnamGSpan flexAlItCt genSpan",id:"spanFsAnamG13",children:[e.jsxs("label",{htmlFor:"genId",className:"labelIdentif",children:["Gênero:",e.jsxs("select",{name:"gen",id:"genId",className:"form-select inpIdentif noInvert","data-title":"genero","data-xls":"Gênero",required:!0,onChange:n=>{if(p===!0){const o=document.getElementById("genBirthRelId"),a=document.getElementById("genTransId"),t=document.getElementById("genFisAlinId"),s=document.getElementById("textBodytype");try{if(!(o instanceof HTMLSelectElement||o instanceof HTMLInputElement))throw u(o,"Gen Birth Relation Element",r(new Error));if(!(a instanceof HTMLSelectElement||a instanceof HTMLInputElement))throw u(a,"Gen Trans Element",r(new Error));if(!(t instanceof HTMLSelectElement||t instanceof HTMLInputElement))throw u(t,"Gen Physical Alignment Element",r(new Error));l.gen=f([n.currentTarget,o,a,t],n.currentTarget.value)||"masculino",(a.value!=="avancado"||n.currentTarget.value==="naoBinario")&&a.hidden===!1&&t.hidden===!1&&(s instanceof HTMLInputElement||s instanceof HTMLSelectElement?s.value=l.gen:c(s,"textBodyType in callback for gender Elements",r(new Error)))}catch(g){console.error(`Error executing callback for Gen Elements:
${g.message}`)}}},children:[e.jsx("option",{className:"optIdentif optGen",value:"masculino",children:"Masculino | Homem binário"}),e.jsx("option",{className:"optIdentif optGen",value:"feminino",children:"Feminino | Mulher binária"}),e.jsx("option",{className:"optIdentif optGen",value:"naoBinario",children:"Não-Binário"}),e.jsx("option",{className:"optIdentif optGen",value:"outros",children:"Outros"}),e.jsx("option",{className:"optIdentif optGen",value:"undefined",children:"Não deseja declarar"})]})]}),e.jsx("br",{role:"presentation"})]}),e.jsxs("span",{role:"group",className:"fsAnamGSpan flexAlItCt genSpan",id:"spanFsAnamG14",children:[e.jsxs("label",{htmlFor:"genBirthRelId",className:"labelIdentif",children:["Identidade em relação ao gênero designado na nascença:",e.jsxs("select",{name:"gen_birth_rel",id:"genBirthRelId",className:"form-select inpIdentif noInvert","data-xls":"Identidade de Gênero relativa à nascença","data-title":"identidade_genero_nascenca",required:!0,onChange:()=>{const n=document.getElementById("genId"),o=document.getElementById("genBirthRelId"),a=document.getElementById("genTransId"),t=document.getElementById("genFisAlinId");try{if(!(n instanceof HTMLInputElement||n instanceof HTMLSelectElement||n instanceof HTMLTextAreaElement))throw c(n,"validation of genId",r(new Error));if(!(o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement))throw c(o,"validation of genBirthRel",r(new Error));if(!(a instanceof HTMLInputElement||a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement))throw c(a,"validation of genTrans",r(new Error));if(!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement))throw c(t,"validation of genFisAlin",r(new Error));l.gen=f([n,o,a,t],n.value)||"masculino"}catch(s){console.error(`Error executing procedure for calling fluxGen:
${s.message}`)}},children:[e.jsx("option",{className:"optIdentif optgenBirthRel",value:"cis",children:"Cisgênero | Cissexual"}),e.jsx("option",{className:"optIdentif optgenBirthRel",value:"trans",children:"Transgênero | Transsexual"}),e.jsx("option",{className:"optIdentif optgenBirthRel",value:"outros",children:"Outros"}),e.jsx("option",{className:"optIdentif optgenBirthRel",value:"undefined",children:"Não deseja declarar"})]})]}),e.jsx("br",{role:"presentation"})]}),e.jsxs("span",{role:"group",className:"fsAnamGSpan flexAlItCt genSpan",id:"spanFsAnamG15",hidden:!0,children:[e.jsxs("label",{htmlFor:"genTransId",className:"labelIdentif",children:["Estágio da Transição Hormonal:",e.jsxs("select",{name:"gen_trans",id:"genTransId",className:"form-select inpIdentif noInvert","data-title":"stg_transicao_hormonal","data-xls":"Estágio de Transição Hormonal (inválido se cis)",onChange:()=>{const n=document.getElementById("genId"),o=document.getElementById("genBirthRelId"),a=document.getElementById("genTransId"),t=document.getElementById("genFisAlinId");try{if(!(n instanceof HTMLInputElement||n instanceof HTMLSelectElement||n instanceof HTMLTextAreaElement))throw c(n,"validation of genId",r(new Error));if(!(o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement))throw c(o,"validation of genBirthRel",r(new Error));if(!(a instanceof HTMLInputElement||a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement))throw c(a,"validation of genTrans",r(new Error));if(!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement))throw c(t,"validation of genFisAlin",r(new Error));l.gen=f([n,o,a,t],n.value)||"masculino"}catch(s){console.error(`Error executing procedure for calling fluxGen:
${s.message}`)}},children:[e.jsx("option",{className:"optIdentif optgenTrans",value:"avancado",children:"Avançado"}),e.jsx("option",{className:"optIdentif optgenTrans",value:"undefined",children:"Indefinido"}),e.jsx("option",{className:"optIdentif optgenTrans",value:"no",children:"Não está em transição"}),e.jsx("option",{className:"optIdentif optgenTrans",value:"inicial",children:"Inicial"}),e.jsx("option",{className:"optIdentif optgenTrans",value:"intermediario",children:"Intermediário"})]})]}),e.jsx("br",{role:"presentation"})]}),e.jsxs("span",{role:"group",id:"spanFsAnamG16",className:"fsAnamGSpan flexAlItCt genSpan inpIdentif noInvert",hidden:!0,children:[e.jsxs("label",{htmlFor:"genFisAlinId",className:"labelIdentif",children:["Alinhamento de características físicas predominante:",e.jsxs("select",{name:"gen_fis_alin",id:"genFisAlinId",className:"form-select inpIdentif noInvert","data-title":"corpo_align","data-xls":"Alinhamento de características físicas predominante",onChange:()=>{const n=document.getElementById("genId"),o=document.getElementById("genBirthRelId"),a=document.getElementById("genTransId"),t=document.getElementById("genFisAlinId");try{if(!(n instanceof HTMLInputElement||n instanceof HTMLSelectElement||n instanceof HTMLTextAreaElement))throw c(n,"validation of genId",r(new Error));if(!(o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement))throw c(o,"validation of genBirthRel",r(new Error));if(!(a instanceof HTMLInputElement||a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement))throw c(a,"validation of genTrans",r(new Error));if(!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement))throw c(t,"validation of genFisAlin",r(new Error));l.gen=f([n,o,a,t],n.value)||"masculino"}catch(s){console.error(`Error executing procedure for calling fluxGen:
${s.message}`)}},children:[e.jsx("option",{className:"optIdentif optgenFisAlin",value:"masculinizado",children:"Masculinizado"}),e.jsx("option",{className:"optIdentif optgenFisAlin",value:"feminilizado",children:"Feminilizado"}),e.jsx("option",{className:"optIdentif optgenFisAlin",value:"neutro",children:"Indeterminado | Neutro"})]})]}),e.jsx("br",{role:"presentation"})]})]})}export{H as A,L as G};