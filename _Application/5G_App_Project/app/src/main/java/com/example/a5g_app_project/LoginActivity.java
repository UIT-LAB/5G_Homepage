package com.example.a5g_app_project;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;
import com.auth0.android.jwt.JWT;
import com.example.a5g_app_project.DTO.UserDTO;
import com.example.a5g_app_project.Interface.LoginInterface;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.HashMap;
import java.util.List;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import android.content.SharedPreferences;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText mID, mPW;

    private List<UserDTO> uDatas;
    Gson gson = new GsonBuilder().setLenient().create();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);

        mID = findViewById(R.id.emailInput);
        mPW = findViewById(R.id.passwordInput);
        findViewById(R.id.login_Button).setOnClickListener(this);
    }

    @Override
    public void onClick(View v){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.187.1:9928/")
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build();

        LoginInterface service = retrofit.create(LoginInterface.class);



        switch (v.getId()){
            case R.id.login_Button:{
                HashMap<String, String> post = new HashMap<>();
                post.put(RetrofitID.id, mID.getText().toString());
                post.put(RetrofitID.password, mPW.getText().toString());

                service.setQuestion(post).enqueue(new Callback<UserDTO>(){
                    @Override
                    public void onResponse(Call<UserDTO> call, Response<UserDTO> response) {
                        if(response.isSuccessful()){
                            Log.e("token", response.body().getToken());
                            String androidtoken = response.body().getToken();
                            JWT j = new JWT(androidtoken);
                            Log.e("name", j.getClaim("name").asString());

                            SharedPreferences name = getSharedPreferences("test", MODE_PRIVATE);
                            SharedPreferences.Editor editor = name.edit();
                            editor.putString("user", j.getClaim("name").asString());
                            editor.commit();

                            SharedPreferences test = getSharedPreferences("test", MODE_PRIVATE);
                            String Data = test.getString("user", "");

                            Log.e("token2", Data);


                        }else{
                            Log.d("Post", "Fail!");
                        }
                    }

                    @Override
                    public void onFailure(Call<UserDTO> call, Throwable t) {
                        Log.d("Faild", t.getMessage());
                    }
                });
            }
        }
    }



}






