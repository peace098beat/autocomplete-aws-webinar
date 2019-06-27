
/*

 - Auto Webinar -


:編集項目:
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


*/

// debug
console.log("load content.js");



/*
 * global
 */
// none

/* 
 * Lister
 */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("contet.js: msg");

  console.log(msg);//送られたメッセージをキャッチ
  sendResponse(msg);//sendResponseでmsgを送ったスクリプト側にレスを返せる

  if (msg["action"] == "save"){


	var result = window.confirm('フォームの内容を保存しますか?');
	if (result){
  		save();

	  	alert("保存しました");
	}


  }

  if (msg["action"] == "load"){

  	load();

  }

});


// SAVE
function save(){
	
	console.log("SAVE Cookie");

	$.cookie("webinar-LastName", $("form.mktoForm input#LastName")[0].value);
	$.cookie("webinar-FirstName", $("form.mktoForm input#FirstName")[0].value);
	$.cookie("webinar-Email", $("form.mktoForm input#Email")[0].value);
	$.cookie("webinar-Job_Role__c", $("form.mktoForm select#Job_Role__c")[0].selectedIndex);
	$.cookie("webinar-Title", $("form.mktoForm input#Title")[0].value);
	$.cookie("webinar-Phone", $("form.mktoForm input#Phone")[0].value);
	$.cookie("webinar-Company", $("form.mktoForm input#Company")[0].value);
	$.cookie("webinar-Company_Size__c", $("form.mktoForm select#Company_Size__c")[0].selectedIndex);
	$.cookie("webinar-Industry", $("form.mktoForm select#Industry")[0].selectedIndex);
	$.cookie("webinar-Country", $("form.mktoForm select#Country")[0].selectedIndex);
	$.cookie("webinar-City", $("form.mktoForm input#City")[0].value);
	$.cookie("webinar-PostalCode", $("form.mktoForm input#PostalCode")[0].value);
	$.cookie("webinar-Level_of_AWS_Usage__c", $("form.mktoForm select#Level_of_AWS_Usage__c")[0].selectedIndex);
	$.cookie("webinar-Project_Timeframe__c", $("form.mktoForm select#Project_Timeframe__c")[0].selectedIndex);
	$.cookie("webinar-LDR_Solution_Area__c", $("form.mktoForm select#LDR_Solution_Area__c")[0].selectedIndex);
	$.cookie("webinar-Marketing_Program_Field_1__c", $("form.mktoForm select#Marketing_Program_Field_1__c")[0].selectedIndex);
}


// LOAD
function load(){


	$("form.mktoForm input#LastName")[0].value = $.cookie("webinar-LastName");
	$("form.mktoForm input#FirstName")[0].value = $.cookie("webinar-FirstName");
	$("form.mktoForm input#Email")[0].value = $.cookie("webinar-Email");
	$("form.mktoForm select#Job_Role__c")[0].selectedIndex = $.cookie("webinar-Job_Role__c");
	$("form.mktoForm input#Title")[0].value = $.cookie("webinar-Title");
	$("form.mktoForm input#Phone")[0].value = $.cookie("webinar-Phone");
	$("form.mktoForm input#Company")[0].value = $.cookie("webinar-Company");
	$("form.mktoForm select#Company_Size__c")[0].selectedIndex = $.cookie("webinar-Company_Size__c");
	$("form.mktoForm select#Industry")[0].selectedIndex = $.cookie("webinar-Industry");
	$("form.mktoForm select#Country")[0].selectedIndex = $.cookie("webinar-Country");
	$("form.mktoForm input#City")[0].value = $.cookie("webinar-City");
	$("form.mktoForm input#PostalCode")[0].value = $.cookie("webinar-PostalCode");
	$("form.mktoForm select#Level_of_AWS_Usage__c")[0].selectedIndex = $.cookie("webinar-Level_of_AWS_Usage__c");
	$("form.mktoForm select#Project_Timeframe__c")[0].selectedIndex = $.cookie("webinar-Project_Timeframe__c");
	$("form.mktoForm select#LDR_Solution_Area__c")[0].selectedIndex = $.cookie("webinar-LDR_Solution_Area__c");
	$("form.mktoForm select#Marketing_Program_Field_1__c")[0].selectedIndex = $.cookie("webinar-Marketing_Program_Field_1__c");


	console.log("load");

	$("form.mktoForm").before("<div><p class='red'><big>自動挿入しました</big></p></div>")
}



window.onload = function() {

	// debug
	document.body.insertAdjacentHTML('afterbegin','<div>Contorol now</div>');


	// form submit buttom click
	$("button.mktoButton").on("click", function(elm){

		var result = window.confirm('フォームの内容を保存しますか?');
		if (result) {
			save();
		}

	});

	// load
	load();

};

// --- end ---
// mktoFormだけを取り出す


// - Get Elemtns


/*
 * - Filter Input
 */
// function get_inputs_elems(){
	
// 	var inputs_childs = $("form.mktoForm").find('input');
// 	var filtered_childs = [];


// 	for(var i=0; i<inputs_childs.length; i++){
// 		var c = inputs_childs[i];

// 		if (c.type == "hidden") { break }
// 		else {
// 			filtered_childs.push(c);
// 		}
// 	}
// 	return filtered_childs;
// }


/*
 * - Filter Select Option
 */
// function get_select_elems(){

// 	var select_childs = $("form.mktoForm").find('select');
// 	var filtered_childs = [];

// 	for(var i=0; i<select_childs.length; i++){
// 		var c = select_childs[i];

// 		if (c.type == "hidden") { break }
// 		else {
// 			filtered_childs.push(c);
// 		}
// 	}
// 	return filtered_childs;

// }


