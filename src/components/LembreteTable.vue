<template>

    <table class="table table-striped ">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Descrição</th>
            <th scope="col">Importância</th>
            <th scope="col">Opções</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="itens.length === 0">
            <td colspan="4" class="text-center">Nádegas a declarar</td>
        </tr>
        <tr v-else v-for="(item, index) of itens" v-bind:key="item['.key']">
            <th scope="row">{{ index +1 }}</th>
            <td>{{ item.titulo }}</td>
            <td>{{ item.importancia }}</td>
            <td>
                <button class="btn" @click="removeLembrete(item['.key'])"><v-icon name="trash"/></button>
                <button class="btn" @click="alterarLembrete(item['.key'])"><v-icon name="edit"/></button>

            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import {lembretes} from '../firebase';

    import Vue from 'vue'

    /* Pick one way between the 2 following ways */

    // only import the icons you use to reduce bundle size
    import 'vue-awesome/icons/flag'

    // or import all icons if you don't care about bundle size
    import 'vue-awesome/icons'

    /* Register component with one of 2 methods */

    import Icon from 'vue-awesome/components/Icon'
    Vue.component('v-icon', Icon)

    export default {
        name: "LembreteTable",
        components: {
            'v-icon': Icon
        },
        data() {
            return {
                item: null
            }

        },
        firebase: {
            itens: lembretes
        },
        methods: {

            removeLembrete(key) {
                if (confirm('Deseja excluir ?')) {
                    lembretes.child(key).remove();
                }
            }
        }

    }

</script>

<style scoped>
    table {
        margin: 3em auto
    }
</style>
