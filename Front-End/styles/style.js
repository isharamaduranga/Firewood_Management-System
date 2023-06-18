$(document).ready(function() {
    // Show the "v-pills-suppliers_active" tab when "Active Suppliers" button is clicked
    $("#activeBtn").click(function() {
        $("#v-pills-suppliers_active").tab("show");
    });

    // Show the "v-pills-suppliers_inactive" tab when "Inactive Suppliers" button is clicked
    $("#inactiveBtn").click(function() {
        $("#v-pills-suppliers_inactive").tab("show");
    });
});