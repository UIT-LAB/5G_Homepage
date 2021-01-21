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

public class NoticeAdapter extends RecyclerView.Adapter<NoticeAdapter.NoticeViewHolder> implements OnNoticeItemClickListener {
    private List<NoticeMainDTO> datas;

    public NoticeAdapter(List<NoticeMainDTO> datas) {
        this.datas = datas;
    }
    OnNoticeItemClickListener listener;

    @NonNull
    @Override
    public NoticeViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new NoticeAdapter.NoticeViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_notice, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull NoticeViewHolder NoticeViewholder, int position) {
        NoticeMainDTO data = datas.get(position);
        NoticeViewholder.nicname.setText("작성자 : " + data.getN_writer());
        NoticeViewholder.title.setText(data.getN_title());
        NoticeViewholder.timestamp.setText(data.getN_writer_date());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(NoticeMainDTO item) {datas.add(item);}
    public void setItems(List<NoticeMainDTO> items) { this.datas = items;}
    public NoticeMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, NoticeMainDTO item) {datas.set(position, item);}

    public void setOnItemClickListener(OnNoticeItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(NoticeViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class NoticeViewHolder extends RecyclerView.ViewHolder {

        private TextView nicname;
        private TextView title;
        private TextView title2;
        private TextView timestamp;

        public NoticeViewHolder(@NonNull View itemView) {
            super(itemView);

            nicname = itemView.findViewById(R.id.item_notice_nicname);
            title = itemView.findViewById(R.id.item_notice_title);
            timestamp = itemView.findViewById(R.id.item_notice_date);

            itemView.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view){
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(NoticeViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(NoticeMainDTO item){
            nicname.setText(item.getN_writer());
            title.setText(item.getN_title());
            timestamp.setText(item.getN_writer_date());
        }
    }
}