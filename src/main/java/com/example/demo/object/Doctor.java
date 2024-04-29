package com.example.demo.object;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Component;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;

@Component
public class Doctor extends Person {
    private int serial;
    private String id;
    private String department;
    private String qualifications;
    private boolean available;
    private String time_off;

    public Doctor() {
        super();
    }

    public Doctor(String name, String birthday, String location, String email, String phoneNumber, String sex, String cccd, int serial, String id, String department, String qualifications, boolean available, String time_off) {
        super(name, birthday, location, email, phoneNumber, sex, cccd);
        this.serial = serial;
        this.id = id;
        this.department = department;
        this.qualifications = qualifications;
        this.available = available;
        this.time_off = time_off;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getQualifications() {
        return qualifications;
    }

    public void setQualifications(String qualifications) {
        this.qualifications = qualifications;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public String getTime_off() {
        return time_off;
    }

    public void setTime_off(String time_off) {
        this.time_off = time_off;
    }

    public void setid_serial() throws InterruptedException, ExecutionException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        CollectionReference collection = dbFireStore.collection("Doctor");
        int serial = 1;
        try {
            Query query = collection.orderBy("serial", Query.Direction.DESCENDING).limit(1);
            ApiFuture<QuerySnapshot> querySnapshot = query.get();
            QuerySnapshot snapShot = querySnapshot.get();
            if (!snapShot.isEmpty()) {
                serial = snapShot.getDocuments().get(0).getLong("serial").intValue() + 1;
            }
        } catch (InterruptedException | ExecutionException e){
            e.printStackTrace();
        }
        this.id = "DOCTOR" + serial;
        this.serial = serial;
    }

}
