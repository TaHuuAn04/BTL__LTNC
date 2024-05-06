package com.example.demo.Service;
import java.util.concurrent.ExecutionException;
import com.example.demo.object.Person;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;
@Service
public class FirebaseService {
    public String saveUserDetails (Person person) throws InterruptedException, ExecutionException{
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("users").document(person.getName()).set(person);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }
    public Person getUserDetails(String name) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("users").document(name);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        Person person = null;
        if(document.exists()) {
            person = document.toObject(Person.class);
            return person;
        } else {
            return null;
        }
    }
    public String updateUserDetails(Person person) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("users").document(person.getName()).set(person);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }
    public String deleteUser(String name) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection("users").document(name).delete();
        return "Document with ID " + name + " has been deleted";
    }


    public String authenticateUser(Person person) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("users").document(person.getUsername());
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();

        if(document.exists()) {
            Person user = document.toObject(Person.class);
            if (user.getPassword().equals(person.getPassword())) {
                return "Token";
            } else {
                return "Invalid password";
            }
        } else {
            return "User does not exist";
        }
    }

    public String saveDoctor(Doctor doctor) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("doctors").document(doctor.getName()).set(doctor);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Doctor getDoctor(String name) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("doctors").document(name);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            return document.toObject(Doctor.class);
        } else {
            return null;
        }
    }

    public String updateDoctor(Doctor doctor) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("doctors").document(doctor.getName()).set(doctor);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public String deleteDoctor(String name) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection("doctors").document(name).delete();
        return "Document with name " + name + " has been deleted";
    }

    public String saveNurse(Nurse nurse) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> result = dbFirestore.collection("nurses").document(nurse.getName()).set(nurse);
        return result.get().getUpdateTime().toString();
    }

    public Nurse getNurse(String name) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection("nurses").document(name);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
            return document.toObject(Nurse.class);
        } else {
            return null;
        }
    }

    public String updateNurse(Nurse nurse) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> result = dbFirestore.collection("nurses").document(nurse.getName()).set(nurse);
        return result.get().getUpdateTime().toString();
    }

    public String deleteNurse(String name) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> result = dbFirestore.collection("nurses").document(name).delete();
        return "Document with name " + name + " has been deleted";
    }

}
