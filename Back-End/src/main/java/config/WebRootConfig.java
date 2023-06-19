/**
 * @author : Ishara Maduarnga
 * Project Name: firewood_management
 * Date        : 6/16/2023
 * Time        : 12:01 AM
 * Year        : 2023
 */

package config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Import(value = JPAConfig.class)
@Configuration
@ComponentScan(basePackages = "service")
public class WebRootConfig {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

}
