var editRowIndex = -1;

window.onload = function () {
    loadMerchantDataFromLocalStorage();
};

function addOrUpdateData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("number").value;
    var url = document.getElementById("url").value;
    var c_name = document.getElementById("c_name").value;
    var c_email = document.getElementById("c_email").value;
    var c_phone = document.getElementById("c_number").value;
    var textarea = document.getElementById("textarea").value;
    var typeValue = Type();
    var category = document.getElementById("category").value;
    var Percentage = document.getElementById("Percentage").value;
    var image = document.getElementById("image").files[0];
    var form_date = document.getElementById("form_date").value;
    var criticalaccount = CriticalAccount();
    var paymentoptions = Paymentoption();

    var merchantData = {
        name: name,
        email: email,
        phone: phone,
        url: url,
        c_name: c_name,
        c_email: c_email,
        c_phone: c_phone,
        textarea: textarea,
        typeValue: typeValue,
        category: category,
        Percentage: Percentage,
        form_date: form_date,
        criticalaccount: criticalaccount,
        paymentoptions: paymentoptions
    };

    var merchantDataArray = [];

    if (localStorage.getItem('merchantData')) {
        merchantDataArray = JSON.parse(localStorage.getItem('merchantData'));
    }

    if (editRowIndex === -1) {
        merchantDataArray.push(merchantData);
    } else {
        merchantDataArray[editRowIndex] = merchantData;
    }

    localStorage.setItem('merchantData', JSON.stringify(merchantDataArray));

    document.getElementById("form").reset();
    loadMerchantDataFromLocalStorage();

    editRowIndex = -1;
    document.getElementById("submitButton").innerText = "Submit";

    return false;
}

function loadMerchantDataFromLocalStorage() {
    var merchantDataArray = [];

    if (localStorage.getItem('merchantData')) {
        merchantDataArray = JSON.parse(localStorage.getItem('merchantData'));
    }

    var tableBody = document.querySelector("#merchantTable tbody");

    tableBody.innerHTML = "";

    merchantDataArray.forEach(function (data, index) {
        var row = tableBody.insertRow(-1);

        var cell1 = row.insertCell(0);
        cell1.textContent = data.name;

        var cell2 = row.insertCell(1);
        cell2.textContent = data.email;

        var cell3 = row.insertCell(2);
        cell3.textContent = data.phone;

        var cell4 = row.insertCell(3);
        cell4.textContent = data.url;

        var cell5 = row.insertCell(4);
        cell5.textContent = data.c_name;

        var cell6 = row.insertCell(5);
        cell6.textContent = data.c_email;

        var cell7 = row.insertCell(6);
        cell7.textContent = data.c_phone;

        var cell8 = row.insertCell(7);
        cell8.textContent = data.textarea;

        var cell9 = row.insertCell(8);
        cell9.textContent = data.typeValue;

        var cell10 = row.insertCell(9);
        cell10.textContent = data.category;

        var cell11 = row.insertCell(10);
        cell11.textContent = data.Percentage + "%";

        var cell12 = row.insertCell(11);
        cell12.textContent = data.form_date;

        var cell13 = row.insertCell(12);
        cell13.textContent = data.criticalaccount;

        var cell14 = row.insertCell(13);
        cell14.textContent = data.paymentoptions.join(", ");

        var cell15 = row.insertCell(14);
        cell15.innerHTML = '<button onclick="editRow(' + index + ')">Edit</button> <button onclick="deleteRow(' + index + ')">Delete</button>';
    });
}

function Type() {
    var typeRadios = document.getElementsByName("type");
    for (var i = 0; i < typeRadios.length; i++) {
        if (typeRadios[i].checked) {
            return typeRadios[i].id;
        }
    }
    return "";
}

function Paymentoption() {
    var paymentOptionCheckboxes = document.getElementsByName("paymentOption");
    var selectedOptions = [];
    for (var j = 0; j < paymentOptionCheckboxes.length; j++) {
        if (paymentOptionCheckboxes[j].checked) {
            selectedOptions.push(paymentOptionCheckboxes[j].id);
        }
    }
    return selectedOptions;
}

function CriticalAccount() {
    var criticalAccountRadios = document.getElementsByName("criticalAccount");
    for (var i = 0; i < criticalAccountRadios.length; i++) {
        if (criticalAccountRadios[i].checked) {
            return criticalAccountRadios[i].id;
        }
    }
    return "";
}   

