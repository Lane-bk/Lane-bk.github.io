const text="Гарант сделок • 6% комиссия • Безопасные сделки • 900+ сделок";
let i=0;
function type(){
 if(i<text.length){
  document.getElementById("typing").innerHTML+=text.charAt(i);
  i++;
  setTimeout(type,40);
 }
}
type();

function copyWallet(){
 navigator.clipboard.writeText(
  document.getElementById("wallet").innerText
 );
 alert("Адрес скопирован!");
}

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting) entry.target.classList.add("show");
 });
});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
