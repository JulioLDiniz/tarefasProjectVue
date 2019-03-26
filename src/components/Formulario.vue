<template>
    <div>
        <h1 class="text-center">Criar Lembrete</h1>
        <div class="container-fluid">
            <form class="">
                <div class="form-group">
                    <label for="lembrete">Título</label>
                    <input type="text" class="form-control" id="titulo" name="titulo" aria-describedby="Lembrete"
                           placeholder="Ex.: Lavar carro" v-model="titulo">
                </div>
                <div class="form-group">
                    <label for="importancia">Importância</label>
                    <select name="importancia" id="importancia" class="form-control" v-model="importancia">
                        <option value="normal">Normal</option>
                        <option value="critico">Cŕitico</option>
                        <option value="trivial">Trivial</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-lg btn-primary float-right" @click="submitLembrete()">Criar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {lembretes} from '../firebase';

    export default {
        name: "Formulario",
        data () {
            return {
                importancia: 'normal'
            }
        },
        methods: {
            submitLembrete() {
                lembretes.push({titulo: this.titulo ,importancia: this.importancia})
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    * {
        margin-top: 1em;
    }
</style>
