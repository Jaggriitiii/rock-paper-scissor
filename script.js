let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".hand");
const showmsg= document.querySelector("#mssg");
const user= document.querySelector("#scoreyou");
const comp= document.querySelector("#scorecomp");
let userrr=0; let comppp=0;
const compchoice =()=>{
   let cchoices= ["rock", "paper","scissor"];
    const randindx= Math.floor(Math.random()*3);
    return cchoices[randindx];
}

const showwinner= (userwin)=>{
    if(userwin){
        userrr++;
       showmsg.innerText="You won!! Computer lost!!";
       document.querySelector("#mssg").style.backgroundColor= "green";
       user.innerText= `${userrr}`;
    }
    else{
        comppp++;
       showmsg.innerText= "You lost!! Computer won!!"
       document.querySelector("#mssg").style.backgroundColor= "red";
       comp.innerText= `${comppp}`;
    }
}

const playgame =(userchoice) =>{
   //gen comp choice;
   let cpchoice= compchoice();
   if(userchoice===cpchoice){ 
    showmsg.innerText= "It was a Draw!!";
    document.querySelector("#mssg").style.backgroundColor= "gray";
   };
   let userwin= "true";
    if(userchoice==="rock"){
         userwin= cpchoice==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin= cpchoice==="scissor" ? false:true;
    }
    else if(userchoice==="scissor"){
        userwin= cpchoice==="rock" ? false:true;
    }
    showwinner(userwin);
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
      //  alert("click");
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    })
})

