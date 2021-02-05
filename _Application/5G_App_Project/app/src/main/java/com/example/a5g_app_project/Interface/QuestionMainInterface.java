package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.PostMainDTO;
import com.example.a5g_app_project.DTO.QuestionMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface QuestionMainInterface {
    @GET("/test/Question")
    Call<List<QuestionMainDTO>> getQuestions();
}
