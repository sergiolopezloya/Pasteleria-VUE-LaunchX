<template>
    <nav class="" uk-navbar>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="/">Inicio</a></li>
                <li><a href="orders">Pedidos</a></li>
                <li>
                    <a href="#">Administrador</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="admin-list.html">Pedidos</a></li>
                            <li><a href="admin-inv.html">Inventario</a></li>
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
