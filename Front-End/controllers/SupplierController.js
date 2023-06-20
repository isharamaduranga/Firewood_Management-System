/** Back end Request URL */
let baseURLSupplierCrud = "http://localhost:8080/Back_End_war_exploded/"

var supplierNameRegEx = /^[A-z ]{5,20}$/;
var supplierNicRegEx = /^[0-9A-z]{8,20}$/;
var DateRegEx = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
var areaRegEx = /^[0-9A-Z a-z,/:]{4,50}$/;
var distanceRegExx = /^[0-9]{1,5}$/;
var contactRegEx = /^(071|077|075|078|076)[0-9]{7}$/;


$("#supplierName").keyup(function (event) {
    let supplierName = $("#supplierName").val();
    if (supplierNameRegEx.test(supplierName)) {
        $("#supplierName").css('border', '1.5px solid limegreen');
        $("#lblSupplierName").text("");
        if (event.key == "Enter") {
            $("#supplierNic").focus();
        }
    } else {
        $("#supplierName").css('border', '1.5px solid red');
        $("#lblSupplierName").text("Check field is correct !");
    }
});

$("#supplierNic").keyup(function (event) {
    let supplierNic = $("#supplierNic").val();
    if (supplierNicRegEx.test(supplierNic)) {
        $("#supplierNic").css('border', '1.5px solid limegreen');
        $("#lblSupplierNic").text("");
        if (event.key == "Enter") {
            $("#createDate").focus();
        }
    } else {
        $("#supplierNic").css('border', '1.5px solid red');
        $("#lblSupplierNic").text("Check field is correct !");
    }
});

$("#createDate").keyup(function (event) {
    let date = $("#createDate").val();
    if (DateRegEx.test(date)) {
        $("#createDate").css('border', '1.5px solid limegreen');
        $("#lblCreateDate").text("");
        if (event.key == "Enter") {
            $("#woodType").focus();
        }
    } else {
        $("#createDate").css('border', '1.5px solid red');
        $("#lblCreateDate").text("Check this field whether correct !");
    }
});


$("#supplierArea").keyup(function (event) {
    let area = $("#supplierArea").val();
    if (areaRegEx.test(area)) {
        $("#supplierArea").css('border', '1.5px solid limegreen');
        $("#lblSupplierArea").text("");
        if (event.key == "Enter") {
            $("#supplierDistance").focus();
        }
    } else {
        $("#supplierArea").css('border', '1.5px solid red');
        $("#lblSupplierArea").text("Check field is correct !");
    }
});

$("#supplierDistance").keyup(function (event) {
    let distance = $("#supplierDistance").val();
    if (distanceRegExx.test(distance)) {
        $("#supplierDistance").css('border', '1.5px solid limegreen');
        $("#lblSupplierDistance").text("");
        if (event.key == "Enter") {
            $("#supplierContact").focus();
        }
    } else {
        $("#supplierDistance").css('border', '1.5px solid red');
        $("#lblSupplierDistance").text("Check field is correct !");
    }
});

$("#supplierContact").keyup(function (event) {
    let contact = $("#supplierContact").val();
    if (contactRegEx.test(contact)) {
        $("#supplierContact").css('border', '1.5px solid limegreen');
        $("#lblSupplierContact").text("");
        if (event.key == "Enter") {
            $("#status").focus();
        }
    } else {
        $("#supplierDistance").css('border', '1.5px solid red');
        $("#lblSupplierContact").text("Check field is correct !");
    }
});

/*
*   $('#supplierName').val(name);
        $('#supplierNic').val(nic);
        $('#createDate').val(date);
        $('#woodType option:selected').text(woodType);
        $('#supplierArea').val(area);
        $('#supplierDistance').val(distance);
        $('#supplierContact').val(contact);
        $('#status option:selected').text(status);*/



$("#addSupplierBtn").click(function () {

    if ($("#supplierName").val()==""|| $("#supplierNic").val()==""|| $("#createDate").val()==""|| $("#woodType option:selected").val() == "None"||
        $("#supplierArea").val()==""|| $("#supplierDistance").val()==""|| $("#supplierContact").val()==""|| $("#status option:selected").val() == "None"){
        alert("All Fields Are Required !");
    }else{
        if ($("#lblSupplierName").text()!=""|| $("#lblSupplierNic").text()!="" || $("#lblCreateDate").text()!="" ||
            $("#lblSupplierArea").text()!="" || $("#lblSupplierDistance").text()!="" || $("#lblSupplierContact").text()!=""){
            alert("Check Input Fields Whether Correct !");
        }else{
            saveSupplier();
        }
    }
});



