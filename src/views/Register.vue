<template>
    <div id="app">
      <Header subtitle="Create account"/>
  
      <b-form @submit="onSubmit">
        <b-form-group label="Username:" label-for="username">
          <b-form-input id="username" v-model="form.username" required></b-form-input>
        </b-form-group>

        <b-form-group label="Email address:" label-for="email">
          <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </b-form-group>
  
        <b-form-group label="Password:" label-for="password">
          <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
          <div id="emailHelp" class="form-text">Never share your password with anyone including our support team.</div>
        </b-form-group>
  
        <b-form-checkbox id="admin" v-model="form.admin" :value="true" :unchecked-value="false">Admin</b-form-checkbox>
        
        <br>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
  
    import Header from '@/components/Header.vue';
    import App from '@/App.vue'
    import { mapActions } from 'vuex';
  
    export default {
      name: 'Register',
      
      components: {
        Header,
        App
      },
  
      data() {
        return {
          form: {
            username: '',
            email: '',
            password: '',
            admin: false
          }
        }
      },
  
      methods: {
        ...mapActions([
          'register'
        ]),
  
        onSubmit(e) {
          e.preventDefault();
  
          this.register(this.form);
          this.$router.push({ name: 'Home' });
        }
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  