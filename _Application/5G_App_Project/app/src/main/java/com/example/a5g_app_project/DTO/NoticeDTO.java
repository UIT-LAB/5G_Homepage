package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;

@Getter
public class NoticeDTO {
    @SerializedName("nid")
    private int nid;

    @SerializedName("n_title")
    private int n_title;

    @SerializedName("n_content")
    private int n_content;

    @Override
    public String toString() {
        return "NoticeDTO{" +
                "nid=" + nid +
                ", n_title=" + n_title +
                ", n_content=" + n_content +
                '}';
    }
}
