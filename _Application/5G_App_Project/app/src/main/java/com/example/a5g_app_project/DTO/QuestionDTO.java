package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;

public class QuestionDTO {
    @SerializedName("qid")
    private int qid;

    @SerializedName("title")
    private String title;

    @SerializedName("content")
    private String content;

    @Override
    public String toString() {
        return "QuestionDTO{" +
                "qid=" + qid +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
