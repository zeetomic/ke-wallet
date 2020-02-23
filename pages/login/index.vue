<template>
  <div class="container">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pa-6">
        <span class="font-weight-bold display-1" style="color: #415593">Login To KE Wallet</span>
        <div style="padding: 1.6rem"></div>
        <v-form 
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            label="Phone number"
            v-model="phone"
            type="tel"
            :rules="phoneRule"
            outlined
            required
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="passwordRule"
            outlined
            required
          ></v-text-field>
          <v-btn class="primary" large style="width: 100%" :loading="loading" @click="handleLogin()">Login</v-btn>
          <v-row>
            <v-col>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn text to="/register">Sign Up</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
      </v-col>
    </v-row>
    <!-- <notifications group="foo" position="top center"/> -->
  </div>
</template>

<script>
import { message } from "@/plugins/Mixin/message.js";
import { validate } from '@/plugins/Mixin/validate.js';

export default {
  layout: 'login_register',
  mixins: [message, validate],
  data() {
    return {
      phone: '+855',
      password: '',

      loading: false,
    }
  },
  methods: {
    handleLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$store.dispatch('users/handleLogin', {
          phone: this.phone,
          password: this.password
        })
        .then(() => {
          if(this.type === 'error'){ 
            this.$toast.error(this.msg);
          } else {
            this.$toast.success('Login Successfully');
          }
          this.loading = false;
        })
      }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    padding: 15% 0;
  }
  .ke_logo {
    /* width: 300px; */
    background: url("~assets/Logo_KE.svg");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
</style>