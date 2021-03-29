package com.example.a5g_app_project.DTO;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;

@Getter
public class UserDTO {
    @SerializedName("uid")
    private String uid;

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

    @SerializedName("token")
    private String token;


    public UserDTO(String uid, String u_id, String u_pw, String u_name, String u_email, String u_phone, String token){
        this.uid = uid;
        this.u_id = u_id;
        this.u_pw = u_pw;
        this.u_name = u_name;
        this.u_email = u_email;
        this.u_phone = u_phone;
        this.token = token;
    }

    public String getUid() {return uid;}
    public String getU_id() {return u_id;}
    public String getU_pw() {return u_pw;}
    public String getU_name() {return u_name;}
    public String getU_email() {return u_email;}
    public String getU_phone() {return u_phone;}
    public String getToken() {return token;}


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
