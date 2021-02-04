package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import com.example.a5g_app_project.adapters.TreatiseAdapter;

public interface OnTreatiseItemClickListener {
    public void onItemClick (TreatiseAdapter.TreatiseViewHolder holder, View view, int position);
}
