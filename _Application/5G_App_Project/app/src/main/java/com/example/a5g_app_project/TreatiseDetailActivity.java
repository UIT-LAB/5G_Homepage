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

        TextView t_tid, t_business_year, t_univ_name, t_department, t_thesis_division, t_thesis_name, t_lead_author_name, t_journal_name, t_journal_date, t_conference_name, t_conference_date, t_conference_country;

        t_tid = findViewById(R.id.treatise_detail_number);
        t_business_year = findViewById(R.id.treatise_detail_date);
        t_univ_name = findViewById(R.id.treatise_detail_univ_name);
        t_department = findViewById(R.id.treatise_detail_department);
        t_thesis_division = findViewById(R.id.treatise_detail_division_name);
        t_thesis_name = findViewById(R.id.treatise_detail_thesis_name);
        t_journal_name = findViewById(R.id.treatise_detail_journal_name);
        t_conference_name = findViewById(R.id.treatise_detail_conference_name);
        t_journal_date = findViewById(R.id.treatise_detail_journal_date);
        t_conference_date = findViewById(R.id.treatise_detail_conference_date);
        t_conference_country = findViewById(R.id.treatise_detail_conference_country);
        t_lead_author_name = findViewById(R.id.treatise_detail_manager);


        Intent intent = getIntent();
        String t_data_tid = intent.getStringExtra("t_tid");
        String t_data_business_year = intent.getStringExtra("t_business_year");
        String t_data_univ_name = intent.getStringExtra("t_univ_name");
        String t_data_department = intent.getStringExtra("t_department");
        String t_data_thesis_division = intent.getStringExtra("t_thesis_division");
        String t_data_thesis_name = intent.getStringExtra("t_thesis_name");
        String t_data_journal_name = intent.getStringExtra("t_journal_name");
        String t_data_conference_name = intent.getStringExtra("t_conference_name");
        String t_data_journal_date = intent.getStringExtra("t_journal_date");
        String t_data_conference_date = intent.getStringExtra("t_conference_date");
        String t_data_conference_country = intent.getStringExtra("t_conference_country");
        String t_data_lead_author_name = intent.getStringExtra("t_lead_author_name");

        t_tid.setText("제 "+t_data_tid+" 호");
        t_business_year.setText(t_data_business_year);
        t_univ_name.setText(t_data_univ_name);
        t_department.setText(t_data_department);
        t_thesis_division.setText(t_data_thesis_division);
        t_thesis_name.setText(t_data_thesis_name);
        t_journal_name.setText(t_data_journal_date);
        t_conference_name.setText(t_data_conference_country);
        t_journal_date.setText((t_data_journal_name));
        t_conference_date.setText(t_data_conference_date);
        t_conference_country.setText(t_data_conference_name);
        t_lead_author_name.setText(t_data_lead_author_name);


    }
}