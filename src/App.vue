<template>
  <div class="example">
    {{ msg }}
    <img :src="url" />
  </div>
</template>

<script>
import logo from './assets/logo.png';

export default {
  data() {
    return {
      msg: 'Hello Vue1',
      url: logo,
    };
  },
};
</script>

<style>
.example {
  color: red;
}
</style>