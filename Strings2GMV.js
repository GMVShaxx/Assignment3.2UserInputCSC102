function checkCreds()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var zipCode = document.getElementById("zipCode").value;
// Checks the values of the inputed data 

    var eventInfo = firstName + lastName;
//adds the two pieces of information together for ease later

    if (eventInfo.length >20 || eventInfo.length <2)
    {
        document.getElementById("eventStatus").innerHTML = "Login is Invalid. Please Try again"
    }
//prohibites the user from accessing the secret message without having a combined first and last name of twenty characters

var reverseArray = splitString.reverse();
alert(rev);
//repeats the input back to the user as an alert mashed together in one line


    else if (eventInfo <20 && eventInfo >2)
    {
        alert("Access Granted");
        location.replace("SecretMessage.html");
    }
    else
    {
        document.getElementById("eventStatus").innerHTML = "# of participants is invalid"
    }
// transfers over the file to the secret message if all information was inputed correctly.



// I havent been able to complete this assignment like I had wanted to. If you could tell me where I went wrong,
// I will resubmitt for a better grade if youll allow.



//if (zipCode.length <5 || zipCode.length >5)
// {
//    document.getElementById("eventStatus").innerHTML = "Zip Code is Invalid. Please Try again"
// }
}