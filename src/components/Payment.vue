<template>
    <div>

<div class="jumbotron">
    <h1>Payment</h1>
  <article>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="title-section">
                    <h1>Multiple Stacking Sticky Sidebars with Bootstrap 4</h1>
                    <p class="lead">This is 100% CSS</p>
                </div>
            </div>
        </div>
        <div class="row">
          
            <div class="col-5">
                <div class="content-section">
                <h2>Content Section</h2>
            </div>
            </div>
            <div class="col-3 has-4-items">
                <div class="sidebar-item">
                    <div class="make-me-sticky">
                        <h3>Itssem 1</h3>
                    </div>
                </div>
                <div class="sidebar-item">
                    <div class="make-me-sticky">
                        <h3>Item 2</h3>
                    </div>
                </div>
                <div class="sidebar-item">
                    <div class="make-me-sticky">
                        <h3>Item 3</h3>
                    </div>
                </div>
                <div class="sidebar-item">
                    <div class="make-me-sticky">
                        <h3>Item 4</h3>
                    </div>
                </div>
            </div>
        
      

        </div>
    </div>
</article>
 </div>
    </div>
</template>

<script>

export default {
name: "Payment",
  data() {
    return {
    };
  }
}
</script>

<style>
.content-section {
  min-height: 2000px;
}

.sidebar-section {
  position: absolute;
  height: 100%;
  width: 100%;
}

.sidebar-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.has-4-items .sidebar-item {
  height:100%;
}


.make-me-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 0 15px;
}

/* Ignore This, just coloring */
body {
  background: #fff;
}

article {
  background: #f1f1f1;
  border-radius: 12px;
  padding: 25px 0;
}

.title-section, .content-section, .sidebar-section {
  background: #fff;
}

.title-section {
  text-align: center;
  padding: 50px 15px;
  margin-bottom: 30px;
}

.content-section h2 {
  text-align: center;
  margin: 0;
  padding-top: 200px;
}

.sidebar-item {
  text-align: center;
}
.sidebar-item h3 {
  background: gold;
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 0 100px;
  border-bottom: solid 1px #fff;
}


</style>
