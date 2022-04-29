function compute()
{
    //gets the values from the html document 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    //checks if the principal value is less than or equal to zero
    if (principal<= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }else{
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
    //calls the update rate function 
    updateRate();
}   
//dynamycally updates the rate input to automatically show at the side of the rate 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}       