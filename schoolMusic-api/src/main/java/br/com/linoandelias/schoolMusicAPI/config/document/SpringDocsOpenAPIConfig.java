package br.com.linoandelias.schoolMusicAPI.config.document;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocsOpenAPIConfig {

    @Bean
    public OpenAPI openAPI(){
        return new OpenAPI().
                info(new Info()
                        .title("Rest API - School Music")
                        .description("API for a school music")
                        .version("v1")
                        .contact(new Contact().name("Antônio Lino - github: https://github.com/AntonioALino"))
                        .contact(new Contact().name("Elias Braga - github:  https://github.com/eliasbragga")));
    }


}
