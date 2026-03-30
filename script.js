// печать текста
const text = "Гарант сделок • Низкая комиссия • Безопасные сделки";
let i=0;
function type(){
 if(i<text.length){
  document.getElementById("typing").innerHTML+=text.charAt(i);
  i++;
  setTimeout(type,40);
 }
}
type();

// copy TON
function copyWallet(){
 navigator.clipboard.writeText(
   document.getElementById("wallet").innerText
 );
 alert("Скопировано!");
}

// плавное появление карточек
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   entry.target.classList.add("show");
  }
 });
});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));