console.log('JS ok');
console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        albums: [],
        search: '',
    },
    methods: {
        getAlbums() {
            axios.get('http://localhost:8000/php-ajax-dischi/api/data-json.php').then(res => {
                this.albums = res.data;
            }).catch(err => {
                console.error(err);
            })
        },
        searchByGenre() {

        }
    },
    mounted() {
        this.getAlbums();
    },
    computed: {
        filteredGenre() {
            const genres = [];
            this.albums.forEach((disc) => {
                if (!genres.includes(disc.genre)) genres.push(disc.genre);
            });
            return genres;
        },
    }
});