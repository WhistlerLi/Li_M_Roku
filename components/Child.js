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
<h1>Child movies</h1>
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
            <figure class="video-image"> <a href="#"><img src="static/images/Child1.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.8</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">190 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG10</div>
              <h3 class="name"><a href="javascript:;">Spongebob</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child2.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.9</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">150 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG8</div>
              <h3 class="name"><a href="movie-single.html">Kong Fu Panda</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child3.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>6.0</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">180 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG11</div>
              <h3 class="name"><a href="javascript:;">Like Having</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child4.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.5</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">175 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG10</div>
              <h3 class="name"><a href="javascript:;">TOY 3</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child5.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.9</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">200 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">DIVERTIDA MENTE</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child6.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.6</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">140 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">DARK STAR</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child7.png"></a>
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
                <li>Animation</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">YULE BELIEVE IN ELVES</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child8.png"></a>
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
                <li>Animation</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">JACK FEOAT</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child9.png"></a>
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
                <li>Animation</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="movie-single.html">THE EASTER BUNNY</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="video-thumb">
            <figure class="video-image"> <a href="#"><img src="static/images/Child10.png"></a>
              <div class="circle-rate">
                <svg class="circle-chart" viewBox="0 0 30 30" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <circle class="circle-chart__background" stroke="#2f3439" stroke-width="2" fill="none" cx="15" cy="15" r="14"></circle>
                  <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="50,100" cx="15" cy="15" r="14"></circle>
                </svg>
                <b>5.7</b> </div>
              <div class="hd">1080 <b>HD</b></div>
            </figure>
            <div class="video-content"> <small class="range">170 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="movie-single.html">STORKS</a></h3>
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
