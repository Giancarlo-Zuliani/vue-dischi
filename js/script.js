const APP = new Vue({
  el:"#root",
  data:{
    albums: [],
    filteredAlbums : [],
    genreselected : "all"
  },
  mounted : function(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then(response => {
      this.albums = response.data.response;
      this.genreselection();
    })
  },
  methods:{
    genreselection(){
      if(this.genreselected !== "all"){
        this.filteredAlbums = this.albums.filter(item => item.genre.toLowerCase() === this.genreselected);
      }else{
        this.filteredAlbums = this.albums
      }
    }
  },
  computed:{
    genFilter : function(){
      return this.albums.filter((album) =>{
       if (this.genreselected === "all") {
         return this.albums;
       } else {
         return album.genre.toLowerCase() === this.genreselected;
    }
  })
  }
}})
