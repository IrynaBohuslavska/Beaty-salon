function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var lastName = document.forms["myForm"]["flastName"].value;
    var email = document.forms["myForm"]["femail"].value;
    var citi = document.forms["myForm"]["fcity"].value;
    var password = document.forms["myForm"]["fpassword"].value;

    if (name === "") {
        alert("First name must be filled out");
        return false;
    }


    if (lastName === "") {
        alert("Last name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email address must be filled out");
        return false;
    }
    if (citi === "") {
        alert("City must be filled out");
        return false;
    }
    if (password === "") {
        alert("Password must be filled out");
        return false;
    }
    if (citi === "" || email === "" || lastName === "" || name === "") {
        alert("Fields must be filled out");
        return false;
    }
}

function myFunction() {
    document.getElementById("fname").style.backgroundColor = "LightCyan";
    document.getElementById("flastName").style.backgroundColor = "LightCyan";

}

function myFunction1(val) {
    alert("The input value has changed. The new value is: " + val);
}

function mouseDown() {
    document.getElementById("myP").style.color = "MediumAquaMarine";
}

function mouseUp() {
    document.getElementById("myP").style.color = "CadetBlue";
}

function myFunction2() {
    document.body.classList.toggle("dark-mode");
    $('.card').toggleClass('dark-background');
    $('.dropdown-item').toggleClass('dark-background');
    $('.dropdown-menu').toggleClass('dark-background');
}

