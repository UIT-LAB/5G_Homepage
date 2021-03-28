package com.example.a5g_app_project;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageButton;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.example.a5g_app_project.DTO.PostMainDTO;
import com.example.a5g_app_project.Interface.PostMainInterface;
import com.example.a5g_app_project.ItemClickListener.OnPostItemClickListener;
import com.example.a5g_app_project.adapters.PostAdapter;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class PostMainActivity extends AppCompatActivity implements View.OnClickListener{

    private RecyclerView mPostRecyclerView;
    private SwipeRefreshLayout mSwipeRefreshLayout;

    private PostAdapter mAdapter;
    private List<PostMainDTO> mDatas;
    final Context context = this;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.post);

        mPostRecyclerView = findViewById(R.id.main_recyclerview);
        mSwipeRefreshLayout = (SwipeRefreshLayout)findViewById(R.id.postSwipe);

        findViewById(R.id.main_post_edit).setOnClickListener(this);
        ImageButton post_back_btn = findViewById(R.id.post_back_button);
        //ImageButton post_search_btn = findViewById(R.id.post_search_button);

        post_back_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                finish();
            }
        });
        /*post_search_btn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Intent search_intent = new Intent(view.getContext(), SearchActivity.class);
                startActivity(search_intent);
            }
        });*/

        mSwipeRefreshLayout.setColorSchemeResources(R.color.colorOrange);
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
        mDatas = new ArrayList<PostMainDTO>();
        super.onStart();
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.187.1:3000/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        PostMainInterface service = retrofit.create(PostMainInterface.class);

        service.getQuestions().enqueue(new Callback<List<PostMainDTO>>() {
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
                        mDatas.add(data);
                    }
                    mAdapter = new PostAdapter(mDatas);
                    mPostRecyclerView.setAdapter(mAdapter);

                    mAdapter.setOnItemClickListener(new OnPostItemClickListener() {
                        @Override
                        public void onItemClick(PostAdapter.PostViewHolder holder, View view, int position) {
                            PostMainDTO item = mAdapter.getItem(position);
                            Intent Post_detail_intent = new Intent(context, PostDetailActivity.class);
                            Post_detail_intent.putExtra("p_title", item.getP_title());
                            Post_detail_intent.putExtra("p_content", item.getP_content());
                            Post_detail_intent.putExtra("p_number", item.getPid());
                            Post_detail_intent.putExtra("p_name", item.getP_writer());
                            Post_detail_intent.putExtra("p_date", item.getP_writer_date());
                            startActivity(Post_detail_intent);
                        }
                    });
                } else {
                    Log.d("Post", "Fail");
                }
            }
            @Override
            public void onFailure(Call<List<PostMainDTO>> call, Throwable t) {
                Log.d("Faild", t.getMessage());
            }
        });



    }

    @Override
    public void onClick(View view) {
        startActivity(new Intent(this, PostActivity.class));
    }
}
