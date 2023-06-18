/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/17/2023
 * Time        : 3:31 PM
 * Year        : 2023
 */

package service.impl;

import dto.AdminDTO;
import entity.Admin;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repo.AdminRepo;
import service.AdminService;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getId())) {
            throw new RuntimeException("Admin " + dto.getId() + " Already Exists..!!!");
        }
        repo.save(mapper.map(dto, Admin.class));
    }

    @Override
    public ArrayList<AdminDTO> getAllAdmins() {
        List<Admin> adminList = repo.findAll();
        return  mapper.map(adminList,new TypeToken<ArrayList<AdminDTO>>() {}.getType());
    }

    @Override
    public void deleteAdmin(String id) {
        if (!repo.existsById(id)){
            throw new RuntimeException("Admin "+id+" Not Available to Delete..!");
        }
        repo.deleteById(id);
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if (!repo.existsById(dto.getId())){
            throw new RuntimeException("Admin "+dto.getId()+" Not Available to Update..!");
        }
        repo.save(mapper.map(dto,Admin.class));
    }

    @Override
    public AdminDTO findByPasswordAndUsername(String password, String name) {
        Admin data = this.repo.findByPasswordAndName(password, name);
        return mapper.map(data,AdminDTO.class);
    }
}
