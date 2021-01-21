package com.example.a5g_app_project.Interface;

import com.google.gson.annotations.SerializedName;

import java.util.HashMap;

import lombok.Getter;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface PostInterface {
    @POST("/test/post")
    Call<HashMap<String, String>> setQuestion(@Body HashMap<String, String> user);
}
