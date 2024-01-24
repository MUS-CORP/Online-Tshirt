<template>
  <div>
    <Navbar />
    <HeroSection />
    <Link href="/Login">Login</Link>
  </div>
</template>

<script>
import Navbar from "../Components/Navbar.vue";
import HeroSection from "../Components/HeroSection.vue";
import { Link } from "@inertiajs/vue3";
export default {
  components: {
    Navbar,
    HeroSection,
  },
};
</script>
