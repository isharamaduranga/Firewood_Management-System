/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/16/2023
 * Time        : 11:12 AM
 * Year        : 2023
 */

package controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/supplier")
public class SupplierController {

    public SupplierController() {
        System.out.println("Running supplier controller class...");
    }
}
