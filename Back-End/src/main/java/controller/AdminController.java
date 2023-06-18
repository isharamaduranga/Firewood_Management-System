/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/17/2023
 * Time        : 3:08 PM
 * Year        : 2023
 */

package controller;

import dto.AdminDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.AdminService;
import util.ResponseUtil;

import java.util.ArrayList;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService service;

    @PostMapping
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO dto){
        service.addAdmin(dto);
        return new ResponseUtil(200, dto.getId()+ " Successfully Added...",null);
    }

    @GetMapping
    public ResponseUtil getAllAdmins(){
        ArrayList<AdminDTO> allAdmin = service.getAllAdmins();
        return new ResponseUtil(200,"Success..",allAdmin);
    }


    @DeleteMapping(params = "id")
    public ResponseUtil deleteAdmin(String id) {
        service.deleteAdmin(id);
        return new ResponseUtil(200, id + " Successfully deleted...!", null);
    }

    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody AdminDTO dto) {
        service.updateAdmin(dto);
        return new ResponseUtil(200, dto.getId() + " Successfully updated..", null);
    }

    @GetMapping(path = "/{password}/{name}")
    public ResponseUtil findByPasswordAndUsername(@PathVariable("password") String password, @PathVariable("name") String name) {
        return new ResponseUtil(200, "Ok", service.findByPasswordAndUsername(password, name));
    }

}
