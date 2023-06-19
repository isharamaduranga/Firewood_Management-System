package repo;

import entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SupplierRepo  extends JpaRepository<Supplier,Long> {


}
