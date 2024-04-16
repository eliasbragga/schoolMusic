package br.com.linoandelias.schoolMusicAPI.domain.repositorys;

import br.com.linoandelias.schoolMusicAPI.domain.entities.Students;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface StudentsRepository extends MongoRepository<Students, Long> {
}
