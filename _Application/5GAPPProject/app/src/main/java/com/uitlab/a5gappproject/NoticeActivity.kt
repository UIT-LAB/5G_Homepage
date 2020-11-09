package com.uitlab.a5gappproject

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_board.*


class NoticeActivity : AppCompatActivity(){
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_board)

        //공지사항 리스트 뷰 설정
        var NoticeList = arrayListOf<NoticeItem>(
            NoticeItem("5G 프로젝트 어플 안내", "2020-09-17", "관리자"),
            NoticeItem("UIT LAB 추진중", "2020-09-17", "관리자"),
            NoticeItem("12월 17일 오른 새로운 스킨 임박!", "2020-11-10", "오른"),
            NoticeItem("5G 프로젝트 어플 베타", "2020-09-17", "관리자")

        )

        val NoticeAdapter = NoticeAdapter2(this, NoticeList)
        notice_listview2.adapter = NoticeAdapter

    }
}