var numfield1=document.getElementById("numfield1");
var numfield2=document.getElementById("numfield2");
var resultfield=document.getElementById("resultfield");
var form=document.getElementById("xiswhatpercentageofy");
form=addEventListener("submit",function(event){
    if(!numfield1.value || !numfield2.value){
        alert("please enter valid input");
    }
    else {
   var x=parseFloat(numfield1.value);
    var y=parseFloat(numfield2.value);
        var result=x/y;
        var percentage= result*100;
        resultfield.innerHTML=("answer is "  + percentage +"%");
        event.preventDefault();
        
       
}
});
