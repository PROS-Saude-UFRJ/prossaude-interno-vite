import{r as p,j as e,p as I,D as w,ai as o,aj as x,x as $,e as b,a as j,ak as T,ah as y,al as D,m as A}from"./index-C1Kn7LbF.js";function M(){const n=p.useRef(null),r=p.useRef(null);return p.useEffect(()=>{const c=()=>{r.current??(r.current=document.getElementById("headerDatBtn")),n.current??(n.current=document.getElementById("dateHeader"));const i=I(getComputedStyle(n.current).width.replace("px","").trim()),l=I(getComputedStyle(r.current).width.replace("px","").trim());i>l?r.current.style.width=`${i}px`:i<l&&(n.current.style.width=`${l}px`)};return c(),addEventListener("resize",c),()=>removeEventListener("resize",c)},[]),e.jsxs("label",{htmlFor:"confirmDatId",className:"labConfirm labDivConfirm2 pdT2pc900Q htFull900Q flexNoWC htHalf900Q bolded",id:"labConfirmDate",children:[e.jsx("span",{children:"Data:"}),e.jsxs("div",{className:"widFull flexQ900NoW htFull900Q",id:"divConfirmDat",role:"group",children:[e.jsx("input",{type:"date",name:"confirmDatName",id:"confirmDatId",className:"inpConfirm inpDate form-control noInvert minCurrDate","data-title":"assinatura_data","data-xls":"Data de Assinatura",required:!0,ref:n}),e.jsx("button",{type:"button",className:"datBtn confirmBtn btn btn-secondary widFull",id:"confirmDatBtn",ref:r,children:"Usar data atual"})]})]})}function k(){const n=p.useRef(null),[r,c]=p.useState("Rio de Janeiro, Rio de Janeiro");return p.useEffect(()=>{n.current instanceof HTMLInputElement&&n.current.value===""&&(n.current.value=r)},[r]),e.jsx("input",{type:"text",ref:n,name:"confirmLocName",id:"confirmLocId",className:"inpConfirm form-control noInvert","data-xls":"Local de Assinatura","data-title":"assinatura_local",required:!0,onInput:i=>{const l=i.currentTarget.value;c(l),w(i.currentTarget)}})}function F({text:n}){return e.jsxs("blockquote",{className:"declr",id:"declrEnd",children:[e.jsx("span",{children:n}),e.jsx("label",{htmlFor:"confirmId",className:"labConfirm noInvert"}),e.jsx("input",{type:"checkbox",name:"confirm",id:"confirmId","data-title":"Concordância",required:!0})]})}let E;function P(){const n=p.useRef(null);return p.useEffect(()=>{var f;E=/ag/gi.test(location.pathname)?(o.agExporter||(o.agExporter=new x),o.agExporter):/ed/gi.test(location.pathname)?(o.edExporter||(o.edExporter=new x),o.edExporter):/od/gi.test(location.pathname)?(o.odExporter||(o.odExporter=new x),o.odExporter):new x;const r=E.autoResetTimer(6e5),c=location.pathname,i=()=>r&&clearInterval(r),l=()=>location.pathname!==c?(r&&clearInterval(r),!0):!1;addEventListener("beforeunload",()=>{i(),removeEventListener("beforeunload",i)},{once:!0}),addEventListener("popstate",()=>{l()&&removeEventListener("popstate",l)}),$(((f=n.current)==null?void 0:f.closest("form"))??document)},[]),e.jsxs("section",{className:"sectionMain sectionConfirm",id:"sectConfirmBut",children:[e.jsx("button",{type:"submit",name:"submitFormButName",id:"submitFormButId",className:"confirmBut btn btn-success forceInvert",formAction:"_self",formMethod:"POST",accessKey:"enter",children:"Submeter"}),e.jsx("button",{type:"button",style:{background:"linear-gradient(to right, rgba(255, 200, 0, 0.5058823529), rgba(255, 153, 44, 0.6705882353))"},className:"confirmBut btn btn-warning forceInvert",id:"resetFormBtn",onClick:r=>{var i,l,f;if(prompt("Digite CONFIRMAR para resetar o formulário")==="CONFIRMAR")try{(i=r.currentTarget.closest("form"))==null||i.reset();const N=r.currentTarget.closest(".divConfirm");if(!(N instanceof HTMLElement))throw b(N,"Main ancestral div for resetAstBtn",j(new Error));const m=N.querySelector("#inpAstConfirmId");if(!(m instanceof HTMLCanvasElement||m instanceof HTMLInputElement))throw b(m,"Element for patient signing",j(new Error));if(m instanceof HTMLCanvasElement){const t=Object.assign(document.createElement("canvas"),{id:"inpAstConfirmId"});t.dataset.title="Assinatura do Paciente",(l=m.parentElement)==null||l.replaceChild(t,m),T()}if(m instanceof HTMLInputElement){const t=Object.assign(Object.assign(document.createElement("input"),{type:"file",id:"inpAstConfirmId",accept:"image/*"}));t.dataset.title="Assinatura do Paciente",t.classList.add("inpAst","mg-07t","form-control"),(f=m.parentElement)==null||f.replaceChild(t,m)}}catch{console.error("Error handling click on Reset signature button")}},children:"Resetar"}),e.jsx("button",{ref:n,type:"button",id:"btnExport","data-active":"false",className:"btn btn-secondary forceInvert",style:{backgroundColor:"rgba(0, 0, 255, 0.904)",borderColor:"rgba(0, 0, 255, 0.904)"},onClick:r=>{var c,i,l;E||(E=/ag/gi.test(location.pathname)?(o.agExporter||(o.agExporter=new x),o.agExporter):/ed/gi.test(location.pathname)?(o.edExporter||(o.edExporter=new x),o.edExporter):/od/gi.test(location.pathname)?(o.odExporter||(o.odExporter=new x),o.odExporter):new x),E.handleExportClick(r,/ag/gi.test(location.pathname)?"anamnese":/ed/gi.test(location.pathname)?"educacaoFisica__Nutricao":/od/gi.test(location.pathname)?"odontologia":"indefinido",r.currentTarget.closest("form")??document,`${((c=localStorage.getItem("name"))==null?void 0:c.replace(/\s/g,"-"))??""}_${((i=localStorage.getItem("secondName"))==null?void 0:i.replace(/\s/g,"-"))??""}_${((l=localStorage.getItem("lastName"))==null?void 0:l.replace(/\s/g,"-"))??""}`),new AbortController().signal},children:"Gerar Planilha"})]})}let s=null;function S(){const n=p.useRef(null),[r,c]=p.useState(!1),i=t=>{c(!0),f(t)},l=t=>{c(!0),N(t)},f=p.useCallback(t=>{try{if(!(n.current instanceof HTMLCanvasElement))throw b(n.current,"Validation of Canvas Ref Instance",j(new Error));if(!(s instanceof CanvasRenderingContext2D))throw new Error(`Error getting Canvas Context:
          Obtained Value: ${s??"nullish"}`);if(!r)return;const d=n.current.getBoundingClientRect(),h=t.clientX-d.left,g=t.clientY-d.top;s.lineTo(h,g),s.stroke(),s.beginPath(),s.moveTo(h,g)}catch(d){console.error(`Error executing draw():
        ${d.message}`)}},[r]),N=t=>{try{if(!(n.current instanceof HTMLCanvasElement))throw b(n.current,"Validation of Canvas Ref Instance",j(new Error));if(!(s instanceof CanvasRenderingContext2D))throw new Error(`Error getting Canvas Context:
        Obtained Value: ${s??"nullish"}`);if(!r)return;const d=n.current.getBoundingClientRect(),h=t.touches[0],g=h.clientX-d.left,v=h.clientY-d.top;s.lineTo(g,v),s.stroke(),s.beginPath(),s.moveTo(g,v)}catch(d){console.error(`Error executing draw():
      ${d.message}`)}},m=()=>{c(!1),s==null||s.beginPath()};return p.useEffect(()=>{const t=()=>{try{if(!(n.current instanceof HTMLCanvasElement))throw b(n.current,"Validation of Canvas Instance",j(new Error));try{if(!(n.current instanceof HTMLCanvasElement))throw b(n.current,"Validation of Canvas Reference Instance",j(new Error));if(n.current.height=80,s=n.current.getContext("2d"),!s)throw new Error(`Error validating canvasRef.current context:
              Obtained value: ${s??"nullish"}`);s.fillRect(10,n.current.height-10,n.current.width-20,1.5),s.lineWidth=4,s.lineCap="round",s.strokeStyle="#222"}catch(d){console.error(`Error executing procedure for defining context for Canvas:
${d.message}`)}}catch(d){console.error(`Error executing equalizeCanvas for ${S.prototype.constructor.name}:${d.message}`)}};return t(),addEventListener("resize",t),removeEventListener("resize",t)},[]),e.jsx("div",{className:"divSub divConfirm flexEl",id:"divConfirm3",role:"group",children:e.jsxs("span",{role:"group",id:"spanAstPct",className:"labConfirm labAst widHalf bolded",children:[e.jsx("span",{children:"Assinatura do Paciente:"}),e.jsx("canvas",{"data-xls":"Assinatura de Concordância do Paciente:",id:"inpAstConfirmId",ref:n,onMouseDown:i,onMouseMove:f,onMouseUp:m,onMouseOut:m,onTouchStart:l,onTouchMove:N,onTouchEnd:m,"data-name":"signature"}),e.jsx("button",{type:"button",className:"astDigtBtn autocorrect confirmBtn btn btn-secondary",id:"confirmAstDigtBtn",onClick:t=>y(t.currentTarget),children:"Usar Assinatura Digital"}),e.jsx("button",{type:"button",className:"btn btn-secondary",id:"resetAstBtn",onClick:t=>{var h,g;if(prompt("Digite CONFIRMAR para resetar o formulário")==="CONFIRMAR")try{const v=t.currentTarget.closest(".divConfirm");if(!(v instanceof HTMLElement))throw b(v,"Main ancestral div for resetAstBtn",j(new Error));const u=v.querySelector("#inpAstConfirmId");if(!(u instanceof HTMLCanvasElement||u instanceof HTMLInputElement))throw b(u,"Element for patient signing",j(new Error));if(u instanceof HTMLCanvasElement){const C=Object.assign(document.createElement("canvas"),{id:"inpAstConfirmId"});C.dataset.title="Assinatura do Paciente",(h=u.parentElement)==null||h.replaceChild(C,u),T()}if(u instanceof HTMLInputElement){const C=Object.assign(Object.assign(document.createElement("input"),{type:"file",id:"inpAstConfirmId",accept:"image/*"}));C.dataset.title="Assinatura do Paciente",C.classList.add("inpAst","mg-07t","form-control"),(g=u.parentElement)==null||g.replaceChild(C,u)}}catch{console.error("Error handling click on Reset signature button")}},children:"Resetar"})]})})}const L="_declaracao_wqgvm_1",R="_num_wqgvm_25",_="_mainParagraph_wqgvm_44",a={declaracao:L,num:R,mainParagraph:_,"btn-primary":"_btn-primary_wqgvm_60"};function B(){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:a.h3,children:"TERMOS DE CONCORDÂNCIA"}),e.jsxs("p",{className:a.p,children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"1. "}),e.jsxs("strong",{className:`${a.strong} ${a.mainParagraph}`,children:["Declaro formalmente estar ciente e em concordância de que"," ",e.jsx("b",{className:a.b,children:"os dados preenchidos no presente formulário serão coletados, manipulados e avaliados"})," ","para fins de intervenções para prevenção, promoção e recuperação da saúde mental e física,"]}),e.jsx("span",{className:a.span,children:" sendo sujeitos a eventuais exposições para profissionais de "}),e.jsx("abbr",{title:"Tecnologia da Informação",className:a.abbr,children:"TI"}),e.jsx("span",{className:a.span,children:" e áreas da Saúde relacionadas, além do corpo jurídico da "}),e.jsx("a",{href:"https://ufrj.br",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Universidade Federal do Rio de Janeiro"}),e.jsxs("span",{className:a.span,children:[" ","em eventuais necessidades legais, de acordo com políticas internas de habilitação individual dos profissionais;"]})]}),e.jsxs("p",{className:a.p,children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"2. "}),e.jsxs("span",{className:a.strong,children:["Declaro estar ciente de que"," ",e.jsx("b",{children:"os dados preenchidos no presente formulário podem ser indiretamente fornecidos às empresas e instituições governamentais"})," ","que monitoram:"]}),e.jsx("br",{}),e.jsxs("span",{style:{display:"block",marginLeft:"0.5rem",marginTop:"0.5rem"},children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"a. "}),e.jsx("em",{className:a.em,children:" A atividade da "}),e.jsx("a",{href:"https://ufrj.br",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Universidade Federal do Rio de Janeiro"}),e.jsx("em",{className:a.em,children:" e do projeto "}),e.jsx("strong",{className:a.strong,children:"PROS-SAÚDE"}),e.jsxs("em",{className:a.em,children:[" ","ativo, assim como quaisquer entidades públicas diretamente vinculadas, financiadoras e fiscalizadoras;"]}),e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"b. "}),e.jsx("em",{className:a.em,children:" A atividade geral do cidadão em território nacional e/ou seu respectivo cadastramento em órgãos públicos;"})]})]}),e.jsxs("p",{className:a.p,children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"3. "}),e.jsxs("span",{className:a.span,children:["Declaro estar ciente de que"," ",e.jsxs("b",{children:["os dados preenchidos no presente formulário podem ser",e.jsx("em",{children:" indiretamente acessados"})]}),", após filtragem de privacidade e sensibilidade, por ",e.jsx("em",{children:"empresas de tecnologia fornecedoras"})," das ferramentas de trabalho a fim de levantamentos estatísticos gerais, nomeadamente:"]}),e.jsx("br",{}),e.jsxs("span",{style:{display:"block",marginLeft:"0.5rem",marginTop:"0.5rem"},children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"a. "}),e.jsx("a",{href:"https://www.meta.com/",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Meta Platforms, Inc."}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"b. "}),e.jsx("a",{href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Google LLC"}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"c. "}),e.jsx("a",{href:"https://brasilapi.com.br",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Brasil API"}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"d. "}),e.jsx("a",{href:"https://www.oracle.com",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Oracle Corporation"}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"e. "}),e.jsx("a",{href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Vercel Inc."}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"f. "}),e.jsx("a",{href:"https://www.djangoproject.com/",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"The Django Software Foundation"}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"g. "}),e.jsx("a",{href:"https://www.microsoft.com",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Microsoft Corporation"}),";"]})]}),e.jsxs("p",{className:a.p,children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"4. "}),e.jsxs("span",{className:a.strong,children:["Declaro estar ciente de que ",e.jsx("b",{children:"os dados serão protegidos pelas devidas tecnologias de segurança"})," ","selecionadas pela equipe de"," "]}),e.jsx("abbr",{title:"Tecnologia da Informação",className:a.abbr,children:"TI"}),e.jsx("span",{className:a.span,children:" responsável pela criação da plataforma, incluindo:"}),e.jsx("br",{}),e.jsxs("span",{style:{display:"block",marginLeft:"0.5rem",marginTop:"0.5rem"},children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"a. "}),e.jsx("em",{className:a.strong,children:"Criptografia"}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"b. "}),e.jsx("em",{className:a.strong,children:"Tokenização"}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"c. "}),e.jsx("em",{className:a.strong,children:"Validação por senha submetida a algoritmos rígidos de variação"}),";",e.jsx("br",{}),e.jsx("span",{className:`${a.span} ${a.num}`,children:"d. "}),e.jsxs("em",{className:a.strong,children:["Controle de acesso interno, com restrições hierárquicas referentes à política do"," "]}),e.jsx("em",{className:a.strong,children:"PROS-SAÚDE"}),";"]})]}),e.jsxs("p",{className:a.p,children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"5. "}),e.jsxs("span",{className:a.strong,children:["Declaro estar ciente de que,"," ",e.jsx("strong",{className:a.strong,children:"em caso de vazamento e/ou hackeamento de dados"}),", os pacientes em geral serão imediatamente notificados via ",e.jsx("b",{children:"e-mail e SMS"})," sobre o ocorrido,"]}),e.jsxs("span",{className:a.span,children:[" ","buscando as devidas medidas de remediação (de responsabilidade individual) com apoio da equipe do"," "]}),e.jsx("strong",{className:a.strong,children:"PROS-SAÚDE"}),";"]}),e.jsxs("p",{className:a.p,children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"6. "}),e.jsxs("span",{className:a.strong,children:["Declaro estar ciente de que"," ",e.jsx("strong",{children:"os dados preenchidos no presente formulário não serão de forma nenhuma manipulados ou distribuídos para fins lucrativos"}),","]}),e.jsx("span",{className:a.span,children:" sendo sujeitos somente a fins de trabalho e prestação do "}),e.jsx("strong",{className:a.strong,children:"PROS-SAÚDE"}),e.jsx("span",{className:a.span,children:" e/ou das instituições responsáveis pelo seu funcionamento em esfera pública;"})]}),e.jsxs("p",{className:a.p,children:[e.jsx("span",{className:`${a.span} ${a.num}`,children:"7. "}),e.jsxs("span",{className:a.strong,children:["Declaro estar ciente de que os fins de trabalho do presente formulário e seu fluxo pelas diferentes tecnologias de informação em uso ",e.jsx("strong",{children:"estão em conformidade com a"})," "]}),e.jsx("a",{href:"http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm",target:"_blank",rel:"noopener noreferrer",className:a.a,children:"Lei Federal Nº 13.709"}),e.jsx("span",{className:a.span,children:", de agosto de 2018 ("}),e.jsx("strong",{className:a.strong,children:"Lei Geral de Proteção de Dados Pessoais"}),e.jsxs("span",{className:a.span,children:["), assegurando a ",e.jsx("em",{children:"proteção e privacidade dos envolvidos"})," nas partes e garantindo a contestação ou pedido de remoção de dados por parte dos pacientes a qualquer momento;"]})]})]})}function O({dispatch:n,state:r}){return e.jsx("button",{type:"button",className:"btn btn-info bolded mg-1t widThird widHalf900Q widFull600Q",id:"btnConform",onClick:()=>n(!r),children:"Abrir Declaração de Concordância"})}function H(){return p.useEffect(()=>{addEventListener("beforeunload",D)},[]),e.jsxs("div",{className:"fsAnamGDiv alItSt900Q flexQ900NoWC flexAlItE flexNoW flexSimple wsNoW cGap0 ws900N",id:"fsAnamGDiv1",role:"group",children:[e.jsxs("span",{role:"group",className:"fsAnamGSpan flexAlItCt col",id:"fsAnamGSpan1",children:[e.jsxs("label",{htmlFor:"firstNameId",className:"labelIdentif",children:["Primeiro Nome (Simples ou Composto):",e.jsx("input",{type:"text",name:"first_name",id:"firstNameId",className:"form-control autocorrect inpIdentif noInvert minText maxText patternText",autoComplete:"given-name","data-title":"primeiro_nome","data-reqlength":"3","data-maxlength":"99","data-pattern":"[^0-9]","data-flags":"gi",minLength:3,maxLength:99,required:!0,onInput:n=>{w(n.currentTarget),window&&localStorage.setItem("name",n.currentTarget.value)}})]}),e.jsx("br",{role:"presentation"})]}),e.jsxs("span",{role:"group",className:"fsAnamGSpan flexAlItCt col",id:"fsAnamGSpan2",children:[e.jsxs("label",{htmlFor:"additionalNameId",className:"labelIdentif",children:["Sobrenome(s) do Meio, se presente(s):",e.jsx("input",{type:"text",name:"additional_name",id:"additionalNameId",className:"form-control autocorrect inpIdentif noInvert","data-title":"nome_do_meio",autoComplete:"additional-name",onInput:n=>{A(n.currentTarget,{min:3,max:99,pattern:["[^0-9]","gi"]}),window&&localStorage.setItem("secondName",n.currentTarget.value)}})]}),e.jsx("br",{role:"presentation"})]}),e.jsxs("span",{role:"group",className:"fsAnamGSpan flexAlItCt col",id:"fsAnamGSpan3",children:[e.jsxs("label",{htmlFor:"familyNameId",className:"labelIdentif",children:["Último Sobrenome:",e.jsx("input",{type:"text",name:"family_name",id:"familyNameId",className:"form-control autocorrect inpIdentif noInvert minText maxText patternText",autoComplete:"family-name",required:!0,"data-title":"ultimo_nome","data-reqlength":"3","data-maxlength":"99","data-pattern":"[^0-9]","data-flags":"gi",minLength:3,maxLength:99,onInput:n=>{w(n.currentTarget),window&&localStorage.setItem("lastName",n.currentTarget.value)}})]}),e.jsx("br",{role:"presentation"})]})]})}function G(){return e.jsx("span",{role:"group",className:"fsAnamGSpan flexAlItCt col",id:"fsAnamGSpan4",children:e.jsxs("label",{htmlFor:"socialNameId",className:"labelIdentif",children:["Nome Social:",e.jsx("input",{type:"text",name:"social_name",id:"socialNameId",className:"form-control autocorrect inpIdentif noInvert","data-title":"nome_social",autoComplete:"given-name",onInput:n=>A(n.currentTarget,{min:3,max:99,pattern:["[^0-9]","gi"]})})]})})}export{O as B,k as C,B as D,H as N,G as S,F as a,M as b,S as c,P as d,a as s};