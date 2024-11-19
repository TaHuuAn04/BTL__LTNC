package com.example.demo;
import com.example.demo.Service.FirebaseService;
import com.example.demo.object.Person;
import java.util.concurrent.ExecutionException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class RestdemoApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(RestdemoApplication.class, args);
        FirebaseService firebaseService = context.getBean(FirebaseService.class);
    }

}