<template>
    <div v-if="submitted">
        <div class="alert alert-success">Livro adicionado com sucesso!</div>
    </div>
    <div>
        <div v-if="error">
            <div class="alert alert-danger">
                {{ errorMessage }}
            </div>
        </div>
        <div>
            <div class="form-group">
                <label for="author">Nome Desenvolvedor(ar)</label>
                <input type="text" class="form-control" id="author" required v-model="code.author"
                    placeholder="Seu Nome" />
            </div>
            <div>
                <button @click="toggleCodeMirror">Toggle</button>
                <textarea v-model="code.content" id="editor"></textarea>
            </div>

            <button @click="sendData()" class="btn btn-success">Send Code</button>
        </div>
    </div>
</template>
<script>
import * as CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript.js";
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "save-code",
    data() {
        return {
            code: {
                id: null,
                content: "let a = 1\n# hello world",
                author: ""
            },
            submitted: false,
            error: false,
            errorMessage: ""
        };
    },
    mounted() {
        this.cm = CodeMirror.fromTextArea(document.getElementById("editor"), {
            lineNumbers: true,
            theme: "dracula",
            mode: "javascript",
        });
    },
    methods: {
        ...mapActions(["add"]),
        sendData() {
            if (this.validateData()) {
                let data = {
                    id: uuidv4(),
                    author: this.code.author,
                    code: this.code.content
                }
                this.add(data);
                this.submitted = true;
                this.error = false;

            } else {
                this.error = true;
                this.errorMessage = "Necessário Preencher o Author"
            }

        },
        validateData() {
            return this.code.author
        },
        toggleCodeMirror() {
            const codeMirrorMode = this.cm.getOption("mode");

            if (codeMirrorMode === "javascript") {
                this.cm.setOption("mode", "gfm");
            } else {
                this.cm.setOption("mode", "javascript");
            }
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
}
</style>
