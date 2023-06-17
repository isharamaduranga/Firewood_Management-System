package service;

import dto.AdminDTO;

import java.util.ArrayList;

public interface AdminService {
    void addAdmin(AdminDTO dto);

    ArrayList<AdminDTO> getAllAdmins();
}

