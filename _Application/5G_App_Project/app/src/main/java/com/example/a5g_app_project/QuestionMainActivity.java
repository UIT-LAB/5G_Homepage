package com.example.a5g_app_project;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.NoticeMainDTO;
import com.example.a5g_app_project.DTO.PostMainDTO;
import com.example.a5g_app_project.DTO.QuestionMainDTO;
import com.example.a5g_app_project.Interface.NoticeMainInterface;
import com.example.a5g_app_project.Interface.QuestionMainInterface;
import com.example.a5g_app_project.ItemClickListener.OnNoticeItemClickListener;
import com.example.a5g_app_project.ItemClickListener.OnQuestionItemClickListener;
import com.example.a5g_app_project.adapters.NoticeAdapter;
import com.example.a5g_app_project.adapters.QuestionAdapter;


import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class QuestionMainActivity extends AppCompatActivity implements View.OnClickListener{

    private RecyclerView mQuestionRecyclerView;

    private QuestionAdapter mAdapter;
    private List<QuestionMainDTO> mDatas;
    final Context context = this;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.question);

        mQuestionRecyclerView = findViewById(R.id.question_main_recyclerview);

        findViewById(R.id.main_question_edit).setOnClickListener(this);
        ImageButton question_back_btn = findViewById(R.id.question_back_button);
        ImageButton question_search_btn = findViewById(R.id.question_search_button);

        question_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        question_search_btn.setOnClickListener(new View.OnClickListener(){
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
        mDatas = new ArrayList<QuestionMainDTO>();
        super.onStart();
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.20:3001/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        QuestionMainInterface service = retrofit.create(QuestionMainInterface.class);

        service.getQuestions().enqueue(new Callback<List<QuestionMainDTO>>() {
            @Override
            public void onResponse(Call<List<QuestionMainDTO>> call, Response<List<QuestionMainDTO>> response) {
                if (response.isSuccessful()) {
                    //정상적으로 통신이 성공한 경우
                    List<QuestionMainDTO> QuestionMainDTOS = response.body();
                    for (int i = 0; i < QuestionMainDTOS.size(); i++) {
                        String q_number = String.valueOf(QuestionMainDTOS.get(i).getQid());
                        String q_title = String.valueOf(QuestionMainDTOS.get(i).getQ_title());
                        String q_content = String.valueOf(QuestionMainDTOS.get(i).getQ_content());
                        String q_writer_date = String.valueOf(QuestionMainDTOS.get(i).getQ_writer_date());
                        String q_admin_comment = String.valueOf(QuestionMainDTOS.get(i).getQ_admin_comment());
                        String q_admin_date = String.valueOf(QuestionMainDTOS.get(i).getQ_admin_date());
                        QuestionMainDTO data = new QuestionMainDTO(q_number, q_title, q_content, q_writer_date, q_admin_comment, q_admin_date);
                        mDatas.add(data);
                    }
                    mAdapter = new QuestionAdapter(mDatas);
                    mQuestionRecyclerView.setAdapter(mAdapter);

                    mAdapter.setOnItemClickListener(new OnQuestionItemClickListener() {
                        @Override
                        public void onItemClick(QuestionAdapter.QuestionViewHolder holder, View view, int position) {
                            QuestionMainDTO item = mAdapter.getItem(position);
                            Intent Question_detail_intent = new Intent(context, QuestionDetailActivity.class);
                            Question_detail_intent.putExtra("q_title", item.getQ_title());
                            Question_detail_intent.putExtra("q_content", item.getQ_content());
                            Question_detail_intent.putExtra("q_number", item.getQid());
                            Question_detail_intent.putExtra("q_date", item.getQ_writer_date());
                            Question_detail_intent.putExtra("q_admin_comment", item.getQ_admin_comment());
                            Question_detail_intent.putExtra("q_admin_date", item.getQ_admin_date());
                            startActivity(Question_detail_intent);
                        }
                    });
                } else {
                    Log.d("Question", "Fail");
                }
            }
            @Override
            public void onFailure(Call<List<QuestionMainDTO>> call, Throwable t) {
                Log.d("Faild", t.getMessage());
            }
        });



    }

    @Override
    public void onClick(View view) {
        startActivity(new Intent(this, NoticeActivity.class));
    }
}
