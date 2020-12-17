import Users from '../components/Users.js';
import Login from '../components/Login.js';

let router = new VueRouter({
        routes: [
            {path: '/', redirect: {name: "login"}},
            {path: '/login', name: "login", component: Login},
            {path: '/users', name: 'users', component: Users},
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
        // do a session check and set authenticated to true if the session still exists
        // if the cached user exists, then just navigate to their user home page

        // the localstorage session will persist until logout

        if (localStorage.getItem("cachedUser")) {
          let user = JSON.parse(localStorage.getItem("cachedUser"));
          this.authenticated = true;
          // params not setting properly, so this route needs to be debugged a bit...
          this.$router.push({ name: "home", params: { currentuser: user }});
        } else {
          this.$router.push({ path: "/login"} );
        }
    },

    methods: {
        setAuthenticated(status, data) {
            console.log("update");
            this.authenticated = status;
            this.user = data;
        },

        popError(errorMsg) {
            // set the error message string and show the toast notification
            this.toastmessage = errorMsg;
            $('.toast').toast('show');
        },

        logout() {
            // delete local session
            if (localStorage.getItem("cachedUser")) {
                localStorage.removeItem("cachedUser");
            }
            // push user back to login page
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