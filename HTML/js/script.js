console.log('JS ok');
console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        albums: [],
        genres: [],
        search: '',
    },
    methods: {
        getAlbums() {
            axios.get('http://localhost:8000/php-ajax-dischi/api/data-json.php').then(res => {
                this.albums = res.data;

                const genres = [];
                this.albums.forEach(album => {
                    const { genre } = album;
                    if (!genres.includes(genre)) genres.push(genre);
                });

                this.genres = genres;
            }).catch(err => {
                console.error(err);
            })
        },
        filterGenres() {
            axios.get(`http://localhost:8000/php-ajax-dischi/api/data-json.php?genre=${this.search}`).then(res => {
                this.albums = res.data;
            }).catch(err => {
                console.error(err);
            })
        }
    },
    computed: {
        /*    filteredGenre() {
               const genres = [];
               this.albums.forEach((disc) => {
                   if (!genres.includes(disc.genre)) genres.push(disc.genre);
               });
               return genres;
           },
           filteredAlbumsByGenre() {
               const filter = this.filteredGenre;
               return this.albums.filter((album) => {
                   if (album.genre == this.search || this.search == "ALL" || this.search == "")
                       return true;
               });
           },
       }, */
    },
    mounted() {
        this.getAlbums();
    }
});