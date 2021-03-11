package com.example.a5g_app_project.ItemClickListener;

import android.view.View;

import com.example.a5g_app_project.adapters.LicenseAdapter;

public interface OnLicenseItemClickListener {
    public void onItemClick (LicenseAdapter.LicenseViewHolder holder, View view, int position);
}
