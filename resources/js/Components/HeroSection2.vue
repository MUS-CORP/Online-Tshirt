<template>
  <section id="secition2" class="relative mb-90">
    <div
      ref="elementKotak"
      class="flex flex-col border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 left-9 w-10 h-100 absolute bg-blue-600"
    ></div>

    <div class="container mb-5">
      <div class="text-5xl text-center mb-10">
        <span class="font-bold px-5 border-t border-cyan-700">New</span
        ><span>T-shirt</span>
      </div>

      <div class="grid grid-cols-3 gap-x-5">
        <div
          class="flex flex-col relative overflow-hidden group hover:shadow-2xl delay-150"
        >
          <a
            class="group-hover:blur-sm group-hover:shadow-lg group-hover:transition delay-150 duration-300 bg-white border shadow-sm rounded-xl"
            href="#"
          >
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="object-cover rounded-t-xl"
                src="/assets/images/stock11.avif"
                alt="Image Description"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800">Djack T-shirt</h3>
              <p class="mt-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, maiores!
              </p>
              <span class="mt-5 text-black text-lg">Rp 200,000.00</span>
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
        <div
          class="flex flex-col relative overflow-hidden group hover:shadow-2xl delay-150"
        >
          <a
            class="group-hover:blur-sm group-hover:shadow-lg group-hover:transition delay-150 duration-300 bg-white border shadow-sm rounded-xl"
            href="#"
          >
            <img
              class="w-full rounded-t-xl"
              src="/assets/images/stock11.avif"
              alt="Image Description"
            />
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800">Rel T-shirt</h3>
              <p class="mt-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, maiores!
              </p>
              <span class="mt-5 text-black text-lg">Rp 200,000.00</span>
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
        <div
          class="flex flex-col relative overflow-hidden group hover:shadow-2xl delay-150"
        >
          <a
            class="group-hover:blur-sm group-hover:shadow-lg group-hover:transition delay-150 duration-300 bg-white border shadow-sm rounded-xl"
            href="#"
          >
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="object-cover rounded-t-xl"
                src="/assets/images/stock22.avif"
                alt="Image Description"
              />
            </div>
            <div class="p-4 md:p-5">
              <h3 class="text-lg font-bold text-gray-800">Raar T-shirt</h3>
              <p class="mt-5 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, maiores!
              </p>
              <span class="mt-5 text-black text-lg">Rp 200,000.00</span>
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
        <div
          ref="elementKotak2"
          class="flex flex-col border border-gray-200 shadow-sm rounded-xl top-1/4 right-20 md:p-5 w-10 h-200 absolute bg-blue-600"
        ></div>
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
