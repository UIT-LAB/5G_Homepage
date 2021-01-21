package com.example.a5g_app_project;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

import com.example.a5g_app_project.Interface.NoticeInterface;
import com.example.a5g_app_project.Interface.RetrofitInterface;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class NoticeActivity extends AppCompatActivity implements View.OnClickListener{
    private FirebaseAuth mAuth = FirebaseAuth.getInstance();
    private FirebaseFirestore mStore = FirebaseFirestore.getInstance();
    private EditText mTitle, mContents;

    private String name;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.notice_write);

        mTitle = findViewById(R.id.notice_title_edit);
        mContents = findViewById(R.id.notice_contents_edit);

        findViewById(R.id.notice_save_button).setOnClickListener(this);
        Button notice_write_back_btn = findViewById(R.id.notice_exit_button);

        notice_write_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

    }
    @Override
    public void onClick(View v){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.20:3001/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

       NoticeInterface service = retrofit.create(NoticeInterface.class);

        switch (v.getId()){
            case R.id.notice_save_button:{
                HashMap<String, String> notice = new HashMap<>();
                notice.put(RetrofitID.notice_title, mTitle.getText().toString());
                notice.put(RetrofitID.notice_contents, mContents.getText().toString());

                service.setQuestion(notice).enqueue(new Callback<HashMap<String, String>>(){
                    @Override
                    public void onResponse(Call<HashMap<String, String>> call, Response<HashMap<String, String>> response) {
                        if(response.isSuccessful()){
                            //정상적으로 통신이 성공한 경우
                            HashMap<String, String> a = response.body();
                            Log.d("Notice", a.get("result"));
                            Log.d("Notice", "Success");
                            finish();
                        }else{
                            Log.d("Notice", "Fail!");
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
