
const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: null,
        phone: null,
        email:null,
        message:null
    },
    methods:{
        checkForm: function (e) {
            if (this.name && this.email && this.message && this.phone) {
                return true;
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name required.');
            }


            if (!this.email) {
                this.errors.push('Email required.');
            }
            if (!this.message) {
                this.errors.push('Message required.');

            }

            if (!this.phone) {
                this.errors.push('Phone required.');
            }







            e.preventDefault();
        },

        postdata:function (e) {
            console.log('data',this.name);

            axios.post('/post', { name: this.name,phone:this.phone,email:this.email,message:this.message})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    // Wu oh! Something went wrong
                    console.log(error.message);
                });
        }
    }
})

