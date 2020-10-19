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
    $('.dropdown-menu').toggleClass('dark-background')
};




var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
