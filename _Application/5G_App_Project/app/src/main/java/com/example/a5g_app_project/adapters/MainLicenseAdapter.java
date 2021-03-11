package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.LincenseMainDTO;
import com.example.a5g_app_project.R;

import java.util.List;

public class MainLicenseAdapter extends RecyclerView.Adapter<MainLicenseAdapter.MainLicenseViewHolder>{
    private List<LincenseMainDTO> datas;

    public MainLicenseAdapter(List<LincenseMainDTO> datas) {
        this.datas = datas;
    }

    @NonNull
    @Override
    public MainLicenseViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new MainLicenseAdapter.MainLicenseViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_main_license, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull MainLicenseViewHolder MainLicenseViewHolder, int position) {
        LincenseMainDTO data = datas.get(position);
        MainLicenseViewHolder.title.setText(data.getInvention_name());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(LincenseMainDTO item) {datas.add(item);}
    public void setItems(List<LincenseMainDTO> items) { this.datas = items;}
    public LincenseMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, LincenseMainDTO item) {datas.set(position, item);}


    public class MainLicenseViewHolder extends RecyclerView.ViewHolder {

        private TextView title;

        public MainLicenseViewHolder(@NonNull View itemView) {
            super(itemView);

            title = itemView.findViewById(R.id.item_main_license_title);

        }

        public void setItem(LincenseMainDTO item){
            title.setText(item.getInvention_name());
        }
    }
}