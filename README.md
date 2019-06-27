

# AWS Webinar 画面の個人情報の入力を自動化するエクステンション


1. 保存機能
 - 右クリックから「登録情報の保存」をクリック.
 - クッキーに保存. [TODO] どこに保存するかは指摘もらう

2. 反映機能
 - 自動入力(デフォルト) 保存されている情報を自動で入力


ターゲット
https://pages.awscloud.com/*


## Version

 - v1.0 (2019/06/27)

## Snippets

### js cookie

```js

// SET
document.cookie = 'cookie_name=' + encodeURIComponent('outlet shoes');


// GET
//データを1つずつに分ける
var r = document.cookie.split(';');
 
r.forEach(function(value) {
 
    //cookie名と値に分ける
    var content = value.split('=');
    
    console.log( content[1] );
})
``` 

### 右クリ:コンテキストメニュー

> background.js 内で次のコードを書く。
title がメニューに表示される内容で、contexts に ContextType を指定する。
type に ItemType を指定するだけ。

```js
chrome.contextMenus.create({
    title: "コンテキストメニューを追加",
    contexts: ["all"],
    type: "normal",
    onclick: function (info) {
        console.log(info);
    }
});
```



## 連携

[Chromeブラウザの拡張機能を作ってみたい初心者向けに開発方法を紹介！【サンプルあり】 - Qiita](https://qiita.com/guru_taka/items/37a90766f4f845e963e5)

content_scripts
background
Popup

の連携をどうすrか


## background.js

インストール時に一度だけ起動

「ビューを検証バックグラウンド ページ」
から見れる。

## popup.js

ポップアップ上で「検証」を開くと別のコンソールが見れる.


content.jsでしかコンテンツを操作できない

[Manifest File Format - Google Chrome](https://developer.chrome.com/extensions/manifest)


## 編集項目
0: input#mktoCheckbox_933667_0.mktoField
1: input#mktoCheckbox_933667_1.mktoField
2: input#mktoCheckbox_933667_2.mktoField
3: input#mktoCheckbox_933668_0.mktoField
4: input#LastName.mktoField.mktoTextField.mktoHasWidth.mktoRequired
5: input#FirstName.mktoField.mktoTextField.mktoHasWidth.mktoRequired
6: input#Email.mktoField.mktoEmailField.mktoHasWidth.mktoRequired
7: input#Title.mktoField.mktoTextField.mktoHasWidth.mktoRequired
8: input#Phone.mktoField.mktoNumberField.mktoHasWidth.mktoRequired
9: input#Company.mktoField.mktoTextField.mktoHasWidth.mktoRequired
10: input#City.mktoField.mktoTextField.mktoHasWidth
11: input#PostalCode.mktoField.mktoTextField.mktoHasWidth.mktoRequired
12: input#mktoRadio_933686_0.mktoField
13: input#mktoRadio_933686_1.mktoField
14: select#Job_Role__c.mktoField.mktoHasWidth.mktoRequired
15: select#Company_Size__c.mktoField.mktoHasWidth
16: select#Industry.mktoField.mktoHasWidth.mktoRequired
17: select#Country.mktoField.mktoHasWidth.mktoRequired
18: select#Level_of_AWS_Usage__c.mktoField.mktoHasWidth.mktoRequired
19: select#Project_Timeframe__c.mktoField.mktoHasWidth
20: select#LDR_Solution_Area__c.mktoField.mktoHasWidth.mktoRequired
21: select#Marketing_Program_Field_1__c.mktoField.mktoHasWidth.mktoRequired