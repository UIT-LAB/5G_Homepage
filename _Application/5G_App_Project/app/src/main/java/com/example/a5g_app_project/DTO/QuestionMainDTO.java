package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionMainDTO {
    @SerializedName("qid")
    private String qid;

    @SerializedName("q_writer")
    private String q_writer;

    @SerializedName("q_title")
    private String q_title;

    @SerializedName("q_content")
    private String q_content;

    @SerializedName("q_writer_date")
    private String q_writer_date;

    @SerializedName("admin_comment")
    private String admin_comment;

    @SerializedName("admin_date")
    private String admin_date;

    public QuestionMainDTO(String qid, String q_writer, String q_title, String q_content, String q_writer_date, String admin_comment, String admin_date) {
        this.qid = qid;
        this.q_writer = q_writer;
        this.q_title = q_title;
        this.q_content = q_content;
        this.q_writer_date = q_writer_date;
        this.admin_comment = admin_comment;
        this.admin_date = admin_date;

    }



    public String getQid() {return qid;}
    public String getQ_writer() {return q_writer;}
    public String getQ_title() {return q_title;}
    public String getQ_content() {return q_content;}
    public String getQ_writer_date() {return q_writer_date;}
    public String getQ_admin_comment() {return admin_comment;}
    public String getQ_admin_date() {return admin_date;}


    @Override
    public String toString() {
        return "QuestionMainDTO{" +
                "qid='" + qid + '\'' +
                ", q_writer='" + q_writer + '\'' +
                ", q_title='" + q_title + '\'' +
                ", q_content='" + q_content + '\'' +
                ", q_writer_date='" + q_writer_date + '\'' +
                ", admin_comment='" + admin_comment + '\'' +
                ", admin_date='" + admin_date + '\'' +
                '}';
    }
}
