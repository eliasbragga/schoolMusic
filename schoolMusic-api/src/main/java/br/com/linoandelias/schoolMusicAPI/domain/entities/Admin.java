package br.com.linoandelias.schoolMusicAPI.domain.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;
@Document(collation = "ADMINS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Admin {

    @Id
    private UUID id;
    private String name;
    private String password;

}
