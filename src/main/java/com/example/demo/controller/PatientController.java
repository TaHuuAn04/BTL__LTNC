package com.example.demo.controller;

import com.example.demo.Service.PatientService;
import com.example.demo.object.Patient;
import com.sun.source.doctree.IndexTree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/Patients")
public class PatientController {
    @Autowired
    PatientService patientService;

    @PostMapping
    public String addPatient(@RequestBody Patient patient) throws InterruptedException, ExecutionException{
        patient.setid_serial();
        return patientService.creatPatient(patient);
    }
}
