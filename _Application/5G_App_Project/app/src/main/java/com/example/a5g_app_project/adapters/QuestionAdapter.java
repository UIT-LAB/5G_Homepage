package com.example.a5g_app_project.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.DTO.QuestionMainDTO;
import com.example.a5g_app_project.ItemClickListener.OnQuestionItemClickListener;
import com.example.a5g_app_project.models.Question;
import com.example.a5g_app_project.R;

import java.util.List;

public class QuestionAdapter extends RecyclerView.Adapter<QuestionAdapter.QuestionViewHolder> implements OnQuestionItemClickListener {
    private List<QuestionMainDTO> datas;

    public QuestionAdapter(List<QuestionMainDTO> datas) {
        this.datas = datas;
    }
    OnQuestionItemClickListener listener;

    @NonNull
    @Override
    public QuestionAdapter.QuestionViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        return new QuestionAdapter.QuestionViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_question, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull QuestionAdapter.QuestionViewHolder QuestionViewholder, int position) {
        QuestionMainDTO data = datas.get(position);
        QuestionViewholder.title.setText(data.getQ_title());
        QuestionViewholder.timestamp.setText(data.getQ_writer_date());

    }

    @Override
    public int getItemCount() {
        return datas.size();
    }
    public void addItem(QuestionMainDTO item) {datas.add(item);}
    public void setItems(List<QuestionMainDTO> items) { this.datas = items;}
    public QuestionMainDTO getItem(int position) { return datas.get(position);}
    public void setItem(int position, QuestionMainDTO item) {datas.set(position, item);}

    public void setOnItemClickListener(OnQuestionItemClickListener listener) {
        this.listener = listener;
    }


    @Override
    public void onItemClick(QuestionAdapter.QuestionViewHolder holder, View view, int position) {
        if (listener != null) {
            listener.onItemClick(holder, view, position);
        }
    }


    public class QuestionViewHolder extends RecyclerView.ViewHolder {

        private TextView nicname;
        private TextView title;
        private TextView timestamp;

        public QuestionViewHolder(@NonNull View itemView) {
            super(itemView);

            nicname = itemView.findViewById(R.id.item_question_nicname);
            title = itemView.findViewById(R.id.item_question_title);
            timestamp = itemView.findViewById(R.id.item_question_date);

            itemView.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view){
                    int position = getAdapterPosition();

                    if (listener != null) {
                        listener.onItemClick(QuestionAdapter.QuestionViewHolder.this, view, position);
                    }
                }
            });
        }

        public void setItem(QuestionMainDTO item){
            title.setText(item.getQ_title());
            timestamp.setText(item.getQ_writer_date());
        }
    }
}