package com.example.a5g_app_project;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthEmailException;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseAuthInvalidCredentialsException;
import com.google.firebase.auth.FirebaseUser;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener{

    private FirebaseAuth mAuth = FirebaseAuth.getInstance();
    private EditText mlogin_ID, mlogin_PW;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.login);

        mlogin_ID = (EditText) findViewById(R.id.id_sign_input);
        mlogin_PW = (EditText) findViewById(R.id.pw_sign_input);

        findViewById(R.id.login_signup_btn).setOnClickListener(this);
        findViewById(R.id.login_Button).setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.login_signup_btn:
                Intent login_intent = new Intent(v.getContext(),SignUpAcitivity.class);
                startActivity(login_intent);
                break;
            case R.id.login_Button:
                mAuth.signInWithEmailAndPassword(mlogin_ID.getText().toString(), mlogin_PW.getText().toString())
                        .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                            @Override
                            public void onComplete(@NonNull Task<AuthResult> task) {
                                if (task.isSuccessful()) {
                                    FirebaseUser user = mAuth.getCurrentUser();
                                    if(user != null) {
                                        Toast.makeText(LoginActivity.this, "로그인 성공 : " + user.getUid(), Toast.LENGTH_SHORT).show();
                                        startActivity(new Intent(LoginActivity.this, MainActivity.class));
                                    }
                                } else {
                                    Toast.makeText(LoginActivity.this, "Login error.", Toast.LENGTH_SHORT).show();

                                    try {
                                        throw task.getException();
                                    }
                                    catch (FirebaseAuthInvalidCredentialsException e) {
                                        Toast.makeText(getApplicationContext(), "Invalid Password", Toast.LENGTH_LONG).show();
                                    }
                                    catch (FirebaseAuthEmailException e){
                                        Toast.makeText(getApplicationContext(), "Invalid Email", Toast.LENGTH_LONG).show();
                                    }
                                    catch (FirebaseAuthException e){
                                        Toast.makeText(getApplicationContext(), "Invalid Credentials", Toast.LENGTH_LONG).show();
                                    }
                                    catch (Exception e) {
                                        e.printStackTrace();
                                    }
                                }
                            }
                        });
        }
    }
}