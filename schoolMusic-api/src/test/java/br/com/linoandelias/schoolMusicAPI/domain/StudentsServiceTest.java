package br.com.linoandelias.schoolMusicAPI.domain;


import br.com.linoandelias.schoolMusicAPI.domain.entities.Students;
import br.com.linoandelias.schoolMusicAPI.domain.repositorys.StudentsRepository;
import br.com.linoandelias.schoolMusicAPI.domain.services.StudentsService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static br.com.linoandelias.schoolMusicAPI.common.StudentsContansts.students_empty;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import static br.com.linoandelias.schoolMusicAPI.common.StudentsContansts.students;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class StudentsServiceTest {

    @InjectMocks
    private StudentsService service;

    @Mock
    private StudentsRepository repository;

    @Test
    public void createStudent_withValidData_returnFound(){

        when(service.create(students)).thenReturn(students);

        Students sut = service.create(students);

        assertThat(sut).isEqualTo(students);
    }

    @Test
    public void createStudent_withInvalidData_returnError(){
        when(service.create(students_empty)).thenThrow(RuntimeException.class);

        assertThatThrownBy(()->service.create(students_empty)).isInstanceOf(RuntimeException.class);
    }

    @Test
    public void getStudent_ByExistingID_returnsStudents(){
        when(service.getByID(students.getId())).thenReturn(Optional.of(students));

        Optional<Students> sut = service.getByID(students.getId());

        assertThat(sut.get()).isEqualTo(students);
    }

    @Test
    public void getStudent_ByUnexistingID_ReturnEmpty(){
        when(repository.findById(students.getId())).thenReturn(Optional.of(students));

        Optional<Students> sut = service.getByID(students.getId());

        assertThat(sut).isNotEmpty();
        assertThat(sut.get()).isEqualTo(students);
    }


}
