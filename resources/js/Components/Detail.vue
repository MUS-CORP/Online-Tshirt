<template>
  <section>
    <h1>tes</h1>
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    // Use GSAP to animate the element with a 1-second duration and slide it to the right
    // gsap.to(this.$refs.myElement, { duration: 1, x: 100 });
    gsap.registerPlugin(ScrollTrigger);

    this.setupAnimation(this.$refs.elementKotak);
    this.setupAnimation(this.$refs.elementKotak2);
  },
  methods: {
    setupAnimation(value) {
      gsap
        .timeline({
          scrollTrigger: {
            scrub: 2,
            trigger: value,
          },
        })
        .to(value, {
          duration: 1,
          rotation: 360,
        });
    },
  },
};
</script>
