package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.QuestionMainDTO;
import com.example.a5g_app_project.DTO.UserDTO;

import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface UserInterface {
    @POST("/android/register")
    Call<HashMap<String, String>> setQuestion(@Body HashMap<String, String> user);
}
