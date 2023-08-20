<template>
    <div class="footer">
        <div class="container">
            <div class="footer__creator">
                <span>2023</span>
                <a href="https://github.com/idanyviat/zelezno-test" class="link-git">
                    <img src="../assets/github.svg" alt="github">
                    Дулгер Даниил
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    margin-top: auto;
    width: 100%;
    height: 70px;
    background-color: var(--bg-color-main);

    &__creator {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        color: var(--color-text-secondary);
        flex-basis: 100%;
    }
}

.link-git {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    gap: 6px;

    &:hover {
        color: grey;
    }

    img {
        width: 20px;
        height: 20px;
    }
}
</style>
