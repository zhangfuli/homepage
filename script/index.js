//跨域
Vue.http.interceptors.push((request, next) => {
    request.credentials = true
    next()
});
var vm = new Vue({

	el:"#vue",
	data:{
		left_lists:{},
		centers:{},
		centerlength:''
	},
	methods:{
		get_left:function(){
			this.$http.get(url.localhost+"/homepage/tab/showall").then(function(response){
				this.left_lists=response.data;
			})
		},
		//获得锚链接  name、icon
		left_button_click: function(index){
			index = index + 1;
			if(!index){
				this.$http.get(url.localhost+"/homepage/app/showbytab?tabid=1").then(function(response){
					this.centers =  response.data;
					this.centerlength = response.data.length;
				
				})
			}else{
				this.$http.get(url.localhost+"/homepage/app/showbytab?tabid="+index).then(function(response){
					this.centers =  response.data;
					this.centers =  response.data;
					this.centerlength = response.data.length;
				})
			}	  
		},
		none:function(index){
			index = index + 1;
	
			if(index == this.centerlength){
				return false;
			}else{
				return true;
			}
		}
	},
});
vm.get_left();
vm.left_button_click();


