<template>
  <templateHeader />
  <router-view/>
  <templateFooter />
</template>

<script>
import templateHeader from './components/templates/Header.vue'
import templateFooter from './components/templates/Footer.vue'

export default {
  name: 'App',
  components: {
    templateHeader,
    templateFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.uk-button-primary {
    background-color: #b569ac !important;
    color: #ffffff !important;
}
.uk-button-primary.uk-active, .uk-button-primary:active, .uk-button-primary:hover {
    background-color: #97468e !important;
}
.uk-section-primary {
    border-bottom: 8px solid #b569ac;
}
.uk-section-secondary {
    background-color: #3e1f00 !important;
}
.uk-title-primary {
  color: #666 !important;
}
.uk-form-icon:not(.uk-form-icon-flip)~.uk-textarea {
    padding-left: 40px!important;
}
.uk-form-icon {
    align-items: start !important;
    margin-top: 11px !important;
}
.uk-overlay {
    padding: 10px 30px !important;
}
.uk-navbar-dropdown-nav>li>a {
    color: #999 !important;
}
.uk-card > svg {
    width: 4rem;
    margin: 0 auto;
    display: block;
}
.uk-card-secondary svg {
    color: #ffffff !important;
}
.uk-button svg {
    width: 1.5rem;
}
.uk-article-title {
    border-bottom: 3px solid #97468e;
    text-transform: uppercase;
}

.relative {
    position: relative;
}
.fixed {
    position: fixed;
}
.absolute {
    position: absolute;
}
.top {
    top: 4px;
}
.left {
    left: 0px;
}
.uk-checkbox {
    width: 32px !important;
    height: 32px !important;
}
.uk-checkbox {
    background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2214%22%20height%3D%2211%22%20viewBox%3D%220%200%2014%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2212%201%205%207.5%202%205%201%205.5%205%2010%2013%201.5%22%20%2F%3E%0A%3C%2Fsvg%3E%0A) !important;
    background-size: contain;
    background-color: #1e87f0 !important;
}
.uk-checkbox:not(:checked), .uk-checkbox:active {
    background-color: #b3b3b3 !important;
}
.uk-badge-warning {
    background: #faa05a !important;
}
.uk-badge-success {
    background: #b1fdb1 !important;
}
.uk-badge-success *,
.uk-badge-warning * {
    color: #fff !important;
}
.uk-sticky,
.uk-sticky * {
    transition: all 0.3s ease-out;
}
.uk-sticky.uk-active {
    padding: 10px 20px;
}
.uk-sticky.uk-active * {
    font-size: 90%;
}
.uk-sticky.uk-active .uk-list > li {
    display: inline-block;
}
.uk-sticky.uk-active .uk-list > li + li {
    margin-top: 3px;
}
.uk-sticky.uk-active .uk-button {
    padding: 0 15px;
    line-height: 30px;
}
.uk-badge .uk-badge {
    margin-right: -5px;
}
.cursor,
.with-cursor + label {
    cursor: pointer !important;
}
</style>
