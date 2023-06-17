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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repo.AdminRepo;
import service.AdminService;

import javax.transaction.Transactional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getId())){
            throw new RuntimeException("Admin "+dto.getId()+" Already Exists..!!!");
        }
        repo.save(mapper.map(dto, Admin.class));
    }
}
