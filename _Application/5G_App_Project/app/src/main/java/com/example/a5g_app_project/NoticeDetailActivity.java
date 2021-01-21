package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class NoticeDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.notice_detail);

        Button notice_detail_back_btn = findViewById(R.id.notice_detail_exit_button);

        notice_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView n_number, n_writer, n_title, n_date, n_content;


        n_number = findViewById(R.id.notice_detail_number);
        n_writer = findViewById(R.id.notice_detail_writer);
        n_title = findViewById(R.id.notice_detail_title);
        n_date = findViewById(R.id.notice_detail_date);
        n_content = findViewById(R.id.notice_detail_content);

        Intent intent = getIntent();
        String n_data_title = intent.getStringExtra("n_title");
        String n_data_content = intent.getStringExtra("n_content");
        String n_data_number = intent.getStringExtra("n_number");
        String n_data_date = intent.getStringExtra("n_date");
        String n_data_writer = intent.getStringExtra("n_name");
        n_title.setText(n_data_title);
        n_content.setText(n_data_content);
        n_writer.setText("작성자 : "+n_data_writer);
        n_date.setText(n_data_date);
        n_number.setText("No. "+n_data_number);



    }
}
