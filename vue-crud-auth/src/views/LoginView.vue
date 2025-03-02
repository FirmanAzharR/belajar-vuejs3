<template>
  <div class="login-container">
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <a-card class="w-96 shadow-lg">
        <h2 class="text-center text-xl font-bold mb-4">Login</h2>
        <a-form layout="vertical" @finish="handleLogin" :model="form" :rules="rules">
          <a-form-item label="Email" name="email">
            <a-input v-model:value="form.email" placeholder="Enter your email" />
          </a-form-item>

          <a-form-item label="Password" name="password">
            <a-input-password
              v-model:value="form.password"
              placeholder="Enter your password"
            />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" block html-type="submit" :loading="authStore.loading"
              >Login</a-button
            >
          </a-form-item>
        </a-form>
        <h1 v-show="authStore.error">{{ authStore.error }}</h1>
        <h1 v-show="authStore.user">Berhasil Login</h1>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { authStore } from "@/stores/auth/authStore";

const authUserStore = authStore();

const form = reactive({
  email: "",
  password: "",
});

const rules = {
  email: [{ required: true, message: "Email is required" }],
  password: [{ required: true, message: "Password is required" }],
};

const handleLogin = () => {
  authUserStore.login(form);
  // router.push("/dashboard");
};
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
}

.login-card {
  width: 350px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #fff;
}

.title {
  text-align: center;
}
</style>
