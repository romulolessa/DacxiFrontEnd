<template>
<form class="time" action="">
            <h2>Serch in Time</h2>
            <div>
                <div class="box">
                    <a class="icon-bitcoin"></a>
                    <p> BTC: </p>
                    <input 
                        class="data"
                        name="fromBTC"
                        v-model="coinFrom" 
                        type="datetime-local"
                    >
                    <input 
                        class="data"
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
                        class="data"
                        name="fromETH" 
                        type="datetime-local"
                    >
                    <input 
                        class="data"
                        name="toETH" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <a class="icon-dacxi"></a>
                    <p> DACXI: </p>
                    <input 
                        class="data"
                        name="fromDACXI" 
                        type="datetime-local"
                    >
                    <input 
                        class="data"
                        name="toDACXI" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <a class="icon-atom"></a>
                    <p> ATOM: </p>
                    <input 
                        class="data"
                        name="fromATOM" 
                        type="datetime-local"
                    >
                    <input 
                        class="data"
                        name="toATOM" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <a class="icon-logo-luna"></a>
                    <p> LUNA: </p>
                    <input 
                        class="data"
                        name="fromLUNA" 
                        type="datetime-local"
                    >
                    <input 
                        class="data"
                        name="toLUNA" 
                        type="datetime-local"
                    >
                </div>
                <div class="box">
                    <input id="send" type="submit"/>
                </div>
            </div>
        </form>
</template>

<script>

</script>

<style>
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
</style>