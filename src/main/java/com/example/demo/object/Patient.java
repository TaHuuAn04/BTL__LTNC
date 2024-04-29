package com.example.demo.object;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Patient extends Person {
    private int serial;
    private String id;
    private String bloodType;
    private List<RecordsPatient> records;
    private PlanTreatment plane;
    private String date;
    private String roomCode;

    public void setid_serial() throws InterruptedException, ExecutionException {
        Firestore dbFireStore = FirestoreClient.getFirestore();
        CollectionReference collection = dbFireStore.collection("Patient");
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
        this.id = "BNNT" + serial;
        this.serial = serial;
    }

    public void addRecord(RecordsPatient record){
        this.records.add(record);
    }
}
