package service;

import dto.SupplierDTO;

import java.util.ArrayList;

public interface SupplierService {
    void addSupplier(SupplierDTO dto);

    ArrayList<SupplierDTO> getAllSuppliers();

    void deleteSupplier(Long id);

    void updateSupplier(SupplierDTO dto);

    ArrayList<SupplierDTO> findSupplierByStatus(String status);


}
