package com.uitlab.a5gappproject

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView

class BoardAdapter (val context: Context, val boardList: ArrayList<BoardItem>) : BaseAdapter() {
    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val view: View = LayoutInflater.from(context).inflate(R.layout.board_list, null)
        val board_title = view.findViewById<TextView>(R.id.board_title)
        val board_date = view.findViewById<TextView>(R.id.board_date)

        val board = boardList[position]
        board_title.text = board.board
        board_date.text = board.date

        return view
    }

    override fun getItem(position: Int): Any {
        return boardList[position]
    }

    override fun getItemId(position: Int): Long {
        return 0
    }

    override fun getCount(): Int {
        return boardList.size
    }
}