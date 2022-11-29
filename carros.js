class Veiculo{
    constructor(rodas, combustivel){
        rodas = 2;
        combustivel = 'Gazolina';
    }
    acelerar(){
        console.log('acelerou..');
    }
}
class Moto extends Veiculo{
    constructor(rodas, combustivel, corte){
        super(rodas, combustivel);
        corte = 'Randandandan';
    }
    acelerar(){
        super.acelerar();
    }
    empinar(){
        console.log('Randandandan')
    }
}