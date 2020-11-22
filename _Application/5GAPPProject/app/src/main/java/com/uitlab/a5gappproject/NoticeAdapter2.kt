package com.uitlab.a5gappproject

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import java.util.ArrayList

class NoticeAdapter2 (val context: Context, val NoticeList: ArrayList<NoticeItem>) : BaseAdapter() {
    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val view2: View = LayoutInflater.from(context).inflate(R.layout.notice, null)
        val Notices2 = view2.findViewById<TextView>(R.id.noticearticle)
        val date2 = view2.findViewById<TextView>(R.id.noticedate)
        val name2 = view2.findViewById<TextView>(R.id.noticename)

        val board = NoticeList[position]
        Notices2.text = board.Notice
        date2.text = board.date
        name2.text = board.name


        return view2
    }

    override fun getItem(position: Int): Any {
        return NoticeList[position]
    }

    override fun getItemId(position: Int): Long {
        return 0
    }

    override fun getCount(): Int {
        return NoticeList.size
    }
}