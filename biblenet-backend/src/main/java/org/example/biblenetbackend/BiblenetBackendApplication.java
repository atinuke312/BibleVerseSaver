package org.example.biblenetbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication

public class BiblenetBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BiblenetBackendApplication.class, args);
	}

//	@Bean
//	@CrossOrigin(origins="http://localhost:3000/",allowCredentials = "true")
//	public WebMvcConfigurer corsConfigurer(){
//		return new WebMvcConfigurer() {
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**").allowedMethods("*").allowedOrigins("http://localhost:3000/");
//			}
//		};
//	}

	@Bean
	@CrossOrigin(origins="http://localhost:3000/",allowCredentials = "true")
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedMethods("*")
						.allowedOrigins("*");
			}
		};
	}
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return addCorsMappings(registry) -> {
//			registry.addM
//		}
//	}

}
