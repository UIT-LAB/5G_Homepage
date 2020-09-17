package com.uitlab.a5gappproject

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import java.util.ArrayList

class NoticeAdapter (val context: Context, val NoticeList: ArrayList<NoticeItem>) : BaseAdapter() {
    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val view: View = LayoutInflater.from(context).inflate(R.layout.notice_list, null)
        val Notices = view.findViewById<TextView>(R.id.notice_title)
        val date = view.findViewById<TextView>(R.id.notice_date)

        val board = NoticeList[position]
        Notices.text = board.Notice
        date.text = board.date

        return view
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
