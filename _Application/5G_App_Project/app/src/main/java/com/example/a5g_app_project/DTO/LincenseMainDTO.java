package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LincenseMainDTO {
    @SerializedName("lid")
    private String lid;

    @SerializedName("country_application")
    private String country_application;

    @SerializedName("application_category")
    private String application_category;

    @SerializedName("invention_name")
    private String invention_name;

    @SerializedName("application_registration_period")
    private String application_registration_period;

    @SerializedName("application_date")
    private String application_date;

    @SerializedName("inventor")
    private String inventor;

    @SerializedName("owning_institution")
    private String owning_institution;

    @SerializedName("application_form")
    private String application_form;



    public LincenseMainDTO(String lid, String application_category,  String application_date, String application_form, String owning_institution, String country_application, String invention_name, String  inventor, String application_registration_period) {
        this.lid = lid;
        this.application_category = application_category;
        this.invention_name = invention_name;
        this.application_date = application_date;
        this.inventor = inventor;
        this.owning_institution = owning_institution;
        this.country_application = country_application;
        this.application_form = application_form;
        this.application_registration_period = application_registration_period;

    }



    public String getLid() {return lid;}
    public String getApplication_category() {return application_category;}
    public String getCountry_application() {return country_application;}
    public String getInvention_name() {return invention_name;}
    public String getApplication_date() {return application_date;}
    public String getApplication_registration_period() {return application_registration_period;}
    public String getInventor() {return inventor;}
    public String getOwning_institution() {return owning_institution;}
    public String getApplication_form() {return application_form;}


}
