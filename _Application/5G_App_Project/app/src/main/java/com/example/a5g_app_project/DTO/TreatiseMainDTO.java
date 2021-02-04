package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TreatiseMainDTO {
    @SerializedName("rfid")
    private String rfid;

    @SerializedName("research_name_ko")
    private String research_name_ko;

    @SerializedName("business_name_ko")
    private String business_name_ko;

    @SerializedName("department_name_ko")
    private String department_name_ko;

    @SerializedName("subjectivity_agency_ko")
    private String subjectivity_agency_ko;

    @SerializedName("support_agency_ko")
    private String support_agency_ko;

    @SerializedName("participation_agency_ko")
    private String participation_agency_ko;

    @SerializedName("research_goal_ko")
    private String research_goal_ko;

    @SerializedName("research_content_ko")
    private String research_content_ko;

    @SerializedName("expectation_result_ko")
    private String expectation_result_ko;

    @SerializedName("research_manager_ko")
    private String research_manager_ko;

    @SerializedName("research_belong_ko")
    private String research_belong_ko;

    @SerializedName("date_start")
    private String date_start;

    @SerializedName("date_end")
    private String date_end;



    public TreatiseMainDTO(String rfid, String research_name_ko, String business_name_ko, String department_name_ko, String subjectivity_agency_ko, String support_agency_ko, String participation_agency_ko, String  research_goal_ko, String research_content_ko, String expectation_result_ko, String research_manager_ko, String research_belong_ko, String date_start, String date_end) {
        this.rfid = rfid;
        this.research_name_ko = research_name_ko;
        this.business_name_ko = business_name_ko;
        this.department_name_ko = department_name_ko;
        this.subjectivity_agency_ko = subjectivity_agency_ko;
        this.support_agency_ko = support_agency_ko;
        this.participation_agency_ko = participation_agency_ko;
        this.research_goal_ko = research_goal_ko;
        this.research_content_ko = research_content_ko;
        this.expectation_result_ko = expectation_result_ko;
        this.research_manager_ko = research_manager_ko;
        this.research_belong_ko = research_belong_ko;
        this.date_start = date_start;
        this.date_end = date_end;
    }

    public String getRfid() {return rfid;}
    public String getResearch_name_ko() {
        return research_name_ko;
    }
    public String getBusiness_name_ko() {
        return business_name_ko;
    }
    public String getDepartment_name_ko() {
        return department_name_ko;
    }
    public String getSubjectivity_agency_ko() {
        return subjectivity_agency_ko;
    }
    public String getSupport_agency_ko() {
        return support_agency_ko;
    }
    public String getParticipation_agency_ko() {
        return participation_agency_ko;
    }
    public String getResearch_goal_ko() {
        return research_goal_ko;
    }
    public String getResearch_content_ko() {
        return research_content_ko;
    }
    public String getResearch_manager_ko() {
        return research_manager_ko;
    }
    public String getResearch_belong_ko() {
        return research_belong_ko;
    }
    public String getExpectation_result_ko() {
        return expectation_result_ko;
    }
    public String getDate_start() {
        return date_start;
    }
    public String getDate_end() {
        return date_end;
    }

    @Override
    public String toString() {
        return "TreatiseMainDTO{" +
                "rfid='" + rfid + '\'' +
                ", research_name_ko='" + research_name_ko + '\'' +
                ", business_name_ko='" + business_name_ko + '\'' +
                ", department_name_ko='" + department_name_ko + '\'' +
                ", subjectivity_agency_ko='" + subjectivity_agency_ko + '\'' +
                ", support_agency_ko='" + support_agency_ko + '\'' +
                ", participation_agency_ko='" + participation_agency_ko + '\'' +
                ", research_goal_ko='" + research_goal_ko + '\'' +
                ", research_content_ko='" + research_content_ko + '\'' +
                ", expectation_result_ko='" + expectation_result_ko + '\'' +
                ", research_manager_ko='" + research_manager_ko + '\'' +
                ", research_belong_ko='" + research_belong_ko + '\'' +
                ", date_start='" + date_start + '\'' +
                ", date_end='" + date_end + '\'' +
                '}';
    }
}