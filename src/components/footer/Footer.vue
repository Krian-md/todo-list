<template>
  <v-footer padless>
    <v-card flat tile class="blue darken-3 white--text text-center">
      <v-card-text>
        <BaseButton
          icon
          v-for="icon in icons"
          :key="icon"
          plain
          class="mx-4 white--text"
        >
          <BaseIcon :icon-name="icon" />
        </BaseButton>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        {{ year }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import BaseIcon from '../UI/BaseIcon.vue';
export default {
  components: { BaseIcon },
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style></style>
