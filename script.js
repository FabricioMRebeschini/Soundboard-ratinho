//pega todos os audios e coloca num array de dicionarios
let audios = [
    {caminho:'audio/grito.mp3'},
    {caminho:'audio/jesus.mp3'},
    {caminho:'audio/nao-e-o-pai.mp3'},
    {caminho:'audio/pare.mp3'},
    {caminho:'audio/que-isso-meu-filho.mp3'},
    {caminho:'audio/ratinhoo.mp3'},
    {caminho:'audio/vixi-ratinho.mp3'},
    {caminho:'audio/uepa.mp3'},
    {caminho:'audio/xaropinho.mp3'},
];
//seleciona a tag audio
let audioTag = document.querySelector('audio');
//seleciona todos os botoes
let botoes = document.querySelectorAll('#botao');
//faz um loop para setar data-item
for(let i = 0; i < 9; i++){
    botoes[i].setAttribute('data-item', i)
}

//faz um for each para iterar sobre todos os botoes 
botoes.forEach(botao=>{
    //add um evento de click em cada botao
    botao.addEventListener('click', ()=>{
        //pega cada botao para setar o audio condizente 
        let som = audios[botao.getAttribute('data-item')];
        //seta o src e passa o caminho de cada um
        audioTag.setAttribute('src',som.caminho);
        //add um avento para qundo carregar o audio ele executar play()
        audioTag.addEventListener('loadeddata', ()=>{
            audioTag.play()
        })

    })
})