package br.com.linoandelias.schoolMusicAPI.domain.repositorys;

import br.com.linoandelias.schoolMusicAPI.domain.entities.Tracks;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface TracksRepositorys extends MongoRepository<Tracks, String> {
}
