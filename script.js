function add_left () {
	var pt=prompt("请输入文本和网址，中间用&隔开","XXX&http://XXX");
  	console.log(pt);
  	array = pt.split('&');
	var leftbuttons=$('.left').find($('button'));
	var button_left = $('<button class="button_left">'+array[0]+'</button>');
	$('.button_add').before(button_left);
}
function fs(){
	var fs = require('fs');
	fs.readFile('somefile.txt','utf8',function(err,data){
		if(err) throw err;
		console.log(data);
	});
}
fs();