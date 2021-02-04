package com.example.a5g_app_project;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.NoticeMainDTO;
import com.example.a5g_app_project.DTO.PostMainDTO;
import com.example.a5g_app_project.DTO.TreatiseMainDTO;
import com.example.a5g_app_project.Interface.NoticeMainInterface;
import com.example.a5g_app_project.Interface.PostMainInterface;
import com.example.a5g_app_project.Interface.TreatiseMainInterface;
import com.example.a5g_app_project.ItemClickListener.OnNoticeItemClickListener;
import com.example.a5g_app_project.adapters.MainNoticeAdapter;
import com.example.a5g_app_project.adapters.MainPostAdapter;
import com.example.a5g_app_project.adapters.MainTreatiseAdapter;
import com.example.a5g_app_project.adapters.NoticeAdapter;
import com.example.a5g_app_project.models.Post;
import com.google.android.material.navigation.NavigationView;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private AppBarConfiguration mAppBarConfiguration;
    private DrawerLayout drawer;

    private RecyclerView mNoticeRecyclerView;
    private MainNoticeAdapter mAdapter;
    private List<NoticeMainDTO> nDatas;

    private RecyclerView mPostRecyclerView;
    private MainPostAdapter pAdapter;
    private List<PostMainDTO> pDatas;

    private RecyclerView mTreatiesRecyclerView;
    private MainTreatiseAdapter tAdapter;
    private List<TreatiseMainDTO> tDatas;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        mNoticeRecyclerView = findViewById(R.id.notice_content_main_recyclerview);
        mPostRecyclerView = findViewById(R.id.post_content_main_recyclerview);
        mTreatiesRecyclerView = findViewById(R.id.treatise_content_main_recyclerview);

        Button introduce_btn, Treatise_btn, Notice_btn, Post_btn, Question_btn, Map_btn, Pc_btn;
        introduce_btn = findViewById(R.id.fuction_button1);
        Treatise_btn = findViewById(R.id.fuction_button3);
        Notice_btn = findViewById(R.id.fuction_button4);
        Post_btn = findViewById(R.id.fuction_button5);
        Question_btn = findViewById(R.id.fuction_button6);
        Map_btn = findViewById(R.id.main_map_button);
        Pc_btn = findViewById(R.id.main_PC_button);
        introduce_btn.setOnClickListener(this);
        Treatise_btn.setOnClickListener(this);
        Notice_btn.setOnClickListener(this);
        Post_btn.setOnClickListener(this);
        Question_btn.setOnClickListener(this);
        Map_btn.setOnClickListener(this);
        Pc_btn.setOnClickListener(this);

        //액션 상단바
        ActionBar actionBar = getSupportActionBar();
        actionBar.setDisplayShowTitleEnabled(false); // 기존 title 지우기
        actionBar.setDisplayHomeAsUpEnabled(true); // 뒤로가기 버튼 만들기
        actionBar.setHomeAsUpIndicator(R.drawable.ic_hambuger_24); //뒤로가기 버튼 이미지 지정 (햄버거 아이콘)

        drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        final Context context = this;

        //상단 액션바 햄버거 기능 구현
        NavigationView navigationView = (NavigationView) findViewById(R.id.drawer_nav_view);
        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(MenuItem menuItem) {
                drawer.closeDrawers();

                int id = menuItem.getItemId();
                String title = menuItem.getTitle().toString();

                if (id == R.id.drawer_info) {
                    Intent introduce_intent = new Intent(context, IntroduceActivity.class);
                    context.startActivity(introduce_intent);

                } else if (id == R.id.drawer_paper) {
                    Intent treatise_intent = new Intent(context, TreatiseMainActivity.class);
                    context.startActivity(treatise_intent);

                } else if (id == R.id.drawer_notice) {
                    Intent notice_intent = new Intent(context, NoticeMainActivity.class);
                    context.startActivity(notice_intent);

                } else if (id == R.id.drawer_post) {
                    Intent post_intent = new Intent(context, PostMainActivity.class);
                    context.startActivity(post_intent);
                }
                else if (id == R.id.drawer_question) {
                    Intent post_intent = new Intent(context, QuestionMainActivity.class);
                    context.startActivity(post_intent);

                }
                else if (id == R.id.drawer_homepage) {
                    Intent homepage_intent = new Intent(context, HomepageActivity.class);
                    context.startActivity(homepage_intent);

                }
                else if (id == R.id.drawer_map) {
                    Intent map_intent = new Intent(context, MapActivity.class);
                    context.startActivity(map_intent);

                }

                return true;
            }
        });

    }

    //상단 액션바 햄버거 기능 구현
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    //상단 액션바 햄버거 기능 구현
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home: { // 왼쪽 상단 버튼 눌렀을 때
                drawer.openDrawer(GravityCompat.START);
                return true;
            }
            case R.id.menu_search: {
                Intent search_intent = new Intent(this, SearchActivity.class);
                startActivity(search_intent);
                return true;
            }
            case R.id.menu_login: {
                Intent login_intent = new Intent(this, LoginActivity.class);
                startActivity(login_intent);
                return true;
            }
        }
        return super.onOptionsItemSelected(item);
    }

    //메인 중앙 버튼 기능 구현
    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.fuction_button1: {
                Intent Introduce_intent = new Intent(this, IntroduceActivity.class);
                startActivity(Introduce_intent);
                break;
            }
            case R.id.fuction_button2: {

            }
            case R.id.fuction_button3: {
                Intent Treatise_intent = new Intent(this, TreatiseMainActivity.class);
                startActivity(Treatise_intent);
                break;
            }
            case R.id.fuction_button4: {
                Intent Notice_intent = new Intent(this, NoticeMainActivity.class);
                startActivity(Notice_intent);
                break;
            }
            case R.id.fuction_button5: {
                Intent Post_intent = new Intent(this, PostMainActivity.class);
                startActivity(Post_intent);
                break;
            }
            case R.id.fuction_button6: {
                Intent Question_intent = new Intent(this, QuestionMainActivity.class);
                startActivity(Question_intent);
                break;
            }
            case R.id.main_map_button: {
                Intent Map_intent = new Intent(this, MapActivity.class);
                startActivity(Map_intent);
                break;
            }
            case R.id.main_PC_button: {
                Intent PC_intent = new Intent(this, HomepageActivity.class);
                startActivity(PC_intent);
                break;
            }
        }
    }

    //메인 공지사항, 정보 게시판, 논문 최신 가져오기
    @Override
    protected void onStart() {
        super.onStart();
        nDatas = new ArrayList<NoticeMainDTO>();
        pDatas = new ArrayList<PostMainDTO>();
        tDatas = new ArrayList<TreatiseMainDTO>();

        super.onStart();
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.20:3001/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        NoticeMainInterface service = retrofit.create(NoticeMainInterface.class);
        PostMainInterface service2 = retrofit.create(PostMainInterface.class);
        TreatiseMainInterface service3 = retrofit.create(TreatiseMainInterface.class);

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
                        nDatas.add(data);
                    }
                    mAdapter = new MainNoticeAdapter(nDatas);
                    mNoticeRecyclerView.setAdapter(mAdapter);

                } else {
                    Log.d("Notice", "Fail");
                }
            }
            @Override
            public void onFailure(Call<List<NoticeMainDTO>> call, Throwable t) {
                Log.d("Faild", t.getMessage());
            }
        });

        service2.getQuestions().enqueue(new Callback<List<PostMainDTO>>() {
            @Override
            public void onResponse(Call<List<PostMainDTO>> call, Response<List<PostMainDTO>> response) {
                if (response.isSuccessful()) {
                    //정상적으로 통신이 성공한 경우
                    List<PostMainDTO> PostMainDTOS = response.body();
                    for (int i = 0; i < PostMainDTOS.size(); i++) {
                        String p_number = String.valueOf(PostMainDTOS.get(i).getPid());
                        String p_title = String.valueOf(PostMainDTOS.get(i).getP_title());
                        String p_content = String.valueOf(PostMainDTOS.get(i).getP_content());
                        String p_writer = String.valueOf(PostMainDTOS.get(i).getP_writer());
                        String p_writer_date = String.valueOf(PostMainDTOS.get(i).getP_writer_date());
                        PostMainDTO data = new PostMainDTO(p_number, p_title, p_content, p_writer, p_writer_date);
                        pDatas.add(data);
                    }
                    pAdapter = new MainPostAdapter(pDatas);
                    mPostRecyclerView.setAdapter(pAdapter);

                } else {
                    Log.d("Post", "Fail");
                }
            }
            @Override
            public void onFailure(Call<List<PostMainDTO>> call, Throwable t) {
                Log.d("Faild", t.getMessage());
            }
        });

        service3.getQuestions().enqueue(new Callback<List<TreatiseMainDTO>>() {
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
                        tDatas.add(data);
                    }
                    tAdapter = new MainTreatiseAdapter(tDatas);
                    mTreatiesRecyclerView.setAdapter(tAdapter);

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




}


