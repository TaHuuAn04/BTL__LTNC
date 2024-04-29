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
public class Nurse extends Person {
    
    private int serial;
    private String id;
    private String qualifications;
    private String expertise;
    private String title;
    private int floor;
    private int room;
    private String time_off;

    public Nurse() {
        super();
    }

    public Nurse(String name, String birthday, String location, String email, String phoneNumber, String sex, String cccd, int serial, String id, String qualifications, String expertise, String title, int floor, int room,String time_off) {
        super(name, birthday, location, email, phoneNumber, sex, cccd);
        this.serial = serial;
        this.id = id;
        this.qualifications = qualifications;
        this.expertise = expertise;
        this.title = title;
        this.floor = floor;
        this.room = room;
        this.time_off = time_off;
    }

    public String getExpertise() {
        return expertise;
    }

    public void setExpertise(String department) {
        this.expertise = department;
    }

    public String getQualifications() {
        return qualifications;
    }

    public void setQualifications(String qualifications) {
        this.qualifications = qualifications;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int isFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public int isRoom() {
        return room;
    }

    public void setRoom(int room) {
        this.room = room;
    }

    public String getTime_off() {
        return time_off;
    }

    public void setTime_off(String time_off) {
        this.time_off = time_off;
    }

    public void setid_serial() throws InterruptedException, ExecutionException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        CollectionReference collection = dbFireStore.collection("Nurse");
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
        this.id = "NURSE" + serial;
        this.serial = serial;
    }
}
