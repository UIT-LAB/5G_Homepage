package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

public class TechnologyMainDTO {
    @SerializedName("tid")
    private String tid;

    @SerializedName("business_year")
    private String business_year;

    @SerializedName("tech_name")
    private String tech_name;

    @SerializedName("tech_year")
    private String tech_year;

    @SerializedName("tech_country")
    private String tech_country;

    @SerializedName("contract_amount")
    private String contract_amount;

    @SerializedName("collection_amount")
    private String collection_amount;

    @SerializedName("techcontract_date")
    private String techcontract_date;

    @SerializedName("governmentPaymentTech_amount")
    private String governmentPaymentTech_amount;

    @SerializedName("RAI_name")
    private String RAI_name;

    @SerializedName("RAI_type")
    private String RAI_type;

    @SerializedName("techFeePay_method")
    private String techFeePay_method;

    @SerializedName("TI_method")
    private String TI_method;

    @SerializedName("TI_detail")
    private String TI_detail;

    @SerializedName("TIinstitution_name")
    private String TIinstitution_name;

    @SerializedName("TI_num")
    private String TI_num;

    @SerializedName("TI_type")
    private String TI_type;

    @SerializedName("government_contribution")
    private String government_contribution;

    @SerializedName("privateResearch_fund")
    private String privateResearch_fund;

    @SerializedName("techTransfer_type")
    private String techTransfer_type;

    @SerializedName("techApplication_form")
    private String techApplication_form;

    @SerializedName("techTransfer_format")
    private String techTransfer_format;

    @SerializedName("intellectualPropertyRights")
    private String intellectualPropertyRights;

    public TechnologyMainDTO(String tid, String business_year, String tech_name, String tech_year, String tech_country, String contract_amount, String collection_amount, String techcontract_date, String governmentPaymentTech_amount, String RAI_name, String RAI_type, String techFeePay_method, String TI_method, String TI_detail, String TIinstitution_name, String TI_num, String TI_type, String government_contribution, String privateResearch_fund, String techTransfer_type, String techApplication_form, String techTransfer_format, String intellectualPropertyRights ) {

        this.tid = tid;
        this.business_year =business_year;
        this.tech_name = tech_name;
        this.tech_year = tech_year;
        this.tech_country = tech_country;
        this.contract_amount = contract_amount;
        this.collection_amount = collection_amount;
        this.techcontract_date = techcontract_date;
        this.governmentPaymentTech_amount = governmentPaymentTech_amount;
        this.RAI_name = RAI_name;
        this.RAI_type = RAI_type;
        this.techcontract_date = techcontract_date;
        this.governmentPaymentTech_amount = governmentPaymentTech_amount;
        this.RAI_name = RAI_name;
        this.RAI_type = RAI_type;
        this.techFeePay_method = techFeePay_method;
        this.TI_method = TI_method;
        this.TI_detail = TI_detail;
        this.TIinstitution_name = TIinstitution_name;
        this.TI_num = TI_num;
        this.TI_type = TI_type;
        this.government_contribution = government_contribution;
        this.privateResearch_fund = privateResearch_fund;
        this.techTransfer_type = techTransfer_type;
        this.techApplication_form = techApplication_form;
        this.techTransfer_format = techTransfer_format;
        this.intellectualPropertyRights = intellectualPropertyRights;
    }

    public String getTid() {return tid;}
    public String getBusiness_year() {return business_year;}
    public String getTech_name() {return tech_name;}
    public String getTech_year() {return tech_year;}
    public String getTech_country() {return tech_country;}
    public String getContract_amount() {return contract_amount;}
    public String getCollection_amount() {return collection_amount;}
    public String getTechcontract_date() {return techcontract_date;}
    public String getGovernmentPaymentTech_amount() {return governmentPaymentTech_amount;}
    public String getRAI_name() {return RAI_name;}
    public String getRAI_type() {return RAI_type;}
    public String getTechFeePay_method() {return techFeePay_method;}
    public String getTI_method() {return TI_method;}
    public String getTI_detail() {return TI_detail;}
    public String getTIinstitution_name() {return TIinstitution_name;}
    public String getTI_num() {return TI_num;}
    public String getTI_type() {return TI_type;}
    public String getGovernment_contribution() {return government_contribution;}
    public String getPrivateResearch_fund() {return privateResearch_fund;}
    public String getTechTransfer_type() {return techTransfer_type;}
    public String getTechApplication_form() {return techApplication_form;}
    public String getTechTransfer_format() {return techTransfer_format;}
    public String getIntellectualPropertyRights() {return intellectualPropertyRights;}

    @Override
    public String toString() {
        return "TechnologyMainDTO{" +
                "tid='" + tid + '\'' +
                ", business_year='" + business_year + '\'' +
                ", tech_name='" + tech_name + '\'' +
                ", tech_year='" + tech_year + '\'' +
                ", tech_country='" + tech_country + '\'' +
                ", contract_amount='" + contract_amount + '\'' +
                ", collection_amount='" + collection_amount + '\'' +
                ", techcontract_date='" + techcontract_date + '\'' +
                ", governmentPaymentTech_amount='" + governmentPaymentTech_amount + '\'' +
                ", RAI_name='" + RAI_name + '\'' +
                ", RAI_type='" + RAI_type + '\'' +
                ", techFeePay_method='" + techFeePay_method + '\'' +
                ", TI_method='" + TI_method + '\'' +
                ", TI_detail='" + TI_detail + '\'' +
                ", TIinstitution_name='" + TIinstitution_name + '\'' +
                ", TI_num='" + TI_num + '\'' +
                ", TI_type='" + TI_type + '\'' +
                ", government_contribution='" + government_contribution + '\'' +
                ", privateResearch_fund='" + privateResearch_fund + '\'' +
                ", techTransfer_type='" + techTransfer_type + '\'' +
                ", techApplication_form='" + techApplication_form + '\'' +
                ", techTransfer_format='" + techTransfer_format + '\'' +
                ", intellectualPropertyRights='" + intellectualPropertyRights + '\'' +
                '}';
    }
}
