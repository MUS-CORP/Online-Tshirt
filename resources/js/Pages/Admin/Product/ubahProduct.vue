<template>
  <Dashboard>
    <template v-slot:isiKonten>
      <div class="card w-full bg-base-100 rounded-lg shadow-xl">
        <div class="flex ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-5 text-primary font-bold"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4z"
            />
          </svg>
          <h4 class="my-5 text-primary font-bold">Ubah Product</h4>
        </div>
        <hr />
        <div class="card-body p-5">
          <form class="space-y-6" @submit.prevent="submitForm(form)">
            <div
              class="flex min-[768px]:items-center max-[768px]:flex-col gap-x-6 mb-5"
            >
              <div
                class="flex-none min-[768px]:w-2/12 max-[768px]:mb-2 items-center"
              >
                <label class="mb-2 text-black">Nama barang: </label>
              </div>
              <div class="flex-grow">
                <div class="flex-grow">
                  <div class="relative w-full">
                    <input
                      v-model="form.name"
                      class="mr-2 block rounded-lg w-full p-2.5 border bg-white input input-md border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex min-[768px]:items-center max-[768px]:flex-col gap-x-6 mb-5"
            >
              <div
                class="flex-none min-[768px]:w-2/12 max-[768px]:mb-2 items-center"
              >
                <label class="mb-2 text-black">Harga barang: </label>
              </div>
              <div class="flex-grow">
                <div class="flex-grow">
                  <div class="relative w-full">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-4 text-md pointer-events-none"
                    >
                      IDR
                    </div>
                    <input
                      v-model="form.harga"
                      class="mr-2 block rounded-lg w-full pl-20 p-2.5 border bg-white input input-md border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex min-[768px]:items-center max-[768px]:flex-col gap-x-6 mb-5"
            >
              <div
                class="flex-none min-[768px]:w-2/12 max-[768px]:mb-2 items-center"
              >
                <label class="mb-2 text-black">Deskripsi barang: </label>
              </div>
              <div class="flex-grow">
                <div class="flex-grow">
                  <textarea
                    v-model="form.deskripsi"
                    class="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    rows="6"
                    placeholder="Inputkan Deskripsi barang disini..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div
              class="flex min-[768px]:items-center max-[768px]:flex-col gap-x-6 mb-5"
            >
              <div
                class="flex-none min-[768px]:w-2/12 max-[768px]:mb-2 items-center"
              >
                <label class="mb-2 text-black">Ubah Gambar: </label>
              </div>
              <div class="flex-grow">
                <img
                  :src="getImagePath(this.dataDetailProduct.foto)"
                  alt="Example Image"
                  class="w-auto h-44 my-5"
                />
                <input
                  @input="form.foto = $event.target.files[0]"
                  type="file"
                  id="file-input"
                  class="block w-full border border-gray-300 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
                />

                <progress
                  v-if="form.progress"
                  :value="form.progress.percentage"
                  max="100"
                >
                  {{ form.progress.percentage }}%
                </progress>
              </div>
            </div>

            <div class="flex p-5 justify-end">
              <button
                type="submit"
                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </Dashboard>
</template>
<script>
import Dashboard from "../../../Layouts/Dashboard.vue";
import { useForm } from "@inertiajs/vue3";
export default {
  // layout: Dashboard,
  data() {
    return {
      CekUsers: "",
      form: useForm({
        id: this.dataDetailProduct.id,
        name: this.dataDetailProduct.name,
        harga: this.dataDetailProduct.harga,
        deskripsi: this.dataDetailProduct.deskripsi,
        foto: "",
      }),
    };
  },
  props: {
    dataDetailProduct: {
      type: Object,
      default: () => ({}),
    },
  },
  name: "Product",
  components: {
    Dashboard,
  },
  mounted() {},

  methods: {
    getImagePath(asset) {
      return `../assets/uploads/${asset}`;
    },
    getDetailProduct() {
      axios
        .get("/api/GetDetailBaju")
        .then((response) => {
          this.Product = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },

    submitForm(form) {
      const response = form.put(`/api/updateBaju/${form.id}`, {
        preserveScroll: true,
      });
      this.$swal("success", "Berhasil mengubah data");
    },
  },
};
</script>
