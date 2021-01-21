package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionMainDTO {
    @SerializedName("qid")
    private String qid;

    @SerializedName("user_id")
    private String user_id;

    @SerializedName("title")
    private String title;

    @SerializedName("content")
    private String content;

    @SerializedName("write_date")
    private String writer_date;

    @SerializedName("admin_comment")
    private String admin_comment;

    @SerializedName("admin_date")
    private String admin_date;

    public QuestionMainDTO(String qid, String title, String content, String writer_date, String admin_comment, String admin_date) {
        this.qid = qid;
        this.title = title;
        this.content = content;
        this.writer_date = writer_date;
        this.admin_comment = admin_comment;
        this.admin_date = admin_date;

    }

    public String getQid() {return qid;}
    public String getQ_title() {return title;}
    public String getQ_content() {return content;}
    public String getQ_writer_date() {return writer_date;}
    public String getQ_admin_comment() {return admin_comment;}
    public String getQ_admin_date() {return admin_date;}


    @Override
    public String toString() {
        return "QuestionMainDTO{" +
                "qid='" + qid + '\'' +
                ", user_id='" + user_id + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", writer_date='" + writer_date + '\'' +
                ", admin_comment='" + admin_comment + '\'' +
                ", admin_date='" + admin_date + '\'' +
                '}';
    }
}
