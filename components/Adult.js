export default {
    template: `
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
  <a href="javascript:;" class="button-account"><i class="lni lni-user"></i> ACCOUNT </a>
    <!-- end button-account --> 
<div class="site-menu">
    <ul>
      <li><a href="javascript:;">HOME</a></li>
      <li><a href="javascript:;">MOVIES</a></li>
      <li><a href="javascript:;">TV SHOWS</a></li>
      <li><a href="javascript:;">TIPS</a></li>
    </ul>
  </div>
  <!-- end site-menu -->
</div>
<!-- end inner -->
</nav>
<!-- end mobile-menu -->
<nav class="navbar">
  <div class="logo"> <a href="javascript:;"> <img src="images/logo.png" alt="Image"> </a> </div>
  <!-- end logo -->
  <div class="site-menu">
    <ul>
      <li><a href="javascript:;">HOME</a></li>
      <li><a href="javascript:;">MOVIES</a></li>
      <li><a href="javascript:;">TV SHOWS</a></li>
      <li><a href="javascript:;">TIPS</a></li>
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
    <div class="navbar-account"> <a href="javascript:;">ACCOUNT <i class="lni lni-user"></i> </a></div>
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
<h1>Movies</h1>
</div>
</header>
<!-- end page-header -->
<main>
  <section class="content-section">
    <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h6>FIND ANYWHERE ELSE</h6>
            <h2>Movies For You</h2>
          </div>
          <!-- end section-title --> 
        </div>
        <!-- end col-12 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies01.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="javascript:;">Black Panther</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies02.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="movie-single.html">Ce Of Entro</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies03.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="javascript:;">Coming Soon</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies04.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="javascript:;">Handmaiden</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies05.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="javascript:;">The Silence of The Lamps</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies06.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="javascript:;">Monospaced</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies07.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="javascript:;">Secret Michael's Staff</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies08.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="javascript:;">Trolls: World Tour</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies09.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="movie-single.html">Thrill Crazy</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies10.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="movie-single.html">Not Out</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies11.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="movie-single.html">World of War</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies12.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Love Everywhere</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
      </div>
    </div>
    <!-- end container --> 
  </section>
  <!-- end content-section -->
<section class="content-section" data-background="#f9f5f7">
    <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h6>FIND ANYWHERE ELSE</h6>
            <h2>Movies For You</h2>
          </div>
          <!-- end section-title --> 
        </div>
        <!-- end col-12 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies01.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Black Panther</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies02.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Ce Of Entro</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies03.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Coming Soon</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies04.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Handmaiden</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies05.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">The Silence of The Lamps</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies06.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Monospaced</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies07.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Secret Michael's Staff</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies08.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Trolls: World Tour</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies09.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Thrill Crazy</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies10.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Not Out</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies11.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">World of War</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies12.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Love Everywhere</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
      </div>
    </div>
    <!-- end container --> 
  </section>
  <!-- end content-section -->
\t<section class="content-section">
    <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h6>FIND ANYWHERE ELSE</h6>
            <h2>Movies For You</h2>
          </div>
          <!-- end section-title --> 
        </div>
        <!-- end col-12 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies01.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Black Panther</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies02.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Ce Of Entro</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies03.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Coming Soon</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies04.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Handmaiden</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies05.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">The Silence of The Lamps</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies06.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Monospaced</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies07.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Secret Michael's Staff</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies08.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Trolls: World Tour</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies09.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Thrill Crazy</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies10.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Not Out</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies11.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">World of War</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/movies12.jpg" alt="Image"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <!-- end circle-rate -->
              <div class="hd">1080 <b>HD</b></div>
              <!-- end hd --> 
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <!-- end age -->
              <h3 class="name"><a href="#">Love Everywhere</a></h3>
            </div>
            <!-- end video-content --> 
          </div>
          <!-- end video-thumb --> 
        </div>
        <!-- end col-2 -->
      </div>
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
            <li><a href="#">Digiflex</a></li>
            <li><a href="#">Devices</a></li>
            <li><a href="#">Tips</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <!-- end col-4 -->
        <div class="col-lg-2 col-md-4">
          <h6 class="widget-title">SUPPORT</h6>
          <ul class="footer-menu">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Support <i class="lni lni-question-circle"></i></a></li>
            <li><a href="#">Media Center</a></li>
          </ul>
        </div>
        <!-- end col-4 -->
        <div class="col-lg-2 col-md-4">
          <h6 class="widget-title">POLICIES</h6>
          <ul class="footer-menu">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Agreement</a></li>
            <li><a href="#">Legal Notices</a></li>
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
    // created() {
    //     console.log("init")
    // },
    // data() {
    //     return {
    //         show_video: false
    //     }
    // }
}
