
// debug
console.log("load content.js");


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

	console.log("SAVE Cookie");
	
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
