import firestore from '@react-native-firebase/firestore';
import firebase from '../model/firebase';

export const meusDados = async () => {
  //quando a aplicação é aberta, acaba retornando null
  const user = await firebase.auth().currentUser;

  if (user) {
    console.log('Existe usuário...', user.email);
    const dados = await firestore()
      .collection('users')
      .doc(user.email)
      // .collection('NCBGRT4xTOJiC2HsFOtB')
      .get(); /*.data()*/
    console.log('dados: ', dados);
    // dados.docs.map(item => console.log(item.id, item.data()));
    return dados.data();
  }
  return null;
};

export const addUser = async (
  aEmail,
  aNome,
  aTelefone,
  aCpf,
  aCep,
  aRua,
  aNumero,
  aBairro,
  aCidade,
  aUF,
) => {
  try {
    const resp = await firestore()
      .collection('users')
      .doc(aEmail.toLowerCase())
      .set({
        email: aEmail,
        nome: aNome,
        telefone: aTelefone,
        cpf: aCpf,
        cep: aCep,
        rua: aRua,
        numero: aNumero,
        bairro: aBairro,
        cidade: aCidade,
        uf: aUF,
      });
    console.log(resp);
    return true;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};

export const getTodasReservas = async () => {
  try {
    //retorna um array com todas as reservas, é necessário percorrer coleção por coleção
    const reservas = await firestore().collection('reservas').get();

    console.log(reservas);
    return true;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};

export const getTodosVeiculos = async () => {
  try {
    //retorna um array com todas as reservas, é necessário percorrer coleção por coleção
    const veiculos = await firestore().collection('veiculos').get();

    veiculos.docs.map(item => console.log(item.id + item.data()));
    // console.log(veiculos);
    return veiculos.docs;
  } catch (e) {
    console.log(JSON.stringify(e));
    return [];
  }
};

export const addReserva = async (
  aVeiculo,
  aDateInicial,
  aDateFinal,
  aTipoPgto,
  aPreco,
) => {
  try {
    //retorna um array com todas as reservas, é necessário percorrer coleção por coleção
    let lData = new Date().getTime();
    console.log(lData, await firebase.auth().currentUser);
    const reservas = await firestore()
      .collection('reservas')
      .doc(lData.toString())
      .set({
        idReserva: lData,
        placa: aVeiculo,
        dataInicial: aDateInicial.getTime(),
        dataFinal: aDateFinal.getTime(),
        tipoPgto: aTipoPgto,
        intervaloDias: 1,
        statusLocacao: 0, // 0 = agendado, 1 concluido, 2 excluido
        emailCliente: firebase.auth().currentUser.email, //decidir se vai ser email ou cpf
        estaCancelado: false,
        dataCancelamento: null,
        preco: aPreco,
      });

    console.log(reservas);
    return true;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};

export const getReservasDoUsuario = async () => {
  try {
    const reservas = await firestore()
      .collection('reservas')
      .where('emailCliente', '==', firebase.auth().currentUser.email)
      // .onSnapshot(reserva => {
      //   console.log('Atualizando usuario...');
      //   return reserva.docs;
      // });
      // .where('placa', '==', 'llp4870')
      .get();

    console.log(reservas.docs.map(item => console.log(item.id, item.data())));

    return reservas.docs;
  } catch (e) {
    console.log(JSON.stringify(e));
    return false;
  }
};

export const estaDisponivel = async (aPlaca, aInicio, aTermino) => {
  try {
    const reservas = await firestore()
      .collection('reservas')
      // .where('statusLocacao', '==', 0)
      .where('placa', '==', aPlaca)
      // .where('dataInicial', '<', aInicio.getTime())
      // .where('dataFinal', '>=', aInicio)
      .get();

    // console.log(reservas.docs.map(item => console.log(item.id, item.data())));
    // console.log('inicio', aInicio.getTime());
    let lResp = reservas.docs.filter(
      item =>
        item.data().dataInicial <= aInicio.getTime() &&
        item.data().dataFinal >= aInicio.getTime() &&
        item.data().statusLocacao == 0,
    );

    // console.log('lResp: ', lResp);

    return lResp.length > 0 ? false : true;
  } catch (e) {
    console.log(e, JSON.stringify(e));
    return false;
  }
};

//adicionar reserva na subcoleção do usuario

//concluir reserva

//apagar reserva logicamente

//get todas as reservas com atualização em tempo real

//cancelar reserva

//get Veiculos

//adicionar veiculo

//arquivar veiculo

//
