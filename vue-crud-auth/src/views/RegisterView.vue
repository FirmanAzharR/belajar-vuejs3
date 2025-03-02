<template>
  <div class="register-container">
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <a-card class="w-96 shadow-lg">
        <h2 class="text-center text-xl font-bold mb-4">Register</h2>
        <a-form layout="vertical" @finish="handleRegister" :model="form" :rules="rules">
          <a-form-item label="Username" name="username">
            <a-input v-model:value="form.username" placeholder="Enter your username" />
          </a-form-item>

          <a-form-item label="Email" name="email">
            <a-input v-model:value="form.email" placeholder="Enter your email" />
          </a-form-item>

          <a-form-item label="Password" name="password">
            <a-input-password
              v-model:value="form.password"
              placeholder="Enter your password"
            />
          </a-form-item>

          <a-form-item label="Confirm Password" name="confirmPassword">
            <a-input-password
              v-model:value="form.confirmPassword"
              placeholder="Confirm your password"
            />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" block html-type="submit" :loading="loading"
              >Register</a-button
            >
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const loading = ref(false);

const rules = {
  username: [{ required: true, message: "Username is required" }],
  email: [{ required: true, message: "Email is required" }],
  password: [{ required: true, message: "Password is required" }],
  confirmPassword: [
    { required: true, message: "Please confirm your password" },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Passwords do not match!"));
      },
    }),
  ],
};

const handleRegister = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    console.log("Register Data:", form);
  }, 1000);
};
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
}
</style>
