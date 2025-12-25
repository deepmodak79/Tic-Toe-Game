let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#reset-btn");

const winPatters=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

var flag= true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
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

const checkWinner=()=>{
    for(let pattern of winPatters){
        //console.log(pattern);
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        
        let posValue1 =boxes[pattern[0]].innerText;
        let posValue2 =boxes[pattern[1]].innerText;
        let posValue3 =boxes[pattern[2]].innerText;

        if(posValue1 !="" && posValue2 !=""&& posValue3 !="" )
            if(posValue1===posValue2 && posValue2===posValue3){
                console.log("Winner",posValue1);
            }

    }
}