<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Exercícios para corrigir</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Author
                                    </th>
                                    <th>
                                        Code
                                    </th>
                                     <th>
                                        Actions
                                    </th>
                                </thead>
                                <tbody>
                                    <tr v-for="code in codes" :key="code.id">
                                        <td>
                                            {{ code.id }}
                                        </td>
                                        <td>
                                            {{ code.author }}
                                        </td>
                                        <td>
                                            <button class="btn btn-success mr-3" @click="visualize(code)">visualizar</button>
                                        </td>
                                        <td>
                                             <button class="btn btn-success mr-3" @click="approve(code)">Aprovar</button>
                                            <button class="btn btn-danger" @click="refuse(livro.id)">Excluir</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "list-code",
    created() {
        this.list();
    },
    methods:{
        ...mapActions(["list"]),
        approve(code){

        },
        refuse(code){

        }
    },
    computed: {
        ...mapGetters(["codes"])
    }
}
</script>
