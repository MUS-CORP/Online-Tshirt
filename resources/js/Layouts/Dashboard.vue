<template>
  <div class="flex">
    <div
      :class="isOpen ? 'w-40' : 'w-60'"
      class="flex flex-col h-screen p-3 duration-300 bg-gray-800 shadow"
    >
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <a
            class="flex justify-center mt-10 font-semibold text-black"
            href="#"
            aria-label="Brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 72 72"
            >
              <path
                fill="#61b2e4"
                d="m23.513 14.31l-2.69 1.71V56h30.354V16.02l-2.871-1.63l-3.207-.861l.161-.613a2.115 2.115 0 0 0-1.242-2.496L40.56 9a12.834 12.834 0 0 0-7.84-.615l-2.028.482a6.955 6.955 0 0 0-4.683 3.797l-.373.79zM61 31.329l-9.823-3V16.021l12.823 6z"
              />
              <path
                fill="#92d3f5"
                d="M44.812 11.273s2.571 1.087-3.787 11.134l-3.209-5.165l4.505-4.846l1.553-1.781M27.93 10.61l2.007 2.75l4.513 4.853l-3.21 5.165c-7.157-8.853-4.706-11.283-4.706-11.283"
              />
              <path fill="#61b2e4" d="m11 31.329l9.823-3V16.021L8 22.021z" />
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m48.306 15.24l2.871.781V56H20.823V16.021l2.69-.861M61 31.329l-9.823-3V16.021l12.823 6zm-50 0l9.823-3V16.021L8 22.021z"
              />
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m42.322 12.396l-4.506 4.846l3.209 5.165c7.158-8.853 4.707-11.283 4.707-11.283c-10.443-8.361-19.69 0-19.69 0s-2.452 2.43 4.706 11.283l3.21-5.165l-4.513-4.853"
              />
              <circle cx="35.887" cy="21.675" r=".853" />
              <circle cx="35.887" cy="24.942" r=".853" />
              <circle cx="35.887" cy="28.208" r=".853" />
            </svg>
          </a>
          <button @click="isOpen = !isOpen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div class="flex-1">
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li class="rounded-sm">
              <inertia-link
                href="/dashboard"
                class="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span class="text-gray-100">Home</span>
              </inertia-link>
            </li>
            <li class="rounded-sm">
              <inertia-link
                href="/Product"
                class="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                  />
                </svg>

                <span class="text-gray-100">Product</span>
              </inertia-link>
            </li>
            <li class="rounded-sm">
              <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <span class="text-gray-100"> Orders </span>
              </a>
            </li>
            <li class="rounded-sm">
              <a href="#" class="flex items-center p-2 space-x-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-gray-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="text-gray-100"> Settings </span>
              </a>
            </li>
            <li class="rounded-sm">
              <form
                @submit.prevent="submitForm(form)"
                v-if="this.AuthCheck != 'Pengguna belum login'"
              >
                <button
                  type="submit"
                  class="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-gray-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>

                  <span class="text-gray-100"> Logout </span>
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-12">
      <slot name="isiKonten"></slot>
      <!-- <HomeAdmin /> -->
    </div>
  </div>
</template>
<script>
import { useForm } from "@inertiajs/vue3";
// import HomeAdmin from "./HomeAdmin.vue";
export default {
  data() {
    return {
      isOpen: true,
      form: useForm({}),
    };
  },

  methods: {
    submitForm(form) {
      form.post("/logout", {
        preserveScroll: true,
      });
    },
  },
};
</script>
