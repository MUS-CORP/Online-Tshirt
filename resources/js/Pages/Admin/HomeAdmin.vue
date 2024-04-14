<template>
  <Dashboard>
    <template v-slot:isiKonten>
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total users
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">
            {{ this.CekUsers }}
          </div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total Profit
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">
            Rp. 450.000
          </div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">
            Total Orders
          </div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">20</div>
        </div>
      </div>
    </template>
  </Dashboard>
</template>
<script>
import axios from "axios";
import Dashboard from "../../Layouts/Dashboard.vue";
export default {
  data() {
    return {
      CekUsers: "",
    };
  },
  components: {
    Dashboard,
  },
  mounted() {
    this.CekUser();
  },

  methods: {
    CekUser() {
      axios
        .get("/api/cekCountUser")
        .then((response) => {
          this.CekUsers = response.data.total_users;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
