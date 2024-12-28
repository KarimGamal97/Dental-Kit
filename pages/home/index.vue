<template>
  <div class="app">
    <header class="section">
      <div class="logo">
        <img src="../../public/assets/images/logo.svg" alt="Main logo" />
      </div>
      <div class="desc">
        <h1>
          Join the <span class="text-primary">DentalKit</span> Exchange to buy
          and sell <br />essential dental kits
        </h1>
        <p>
          Feeling like the credit system is working against you? You're not
          alone. We're <br />here to guide you in securing the credit you truly
          deserve.
        </p>
      </div>
      <div class="install-btn">
        <NuxtLink to="/install">
          <CustomBtn />
        </NuxtLink>
      </div>
      <div class="header-img">
        <img
          src="../../public/assets/images/header-img.svg"
          alt="Header image"
        />
      </div>
    </header>
    <div class="features section">
      <div class="container">
        <div class="desc">
          <h2>
            Why this app will be good <br />
            for you ?
          </h2>
          <p>
            Reach your goals your whay with features<br class="break-word" />
            designed for the fastets, most fun way to learn a<br
              class="break-word"
            />
            language.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="feat-box">
              <h3>You can sell your own kit easly</h3>
              <p>
                Discover a unique approach to learning that blends cutting-<br
                  class="break-word"
                />edge language science with personalized lessons.
              </p>
              <img
                src="../../public/assets/images/feat-01.svg"
                alt="features-img"
              />
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="feat-box main-bg">
              <h3>Request you kit where you are</h3>
              <p>
                Discover a unique approach to learning that
                <br class="break-word" />
                blends cutting
              </p>
              <img src="../../public/assets/images/feat-02.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="delivery section text-center">
      <div class="container">
        <h3>Delivery at every point in Egypt</h3>
        <p>
          Achieve your language dreams quickly with the leading education app in
          the world!
        </p>
        <div class="map">
          <img src="../../public/assets/images/map.svg" alt="Map" />
        </div>
      </div>
    </div>
    <div class="newsletter section">
      <div class="container">
        <div class="row align-items-center">
          <div class="desc col-md-6 col-xs-12">
            <h3>Join our Newsletter</h3>
            <p>
              Subscribe to our newsletter to get the latest news and
              <br class="break-word" />
              updates directly to your inbox.
            </p>
          </div>
          <div class="col-md-6 col-xs-12">
            <form action.prevent="POST" class="form">
              <div class="input-group">
                <input
                  type="email"
                  class="input"
                  id="Email"
                  name="Email"
                  placeholder="example@email.com"
                  autocomplete="off"
                />
                <input class="button--submit" value="Subscribe" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer class="text-center section">
      <div class="container">
        <div class="logo">
          <NuxtLink to="/">
            <img
              src="../../public/assets/images/footer-logo.svg"
              class="mb-4"
              alt="Logo"
            />
          </NuxtLink>
        </div>
        <h3>Download App Now</h3>
        <div class="download">
          <NuxtLink class="download-app" to="/install">
            <img src="../../public/assets/images/Apple-btn.svg" alt="App store"
          /></NuxtLink>
          <NuxtLink class="download-app" to="/install">
            <img
              src="../../public/assets/images/Play-store-btn.svg"
              alt="App store"
          /></NuxtLink>
        </div>
      </div>
    </footer>
    <div
      class="d-flex justify-content-center align-items-center p-2 text-white bg-black"
    >
      <p class="m-auto">
        Copyright @
        <span class="fw-bold"
          ><NuxtLink to="http://mindtocode.org/">MindToCode</NuxtLink></span
        >
        2024. All Rights Reserved.
      </p>
    </div>
  </div>
</template>
  
  <script>
</script>