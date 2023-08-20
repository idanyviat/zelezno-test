<template>
    <div class="modal">
        <div class="modal-dialog">
            <button
                class="modal-dialog__btn"
                type="button"
                @click="closeModal"
            >
                <img src="../assets/close.svg" alt="close modal">
            </button>
            <div class="modal-dialog__container">
                <span class="modal-dialog__text">{{ text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    text: String,
  },
  emits: ['close-modal'],
  setup(props, { emit }) {
    const closeModal = () => {
      emit('close-modal');
    };

    return {
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,0.5);
    opacity: 1;
    transition: opacity 200ms ease-in;
}

.modal-dialog {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 6px;
    width: 400px;
    height: 400px;
    z-index: 2;
    background: #fff;

    &__container {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        padding: 10px;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-self: flex-end;
        align-items: center;
        border: none;
        background: none;
        cursor: pointer;

        img {
            width: 20px;
            height: 20px;
        }
    }
}
</style>
