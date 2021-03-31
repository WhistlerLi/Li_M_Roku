import Users from '../components/Users.js';
import Login from '../components/Login.js';
import Adult from '../components/Adult.js';
import Child from '../components/Child.js';

let router = new VueRouter({
        routes: [
            {path: '/', redirect: {name: "login"}},
            {path: '/login', name: "login", component: Login},
            {path: '/users', name: 'users', component: Users},
            {path: '/adult', name: 'adult', component: Adult},
            {path: '/child', name: 'child', component: Child},
        ]
    })
;

const vm = new Vue({

    data: {
        authenticated: false,
        administrator: false,

        genericMessage: "hello from the adult",

        mockAccount: {
            username: "user",
            password: "password"
        },

        user: [],

        //currentUser: {},

        toastmessage: "Login failed!"
    },

    created: function () {
        if (localStorage.getItem("cachedUser")) {
            let user = JSON.parse(localStorage.getItem("cachedUser"));
            this.authenticated = true;
            this.$router.push({name: "home", params: {currentuser: user}});
        } else {
            this.$router.push({path: "/login"});
        }
    },

    methods: {
        setAuthenticated(status, data) {
            console.log("update");
            this.authenticated = status;
            this.user = data;
        },

        popError(errorMsg) {
            this.toastmessage = errorMsg;
            $('.toast').toast('show');
        },

        logout() {
            if (localStorage.getItem("cachedUser")) {
                localStorage.removeItem("cachedUser");
            }
            this.$router.push({path: "/login"});
            this.authenticated = false;


        }
    },

    router: router
}).$mount("#app");

router.beforeEach((to, from, next) => {
    console.log('router guard fired!', to, from, vm.authenticated);

    if (vm.authenticated === false) {
        next("/login");
    } else {
        next();
    }
    next();
});