function editRow(index) {
    editRowIndex = index;

    var merchantDataArray = JSON.parse(localStorage.getItem('merchantData'));
    var selectedData = merchantDataArray[index];

    document.getElementById("name").value = selectedData.name;
    document.getElementById("email").value = selectedData.email;
    document.getElementById("number").value = selectedData.phone;
    document.getElementById("url").value = selectedData.url;
    document.getElementById("c_name").value = selectedData.c_name;
    document.getElementById("c_email").value = selectedData.c_email;
    document.getElementById("c_number").value = selectedData.c_phone;
    document.getElementById("textarea").value = selectedData.textarea;

    var typeRadios = document.getElementsByName("type");
    for (var i = 0; i < typeRadios.length; i++) {
        if (typeRadios[i].id === selectedData.typeValue) {
            typeRadios[i].checked = true;
        }
    }

    document.getElementById("category").value = selectedData.category;
    document.getElementById("Percentage").value = selectedData.Percentage;
    document.getElementById("form_date").value = selectedData.form_date;

    var criticalAccountRadios = document.getElementsByName("criticalAccount");
    for (var i = 0; i < criticalAccountRadios.length; i++) {
        if (criticalAccountRadios[i].id === selectedData.criticalaccount) {
            criticalAccountRadios[i].checked = true;
        }
    }

    var paymentOptionCheckboxes = document.getElementsByName("paymentOption");
    for (var j = 0; j < paymentOptionCheckboxes.length; j++) {
        if (selectedData.paymentoptions.includes(paymentOptionCheckboxes[j].id)) {
            paymentOptionCheckboxes[j].checked = true;
        }
    }

    document.getElementById("submitButton").innerText = "Update";
}

function deleteRow(index) {
    var merchantDataArray = JSON.parse(localStorage.getItem('merchantData'));
    merchantDataArray.splice(index, 1);
    localStorage.setItem('merchantData', JSON.stringify(merchantDataArray));
    loadMerchantDataFromLocalStorage();
}

function filterTable() {
    var inputName = document.getElementById("filterName").value.toLowerCase();
    var selectCategory = document.getElementById("filterCategory").value.toLowerCase();
    var selectCritical = document.getElementById("filterCritical").value.toLowerCase();
    var selecttype = document.getElementById("filterType").value.toLowerCase();
    var selectpayment = document.getElementById("filterPayment").value.toLowerCase();

    var merchantDataArray = [];

    if (localStorage.getItem('merchantData')) {
        merchantDataArray = JSON.parse(localStorage.getItem('merchantData'));
    }

    var tableBody = document.getElementById("merchantTableBody");

    tableBody.innerHTML = "";

    merchantDataArray.forEach(function (data, index) {
        // Filter by name and category
        if (
            (inputName === "" || data.name.toLowerCase().includes(inputName)) &&
            (selectCategory === "" || data.category.toLowerCase() === selectCategory) &&
            (selectCritical === "" || data.criticalaccount.toLowerCase() === selectCritical) &&
            (selecttype === "" || data.typeValue.toLowerCase() === selecttype) &&
            (selectpayment ==="" || data.paymentoptions.join(", ").toLowerCase() ===selectpayment)
        ) {
            var row = tableBody.insertRow(-1);

            var cell1 = row.insertCell(0);
            cell1.textContent = data.name;

            var cell2 = row.insertCell(1);
            cell2.textContent = data.email;

            var cell3 = row.insertCell(2);
            cell3.textContent = data.phone;

            var cell4 = row.insertCell(3);
            cell4.textContent = data.url;

            var cell5 = row.insertCell(4);
            cell5.textContent = data.c_name;

            var cell6 = row.insertCell(5);
            cell6.textContent = data.c_email;

            var cell7 = row.insertCell(6);
            cell7.textContent = data.c_phone;

            var cell8 = row.insertCell(7);
            cell8.textContent = data.textarea;

            var cell9 = row.insertCell(8);
            cell9.textContent = data.typeValue;

            var cell10 = row.insertCell(9);
            cell10.textContent = data.category;

            var cell11 = row.insertCell(10);
            cell11.textContent = data.Percentage + "%";

            var cell12 = row.insertCell(11);
            cell12.textContent = data.form_date;

            var cell13 = row.insertCell(12);
            cell13.textContent = data.criticalaccount;

            var cell14 = row.insertCell(13);
            cell14.textContent = data.paymentoptions.join(", ");

            var cell15 = row.insertCell(14);
            cell15.innerHTML = '<button onclick="editRow(' + index + ')">Edit</button> <button onclick="deleteRow(' + index + ')">Delete</button>';
        }
    });
}