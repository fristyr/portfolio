<template>
  <div id="resume" class="main-content active">
    <!-- Close Button Starts -->
    <router-link to="/" class="close-menu-link">
      <i class="close-button fas fa-times-circle fa-2x"></i>
    </router-link>
    <!-- Close Button Ends -->
    <!-- Content Hanging On Resume Section Starts -->
    <div class="hanging">
      <div class="logo-hanging">
        <i class="fas fa-newspaper"></i>
      </div>
      <div class="text-hanging">
        <div class="word">
          <h6>
            MY
            <span>RESUME</span>
          </h6>
        </div>
      </div>
    </div>
    <!-- Content Hanging On Resume Section Ends -->
    <!-- Inner Content Starts -->

    <div class="inner-content">
      <!-- Head Content Starts -->
      <div class="head-content">
        <h3>
          My
          <span>Resume</span>
        </h3>
      </div>
      <!-- Head Content Ends -->
      <!-- Content Starts -->
      <div class="content">
        <!-- Skills Starts -->
        <div class="skills">
          <!-- Skills Heading Starts -->
          <h5>
            Skills
          </h5>
          <!-- Skills Heading Ends -->
          <div class="row no-gutters">
            <!-- Single Skills Wrapper Starts -->
            <div class="single-skills-wrapper col-12 col-sm-6">
              <ul>
                <!-- Skills Heading Starts -->
                <li class="skills-heading">
                  <span class="first-word">Soft</span>
                  <span class="second-word">Skills</span>
                </li>
                <!-- Skills Heading Ends -->
                <li>
                  <ul>
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>Leadership</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">30%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '30%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>Teamwork</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">85%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '85%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>Communication</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">75%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '75%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>Problem Solving</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">70%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '70%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Skills Wrapper Ends -->
            <!-- Single Skills Wrapper Starts -->
            <div class="single-skills-wrapper col-12 col-sm-6">
              <ul>
                <!-- Skills Heading Starts -->
                <li class="skills-heading">
                  <span class="first-word">Hard</span>
                  <span class="second-word">Skills</span>
                </li>
                <!-- Skills Heading Ends -->
                <li>
                  <ul>
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>HTML5 / CSS3</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">85%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '85%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>Javascript / React.js / Vue.js</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">70%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '70%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>Node.js</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">50%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '50%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                    <!-- Single Skill Starts -->
                    <li class="single-skill">
                      <ul>
                        <li class="skill-name">
                          <i class="fas fa-angle-double-right"></i>
                          <span>Ionic Framework</span>
                        </li>
                        <!-- Range Of Percentage 0% - 100% -->
                        <li class="percentage">70%</li>
                        <li class="progress-wrapper">
                          <span
                            class="progress"
                            :style="{ width: '70%' }"
                          ></span>
                        </li>
                      </ul>
                    </li>
                    <!-- Single Skill Ends -->
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Skills Wrapper Ends -->
          </div>
        </div>
        <!-- Skills Ends -->
        <!-- Education Starts -->
        <div class="education">
          <!-- Education Heading Starts -->
          <h5>Education</h5>
          <!-- Education Heading Ends -->
          <div class="row no-gutters">
            <!-- Single Education Starts -->
            <div class="single-education col-sm-6 col-12">
              <ul>
                <li class="education-when-where">
                  <span class="when">2018-2019</span>
                  <span class="where">Netherlands</span>
                </li>
                <li>
                  <ul>
                    <li class="education-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>WebHeroSchool</span>
                    </li>
                    <li class="education-body">
                      School for learning complex web development, HTML, CSS,
                      JavaScript, React Most harder for me was JavaScript
                      <a href="https://github.com/fristyr/js-game/">game</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Education Ends -->
            <!-- Single Education Starts -->
            <div class="single-education col-sm-6 col-12">
              <ul>
                <li class="education-when-where">
                  <span class="when">2018</span>
                  <span class="where">Netherlands</span>
                </li>
                <li>
                  <ul>
                    <li class="education-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>HTML/CSS Intensive Course</span>
                    </li>
                    <li class="education-body">
                      <a href="https://htmlacademy.ru/intensive/htmlcss"
                        >HTML Academy</a
                      >
                      Basic intensive course with some JavaScript tasks. Project
                      to finish this course was
                      <a href="https://fristyr.github.io/fristyr-sedona/"
                        >Sedona page</a
                      >
                      simple HTML/CSS project
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Education Ends -->
            <!-- Single Education Starts -->
            <div class="single-education col-sm-6 col-12">
              <ul>
                <li class="education-when-where">
                  <span class="when">2015 - 2017</span>
                  <span class="where">Moldova, Chisinau</span>
                </li>
                <li>
                  <ul>
                    <li class="education-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Faculty of Kinetotherapy</span>
                    </li>
                    <li class="education-body">
                      U.S.E.F.S - The State University of Physical Education and
                      Sport
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Education Ends -->
            <!-- Single Education Starts -->
            <div class="single-education col-sm-6 col-12">
              <ul>
                <li class="education-when-where">
                  <span class="when"> - 2015</span>
                  <span class="where">Moldova, Chisinau</span>
                </li>
                <li>
                  <ul>
                    <li class="education-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Lyceum N. Gheorghiu</span>
                    </li>
                    <li class="education-body">
                      Place where I grow up, school, sweet times
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Education Ends -->
          </div>
        </div>
        <!-- Education Ends -->
        <!-- Experience Starts -->
        <div class="experience">
          <!-- Experience Heading Starts -->
          <h5>Experience</h5>
          <!-- Experience Heading Ends -->
          <div class="row no-gutters">
            <!-- Single Experience Starts -->
            <div class="single-experience col-sm-6 col-12">
              <ul>
                <li class="experience-when-where">
                  <span class="when">2019 - 2020</span>
                  <span class="where">Springbok Agency</span>
                </li>
                <li>
                  <ul>
                    <li class="experience-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Junior Front-End Developer</span>
                    </li>
                    <li class="experience-body">
                      After success intership, i was hired as full time developer.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Experience Ends -->
            <!-- Single Experience Starts -->
            <div class="single-experience col-sm-6 col-12">
              <ul>
                <li class="experience-when-where">
                  <span class="when">2018-2019</span>
                  <span class="where">Springbok Agency</span>
                </li>
                <li>
                  <ul>
                    <li class="experience-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Intern</span>
                    </li>
                    <li class="experience-body">
                      It was my first official IT job. But yes I started as intern
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Experience Ends -->
            <!-- Single Experience Starts -->
            <div class="single-experience col-sm-6 col-12">
              <ul>
                <li class="experience-when-where">
                  <span class="when">2018-2019</span>
                  <span class="where">Hotel Park Plantage</span>
                </li>
                <li>
                  <ul>
                    <li class="experience-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Reception manager</span>
                    </li>
                    <li class="experience-body">
                      <a href="http://www.hotelparkplantage.com/">Small hotel </a
                      >in center of Amsterdam. Place where I meet a lot of new
                      people and improved my English skills.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Experience Ends -->
            <!-- Single Experience Starts -->
            <div class="single-experience col-sm-6 col-12">
              <ul>
                <li class="experience-when-where">
                  <span class="when">2018</span>
                  <span class="where">NL Jobs</span>
                </li>
                <li>
                  <ul>
                    <li class="experience-name">
                      <i class="fas fa-angle-double-right"></i>
                      <span>Worker (Greenhouse) </span>
                    </li>
                    <li class="experience-body">
                      One of my hardest job ever :) . After job like this you
                      begin to value power of learning.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!-- Single Experience Ends -->
          </div>
        </div>
        <!-- Experience Ends -->
        <!-- Fun Facts Starts -->
        <div class="fun-facts">
          <!-- Fun Facts Heading Starts -->
          <h5>Fun Facts</h5>
          <!-- Fun Facts Heading Ends -->
          <div class="row no-gutters">
            <!-- Single Fun Fact Starts -->
            <div class="single-fun-fact col-12 col-sm-4">
              <ul>
                <li class="fun-fact-icon">
                  <i class="fas fa-business-time fa-3x"></i>
                </li>
                <li class="fun-fact-value">1+</li>
                <li class="fun-fact-body">
                  <i class="fas fa-angle-double-right"></i>
                  <span>Years Experience</span>
                </li>
              </ul>
            </div>
            <!-- Single Fun Fact Ends -->
            <!-- Single Fun Fact Starts -->
            <div class="single-fun-fact col-12 col-sm-4">
              <ul>
                <li class="fun-fact-icon">
                  <i class="fas fa-handshake fa-3x"></i>
                </li>
                <li class="fun-fact-value">7+</li>
                <li class="fun-fact-body">
                  <i class="fas fa-angle-double-right"></i>
                  <span>Done Projects</span>
                </li>
              </ul>
            </div>
            <!-- Single Fun Fact Ends -->
            <!-- Single Fun Fact Starts -->
            <div class="single-fun-fact col-12 col-sm-4">
              <ul>
                <li class="fun-fact-icon">
                  <i class="fas fa-heart fa-3x"></i>
                </li>
                <li class="fun-fact-value">4+</li>
                <li class="fun-fact-body">
                  <i class="fas fa-angle-double-right"></i>
                  <span>Happy Customers</span>
                </li>
              </ul>
            </div>
            <!-- Single Fun Fact Ends -->
          </div>
        </div>
        <!-- Fun Facts Ends -->
        <!-- Button Wrapper Starts -->
        <div class="button-wrapper">
          <!-- Single Button Starts -->
          <a href="#">
            <span class="front">
              <i class="fas fa-file-pdf"></i>
              <span class="value">
                Download
                <span>Resume</span>
              </span>
            </span>
            <span class="back">
              <i class="fas fa-file-pdf"></i>
              <span class="value">
                Download
                <span>Resume</span>
              </span>
            </span>
          </a>
          <!-- Single Button Ends -->
        </div>
        <!-- Button Wrapper Ends -->
      </div>
      <!-- Content Ends -->
    </div>
    <!-- Inner Content Ends -->
  </div>
</template>
