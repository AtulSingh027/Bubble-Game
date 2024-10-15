function bubbleMaker() {
    let bubble = "";

    for (let i = 0; i <= 175; i++) {
        let random = Math.floor(Math.random() * 10);
        bubble += ` <div class="bubble">${random}</div>`
    }

    document.querySelector(".Game").innerHTML = bubble;
}


rn = 0
function Newhit(){
    rn = Math.floor(Math.random()*10)
    document.querySelector("#Hitvalue").textContent = rn;
}

let score = 0 
document.querySelector(".Game")
.addEventListener("click",function(e){
    console.log(e.target)
    let hitnum = (Number(e.target.textContent));//for convert string to number
    if(hitnum === rn)
        {
            score += 1;
            document.querySelector("#Svalue").textContent = score;
            Newhit();
            bubbleMaker();
        }
    })
 
    
let timer = 30;
function Timerunner(){
    let intervel = setInterval(function(){
        if(timer > 0)
        {
           timer--;
           document.querySelector("#timer").textContent = timer;//it take large memroy becus setinterval not clear and run 
        }
        else{
            clearInterval(intervel);//it will clear the interval after full run save memory
            document.querySelector(".Game").innerHTML = `<h1>Game Over ! Your Score is ${score}</h1>`;
        }
    },1000)
}

bubbleMaker();
Timerunner();
Newhit();