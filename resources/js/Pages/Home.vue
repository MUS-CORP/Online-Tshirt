<template>
  <div ref="container">
    <Navbar />
    <HeroSection />
    <HeroSection2 />
  </div>
</template>

<script>
import Navbar from "../Components/Navbar.vue";
import HeroSection from "../Components/HeroSection.vue";
import HeroSection2 from "../Components/HeroSection2.vue";
import { Link } from "@inertiajs/vue3";
// import LocomotiveScroll from "locomotive-scroll";

// import locomotiveScroll from "locomotive-scroll";
export default {
  components: {
    Navbar,
    HeroSection,
    HeroSection2,
  },
};
</script>
