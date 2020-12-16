export default {
    template:
        `
    <body>
 <nav class="mobile-menu">
  <div class="inner">
  <div class="mobile-search">
  <h6>Type movie or tv show name to find it</h6>
    <form>
      <input type="search" placeholder="Search here">
      <input type="submit" value="FIND">
    </form>
  </div>
  <!-- end mobile-search -->
  <a href="account.html" class="button-account"><i class="lni lni-user"></i> Login </a>
    <!-- end button-account --> 
 <div class="site-menu">
    <ul>
      <li><a href="index.html">HOME</a></li>
      <li><a href="movies.html">MOVIES</a></li>
      <li><a href="tv-shows.html">TV SHOWS</a></li>
      <li><a href="tips.html">TIPS</a></li>
    </ul>
  </div>
  <!-- end site-menu -->
   </div>
  <!-- end inner -->
 </nav>
 <!-- end mobile-menu -->
<nav class="navbar">
  <div class="logo"> <a href="index.html"> <img src="static/images/logo.png" alt="Image"> </a> </div>
  <!-- end logo -->
  <div class="site-menu">
    <ul>
      <li><a href="index.html">HOME</a></li>
      <li><a href="movies.html">MOVIES</a></li>
      <li><a href="tv-shows.html">TV SHOWS</a></li>
      <li><a href="tips.html">TIPS</a></li>
    </ul>
  </div>
  <!-- end site-menu -->
  <div class="user-menu">
    <div class="navbar-search"> <i class="lni lni-search-alt"></i> </div>
    <!-- end navbar-search -->
    <div class="navbar-notify"> <i class="lni lni-alarm"></i><b>2</b>
      <div class="notify-dropdown">
        <div class="total-notify">
          <h6>Notification</h6>
          <span>3</span> </div>
        <!-- end total-notify -->
        <ul>
          <li>
            <p><u>Marcus</u> download 2000+ Simple Line Icons and Explore</p>
            <span>2 Days</span></li>
          <li>
            <p>Added new movie <u>Afterlife</u> Cheatsheet to Start Using With Your Projects.</p>
            <span>3 Days</span></li>
        </ul>
      </div>
      <!-- end notify-dropdown --> 
    </div>
    <!-- end navbar-notify -->
    <div class="navbar-account"> <a href="account.html">ACCOUNT <i class="lni lni-user"></i> </a></div>
    <!-- end navbar-account --> 
  </div>
  <!-- end user-menu --> 
      <div class="hamburger-menu">
        <button class="hamburger">
        <svg width="45" height="45" viewBox="0 0 100 100">
          <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path class="line line2" d="M 20,50 H 80" />
          <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
        </button>
      </div>
      <!-- end hamburger-menu --> 
</nav>
<!-- end navbar -->
<section class="search-box">
  <div class="container">
    <h6>Type movie or tv show name to find it</h6>
    <form>
      <input type="search" placeholder="Search here">
      <input type="submit" value="FIND">
    </form>
    <ul>
      <li><a href="#">Pulp Function</a></li>
      <li><a href="#">Henry Porter</a></li>
      <li><a href="#">The Racer</a></li>
    </ul>
  </div>
  <!-- end container --> 
</section>
<header class="page-header" style="margin:0 0 0;">
 <div class="container">
 <h1>Roku</h1>
 </div>
 </header>
<!-- end page-header -->
<main>
  <section class="content-section" data-background="static/images/section-pattern01.png">
    <div class="container">
      <div class="row align-items-center">
  <div class="col-lg-7">
    <div class="membership">
   <h6>Endless entertainment</h6>
     <p>Stream what you love,including free TV,live news,sports,and 150,000+movies and TV episodes across thousands of free and paid channels.</p>
     <form>
     <div class="form-group">
       <input type="text"  v-model="input.username" id="inlineFormInputName" placeholder="Email or Phone Number">
      </div>
      <!-- end form-group -->
     <div class="form-group">
       <input type="password"  v-model="input.password" id="inlineFormPassword" placeholder="Password" ><i class="lni lni-eye"></i>
      </div>
      <!-- end form-group -->
     <div class="form-group">
       <p><input type="checkbox" checked> I agree to accept registration terms about digiflex and start my membership</p>
      </div>
      <!-- end form-group -->
     <div class="form-group">
       <input type="submit" value="Login"  v-on:click.prevent="login()">
      </div>
      <!-- end form-group -->
     </form>
   </div>
   <!-- end membership -->
    </div>
    <!-- end col-7 -->
    <div class="col-lg-5">
    <figure class="side-image"> 
     <img src="static/images/side-image02.png" alt="Image">
     </figure>
     <!-- end side-image -->
    </div>
    <!-- end col-5 -->
  </div>
      <!-- end row --> 
    </div>
    <!-- end container --> 
  </section>
  <!-- end content-section -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h5 class="call-us">Questions? <strong>Call 0850-380-6444</strong></h5>
          <p> Format for custom post types that are not book
            or you can use else if to <u>specify a second</u> post type the
            same way as above. </p>
          <div class="language"> <i class="lni lni-world"></i>
            <select>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <!-- end language --> 
        </div>
        <!-- end col-4 -->
        <div class="col-lg-2 offset-lg-1 col-md-4">
          <h6 class="widget-title">DIGIFLEX</h6>
          <ul class="footer-menu">
            <li><a href="digiflex.html">Digiflex</a></li>
            <li><a href="devices.html">Devices</a></li>
            <li><a href="tips.html">Tips</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <!-- end col-4 -->
        <div class="col-lg-2 col-md-4">
          <h6 class="widget-title">SUPPORT</h6>
          <ul class="footer-menu">
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="help-center.html">Help Center</a></li>
            <li><a href="account.html">Account</a></li>
            <li><a href="support.html">Support <i class="lni lni-question-circle"></i></a></li>
            <li><a href="media-center.html">Media Center</a></li>
          </ul>
        </div>
        <!-- end col-4 -->
        <div class="col-lg-2 col-md-4">
          <h6 class="widget-title">POLICIES</h6>
          <ul class="footer-menu">
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms-agreement.html">Terms & Agreement</a></li>
            <li><a href="legal-notices.html">Legal Notices</a></li>
          </ul>
        </div>
        <!-- end col-4 --> 
      </div>
      <!-- end row --> 
    </div>
    <!-- end container -->
    <div class="bottom-bar">
      <div class="container"> <span>© 2020 Digiflex | Online Movie Streaming</span> <span>Site create by <a href="#">movies</a></span> </div>
      <!-- end container --> 
    </div>
    <!-- end bottom-bar --> 
  </footer>
  <!-- end footer --> 
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
                // fetch the user from the DB
                // generate the form data
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
                        if (typeof data != "object") { // means that we're not getting a user object back
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