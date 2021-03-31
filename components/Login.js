export default {
    template:
        `
    <body>
<nav class="navbar">
  <div class="logo"> <a href="index.html"> <img src="static/images/logo.png" alt="Image"> </a> </div>
  <div class="site-menu">
    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">MOVIES</a></li>
      <li><a href="#">TV SHOWS</a></li>
      <li><a href="#">TIPS</a></li>
    </ul>
  </div>
  <div class="user-menu">
    <div class="navbar-search"> <i class="lni lni-search-alt"></i> </div>
  </div>
</nav>
<header class="page-header" style="margin:0 0 0;">
 <div class="container">
 <h1>Login</h1>
 </div>
 </header>
<main>
  <section class="content-section" data-background="static/images/section-pattern01.png">
    <div class="container">
      <div class="row align-items-center">
  <div class="col-lg-7">
    <div class="membership">
     <form>
     <div class="form-group">
       <input type="text"  v-model="input.username" id="inlineFormInputName" placeholder="Username">
      </div>
     <div class="form-group">
       <input type="password"  v-model="input.password" id="inlineFormPassword" placeholder="Password" ><i class="lni lni-eye"></i>
      </div>
      <div class="form-group">
       <p><input type="checkbox" checked> I agree to accept registration terms about rouku and start my membership</p>
      </div>
     <div class="form-group">
       <input type="submit" value="Login"  v-on:click.prevent="login()">
      </div>
     </form>
   </div>
    </div>
    <div class="col-lg-5">
    <figure class="side-image"> 
     </figure>
    </div>
  </div>
    </div>
  </section>
  <footer class="footer">
    <div class="bottom-bar">
      <div class="container"> <span>© Copyright @Roku 2021, Inc</span> <span>Site create by <a href="#">RouKu</a></span> </div>
    </div>
  </footer>
</main>

</body>
     `,
    data() {
        return {
            input: {
                username: "",
                password: ""
            },
        }
    },

    methods: {
        login() {
            if (this.input.username != "" && this.input.password != "") {
                let formData = new FormData();
                formData.append("username", this.input.username);
                formData.append("password", this.input.password);
                let url = `./server/src/admin_login.php`;
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (typeof data != "object") {
                            console.warn(data);
                            console.error("authentication failed, please try again");
                            this.$emit("autherror", data);
                        } else {
                            this.$emit("authenticated", true, data);
                            this.$router.replace({name: "users"});
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}