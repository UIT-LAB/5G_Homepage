package com.example.a5g_app_project;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Handler;
import android.os.Bundle;
import android.widget.Toast;

public class Splash extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.splash);

        int status = NetworkStatus.getConnectivityStatus(getApplicationContext());
        if(status == NetworkStatus.TYPE_MOBILE){
            Toast.makeText(getApplicationContext(), "LTE로 연결 중...", Toast.LENGTH_SHORT).show();
            Handler hd = new Handler();
            hd.postDelayed(new splashhandler(), 2000); // 1초 후에 hd handler 실행  3000ms = 3초
        }else if (status == NetworkStatus.TYPE_WIFI){
            Toast.makeText(getApplicationContext(), "WI-FI로 연결 중...", Toast.LENGTH_SHORT).show();
            Handler hd = new Handler();
            hd.postDelayed(new splashhandler(), 2000); // 1초 후에 hd handler 실행  3000ms = 3초
        }else {
           showDialog();
        }

    }

    private class splashhandler implements Runnable{
        public void run(){
            startActivity(new Intent(getApplication(), MainActivity.class)); //로딩이 끝난 후, ChoiceFunction 이동
            Splash.this.finish(); // 로딩페이지 Activity stack에서 제거
        }
    }

    @Override
    public void onBackPressed() {
        //초반 플래시 화면에서 넘어갈때 뒤로가기 버튼 못누르게 함
    }



    void showDialog() {
        AlertDialog.Builder networkstatusBuilder = new AlertDialog.Builder(Splash.this, R.style.MyDialogTheme)
                .setTitle("네트워크 연결 오류")
                .setMessage("\n네트워크 연결 이후 앱 실행 부탁드립니다.")
                .setPositiveButton("종료", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        finish();
                    }
                });

        AlertDialog msDlg = networkstatusBuilder.create();
        msDlg.show();
    }
}


