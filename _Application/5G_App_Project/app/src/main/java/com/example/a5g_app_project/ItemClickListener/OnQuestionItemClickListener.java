package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import com.example.a5g_app_project.adapters.PostAdapter;
import com.example.a5g_app_project.adapters.QuestionAdapter;

public interface OnQuestionItemClickListener {
    public void onItemClick (QuestionAdapter.QuestionViewHolder holder, View view, int position);

}
