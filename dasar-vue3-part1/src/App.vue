<script setup>
import { ref, watch, provide } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/CounterNumber.vue";
import TextInput from "./components/TextInput.vue";
import ChildEmit from "./components/ChildEmit.vue";
import ToggleSwitch from "./components/ToggleSwitch.vue";
import SlotComponent from "./components/SlotComponent.vue";
import NamedSlotComponent from "./components/NamedSlotComponent.vue";
import ChildSlot from "./components/ChildSlot.vue";
import OnMountedComponent from "./components/OnMountedComponent.vue";
import BeforeUpdateAndOnUpdate from "./components/BeforeUpdateAndOnUpdate.vue";
import UnMountAndBeforeUnmount from "./components/unMountAndBeforeUnmount.vue";
import ProvideInjectComponent from "./components/ProvideInjectComponent.vue";
import ProvideInjectModifiedVAlue from "./components/ProvideInjectModifiedVAlue.vue";

const message = ref("Hello World");
const fruitList = ref(["banana", "apple", "mango"]);
// const imageUrl = ref("https://vuejs.org/images/logo.png");
const isDisabled = ref(false);
const status = ref("online");
const isVisible = ref(true);
const count = ref(0);
const userInput = ref("");
const receive = ref(null);
const isActive = ref(false);

const increment = () => {
  count.value++;
};

const keyPressed = ref("");

const handleKeyup = (event) => {
  keyPressed.value = event.key;
};

const totalClicks = ref(0);

const handleIncrement = (newValue) => {
  totalClicks.value = newValue;
};

function receiveData(data) {
  receive.value = data;
  console.log("Data dari anak:", data);
}

const provideMessage = ref("Hello from Parent!");
provide("sharedMessage", provideMessage);

const countNumber = ref(0);

provide("sharedCount", countNumber);

watch(
  () => isActive.value,
  (newValue) => {
    console.log("Status baru:", newValue);
  }
);
</script>

<template>
  <div id="part2">
    <div class="box">
      <label>component and props</label><br />
      <label
        >Catatan: Gunakan : sebelum prop (:age, :isActive, dll.) agar dianggap sebagai
        JavaScript, bukan string.</label
      ><br />
      <label for="">Gunakan : untuk mengirimkan nilai non-string ke props.</label><br />
      <HelloWorld
        name="Vue Developer"
        :age="28"
        :isActive="true"
        :hobbies="['Coding', 'Gaming']"
        :user="{ name: 'John' }"
      />
    </div>
    <div class="box">
      <label for="">emit props</label>
      <h2>Total Klik: {{ totalClicks }}</h2>
      <Counter @increment="handleIncrement" />
    </div>

    <div class="box">
      <TextInput v-model="userInput" />
      <p>Input dari child: {{ userInput }}</p>
    </div>

    <div class="box">
      <label for="">another emit example</label><br />
      <ChildEmit @sendData="receiveData" />
      <p>Data yang diterima dari child: {{ receive }}</p>
    </div>

    <div class="box">
      <label for="">emit props v-model:custom-name</label><br />
      <ToggleSwitch v-model:checked="isActive" />
      <p>Status: {{ isActive ? "Aktif" : "Tidak Aktif" }}</p>
    </div>
    <div class="box">
      <label for="">default slot</label><br />
      <SlotComponent>
        <p>Halo dari Parent!</p>
        <!-- Konten dikirim ke <slot> -->
        <!-- Jika tidak ada konten, akan tampil "Default Content" -->
      </SlotComponent>
    </div>
    <div class="box">
      <label for="">named slot</label><br />
      <NamedSlotComponent>
        <template #header>
          <h1>Judul dari Parent</h1>
        </template>

        <p>Ini adalah konten utama.</p>

        <template #footer>
          <small>Footer dari Parent</small>
        </template>
      </NamedSlotComponent>
    </div>
    <div class="box">
      <label for="">child data slot to parent</label><br />
      <ChildSlot v-slot:default="{ user }">
        <p>Nama: {{ user.name }}</p>
        <p>Usia: {{ user.age }}</p>
      </ChildSlot>
    </div>
    <div class="box">
      <label for="">on mounted lifecycle</label>
      <OnMountedComponent />
    </div>
    <div class="box">
      <label for="">onBeforeUpdate dan onUpdate</label>
      <BeforeUpdateAndOnUpdate />
    </div>
    <div class="box">
      <label for="">onUnmounted dan onBeforeUnmount</label>
      <UnMountAndBeforeUnmount />
    </div>
    <div class="box">
      <label for="">Provide dan Inject</label>
      <h1>Parent Component</h1>
      <p>Message: {{ message }}</p>
      <ProvideInjectComponent />
    </div>
    <div class="box">
      <label for="">Provide dan Inject Modified Value</label>
      <h1>Parent Component</h1>
      <p>Count: {{ countNumber }}</p>
      <ProvideInjectModifiedVAlue />
    </div>
  </div>
  <div id="part1">
    <div class="box">
      <label>v-bind</label>
      <br />
      <!-- <img v-bind:src="imageUrl" alt="Gambar Vue" /> -->
      <button v-bind:disabled="isDisabled">Klik Saya</button>
    </div>
    <div class="box">
      <label>v-model</label>
      <br />
      <h4>{{ message }}</h4>
      <input v-model="message" placeholder="Your Message" />
    </div>
    <div class="box">
      <label>v-if-else</label>
      <br />
      <p v-if="status === 'online'">User Sedang Online</p>
      <p v-else-if="status === 'away'">User Sedang Away</p>
      <p v-else>User Sedang Offline</p>
    </div>
    <div class="box">
      <label>v-show</label>
      <p v-show="isVisible">Ini akan muncul jika `isVisible` bernilai true</p>
      <button @click="isVisible = !isVisible">Toggle</button>
    </div>

    <div class="box">
      <label>v-for</label>
      <ul>
        <li v-for="(item, index) in fruitList" :key="index">
          {{ index + 1 }} - {{ item }}
        </li>
      </ul>
    </div>

    <div class="box">
      <label>v-on</label><br />
      <button v-on:click="increment">Tambah</button>
      <p>Counter: {{ count }}</p>
    </div>

    <div class="box">
      <label>keyup</label><br />
      <input @keyup="handleKeyup" placeholder="Tekan tombol apa saja" />
      <p>Terakhir ditekan: {{ keyPressed }}</p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: green;
}

.box {
  margin: 20px;
}
label {
  font-weight: bold;
  color: firebrick;
}
</style>
