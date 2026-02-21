const roles=["Java Backend Developer","Spring Boot Specialist","API Engineer"];
let i=0,j=0;
const typing=document.getElementById("typing");

function type(){
 if(j<roles[i].length){
  typing.textContent+=roles[i].charAt(j);
  j++;
  setTimeout(type,120);
 }else{
  setTimeout(erase,1500);
 }
}

function erase(){
 if(j>0){
  typing.textContent=roles[i].substring(0,j-1);
  j--;
  setTimeout(erase,80);
 }else{
  i=(i+1)%roles.length;
  setTimeout(type,300);
 }
}

type();
