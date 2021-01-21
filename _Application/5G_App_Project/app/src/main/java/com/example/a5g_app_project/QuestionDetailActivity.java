package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class QuestionDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.question_detail);

        Button question_detail_back_btn = findViewById(R.id.question_detail_exit_button);

        question_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView q_number, q_writer, q_title, q_date, q_content, q_admin_comment, q_admin_date;


        q_number = findViewById(R.id.question_detail_number);
        q_admin_comment = findViewById(R.id.question_detail_manager_content);
        q_admin_date = findViewById(R.id.question_detail_manager_date);
        q_title = findViewById(R.id.question_detail_title);
        q_date = findViewById(R.id.question_detail_date);
        q_content = findViewById(R.id.question_detail_content);

        Intent intent = getIntent();
        String q_data_title = intent.getStringExtra("q_title");
        String q_data_content = intent.getStringExtra("q_content");
        String q_data_number = intent.getStringExtra("q_number");
        String q_data_date = intent.getStringExtra("q_date");
        String q_data_admin_comment = intent.getStringExtra("q_admin_comment");
        String q_data_admin_date = intent.getStringExtra("q_admin_date");

        q_title.setText(q_data_title);
        q_content.setText(q_data_content);
        q_date.setText(q_data_date);
        q_number.setText("No. "+q_data_number);
        q_admin_comment.setText(q_data_admin_comment);
        q_admin_date.setText(q_data_admin_date);



    }
}
