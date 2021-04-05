package com.example.a5g_app_project;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MemberActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.member);

        Button member_back_btn = findViewById(R.id.member_detail_exit_button);
        Button member_sign = findViewById(R.id.member_login_btn);

       member_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

       member_sign.setOnClickListener(new View.OnClickListener(){

           @Override
           public void onClick(View view) {
               Intent login_intent = new Intent(view.getContext(), LoginActivity.class);
               startActivity(login_intent);
               finish();
           }
       });

        SharedPreferences test = getSharedPreferences("test", MODE_PRIVATE);
        String user_name = test.getString("user", "");
        String user_id = test.getString("user_id", "");
        String user_email = test.getString("user_email", "");
        String user_phone = test.getString("user_phone", "");
        String user_date = test.getString("user_date", "");

        TextView m_id, m_name, m_email, m_phone, m_date;

        m_id = findViewById(R.id.member_id);
        m_name = findViewById(R.id.member_name);
        m_email = findViewById(R.id.member_email);
        m_phone = findViewById(R.id.member_phone);
        m_date = findViewById(R.id.member_date);


        m_id.setText("ID : "+ user_id);
        m_name.setText("이름 : "+user_name);
        m_email.setText("Email : "+user_email);
        m_phone.setText("Phone : "+user_phone);
        m_date.setText("가입 날짜 : "+user_date);



    }
}
