package br.com.linoandelias.schoolMusicAPI.domain.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "videos")
public class Videos {

    @Id
    private Long id;

    private Boolean watched;

    private String url;

}
