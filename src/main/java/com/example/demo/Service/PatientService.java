package com.example.demo.Service;

import com.example.demo.object.Patient;
import com.example.demo.object.PlanTreatment;
import com.example.demo.object.RecordsPatient;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PatientService {

    public String creatPatient(Patient patient) throws InterruptedException, ExecutionException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResultApiFuture = dbFireStore.collection("Patient").document(patient.getId()).set(patient);
        return writeResultApiFuture.get().getUpdateTime().toString();
    }

    public Patient getPatient(String id) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference document = db.collection("Patient").document(id);
        ApiFuture<DocumentSnapshot> documentSnapshotApiFuture = document.get();
        DocumentSnapshot snapshot = documentSnapshotApiFuture.get();
        Patient patient = null;
        if (snapshot.exists()) {
            patient = snapshot.toObject(Patient.class);
        }
        return patient;
    }

    public String deletePatient(String id) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> future = db.collection("Patient").document(id).delete();
        return "Document with ID " + id + " has been deleted";
    }

    public List<Patient> getAllPatients() throws InterruptedException, ExecutionException {
        List<Patient> patients = new ArrayList<>();
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference collectionReference = db.collection("Patient");
        try {
            ApiFuture<QuerySnapshot> future = collectionReference.get();
            QuerySnapshot querySnapshot = future.get();
            for (QueryDocumentSnapshot document : querySnapshot) {
                patients.add(document.toObject(Patient.class));
            }
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        return patients;
    }

    public String createPlantTreatmentToPatient(String id, PlanTreatment planTreatment) throws InterruptedException, ExecutionException {
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference planTreatmentCollection = db.collection("Patient").document(id).collection("PlanTreatment");
        ApiFuture<WriteResult> future = planTreatmentCollection.document(planTreatment.getDate()).set(planTreatment);
        return future.get().getUpdateTime().toString();
    }

    public String addRecordPatient(String id, RecordsPatient record) throws InterruptedException, ExecutionException{
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference recordCollection = db.collection("Patient").document(id).collection("RecordsPatient");
        ApiFuture<WriteResult> future = recordCollection.document(record.getDate()).set(record);
        return future.get().getUpdateTime().toString();
    }

    public List<RecordsPatient> getAllRecord(String id){
        List<RecordsPatient> records = new ArrayList<>();
        Firestore db = FirestoreClient.getFirestore();
        CollectionReference recordCollection = db.collection("Patient").document(id).collection("RecordsPatient");
        try{
            ApiFuture<QuerySnapshot> future = recordCollection.get();
            QuerySnapshot querySnapshot = future.get();
            for (QueryDocumentSnapshot document : querySnapshot){
                records.add(document.toObject(RecordsPatient.class));
            }
        } catch (InterruptedException | ExecutionException e){
            e.printStackTrace();
        }
        return records;
    }
}