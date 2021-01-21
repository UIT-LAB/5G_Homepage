package com.example.a5g_app_project;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

import com.example.a5g_app_project.Interface.RetrofitInterface;
import com.example.a5g_app_project.Interface.UserInterface;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.HashMap;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class SignUpAcitivity extends AppCompatActivity implements View.OnClickListener{

    private FirebaseAuth mAuth = FirebaseAuth.getInstance();
    private FirebaseFirestore mStore = FirebaseFirestore.getInstance();
    private EditText mName, mID, mPW, mCh_PW, mPhone, mEmail;
    private Button register, id_check;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.register);

        mID = findViewById(R.id.id_sign_input);
        mPW = findViewById(R.id.pw_sign_input);
        mCh_PW = findViewById(R.id.pw_ch_sign_input);
        mName = findViewById(R.id.name_input);
        mPhone = findViewById(R.id.phone_input);
        mEmail = findViewById(R.id.email_input);
        register = findViewById(R.id.register_button);
        id_check = findViewById(R.id.id_check_button);

        register.setOnClickListener(this);
        id_check.setOnClickListener(this);
    }

    @Override
    public void onClick(View v){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.20:3000/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        UserInterface service = retrofit.create(UserInterface.class);

        switch (v.getId()){
            case R.id.register_button:{
                HashMap<String, String> userinfo = new HashMap<>();
                userinfo.put(RetrofitID.id, mID.getText().toString());
                userinfo.put(RetrofitID.password, mPW.getText().toString());
                userinfo.put(RetrofitID.name, mName.getText().toString());
                userinfo.put(RetrofitID.phone, mPhone.getText().toString());
                userinfo.put(RetrofitID.email, mEmail.getText().toString());

                service.setQuestion(userinfo).enqueue(new Callback<HashMap<String, String>>(){
                    @Override
                    public void onResponse(Call<HashMap<String, String>> call, Response<HashMap<String, String>> response) {
                        if(response.isSuccessful()){
                            //정상적으로 통신이 성공한 경우
                            HashMap<String, String> a = response.body();
                            Log.d("userinfo", a.get("result"));
                            finish();
                        }else{
                            Log.d("userinfo", "Fail!");
                        }
                    }

                    @Override
                    public void onFailure(Call<HashMap<String, String>> call, Throwable t) {
                        Log.d("Faild", t.getMessage());
                    }
                });
            }
            case R.id.id_check_button:{

            }
        }
    }
}
