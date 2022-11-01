<template>
    <div class="footer">
        <aside class="footer__aside">
            <h2>SOBRE NOSOTRXS</h2>
            <div class="footer__list">
                <ul class="footer__items">
                    <li>
                        <a href="#">
                            <span>POLÍTICAS</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>TIENDAS</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>ENVÍOS</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>PREGUNTAS FRECUENTES</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>CONTÁCTANOS</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <div class="newsletter">
            <div class="newsletter__Text">
                <h2>SUSCRIBETE A <br/>NUESTRO NEWSLETTER</h2>
                <p>Obten descuentos de nuestros productos</p>
            </div>

            <div class="newsletter__Data">
                <div class="newsletter__Up">
                    <div class="newsletter__Input1">
                        <span>Nombre</span>
                        <input type="text" placeholder="John">
                    </div>
                    <div class="newsletter__Input2">
                        <span>Apellido</span>
                        <input type="text" placeholder="Doe">
                    </div>
                </div>
                <div class="newsletter__Down">
                    <div class="newsletter__InputLong">
                        <span>Email</span>
                        <input type="text" placeholder="johndoe@email.com">
                    </div>

                    <input class="newsletter__submit" type="submit" value="ENVIAR">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

    $border : solid .1vw #000;
    .footer{
        width: 100%;
        background-color: #FFE905;
        padding-top: 2vw;
        padding-bottom: 2vw;
        padding-right: 6vw;
        padding-left: 6vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &__aside{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: left;
        list-style: none;
        font-weight: 600;
        }

        &__items{
        display: flex;
        flex-direction: column;
        align-items: left;
        list-style: none;
        font-weight: 600;
        }

        &__items a{
            color:black;
            text-decoration: none;
        }

        &__list{
            margin-top: 1vw;
        }
    }

    .newsletter{
        width: 60%;
        display: flex;
        flex-direction: row;
        line-height: 1;
        justify-content:right;

        &__Text{
            margin-right: 2vw;
        }

        &__Text h2{
            margin-bottom: 1vw;
        }

        &__Up{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &__Input1{
        display: flex;
        flex-direction: column;
        }

        &__Input1 input{
            border: $border;
            border-radius: 0;
            padding: .8vw;
            margin-top: .5vw;
            margin-right: .5vw;
        }

        &__Input2{
            display: flex;
            flex-direction: column;
        }

        &__Input2 input{
            border: $border;
            border-radius: 0;
            padding: .8vw;
            margin-top: .5vw;
        }
        
        &__Down{
            margin-top: 1vw;
            display: flex;
            flex-direction: column;
            align-items: left;
        }

        
        &__InputLong{
            display: flex;
            flex-direction: column;
            margin-bottom: 2vw;
        }

        &__InputLong input{
            border: $border;
            border-radius: 0;
            padding: .8vw;
            margin-top: .5vw;
        }

        &__submit{

            background-color: black;
            border: none;
            color: white;
            text-decoration: none;
            cursor: pointer;
            padding: 1vw;
            border-radius: .5vw;
            font-weight: 600;
        }
    }
</style>