package br.com.linoandelias.schoolMusicAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class SchoolMusicApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SchoolMusicApiApplication.class, args);
	}

}
