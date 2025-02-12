<template>
    <div class="box">
      <header>
        <slot name="header">Default Header</slot>
      </header>
      <main>
        <slot>Default Content</slot>
      </main>
      <footer>
        <slot name="footer">Default Footer</slot>
      </footer>
    </div>
  </template>
  