let pcs=0;
let us=0;


function pcgen(){

return Math.ceil(Math.random() * 3);


}
function check(n,pc){

  if(pc==n){
    document.getElementById("score").value="TIED"
    document.getElementById("score").style.backgroundColor="#73c2fb"
    }
    else if(((pc==1)&&(n==3))||((pc==2)&&(n==1))||((pc==3)&&(n==2))){
      document.getElementById("score").value="PC";
      document.getElementById("score").style.backgroundColor="#e35959"
    pcs=pcs+1;
    document.getElementById("pcsc").value=pcs;
    }
    else if(((n==1)&&(pc==3))||((n==2)&&(pc==1))||((n==3)&&(pc==2))){
      document.getElementById("score").value="YOU";
      document.getElementById("score").style.backgroundColor="#aeff35"
      us=us+1;
      document.getElementById("usc").value=us;
      }
    
    
    

}

function input(n){
 
if(n==1){
  document.getElementById("uimg").src="./images/rock.png"

}
if(n==2){
  document.getElementById("uimg").src="./images/paper.png"
}
if(n==3){
  document.getElementById("uimg").src="./images/scissor.png"
}
document.getElementById('uimg').style.animationPlayState = "paused";
let pc=pcgen();
document.getElementById('pcimg').style.animationPlayState = "paused";
if(pc==1){
  document.getElementById("pcimg").src="./images/rock.png";
}
else if(pc==2){
  document.getElementById("pcimg").src="./images/paper.png"
}
else if(pc==3){
  document.getElementById("pcimg").src="./images/scissor.png"
}
check(n,pc);
}
function rn(n){
  document.getElementById("uimg").src="./images/rock.png"
  document.getElementById("pcimg").src="./images/rock.png";
  document.getElementById("uimg").style.animationPlayState = "running";
  document.getElementById("pcimg").style.animationPlayState = "running";
if(n==2){
  document.getElementById("score").value="";
  document.getElementById("pcsc").value=0;
  document.getElementById("usc").value=0;
 

}

}









