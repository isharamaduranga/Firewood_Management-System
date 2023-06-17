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
import org.springframework.web.bind.annotation.*;
import service.SupplierService;
import util.ResponseUtil;

import java.util.ArrayList;

@RestController
@RequestMapping("supplier")
@CrossOrigin
public class SupplierController {

    private SupplierService service;

    @PostMapping
    public ResponseUtil saveAdmin(@ModelAttribute SupplierDTO dto){
        service.addSupplier(dto);
        return new ResponseUtil(200, dto.getNic()+ " Successfully Added...",null);
    }

    @GetMapping
    public ResponseUtil getAllSuppliers(){
        ArrayList<SupplierDTO> allSuppliers = service.getAllSuppliers();
        return new ResponseUtil(200,"Success..",allSuppliers);
    }


    @DeleteMapping(params = "id")
    public ResponseUtil deleteSupplier(String nic) {
        service.deleteSupplier(nic);
        return new ResponseUtil(200, nic + " Successfully deleted...!", null);
    }

    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody SupplierDTO dto) {
        service.updateSupplier(dto);
        return new ResponseUtil(200, dto.getNic() + " Successfully updated..", null);
    }
}