function saveSupplier() {

    var supplierData={
        name:$('#supplierName').val(),
        nic:$('#supplierNic').val(),
        date:$('#createDate').val(),
        woodType:$('#woodType option:selected').text(),
        area: $('#supplierArea').val(),
        distance: $('#supplierDistance').val(),
        contact: $('#supplierContact').val(),
        status:  $('#status option:selected').text()
    }

    $.ajax({
        url: baseURLSupplierCrud+"supplier",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(supplierData),
        success: function (resp) {
            alert(resp.message);
            loadAllSupliers();
            clearTextFields();
            loadAllInactiveSuppliers();
            loadAllActiveSuppliers();
        },
        error: function (error) {
            let jSObj = JSON.parse(error.responseText);
            alert(jSObj.message);
        }
    });
}

/** BIND ROW CLICK EVENT FUNCTION ... */
function setData_Bind_Row_Eventss() {
    $('#SupplierTable>tr').click(function () {
        let name = $(this).children(":eq(1)").text();
        let nic = $(this).children(":eq(2)").text();
        let date = $(this).children(":eq(3)").text();
        let area = $(this).children(":eq(5)").text();
        let distance = $(this).children(":eq(6)").text();
        let contact = $(this).children(":eq(7)").text();
        let longId = $(this).children(":eq(9)").text();
        let woodType = $(this).children(":eq(4)").text();
        let status = $(this).children(":eq(8)").text();


       /* alert(woodType +" " + status);*/

        /** setting table details values to text fields */
        $('#supplierName').val(name);
        $('#supplierNic').val(nic);
        /*** find case */
        $('#createDate').val(date);
        $("#woodType").val(woodType);
        $('#supplierArea').val(area);
        $('#supplierDistance').val(distance);
        $('#supplierContact').val(contact);
        $("#status").val(status);
        $('#longId').text(longId)
    });
}

loadAllSupliers();

function loadAllSupliers() {
    var count = 0;
    $("#SupplierTable").empty();
    $.ajax({
        url: baseURLSupplierCrud + "supplier",
        dataType: "json",

        success: function (resp) {
            console.log(resp.data);
            for (let ad of resp.data) {

                let month = ad.date[1]<10? "0"+ad.date[1]:ad.date[1];
                let day = ad.date[2].l<10? "0"+ad.date[2]:ad.date[2];
                console.log(month+" "+day);

                $("#SupplierTable").append("" +
                    "<tr><td>" + (++count) +
                    "</td><td>" + ad.name +
                    "</td> <td>" + ad.nic +
                    "</td> <td>" + ad.date[0]+"-"+month+"-"+day+
                    "</td> <td>" + ad.woodType +
                    "</td><td>" + ad.area +
                    "</td><td>" + ad.distance +
                    "</td><td>" + ad.contact +
                    "</td><td>" + ad.status +
                    "</td><td style='display: none'>" + ad.id +
                    "</td></tr>");
            }
            setData_Bind_Row_Eventss();
            $("#supplierCount").text(count);
        }
    });
}


$("#updateSupplierBtn").click(function () {
    var supplierDataForUpdate={
        id:$('#longId').text(),
        name:$('#supplierName').val(),
        nic:$('#supplierNic').val(),
        date:$('#createDate').val(),
        woodType:$('#woodType option:selected').text(),
        area: $('#supplierArea').val(),
        distance: $('#supplierDistance').val(),
        contact: $('#supplierContact').val(),
        status:  $('#status option:selected').text()
    }

    $.ajax({
        url: baseURLSupplierCrud + "supplier",
        method: "put",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(supplierDataForUpdate),
        success: function (resp) {
            alert(resp.message);
            loadAllSupliers();
            loadAllInactiveSuppliers();
            loadAllActiveSuppliers();
            clearTextFields();
        },
        error: function (error) {
            let jsObj = JSON.parse(error.responseText);
            alert(jsObj.message);
        }
    });
});


$("#deleteSupplierBtn").click(function () {
    let supplierId = $("#longId").text();
    $.ajax({
        url: baseURLSupplierCrud + "supplier?id=" + supplierId,
        method: "delete",
        dataType: "json",
        success: function (resp) {
            alert(resp.message);
            loadAllSupliers();
            loadAllInactiveSuppliers();
            loadAllActiveSuppliers();
            clearTextFields();
        },
        error: function (error) {
            let jsObj = JSON.parse(error.responseText);
            alert(jsObj.message);
        }
    });
});


$("#clearSupplierBtn").click(function () {
    clearTextFields();
});

function clearTextFields() {
    $('#supplierName').val("");
    $('#supplierNic').val("");
    $('#createDate').val("");
    $('#supplierArea').val("");
    $('#supplierDistance').val("");
    $('#supplierContact').val("");
    $('#status').val("None");
    $('#woodType').val("None");
}


/** Export Excel Sheet of All Supplier Details ... */
$("#exportExcelSheet").click(function () {
    function exportToExcel(tableId, filename) {
        const table = document.getElementById(tableId);
        const ws = XLSX.utils.table_to_sheet(table);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, filename + '.xlsx');
    }
    exportToExcel("supplierTbl", "Supplier_Data");
});
