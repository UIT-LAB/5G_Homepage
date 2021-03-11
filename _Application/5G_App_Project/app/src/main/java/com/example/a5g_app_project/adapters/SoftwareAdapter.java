package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.SoftwareMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnSoftwareItemClickListener;
import com.example.a5g_app_project.R;

import java.util.List;

public class SoftwareAdapter extends RecyclerView.Adapter<SoftwareAdapter.SoftwareViewHolder> implements OnSoftwareItemClickListener {
    private List<SoftwareMainDTO> datas;

    public SoftwareAdapter(List<SoftwareMainDTO> datas) {
        this.datas = datas;
    }
    OnSoftwareItemClickListener listener;

    @NonNull
    @Override
    public SoftwareAdapter.SoftwareViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new SoftwareAdapter.SoftwareViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_software, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull SoftwareAdapter.SoftwareViewHolder SoftwareViewholder, int position) {
        SoftwareMainDTO data = datas.get(position);
        SoftwareViewholder.s_number.setText("제 " + data.getSid() + " 호");
        SoftwareViewholder.s_division.setText("구분 : " + data.getDivision());
        SoftwareViewholder.s_title.setText(data.getRegistration_name());
        SoftwareViewholder.s_dend.setText("등록 일자 : " + data.getRegistration_date());
        SoftwareViewholder.s_rmanager.setText("등록인 : " + data.getRegistrant());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(SoftwareMainDTO item) {datas.add(item);}
    public void setItems(List<SoftwareMainDTO> items) { this.datas = items;}
    public SoftwareMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, SoftwareMainDTO item) {datas.set(position, item);}

    public void setOnItemClickListener(OnSoftwareItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(SoftwareAdapter.SoftwareViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class SoftwareViewHolder extends RecyclerView.ViewHolder {

        private TextView s_number;
        private TextView s_title;
        private TextView s_dend;
        private TextView s_rmanager;
        private TextView s_division;

        public SoftwareViewHolder(@NonNull View itemView) {
            super(itemView);

            s_number = itemView.findViewById(R.id.item_Software_number);
            s_division = itemView.findViewById(R.id.item_Software_division);
            s_title = itemView.findViewById(R.id.item_Software_title);
            s_dend = itemView.findViewById(R.id.item_Software_date);
            s_rmanager = itemView.findViewById(R.id.item_Software_name);

            itemView.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view){
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(SoftwareAdapter.SoftwareViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(SoftwareMainDTO item){
            s_number.setText(item.getSid());
            s_division.setText(item.getDivision());
            s_title.setText(item.getRegistration_name());
            s_dend.setText(item.getRegistration_date());
            s_rmanager.setText(item.getRegistrant());
        }
    }
}
