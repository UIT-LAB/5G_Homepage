package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PostMainDTO {
    @SerializedName("pid")
    private String pid;

    @SerializedName("p_title")
    private String p_title;

    @SerializedName("p_content")
    private String p_content;

    @SerializedName("p_writer")
    private String p_writer;

    @SerializedName("p_writer_date")
    private String p_writer_date;

    public PostMainDTO(String pid,String p_title, String p_content, String p_writer, String p_writer_date) {
        this.pid = pid;
        this.p_title = p_title;
        this.p_content = p_content;
        this.p_writer = p_writer;
        this.p_writer_date = p_writer_date;
    }

    public String getPid() {return pid;}
    public String getP_title() {return p_title;}
    public String getP_content() {return p_content;}
    public String getP_writer() {return p_writer;}
    public String getP_writer_date() {return p_writer_date;}

    @Override
    public String toString() {
        return "PostMainDTO{" +
                "pid='" + pid + '\'' +
                ", p_title='" + p_title + '\'' +
                ", p_content='" + p_content + '\'' +
                ", p_writer='" + p_writer + '\'' +
                ", p_writer_date='" + p_writer_date + '\'' +
                '}';
    }
}
