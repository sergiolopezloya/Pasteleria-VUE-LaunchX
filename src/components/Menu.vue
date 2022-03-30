<template>
    <nav class="" uk-navbar>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li :class="{'uk-active': $route.path == '/'}"><a href="/">Inicio</a></li>
                <li :class="{'uk-active': $route.path == '/orders'}"><a href="/orders">Pedidos</a></li>
                <li :class="{'uk-active': $route.path == '/admin/orders' || $route.path == '/admin/inventory'}">
                    <a href="#">Administrador</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="/admin/orders">Pedidos</a></li>
                            <li><a href="/admin/inventory">Inventario</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'templateMenu',
  props: {
    msg: String
  }
}
</script>
