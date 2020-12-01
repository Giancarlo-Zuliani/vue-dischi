const APP = new Vue({
  el:"#root",
  data:{
    albums: []
  },
  mounted : function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then(response => {
      this.albums = response.data.response;
    })
  }
})
