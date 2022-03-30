<template>
  <section class="uk-section uk-container" id="uk-content">
    <div class="uk-container">
      <listOrders title="Lista de pedidos" />
    </div>
  </section>
  <templateBottom />
</template>

<script>
import listOrders from '../components/OrderList.vue'

export default {
  name: 'AdminOrderView',
  components: {
    listOrders
  }
}
</script>
