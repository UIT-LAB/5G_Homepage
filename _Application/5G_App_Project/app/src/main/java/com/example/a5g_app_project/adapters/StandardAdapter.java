package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.StandardMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnStandardItemClickListener;
import com.example.a5g_app_project.R;

import java.util.List;

public class StandardAdapter extends RecyclerView.Adapter<StandardAdapter.StandardViewHolder> implements OnStandardItemClickListener {
    private List<StandardMainDTO> datas;

    public StandardAdapter(List<StandardMainDTO> datas) {
        this.datas = datas;
    }

    OnStandardItemClickListener listener;

    @NonNull
    @Override
    public StandardAdapter.StandardViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new StandardAdapter.StandardViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_standard, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull StandardAdapter.StandardViewHolder StandardViewholder, int position) {
        StandardMainDTO data = datas.get(position);
        StandardViewholder.s_number.setText("제 " + data.getStid() + " 호");
        StandardViewholder.s_division.setText("구분 : " + data.getDivision());
        StandardViewholder.s_title.setText(data.getDocument());
        StandardViewholder.s_dend.setText("사업 연도 : " + data.getBusiness_year());
        StandardViewholder.s_rmanager.setText("제안자 : " + data.getProponent());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }

    public void addItem(StandardMainDTO item) {
        datas.add(item);
    }

    public void setItems(List<StandardMainDTO> items) {
        this.datas = items;
    }

    public StandardMainDTO getItem(int position) {
        return datas.get(position);
    }

    public void setItem(int position, StandardMainDTO item) {
        datas.set(position, item);
    }

    public void setOnItemClickListener(OnStandardItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(StandardAdapter.StandardViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class StandardViewHolder extends RecyclerView.ViewHolder {

        private TextView s_number;
        private TextView s_title;
        private TextView s_dend;
        private TextView s_rmanager;
        private TextView s_division;

        public StandardViewHolder(@NonNull View itemView) {
            super(itemView);

            s_number = itemView.findViewById(R.id.item_standard_number);
            s_division = itemView.findViewById(R.id.item_standard_division);
            s_title = itemView.findViewById(R.id.item_standard_title);
            s_dend = itemView.findViewById(R.id.item_standard_date);
            s_rmanager = itemView.findViewById(R.id.item_standard_name);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(StandardAdapter.StandardViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(StandardMainDTO item) {
            s_number.setText(item.getStid());
            s_division.setText(item.getDivision());
            s_title.setText(item.getDocument());
            s_dend.setText(item.getBusiness_year());
            s_rmanager.setText(item.getProponent());
        }
    }
}