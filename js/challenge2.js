var defaultValue = document.querySelector("#billing");
console.log(defaultValue.value);

document.getElementsByName('useBilling')[0].addEventListener("click", function(){
    let bill=document.querySelector('#billing')
    let home=document.querySelector('#home')
    console.log ('this works');
    if(this.checked){
        console.log("checked")
        home.value=bill.value;
        home.disabled = true;
    } else{
    home.value="";
    home.disabled = false;
    }
}
)