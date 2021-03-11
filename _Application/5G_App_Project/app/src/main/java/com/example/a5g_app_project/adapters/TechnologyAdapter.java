package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.TechnologyMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnTechnologyItemClickListener;
import com.example.a5g_app_project.R;

import java.util.List;

public class TechnologyAdapter extends RecyclerView.Adapter<TechnologyAdapter.TechnologyViewHolder> implements OnTechnologyItemClickListener {
    private List<TechnologyMainDTO> datas;

    public TechnologyAdapter(List<TechnologyMainDTO> datas) {
        this.datas = datas;
    }

    OnTechnologyItemClickListener listener;

    @NonNull
    @Override
    public TechnologyAdapter.TechnologyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new TechnologyAdapter.TechnologyViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_technology, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull TechnologyAdapter.TechnologyViewHolder TechnologyViewholder, int position) {
        TechnologyMainDTO data = datas.get(position);
        TechnologyViewholder.t_number.setText("제 " + data.getTid() + " 호");
        TechnologyViewholder.t_division.setText("기술활용형태 : " + data.getTechApplication_form());
        TechnologyViewholder.t_title.setText(data.getTech_name());
        TechnologyViewholder.t_dend.setText("사업 연도 : " + data.getBusiness_year());
        TechnologyViewholder.t_rmanager.setText("소유기관 : " + data.getRAI_name());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }

    public void addItem(TechnologyMainDTO item) {
        datas.add(item);
    }

    public void setItems(List<TechnologyMainDTO> items) {
        this.datas = items;
    }

    public TechnologyMainDTO getItem(int position) {
        return datas.get(position);
    }

    public void setItem(int position, TechnologyMainDTO item) {
        datas.set(position, item);
    }

    public void setOnItemClickListener(OnTechnologyItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(TechnologyAdapter.TechnologyViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class TechnologyViewHolder extends RecyclerView.ViewHolder {

        private TextView t_number;
        private TextView t_title;
        private TextView t_dend;
        private TextView t_rmanager;
        private TextView t_division;

        public TechnologyViewHolder(@NonNull View itemView) {
            super(itemView);

            t_number = itemView.findViewById(R.id.item_technology_number);
            t_division = itemView.findViewById(R.id.item_technology_division);
            t_title = itemView.findViewById(R.id.item_technology_title);
            t_dend = itemView.findViewById(R.id.item_technology_date);
            t_rmanager = itemView.findViewById(R.id.item_technology_name);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(TechnologyAdapter.TechnologyViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(TechnologyMainDTO item) {
            t_number.setText(item.getTid());
            t_division.setText(item.getTechApplication_form());
            t_title.setText(item.getTech_name());
            t_dend.setText(item.getBusiness_year());
            t_rmanager.setText(item.getRAI_name());
        }
    }
}
