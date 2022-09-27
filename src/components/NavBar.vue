<template>
    <nav class="nav">
        <img class="nav-logo" src="../assets/iasumilogo.avif">

        <ul class="nav-items">
            <li class="firstItems">
                <a href="#">
                    <span>KIGURUMIS</span>
                </a>
            </li>
            <li class="firstItems">
                <a href="#">
                    <span>SUPERIOR</span>
                </a>
            </li>
            <li class="firstItems">
                <a href="#">
                    <span>INFERIOR</span>
                </a>
            </li>
            <li class="firstItems">
                <a href="#">
                    <span>ACCESORIOS</span>
                </a>
            </li>
            <li class="firstItems">
                <a href="#">
                    <span>MÁS</span>
                </a>
            </li>
        </ul>

        <ul class="nav-items leftitem">
            <li>
                <span>
                    <img class="nav-icon" src="../assets/searchicon.svg" alt="">
                    <input type="text" class="nav-search" placeholder="Buscar" id="">
                </span>
                
            </li>
            <li>
                <a href="#">
                    <img class="nav-icon" src="../assets/accounticon.svg">
                </a>
            </li>
            <li>
                <a href="#">
                    <img class="nav-icon" src="../assets/shopbagicon.svg">
                </a>
            </li>
        </ul>
    </nav>
</template>

<style>

    .nav{
        width: 100%;
        height: 83px;
        display: flex;
        flex-direction: row;
        background-color: #FFE905;
        align-items: center;
        justify-content: space-between;
    }

    .nav-logo{
        margin-left: 50px;
        margin-right: 50px;
        margin-top: 18px;
        margin-bottom: 18px;
        width: 135px;
        height: 47px;
    }

    .nav-items{
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        font-weight: 600;
    }

    .nav-items a{
        color:black;
        text-decoration: none;
    }

    .firstItems{
        margin-right: 45px;
    }

    .nav-icon{
        height: 25px;
        width: auto;
    }
</style>