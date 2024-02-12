import{r as a,b as u,d as g,e,w as m,y as N,v as p,m as $,k as C,A as V,B as D,o as M,a as y,f as x,l as S,q as k,g as w,t as i,i as A,x as j}from"./index-7ae892e9.js";const T={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},U=e("div",{class:"fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"},null,-1),B={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},F={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},L={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl"},O={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},R={class:""},z={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},E={class:"flex justify-between my-4"},q=e("h2",{class:"text-base font-semibold leading-6 p-2 text-gray-900",id:"modal-title"},[e("b",{class:"text-blue-900"},"Aggiorna Verifica")],-1),P={class:"flex items-center"},H=e("label",{for:"status",class:"block mr-2 text-md font-medium dark:text-white"},"Status:",-1),G=e("option",{selected:"",value:"false"},"Da completare",-1),I=e("option",{value:"true"},"Completate",-1),J=[G,I],K=e("hr",{class:"mb-4"},null,-1),Q={class:"mt-4"},W={class:"mb-6"},X=e("label",{for:"procesNote",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Modifica dopo collaudo",-1),Y={class:"mb-6"},Z=e("label",{for:"procesNote",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Componenti mancanti",-1),ee={class:"mb-6"},te=e("label",{for:"procesNote",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Lavorazioni manuali",-1),se=e("hr",null,null,-1),oe={class:"mb-6 mt-4"},ae=e("label",{for:"orderNumber",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Firma operatore",-1),re={__name:"VerifyForm",props:{verify:{type:Object,required:!1}},emits:["close-modal","save-data"],setup(v,{emit:_}){const t=v,r=a(t.verify.changes_after_testing),l=a(t.verify.missing_component),b=a(t.verify.manual_work),c=a(t.verify.status),n=a(t.verify.firma);async function d(){let h=$.verifyCRUD+`${t.verify.uuid}/`,o="PATCH";try{const s=await C({method:o,url:h,data:{changes_after_testing:r.value,missing_component:l.value,manual_work:b.value,firma:n.value,status:c.value}});_("save-data",s.data)}catch(s){s=s,alert(s)}}function f(){_("close-modal")}return(h,o)=>(u(),g("div",T,[U,e("div",B,[e("div",F,[e("div",L,[e("div",O,[e("div",R,[e("div",z,[e("div",E,[q,e("div",P,[H,m(e("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>c.value=s),id:"status",class:"p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},J,512),[[N,c.value]])])]),K,e("div",Q,[e("form",null,[e("div",W,[X,m(e("textarea",{"onUpdate:modelValue":o[1]||(o[1]=s=>r.value=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",name:"procesNote",id:"procesNote",cols:"30",rows:"3"},null,512),[[p,r.value]])]),e("div",Y,[Z,m(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=s=>l.value=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",name:"procesNote",id:"procesNote",cols:"30",rows:"3"},null,512),[[p,l.value]])]),e("div",ee,[te,m(e("textarea",{"onUpdate:modelValue":o[3]||(o[3]=s=>b.value=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",name:"procesNote",id:"procesNote",cols:"30",rows:"3"},null,512),[[p,b.value]])]),se,e("div",oe,[ae,m(e("input",{type:"text",id:"orderNumber",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"",required:"","onUpdate:modelValue":o[4]||(o[4]=s=>n.value=s)},null,512),[[p,n.value]])]),e("div",{class:"px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},[e("button",{onClick:d,class:"mt-3 inline-flex w-full justify-center mx-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-500 hover:text-white sm:mt-0 sm:w-auto"}," Save "),e("button",{class:"mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800 hover:text-white sm:mt-0 sm:w-auto",onClick:f}," Cancel ")])])])])])])])])])]))}},le={class:"p-4 w-full"},ne={key:0,class:""},de=e("hr",{class:"my-4"},null,-1),ie={class:"flex justify-between my-4"},ce={class:"text-2xl mb-4 text-blue-900"},ue={class:"mt-2"},me={class:"mt-2"},_e=e("hr",{class:"my-2"},null,-1),be={class:"flex justify-between my-4"},ge=e("h1",{class:"text-md font-semibold"},"Status:",-1),fe={class:"text-md"},he={key:0,class:"text-white bg-green-700 p-1 px-2 rounded-md"},pe={key:1,class:"text-white bg-yellow-400 p-1 px-2 rounded-md"},ve=e("hr",{class:"my-4"},null,-1),xe={class:"mt-4 bg-gray-100 p-4 rounded-md"},ye=e("h4",{class:"text-blue-800 text-sm font-semibold"},"Modifiche dopo collaudo:",-1),ke=e("hr",{class:"my-1"},null,-1),we={class:"text-sm"},$e={class:"mt-4 bg-gray-100 p-4 rounded-md"},Ce=e("h4",{class:"text-blue-800 text-sm font-semibold"}," Componenti mancanti: ",-1),Ne=e("hr",{class:"my-1"},null,-1),Ve={class:"text-sm"},De={class:"mt-4 bg-gray-100 p-4 rounded-md"},Me=e("h4",{class:"text-blue-800 text-sm font-semibold"},"Lavorazioni manuali:",-1),Se=e("hr",{class:"my-1"},null,-1),Ae={class:"text-sm"},je={class:"mt-4 bg-gray-100 p-4 rounded-md"},Te=e("h4",{class:"text-blue-800 text-sm font-semibold mb-4"},"Firma operatore:",-1),Ue={class:""},Be=e("hr",null,null,-1),Le={__name:"VerifyDetails",props:{verify_number:String},setup(v){const _=v,t=a({}),r=a(!1),l=a(!1);V(),D();async function b(){const n=`${$.verifyCRUD}${_.verify_number}/`;try{const d=await C.get(n);t.value=d.data,console.log(d.data),r.value=!0}catch(d){alert(d)}}function c(){l.value=!l.value}return M(()=>{b(),console.log(_.uuid)}),(n,d)=>{const f=y("font-awesome-icon"),h=y("router-link");return u(),g("main",null,[e("div",le,[r.value?(u(),g("div",ne,[x(h,{to:{name:"order-details",params:{order_number:t.value.order_number}},class:"hover:text-green-600"},{default:S(()=>[x(f,{icon:"arrow-left-long"}),w(" Back to "+i(t.value.order_number),1)]),_:1},8,["to"]),de])):k("",!0),e("div",ie,[e("div",null,[e("h1",ce,[x(f,{icon:"magnifying-glass"}),w(" Verifica ")]),e("p",ue,"Data: "+i(t.value.created_at),1),e("p",me,"Ordine: "+i(t.value.order_number),1)]),e("div",{class:"flex gap-2"},[e("button",{class:"hover:bg-amber-400 max-h-8 text-blue-950 font-semibold hover:text-white px-4 border hover:border-none text-sm border-blue-950 rounded",onClick:c}," Aggiorna ")])]),_e,e("div",be,[ge,e("h1",fe,[t.value.status?(u(),g("span",he,"COMPLETATO")):(u(),g("span",pe,"DA COMPLETARE"))])]),ve,e("div",xe,[ye,ke,e("p",we,i(t.value.changes_after_testing),1)]),e("div",$e,[Ce,Ne,e("p",Ve,i(t.value.missing_component),1)]),e("div",De,[Me,Se,e("p",Ae,i(t.value.manual_work),1)]),e("div",je,[Te,e("p",Ue,i(t.value.firma),1),Be])]),r.value?m((u(),j(re,{key:0,onCloseModal:c,onSaveData:n.updateTest,verify:t.value},null,8,["onSaveData","verify"])),[[A,l.value]]):k("",!0)])}}};export{Le as default};
