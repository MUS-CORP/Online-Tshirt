<template>
  <div class="container">
    <div class="grid grid-cols-2 items-center justify-center h-screen">
      <div class="flex-col">
        <h1 class="font-bold text-5xl my-5 block">T-shirt</h1>
        <h2 class="text-lg text-slate-500 font-medium leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          voluptatum. Facere quasi adipisci quo qui!
        </h2>
        <div class="mt-5">
          <button
            type="button"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Solid
          </button>
        </div>
      </div>
      <div class="justify-end z-1 relative">
        <!-- <img src="{{ asset('assets/images/hero1.png') }}" alt="">  -->
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#2563EB"
            d="M46.5,-58.9C61.3,-53.2,75.2,-41.1,77.4,-26.9C79.6,-12.7,70.2,3.5,63.6,19.6C56.9,35.7,53,51.6,42.8,62.5C32.7,73.4,16.4,79.4,-1.2,81C-18.7,82.6,-37.4,79.9,-46.3,68.6C-55.1,57.2,-54.1,37.2,-59.7,19.5C-65.3,1.8,-77.5,-13.7,-75.7,-26.2C-73.8,-38.7,-57.9,-48.2,-42.9,-53.8C-27.9,-59.4,-14,-61.1,0.9,-62.4C15.8,-63.7,31.7,-64.5,46.5,-58.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script></script>
