package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class licenseDetailActivity extends AppCompatActivity {

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.license_detail);

        Button treatise_detail_back_btn = findViewById(R.id.license_detail_exit_button);

        treatise_detail_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        TextView l_number, l_d, l_ad, l_co, l_arp, l_ca, l_in, l_inor, l_oi;


        l_number = findViewById(R.id.license_detail_number);
        l_d = findViewById(R.id.license_detail_division_name);
        l_arp = findViewById(R.id.license_detail_Subjectivity_agency);
        l_oi = findViewById(R.id.license_detail_Expectation_result);
        l_ad = findViewById(R.id.license_detail_Research_goal);
        l_in = findViewById(R.id.license_detail_Research_content);
        l_inor = findViewById(R.id.license_detail_manager);
        l_co = findViewById(R.id. license_detail_country);


        Intent intent = getIntent();
        String l_data_number = intent.getStringExtra("l_number");
        String l_data_title = intent.getStringExtra("l_ca");
        String l_data_dname = intent.getStringExtra("l_inor");
        String l_data_period = intent.getStringExtra("l_arp");
        String l_data_own = intent.getStringExtra("l_oi");
        String l_data_co = intent.getStringExtra("l_co");
        String l_data_ad = intent.getStringExtra("l_ad");
        String l_data_dv = intent.getStringExtra("l_d");


        l_number.setText("제 "+l_data_number+" 호");
        l_d.setText(l_data_dv);
        l_arp.setText(l_data_period);
        l_oi.setText(l_data_own);
        l_ad.setText(l_data_ad);
        l_in.setText(l_data_title);
        l_inor.setText(l_data_dname);
        l_co.setText(l_data_co);





    }
}
