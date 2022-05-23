<template>
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
.coins{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>