let container = document.querySelector(".main");
const reset = document.getElementById("reset");
const changeSize = document.getElementById("changeSize");
const gridSize = document.getElementById("size");

const resetValue = gridSize.value = 32;

function createGrid(gridSize) {   
    container.style.setProperty('--grid-rows', gridSize);
    for (let y = 0; y < (gridSize * gridSize) ; y++) {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("grid");
        container.appendChild(nuevoDiv);
    }
};
container.addEventListener("mouseover", (event)=>{
    if (event.currentTarget !== event.target) {
        event.target.setAttribute("class", "onmouseover");
    }
})
changeSize.addEventListener("click", ()=>{
    container.innerHTML = " ";
    console.log(gridSize.value);
    if (gridSize.value > 64) {
        alert("max size is 64")
    } else {
        createGrid(gridSize.value)
    }
})
createGrid(gridSize.value);

// CLEAR GRID
function resetGrid(){
    container.innerHTML = " ";
    createGrid(resetValue);    
   // container.setAttribute("class", "clear")
}
reset.addEventListener("click", resetGrid)



