let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll("#reset-btn");

let turn0=false;

const winPatters=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("Click",()=>{
        console.log("Box was Clicked");
    })
})