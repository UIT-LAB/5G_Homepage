package com.uitlab.a5gappproject

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.View
import android.widget.EditText
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity
import java.util.*


class SearchActivity : AppCompatActivity() {
    private var list
            : MutableList<String>? = null
    private var listView
            : ListView? = null
    private var editSearch
            : EditText? = null
    private var adapter
            : SearchAdapter? = null
    private var arraylist: ArrayList<String>? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_search)

        editSearch = findViewById<View>(R.id.editSearch) as EditText
        listView = findViewById<View>(R.id.listView) as ListView

        // 리스트를 생성
        list = ArrayList()

        // 검색에 사용할 데이터 저장
        settingList()

        // 리스트의 모든 데이터를 arraylist에 복사
        arraylist = ArrayList()
        arraylist!!.addAll(list as ArrayList<String>)

        // 리스트에 연동될 아답터를 생성
        adapter = SearchAdapter(list as ArrayList<String>, this)

        // 리스트뷰에 Adapter 연결
        listView!!.setAdapter(adapter)

        editSearch!!.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(charSequence: CharSequence, i: Int, i1: Int, i2: Int) {}
            override fun onTextChanged(charSequence: CharSequence, i: Int, i1: Int, i2: Int) {}
            override fun afterTextChanged(editable: Editable) {

                val text = editSearch!!.text.toString()
                search(text)
            }
        })
    }

    // 검색을 수행하는 메소드
    fun search(charText: String) {

        // 문자 입력시 리스트 지우고 새롭게 생성 살려줘...
        list!!.clear()

        // 문자 입력이 없을때는 모든 데이터 보임
        if (charText.length == 0) {
            list!!.addAll(arraylist!!)
        } else {
            // 리스트의 모든 데이터를 검색
            for (i in arraylist!!.indices) {
                if (arraylist!![i].toLowerCase().contains(charText)) {
                    // 검색된 데이터를 리스트에 추가
                    list!!.add(arraylist!![i])
                }
            }
        }

        adapter!!.notifyDataSetChanged()
    }

    // 검색에 사용될 데이터를 리스트에 추가한다.
    private fun settingList() {
        list!!.add("김득회")
        list!!.add("김영재")
        list!!.add("권순영")
        list!!.add("이규환")
        list!!.add("송준하")
        list!!.add("정승원")
        list!!.add("김동헌")
        list!!.add("apple")
        list!!.add("banana")
        list!!.add("cookie")
        list!!.add("Android")
    }
}