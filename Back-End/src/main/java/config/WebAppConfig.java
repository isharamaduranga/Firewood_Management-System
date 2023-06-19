/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/16/2023
 * Time        : 11:00 AM
 * Year        : 2023
 */

package config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "controller")
public class WebAppConfig {

}
