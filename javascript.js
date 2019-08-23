// //process

// //title screen
// document.addEventListener("keypress")
// let startButton=()=>{
// // button waiting ttobe clicked - add event event Listener()
// // once button is clicked its no longer displayed startButton.style.display = 'none'
// // characters placed on display character1.style.display = 'block' ;character.style.display = 'block'




// }


let posL=500;
document.addEventListener('keypress',(event)=>{
if(event.keyCode== 32){
let img = document.querySelector('img');

posL-=10;
img.style.marginLeft = posL + 'px';
if(posL == 0){
    posL=500;
    img.style.marginLeft = posL + 'px';
    alert('restart moonWalk')
}



}})