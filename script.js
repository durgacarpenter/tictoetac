const parent = document.getElementById("parent")
const message = document.getElementById("message")

let gameState = ["", "", "", "X", "", "", "", "", ""]

let gameActive = true

let currentPlayer = "X"

const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
]

message.innerHTML = `Current Player: ${currentPlayer}`
//create 9 box
for(let i = 0; i<9; i++){
    //gameState.push("")
    const box = document.createElement("div")//create div
    box.classList.add("box")//add box class
    box.setAttribute("id", i)//give id
    parent.appendChild(box)
}


//check is game won or not
const isWon = () => {
    let result = false
    for(let i=0; i<winningCondition.length; i++){
        let Condition = winningCondition[i]
        console.log(winningCondition[i])
        let a = gameState[Condition[0]]
        let b = gameState[Condition[1]]
        let c = gameState[Condition[2]]

        if(a ==="" || b ==="" || c ===""){
            continue
        }
        
        if(a == b && b == c){
            gameActive = false
            result = true
        }
    }
    return result
}

//hanling  action on click of box
const handleClickEvent = (e) => {
    if(!e.target.innerText) {//checking inner text is empty
        e.target.innerText = currentPlayer
        console.log(currentPlayer)
        e.target.style.color = currentPlayer === "X" ? "red" : "green"


        gameState[e.target.id] = currentPlayer
        if(isWon()){
            message.innerHTML = `Current Player: ${currentPlayer} won`
        }else{
            currentPlayer = currentPlayer === "X" ? "0" : "X"//toggle / change current player
            message.innerHTML = `Current Player: ${currentPlayer}`
        }
        
    }
}
document.querySelectorAll(".box").forEach((element) => {
    element.addEventListener("click", handleClickEvent)
})
