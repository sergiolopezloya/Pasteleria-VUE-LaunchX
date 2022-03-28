<template>
    <div class="uk-article">
        <h2 class="uk-article-title">{{this.title}}</h2>
        <ul class="uk-list">
            <li v-for="item in $store.state.sizes" :key="item.id">

                <input class="uk-checkbox sizeValue" :data-price="item.price" @click="$store.dispatch('setSize')" type="radio" name="size" :id="'size' + item.id" :value="item.name" required />
                <label :for="'size' + item.id" class="cursor uk-margin-small-left">
                    {{item.name}}
                    <div class="uk-badge uk-margin-small-left">${{item.price}} {{$store.state.currency}}</div>
                </label>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'ListSizes',
  props: {
    title: String
  }
}
</script>
