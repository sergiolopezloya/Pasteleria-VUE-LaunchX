<template>
    <section class="uk-section uk-section-primary" id="uk-bottom">
        <div class="uk-container">
            <ContactView />
        </div>
    </section>
</template>

<script>
import ContactView from '../Contact.vue'

export default {
  name: 'templateBottom',
  components: {
    ContactView
  }
}
</script>
