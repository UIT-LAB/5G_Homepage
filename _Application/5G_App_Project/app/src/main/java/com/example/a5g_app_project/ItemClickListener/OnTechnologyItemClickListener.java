package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import com.example.a5g_app_project.adapters.TechnologyAdapter;

public interface OnTechnologyItemClickListener {
    public void onItemClick (TechnologyAdapter.TechnologyViewHolder holder, View view, int position);
}
