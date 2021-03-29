package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.LincenseMainDTO;
import com.example.a5g_app_project.DTO.UserDTO;

import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface LoginInterface {
    @POST("/Login/")
    Call<HashMap<String, String>> setQuestion(@Body HashMap<String, String> user);

    @GET("/Login/")
    Call<List<UserDTO>> getQuestions();
}
