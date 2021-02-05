package com.example.a5g_app_project;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageButton;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.TreatiseMainDTO;

import com.example.a5g_app_project.Interface.TreatiseMainInterface;

import com.example.a5g_app_project.ItemClickListener.OnTreatiseItemClickListener;
import com.example.a5g_app_project.adapters.TreatiseAdapter;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class TreatiseMainActivity extends AppCompatActivity implements View.OnClickListener{

    private RecyclerView mTreatiseRecyclerView;

    private TreatiseAdapter mAdapter;
    private List<TreatiseMainDTO> mDatas;
    final Context context = this;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.treatise);

        mTreatiseRecyclerView = findViewById(R.id.treatise_main_recyclerview);

        ImageButton treatise_back_btn = findViewById(R.id.treatise_back_button);
        ImageButton treatise_search_btn = findViewById(R.id.treatise_search_button);

        treatise_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        treatise_search_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Intent search_intent = new Intent(view.getContext(), SearchActivity.class);
                startActivity(search_intent);
            }
        });

    }

    @Override
    protected void onStart() {
        super.onStart();
        mDatas = new ArrayList<TreatiseMainDTO>();
        super.onStart();
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.20:3001/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        TreatiseMainInterface service = retrofit.create(TreatiseMainInterface.class);

        service.getQuestions().enqueue(new Callback<List<TreatiseMainDTO>>() {
            @Override
            public void onResponse(Call<List<TreatiseMainDTO>> call, Response<List<TreatiseMainDTO>> response) {
                if (response.isSuccessful()) {
                    //정상적으로 통신이 성공한 경우
                    List<TreatiseMainDTO> TreatiseMainDTOS = response.body();
                    for (int i = 0; i < TreatiseMainDTOS.size(); i++) {
                        String t_number = String.valueOf(TreatiseMainDTOS.get(i).getRfid());
                        String t_title = String.valueOf(TreatiseMainDTOS.get(i).getResearch_name_ko());
                        String t_bname = String.valueOf(TreatiseMainDTOS.get(i).getBusiness_name_ko());
                        String t_dname = String.valueOf(TreatiseMainDTOS.get(i).getDepartment_name_ko());
                        String t_sbagency = String.valueOf(TreatiseMainDTOS.get(i).getSubjectivity_agency_ko());
                        String t_spagency = String.valueOf(TreatiseMainDTOS.get(i).getSupport_agency_ko());
                        String t_pagency = String.valueOf(TreatiseMainDTOS.get(i).getParticipation_agency_ko());
                        String t_rgoal = String.valueOf(TreatiseMainDTOS.get(i).getResearch_goal_ko());
                        String t_rcontent = String.valueOf(TreatiseMainDTOS.get(i).getResearch_content_ko());
                        String t_exresult = String.valueOf(TreatiseMainDTOS.get(i).getExpectation_result_ko());
                        String t_rmanager = String.valueOf(TreatiseMainDTOS.get(i).getResearch_manager_ko());
                        String t_rbelong = String.valueOf(TreatiseMainDTOS.get(i).getResearch_belong_ko());
                        String t_dstart = String.valueOf(TreatiseMainDTOS.get(i).getDate_start());
                        String t_dend = String.valueOf(TreatiseMainDTOS.get(i).getDate_end());

                        TreatiseMainDTO data = new TreatiseMainDTO(t_number, t_title, t_bname, t_dname, t_sbagency, t_spagency, t_pagency, t_rgoal, t_rcontent, t_exresult, t_rmanager, t_rbelong, t_dstart, t_dend);
                        mDatas.add(data);
                    }
                    mAdapter = new TreatiseAdapter(mDatas);
                    mTreatiseRecyclerView.setAdapter(mAdapter);

                    mAdapter.setOnItemClickListener(new OnTreatiseItemClickListener() {
                        @Override
                        public void onItemClick(TreatiseAdapter.TreatiseViewHolder holder, View view, int position) {
                            TreatiseMainDTO item = mAdapter.getItem(position);
                            Intent Treatise_detail_intent = new Intent(context, TreatiseDetailActivity.class);
                            Treatise_detail_intent.putExtra("t_number", item.getRfid());
                            Treatise_detail_intent.putExtra("t_title", item.getResearch_name_ko());
                            Treatise_detail_intent.putExtra("t_bname", item.getBusiness_name_ko());
                            Treatise_detail_intent.putExtra("t_dname", item.getDepartment_name_ko());
                            Treatise_detail_intent.putExtra("t_sbagency", item.getSubjectivity_agency_ko());
                            Treatise_detail_intent.putExtra("t_spagency", item.getSupport_agency_ko());
                            Treatise_detail_intent.putExtra("t_pagency", item.getParticipation_agency_ko());
                            Treatise_detail_intent.putExtra("t_rgoal", item.getResearch_goal_ko());
                            Treatise_detail_intent.putExtra("t_rcontent", item.getResearch_content_ko());
                            Treatise_detail_intent.putExtra("t_exresult", item.getExpectation_result_ko());
                            Treatise_detail_intent.putExtra("t_rmanager", item.getResearch_manager_ko());
                            Treatise_detail_intent.putExtra("t_rbelong", item.getResearch_belong_ko());
                            Treatise_detail_intent.putExtra("t_dstart", item.getDate_start());
                            Treatise_detail_intent.putExtra("t_dend", item.getDate_end());
                            startActivity(Treatise_detail_intent);
                        }
                    });
                } else {
                    Log.d("Treatise", "Fail");
                }
            }
            @Override
            public void onFailure(Call<List<TreatiseMainDTO>> call, Throwable t) {
                Log.d("Faild", t.getMessage());
            }
        });



    }

    @Override
    public void onClick(View view) {

    }
}