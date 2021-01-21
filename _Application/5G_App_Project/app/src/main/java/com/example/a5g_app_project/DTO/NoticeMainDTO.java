package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoticeMainDTO {
    @SerializedName("nid")
    private String nid;

    @SerializedName("n_title")
    private String n_title;

    @SerializedName("n_content")
    private String n_content;

    @SerializedName("n_writer")
    private String n_writer;

    @SerializedName("n_writer_date")
    private String n_writer_date;

    public NoticeMainDTO(String nid, String n_title, String n_content, String n_writer, String n_writer_date) {
        this.nid = nid;
        this.n_title = n_title;
        this.n_content = n_content;
        this.n_writer = n_writer;
        this.n_writer_date = n_writer_date;
    }

    public String getNid() {return nid;}
    public String getN_title() {return n_title;}
    public String getN_content() {return n_content;}
    public String getN_writer() {return n_writer;}
    public String getN_writer_date() {return n_writer_date;}

    @Override
    public String toString() {
        return "NoticeMainDTO{" +
                "nid=" + nid +
                ", n_title='" + n_title + '\'' +
                ", n_content='" + n_content + '\'' +
                ", n_writer='" + n_writer + '\'' +
                ", n_writer_date='" + n_writer_date + '\'' +
                '}';
    }
}
