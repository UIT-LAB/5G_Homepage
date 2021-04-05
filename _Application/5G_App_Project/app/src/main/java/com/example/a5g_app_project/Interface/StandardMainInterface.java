package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.SoftwareMainDTO;
import com.example.a5g_app_project.DTO.StandardMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface StandardMainInterface {
    @GET("/android/Standard")
    Call<List<StandardMainDTO>> getQuestions();
}
