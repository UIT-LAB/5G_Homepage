package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.LincenseMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnLicenseItemClickListener;
import com.example.a5g_app_project.ItemClickListener.OnNoticeItemClickListener;
import com.example.a5g_app_project.R;

import java.util.List;

public class LicenseAdapter extends RecyclerView.Adapter<LicenseAdapter.LicenseViewHolder> implements OnLicenseItemClickListener {
    private List<LincenseMainDTO> datas;

    public LicenseAdapter(List<LincenseMainDTO> datas) {
        this.datas = datas;
    }
    OnLicenseItemClickListener listener;

    @NonNull
    @Override
    public LicenseViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new LicenseAdapter.LicenseViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_license, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull LicenseViewHolder LicenseViewholder, int position) {
        LincenseMainDTO data = datas.get(position);
        LicenseViewholder.l_number.setText("제 " + data.getLid() + " 호");
        LicenseViewholder.l_division.setText("출원구분 : " + data.getApplication_category());
        LicenseViewholder.l_title.setText(data.getInvention_name());
        LicenseViewholder.l_dend.setText("출원일 : " + data.getApplication_date());
        LicenseViewholder.l_rmanager.setText("저자 : " + data.getInventor());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(LincenseMainDTO item) {datas.add(item);}
    public void setItems(List<LincenseMainDTO> items) { this.datas = items;}
    public LincenseMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, LincenseMainDTO item) {datas.set(position, item);}

    public void setOnItemClickListener(OnLicenseItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(LicenseViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class LicenseViewHolder extends RecyclerView.ViewHolder {

        private TextView l_number;
        private TextView l_title;
        private TextView l_dend;
        private TextView l_rmanager;
        private TextView l_division;

        public LicenseViewHolder(@NonNull View itemView) {
            super(itemView);

            l_number = itemView.findViewById(R.id.item_license_number);
            l_division = itemView.findViewById(R.id.item_license_division);
            l_title = itemView.findViewById(R.id.item_license_title);
            l_dend = itemView.findViewById(R.id.item_license_date);
            l_rmanager = itemView.findViewById(R.id.item_license_name);

            itemView.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view){
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(LicenseViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(LincenseMainDTO item){
            l_number.setText(item.getLid());
            l_division.setText(item.getApplication_category());
            l_title.setText(item.getInvention_name());
            l_dend.setText(item.getApplication_date());
            l_rmanager.setText(item.getInventor());
        }
    }
}