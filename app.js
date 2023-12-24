let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-box");
let msg=document.querySelector("#msg");
let turn0=true;
let cnt=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turn0)
        {    
            box.innerText="0";
            turn0=false;
            cnt++;
        }
        else        
        {    
            box.innerText="X";
            turn0=true;
            cnt++;
        }
        box.disabled=true;
        checkwinner();
        if(cnt==9)
        {
            msg.innerText="Match draw";
        }
    });
});

const disableboxes  = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableboxes  = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
        
    }
}

const resetbtn =()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

newgame.addEventListener("click", resetbtn);
reset.addEventListener("click", resetbtn);