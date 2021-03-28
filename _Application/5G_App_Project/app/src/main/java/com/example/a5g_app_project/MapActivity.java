package com.example.a5g_app_project;

import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.AppCompatActivity;

public class MapActivity extends AppCompatActivity {
    private WebView MapView;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.map);

        MapView = findViewById(R.id.map_webview);

        // java script 활성화
        MapView.getSettings().setJavaScriptEnabled(true);

        // WebChromeClient 설정 - 브라우저 이벤트 구현을 위해 필요
        MapView.setWebChromeClient(new WebChromeClient());

        // WebViewClient 설정 - 새 페이지를 띄울 때 새 창이 아닌 현재 view에서 띄우기 위해 필요
        MapView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                // 새 페이지를 띄울 때 현재 view에서 띄우도록 설정
                view.loadUrl(url);
                return true;
            }
        });

        MapView.loadUrl("http://www.hoseo.ac.kr/Home/Contents.mbz?action=MAPP_1708220056");
    }


    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if ((keyCode == KeyEvent.KEYCODE_BACK) && MapView.canGoBack()) {
            MapView.goBack();
            return true;
        } else {
            finish();
        }
        return true;
    }
}

