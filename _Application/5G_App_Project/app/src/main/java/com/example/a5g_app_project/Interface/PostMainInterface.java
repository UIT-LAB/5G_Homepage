package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.NoticeMainDTO;
import com.example.a5g_app_project.DTO.PostMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface PostMainInterface {
    @GET("/test/Post")
    Call<List<PostMainDTO>> getQuestions();
}
