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
import com.example.demo.object.Nurse;

@RestController
@RequestMapping("/api/nurses")
public class NurseController {

    @Autowired
    private FirebaseService nurseService;

    @PostMapping
    public ResponseEntity<String> createNurse(@RequestBody Nurse nurse) {
        try {
            nurse.setid_serial();
            nurseService.saveNurse(nurse);
            return ResponseEntity.status(HttpStatus.CREATED).body("Nurse created successfully");
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create nurse");
        }
    }

    @GetMapping("/{name}")
    public ResponseEntity<Nurse> getNurseByName(@PathVariable String name) {
        try {
            Nurse nurse = nurseService.getNurse(name);
            if (nurse != null) {
                return ResponseEntity.ok(nurse);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{name}")
    public ResponseEntity<String> updateNurse(@PathVariable String name, @RequestBody Nurse updatedNurse) {
        try {
            Nurse existingNurse = nurseService.getNurse(name);
            if (existingNurse == null) {
                return ResponseEntity.notFound().build();
            }

            existingNurse.setName(updatedNurse.getName());
            existingNurse.setBirthday(updatedNurse.getBirthday());
            existingNurse.setLocation(updatedNurse.getLocation());
            existingNurse.setEmail(updatedNurse.getEmail());
            existingNurse.setPhoneNumber(updatedNurse.getPhoneNumber());
            existingNurse.setSex(updatedNurse.getSex());
            existingNurse.setCccd(updatedNurse.getCccd());
            existingNurse.setQualifications(updatedNurse.getQualifications());
            existingNurse.setExpertise(updatedNurse.getExpertise());
            existingNurse.setTitle(updatedNurse.getTitle());
            existingNurse.setFloor(updatedNurse.getFloor());
            existingNurse.setRoom(updatedNurse.getRoom());
            existingNurse.setTime_off(updatedNurse.getTime_off());

            nurseService.updateNurse(existingNurse);

            return ResponseEntity.ok("Nurse updated successfully");
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update nurse");
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<String> deleteNurse(@PathVariable String name) {
        try {
            nurseService.deleteNurse(name);
            return ResponseEntity.ok("Nurse with name " + name + " has been deleted");
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete nurse");
        }
    }
}
