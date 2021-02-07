package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;

@Getter
public class UserDTO {
    @SerializedName("uid")
    private int uid;

    @SerializedName("id")
    private String u_id;

    @SerializedName("pw")
    private String u_pw;

    @SerializedName("name")
    private String u_name;

    @SerializedName("email")
    private String u_email;

    @SerializedName("phone")
    private String u_phone;


    public UserDTO(String u_id){
        this.u_id = u_id;
    }

    public String getU_id() {return u_id;}

    @Override
    public String toString() {
        return "UserDTO{" +
                "uid=" + uid +
                ", u_id='" + u_id + '\'' +
                ", u_pw='" + u_pw + '\'' +
                ", u_name='" + u_name + '\'' +
                ", u_email='" + u_email + '\'' +
                ", u_phone='" + u_phone + '\'' +
                '}';
    }
}
