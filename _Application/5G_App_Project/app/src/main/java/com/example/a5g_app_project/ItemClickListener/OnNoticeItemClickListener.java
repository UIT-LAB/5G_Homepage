package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import androidx.recyclerview.widget.RecyclerView;

import com.example.a5g_app_project.adapters.NoticeAdapter;

public interface OnNoticeItemClickListener {
    public void onItemClick (NoticeAdapter.NoticeViewHolder holder, View view, int position);
}
