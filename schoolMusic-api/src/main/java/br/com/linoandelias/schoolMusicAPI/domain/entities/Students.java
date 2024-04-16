package br.com.linoandelias.schoolMusicAPI.domain.entities;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Students {

    @Id
    private Long id;
    private String name;
    private String password;
    private StudyTrack studyTrack;
}
