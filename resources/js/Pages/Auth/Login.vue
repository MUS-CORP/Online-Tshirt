<template>
  <div class="flex h-screen flex-col justify-center px-6 py-64 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <a
        class="flex justify-center font-semibold text-black"
        href="#"
        aria-label="Brand"
        ><img class="h-auto w-36" src="/assets/images/MUSTORE.png" alt=""
      /></a>
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="submitForm(form)">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="form.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="form.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Belum mempunyai akun?
        <inertia-link
          href="/register"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Registrasi disini</inertia-link
        >
      </p>
    </div>
  </div>
  <div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";
import { useForm } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
export default {
  components: {},

  data() {
    return {
      AuthCheck: "",
      error: null,
      form: useForm({
        email: "",
        password: "",
      }),
    };
  },

  mounted() {
    axios
      .get("/api/cekLogin")
      .then((response) => {
        this.AuthCheck = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  methods: {
    submitForm(form) {
      form.post("/api/PostLogin", {
        preserveScroll: true,
      });
    },
  },
};
</script>
