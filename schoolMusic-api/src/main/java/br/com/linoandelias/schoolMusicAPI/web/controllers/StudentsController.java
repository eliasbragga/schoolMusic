package br.com.linoandelias.schoolMusicAPI.web.controllers;

import br.com.linoandelias.schoolMusicAPI.domain.entities.Students;
import br.com.linoandelias.schoolMusicAPI.domain.services.StudentsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@Tag(name = "Students", description = "\n" +
        "Contains all operations related to the resources to save, list and list by ID.\n")
@RestController
@RequestMapping("/api/v1/smusic")
public class StudentsController {

    private StudentsService service;

    public StudentsController(StudentsService service) {
        this.service = service;
    }

    @Operation(summary = "Create a new student.", description = "Resource to create a new student.", responses = {
            @ApiResponse(responseCode = "201", description = "Created student successful.", content = @Content (mediaType = "application/json", schema = @Schema(implementation = Students.class))),
            @ApiResponse(responseCode = "409", description = "Error while creating a student.", content = @Content (mediaType = "application/json", schema = @Schema(implementation = Students.class))),
            @ApiResponse(responseCode = "422", description = "Resource not processed due to invalid input data.", content = @Content (mediaType = "application/json", schema = @Schema(implementation = Students.class)))})
    @PostMapping
    public ResponseEntity <Students> create(@RequestBody Students students){
        var ts = service.create(students);
        return ResponseEntity.ok(ts);
    }

    @Operation(summary = "Returning a list of all students", description = "Resource to return a list of all existed students", responses = {
            @ApiResponse(responseCode = "200", description = "Returned all students successful.", content = @Content (mediaType = "application/json", schema = @Schema(implementation = Students.class)))
    })
    @GetMapping
    public ResponseEntity <List<Students>> findAll(){
        var ts = service.getAll();
        return ResponseEntity.status(HttpStatus.FOUND).body(ts);
    }

    @Operation(summary = "Return students by ID", description = "Resource to return students by ID", responses = {
            @ApiResponse(responseCode = "200", description = "Returned students by ID successful.", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Students.class ))),
            @ApiResponse(responseCode = "404", description = "Resource not found", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Students.class)))})
    @GetMapping("/{id}")
    public ResponseEntity <Optional<Students>> findByID(@PathVariable Long id){
         Optional <Students> ts = service.getByID(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(ts);
    }
}
