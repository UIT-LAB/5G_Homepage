package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.PostMainDTO;
import com.example.a5g_app_project.DTO.PostMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnPostItemClickListener;
import com.example.a5g_app_project.models.Post;
import com.example.a5g_app_project.R;

import java.util.List;

public class PostAdapter extends RecyclerView.Adapter<PostAdapter.PostViewHolder> implements OnPostItemClickListener {
    private List<PostMainDTO> datas;

    public PostAdapter(List<PostMainDTO> datas) {
        this.datas = datas;
    }
    OnPostItemClickListener listener;

    @NonNull
    @Override
    public PostAdapter.PostViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new PostAdapter.PostViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_post, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull PostAdapter.PostViewHolder PostViewholder, int position) {
        PostMainDTO data = datas.get(position);
        PostViewholder.nicname.setText("작성자 : " + data.getP_writer());
        PostViewholder.title.setText(data.getP_title());
        PostViewholder.timestamp.setText(data.getP_writer_date());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(PostMainDTO item) {datas.add(item);}
    public void setItems(List<PostMainDTO> items) { this.datas = items;}
    public PostMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, PostMainDTO item) {datas.set(position, item);}

    public void setOnItemClickListener(OnPostItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(PostAdapter.PostViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class PostViewHolder extends RecyclerView.ViewHolder {

        private TextView nicname;
        private TextView title;
        private TextView timestamp;

        public PostViewHolder(@NonNull View itemView) {
            super(itemView);

            nicname = itemView.findViewById(R.id.item_post_nicname);
            title = itemView.findViewById(R.id.item_post_title);
            timestamp = itemView.findViewById(R.id.item_post_date);

            itemView.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view){
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(PostAdapter.PostViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(PostMainDTO item){
            nicname.setText(item.getP_writer());
            title.setText(item.getP_title());
            timestamp.setText(item.getP_writer_date());
        }
    }
}
