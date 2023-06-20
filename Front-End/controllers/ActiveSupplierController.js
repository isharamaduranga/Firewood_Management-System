let baseURLSupplierStatus = "http://localhost:8080/Back_End_war_exploded/"

loadAllActiveSuppliers();

function loadAllActiveSuppliers() {
    var count = 0;
    $("#SupplierActiveTable").empty();
    $.ajax({
        url: baseURLSupplierStatus + "supplier"+"/Active",
        dataType: "json",

        success: function (resp) {
            console.log(resp.data);
            for (let ad of resp.data) {

                let month = ad.date[1]<10? "0"+ad.date[1]:ad.date[1];
                let day = ad.date[2].l<10? "0"+ad.date[2]:ad.date[2];
                console.log(month+" "+day);

                $("#SupplierActiveTable").append("" +
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

            $("#activeCount").text(count)
        }
    });
}

$("#exportExcelSheet_Active_Supplier").click(function () {

    function exportToExcel(tableId, filename) {
        const table = document.getElementById(tableId);
        const ws = XLSX.utils.table_to_sheet(table);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, filename + '.xlsx');
    }
    exportToExcel("supplierActiveTbl", "Active_Suppliers");

});