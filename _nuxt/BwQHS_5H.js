import y from"./BwgM9Ew0.js";import h from"./tRNTv80d.js";import{d as b,y as x,m as S,r as v,a3 as w,b as l,c,e as d,F as B,Z as F,M as s,g as R,w as T,j as V,t as j,X as C,l as E}from"./BGfEjE3O.js";const k=["action"],M={class:"inputs"},N=b({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(m){const i=x().alpine,{FORMSPREE_URL:n}=S().public;n||console.warn("No FORMSPREE_URL provided");const t=v(),p=w(m.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const u=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:u,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=i.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,u)=>{const r=y,a=h;return l(),c("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[d("div",M,[(l(!0),c(B,null,F(s(p),(o,_)=>(l(),C(r,{key:_,modelValue:o.data,"onUpdate:modelValue":g=>o.data=g,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[R(a,{type:"submit",disabled:!s(n)},{default:T(()=>[V(j(s(t)?s(t):m.submitButtonText),1)]),_:1},8,["disabled"])])],40,k)}}}),D=E(N,[["__scopeId","data-v-bd763389"]]);export{D as default};
