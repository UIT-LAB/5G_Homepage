package com.uitlab.a5gappproject

import android.R
import android.content.Context
import android.graphics.drawable.Drawable
import android.opengl.ETC1.getWidth
import android.text.Editable
import android.text.TextWatcher
import android.util.AttributeSet
import android.view.MotionEvent
import android.view.View
import androidx.appcompat.widget.AppCompatEditText
import androidx.core.content.ContextCompat
import androidx.core.content.res.TypedArrayUtils.getText
import androidx.core.graphics.drawable.DrawableCompat
import java.security.AccessController.getContext

class ClearEditText : AppCompatEditText, TextWatcher, View.OnTouchListener,
    View.OnFocusChangeListener {
    private var clearDrawable: Drawable? = null
    private var onTouchListener: OnTouchListener? = null


    constructor(context: Context?) : super(context) {
        init()
    }

    constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
        init()
    }

    constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(
        context,
        attrs,
        defStyleAttr
    ) {
        init()
    }



    override fun setOnTouchListener(onTouchListener: OnTouchListener) {
        this.onTouchListener = onTouchListener
    }

    private fun init() {
        val tempDrawable = ContextCompat.getDrawable(context, R.drawable.ic_delete)
        clearDrawable = DrawableCompat.wrap(tempDrawable!!)
        DrawableCompat.setTintList(clearDrawable!!, hintTextColors)
        clearDrawable!!.setBounds(
            0, 0,
            clearDrawable!!.getIntrinsicWidth(),
            clearDrawable!!.getIntrinsicHeight()
        )
        setClearIconVisible(false)
        super.setOnTouchListener(this)
        super.setOnFocusChangeListener(this)
        addTextChangedListener(this)
    }

    override fun setOnFocusChangeListener(onFocusChangeListener: OnFocusChangeListener) {
        this.onFocusChangeListener = onFocusChangeListener
    }

    override fun onFocusChange(view: View?, hasFocus: Boolean) {
        if (hasFocus) {
            setClearIconVisible(text!!.length > 0)
        } else {
            setClearIconVisible(false)
        }
        if (onFocusChangeListener != null) {
            onFocusChangeListener!!.onFocusChange(view, hasFocus)
        }
    }

    override fun onTouch(view: View?, motionEvent: MotionEvent): Boolean {
        val x = motionEvent.x.toInt()
        if (clearDrawable!!.isVisible && x > width - paddingRight - clearDrawable!!.intrinsicWidth) {
            if (motionEvent.action == MotionEvent.ACTION_UP) {
                error = null
                setText(null)
            }
            return true
        }
        return if (onTouchListener != null) {
            onTouchListener!!.onTouch(view, motionEvent)
        } else {
            false
        }
    }

    override fun onTextChanged(s: CharSequence, start: Int, before: Int, count: Int) {
        if (isFocused) {
            setClearIconVisible(s.length > 0)
        }
    }

    override fun beforeTextChanged(s: CharSequence, start: Int, count: Int, after: Int) {}
    override fun afterTextChanged(s: Editable) {}
    private fun setClearIconVisible(visible: Boolean) {
        clearDrawable!!.setVisible(visible, false)
        setCompoundDrawables(null, null, if (visible) clearDrawable else null, null)
    }
}