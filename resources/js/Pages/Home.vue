<template>
  <div ref="container" class="overflow-hidden">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section
          class="mb-10 bg-gradient-to-b from-linearBlue/40 via-white pb-10 to-linearBlue/40"
        >
          <Navbar
            :AuthCheck="this.AuthCheck"
            :scrollToSection2="scrollToSection2"
          />
          <HeroSection />
        </section>
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import axios from "axios";
import Navbar from "../Components/Navbar.vue";
import HeroSection from "../Components/HeroSection.vue";
import Section2 from "../Components/Section2.vue";
import Section3 from "../Components/Section3.vue";
import Section4 from "../Components/Section4.vue";
import Footer from "../Components/Footer.vue";
import { Link } from "@inertiajs/vue3";
// import LocomotiveScroll from "locomotive-scroll";

// import locomotiveScroll from "locomotive-scroll";
export default {
  data() {
    return {
      AuthCheck: "",
    };
  },
  components: {
    Navbar,
    HeroSection,
    Section2,
    Section3,
    Section4,
    Footer,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollSmoother);
    ScrollTrigger.normalizeScroll(true);
    let smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });
    this.scrollToSection2(smoother);
    const updateAuthStatus = () => {
      axios
        .get("/api/cekLogin")
        .then((response) => {
          this.AuthCheck = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    updateAuthStatus();
    this.intervalId = setInterval(updateAuthStatus, 1000);
  },
  methods: {
    scrollToSection2(smoother) {
      smoother.scrollTo("#section2", true, "center center");
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>
