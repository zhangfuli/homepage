//跨域
Vue.http.interceptors.push((request, next) => {
    request.credentials = true
    next()
});
var vm = new Vue({

	el:"#vue",
	data:{
		url:"http://localhost:8086/homepage/",
		left_lists:{},
		centers:{},
		centerlength:''
	},
	methods:{
		//获得左侧tab
		get_left:function(){
			this.$http.get(this.url+"tab/showall").then(function(response){
				this.left_lists=response.data;
			})
		},
		//获得锚链接  name、icon
		left_button_click: function(index){
			index = index + 1;
			if(!index){
				this.$http.get(this.url+"app/showbytab?tabid=1").then(function(response){
					this.centers =  response.data;
					this.centerlength = response.data.length;
				
				})
			}else{
				this.$http.get(this.url+"app/showbytab?tabid="+index).then(function(response){
					this.centers =  response.data;
					this.centers =  response.data;
					this.centerlength = response.data.length;
				})
			}	  
		},
		//用于删除多余的图片连接
		none:function(index){
			index = index + 1;
			if(index == this.centerlength){
				return false;
			}else{
				return true;
			}
		},
		//用于删除左侧tab
		delete_tab:function(index){
			var tab_id = this.left_lists[index].id;
			this.$http.get(this.url+"tab/delete?id="+tab_id).then(function(response){
				if(response.data.code==0){
					this.left_lists.splice(index,1);
					alert("删除成功");
				}else{
					alert("未知错误")
				}
			})
		}
	},
});
vm.get_left();
vm.left_button_click();


