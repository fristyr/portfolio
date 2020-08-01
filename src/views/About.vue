<template>
  <div  class="main-content about active">
    <!-- Close Button Starts -->
    <router-link to="/" class="close-menu-link">
      <i class="close-button fas fa-times-circle fa-2x"></i>
    </router-link>
    <!-- Close Button Ends -->
    <!-- Content Hanging On About Section Starts -->
    <div class="hanging">
      <div class="logo-hanging">
        <i class="fas fa-id-card"></i>
      </div>
      <div class="text-hanging">
        <div class="word">
          <h6>
            ABOUT
            <span>ME</span>
          </h6>
        </div>
      </div>
    </div>
    <!-- Content Hanging On About Section Ends -->
    <!-- Inner Content Starts -->
    <div class="inner-content">
      <!-- Head Content Starts -->
      <div class="head-content">
        <h3>
          About
          <span>Me</span>
        </h3>
      </div>
      <!-- Head Content Ends -->
      <!-- Content Starts -->
      <div class="content">
        <!-- Personal Info Starts -->
        <div id="personal-info">
          <!-- Personal Info Heading Starts -->
          <h5>Personal Info</h5>
          <!-- Personal Info Heading Ends -->
          <div class="row no-gutters">
            <!-- Profile Picture Starts -->
            <div class="profile-picture col-md-2 col-sm-3 col-12"></div>
            <!-- Profile Picture Ends -->
            <!-- Summary Starts -->
            <div class="summary col-md-10 col-sm-9 col-12">
              <!-- Single Paragraph Starts -->
              <p>
                I am a JavaScript Developer. I am very passionate and dedicated
                to my work. I have 1+ years work experience. And enjoy working
                in a team. <br />
                I am originally from Moldova, but have been living and working in
                Netherlands for more then two years.
              </p>
              <!-- Single Paragraph Ends -->
            </div>
            <!-- Summary Ends -->
            <!-- Single Profile Starts -->
            <div class="profile col-12 col-sm-6">
              <ul>
                <!-- Single Content On Profile Starts -->
                <li>
                  <span class="label">
                    <i class="fas fa-angle-double-right"></i>
                    <span>First Name</span>
                  </span>
                  <span class="dash">-</span>
                  <span class="value">Dennis</span>
                </li>
                <!-- Single Content On Profile Ends -->
                <!-- Single Content On Profile Starts -->
                <li>
                  <span class="label">
                    <i class="fas fa-angle-double-right"></i>
                    <span>Last Name</span>
                  </span>
                  <span class="dash">-</span>
                  <span class="value">Goncearuc</span>
                </li>
                <!-- Single Content On Profile Ends -->
                <!-- Single Content On Profile Starts -->
                <li>
                  <span class="label">
                    <i class="fas fa-angle-double-right"></i>
                    <span>Date of Birth</span>
                  </span>
                  <span class="dash">-</span>
                  <span class="value">12 April 1996</span>
                </li>
                <!-- Single Content On Profile Ends -->
                <!-- Single Content On Profile Starts -->
                <li>
                  <span class="label">
                    <i class="fas fa-angle-double-right"></i>
                    <span>Nationality</span>
                  </span>
                  <span class="dash">-</span>
                  <span class="value">Romanian/Moldavian</span>
                </li>
                <!-- Single Content On Profile Ends -->
              </ul>
            </div>
            <!-- Single Profile Ends -->
            <!-- Single Profile Starts -->
            <div class="profile col-12 col-sm-6">
              <ul>
                <!-- Single Content On Profile Ends -->
                <!-- Single Content On Profile Starts -->
                <li>
                  <span class="label">
                    <i class="fas fa-angle-double-right"></i>
                    <span>Email</span>
                  </span>
                  <span class="dash">-</span>
                  <span class="value">fristyr.dev@gmail.com</span>
                </li>
                <!-- Single Content On Profile Ends -->
                <!-- Single Content On Profile Starts -->
                <li>
                  <span class="label">
                    <i class="fas fa-angle-double-right"></i>
                    <span>Address</span>
                  </span>
                  <span class="dash">-</span>
                  <span class="value">Beverwijk, Netherlands</span>
                </li>
                <!-- Single Content On Profile Ends -->
                <!-- Single Content On Profile Starts -->
                <li>
                  <span class="label">
                    <i class="fas fa-angle-double-right"></i>
                    <span>Languages</span>
                  </span>
                  <span class="dash">-</span>
                  <span class="value">English, Russian, Romanian</span>
                </li>
                <!-- Single Content On Profile Ends -->
              </ul>
            </div>
            <!-- Single Profile Ends -->




            <!-- Social Media Starts -->
            <div class="social-media col-12">
              <ul>


                
                <!-- Single Social Media Starts -->
                <li>
                  <a href="https://m.facebook.com/fristyrr" target="_blank" >
                    <span class="front">
                      <i class="fab fa-facebook-f"></i>
                    </span>
                    <span class="back">
                      <i class="fab fa-facebook-f"></i>
                    </span>
                  </a>
                </li>
              
                <!-- Single Social Media Starts -->
                <li>
                  <a href="https://www.linkedin.com/in/fristyr/" target="_blank" >
                    <span class="front">
                      <i class="fab fa-linkedin-in"></i>
                    </span>
                    <span class="back">
                      <i class="fab fa-linkedin-in"></i>
                    </span>
                  </a>
                </li>
                <!-- Single Social Media Ends -->
                <li>
                  <a href="https://github.com/fristyr" target="_blank" >
                    <span class="front">
                      <i class="fab fa-github"></i>
                    </span>
                    <span class="back">
                      <i class="fab fa-github"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- Social Media Ends -->
            <!-- Button Wrapper Starts -->
            <div class="button-wrapper col-12">
              <!-- Single Button Starts -->
              <div class="single-button">
                <a href="#">
                  <span class="front">
                    <i class="fas fa-file-pdf"></i>
                    <span class="value">
                      Download
                      <span>CV</span>
                    </span>
                  </span>
                  <span class="back">
                    <i class="fas fa-file-pdf"></i>
                    <span class="value">
                      Download
                      <span>CV</span>
                    </span>
                  </span>
                </a>
              </div>
              <!-- Single Button Ends -->
              <!-- Single Button Starts -->
              <div class="single-button" id="contact-me">
                <router-link to="/contacts" id="contact-button">
                  <span class="front">
                    <i class="fas fa-envelope"></i>
                    <span class="value">
                      Contact
                      <span>Me</span>
                    </span>
                  </span>
                  <span class="back">
                    <i class="fas fa-envelope"></i>
                    <span class="value">
                      Contact
                      <span>Me</span>
                    </span>
                  </span>
                </router-link>
              </div>
              <!-- Single Button Ends -->
            </div>
            <!-- Button Wrapper Ends -->
          </div>
        </div>
        <!-- Personal Info Ends -->
        <!-- Services Starts -->
        <div id="services">
          <!-- Services Heading Starts -->
          <h5>Services</h5>
          <!-- Services Heading Ends -->
          <div class="row no-gutters">
            <!-- Single Service Starts -->
            <div class="single-service col-sm-6 col-12">
              <ul>
                <li class="service-number">
                  <span class="first-word">Service</span>
                  <span class="second-word">01</span>
                </li>
                <li>
                  <ul>
                    <li class="service-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Javascript Development</span>
                    </li>
                    <li class="service-body">
                      Modern JavaScript ES6+
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Service Ends -->
            <!-- Single Service Starts -->
            <div class="single-service col-sm-6 col-12">
              <ul>
                <li class="service-number">
                  <span class="first-word">Service</span>
                  <span class="second-word">02</span>
                </li>
                <li>
                  <ul>
                    <li class="service-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>ReactJs Applications </span>
                    </li>
                    <li class="service-body">
                      <span>Latest ReactJs version (Current: 16.13.1)</span> <br />
                      <span>React Hooks (UseState, UseEffects and more.)</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Service Ends -->
            <!-- Single Service Starts -->
            <div class="single-service col-sm-6 col-12">
              <ul>
                <li class="service-number">
                  <span class="first-word">Service</span>
                  <span class="second-word">03</span>
                </li>
                <li>
                  <ul>
                    <li class="service-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>VueJs Applications</span>
                    </li>
                    <li class="service-body">
                      <span> Latest Version of VueJs </span> <br />
                      <span> Vue Router </span> <br />
                      <span> Vuex </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Service Ends -->
            <!-- Single Service Starts -->
            <div class="single-service col-sm-6 col-12">
              <ul>
                <li class="service-number">
                  <span class="first-word">Service</span>
                  <span class="second-word">04</span>
                </li>
                <li>
                  <ul>
                    <li class="service-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Mobile/Hybrid Applications</span>
                    </li>
                    <li class="service-body">
                      <span>Ionic Framework</span> <br />
                      <span>React Native </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Service Ends -->
          </div>
        </div>
        <!-- Services Ends -->
      </div>
      <!-- Content Ends -->
    </div>
    <!-- Inner Content Ends -->
  </div>
</template>
