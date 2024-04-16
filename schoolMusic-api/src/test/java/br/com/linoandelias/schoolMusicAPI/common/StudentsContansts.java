package br.com.linoandelias.schoolMusicAPI.common;

import br.com.linoandelias.schoolMusicAPI.domain.entities.Students;
import br.com.linoandelias.schoolMusicAPI.domain.entities.StudyTrack;

public class StudentsContansts {

    public static final Students students = new Students(1L, "name", "password", StudyTrack.BEGGINER);
    public static final Students students_empty = new Students(null,  "", "", null);

}
