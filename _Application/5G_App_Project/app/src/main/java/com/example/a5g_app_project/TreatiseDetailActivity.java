package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class TreatiseDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.treatise_detail);

        Button treatise_detail_back_btn = findViewById(R.id.treatise_detail_exit_button);

        treatise_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView t_number, t_title, t_dname, t_sbagency, t_spagency, t_rgoal, t_rcontent, t_exresult, t_rmanager, t_rbelong, t_dend;


        t_number = findViewById(R.id.treatise_detail_number);
        t_title = findViewById(R.id.treatise_detail_title);
        t_dname = findViewById(R.id.treatise_detail_department);
        t_sbagency = findViewById(R.id.treatise_detail_Subjectivity_agency);
        t_spagency = findViewById(R.id.treatise_detail_Support_agency);
        t_rgoal = findViewById(R.id.treatise_detail_Research_goal);
        t_rcontent = findViewById(R.id.treatise_detail_Research_content);
        t_exresult = findViewById(R.id.treatise_detail_Expectation_result);
        t_rmanager = findViewById(R.id.treatise_detail_manager);
        t_rbelong = findViewById(R.id.treatise_detail_belong);
        t_dend = findViewById(R.id.treatise_detail_enddate);

        Intent intent = getIntent();
        String t_data_number = intent.getStringExtra("t_number");
        String t_data_title = intent.getStringExtra("t_title");
        String t_data_dname = intent.getStringExtra("t_dname");
        String t_data_sbagency = intent.getStringExtra("t_sbagency");
        String t_data_spagency = intent.getStringExtra("t_spagency");
        String t_data_rgoal = intent.getStringExtra("t_rgoal");
        String t_data_rcontent = intent.getStringExtra("t_rcontent");
        String t_data_exresult = intent.getStringExtra("t_exresult");
        String t_data_rmanager = intent.getStringExtra("t_rmanager");
        String t_data_rbelong = intent.getStringExtra("t_rbelong");
        String t_data_tdend = intent.getStringExtra("t_dend");


        t_number.setText("제 "+t_data_number+" 호");
        t_title.setText(t_data_title);
        t_dname.setText(t_data_dname);
        t_sbagency.setText(t_data_sbagency);
        t_spagency.setText(t_data_spagency);
        t_rgoal.setText(t_data_rgoal);
        t_rcontent.setText(t_data_rcontent);
        t_exresult.setText(t_data_exresult);
        t_rmanager.setText(t_data_rmanager);
        t_rbelong.setText(t_data_rbelong);
        t_dend.setText(t_data_tdend);


    }
}