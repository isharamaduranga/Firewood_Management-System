package repo;

import entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;


public interface SupplierRepo  extends JpaRepository<Supplier,Long> {

    ArrayList<Supplier> findByStatus(String status);

}
