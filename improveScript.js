const blackBtn=document.getElementById('black');
const rainbowBtn=document.getElementById('random');
const clearbtn= document.getElementById('clear')
const eraserBtn=document.getElementById('eraser')
let grid=document.getElementById('grid')  ;
const sizeSlider=document.getElementById('sizeSlider');
const size = document.getElementById('size');



// variables
let square;
const DEFAULT_SIZE=32;
const DEFAULT_MODE='black'

let currentSize=DEFAULT_SIZE;
let currentMode=DEFAULT_MODE;
let rainbow_mode = false ;
let black_mode = false;
let eraser_mode = false;
let clear_mode= false;

// SET CURRENT SIZE
function setCurrentSize(newSize){
    currentSize=newSize;
}
function setcurrentMode (newMode){
currentMode =newMode
}
let mousedown=false;
document.body.onmousedown = () =>(mousedown=true);
document.body.onmouseup = () => (mousedown =false);

sizeSlider.onchange = (e) =>changeSize(e.target.value)
 rainbowBtn.onclick =(e) =>{
     toglleMode(e.target)
    setcurrentMode('random')}  
 blackBtn.onclick = (e) => {
    setcurrentMode('black');
    toglleMode(e.target)
 }

clearbtn.addEventListener('click',(e)=>{
    reloadGrid(e);
    toglleMode(e.target);
})
eraserBtn.addEventListener('click',(e)=>{
      setcurrentMode('eraser')
     toglleMode(e.target)
    });


function toglleMode (node){
   const modeButtons = [rainbowBtn ,blackBtn ,eraserBtn,clearbtn]
   //TOGLE NODE
   if(node.id ==="random"){
     rainbow_mode =!rainbow_mode;
        node.classList.toggle('mode-button-unactivate', !rainbow_mode);
        node.classList.toggle('mode-button-activate', rainbow_mode);
   }
   if(node.id ==="black"){
    console.log(node.id)
     black_mode =!black_mode;
     node.classList.toggle('mode-button-unactivate',!black_mode);
     node.classList.toggle('mode-button-activate',black_mode)
   }
   if(node.id==='clear'){
    clear_mode =!clear_mode;
    node.classList.toggle('mode-button-unactivate',!clear_mode);
    node.classList.toggle('mode-button-activate',clear_mode);
   }
   if(node.id==='eraser'){
    eraser_mode =!eraser_mode;
    node.classList.toggle('mode-button-unactivate',!eraser_mode);
    node.classList.toggle('mode-button-activate',eraser_mode);
   }
   //DESABLE ALL MODE BESIDE NODE
   modeButtons.forEach((button) =>{
    if (button !== node){
      
    if(button.id ==='random' && rainbow_mode){
        rainbow_mode ===false;
        button.classList.toggle('mode-button-activate',false)
        button.classList.toggle("mode-button-unactivate",true);
    }
    if(button.id ==='clear' && clear_mode){
        clear_mode=false;
        button.classList.toggle('mode-button-activate',false)
        button.classList.toggle("mode-button-unactivate",true);
    }
    if(button.id ==='black' && black_mode){
        black_mode= false;
        button.classList.toggle('mode-button-activate',false);
        button.classList.toggle("mode-button-unactivate",true);
    }
  if (button.id === 'eraser' && eraser_mode){
    eraser_mode =false;
    button.classList.toggle('mode-button-activate',false);
    button.classList.toggle("mode-button-unactivate",true);
  }
    }
   })
}
// funchtion changeSize
function changeSize(value){
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
}

//reload grid 
function reloadGrid(){
clearAll()
 createGrid(currentSize)
}
// create grid
function createGrid(size){
   
    for (let i=0;i<size;i++){
          let row=document.createElement('div');
          row.classList.add('row');
          grid.appendChild(row)
          for(let k = 0; k < size; k++) {
            let column = document.createElement('div');
            column.classList.add('square')
            row.appendChild(column);
            column.addEventListener('mousedown',changeColor);
            column.addEventListener('mouseover',changeColor)
            square=document.querySelectorAll('.square');
         //   console.log(square)
        }  
        
       }
}
function changeColor(e) {
    if (e.type === 'mouseover' && !mousedown) return
    if (currentMode === 'random') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'black') {
      e.target.style.backgroundColor = 'black'
    } else if(currentMode === 'eraser'){
     e.target.style.backgroundColor=`#dde3e6`
    }
  }
//Update Size Value 
function updateSizeValue(value) {
  size.innerHTML=`${value} x ${value}`

}
// clear
function clearAll(){
    grid.innerHTML=``;
    }
window.onload =() =>{
    createGrid(DEFAULT_SIZE);
    updateSizeValue(DEFAULT_SIZE)
    toglleMode(clearbtn)
}
  

