// popup.js

/*
 * save btn click
 */
var save_btn = document.getElementById('save');

save_btn.onclick = function(elm){

	console.log("click: save_btn");

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {action: "save"}, function(response) {
	    console.log(response.farewell);
	  });
	});

};

/*
 * load btn click
 */
var load_btn = document.getElementById('load');

load_btn.onclick = function(elm){

	console.log("click: load_btn");

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {action: "load"}, function(response) {
	    console.log(response.farewell);
	  });
	});

};
