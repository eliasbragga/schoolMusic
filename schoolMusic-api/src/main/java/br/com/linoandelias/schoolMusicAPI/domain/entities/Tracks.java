package br.com.linoandelias.schoolMusicAPI.domain.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "tracks")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Tracks {

    @Id
    private String idTracks;
    private StudyTrack name;
    private int duration;
    private Videos content;

}
