const app = new Vue({
    el: "#app",
    data: {
        password: "",
        has_uppercase: false,
        has_lowercase: false,
        has_number: false,
        has_special: false,
    },
    methods: {
        passwordCheck: function() {
            //regex
            this.has_uppercase = /[A-Z]/.test(this.password);
            this.has_lowercase = /[a-z]/.test(this.password);
            this.has_number = /\d/.test(this.password);
            this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
        }
    }
})