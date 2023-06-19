/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/16/2023
 * Time        : 11:12 AM
 * Year        : 2023
 */

package controller;
import dto.AdminDTO;
import dto.SupplierDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import service.SupplierService;
import util.ResponseUtil;

import java.util.ArrayList;

@RestController
@RequestMapping("supplier")
@CrossOrigin
public class SupplierController {

    @Autowired
    private SupplierService service;


    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveSupplier(@RequestBody SupplierDTO dto){
        System.out.println("calling post mapping...."+dto);
        service.addSupplier(dto);
        return new ResponseUtil(200, dto.getNic()+ " Successfully Added...",null);
    }

    @GetMapping
    public ResponseUtil getAllSuppliers(){
        ArrayList<SupplierDTO> allSuppliers = service.getAllSuppliers();
        return new ResponseUtil(200,"Success..",allSuppliers);
    }


    @GetMapping(path = "/{status}")
    public ResponseUtil getAllSuppliersByStatus(@PathVariable String status){
        ArrayList<SupplierDTO> allSuppliers = service.findSupplierByStatus(status);
        return new ResponseUtil(200,"Success..",allSuppliers);
    }

    @DeleteMapping(params = "id")
    public ResponseUtil deleteSupplier(Long id) {
        service.deleteSupplier(id);
        return new ResponseUtil(200, id + " Successfully deleted...!", null);
    }

    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody SupplierDTO dto) {
        System.out.println("update supplier "+dto);
        service.updateSupplier(dto);
        return new ResponseUtil(200, dto.getNic() + " Successfully updated..", null);
    }
}
