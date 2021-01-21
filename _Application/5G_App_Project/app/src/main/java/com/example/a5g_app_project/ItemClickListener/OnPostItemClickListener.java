package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import com.example.a5g_app_project.adapters.NoticeAdapter;
import com.example.a5g_app_project.adapters.PostAdapter;

public interface OnPostItemClickListener {
    public void onItemClick (PostAdapter.PostViewHolder holder, View view, int position);
}
