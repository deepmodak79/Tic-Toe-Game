let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let messageContainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");


const winPatters=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

let flag= true;
let moveCount = 0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (box.innerText !== "") return;
        if(flag==true){
        box.innerHTML="0";
        flag=false;
        }
        else{
            box.innerHTML="X";
            flag=true;
        }
        box.disabled=true;

        checkWinner();
    })
})


const showWinner=(Winner)=>{
    message.innerText=`Congratulations, Winner is ${Winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatters) {
        let posValue1 = boxes[pattern[0]].innerText;
        let posValue2 = boxes[pattern[1]].innerText;
        let posValue3 = boxes[pattern[2]].innerText;

        if (posValue1 !== "" && posValue1 === posValue2 && posValue2 === posValue3) {
            showWinner(posValue1);
            return;
        }
    }
};


const disableBoxes =() =>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes =() =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const resetGame=()=>{
    flag= true;
    enableBoxes();
    messageContainer.classList.add("hide");
}


newGameButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);