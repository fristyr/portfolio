<template>
  <div id="app" :style="{ height: `${windowHeight}px` }">
    <div id="wrapper">
      <div class="container-fluid">
        <div class="row no-gutters v-full">
          <div id="left-wrapper" class="col-12">
            <transition name="fade" mode="out-in" appear>
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return { windowHeight: window.innerHeight };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
