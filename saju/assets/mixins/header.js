export default {
    methods: {
        removeClassArr(target, className) {
            document.querySelectorAll(target).forEach(function (v) {
                v.classList.remove(className)
            })
        },
        addClass(target, name) {
            document.querySelector(target).classList.add(name)
        },
        gnbOver(e) {
            this.removeClassArr('.nav_mn', 'on')
            e.currentTarget.classList.add('on')
        },
        gnbLeave() {
            this.removeClassArr('.nav_mn', 'on')
        },
    },
    watch: {
        $route() {
            if (this.$nuxt.$route.params.grade) {
                this.setHeaderDesc(this.$nuxt.$route.params.grade)
            }
        },
    },
}
