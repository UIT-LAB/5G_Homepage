package com.example.a5g_app_project;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.example.a5g_app_project.DTO.NoticeMainDTO;
import com.example.a5g_app_project.DTO.QuestionMainDTO;
import com.example.a5g_app_project.DTO.UserDTO;
import com.example.a5g_app_project.Interface.CheckIDInterface;
import com.example.a5g_app_project.Interface.UserInterface;
import com.example.a5g_app_project.ItemClickListener.OnQuestionItemClickListener;
import com.example.a5g_app_project.adapters.NoticeAdapter;
import com.example.a5g_app_project.adapters.QuestionAdapter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class SignUpAcitivity extends AppCompatActivity implements View.OnClickListener{

    private EditText mName, mID, mPW, mCh_PW, mPhone, mEmail;
    private Button register, id_check;
    private CheckBox agreeCheckbox;
    private boolean validate = false;
    private AlertDialog dialog;


    private List<UserDTO> mDatas;
    private String data;


    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.register);

        mID = findViewById(R.id.id_sign_input);
        mPW = findViewById(R.id.pw_sign_input);
        mName = findViewById(R.id.name_input);
        mPhone = findViewById(R.id.phone_input);
        mEmail = findViewById(R.id.email_input);
        register = findViewById(R.id.register_button);
        id_check = findViewById(R.id.id_check_button);
        agreeCheckbox = findViewById(R.id.agreecheckbox);

        id_check.setOnClickListener(this);
        register.setOnClickListener(this);

    }

    @Override
    public void onClick(View v){
        switch (v.getId()){
            case R.id.register_button:{
                HashMap<String, String> userinfo = new HashMap<>();
                Retrofit retrofit = new Retrofit.Builder()
                        .baseUrl("http://192.168.187.1:9928/")
                        .addConverterFactory(GsonConverterFactory.create())
                        .build();

                UserInterface service = retrofit.create(UserInterface.class);

                if(mID.getText().toString().equals("")){
                    Toast.makeText(getApplicationContext(), "아이디가 빈칸 입니다.", Toast.LENGTH_SHORT).show();
                }
                else if(mPW.getText().toString().equals("")){
                    Toast.makeText(getApplicationContext(), "비밀번호가 빈칸 입니다.", Toast.LENGTH_SHORT).show();
                }
                else if(mName.getText().toString().equals("")){
                    Toast.makeText(getApplicationContext(), "이름이 빈칸 입니다.", Toast.LENGTH_SHORT).show();
                }
                else if(mPhone.getText().toString().equals("")){
                    Toast.makeText(getApplicationContext(), "전화 번호가 빈칸 입니다.", Toast.LENGTH_SHORT).show();
                }
                else if(mEmail.getText().toString().equals("")){
                    Toast.makeText(getApplicationContext(), "이메일이 빈칸 입니다.", Toast.LENGTH_SHORT).show();
                }
                else if(!agreeCheckbox.isChecked()){
                    Toast.makeText(getApplicationContext(), "이용약관 체크 이후 진행 해주세요.", Toast.LENGTH_SHORT).show();
                }
                else {
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
                break;
            }

            case R.id.id_check_button:{
                HashMap<String, String> userinfo = new HashMap<>();
                Retrofit retrofit = new Retrofit.Builder()
                        .baseUrl("http://192.168.187.1:3000/")
                        .addConverterFactory(GsonConverterFactory.create())
                        .build();

                CheckIDInterface service2 = retrofit.create(CheckIDInterface.class);

                userinfo.put(RetrofitID.id, mID.getText().toString());

                service2.setQuestion(userinfo).enqueue(new Callback<HashMap<String, String>>(){
                    @Override
                    public void onResponse(Call<HashMap<String, String>> call, Response<HashMap<String, String>> response) {
                        if(response.isSuccessful()){
                            //정상적으로 통신이 성공한 경우
                            HashMap<String, String> a = response.body();

                            if(mID.getText().toString().equals("")){
                                NullidDialog();
                            }else if(a.get("checkid").equals("success")){
                                CheckidsDialog();
                            }else  if(a.get("checkid").equals("fail")){
                                CheckidDialog();
                            }


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
            break;
        }
    }


    void CheckidDialog() {
        android.app.AlertDialog.Builder networkstatusBuilder = new android.app.AlertDialog.Builder(SignUpAcitivity.this, R.style.MyDialogTheme)
                .setTitle("아이디 중복")
                .setMessage("\n존재하는 아이디 입니다.\n다른 아이디 입력 해주세요.")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                });

        android.app.AlertDialog msDlg = networkstatusBuilder.create();
        msDlg.show();
    }
    void CheckidsDialog() {
        android.app.AlertDialog.Builder networkstatusBuilder = new android.app.AlertDialog.Builder(SignUpAcitivity.this, R.style.MyDialogTheme)
                .setTitle("아이디 사용 가능")
                .setMessage("\n사용 가능한 아이디 입니다.")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                });

        android.app.AlertDialog msDlg = networkstatusBuilder.create();
        msDlg.show();
    }

    void NullidDialog() {
        android.app.AlertDialog.Builder networkstatusBuilder = new android.app.AlertDialog.Builder(SignUpAcitivity.this, R.style.MyDialogTheme)
                .setTitle("아이디가 빈칸 입니다.")
                .setMessage("\n아이디를 입력해 주시기 바랍니다.")
                .setPositiveButton("예", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                });

        android.app.AlertDialog msDlg = networkstatusBuilder.create();
        msDlg.show();
    }
}
