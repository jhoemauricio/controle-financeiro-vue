<template>
  <div id="painelLancamento">

    <div id="formularioLancamento">
      <!--o @ pega eventos do javascript-->
        <form @submit="salvar">
            <div id="tiposLancamento">

                <input
                type="radio"
                name="tipo"
                id="entrada"
                value="entrada"
                v-model="tipo" />

                <label for="entrada">Entrada</label>
                <input type="radio"
                name="tipo"
                id="saida"
                value="saida"
                v-model="tipo"
                />

                <label for="saida">Saida</label>

            </div>
             
            <label for="valor">Valor</label>
            <input
            type="number"
            min="0"
            step="0.01"
            name="valor"
            id="valor"
            v-model.number ="valor"
            required/>


            <label for="descricao">Descrição</label>
            <input
            type="text"
            name="descricao"
            id="descricao"
            v-model = "descricao"
            required>

            <label for="data">Data</label>
            <input
            type="date"
            name="data"
            id="data"
            v-model="data"
            required/>

          <button>Lançar</button> 
        </form>
      

    </div>

    <div id="areaLancamentos">
      <!--Cria um laço de repetição no método todosLancamentos, para cada interação ele adiciona o Objeto lancamento
      o v-bind:key é necessário para identificar cada lançamento-->
      <BlocoLancamento
      v-for="lancamento in todosLancamentos"
      v-bind:key="lancamento.id"
      :tipo="lancamento.valor > 0 ? 'entrada' : 'saida'"
      :lancamento="lancamento"
      />

    </div>
   
  </div>
</template>

<script>

//mapea os getters que existem no store
import { mapGetters, mapActions } from "vuex";
import BlocoLancamento from "./BlocoLancamento.vue";
import Lancamento from '../models/Lancamento';

export default {
    name: "PainelLancamento",
    data: ()=> {
      return {
        // lancamentos: [],

        //valores vindo dos campos

        tipo: "saida",
        valor: undefined,
        descricao: "",
        data: ""
      };
    },


    components:{
      BlocoLancamento,
    },
    //quando componente é criado o computed é carregado
    //mapGetters mapeou o método todosLancamentos
    computed: mapGetters(["todosLancamentos"]),

    //onde são implementado as funções
    methods: {
      //para mapear as actions precisa de um operador javascript chamado spread operator ...
      ...mapActions(["salvarLancamento"]),

      salvar(event){
        event.preventDefault();
        // console.log("Entriy");

        if(this.tipo === "saida"){
          this.valor *= -1;

        }


        //valores vindo do data
        const lancamento = new Lancamento(this.valor, this.descricao, this.data)
        // console.log(lancamento);

        //quando utliza o ... pode utilizar a action como se fosse parte do componente
        this.salvarLancamento(lancamento);
        this.limparFormulario();
      },

      limparFormulario(){

        this.tipo = "saida";
        this.valor = undefined
        this.descricao = "";
        this.data = "";

      }
    }
    

};
</script>

<style scoped>
#painelLancamento {
  width: 40%;
  padding: 10px;
}
#formularioLancamento {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  font-family: "padrao";
}
#valor,
#descricao,
#data,
button {
  display: block;
  margin-bottom: 10px;
}
#valor,
#descricao,
#data {
  height: 25px;
  font-family: "padrao";
  font-size: 100%;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
}
#tiposLancamento {
  margin-bottom: 20px;
  font-family: "negrito";
  font-size: 110%;
}
#tiposLancamento label {
  margin-right: 20px;
}
#descricao {
  width: 70%;
}
button {
  background-color: var(--cor-destaque);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
}
#areaLancamentos {
  margin-top: 30px;
}


    #painelLancamento {
        width: 40%;
        padding: 10px;
    }

    #formularioLancamento {
        background-color: white;
        border-radius: 20px;
        padding: 20px;
        font-family: "padrao";

    }

    #valor,
    #descricao,
    #data,
    button {
        display: block;
        margin-bottom: 10px;
    }

    #valor,
    #descricao,
    #data {
      height: 20px;
      font-family: "padrao";
      font-size: 100%;
    }
   

    #tiposLancamento{
        margin-bottom: 10px;
        font-family: "negrito";
    }

    #tiposLancamento label {
        margin-right: 20px;
    }

    #tiposLancamento label:first-of-type {
      color: #22a7f0;
    }

    #tiposLancamento label:last-of-type {
      color: red;
    }

#descricao {
  width: 70%;
}

button {
  background-color: var(--cor-destaque);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
}

#areaLancamentos {
  margin-top: 30px;
}


</style>