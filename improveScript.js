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

let currentSize=DEFAULT_SIZE;
let rainbow_mode = false ;
let black_mode = false;
let eraser_mode = false;
let clear_mode= false;
// SET CURRENT SIZE
function setCurrentSize(newSize){
    currentSize=newSize;
}


sizeSlider.onchange = (e) => {
    changeSize(e.target.value)
   // console.log(e.target.value)
}
clearbtn.addEventListener('click',reloadGrid)
clearbtn.addEventListener('click',(e)=>toglleMode(e.target))

eraserBtn.addEventListener('click',()=> eraseSquare(square));
eraserBtn.addEventListener('click',(e)=>toglleMode(e.target));

blackBtn.addEventListener('click',()=> blackColor(square));
blackBtn.addEventListener('click',(e)=>toglleMode(e.target))

rainbowBtn.addEventListener('click',(e)=>{toglleMode(e.target)});
rainbowBtn.addEventListener('click',()=>randomColor(square));

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
            square=document.querySelectorAll('.square');
         //   console.log(square)
        }  
        
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
// 

// Random Color
function randomColor(square){
   
    return (
     square.forEach((q)=>q.addEventListener('mouseover',(e)=>{
     const red = Math.round(Math.random() * 255);
     const blue = Math.round(Math.random() * 255);
     const green = Math.round(Math.random() * 255);
 e.target.style.backgroundColor=`rgb(${red},${green},${blue})`
    
     }))   
 ) 
 
 }

 // black color
 function blackColor(square){
    return (
        square.forEach(s=>s.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor='black'
        }))
    )
}


function eraseSquare(square){
    return (
        square.forEach(s=>s.addEventListener('mouseover',(e)=>{
            e.target.style.backgroundColor= `#dde3e6`
        }))
    )
}

window.onload =() =>{
    createGrid(DEFAULT_SIZE);
    updateSizeValue(DEFAULT_SIZE)
}
  

