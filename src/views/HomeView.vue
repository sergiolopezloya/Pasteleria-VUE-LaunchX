<template>
  <templateFullContent />
  <section class="uk-section uk-container" id="uk-content">
    <div class="uk-container">
      <ListFlavors title="Variedad de sabores para tu pastel" checks="false" />
      <ListDecorations title="Decoraciones personalizadas" checks="false" />
    </div>
  </section>
  <templateBottom />
</template>

<script>
import templateFullContent from '../components/templates/FullContent.vue'
import templateBottom from '../components/templates/Bottom.vue'
import ListFlavors from '../components/Flavors.vue'
import ListDecorations from '../components/Decorations.vue'

export default {
  name: 'HomeView',
  components: {
    templateFullContent,
    templateBottom,
    ListFlavors,
    ListDecorations
  }
}
</script>
