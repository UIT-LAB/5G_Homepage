package com.uitlab.a5gappproject

import android.content.Intent
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.View
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.core.content.ContextCompat
import androidx.core.content.ContextCompat.startActivity
import kotlinx.android.synthetic.main.activity_login.*
import java.util.ArrayList

class loginActivity : AppCompatActivity(), View.OnClickListener {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val idInput:EditText = findViewById(R.id.emailInput);
        val passwordInput:EditText = findViewById(R.id.passwordInput);
        val autoLogin: CheckBox = findViewById(R.id.checkbox);

        signupButton.setOnClickListener(this)

    }

    override fun onClick(item: View?) {
        when(item!!.id) {
            R.id.signupButton -> {
                val intent = Intent(this@loginActivity, SignupActivity::class.java)
                startActivity(intent)
            }
        }
    }
}







