package br.com.linoandelias.schoolMusicAPI.domain.services;

import br.com.linoandelias.schoolMusicAPI.domain.entities.Students;
import br.com.linoandelias.schoolMusicAPI.domain.repositorys.StudentsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StudentsService {
    private StudentsRepository repository;
    public StudentsService(StudentsRepository repository) {
        this.repository = repository;
    }

    // POST
    public Students create(Students students){
        return repository.save(students);
    }

    //GET ALL
    public List<Students> getAll(){
        return repository.findAll();
    }

    //GET BY ID
    public Optional <Students> getByID(String id){
        return repository.findById(id);
    }

}
