<template>
    <div class="search-panel">
        <label for="search" class="search-panel__label" :class="{focus: isActive}">
            <span class="search-panel__label-text">Введите заголовок поста</span>
            <input
                class="search-panel__input"
                type="text"
                id="search"
                name="search"
                :value="modelValue"
                @focus="eventFocus"
                @blur="eventBlur"
                @input="(event) => $emit('update:modelValue', event.target.value)"
            >
            <button class="search-panel__btn-clear" :class="{show: isActive}" @click="clearField">
                <img src="../assets/close.svg" alt="close">
            </button>
        </label>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SearchPanel',
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const isActive = ref(false);
    const eventFocus = (event) => {
      isActive.value = !isActive.value;

      if (event.target.value.trim() !== '') {
        isActive.value = true;
      }
    };

    const eventBlur = (event) => {
      if (event.target.value.trim() === '') {
        isActive.value = false;
      }
    };

    const clearField = () => {
      emit('update:modelValue', '');
      isActive.value = false;
    };

    return {
      isActive,
      eventFocus,
      eventBlur,
      clearField,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-panel {
    position: relative;
    margin-bottom: 20px;

    &__label {
        &.focus {
            .search-panel__label-text {
                top: 4px;
                font-size: 10px;
            }
        }

        &-text {
            position: absolute;
            top: 14px;
            left: 12px;
            transition: all 0.1s ease-out;
        }
    }

    &__input {
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        height: 48px;
        border-radius: 20px;
    }

    &__btn-clear {
        position: absolute;
        top: 14px;
        right: 10px;
        display: none;
        justify-content: center;
        align-items: center;
        border: none;
        background: none;
        cursor: pointer;

        &.show {
            display: flex;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }
}
</style>
