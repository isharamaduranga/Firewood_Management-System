/** Back end Request URL */
let baseURLAdminLogin = "http://localhost:8080/Back_End_war_exploded/"

var regExLoginUserName = /^[A-Z|a-z\s]{3,20}$/;
var regExLoginPassword = /^[A-Z|a-z\s|@|#|$|0-9]{6,10}$/;


$("#loginAdminname").keyup(function (event) {
    let username = $("#loginAdminname").val();
    if (regExLoginUserName.test(username)) {

        if (event.key == "Enter") {
            $("#loginAdminpassword").focus();
        }
    } else {

    }
});

$("#loginAdminpassword").keyup(function (event) {
    let password = $("#loginAdminpassword").val();
    if (regExLoginPassword.test(password)) {
      $("#submit_btn").focus();
    } else {

    }
});

$("#submit_btn").click(function () {

    if ($("#loginAdminname").val() == "" || $("#loginAdminpassword").val() == ""){
        alert("All Fields Are Required To Log !");
    }else {
        isExistsAdmin($("#loginAdminname").val(),$("#loginAdminpassword").val());
    }

});


function isExistsAdmin(name, password) {
    $.ajax({
        url: baseURLAdminLogin+"admin/" + password +"/"+name,
        method: "GET",
        success: function (response) {
            if (response.data.name == $("#loginAdminname").val() && response.data.password == $("#loginAdminpassword").val()) {

                // Login Admin panel
                alert("success to login admin panel..");
                $('#nav_bar').css('display', 'block');
                $('#dashboard').css('display', 'block');
                $("#home_page").css('display', 'none');
            }
        },
        error: function (ob) {
            alert("Wrong Username And Password !");
        }
    });
}