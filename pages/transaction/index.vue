<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="detail">
          <h2 style="color: #415593">Transaction</h2>
          <v-tabs color="#415593" height="40">
            <v-tab>All</v-tab>
            <v-tab>Received</v-tab>
            <v-tab>Send</v-tab>
          </v-tabs>
          <div v-if="history.error">
            <h4 style="color: red" class="pt-6">{{ history.error.message }}</h4>
            <br>
            <v-btn rounded color="pink darken-3 white--text" to="/getwallet">Get Wallet</v-btn>
          </div>
          <v-data-table
            v-if="!history.error"
            hide-default-footer
            hide-default-header
          >
            <template v-if="!history.error && history.length > 0" v-slot:header> 
              <thead>
                <tr>
                  <th class="text-left" style="color: #79c4ff">Asset</th>
                  <th class="text-left" style="color: #79c4ff">Amount</th>
                  <th class="text-left" style="color: #79c4ff">Status</th>
                </tr>
              </thead>
            </template>
            <template v-if="!history.error && history.length > 0" v-slot:body>
              <tbody>
                <tr v-for="item in history" :key="item.id">
                  <td class="d-flex align-center">
                    <img src="../../assets/KE_logo_sm.svg" alt="ke_token" class="ke_token">
                    <span>{{ `KE Token` }}</span>
                  </td>
                  <td>
                    <span>{{ item.amount ? (item.amount/ Math.pow(10, 8)) : null }}</span> 
                  </td>
                  <td>
                    Complete
                  </td>
                </tr>
              </tbody>
            </template>
            <template v-if="history.length <= 0" v-slot:no-data>
              <span>No data available</span>
            </template>
          </v-data-table>
          <!-- <v-simple-table
            v-if="!history.error"
            :height="300"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="color: #79c4ff">Asset</th>
                  <th class="text-left" style="color: #79c4ff">Amount</th>
                  <th class="text-left" style="color: #79c4ff">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in history" :key="item.id">
                  <td class="d-flex align-center">
                    <img src="../../assets/KE_logo_sm.svg" alt="ke_token" class="ke_token">
                    <span>{{ `KE Token` }}</span>
                  </td>
                  <td>
                    <span>{{ item.amount ? (item.amount/ Math.pow(10, 8)) : null }}</span> 
                  </td>
                  <td>
                    Complete
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cookie from 'js-cookie';
import axios from 'axios';
export default {
  asyncData ({req, res, error, redirect}) {
    let token;
    if (process.server) {
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
    }
    if (process.client) {
      token = Cookie.get("jwt");
    }
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    };
    return axios.get(process.env.KEUrl + "/trx-history", config)
      .then((res) => {
        return { history: res.data }
      })
      .catch((e) => {
        redirect({
          name: 'login'
        })
      })
  },
}
</script>

<style scoped>
.ke_token {
  width: 26px;
  margin: 5px; 
}
</style>