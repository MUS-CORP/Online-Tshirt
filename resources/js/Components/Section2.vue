<template>
  <section id="section2" class="relative mb-90">
    <div class="container mb-5">
      <div class="text-5xl text-center mb-10">
        <span class="font-bold px-5 border-t border-cyan-700">New</span
        ><span>T-shirt</span>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5"
      >
        <div
          v-for="(key, index) in GetDataBaju"
          :key="index"
          class="flex flex-col relative overflow-hidden group"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <a
            class="group-hover:blur-sm group-hover:shadow-lg group-hover:transition delay-150 duration-300 bg-white border shadow-sm rounded-xl"
            href="#"
          >
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="object-cover rounded-t-xl"
                :src="getImagePath(key.foto)"
                alt="Image Description"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800">{{ key.name }}</h3>
              <p class="mt-5 text-gray-500">
                {{ key.deskripsi }}
              </p>
              <span class="mt-5 text-black text-lg">Rp {{ key.harga }}</span>
            </div>
          </a>
          <div
            class="w-full absolute flex items-center h-screen justify-center opacity-0 group-hover:backdrop-blur group-hover:opacity-100 group-hover:blur-none transition-opacity duration-300"
          >
            <a
              href=""
              class="py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
            >
              Lihat Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import gsap from "gsap";
export default {
  data() {
    return {
      GetDataBaju: [],
    };
  },
  mounted() {
    // Use GSAP to animate the element with a 1-second duration and slide it to the right
    // gsap.to(this.$refs.myElement, { duration: 1, x: 100 });
    gsap.registerPlugin(ScrollTrigger);
    this.setupAnimation(this.$refs.elementKotak);
    this.setupAnimation2(this.$refs.elementKotak2);
  },
  created() {
    this.getApiDataBaju();
  },
  methods: {
    getImagePath(asset) {
      return `../assets/uploads/${asset}`;
    },
    setupAnimation(value) {
      gsap
        .timeline({
          scrollTrigger: {
            x: -100,
            scrub: 2,
            trigger: value,
          },
        })
        .to(value, {
          duration: 1,
          x: 100,
        });
    },
    getApiDataBaju() {
      axios
        .get("/api/GetDataBaju")
        .then((response) => {
          this.GetDataBaju = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    setupAnimation2(value) {
      gsap
        .timeline({
          scrollTrigger: {
            x: -100,
            scrub: 2,
            trigger: value,
          },
        })
        .to(value, {
          duration: 1,
          x: -100,
        });
    },
  },
};
</script>
