package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import com.example.a5g_app_project.adapters.SoftwareAdapter;

public interface OnSoftwareItemClickListener {
    public void onItemClick (SoftwareAdapter.SoftwareViewHolder holder, View view, int position);
}
