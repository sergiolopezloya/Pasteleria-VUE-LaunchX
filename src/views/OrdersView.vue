<template>
  <section class="uk-section uk-container" id="uk-content">
    <div class="uk-container">
      <formOrder title="Realiza tu pedido" formtitle="Tu pedido hasta ahora" />
    </div>
  </section>
  <templateBottom />
</template>

<script>
import formOrder from '../components/Form.vue'

export default {
  name: 'OrderView',
  components: {
    formOrder
  }
}
</script>
