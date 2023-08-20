<template>
    <div class="header">
      <div class="container">
        <router-link class="home-btn" :to="{path: '/'}">
          <img src="../assets/home.svg" alt="home">
        </router-link>
        <router-link
          class="navigate-btn"
          :to="{name: 'table', params: {user: false}}">
          Админ
        </router-link>
        <router-link
          class="navigate-btn"
          :to="{name: 'table', params: {user: true}}">
          Пользователь
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    padding: 25px 20px;
    height: 70px;
    background-color: var(--bg-color-main);

    .container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
    }
}

.navigate-btn {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: #fff;
  text-decoration: none;
  border: 1px solid var(--bg-color-main);
  border-radius: 20px;

  &:hover {
    color: grey;
  }
}

.home-btn {
  color: var(--color-text-secondary);

  img {
    width: 26px;
    height: 26px;
  }
}
</style>
