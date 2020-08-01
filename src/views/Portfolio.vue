<template>
  <div class="main-content about portfolio active">
    <!-- Close Button Starts -->
    <router-link to="/" class="close-menu-link">
      <i class="close-button fas fa-times-circle fa-2x"></i>
    </router-link>
    <!-- Close Button Ends -->
    <!-- Content Hanging On Portfolio Section Starts -->
    <div class="hanging">
      <div class="logo-hanging">
        <i class="fas fa-toolbox"></i>
      </div>
      <div class="text-hanging">
        <div class="word">
          <h6>
            MY
            <span>PORTFOLIO</span>
          </h6>
        </div>
      </div>
    </div>
    <!-- Content Hanging On Portfolio Section Ends -->
    <!-- Inner Content Starts -->

    <div class="inner-content">
      <!-- Head Content Starts -->
      <div class="head-content">
        <h3>
          My
          <span>Portfolio</span>
        </h3>
      </div>
      <!-- Head Content Ends -->
      <!-- Content Starts -->

      <div class="content">
        <div class id="projects">
          <h5>Projects</h5>
          <!-- Personal Info Starts -->
          <div id="personal-info">
            <!-- Personal Info Heading Starts -->

            <!-- Personal Info Heading Ends -->
          </div>
          <!-- Personal Info Ends -->
          <!-- Services Starts -->
          <div id="services">
            <!-- Services Heading Starts -->
            <!-- Services Heading Ends -->
            <div class="row no-gutters portfolio--wrapp">
              <!-- Single Service Starts -->

              <swiper class="swiper" ref="mySwiper" :options="swiperOption">
                <swiper-slide v-for="item in sliderItems" :key="item.id">
                  <div class="card portfolio--card">
                    <img
                      class="card-img-top"
                      :src="item.image"
                      :alt="item.imageAlt"
                    />
                    <div class="card-body">
                      <div class="card-text" v-html="item.text"></div>
                      <a :href="item.link" class="btn btn--normal">
                        {{ item.linkText }}
                      </a>
                    </div>
                  </div>
                </swiper-slide>
                <div class="swiper-button-prev" @click="prevSlide" slot="button-prev"></div>
                <div class="swiper-button-next" @click="nextSlide" slot="button-next"></div>
              </swiper>
              
            </div>
          </div>
          <!-- Services Ends -->
        </div>
        <!-- Content Ends -->
      </div>
    </div>

    <!-- Inner Content Ends -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import { dataSlider } from '../utils/dataSlider';
export default {
  name: 'portfolio',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderItems: dataSlider,
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  directives: {
    swiper: directive,
  },
  methods: {
    nextSlide() {
      this.$refs.mySwiper.$swiper.slideNext();
    },
    prevSlide() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
  },
  mounted() {
    this.nextSlide();
    this.prevSlide();
  },
};
</script>
