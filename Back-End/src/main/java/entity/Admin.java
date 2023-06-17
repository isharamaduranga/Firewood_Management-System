/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/17/2023
 * Time        : 3:24 PM
 * Year        : 2023
 */

package entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Admin {
    @Id
    private String id;
    private String name;
    private String password;
    private String contact;
}