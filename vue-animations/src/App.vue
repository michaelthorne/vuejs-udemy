<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>

        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br><br>

        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>

        <transition :name="alertAnimation">
          <div class="alert alert-info" v-show="show">This is some information</div>
        </transition>

        <transition name="slide" type="animation" appear>
          <div class="alert alert-info" v-if="show">This is some information</div>
        </transition>

        <transition
          enter-active-class="animated bounce"
          leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">This is some information</div>
        </transition>

        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some information</div>
          <div class="alert alert-warning" v-else key="warning">This is a warning</div>
        </transition>

        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled">
          <div style="background-color: lightgreen; height: 6em; width: 6em" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        load: true,
        show: false,
        alertAnimation: 'fade',
      };
    },
    methods: {
      beforeEnter (el) {
        console.log('beforeEnter');
      },
      enter (el, done) {
        console.log('enter');
        done(); // Tell Vue.js when the animation has finished
      },
      afterEnter (el) {
        console.log('afterEnter');
      },
      enterCancelled (el) {
        console.log('enterCancelled');
      },
      beforeLeave (el) {
        console.log('beforeLeave');
      },
      leave (el) {
        console.log('leave');
      },
      afterLeave (el) {
        console.log('afterLeave');
      },
      leaveCancelled (el) {
        console.log('leaveCancelled');
      },
    },
  };
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    opacity: 0;
    transition: opacity 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(1em);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(1em);
    }
  }
</style>
