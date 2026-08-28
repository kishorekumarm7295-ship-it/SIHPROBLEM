
function showMessage(){

alert(
"Welcome to SkillBridge Academia Industry Portal 🚀"
);

}




function calculateSkill(){


let technical =
document.getElementById("technical").value;


let communication =
document.getElementById("communication").value;



let score=0;



if(technical=="AI/ML")
score+=50;

else
score+=35;



if(communication=="Excellent")
score+=50;

else if(communication=="Good")
score+=35;

else
score+=20;




document.getElementById("score").innerHTML=
score+"%";



let message="";



if(score>=80)

message=
"Excellent! You are industry ready 🎯";


else

message=
"Improve your skills through recommended courses 📚";




document.getElementById("result").innerHTML=
message;


}
