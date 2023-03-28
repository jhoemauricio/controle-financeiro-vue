<template>
    <div id="painelResumo">
        <div id="resumoCaixa">
            <span class="fraseResumo">Dinheiro em caixa </span>
            <span :class="dinheiroEmCaixa > 0 ? 'caixa entrada' : 'caixa gasto'">
                R$ {{ dinheiroEmCaixa.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          }) }}
            </span>

        </div>

        <div class="graficoComportamento">
            <canvas></canvas>

        </div>
    </div>
  
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: "PainelResumo",
    computed: mapGetters(["dinheiroEmCaixa"]),
    methods: mapActions(["atualizarCaixa"]),

    created() {
        this.atualizarCaixa();

    }

}
</script>

<style scoped>

#painelResumo {

    width: 60%;
    padding: 10px;
    background-color: white;
    border-radius: 20px;
    margin-top: 10px;
    padding: 10px;

}

.resumoCaixa {

    text-align: right;
    padding: 10px;

}

.resumoCaixa span {

    display: block;
    font-family: "negrito";

}

.fraseResumo {
    font-size: 300%;
}

.caixa {
    font-size: 400%;
}

</style>