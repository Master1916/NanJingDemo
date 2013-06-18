package com.litsoft.nanjingdemo;

import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.KeyEvent;

import com.phonegap.DroidGap;

public class MyPhoneGapActivity extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index2.html");
	}

	/*protected void dialog() {

		AlertDialog.Builder builder = new Builder(MyPhoneGapActivity.this);

		builder.setMessage("确定要退出吗?");

		builder.setTitle("提示");

		builder.setPositiveButton("确认",

		new android.content.DialogInterface.OnClickListener() {

			@Override
			public void onClick(DialogInterface dialog, int which) {

				dialog.dismiss();

				MyPhoneGapActivity.this.finish();

			}

		});

		builder.setNegativeButton("取消",

		new android.content.DialogInterface.OnClickListener() {

			@Override
			public void onClick(DialogInterface dialog, int which) {

				dialog.dismiss();

			}

		});

		builder.create().show();

	}

	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {

		if (keyCode == KeyEvent.KEYCODE_BACK && event.getRepeatCount() == 0) {

			dialog();

			return false;

		}

		return false;

	}*/

}