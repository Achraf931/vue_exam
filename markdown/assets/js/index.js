let app = new Vue({
    el: '#app',
    data: {
        text: null
    },
    computed: {
        compiledMarkdown: function () {
            if (this.text != null)
                return marked(this.text)
        }
    }
})
