const APP = new Vue({
  el:"#root",
  data:{
    albums: [],
    genreselected : "all"
  },
  mounted : function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then(response => {
      this.albums = response.data.response;
    })
  },
  methods:{
    genreselection(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then(response => {
        this.albums = response.data.response;
        if(this.genreselected !== "all"){
          this.albums = this.albums.filter(item => item.genre.toLowerCase() === this.genreselected);
        }
      })
    }
  }
})
