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
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.example.a5g_app_project.DTO.NoticeMainDTO;

import com.example.a5g_app_project.Interface.NoticeMainInterface;

import com.example.a5g_app_project.ItemClickListener.OnNoticeItemClickListener;
import com.example.a5g_app_project.adapters.NoticeAdapter;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class NoticeMainActivity extends AppCompatActivity implements View.OnClickListener{

    private RecyclerView mNoticeRecyclerView;
    private SwipeRefreshLayout mSwipeRefreshLayout;

    private NoticeAdapter mAdapter;
    private List<NoticeMainDTO> mDatas;
    final Context context = this;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.notice);

        mNoticeRecyclerView = findViewById(R.id.notice_main_recyclerview);
        mSwipeRefreshLayout = (SwipeRefreshLayout)findViewById(R.id.noticeSwipe);

        findViewById(R.id.main_notice_edit).setOnClickListener(this);
        ImageButton notice_back_btn = findViewById(R.id.notice_back_button);
        // ImageButton notice_search_btn = findViewById(R.id.notice_search_button);

        notice_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        /*notice_search_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Intent search_intent = new Intent(view.getContext(), SearchActivity.class);
                startActivity(search_intent);
            }
        });*/

        mSwipeRefreshLayout.setColorSchemeResources(R.color.colorBlue);
        mSwipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                // 동글동글 도는거 사라짐
                mSwipeRefreshLayout.setRefreshing(false);

                // TODO : input your code
                onStart();
            }
        });
    }


    @Override
    protected void onStart() {
        super.onStart();
        mDatas = new ArrayList<NoticeMainDTO>();
        super.onStart();
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.187.1:9928/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        NoticeMainInterface service = retrofit.create(NoticeMainInterface.class);

        service.getQuestions().enqueue(new Callback<List<NoticeMainDTO>>() {
            @Override
            public void onResponse(Call<List<NoticeMainDTO>> call, Response<List<NoticeMainDTO>> response) {
                if (response.isSuccessful()) {
                    //정상적으로 통신이 성공한 경우
                    List<NoticeMainDTO> NoticeMainDTOS = response.body();
                    for (int i = 0; i < NoticeMainDTOS.size(); i++) {
                        String n_number = String.valueOf(NoticeMainDTOS.get(i).getNid());
                        String n_title = String.valueOf(NoticeMainDTOS.get(i).getN_title());
                        String n_content = String.valueOf(NoticeMainDTOS.get(i).getN_content());
                        String n_writer = String.valueOf(NoticeMainDTOS.get(i).getN_writer());
                        String n_writer_date = String.valueOf(NoticeMainDTOS.get(i).getN_writer_date());
                        NoticeMainDTO data = new NoticeMainDTO(n_number, n_title, n_content, n_writer, n_writer_date);
                        mDatas.add(data);
                    }
                    mAdapter = new NoticeAdapter(mDatas);
                    mNoticeRecyclerView.setAdapter(mAdapter);

                    mAdapter.setOnItemClickListener(new OnNoticeItemClickListener() {
                        @Override
                        public void onItemClick(NoticeAdapter.NoticeViewHolder holder, View view, int position) {
                            NoticeMainDTO item = mAdapter.getItem(position);
                            Intent Notice_detail_intent = new Intent(context, NoticeDetailActivity.class);
                            Notice_detail_intent.putExtra("n_title", item.getN_title());
                            Notice_detail_intent.putExtra("n_content", item.getN_content());
                            Notice_detail_intent.putExtra("n_number", item.getNid());
                            Notice_detail_intent.putExtra("n_name", item.getN_writer());
                            Notice_detail_intent.putExtra("n_date", item.getN_writer_date());
                            startActivity(Notice_detail_intent);
                        }
                    });
                } else {
                    Log.d("Notice", "Fail");
                }
            }
            @Override
            public void onFailure(Call<List<NoticeMainDTO>> call, Throwable t) {
                Log.d("Faild", t.getMessage());
            }
        });



    }

    @Override
    public void onClick(View view) {
        startActivity(new Intent(this, NoticeActivity.class));
    }
}
