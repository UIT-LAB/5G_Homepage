package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.QuestionMainDTO;
import com.example.a5g_app_project.DTO.TreatiseMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface TreatiseMainInterface {
    @GET("/test/Treatise")
    Call<List<TreatiseMainDTO>> getQuestions();
}
