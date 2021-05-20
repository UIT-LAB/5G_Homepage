package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TreatiseMainDTO {
    @SerializedName("tid")
    private String tid;

    @SerializedName("business_year")
    private String business_year;

    @SerializedName("univ_name")
    private String univ_name;

    @SerializedName("department")
    private String department;

    @SerializedName("SCI_division")
    private String SCI_division;

    @SerializedName("thesis_division")
    private String thesis_division;

    @SerializedName("thesis_name")
    private String thesis_name;

    @SerializedName("lead_author_name")
    private String lead_author_name;

    @SerializedName("co_author_name")
    private String co_author_name;

    @SerializedName("journal_name")
    private String journal_name;

    @SerializedName("volume_num")
    private String volume_num;

    @SerializedName("journal_date")
    private String journal_date;

    @SerializedName("journal_impact_factor")
    private String journal_impact_factor;

    @SerializedName("contribution_rate")
    private String contribution_rate;

    @SerializedName("isbn")
    private String isbn;

    @SerializedName("doi")
    private String doi;

    @SerializedName("citation")
    private String citation;

    @SerializedName("ack")
    private String ack;

    @SerializedName("conference_name")
    private String conference_name;

    @SerializedName("conference_date")
    private String conference_date;

    @SerializedName("conference_country")
    private String conference_country;

    @SerializedName("abstracts")
    private String abstracts;



    public TreatiseMainDTO(String tid, String business_year, String univ_name, String department, String thesis_division, String thesis_name, String lead_author_name, String journal_date, String journal_name, String conference_name, String conference_date, String conference_country) {
        this.tid = tid;
        this.business_year =business_year;
        this.univ_name = univ_name;
        this.department = department;
        this.thesis_division = thesis_division;
        this.thesis_name = thesis_name;
        this.lead_author_name = lead_author_name;

        this.journal_date = journal_date;
        this.journal_name = journal_name;

        this.conference_name = conference_name;
        this.conference_date = conference_date;
        this.conference_country = conference_country;

    }


    public String getTid() {return tid;}
    public String getBuisness_year() {return business_year;}
    public String getUniv_name() {return univ_name;}
    public String getDepartment() {return department;}
    public String getThesis_division() {return thesis_division;}
    public String getThesis_name() {return thesis_name;}
    public String getLead_author_name() {return lead_author_name;}
    public String getJournal_name() {return journal_name;}
    public String getJournal_date() {return journal_date;}
    public String getConference_name() {return conference_name;}
    public String getConference_date() {return conference_date;}
    public String getConference_country() {return conference_country;}

    @Override
    public String toString() {
        return "TreatiseMainDTO{" +
                "tid='" + tid + '\'' +
                ", buisness_year='" + business_year + '\'' +
                ", univ_name='" + univ_name + '\'' +
                ", department='" + department + '\'' +
                ", SCI_division='" + SCI_division + '\'' +
                ", thesis_division='" + thesis_division + '\'' +
                ", thesis_name='" + thesis_name + '\'' +
                ", lead_author_name='" + lead_author_name + '\'' +
                ", co_author_name='" + co_author_name + '\'' +
                ", journal_name='" + journal_name + '\'' +
                ", volume_num='" + volume_num + '\'' +
                ", journal_date='" + journal_date + '\'' +
                ", journal_impact_factor='" + journal_impact_factor + '\'' +
                ", contribution_rate='" + contribution_rate + '\'' +
                ", isbn='" + isbn + '\'' +
                ", doi='" + doi + '\'' +
                ", citation='" + citation + '\'' +
                ", ack='" + ack + '\'' +
                ", conference_name='" + conference_name + '\'' +
                ", conference_date='" + conference_date + '\'' +
                ", conference_country='" + conference_country + '\'' +
                ", abstracts='" + abstracts + '\'' +
                '}';
    }
}