package service;

import dto.AdminDTO;

import java.util.ArrayList;

public interface AdminService {
    void addAdmin(AdminDTO dto);

    ArrayList<AdminDTO> getAllAdmins();

    void deleteAdmin(String id);

    void updateAdmin(AdminDTO dto);

    AdminDTO findByPasswordAndUsername(String password, String name);
}

