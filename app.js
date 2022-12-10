let eur = ['germany','france','spain','england','portugal'];
let asia = ['inida','china','russia','korea','japan'];
let north = ['usa','canada','mexico'];
let south = ['chile','peru','brazil'];
let autralia = ['sydney','melbourne'];
let antar = ['antarctica'];
let btn = document.getElementById("btn");
let result = document.getElementById('result');
btn.onclick=function(){
let choice = document.getElementById('choice').value;
switch(choice){
     case "europe": 
          europe();
          break;
          case "asia": 
            asias();
            break;
            
                    case "north america":
                    northa();
                    break;
                    case "south america":
                         southa();
                         break;
                         case "australia":
                              aus();
                              break;
                              case "antarctica":
                                   antarc();
                                   break;
}
}
function random(arr){
     let rand = Math.floor(Math.random() * arr.length);
     return rand;
}
function europe(){
    let randCon = eur[random(eur)];
     result.innerHTML=randCon;
     result.style.color=randcol();
}
function asias(){
    let  randCon = asia[random(asia)];
     result.innerHTML=randCon;
     result.style.color=randcol();
}
function northa(){
     let randCon = north[random(north)];
     result.innerHTML=randCon;
     result.style.color=randcol();
}
function southa(){
     let randCon = south[random(south)];
     result.innerHTML=randCon;
     result.style.color=randcol();
}
function aus(){
     let randCon = australia[random(australia)];
     result.innerHTML=randCon;
     result.style.color=randcol();
}
function antarc(){
     let randCon = antar[random(antar)];
     result.innerHTML=randCon;
     result.style.color=randcol();
}

function randcol(){
     let arr = ['a','b','c','h',9,3,1,2,3,4];
     let hex = '#';
     for(i=0;i<6;i++){
          hex = hex+arr[Math.floor(Math.random()*arr.length)];
     }
     return hex;
}