<template>
  <header
    class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent text-sm py-3 sm:py-0"
  >
    <nav
      class="relative mt-5 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
    >
      <div class="flex items-center justify-between">
        <a
          class="flex-none font-semibold text-black"
          href="#"
          aria-label="Brand"
          ><img class="w-16 h-auto" src="/assets/images/MUSTORE.png" alt=""
        /></a>
        <div class="sm:hidden">
          <button
            type="button"
            class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-black hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7"
        >
          <div class="mx-auto text-sm gap-x-4">
            <a
              class="font-medium text-black sm:py-6"
              href="#"
              aria-current="page"
              >Home</a
            >
            <a
              class="font-medium text-black/[.8] px-5 hover:text-black sm:py-6"
              href="#secition2"
              >About</a
            >
            <a
              class="font-medium text-black/[.8] hover:text-black sm:py-6"
              @click="scrollToSection2"
              href="#"
              >Product</a
            >
          </div>
          <inertia-link
            v-if="this.AuthCheck != 'Pengguna sudah login'"
            href="/login"
            class="flex text-sm items-center gap-x-2 font-medium text-black/[.8] hover:text-black sm:border-white/[.3] sm:my-6 sm:ps-6"
          >
            <svg
              class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Log in
          </inertia-link>
          <form
            @submit.prevent="submitForm(form)"
            v-if="this.AuthCheck != 'Pengguna belum login'"
          >
            <button
              type="submit"
              class="flex text-xl items-center gap-x-2 font-medium text-black/[.8] hover:text-black sm:border-white/[.3] sm:my-6 sm:ps-6"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Log out
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useForm } from "@inertiajs/vue3";
export default {
  props: ["AuthCheck", "scrollToSection2"],
  data() {
    return {
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
