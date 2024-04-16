package br.com.linoandelias.schoolMusicAPI.web.controllers;

import br.com.linoandelias.schoolMusicAPI.domain.entities.Students;
import br.com.linoandelias.schoolMusicAPI.domain.services.StudentsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/smusic")
public class StudentsController {

    private StudentsService service;

    public StudentsController(StudentsService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity <Students> create(@RequestBody Students students){
        var ts = service.create(students);
        return ResponseEntity.ok(ts);
    }

    @GetMapping
    public ResponseEntity <List<Students>> findAll(){
        var ts = service.getAll();
        return ResponseEntity.status(HttpStatus.FOUND).body(ts);
    }

    @GetMapping("/{id}")
    public ResponseEntity <Optional<Students>> findByID(@PathVariable Long id){
         Optional <Students> ts = service.getByID(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(ts);
    }
}
