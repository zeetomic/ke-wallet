<template>
  <v-row>
    <v-col>
      <v-card class="pa-4">
        <h2 style="color: #415593">Transaction</h2>
        <v-tabs color="#415593" height="40">
          <v-tab>All</v-tab>
          <v-tab>Received</v-tab>
          <v-tab>Send</v-tab>
        </v-tabs>
        <div v-if="history.error">
          <h4 style="color: red" class="pt-6">{{ history.error.message }}</h4>
          <br />
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import history from '~/utils/history.js';

export default {
  middleware: ['auth'],
  asyncData: history 
}
</script>

<style scoped>
.ke_token {
  width: 26px;
  margin: 5px; 
}
</style>