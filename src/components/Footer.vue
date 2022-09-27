<template>
    <footer>
        <aside class="footer-aside">
            <h2>SOBRE NOSOTRXS</h2>
            <div class="footer-list">
                <ul class="footer-items">
                    <li class="items">
                        <a href="#">
                            <span>POLÍTICAS</span>
                        </a>
                    </li>
                    <li class="items">
                        <a href="#">
                            <span>TIENDAS</span>
                        </a>
                    </li>
                    <li class="items">
                        <a href="#">
                            <span>ENVÍOS</span>
                        </a>
                    </li>
                    <li class="items">
                        <a href="#">
                            <span>PREGUNTAS FRECUENTES</span>
                        </a>
                    </li>
                    <li class="items">
                        <a href="#">
                            <span>CONTÁCTANOS</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <div class="footer-newsletter">
            <div class="newsletterText">
                <h2>SUSCRIBETE A <br/>NUESTRO NEWSLETTER</h2>
                <p>Obten descuentos de nuestros productos</p>
            </div>

            <div class="newsletterData">
                <div class="newsletterUp">
                    <div class="newsletterInput1">
                        <span>Nombre</span>
                        <input type="text" placeholder="John">
                    </div>
                    <div class="newsletterInput2">
                        <span>Apellido</span>
                        <input type="text" placeholder="Doe">
                    </div>
                </div>
                <div class="newsletterDown">
                    <div class="newsletterInput-Long">
                        <span>Email</span>
                        <input type="text" placeholder="johndoe@email.com">
                    </div>

                    <input type="button" value="ENVIAR">
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
    footer{
        width: 100%;
        background-color: #FFE905;
        padding: 32px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .footer-aside{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: left;
        list-style: none;
        font-weight: 600;
    }

    .footer-list{
        margin-top: 15px;
    }

    .footer-items{
        display: flex;
        flex-direction: column;
        align-items: left;
        list-style: none;
        font-weight: 600;
    }

    .footer-items a{
        color:black;
        text-decoration: none;
    }

    .footer-newsletter{
        width: 60%;
        display: flex;
        flex-direction: row;
        line-height: 1;
        align-items: top;
    }

    .newsletterText{
        margin-right: 30px;
    }

    .newsletterUp{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .newsletterInput1{
        display: flex;
        flex-direction: column;
    }

    .newsletterInput1 input{
        border: solid 1px #000;
        border-radius: 0;
        padding: 15px;
        margin-top: 10px;
        margin-right: 10px;
    }

    .newsletterInput2{
        display: flex;
        flex-direction: column;
    }

    .newsletterInput2 input{
        border: solid 1px #000;
        border-radius: 0;
        padding: 15px;
        margin-top: 10px;
    }
    
    .newsletterDown{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    
    .newsletterInput-Long{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .newsletterInput-Long input{
        border: solid 1px #000;
        border-radius: 0;
        padding: 15px;
        margin-top: 10px;
    }

    input[type="button"]{
    
    background-color: black;
    border: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding:12px;
    padding-left: 80px;
    padding-right: 80px;
    border-radius: 10px;
    font-weight: 600;
}
</style>