const black=document.getElementById('black');
const choose=document.getElementById('choose');
const random=document.getElementById('random');
const clear= document.getElementById('clear')
const eraser=document.getElementById('eraser')
let grid=document.getElementById('grid')  ;
const sizeSlider=document.getElementById('sizeSlider');
const size = document.getElementById('size');



// variables
let square;
const DEFAULT_SIZE=32;

let currentSize=DEFAULT_SIZE;

// SET CURRENT SIZE
function setCurrentSize(newSize){
    currentSize=newSize;
}


sizeSlider.onchange = (e) => changeSize(e.target.value)
clear.addEventListener('click',reloadGrid)
eraser.addEventListener('click',()=> eraseSquare(square));
black.addEventListener('click',()=> blackColor(square));
random.addEventListener('click',()=>randomColor(square));




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
}
  









