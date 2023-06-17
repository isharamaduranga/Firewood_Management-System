/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/17/2023
 * Time        : 8:40 PM
 * Year        : 2023
 */

package service.impl;

import dto.AdminDTO;
import dto.SupplierDTO;
import entity.Admin;
import entity.Supplier;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repo.AdminRepo;
import repo.SupplierRepo;
import service.SupplierService;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepo repo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addSupplier(SupplierDTO dto) {
        if (repo.existsById(dto.getNic())) {
            throw new RuntimeException("Supplier " + dto.getId() + " Already Exists..!!!");
        }
        repo.save(mapper.map(dto, Supplier.class));
    }

    @Override
    public ArrayList<SupplierDTO> getAllSuppliers() {
        List<Supplier> supplierList = repo.findAll();
        return  mapper.map(supplierList,new TypeToken<ArrayList<SupplierDTO>>() {}.getType());
    }

    @Override
    public void deleteSupplier(String nic) {
        if (!repo.existsById(nic)){
            throw new RuntimeException("Supplier "+nic+" Not Available to Delete..!");
        }
        repo.deleteById(nic);
    }

    @Override
    public void updateSupplier(SupplierDTO dto) {
        if (!repo.existsById(dto.getNic())){
            throw new RuntimeException("Supplier "+dto.getNic()+" Not Available to Update..!");
        }
        repo.save(mapper.map(dto,Supplier.class));
    }
}