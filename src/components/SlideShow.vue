<template>
    <div uk-slideshow="min-height: 300; max-height: 400; animation: push; autoplay: true; autoplay-interval: 7000">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            <ul class="uk-slideshow-items">
                <li>
                    <img src="img/slides/arrangement-delicious-bread-dead-ingredients.jpg" alt="" uk-cover>
                </li>
                <li>
                    <img src="img/slides/fancy-cakes-banquet-table.jpg" alt="" uk-cover>
                </li>
                <li>
                    <img src="img/slides/front-view-sweet-chocolate-cake.jpg" alt="" uk-cover>
                </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>
    </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    msg: String
  }
}
</script>
