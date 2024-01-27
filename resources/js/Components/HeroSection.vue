<template>
  <section id="home" class="relative">
    <div
      ref="elementKotak4"
      class="flex flex-col border border-gray-200 shadow-sm rounded-xl top-56 left-20 md:p-5 w-10 h-100 absolute bg-blue-600"
    ></div>
    <div
      class="m-5 bg-red-400 border-radius=34% 66% 33% 67% / 55% 3% 97% 45%"
    ></div>
    <div class="container overflow-hidden">
      <div class="grid grid-cols-2 items-center justify-center h-screen">
        <div
          ref="elementKotak3"
          class="flex flex-col border border-gray-200 shadow-sm rounded-xl right-20 md:p-5 w-10 h-100 absolute bg-blue-600"
        ></div>
        <div class="flex-col">
          <h1 class="font-extrabold leading-relaxed text-7xl my-5 block">
            Express Your Style, Wear Your Passion
          </h1>
          <h2 class="text-lg mb-10 text-slate-500 font-medium leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos
            tempore, molestiae animi eveniet porro sit unde assumenda. Impedit,
            voluptatum.
          </h2>
          <div class="mt-5">
            <button
              type="button"
              class="py-5 px-20 hover:scale-75 transition duration-300 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Get Started
            </button>
          </div>
        </div>
        <div class="w-full myElement" ref="myElement">
          <div class="relative box">
            <img class="w-1/2 mx-auto" src="/assets/images/hero1.png" />
            <div class="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2">
              <svg
                width="500"
                height="500"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#2563EB"
                  d="M46.5,-58.9C61.3,-53.2,75.2,-41.1,77.4,-26.9C79.6,-12.7,70.2,3.5,63.6,19.6C56.9,35.7,53,51.6,42.8,62.5C32.7,73.4,16.4,79.4,-1.2,81C-18.7,82.6,-37.4,79.9,-46.3,68.6C-55.1,57.2,-54.1,37.2,-59.7,19.5C-65.3,1.8,-77.5,-13.7,-75.7,-26.2C-73.8,-38.7,-57.9,-48.2,-42.9,-53.8C-27.9,-59.4,-14,-61.1,0.9,-62.4C15.8,-63.7,31.7,-64.5,46.5,-58.9Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    // Use GSAP to animate the element with a 1-second duration and slide it to the right
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: ".myElement",
        },
      })
      .to(this.$refs.myElement, {
        duration: 1,
        x: 100,
      });
    this.setupAnimation(this.$refs.elementKotak3);
    this.setupAnimation(this.$refs.elementKotak4);
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
