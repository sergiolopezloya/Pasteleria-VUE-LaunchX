<template>
    <div class="uk-article">
        <h2 class="uk-article-title">{{this.title}}</h2>
        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-divider uk-table-striped uk-table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Datos del cliente</th>
                        <th>Tamaño</th>
                        <th>Sabores</th>
                        <th>Decoraciones</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in $store.state.orders" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>
                            <ul class="uk-list uk-list-bullet">
                                <li><b>Nombre:</b> {{item.name}}</li>
                                <li><b>Correo:</b> {{item.email}}</li>
                                <li><b>Teléfono:</b> {{item.phone}}</li>
                            </ul>
                            <a :href="'#description' + item.id" class="uk-button uk-button-primary" uk-toggle>Ver descripción</a>
                            <div :id="'description' + item.id" uk-modal>
                                <div class="uk-modal-dialog uk-modal-body">
                                    <h2 class="uk-modal-title">Orden #{{item.id}}</h2>
                                    <ul class="uk-list uk-list-bullet">
                                        <li><b>Nombre:</b> {{item.name}}</li>
                                        <li><b>Correo:</b> {{item.email}}</li>
                                        <li><b>Teléfono:</b> {{item.phone}}</li>
                                    </ul>
                                    <p>{{item.description}}</p>
                                    <p class="uk-text-right">
                                        <button class="uk-button uk-button-primary uk-modal-close" type="button">Cerrar</button>
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="uk-badge uk-badge-warning">{{item.size.name}}
                            <div class="uk-badge uk-margin-small-left">${{item.size.price}} {{$store.state.currency}}</div></div>
                        </td>
                        <td>
                            <ul class="uk-list uk-list-bullet">
                                <li v-for="sabor in item.flavors" :key="sabor.id">
                                    <div class="uk-badge uk-badge-warning">{{sabor.name}}
                                    <div class="uk-badge uk-margin-small-left">${{sabor.price}} {{$store.state.currency}}</div></div>
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul class="uk-list uk-list-bullet">
                                <li v-for="decoracion in item.decorations" :key="decoracion.id">
                                    <div class="uk-badge uk-badge-warning">{{decoracion.name}}
                                    <div class="uk-badge uk-margin-small-left">${{decoracion.price}} {{$store.state.currency}}</div></div>
                                </li>
                            </ul>
                        </td>
                        <td>${{item.price}} {{$store.state.currency}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
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
