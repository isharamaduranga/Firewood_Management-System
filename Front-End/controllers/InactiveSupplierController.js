let baseURLSupplierStatusInactive = "http://localhost:8080/Back_End_war_exploded/"

loadAllInactiveSuppliers();

function loadAllInactiveSuppliers() {
    var count = 0;
    $("#SupplierInactiveTable").empty();
    $.ajax({
        url: baseURLSupplierStatusInactive + "supplier"+"/Inactive",
        dataType: "json",

        success: function (resp) {
            console.log(resp.data);
            for (let ad of resp.data) {

                let month = ad.date[1]<10? "0"+ad.date[1]:ad.date[1];
                let day = ad.date[2].l<10? "0"+ad.date[2]:ad.date[2];
                console.log(month+" "+day);

                $("#SupplierInactiveTable").append(
                    "<tr><td>" + (++count) +
                    "</td><td>" + ad.name +
                    "</td> <td>" + ad.nic +
                    "</td> <td>" + ad.date[0]+"-"+month+"-"+day+
                    "</td> <td>" + ad.woodType +
                    "</td><td>" + ad.area +
                    "</td><td>" + ad.distance +
                    "</td><td>" + ad.contact +
                    "</td><td>" + ad.status +
                    "</td></tr>");
            }
            $("#inActiveCount").text(count)
        }
    });
}

$("#exportExcelSheet_Inactivate_Supplier").click(function () {

    function exportToExcel(tableId, filename) {
        const table = document.getElementById(tableId);
        const ws = XLSX.utils.table_to_sheet(table);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, filename + '.xlsx');
    }
    exportToExcel("supplierInactiveTbl", "Inactive_Suppliers");

});