<template>
  <div>
    <section id="footer">
      <div class="container">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
          <div class="col-xs-12 col-sm-4 col-md-4">
            <a class="navbar-brand">
              <b-img
                @click.prevent="$router.push({ name: 'homepage' }).catch(err => {})"
                src="../assets/logos.png"
                fluid
                alt="Fluid image"
                width="160"
                class="mr-4 img-fluid"
                type="button"
              ></b-img>
            </a>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a
                  @click.prevent="$router.push({ name: 'homepage' }).catch(err => {})"
                  type="button"
                >Home</a>
              </li>
              <li>
                <a
                  @click.prevent="$router.push({ name: 'bookpackage' }).catch(err => {})"
                >Bookpackage</a>
              </li>
              <li>
                <a @click.prevent="$router.push({ name: 'faq' }).catch(err => {})">FAQ</a>
              </li>
              <li>
                <a>Get Started</a>
              </li>
              <li>
                <a>Videos</a>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Social Media</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a>
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a>
                  <i class></i>Nijverheidskaai 170, 1070 Anderlecht
                  <br>
                  <strong>Erasmushogeschool</strong>
                  02 523 37 37
                </a>
              </li>
            </ul>
          </div>
          <hr>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p class="h6 font-weight-bold">&copy; Med Em 2020</p>
          </div>
          <hr>
        </div>
      </div>
    </section>
    <!-- ./Footer -->
  </div>
</template>

<script>
export default {};
</script>

<style >
/* Footer */
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #004fff;
  margin-bottom: 50px;
  text-transform: uppercase;
}
#footer {
  background: #004fff !important;
}
#footer h5 {
  padding-left: 10px;
  border-left: 3px solid #eeeeee;
  padding-bottom: 6px;
  margin-bottom: 20px;
  color: #ffbf00;
}
#footer a {
  color: #ffbf00;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#footer ul.social li {
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 5px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
  color: #ffbf00;
}
#footer ul.social li a:hover {
  color: #ffbf00;
}
#footer ul.quick-links li {
  padding: 3px 0;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.quick-links li:hover {
  padding: 3px 0;
  margin-left: 5px;
  font-weight: 700;
}
#footer ul.quick-links li a i {
  margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
  font-weight: 700;
}

@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>
