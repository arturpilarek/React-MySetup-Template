(()=>{"use strict";const e=[{name:"Adam",age:28},{name:"Ania",age:35},{name:"Roman",age:18}],a=e=>e.reduce(((e,a)=>e+a.age),0);console.log(a(e)),((e,n)=>{e.innerHTML=a(n)})(document.querySelector("#age"),e)})();