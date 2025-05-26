
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //to set a box to true
let winPatterns=[ //an array that shows logic for winning patterns
    [0,1,2],
    [0,3,8],
    [0,4,6],
    [1,4,7],
    [2,5,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{  //to reset the game
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach ((box) => {
    box.addEventListener("click",()=>{   //to add action,eventlisteners are used
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disable=true; //when a box is clicked,if it's value is O, and if the same box is clicked again then it's value changes to X,so to prevent from this,disabl is used
    })
});
const disableBoxes=()=>{
    for(let box of boxes){
        boxes.disabled=true; //after winning the game,the remaining boxes are disabled to play
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        boxes.enabled=true; //after restarting the game,the remaining boxes are enabled to play
        box.innerText="";
    }
}
const showWinner=(Winner)=>{
    msg.innerText('Congratulations,winner is ${winner}');
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPattern)
    {
            let pos1Val=boxes[pattern[0]].innerText;
            let posVal2=boxes[pattern[1]].innerText;
            let posVal3=boxes[pattern[2]].innerText;
            if(pos1Val!="" && posVal2!="" && posVal3!=""){
                if(pos1Val===posVal2 && pos2Val===pos3Val){
                    console.log("Winner",posVal1);
                    showWinner(posVal1);
                }
            }
            
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);
