package com.example.a5g_app_project.Interface;

import com.example.a5g_app_project.DTO.StoreDTO;

import java.util.List;
import retrofit2.Call;
import retrofit2.http.GET;

public interface StoreService {
    @GET("/api/store")
    Call<List<StoreDTO>> getStoreListOrderByGrade();
}
