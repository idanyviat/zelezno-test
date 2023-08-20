<template>
    <div class="table-container">
        <SearchPanel v-model="searchText" @update:modelValue="searchPost"/>
        <table class="table">
            <thead>
              <tr>
                <td>postID</td>
                <td v-show="!isUser">userId</td>
                <td>postTitle</td>
                <td>Content</td>
              </tr>
            </thead>
            <tbody v-if="isUser">
              <tr v-for="element in posts" :key="element.id">
                <td>{{ element.id }}</td>
                <td>{{ element.title }}</td>
                <td>
                  <a
                    href="#"
                    @click="openModal($event, element.body)"
                  >{{ element.body.slice(0, 29) + '...' }}</a>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr v-for="element in posts" :key="element.id">
                <td>{{ element.id }}</td>
                <td>{{ element.userId }}</td>
                <td>{{ element.title }}</td>
                <td>
                  <a
                    href="#"
                    @click="openModal($event, element.body)"
                  >{{ element.body.slice(0, 29) + '...' }}</a>
                </td>
              </tr>
            </tbody>
        </table>
    </div>
    <Modal v-if="isOpenModal" :text="modalText" @close-modal="closeModal"/>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import SearchPanel from '../components/SearchPanel.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'TableView',
  components: {
    SearchPanel,
    Modal,
  },
  props: ['user'],
  setup() {
    const route = useRoute();
    const store = useStore();
    const posts = ref(store.state.posts);
    const isUser = ref(false);
    const searchText = ref(null);
    const isOpenModal = ref(false);
    const modalText = ref(null);

    const searchPost = (event) => {
      searchText.value = event;

      if (event === '') {
        posts.value = store.state.posts;
        return;
      }

      const result = posts.value.filter((el) => el.title.includes(event));
      if (result.length) {
        posts.value = result;
      }
    };

    const openModal = (event, text) => {
      event.preventDefault();
      isOpenModal.value = true;
      modalText.value = text;
    };

    const closeModal = () => {
      isOpenModal.value = false;
    };

    watch(
      () => route.params.user,
      async (user) => {
        isUser.value = (user === 'true');
      },
    );

    onMounted(() => {
      posts.value = store.state.posts;
      isUser.value = (route.params.user === 'true');
    });

    return {
      posts,
      isUser,
      searchText,
      isOpenModal,
      modalText,
      searchPost,
      openModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.table-container {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 0 20px;
  max-width: 700px;
}

.table {
  display: block;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid var(--bg-color-main);

  th, td {
    border: 1px solid var(--bg-color-main);
  }

  td {
    text-align: left;
  }
}
</style>
