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
<div class="site-menu">
    <ul>
      <li><a href="javascript:;">HOME</a></li>
      <li><a href="javascript:;">MOVIES</a></li>
      <li><a href="javascript:;">TV SHOWS</a></li>
      <li><a href="javascript:;">TIPS</a></li>
    </ul>
  </div>
</div>
</nav>
<nav class="navbar">
  <div class="logo"> <a href="javascript:;"> <img src="static/images/logo.png"> </a> </div>
  <div class="site-menu">
    <ul>
      <li><a href="javascript:;">HOME</a></li>
      <li><a href="javascript:;">MOVIES</a></li>
      <li><a href="javascript:;">TV SHOWS</a></li>
      <li><a href="javascript:;">TIPS</a></li>
    </ul>
  </div>
  <div class="user-menu">
        <div class="navbar-account"> <a href="server/src/caller.php?caller_id=logout">Logout <i class="lni lni-user"></i> </a></div>
  </div>
</nav>
<header class="page-header" style="margin:0 0 0;">
<div class="container">
<h1>Adult movies</h1>
</div>
</header>
<main>
  <section class="content-section">
    <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h6>FIND ANYWHERE ELSE</h6>
            <h2>Movies For You</h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult1.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">195 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG19</div>
              <h3 class="name"><a href="javascript:;">Wandering Earth</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult2.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">210 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG20</div>
              <h3 class="name"><a href="movie-single.html">Spider Man</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult3.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">120 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">TITANIG</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult4.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">230 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">The Wasted Times</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult5.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">160 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">The Grandmaster</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult6.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">180 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">Mulan</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult7.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">220 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">Se7en</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult8.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">230 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">Wall</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult9.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="movie-single.html">Let Me In</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Adult10.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG18</div>
              <h3 class="name"><a href="movie-single.html">Venom</a></h3>
            </div>
          </div>
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
}
