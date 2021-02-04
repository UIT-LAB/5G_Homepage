package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.TreatiseMainDTO;
import com.example.a5g_app_project.R;

import java.util.List;

public class MainTreatiseAdapter extends RecyclerView.Adapter<MainTreatiseAdapter.MainTreatiseViewHolder>{
    private List<TreatiseMainDTO> datas;

    public MainTreatiseAdapter(List<TreatiseMainDTO> datas) {
        this.datas = datas;
    }

    @NonNull
    @Override
    public MainTreatiseViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new MainTreatiseAdapter.MainTreatiseViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_main_treatise, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull MainTreatiseViewHolder MainTreatiseViewHolder, int position) {
        TreatiseMainDTO data = datas.get(position);
        MainTreatiseViewHolder.title.setText(data.getResearch_name_ko());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(TreatiseMainDTO item) {datas.add(item);}
    public void setItems(List<TreatiseMainDTO> items) { this.datas = items;}
    public TreatiseMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, TreatiseMainDTO item) {datas.set(position, item);}


    public class MainTreatiseViewHolder extends RecyclerView.ViewHolder {

        private TextView title;

        public MainTreatiseViewHolder(@NonNull View itemView) {
            super(itemView);

            title = itemView.findViewById(R.id.item_main_treatise_title);

        }

        public void setItem(TreatiseMainDTO item){
            title.setText(item.getResearch_name_ko());
        }
    }
}