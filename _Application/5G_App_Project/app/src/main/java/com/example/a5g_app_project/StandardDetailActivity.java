package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class StandardDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.standard_detail);

        Button treatise_detail_back_btn = findViewById(R.id.standard_detail_exit_button);

        treatise_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView s_stid, s_business_year, s_division, s_document, s_standardization_organization, s_standardization_organization_name, s_standardization_steps_detail, s_standardization_meeting, s_proposal_organization, s_proponent, s_approval_num, s_technical_summary, s_application_field;
        s_stid = findViewById(R.id.standard_detail_number);
        s_division = findViewById(R.id.standard_detail_division_name);
        s_business_year = findViewById(R.id.standard_detail_date);
        s_document = findViewById(R.id.standard_detail_thesis_name);
        s_standardization_organization = findViewById(R.id.standard_detail_standardization_organization);
        s_standardization_organization_name = findViewById(R.id.standard_detail_standardization_organization_name);
        s_standardization_steps_detail = findViewById(R.id.standard_detail_standardization_steps_detail);
        s_standardization_meeting = findViewById(R.id.standard_detail_standardization_meeting);
        s_proposal_organization = findViewById(R.id.standard_detail_univ_name);
        s_proponent = findViewById(R.id.standard_detail_manager);
        s_approval_num = findViewById(R.id.standard_detail_department);
        s_technical_summary = findViewById(R.id.standard_detail_journal_name);
        s_application_field = findViewById(R.id.standard_detail_conference_name);

        Intent intent = getIntent();
        String s_data_stid = intent.getStringExtra("s_stid");
        String s_data_division = intent.getStringExtra("s_division");
        String s_data_business_year = intent.getStringExtra("s_business_year");
        String s_data_document = intent.getStringExtra("s_document");
        String s_data_standardization_organization = intent.getStringExtra("s_standardization_organization");
        String s_data_standardization_organization_name = intent.getStringExtra("s_standardization_organization_name");
        String s_data_standardization_steps_detail = intent.getStringExtra("s_standardization_steps_detail");
        String s_data_standardization_meeting = intent.getStringExtra("s_standardization_meeting");
        String s_data_proposal_organization = intent.getStringExtra("s_proposal_organization");
        String s_data_proponent = intent.getStringExtra("s_proponent");
        String s_data_approval_num = intent.getStringExtra("s_approval_num");
        String s_data_technical_summary = intent.getStringExtra("s_technical_summary");
        String s_data_application_field = intent.getStringExtra("s_application_field");


        s_stid.setText("제 "+s_data_stid+" 호");
        s_division.setText(s_data_division);
        s_business_year.setText(s_data_business_year);
        s_document.setText(s_data_document);
        s_standardization_organization.setText(s_data_standardization_organization);
        s_standardization_organization_name.setText(s_data_standardization_organization_name);
        s_standardization_steps_detail.setText(s_data_standardization_steps_detail);
        s_standardization_meeting.setText(s_data_standardization_meeting);
        s_proposal_organization.setText(s_data_proposal_organization);
        s_proponent.setText(s_data_proponent);
        s_approval_num.setText(s_data_approval_num);
        s_technical_summary.setText(s_data_technical_summary);
        s_application_field.setText(s_data_application_field);

    }
}

