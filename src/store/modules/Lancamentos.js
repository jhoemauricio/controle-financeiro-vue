const moduloLancamentos = {
    //armazena os dados
    state:{
        lancamentos: [
            {
                id: Math.random().toString(36).substr(2, 5),
                valor: -50,
                descricao: "Compras no mercado",
                data: "2020-09-10"

            },
            {
                id: Math.random().toString(36).substr(2, 5),
                valor: 100,
                descricao: "Venda de HQ",
                data: "2020-09-30"

            },
            {
                id: Math.random().toString(36).substr(2, 5),
                valor: -25,
                descricao: "Farmácia",
                data: "2020-10-11"

            }
        ],
        caixa: 0
    },
    //devolve os dadospara os componentes
    getters : {
        //método todosLancamentos utiliza o state e recebe o state.lancamentos
        todosLancamentos: state => state.lancamentos,
        //método dinheiroEmCaixa também recebe state e recebe state.caixa
        dinheiroEmCaixa: state => state.caixa

    },

    //são método que os componentes podem solicitar para executar alterações no stado
    actions: {
        //toda acao recebe pelo menos um objeto commit
        salvarLancamento: ({commit}, lancamento) => {
            //o commit é usado para acionar a mutação
            commit("adicionarLancamento",lancamento);
            commit("calcularCaixa");
        },
        
        atualizarCaixa: ({commit}) => commit('calcularCaixa'),
        excluirLancamento: ({commit}, id)=>{
            commit('removerLancamento', id);
            commit('calcularCaixa');
        }
    },

    //altera os estados
    mutations: {
        // toda mutation precisa de pelo menos um parametro no caso state e lancamento
        adicionarLancamento:
        (state, lancamento) => 
            //o array lancamentos recebe o lancamento passado como parametro no adicionarLancamento
            state.lancamentos.unshift(lancamento),

            calcularCaixa: state => {
                const caixa =
                    state.lancamentos.length > 0
                    ? state.lancamentos
                    .map(lancamento => lancamento.valor)
                    .reduce((soma, valor) => soma+ valor)
                    : 0;
                    state.caixa = caixa;
            },
            removerLancamento:
                (state, id)=>
                state.lancamentos =
                    state.lancamentos.filter(lancamento =>lancamento.id !== id)
        
    }
};

export default moduloLancamentos;