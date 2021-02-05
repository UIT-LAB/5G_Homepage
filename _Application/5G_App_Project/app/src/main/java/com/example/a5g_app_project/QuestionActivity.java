package com.example.a5g_app_project;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.example.a5g_app_project.Interface.QuestionInterface;
import com.example.a5g_app_project.Interface.QuestionInterface;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FieldValue;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.SetOptions;

import java.util.HashMap;
import java.util.Map;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class QuestionActivity extends AppCompatActivity implements View.OnClickListener{
    private FirebaseAuth mAuth = FirebaseAuth.getInstance();
    private FirebaseFirestore mStore = FirebaseFirestore.getInstance();
    private EditText mTitle, mContents;

    private String name;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.question_write);

        mTitle = findViewById(R.id.question_title_edit);
        mContents = findViewById(R.id.question_contents_edit);

        findViewById(R.id.question_save_button).setOnClickListener(this);
        Button question_write_back_btn = findViewById(R.id.question_exit_button);

        question_write_back_btn.setOnClickListener(new View.OnClickListener(){
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

        QuestionInterface service = retrofit.create(QuestionInterface.class);

        switch (v.getId()){
            case R.id.question_save_button:{
                HashMap<String, String> question = new HashMap<>();
                question.put(RetrofitID.question_title, mTitle.getText().toString());
                question.put(RetrofitID.question_content, mContents.getText().toString());

                service.setQuestion(question).enqueue(new Callback<HashMap<String, String>>(){
                    @Override
                    public void onResponse(Call<HashMap<String, String>> call, Response<HashMap<String, String>> response) {
                        if(response.isSuccessful()){
                            //정상적으로 통신이 성공한 경우
                            HashMap<String, String> a = response.body();
                            Log.d("Question", a.get("result"));
                            Log.d("Question", "Success!!");
                            finish();
                        }else{
                            Log.d("Question", "Fail!");
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
