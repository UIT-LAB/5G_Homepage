package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.LincenseMainDTO;
import com.example.a5g_app_project.DTO.NoticeMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface LicenseMainInterface {

    @GET("/test/License")
    Call<List<LincenseMainDTO>> getQuestions();

}
