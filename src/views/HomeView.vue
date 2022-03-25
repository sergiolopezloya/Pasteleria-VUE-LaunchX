<template>
    <templateFullContent />
    <section class="uk-section uk-container" id="uk-content">
      <div class="uk-container">
        Portada
      </div>
    </section>
    <templateBottom />
</template>

<script>
import templateFullContent from '../components/templates/FullContent.vue'
import templateBottom from '../components/templates/Bottom.vue'

export default {
  name: 'HomeView',
  components: {
    templateFullContent,
    templateBottom
  }
}
</script>
