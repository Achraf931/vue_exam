let app = new Vue({
    el: '#app',
    data: {
        info: [],
        searchContent: ''
    },
    computed: {
        filteredContent() {
            return this.info.filter(el => el.username.toLowerCase().includes(this.searchContent.toLowerCase()))

        }
    },
    mounted () {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => (this.info = response.data))
    }
})
