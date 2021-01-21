package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.NoticeMainDTO;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface NoticeMainInterface {
    @GET("/test/Notice")
    Call<List<NoticeMainDTO>> getQuestions();
}
