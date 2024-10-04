import{ay as $,e as k,a as x}from"./index-C1Kn7LbF.js";const f={base:"https://prossaude-client.netlify.app",origin:"",name:"PROSSaúde — UFRJ",firstPub:"2024-07-02T18:00:00Z"};function E(d,y){try{if($("",!0).ok||(console.warn("User token invalid. Redirecting to base page"),window.location.replace(window.location.origin)),typeof d!="string")throw new Error("invalid componentCase argument given to handleLinkChanges");if(typeof y!="string")throw new Error("invalid StyleFlag given to handleLinkChanges");const c=document.querySelectorAll("head");if(c.length>1)for(let e=0;e<c.length;e++)e>0&&c[e].remove();const s=document.querySelector("noscript");s instanceof HTMLElement&&s.tagName==="NOSCRIPT"&&s.innerText===""&&(s.innerText="You need JavaScript to run this application.");try{const e=document.querySelector("head");if(!(e instanceof HTMLHeadElement))throw k(e,"<head>",x(new Error));if(!e.querySelector('meta[charset="utf-8"]')&&!e.querySelector('meta[charset="UTF-8"]')&&e.prepend(Object.assign(document.createElement("meta"),{charSet:"UTF-8",id:"charsetMeta"})),e.querySelector('meta[name="viewport"]')||e.prepend(Object.assign(document.createElement("meta"),{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0, user-scalable=yes",id:"viewportMeta"})),!e.querySelector('meta[content="IE=edge"]')&&!e.querySelector('meta[content="IE=Edge"]')&&e.prepend(Object.assign(document.createElement("meta"),{httEquip:"X-UA-Compatible",content:"IE=edge",id:"edgeMeta"})),e.hasChildNodes()&&e.lastElementChild&&e.firstElementChild){for(const r of e.querySelectorAll("title"))r.remove();for(const r of[...e.querySelectorAll('link[rel="icon"]'),...e.querySelectorAll('link[rel="apple-touch-icon"]')])r.remove();for(const r of e.querySelectorAll('link[rel="canonical"]'))r.remove();e.querySelectorAll("meta").forEach((r,n)=>{try{(/name="description"/gi.test(r.outerHTML)||/property="og:/gi.test(r.outerHTML)||/name="twitter:/gi.test(r.outerHTML))&&r.remove()}catch(a){console.error(`Error executing iteration ${n} for removing local meta tags:${a.message}`)}});const{base:i,firstPub:p,name:o}=f;let t=f.origin;switch(t=location.origin.endsWith("/")?location.origin.slice(0,-1):location.origin,d){case"login":{const r="Login — PROSSaúde";!e.querySelector("title")&&e.firstElementChild.insertAdjacentHTML("afterend",`
                <!-- Start of automatic insertion -->
                <title>${r}</title>
                <link rel="canonical" href="${i}/" />
                <meta name="description" content="Este é uma página para login no sistema do projeto ${o}" />
                <meta property="og:type" content="website" />
                <meta property="og:website:published_time" content=${p} />
                <meta property="og:site_name" content="${o}" />
                <meta property="og:url" content="${i}/" />
                <meta property="og:title" content="${r}" />
                <meta property="og:description" content="Acesse o link para fazer o login no sistema online do Projeto ${o}" />
                <meta property="og:image" content="${i}/img/PROS_Saude_Modelo1-Final.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />
                <meta property="og:image:alt" content="logo" />
                <link rel="icon" href="${t}/favicon_g.ico" id="faviconpross" />
                <link
                  rel="apple-touch-icon"
                  href="${t}/apple-touch-icon-iphone-60x60-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="60x60"
                  href="${t}/apple-touch-icon-ipad-76x76-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="${t}/apple-touch-icon-iphone-retina-120x120-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="${t}/apple-touch-icon-ipad-retina-152x152-precomposed.png"
                />
                <!-- End of automatic insertion -->
                `),document.body.className="loginBody";break}case"base":{!e.querySelector("title")&&e.firstElementChild.insertAdjacentHTML("afterend",`
                <!-- Start of automatic insertion -->
                <title>Base de Navegação — ${o}</title>
                <link rel="canonical" href="${i}/base/" />
                <meta name="description" content="Este é uma página para navegação entre as subpáginas do sistema do projeto ${o}" />
                <meta property="og:type" content="website" />
                <meta property="og:website:published_time" content="${p}" />
                <meta property="og:site_name" content="${o}" />
                <meta property="og:url" content="${i}/base/" />
                <meta property="og:title" content="${o} — Tela Base de Navegação" />
                <meta property="og:description" content="Acesse o link para acessar a tela para navegação entre as páginas de preenchimento e trabalho do Projeto ${o}" />
                <meta property="og:image" content="${t}/img/PROS_Saude_Modelo1-Final.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />
                <link rel="icon" href="${t}/favicon_g.ico" id="faviconpross" />
                <link
                  rel="apple-touch-icon"
                  href="${t}/img/apple-touch-icon-iphone-60x60-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="60x60"
                  href="${t}/img/apple-touch-icon-ipad-76x76-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="${t}/img/apple-touch-icon-iphone-retina-120x120-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="${t}/img/apple-touch-icon-ipad-retina-152x152-precomposed.png"
                />
                <!-- End of automatic insertion -->
              `),document.body.className="baseBody";break}case"ag":{!e.querySelector("title")&&e.firstElementChild.insertAdjacentHTML("afterend",`
                <!-- Start of automatic insertion -->
                <title>Anamnese Geral &#8211 ${o}</title>
                <link rel="canonical" href="${i}/ag/" />
                <meta name="description" content="Este é um formulário para a Anamnese Geral do projeto PROSSaúde — UFRJ" />
                <meta property="og:type" content="website" />
                <meta property="og:website:published_time" content="${p}" />
                <meta property="og:site_name" content="${o}" />
                <meta property="og:url" content="${i}/ag/" />
                <meta property="og:title" content="Exame Clínico — ${o}" />
                <meta property="og:description" content="Acesse o link para preencher o formulário dos dados para a Anamnese Geral do Projeto ${o}" />
                <meta property="og:image" content="${t}/img/PROS_Saude_Modelo1-Final.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />
                <link rel="icon" href="${t}/favicon_g.ico" id="faviconpross" />
                <link
                  rel="apple-touch-icon"
                  href="${t}/img/apple-touch-icon-iphone-60x60-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="60x60"
                  href="${t}/img/apple-touch-icon-ipad-76x76-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="${t}/img/apple-touch-icon-iphone-retina-120x120-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="${t}/img/apple-touch-icon-ipad-retina-152x152-precomposed.png"
                />
                <!-- End of automatic insertion -->
                `),document.body.className="agBody";break}case"ed":{!e.querySelector("title")&&e.firstElementChild.insertAdjacentHTML("afterend",`
                <!-- Start of automatic insertion -->
                <title>Exame Clínico — Educação Física & Nutrição — ${o}</title>
                <link rel="canonical" href="${i}/edfis/" />
                <meta name="description" content="Este é um formulário para o Exame Clínico de Educação Física do Projeto ${o}" />
                <meta property="og:type" content="website" />
                <meta property="og:website:published_time" content="${p}" />
                <meta property="og:site_name" content="${o}" />
                <meta property="og:url" content="${i}/edfis/" />
                <meta property="og:title" content="Exame Clínico — Formulário de Educação Física &amp; Nutrição — ${o}" />
                <meta property="og:description" content="Acesse o link para preencher o formulário dos dados para o exame clínico de Educação Física &amp; Nutrição do Projeto ${o}" />
                <meta property="og:image" content="${t}/img/PROS_edfis_icon.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />
                <link rel="icon" href="${t}/favicon_nut.ico" id="faviconpross" />
                <link
                  rel="apple-touch-icon"
                  href="${t}/img/apple-touch-icon-iphone-60x60-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="60x60"
                  href="${t}/img/apple-touch-icon-ipad-76x76-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="${t}/img/apple-touch-icon-iphone-retina-120x120-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="${t}/img/apple-touch-icon-ipad-retina-152x152-precomposed.png"
                />
                <!-- End of automatic insertion -->
                `),document.body.className="edfisNutBody";break}case"od":{!e.querySelector("title")&&e.firstElementChild.insertAdjacentHTML("afterend",`
                <!-- Start of automatic insertion -->
                <title>Exame Clínico — Odontologia</title>
                <link rel="canonical" href="${i}/od" />
                <meta name="description" content="Este é um formulário para o Exame Clínico de Odontologia do Projeto ${o}" />
                <meta property="og:type" content="website" />
                <meta property="og:website:published_time" content="${p}" />
                <meta property="og:site_name" content="${o}" />
                <meta property="og:url" content="${i}/od/" />
                <meta property="og:title" content="Exame Clínico — Formulário de Odontologia — ${o}" />
                <meta property="og:description" content="Acesse o link para preencher o formulário dos dados para o exame clínico de Odontologia do Projeto ${o}" />
                <meta property="og:image" content="${i}/img/pros-od-icon.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />
                <link rel="icon" href="${t}/favicon_od.ico" id="faviconpross" />
                <link
                  rel="apple-touch-icon"
                  href="${t}/img/apple-touch-icon-iphone-60x60-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="60x60"
                  href="${t}/img/apple-touch-icon-ipad-76x76-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="${t}/img/apple-touch-icon-iphone-retina-120x120-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="${t}/img/apple-touch-icon-ipad-retina-152x152-precomposed.png"
                />
                <!-- End of automatic insertion -->
              `),document.body.className="odBody";break}case"panel":{!e.querySelector("title")&&e.firstElementChild.insertAdjacentHTML("afterend",`
                <!-- Start of automatic insertion -->
                <title>Painel de Trabalho &#8211 ${o}</title>
                <link rel="canonical" href="${i}/panel/" />
                <meta name="description" content="Este é o painel de trabalho principal para o Projeto ${o}" />
                <meta property="og:type" content="website" />
                <meta property="og:website:published_time" content="${p}" />
                <meta property="og:site_name" content="${o}" />
                <meta property="og:url" content="${i}/panel/" />
                <meta property="og:title" content="Painel de Trabalho — ${o}" />
                <meta property="og:description" content="Acesse o link para preencher acessar o painel de trabalho online do Projeto ${o}" />
                <meta property="og:image" content="${i}/img/PROS_Saude_Modelo1-Final.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />
                <link rel="icon" href="${t}/favicon_g.ico" id="faviconpross" />
                <link
                  rel="apple-touch-icon"
                  href="${t}/img/apple-touch-icon-iphone-60x60-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="60x60"
                  href="${t}/img/apple-touch-icon-ipad-76x76-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="${t}/img/apple-touch-icon-iphone-retina-120x120-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="${t}/img/apple-touch-icon-ipad-retina-152x152-precomposed.png"
                />
                <!-- End of automatic insertion -->
                `),document.body.className="panelBody";break}case"recover":{!e.querySelector("title")&&e.firstElementChild.insertAdjacentHTML("afterend",`
                <!-- Start of automatic insertion -->
                <title>Recuperação de Senha &#8211 ${o}</title>
                <meta name="description" content="Este é o painel de trabalho principal para o Projeto ${o}" />
                <meta property="og:type" content="website" />
                <meta property="og:website:published_time" content="${p}" />
                <meta property="og:site_name" content="${o}" />
                <meta property="og:url" content="${i}/recover/" />
                <meta property="og:title" content="Recuperação de Senha — ${o}" />
                <meta property="og:description" content="Acesse o link para preencher acessar a página de recuperação de senha do Projeto ${o}" />
                <meta property="og:image" content="${i}/img/PROS_Saude_Modelo1-Final.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="400" />
                <link rel="canonical" href="${i}/recover/" />
                <link rel="icon" href="${t}/favicon_g.ico" id="faviconpross" />
                <link
                rel="apple-touch-icon"
                href="${t}/img/apple-touch-icon-iphone-60x60-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="60x60"
                  href="${t}/img/apple-touch-icon-ipad-76x76-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="${t}/img/apple-touch-icon-iphone-retina-120x120-precomposed.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="${t}/img/apple-touch-icon-ipad-retina-152x152-precomposed.png"
                />
                <!-- End of automatic insertion -->
                `),document.body.className="recoverBody";break}default:console.error("Invalid componentCase. No description appended.");return}const g=e.children,l=new Map;for(let r=0;r<g.length;r++){const n=g[r];let a=n.id;if(a||(n instanceof HTMLScriptElement&&n.src!==""?a=n.src:n instanceof HTMLLinkElement&&n.href!==""?a=n.href:n instanceof HTMLMetaElement&&(n.name!==""?a=n.name:n.httpEquiv!==""?a=n.httpEquiv:n.content!==""&&(a=n.content))),!!a)if(l.has(a)){const m=l.get(a),h=n.attributes.length,u=m.attributes.length;h>u?(l.set(a,n),m.remove()):h===u?(m.remove(),l.set(a,n)):n.remove()}else l.set(a,n)}}}catch(e){console.error(`Error executing procedure for checking local links and metas:
${e.message}`)}}catch(c){console.error(`Error executing handleLinkChanges:
${c.message}`)}}export{E as h};
