<template>
    <form class="uk-article uk-form" method="get" action="/ordersend">
        <h2 class="uk-article-title">{{this.title}}</h2>
        <div class="uk-margin">
            <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input class="uk-input" type="text" name="fullname" required placeholder="Tu nombre completo">
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: phone"></span>
                <input class="uk-input" type="text" name="phone" required placeholder="Tu teléfono">
            </div>
        </div>
        <div class="uk-margin">
            <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: mail"></span>
                <input class="uk-input" type="text" name="email" placeholder="Tu correo electrónico">
            </div>
        </div>
        <div class="uk-margin uk-article">
            <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: commenting"></span>
                <textarea class="uk-textarea" cols="50" rows="6" name="description" placeholder="Describe tu pastel, como lo quieres?"></textarea>
            </div>
        </div>
        <div class="uk-article">
            <h2 class="uk-article-title">{{this.formtitle}}</h2>
            <div class="uk-card uk-card-secondary uk-card-body uk-width-1-1" uk-sticky>
                <div uk-grid>
                    <div class="uk-width-expand@s">
                        <ul class="uk-list uk-list-hyphen">
                            <li><b>Tamaño:</b> <span v-html="$store.state.form.sizes"></span></li>
                            <li><b>Sabor(es):</b> <span v-html="$store.state.form.flavors"></span></li>
                            <li><b>Decoraciones:</b> <span v-html="$store.state.form.decorations"></span></li>
                            <li><b>Precio:</b> <span class="uk-badge uk-badge-success">${{
                                Number($store.state.form.price).toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })
                            }} {{$store.state.currency}}</span></li>
                        </ul>
                    </div>
                    <div class="uk-width-auto@s">
                        <div class="uk-inline">
                            <input type="submit" value="Enviar pedido" class="uk-button uk-button-primary uk-button-large" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ListSizes title="¿Qué tamaño necesitas?" />
        <ListFlavors title="Elige tu Sabor Favorito" checks="true" />
        <ListDecorations title="Elige tu Decoración" checks="true" />
    </form>
</template>

<script>
import ListFlavors from './Flavors.vue'
import ListDecorations from './Decorations.vue'
import ListSizes from './Sizes.vue'

export default {
  name: 'OrderForm',
  props: {
    title: String,
    formtitle: String
  },
  components: {
    ListFlavors,
    ListDecorations,
    ListSizes
  }
}
</script>
