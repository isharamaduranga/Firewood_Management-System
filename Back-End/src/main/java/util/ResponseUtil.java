/**
 * @author : Ishara Maduarnga
 * Project Name: SpringTest
 * Date        : 5/31/2023
 * Time        : 5:43 PM
 * Year        : 2023
 */

package util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ResponseUtil {
    private int code;
    private  String message;
    private Object data;
}
