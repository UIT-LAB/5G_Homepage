package com.uitlab.a5gappproject

import android.view.View
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView


class ViewHolderPage internal constructor(itemView: View) :
    RecyclerView.ViewHolder(itemView) {
    private val tv_title: TextView
    private val rl_layout: RelativeLayout
    var data: DataPage? = null
    fun onBind(data: DataPage) {
        this.data = data
        rl_layout.setBackgroundResource(data.color)
    }

    init {
        tv_title = itemView.findViewById(R.id.tv_title)
        rl_layout = itemView.findViewById(R.id.rl_layout)
    }
}