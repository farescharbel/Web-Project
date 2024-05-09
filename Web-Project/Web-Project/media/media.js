const yaAna = new Audio("yaAna.mp3");
const paris = new Audio("paris.mp3");
const boheme = new Audio("boheme.mp3");

function playmusic1(){
    let parentElement = document.getElementById('songy');
 for (let i = 0; i < parentElement.children.length; i++) {
     parentElement.children[i].classList.add("load");
     
 }
 let parentElement2 = document.getElementById('songf');
 for (let i = 0; i < parentElement2.children.length; i++) {
     parentElement2.children[i].classList.remove("load");
     
 }
 let parentElement3 = document.getElementById('songr');
 for (let i = 0; i < parentElement3.children.length; i++) {
     parentElement3.children[i].classList.remove("load");
     
 }
 paris.play();
 boheme.pause();
 yaAna.pause();
 
}

function playmusic2(){
    let parentElement = document.getElementById('songf');
 for (let i = 0; i < parentElement.children.length; i++) {
     parentElement.children[i].classList.add("load");
     
 }
 let parentElement2 = document.getElementById('songr');
 for (let i = 0; i < parentElement2.children.length; i++) {
     parentElement2.children[i].classList.remove("load");
     
 }
 let parentElement3 = document.getElementById('songy');
 for (let i = 0; i < parentElement3.children.length; i++) {
     parentElement3.children[i].classList.remove("load");
     
 }
 
 boheme.play();
 paris.pause();
 yaAna.pause();
 
}

function playmusic3(){
    let parentElement = document.getElementById('songr');
 for (let i = 0; i < parentElement.children.length; i++) {
     parentElement.children[i].classList.add("load");
     
 }
 let parentElement2 = document.getElementById('songf');
 for (let i = 0; i < parentElement2.children.length; i++) {
     parentElement2.children[i].classList.remove("load");
     
 }
 let parentElement3 = document.getElementById('songy');
 for (let i = 0; i < parentElement3.children.length; i++) {
     parentElement3.children[i].classList.remove("load");
     
 }

 yaAna.play();
 paris.pause();
 boheme.pause();
 
}

