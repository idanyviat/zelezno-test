<template>
  <Template>
    <router-view/>
  </Template>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Template from './layout/Template.vue';

export default {
  name: 'App',
  components: {
    Template,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('getPosts');
    });

    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
