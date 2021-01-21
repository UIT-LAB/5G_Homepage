package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class PostDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.post_detail);

        Button post_detail_back_btn = findViewById(R.id.post_detail_exit_button);

        post_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView p_number, p_writer, p_title, p_date, p_content;


        p_number = findViewById(R.id.post_detail_number);
        p_writer = findViewById(R.id.post_detail_writer);
        p_title = findViewById(R.id.post_detail_title);
        p_date = findViewById(R.id.post_detail_date);
        p_content = findViewById(R.id.post_detail_content);

        Intent intent = getIntent();
        String p_data_title = intent.getStringExtra("p_title");
        String p_data_content = intent.getStringExtra("p_content");
        String p_data_number = intent.getStringExtra("p_number");
        String p_data_date = intent.getStringExtra("p_date");
        String p_data_writer = intent.getStringExtra("p_name");
        p_title.setText(p_data_title);
        p_content.setText(p_data_content);
        p_writer.setText("작성자 : "+p_data_writer);
        p_date.setText(p_data_date);
        p_number.setText("No. "+p_data_number);



    }
}
