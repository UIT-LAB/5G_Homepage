package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;
import android.text.TextUtils;

import com.example.a5g_app_project.DTO.StoreDTO;
import com.example.a5g_app_project.Interface.LoginInterface;
import com.example.a5g_app_project.Interface.PostInterface;
import com.example.a5g_app_project.Interface.StoreService;

import java.util.HashMap;
import java.util.List;

import okhttp3.OkHttpClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText mID, mPW;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);

        mID = findViewById(R.id.emailInput);
        mPW = findViewById(R.id.passwordInput);
    }

    @Override
    public void onClick(View v){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.187.1:3000/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        LoginInterface service = retrofit.create(LoginInterface.class);

        switch (v.getId()){
            case R.id.login_Button:{
                HashMap<String, String> post = new HashMap<>();
                post.put(RetrofitID.id, mID.getText().toString());
                post.put(RetrofitID.password, mPW.getText().toString());

                service.setQuestion(post).enqueue(new Callback<HashMap<String, String>>(){
                    @Override
                    public void onResponse(Call<HashMap<String, String>> call, Response<HashMap<String, String>> response) {
                        if(response.isSuccessful()){
                            //정상적으로 통신이 성공한 경우
                            HashMap<String, String> a = response.body();
                            Log.d("Post", a.get("result"));
                            Log.d("Post", "Success");
                            finish();
                        }else{
                            Log.d("Post", "Fail!");
                        }
                    }

                    @Override
                    public void onFailure(Call<HashMap<String, String>> call, Throwable t) {
                        Log.d("Faild", t.getMessage());
                    }
                });
            }
        }
    }



}






