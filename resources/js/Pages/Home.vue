<template>
  <div ref="container" class="overflow-hidden">
    <Navbar :AuthCheck="this.AuthCheck" />
    <HeroSection />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
  </div>
</template>

<script>
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

  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>
