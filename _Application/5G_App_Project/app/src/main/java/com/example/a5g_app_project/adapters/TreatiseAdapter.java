package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.TreatiseMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnTreatiseItemClickListener;
import com.example.a5g_app_project.R;

import java.util.List;

public class TreatiseAdapter extends RecyclerView.Adapter<TreatiseAdapter.TreatiseViewHolder> implements OnTreatiseItemClickListener {
    private List<TreatiseMainDTO> datas;

    public TreatiseAdapter(List<TreatiseMainDTO> datas) {
        this.datas = datas;
    }
    OnTreatiseItemClickListener listener;

    @NonNull
    @Override
    public TreatiseViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new TreatiseAdapter.TreatiseViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_treatise, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull TreatiseViewHolder TreatiseViewholder, int position) {
        TreatiseMainDTO data = datas.get(position);
        TreatiseViewholder.t_number.setText("제 " + data.getTid() + " 호");
        TreatiseViewholder.t_division.setText("구분 : " + data.getThesis_division());
        TreatiseViewholder.t_title.setText(data.getThesis_name());
        TreatiseViewholder.t_dend.setText("출판 일자 : " + data.getJournal_date());
        TreatiseViewholder.t_rmanager.setText("주 저자 : " + data.getLead_author_name());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(TreatiseMainDTO item) {datas.add(item);}
    public void setItems(List<TreatiseMainDTO> items) { this.datas = items;}
    public TreatiseMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, TreatiseMainDTO item) {datas.set(position, item);}

    public void setOnItemClickListener(OnTreatiseItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(TreatiseViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class TreatiseViewHolder extends RecyclerView.ViewHolder {

        private TextView t_number;
        private TextView t_title;
        private TextView t_dend;
        private TextView t_rmanager;
        private TextView t_division;

        public TreatiseViewHolder(@NonNull View itemView) {
            super(itemView);

            t_number = itemView.findViewById(R.id.item_treatise_number);
            t_division = itemView.findViewById(R.id.item_treatise_division);
            t_title = itemView.findViewById(R.id.item_treatise_title);
            t_dend = itemView.findViewById(R.id.item_treatise_date);
            t_rmanager = itemView.findViewById(R.id.item_treatise_name);

            itemView.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view){
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(TreatiseViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(TreatiseMainDTO item){
            t_number.setText(item.getTid());
            t_division.setText(item.getThesis_division());
            t_title.setText(item.getJournal_name());
            t_dend.setText(item.getJournal_date());
            t_rmanager.setText(item.getLead_author_name());
        }
    }
}