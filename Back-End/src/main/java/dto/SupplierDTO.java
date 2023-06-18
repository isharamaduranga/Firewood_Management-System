/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/17/2023
 * Time        : 8:38 PM
 * Year        : 2023
 */

package dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class SupplierDTO {
    Long id ;
    String fullName;
    String nameWithInitials;
    String nic;
    LocalDate date;
    String address;
    String district;
    double distance;
    String contact;
    String status;
}
