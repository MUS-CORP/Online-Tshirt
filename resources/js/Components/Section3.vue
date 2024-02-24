<template>
  <section id="secition2" class="relative mb-90">
    <div
      ref="elementKotak"
      class="flex flex-col shadow-sm rounded-xl z-10 opacity-20 p-4 md:p-5 -left-28 w-10 absolute"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="180"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5"
        />
      </svg>
    </div>
    <div class="container my-64">
      <div
        class="flex flex-col bg-blue-600 border mb-40 py-20 md:px-32 px-10 border-gray-200 shadow-sm rounded-2xl"
      >
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="flex flex-col gap-y-10 justify-center h-100">
            <span
              class="font-bold text-2xl text-white"
              data-aos="flip-up"
              data-aos-delay="150"
              >Do you have a new question?</span
            >
            <span
              class="text-white text-md flex justify-items-center"
              data-aos="zoom-out-right"
              data-aos-delay="250"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              omnis dolor fugiat cum doloribus amet eum nemo aspernatur ea
              consequatur.</span
            >
            <div class="flex justify-start items-start">
              <button
                type="button"
                class="py-5 px-8 text-md font-semibold rounded-lg border border-transparent bg-white text-black hover:scale-75 transition duration-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                Get Started
              </button>
            </div>
          </div>
          <div class="max-sm:mt-16" ref="promotionImage">
            <img
              class="flex justify-items-center max-sm:mx-auto md:ml-auto px w-48 hover:rotate-180 hover:-scale-x-105 transition duration-500 -rotate-6"
              src="/assets/images/promotionImage.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        ref="elementKotak2"
        class="shadow-sm rounded-xl z-10 opacity-20 -right-20 absolute overflow-hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5"
          />
        </svg>
      </div>
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
    this.setupAnimation2(this.$refs.elementKotak2);
    this.setupAnimationPromotionImage(this.$refs.promotionImage);
  },
  methods: {
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
    setupAnimation2(value) {
      gsap
        .timeline({
          scrollTrigger: {
            x: 100,
            scrub: 2,
            trigger: value,
          },
        })
        .to(value, {
          duration: 1,
          x: -100,
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
