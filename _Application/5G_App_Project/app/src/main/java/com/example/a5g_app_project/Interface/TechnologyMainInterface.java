package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.StandardMainDTO;
import com.example.a5g_app_project.DTO.TechnologyMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface TechnologyMainInterface {
    @GET("/android/Technology")
    Call<List<TechnologyMainDTO>> getQuestions();
}
