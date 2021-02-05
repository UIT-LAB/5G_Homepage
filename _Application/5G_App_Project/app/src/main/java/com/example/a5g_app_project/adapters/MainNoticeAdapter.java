package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.NoticeMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnNoticeItemClickListener;
import com.example.a5g_app_project.R;

import java.util.List;

public class MainNoticeAdapter extends RecyclerView.Adapter<MainNoticeAdapter.MainNoticeViewHolder>{
    private List<NoticeMainDTO> datas;

    public MainNoticeAdapter(List<NoticeMainDTO> datas) {
        this.datas = datas;
    }

    @NonNull
    @Override
    public MainNoticeViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new MainNoticeAdapter.MainNoticeViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_main_notice, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull MainNoticeViewHolder MainNoticeViewHolder, int position) {
        NoticeMainDTO data = datas.get(position);
        MainNoticeViewHolder.title.setText(data.getN_title());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(NoticeMainDTO item) {datas.add(item);}
    public void setItems(List<NoticeMainDTO> items) { this.datas = items;}
    public NoticeMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, NoticeMainDTO item) {datas.set(position, item);}


    public class MainNoticeViewHolder extends RecyclerView.ViewHolder {

        private TextView title;

        public MainNoticeViewHolder(@NonNull View itemView) {
            super(itemView);

            title = itemView.findViewById(R.id.item_main_notice_title);

        }

        public void setItem(NoticeMainDTO item){
            title.setText(item.getN_title());
        }
    }
}
