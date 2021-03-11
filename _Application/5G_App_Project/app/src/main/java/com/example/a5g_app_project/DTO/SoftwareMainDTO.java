package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

public class SoftwareMainDTO {
    @SerializedName("sid")
    private String sid;

    @SerializedName("business_year")
    private String buisness_year;

    @SerializedName("division")
    private String division;

    @SerializedName("registration")
    private String registration;

    @SerializedName("registration_num")
    private String registration_num;

    @SerializedName("registration_name")
    private String registration_name;

    @SerializedName("registrant")
    private String registrant;

    @SerializedName("registration_date")
    private String registration_date;

    @SerializedName("own_not")
    private String own_not;

    @SerializedName("feature")
    private String feature;

    public SoftwareMainDTO(String sid, String buisness_year, String division, String registration, String registration_num, String registration_name, String registrant, String registration_date, String own_not, String feature) {
        this.sid = sid;
        this.buisness_year =buisness_year;
        this.division = division;
        this.registration = registration;
        this.registration_num = registration_num;
        this.registration_name = registration_name;
        this.registrant = registrant;
        this.registration_date = registration_date;
        this.own_not = own_not;
        this.feature = feature;
    }

    public String getSid() {return sid;}
    public String getBuisness_year() {return buisness_year;}
    public String getDivision() {return division;}
    public String getRegistration() {return registration;}
    public String getRegistration_num() {return registration_num;}
    public String getRegistration_name() {return registration_name;}
    public String getRegistrant() {return registrant;}
    public String getRegistration_date() {return registration_date;}
    public String getOwn_not() {return own_not;}
    public String getFeature() {return feature;}

    @Override
    public String toString() {
        return "SoftwareMainDTO{" +
                "sid='" + sid + '\'' +
                ", buisness_year='" + buisness_year + '\'' +
                ", division='" + division + '\'' +
                ", registration='" + registration + '\'' +
                ", registration_num='" + registration_num + '\'' +
                ", registration_name='" + registration_name + '\'' +
                ", registrant='" + registrant + '\'' +
                ", registration_date='" + registration_date + '\'' +
                ", own_not='" + own_not + '\'' +
                ", feature='" + feature + '\'' +
                '}';
    }
}


