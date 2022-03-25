<template>
    <section class="uk-section uk-section-primary" id="uk-header" style="padding: 0px;">
        <div class="uk-container">
            <div class="uk-child-width-1-5@m uk-child-width-1-2\@s uk-flex uk-flex-middle" uk-grid>
                <div>
                    <a href="/">
                        <img src="img/logo.png" />
                    </a>
                </div>
                <div class="uk-width-4-5@m uk-width-1-2@s">
                    <templateMenu />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import templateMenu from '../Menu.vue'
export default {
  name: 'templateHeader',
  components: {
    templateMenu
  }
}
</script>
