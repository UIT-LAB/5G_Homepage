package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.SoftwareMainDTO;
import com.example.a5g_app_project.DTO.TreatiseMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface SoftwareMainInterface {
    @GET("/android/Software")
    Call<List<SoftwareMainDTO>> getQuestions();
}
