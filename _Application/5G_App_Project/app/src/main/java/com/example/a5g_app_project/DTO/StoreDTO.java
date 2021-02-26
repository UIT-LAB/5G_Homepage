package com.example.a5g_app_project.DTO;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import lombok.Getter;
import lombok.Setter;

public class StoreDTO {
    @SerializedName("uid")
    @Expose
    private Integer uid;

    @SerializedName("u_id")
    @Expose
    private String u_id;

    @SerializedName("u_pw")
    @Expose
    private String u_pw;

    @SerializedName("u_name")
    @Expose
    private String u_name;
}
