<template>
  <div id="contact" class="main-content active">
    <router-link to="/" class="close-menu-link">
      <i class="close-button fas fa-times-circle fa-2x"></i>
    </router-link>
    <div class="hanging">
      <div class="logo-hanging">
        <i class="fas fa-envelope"></i>
      </div>
      <div class="text-hanging">
        <div class="word">
          <h6>
            CONTACT
            <span>ME</span>
          </h6>
        </div>
      </div>
    </div>
    <div class="inner-content">
      <div class="head-content">
        <h3>
          Contact
          <span>Me</span>
        </h3>
      </div>
      <div class="content">
        <div id="contact-info">
          <h5>Contact Info</h5>
          <div class="row no-gutters">
            <div class="list-contact-info col-12">
              <ul class="row no-gutters">
                <li class="col-sm-6 col-12">
                  <span class="contact-info-name">Address</span>
                  <span class="icon-of-value">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <span class="value">Beverwijk, Netherlands</span>
                </li>

                <li class="col-sm-6 col-12">
                  <span class="contact-info-name">Email</span>
                  <span class="icon-of-value">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <a href="mailto:fristyr.dev@gmail.com" class="value"
                    >fristyr.dev@gmail.com</a
                  >
                </li>

                <li class="col-12">
                  <span class="contact-info-name">Social Media</span>
                  <ul class="social-media">
                    <li>
                      <a href="https://m.facebook.com/fristyrr" target="_blank">
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
                      <a
                        href="https://www.linkedin.com/in/fristyr/"
                        target="_blank"
                      >
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
                      <a href="https://github.com/fristyr" target="_blank">
                        <span class="front">
                          <i class="fab fa-github"></i>
                        </span>
                        <span class="back">
                          <i class="fab fa-github"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="contact-form">
          <h5>Contact Form</h5>
          <div class="row no-gutters">
            <div class="note col-lg-9 col-md-9 col-12">
              <p>Want to chat? Send me a message!</p>
            </div>
            <div
              class="alert contact-msg col-lg-9 col-md-9 col-12 alert-success"
              v-if="messageStatus"
            >
              Your message has been sent!
            </div>
            <div class="form-wrapper col-lg-9 col-md-9 col-12">
              <form name="contact" @submit.prevent="onSubmit">
                <div class="form-group clearfix">
                  <div class="inner-form-group">
                    <input
                      v-model="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="form-control"
                      autocomplete="off"
                      @change="name = $event.target.value"
                    />
                  </div>
                  <div class="inner-form-group">
                    <input
                      v-model="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      class="form-control"
                      autocomplete="off"
                      @change="email = $event.target.value"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    v-model="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    class="form-control"
                    autocomplete="off"
                    @change="subject = $event.target.value"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    v-model="message"
                    name="message"
                    placeholder="Message"
                    class="form-control"
                    autocomplete="off"
                    @change="message = $event.target.value"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button type="submit">
                    <span class="front">
                      <i class="fas fa-paper-plane"></i>
                      <span class="value">
                        Send
                        <span>Message</span>
                      </span>
                    </span>
                    <span class="back">
                      <i class="fas fa-paper-plane"></i>
                      <span class="value">
                        Send
                        <span>Message</span>
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      messageStatus: false,
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(
          `https://formcarry.com/s/${process.env.VUE_APP_MY_ENV_VARIABLE}`,
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          },
          { headers: { Accept: 'application/json' } }
        )
        .then(function() {})
        .catch(function(error) {
          console.log(error);
        });
        this.messageStatus = true,
      (this.name = ''),
        (this.email = ''),
        (this.subject = ''),
        (this.message = '');
    },
  },
};
</script>
