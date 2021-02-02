package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.PostMainDTO;
import com.example.a5g_app_project.R;

import java.util.List;

public class MainPostAdapter extends RecyclerView.Adapter<MainPostAdapter.MainPostViewHolder>{
    private List<PostMainDTO> datas;

    public MainPostAdapter(List<PostMainDTO> datas) {
        this.datas = datas;
    }

    @NonNull
    @Override
    public MainPostViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new MainPostAdapter.MainPostViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_main_post, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull MainPostViewHolder MainPostViewHolder, int position) {
        PostMainDTO data = datas.get(position);
        MainPostViewHolder.title.setText(data.getP_title());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(PostMainDTO item) {datas.add(item);}
    public void setItems(List<PostMainDTO> items) { this.datas = items;}
    public PostMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, PostMainDTO item) {datas.set(position, item);}


    public class MainPostViewHolder extends RecyclerView.ViewHolder {

        private TextView title;

        public MainPostViewHolder(@NonNull View itemView) {
            super(itemView);

            title = itemView.findViewById(R.id.item_main_post_title);

        }

        public void setItem(PostMainDTO item){
            title.setText(item.getP_title());
        }
    }
}
