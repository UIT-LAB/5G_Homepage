package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SoftwareDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.software_detail);

        Button treatise_detail_back_btn = findViewById(R.id.software_detail_exit_button);

        treatise_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView s_sid, s_business_year, s_division, s_registration, s_registration_num, s_registration_name, s_registrant, s_registration_date, s_own_not, s_feature;

        s_sid = findViewById(R.id.software_detail_number);
        s_division = findViewById(R.id.software_detail_division_name);
        s_business_year = findViewById(R.id.software_detail_date);
        s_registration = findViewById(R.id.software_detail_univ_name);
        s_registration_num = findViewById(R.id.software_detail_department);
        s_registration_name = findViewById(R.id.software_detail_thesis_name);
        s_registrant = findViewById(R.id.software_detail_manager);
        s_registration_date = findViewById(R.id.software_detail_conference_name);
        s_own_not = findViewById(R.id.software_detail_journal_date);
        s_feature = findViewById(R.id.software_detail_journal_name);

        Intent intent = getIntent();
        String s_data_sid = intent.getStringExtra("s_sid");
        String s_data_division = intent.getStringExtra("s_division");
        String s_data_business_year = intent.getStringExtra("s_business_year");
        String s_data_registration = intent.getStringExtra("s_registration");
        String s_data_registration_num = intent.getStringExtra("s_registration_num");
        String s_data_registration_name = intent.getStringExtra("s_registration_name");
        String s_data_registrant = intent.getStringExtra("s_registrant");
        String s_data_registration_date = intent.getStringExtra("s_registration_date");
        String s_data_own_not = intent.getStringExtra("s_own_not");
        String s_data_feature = intent.getStringExtra("s_feature");

        s_sid.setText("제 "+s_data_sid+" 호");
        s_division.setText(s_data_division);
        s_business_year.setText(s_data_business_year);
        s_registration.setText(s_data_registration);
        s_registration_num.setText(s_data_registration_num);
        s_registration_name.setText(s_data_registration_name);
        s_registrant.setText(s_data_registrant);
        s_registration_date.setText(s_data_registration_date);
        s_own_not.setText((s_data_own_not));
        s_feature.setText(s_data_feature);



    }
}
