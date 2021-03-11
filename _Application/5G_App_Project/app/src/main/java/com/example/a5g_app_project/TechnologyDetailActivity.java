package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class TechnologyDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.technology_detail);

        Button technology_detail_back_btn = findViewById(R.id.technology_detail_exit_button);

        technology_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView t_tid, t_business_year, t_tech_name, t_tech_year, t_tech_country, t_contract_amount, t_collection_amount, t_techcontract_date, t_governmentPaymentTech_amount, t_RAI_name, t_RAI_type, t_techFeePay_method, t_TI_method, t_TI_detail, t_TIinstitution_name, t_TI_num, t_TI_type, t_government_contribution, t_privateResearch_fund, t_techTransfer_type, t_techApplication_form, t_techTransfer_format, t_intellectualPropertyRights;

        t_tid = findViewById(R.id.technology_detail_number);
        t_business_year = findViewById(R.id.technology_detail_business_year);
        t_tech_name = findViewById(R.id.technology_detail_tech_name);
        t_tech_year = findViewById(R.id.technology_detail_tech_year);
        t_tech_country = findViewById(R.id.technology_detail_tech_country);
        t_techcontract_date = findViewById(R.id.technology_detail_techcontract_date);
        t_RAI_name = findViewById(R.id.technology_detail_rai_name);

        t_TI_method = findViewById(R.id.technology_detail_ti_method);
        t_TI_detail = findViewById(R.id.technology_detail_ti_detail);
        t_TIinstitution_name = findViewById(R.id.technology_detail_tiinstitution_name);
        t_TI_num = findViewById(R.id.technology_detail_ti_num);
        t_TI_type = findViewById(R.id.technology_detail_ti_type);
        t_techApplication_form = findViewById(R.id.technology_detail_division);
        t_RAI_type = findViewById(R.id.technology_detail_rai_type);



        Intent intent = getIntent();
        String t_data_tid = intent.getStringExtra("t_tid");
        String t_data_business_year = intent.getStringExtra("t_business_year");
        String t_data_tech_name = intent.getStringExtra("t_tech_name");
        String t_data_tech_year = intent.getStringExtra("t_tech_year");
        String t_data_tech_country = intent.getStringExtra("t_tech_country");
        String t_data_techcontract_date = intent.getStringExtra("t_techcontract_date");
        String t_data_RAI_name = intent.getStringExtra("t_RAI_name");
        String t_data_intellectualPropertyRights = intent.getStringExtra("t_intellectualPropertyRights");
        String t_data_TI_method = intent.getStringExtra("t_TI_method");
        String t_data_TI_detail = intent.getStringExtra("t_TI_detail");
        String t_data_TIinstitution_name = intent.getStringExtra("t_TIinstitution_name");
        String t_data_TI_num = intent.getStringExtra("t_TI_num");
        String t_data_TI_type = intent.getStringExtra("t_TI_type");
        String t_data_techApplication_form = intent.getStringExtra("t_techApplication_form");
        String t_data_RAI_type = intent.getStringExtra("t_RAI_type");



        t_tid.setText("제 "+t_data_tid+" 호");
        t_business_year.setText(t_data_business_year);
        t_tech_name.setText(t_data_tech_name);
        t_tech_year.setText(t_data_tech_year);
        t_tech_country.setText(t_data_tech_country);
        t_techcontract_date.setText(t_data_techcontract_date);
        t_RAI_name.setText(t_data_RAI_name);

        t_TI_method.setText((t_data_TI_method));
        t_TI_detail.setText(t_data_TI_detail);
        t_TIinstitution_name.setText(t_data_TIinstitution_name);
        t_TI_num.setText(t_data_TI_num);
        t_TI_type.setText((t_data_TI_type));
        t_techApplication_form.setText(t_data_techApplication_form);
        t_RAI_type.setText(t_data_RAI_type);



    }
}
