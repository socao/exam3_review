document.querySelector("h1").style.color = "purple";
document.querySelector("h1").style.display = "inline-block";
document.addEventListener("dblclick", function(){
    let current = Date();
    alert(current);
  });
//check box & email
document.addEventListener("click", function(){
    if(document.getElementById('toggle').checked==true){
        console.log("I'm here!");
        document.querySelector('#emailBox').style.display="block";
    } else{
        document.querySelector('#emailBox').style.display="none";
    }
      
}
)
