package com.uitlab.a5gappproject

import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity


class dirActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dir)

        val myWebView: WebView = findViewById(R.id.main_dirwebview)
        myWebView.loadUrl("http://www.hoseo.ac.kr/Home/Contents.mbz?action=MAPP_1708220056")

        val websettings: WebSettings = myWebView.getSettings()

        websettings.javaScriptEnabled = true
        websettings.allowContentAccess = true
        websettings.javaScriptEnabled = true
        websettings.domStorageEnabled = true
        websettings.useWideViewPort = true
    }
}
