<template>
<header>
    <nav class="container">
        <a href="/"><img id="logo" alt="Logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/10372.png"></a>
        <h1>DACXI</h1>
    </nav>
</header>
    <div>
        <div class="coins">
            <div class="box coins">
                <a class="icon-bitcoin"></a>
                <p> BTC:$<span id="btc"></span></p>
            </div>
            <div class="box">
                <a class="icon-ethereum"></a>
                <p> ETH:$<span id="eth"></span> </p>
            </div>
            <div class="box">
                <a class="icon-dacxi"></a>
                <p> DACXI:$<span id="dacxi"></span> </p>
            </div>
            <div class="box">
                <a class="icon-atom"></a>
                <p> ATOM:$<span id="atom"></span> <span id="atom"></span></p>
            </div>
            <div class="box">
                <a class="icon-logo-luna"></a>
                <p> LUNA:$<span id="luna"></span> </p>
            </div>

        </div>
        <form class="time" action="">
            <h2>Serch in Time</h2>
            <div>
                <div class="box">
                    <a class="icon-bitcoin"></a>
                    <p> BTC: </p>
                    <input 
                        class="dataBtcFrom data"
                        name="fromBTC"
                        v-model="coinFrom" 
                        type="datetime-local"
                    >
                    <input 
                        class="dataBtcTo data"
                        name="toBTC" 
                        v-model="coinTo"
                        type="datetime-local"
                    >
                    <p></p>
                </div>
                <div class="box">
                    <a class="icon-ethereum"></a>
                    <p> ETH: </p>
                    <input 
                        class="dataFromEth data"
                        name="fromETH" 
                        type="datetime-local"
                    >
                    <input 
                        class="dataToEth data"
                        name="toETH" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <a class="icon-dacxi"></a>
                    <p> DACXI: </p>
                    <input 
                        class=".dataFromDacxi data"
                        name="fromDACXI" 
                        type="datetime-local"
                    >
                    <input 
                        class=".dataToDacxi data"
                        name="toDACXI" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <a class="icon-atom"></a>
                    <p> ATOM: </p>
                    <input 
                        class="data datafromATOM"
                        name="fromATOM" 
                        type="datetime-local"
                    >
                    <input 
                        class="datatoATOM data"
                        name="toATOM" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <a class="icon-logo-luna"></a>
                    <p> LUNA: </p>
                    <input 
                        class="datafromLUNA data"
                        name="fromLUNA" 
                        type="datetime-local"
                    >
                    <input 
                        class="datatoLUNA data"
                        name="toLUNA" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <input id="send" type="submit"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdacxi%2Ccosmos%2Cterra-luna&vs_currencies=usd')
    .then(function (response) {
        const getBtc = document.querySelector('#btc')
        const getEth = document.querySelector('#eth')
        const getDacxi = document.querySelector('#dacxi')
        const getAtom = document.querySelector('#atom')
        const getLuna = document.querySelector('#luna')

        const BTC = response.data.bitcoin.usd
        const ETH= response.data.ethereum.usd
        const DACXI = response.data.dacxi.usd
        const ATOM = response.data.cosmos.usd
        const LUNA = response.data['terra-luna'].usd

        getBtc.innerHTML = BTC
        getEth.innerHTML = ETH
        getDacxi.innerHTML = DACXI
        getAtom.innerHTML = ATOM
        getLuna.innerHTML = LUNA
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
    export default{
    name: 'Main',
    data(){
        return {
        }
    }
    }
    const input = document.querySelectorAll('.data')
    for(let inputs of input){
        console.log(inputs)
    }
</script>
    

<style>
header{
    background-color: var(--backgroundHeader);
    width: 100%;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
nav{
    display: flex;
    justify-content: center;
    align-items: center;

}
#logo{
    width: 3.125rem;
}
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem
}
.time{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;
    padding: 0 0.5rem;
    border: black .2rem solid;
}
.data{
    background-color: var(--backgroundHeader);
    color: var(--textLogo);
    text-align: center;
}
.coins{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.icon-bitcoin,
.icon-ethereum,
.icon-dacxi,
.icon-atom,
.icon-logo-luna{
    color: goldenrod;
}
</style>