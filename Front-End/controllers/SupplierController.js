/** Back end Request URL */
let baseURLSupplierCrud = "http://localhost:8080/Back_End_war_exploded/"

var supplierNameRegEx = /^[A-z ]{5,20}$/;
var supplierNicRegEx = /^[0-9A-z]{8,20}$/;
var DateRegEx = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
var woodTypeRegex = /^(Rubber|Gliricidia)$/;
var areaRegEx = /^[0-9A-Z a-z,/:]{4,50}$/;
var distanceRegExx = /^[0-9]{1,5}$/;
var contactRegEx = /^(071|077|075|078|076)[0-9]{7}$/;
var statusRegex = /^(Active|Inactive)$/;

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

$("#woodType").keyup(function (event) {
    let type = $("#woodType").val();
    if (woodTypeRegex.test(type)) {
        $("#woodType").css('border', '1.5px solid limegreen');
        if (event.key == "Enter") {
            $("#supplierArea").focus();
        }
    } else {
        $("#woodType").css('border', '1.5px solid red');
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