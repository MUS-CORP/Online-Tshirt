<template>
  <section id="secition2" class="relative mb-90">
    <div class="container my-64">
      <div
        ref="elementKotak"
        class="flex flex-col border border-gray-200 shadow-sm rounded-xl py-64 md:p-5 left-9 w-10 h-100 absolute bg-blue-600"
      ></div>

      <div
        class="flex flex-col bg-blue-600 border mb-40 py-20 px-32 border-gray-200 shadow-sm rounded-2xl"
      >
        <div class="grid grid-cols-2">
          <div class="flex flex-col gap-y-10 justify-center h-100">
            <span class="font-bold text-4xl mb-5 text-white"
              >Do you have a new question?</span
            >
            <span class="text-white text-xl flex justify-items-center"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis dolor fugiat cum doloribus amet eum nemo aspernatur ea
              consequatur.</span
            >
            <div class="flex justify-start items-start">
              <button
                type="button"
                class="py-5 px-8 text-md font-semibold rounded-lg border border-transparent bg-white text-black hover:scale-75 transition duration-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Get Started
              </button>
            </div>
          </div>
          <div class="" ref="promotionImage">
            <img
              class="flex justify-items-center ml-auto px w-72 hover:rotate-180 hover:-scale-x-105 transition duration-500 -rotate-6"
              src="/assets/images/promotionImage.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        ref="elementKotak2"
        class="flex flex-col border border-gray-200 shadow-sm rounded-xl py-64 md:p-5 right-10 bottom-9 w-10 absolute bg-blue-600"
      ></div>
    </div>
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
    this.setupAnimationPromotionImage(this.$refs.promotionImage);
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
    setupAnimationPromotionImage(value) {
      gsap
        .timeline({
          scrollTrigger: {
            scrub: 2,
            trigger: value,
          },
        })
        .to(value, {
          duration: 1,
          scale: 1.2,
        });
    },
  },
};
</script>
