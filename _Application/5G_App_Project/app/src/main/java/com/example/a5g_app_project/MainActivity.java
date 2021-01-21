package com.example.a5g_app_project;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
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

import com.example.a5g_app_project.models.Post;
import com.google.android.material.navigation.NavigationView;


public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private AppBarConfiguration mAppBarConfiguration;
    private DrawerLayout drawer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        Button introduce_btn, Notice_btn, Post_btn, Question_btn, Map_btn, Pc_btn;
        introduce_btn = findViewById(R.id.fuction_button1);
        Notice_btn = findViewById(R.id.fuction_button4);
        Post_btn = findViewById(R.id.fuction_button5);
        Question_btn = findViewById(R.id.fuction_button6);
        Map_btn = findViewById(R.id.main_map_button);
        Pc_btn = findViewById(R.id.main_PC_button);
        introduce_btn.setOnClickListener(this);
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
}
