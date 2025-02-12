<template>
  <div class="box">
    <slot>Default Content</slot>
    <!-- Jika parent tidak mengisi slot, akan tampil "Default Content" -->
  </div>
</template>

<style>
.box {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
}
</style>
