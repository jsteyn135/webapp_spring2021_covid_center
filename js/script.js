


function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if (ddCountry.value == "Yes") {//case sensitive
        divCountry.classList.remove("invisible");
    }
    else {
        divCountry.classList.add("invisible");
    }

}// end updateCountryView


function validateForm() {

    var DoB = document.querySelector("#txtDoB");
    var DoBError = document.querySelector("#divDoBError")
    var formIsValid = true;
    if (DoB.value == "") {
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The date of birth cannot be empty!";
        DoB.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if (DoBDate >= todayDate) {
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "The date of birth must be before today's date!";
            DoB.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = "";
            DoB.classList.remove("hasError");

        }


    }// end else




    var ddCountry = document.querySelector("#ddCountry");
    if (ddCountry.value == "Yes") {
        var txtCountry = document.querySelector("#txtcountry");
        if (txtCountry.value == "") {
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else {
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }

    }//end ddcountry ifyes


    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#','!','~','&','<','>','`','"'];

    for(let i = 0;i<elements.length;i++){
        for(let j=0;j<invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j])!= -1){
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }//end for

    
    return formIsValid;
}// end validateForm



