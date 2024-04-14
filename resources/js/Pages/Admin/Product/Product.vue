<template>
  <Dashboard>
    <template v-slot:isiKonten>
      <div v-if="notification" class="">
        <h1>{{ this.notification }}</h1>
      </div>
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
          <h4 class="my-5 text-primary font-bold">Data Product</h4>
          <div class="ml-auto">
            <inertia-link
              href="/TambahProduct"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-500 disabled:opacity-50 disabled:pointer-events-none"
              >Tambah</inertia-link
            >
          </div>
        </div>
        <hr />
        <div class="card-body p-5">
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table
                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Harga
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Deskripsi
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Foto
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(data, index) in Product"
                        :key="data.id"
                        class="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                      >
                        <td
                          class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                          {{ index + 1 }}
                        </td>
                        <td
                          class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                          {{ data.name }}
                        </td>
                        <td
                          class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          {{ data.harga }}
                        </td>
                        <td
                          class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          {{ data.deskripsi }}
                        </td>
                        <td
                          class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          <img
                            :src="getImagePath(data.foto)"
                            alt="Example Image"
                            class="w-auto h-44 mx-auto"
                          />
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium"
                        >
                          <inertia-link
                            :href="'/GetDetailBaju/' + data.id"
                            type="button"
                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                          >
                            Ubah
                          </inertia-link>
                          |
                          <button
                            @click="hapusProduct(data.id)"
                            type="button"
                            class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Dashboard>
</template>
<script>
import axios from "axios";
import Dashboard from "../../../Layouts/Dashboard.vue";
import { useForm } from "@inertiajs/vue3";
export default {
  // layout: Dashboard,
  data() {
    return {
      CekUsers: "",
      Product: [],
      no: 0,
    };
  },
  name: "Product",
  components: {
    Dashboard,
  },
  mounted() {
    this.dataProduct();
  },

  methods: {
    getImagePath(asset) {
      return `../assets/uploads/${asset}`;
    },
    hapusProduct(id) {
      axios
        .post(`/api/deleteBaju/${id}`)
        .then((response) => {
          console.log("sukses");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    dataProduct() {
      axios
        .get("/api/GetDataBaju")
        .then((response) => {
          this.Product = response.data;
          console.log(this.Product);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
