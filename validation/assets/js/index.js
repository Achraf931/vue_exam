let app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
        submit() {
            fetch('http://localhost:8888/dev2/api/index.php', {
                method: 'POST',
                headers: new Headers(),
                body: new FormData(document.getElementById('form'))
            }).then((res) => res.json()).then((data) => {
                document.getElementById('error').innerText = data.error
            })
        }
    }
})
