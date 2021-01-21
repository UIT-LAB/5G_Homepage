package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

public class PostDTO {
    @SerializedName("pid")
    private int pid;

    @SerializedName("p_title")
    private String p_title;

    @SerializedName("p_content")
    private String p_content;

    @Override
    public String toString() {
        return "PostDTO{" +
                "pid=" + pid +
                ", p_title='" + p_title + '\'' +
                ", p_content='" + p_content + '\'' +
                '}';
    }
}
