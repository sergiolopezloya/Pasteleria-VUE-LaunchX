<template>
  <section class="uk-section uk-container" id="uk-content">
    <div class="uk-container">
      <ListFlavors title="Inventario disponible de sabores" checks="false" inventory="true" />
      <ListDecorations title="Inventario disponible de decoraciones" checks="false" inventory="true" />
    </div>
  </section>
</template>

<script>
import ListFlavors from '../components/Flavors.vue'
import ListDecorations from '../components/Decorations.vue'

export default {
  name: 'AdminInventoryView',
  components: {
    ListFlavors,
    ListDecorations
  }
}
</script>
