<template>
    <body>
        <Header />
        <div class="body">
            <div class="container">
                <slot></slot>
            </div>
        </div>
        <Footer />
    </body>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Template',
  components: {
    Header,
    Footer,
  },
};
</script>
