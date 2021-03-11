package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import com.example.a5g_app_project.adapters.StandardAdapter;

public interface OnStandardItemClickListener {
    public void onItemClick (StandardAdapter.StandardViewHolder holder, View view, int position);

}
