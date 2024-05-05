async function criarCartaDoBararlho() {
    const url="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta= await fetch(url)
    console.log(url)
    return await resposta.json()
}
criarCartaDoBararlho()

async function tirarUmaCarta(deck_id) {
    const url=`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const reposta= await fetch(url) 
    console.log(url)
    return reposta.json()
}

async function tirarUmaCartaDoBaralhoEmbaralhado() {

    const baralho= await criarCartaDoBararlho()
    const carta= await tirarUmaCarta(baralho.deck_id)
    const imagemCarta= carta.cards[0].image
    document.getElementById('carta').src=imagemCarta
    document.getElementById('tiraUmaCarta').addEventListener('click',()=>{
        tirarUmaCartaDoBaralhoEmbaralhado()
    })
}
tirarUmaCartaDoBaralhoEmbaralhado()