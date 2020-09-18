package com.uitlab.a5gappproject


import android.content.Intent
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.ListView
import androidx.appcompat.app.ActionBarDrawerToggle
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.drawerlayout.widget.DrawerLayout
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.google.android.material.navigation.NavigationView
import kotlinx.android.synthetic.main.content_main.*


class MainActivity : AppCompatActivity(),NavigationView.OnNavigationItemSelectedListener,BottomNavigationView.OnNavigationItemSelectedListener {

    var viewPager2: ViewPager2? = null
    var btnToggle: Button? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val BottomnavView: BottomNavigationView = findViewById(R.id.bottom_nav_view)
        val toolbar: Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)

        // 1. 툴바 사용 설정
        setSupportActionBar(toolbar)

        // 2. 툴바 왼쪽 버튼 설정
        supportActionBar!!.setDisplayShowTitleEnabled(true)    // 타이틀 안보이게 하기

        //검색 아이콘 기능(인텐트)

        button_bell.setOnClickListener({
            val intent = Intent(this, SearchActivity::class.java)
            startActivity(intent)
        })


        //배너
        val viewPager2: ViewPager2 = findViewById(R.id.viewPager2);
        val list: ArrayList<DataPage> = ArrayList()


        list.add(DataPage(R.drawable.back_five_photo))
        list.add(DataPage(android.R.color.holo_red_light))
        list.add(DataPage(android.R.color.holo_green_dark))
        list.add(DataPage(android.R.color.holo_orange_dark))
        list.add(DataPage(android.R.color.holo_blue_light))
        list.add(DataPage(android.R.color.holo_blue_bright))

        viewPager2.setAdapter(ViewPagerAdapter(list));
        viewPager2.setOrientation(ViewPager2.ORIENTATION_HORIZONTAL);


        /*DrawerLayout, BottomLayout 활성화 부분*/
        val drawerLayout: DrawerLayout = findViewById(R.id.drawer_layout)
        val DrawernavView: NavigationView = findViewById(R.id.drawer_nav_view)
        var toggle = ActionBarDrawerToggle(
            this,
            drawerLayout,
            toolbar,
            R.string.navigation_drawer_open,
            R.string.navigation_drawer_close
        )
        drawerLayout.addDrawerListener(toggle)
        toggle.syncState()
        DrawernavView.setNavigationItemSelectedListener(this)
        BottomnavView.setOnNavigationItemSelectedListener(this)

        //공지사항 리스트 뷰 설정
        var NoticeList = arrayListOf<NoticeItem>(
            NoticeItem("5G 프로젝트 어플 안내", "2020-09-17"),
            NoticeItem("UIT LAB 추진중", "2020-09-17"),
            NoticeItem("공지사항", "2020-09-17"),
            NoticeItem("5G 프로젝트 어플 베타", "2020-09-17")

        )

        val NoticeAdapter = NoticeAdapter(this, NoticeList)
        notice_list_show.adapter = NoticeAdapter

        //게시판 리스트 뷰 설정
        var boardList = arrayListOf<BoardItem>(
            BoardItem("Chow Chow", "2020-09-17"),
            BoardItem("Breed Pomeranian", "2020-09-17"),
            BoardItem("Golden Retriver", "2020-09-17"),
            BoardItem("oleun", "2020-09-17")
        )

        val BoardAdapter = BoardAdapter(this, boardList)
        board_list_show.adapter = BoardAdapter
    }



    override fun onNavigationItemSelected(m: MenuItem): Boolean {
        when(m.itemId){
            R.id.navigation_home -> {
                Log.e("hello", "world")
            }
            R.id.menu_search->{
                val intent = Intent(this, SearchActivity::class.java)
                startActivity(intent)
            }
        }
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when(item.itemId) {
            R.id.menu_search->{
                val intent = Intent(this, SearchActivity::class.java)
                startActivity(intent)
            }

        }

        return super.onOptionsItemSelected(item)
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        // Inflate the menu; this adds items to the action bar if it is present.
        menuInflater.inflate(R.menu.main, menu)
        return true
    }
}