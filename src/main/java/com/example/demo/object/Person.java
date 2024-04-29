package com.example.demo.object;

import org.springframework.stereotype.Component;

@Component
public class Person {
    private String password;
    private String username;

    private String name;
    private String birthday;
    private String location;
    private String email;
    private String phoneNumber;
    private String sex;
    private String cccd;

    public Person() {
        super();
    }

    public Person(String name, String birthday, String location) {
        this.name = name;
        this.birthday = birthday;
        this.location = location;
    }


    public Person(String name, String birthday, String location, String email, String phoneNumber, String sex, String cccd) {
        this.name = name;
        this.birthday = birthday;
        this.location = location;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.sex = sex;
        this.cccd = cccd;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getBirthday() {
        return birthday;
    }
    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex){
        this.sex = sex;
    }
    public String getCccd() {
        return cccd;
    }
    public void setCccd(String cccd) {
        this.cccd = cccd;
    }
}
