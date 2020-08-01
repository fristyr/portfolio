<template>
  <div id="home" class="main-content active">
    <!-- Content Hanging On Home Section Starts -->
    <div class="hanging">
      <div class="logo-hanging">
        <i class="fas fa-globe"></i>
      </div>
      <div class="text-hanging">
        <div class="word">
          <h6>
            HELLO
            <span>WORLD</span>
          </h6>
        </div>
      </div>
    </div>
    <!-- Content Hanging On Home Section Ends -->
    <!-- Inner Content Starts -->
    <div class="inner-content">
      <!-- Head Content Starts -->
      <div class="head-content">
        <h3>
          I'M
          <span class="name">Dennis G.</span>
        </h3>
        <h5>
          As a

          <vue-typer
            :text="[
              'Front-End Developer',
              'JavaScript Developer',
              'Mobile App Developer',
              'Magic Builder',
              'Mugiwara Squad',
            ]"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="80"
            :type-delay="80"
            :pre-erase-delay="2000"
            :erase-delay="80"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="solid"
          />
        </h5>
      </div>
      <!-- Head Content Ends -->
      <!-- Content Starts -->
      <div class="content">
        <!-- About Menu Starts -->
        <div id="about-menu" class="box-wrapper">
          <div class="inner-box-wrapper">
            <router-link to="/about" class="menu-link">
              <div class="valign-center">
                <i class="fas fa-id-card fa-3x"></i>
                <h5>
                  About
                  <span>Me</span>
                </h5>
              </div>
            </router-link>
          </div>
        </div>
        <!-- About Menu Ends -->
        <!-- Resume Menu Starts -->
        <div id="resume-menu" class="box-wrapper">
          <div class="inner-box-wrapper">
            <router-link to="/resume" class="menu-link">
              <div class="valign-center">
                <i class="fas fa-newspaper fa-3x"></i>
                <h5>
                  My
                  <span>Resume</span>
                </h5>
              </div>
            </router-link>
          </div>
        </div>
        <!-- Resume Menu Ends -->
        <!-- Portfolio Menu Starts -->
        <div id="portfolio-menu" class="box-wrapper">
          <div class="inner-box-wrapper">
            <router-link to="/portfolio" class="menu-link">
              <div class="valign-center">
                <i class="fas fa-toolbox fa-3x"></i>
                <h5>
                  My
                  <span>Portfolio</span>
                </h5>
              </div>
            </router-link>
          </div>
        </div>
        <!-- Portfolio Menu Ends -->
        <!-- Contact Menu Starts -->
        <div id="contact-menu" class="box-wrapper">
          <div class="inner-box-wrapper">
            <router-link to="/contacts" class="menu-link">
              <div class="valign-center">
                <i class="fas fa-envelope fa-3x"></i>
                <h5>
                  Contact
                  <span>Me</span>
                </h5>
              </div>
            </router-link>
          </div>
        </div>
        <!-- Contact Menu Ends -->
      </div>
      <!-- Content Ends -->
    </div>
    <!-- Inner Content Ends -->
  </div>
</template>

<script>
// @ is an alias to /src
import { VueTyper } from 'vue-typer';

export default {
  name: 'Home',
  components: { VueTyper },
};
</script>

<style>
.vue-typer .custom.caret {
  background: #fff;
  margin-left: 3px;
}
</style>
