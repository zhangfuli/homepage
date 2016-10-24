// function add_left () {
// 	var pt=prompt("请输入文本和网址，中间用&隔开","XXX&http://XXX");
//   	console.log(pt);
//   	array = pt.split('&');
// 	var leftbuttons=$('.left').find($('button'));
// 	var button_left = $('<button class="button_left">'+array[0]+'</button>');
// 	$('.button_add').before(button_left);
// }
//跨域
Vue.http.interceptors.push((request, next) => {
    request.credentials = true
    next()
});
var vm = new Vue({
	el:"#vue",
	data:{
		left_lists : []
	},
	methods:{
		add_left : function(){
				var pt=prompt("请输入文本和网址，中间用&隔开","XXX&http://XXX");
			  	console.log(pt);
			  	array = pt.split('&');
				var leftbuttons=$('.left').find($('button'));
				var button_left = $('<button class="button_left">'+array[0]+'</button>');
				$('.button_add').before(button_left);
			}
	}
	
});
Vue.http.get(config.appurl + '/showfilelist').then((response)=> {
	left_lists.lists = response.data;
});