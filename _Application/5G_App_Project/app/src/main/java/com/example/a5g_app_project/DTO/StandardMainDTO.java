package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

public class StandardMainDTO {
    @SerializedName("stid")
    private String stid;

    @SerializedName("business_year")
    private String business_year;

    @SerializedName("domestic_division")
    private String domestic_division;

    @SerializedName("division")
    private String division;

    @SerializedName("kind")
    private String kind;

    @SerializedName("document")
    private String document;

    @SerializedName("standardization_organization")
    private String standardization_organization;

    @SerializedName("standardization_organization_name")
    private String standardization_organization_name;

    @SerializedName("standardization_steps_detail")
    private String standardization_steps_detail;

    @SerializedName("standardization_meeting")
    private String standardization_meeting;

    @SerializedName("step")
    private String step;

    @SerializedName("category_revision")
    private String category_revision;

    @SerializedName("self_directed_not")
    private String self_directed_not;

    @SerializedName("proposal_organization")
    private String proposal_organization;

    @SerializedName("proponent")
    private String proponent;

    @SerializedName("approval_num")
    private String approval_num;

    @SerializedName("approval_date")
    private String approval_date;

    @SerializedName("technical_summary")
    private String technical_summary;

    @SerializedName("application_field")
    private String application_field;

    @SerializedName("contribution_rate")
    private String contribution_rate;

    public StandardMainDTO(String stid, String business_year, String domestic_division, String division, String kind, String document, String standardization_organization, String standardization_organization_name, String standardization_steps_detail, String standardization_meeting, String step, String category_revision, String self_directed_not, String proposal_organization, String proponent, String approval_num, String approval_date, String technical_summary, String application_field, String contribution_rate) {
        this.stid = stid;
        this.business_year =business_year;
        this.domestic_division = domestic_division;
        this.division = division;
        this.kind = kind;
        this.document = document;
        this.standardization_organization = standardization_organization;
        this.standardization_organization_name = standardization_organization_name;
        this.standardization_steps_detail = standardization_steps_detail;
        this.standardization_meeting = standardization_meeting;
        this.step = step;
        this.category_revision = category_revision;
        this.self_directed_not = self_directed_not;
        this.proposal_organization = proposal_organization;
        this.proponent = proponent;
        this.approval_num = approval_num;
        this.approval_date = approval_date;
        this.technical_summary = technical_summary;
        this.application_field = application_field;
        this.contribution_rate = contribution_rate;
    }

    public String getStid() {return stid;}
    public String getBusiness_year() {return business_year;}
    public String getDomestic_division() {return domestic_division;}
    public String getDivision() {return division;}
    public String getKind() {return kind;}
    public String getDocument() {return document;}
    public String getStandardization_organization() {return standardization_organization;}
    public String getStandardization_organization_name() {return standardization_organization_name;}
    public String getStandardization_steps_detail() {return standardization_steps_detail;}
    public String getStandardization_meeting() {return standardization_meeting;}
    public String getStep() {return step;}
    public String getCategory_revision() {return category_revision;}
    public String getSelf_directed_not() {return self_directed_not;}
    public String getProposal_organization() {return proposal_organization;}
    public String getProponent() {return proponent;}
    public String getApproval_num() {return approval_num;}
    public String getApproval_date() {return approval_date;}
    public String getTechnical_summary() {return technical_summary;}
    public String getApplication_field() {return application_field;}
    public String getContribution_rate() {return contribution_rate;}

    @Override
    public String toString() {
        return "StandardMainDTO{" +
                "stid='" + stid + '\'' +
                ", business_year='" + business_year + '\'' +
                ", domestic_division='" + domestic_division + '\'' +
                ", division='" + division + '\'' +
                ", kind='" + kind + '\'' +
                ", document='" + document + '\'' +
                ", standardization_organization='" + standardization_organization + '\'' +
                ", standardization_organization_name='" + standardization_organization_name + '\'' +
                ", standardization_steps_detail='" + standardization_steps_detail + '\'' +
                ", standardization_meeting='" + standardization_meeting + '\'' +
                ", step='" + step + '\'' +
                ", category_revision='" + category_revision + '\'' +
                ", self_directed_not='" + self_directed_not + '\'' +
                ", proposal_organization='" + proposal_organization + '\'' +
                ", proponent='" + proponent + '\'' +
                ", approval_num='" + approval_num + '\'' +
                ", approval_date='" + approval_date + '\'' +
                ", technical_summary='" + technical_summary + '\'' +
                ", application_field='" + application_field + '\'' +
                ", contribution_rate='" + contribution_rate + '\'' +
                '}';
    }
}
