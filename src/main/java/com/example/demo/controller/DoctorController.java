package com.example.demo.controller;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.FirebaseService;
import com.example.demo.object.Doctor;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    @Autowired
    private FirebaseService firebaseService;

    @PostMapping
    public ResponseEntity<String> createDoctor(@RequestBody Doctor doctor) {
        try {
            doctor.setid_serial();
            doctor.setUsername(doctor.generateUsername());
            doctor.setPassword(doctor.generatePassword());
            firebaseService.saveDoctor(doctor);
            return ResponseEntity.status(HttpStatus.CREATED).body("Doctor created successfully");
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create doctor");
        }
    }

    @GetMapping("/{name}")
    public ResponseEntity<Doctor> getDoctorByName(@PathVariable String name) {
        try {
            Doctor doctor = firebaseService.getDoctor(name);
            if (doctor != null) {
                return ResponseEntity.ok(doctor);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PutMapping("/{name}")
    public ResponseEntity<String> updateDoctor(@PathVariable String name, @RequestBody Doctor updatedDoctor) {
        try {
            Doctor existingDoctor = firebaseService.getDoctor(name);
            if (existingDoctor == null) {
                return ResponseEntity.notFound().build();
            }

            existingDoctor.setName(updatedDoctor.getName());
            existingDoctor.setBirthday(updatedDoctor.getBirthday());
            existingDoctor.setLocation(updatedDoctor.getLocation());
            existingDoctor.setEmail(updatedDoctor.getEmail());
            existingDoctor.setPhoneNumber(updatedDoctor.getPhoneNumber());
            existingDoctor.setSex(updatedDoctor.getSex());
            existingDoctor.setCccd(updatedDoctor.getCccd());
            existingDoctor.setDepartment(updatedDoctor.getDepartment());
            existingDoctor.setQualifications(updatedDoctor.getQualifications());
            existingDoctor.setAvailable(updatedDoctor.isAvailable());
            existingDoctor.setTime_off(updatedDoctor.getTime_off());

            firebaseService.updateDoctor(existingDoctor); 

            return ResponseEntity.ok("Doctor updated successfully");
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update doctor");
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<String> deleteDoctor(@PathVariable String name) {
        try {
            firebaseService.deleteDoctor(name);
            return ResponseEntity.ok("Doctor with name " + name + " has been deleted");
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete doctor");
        }
    }
}

