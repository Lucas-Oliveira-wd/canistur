<!--==================================================================================================
=====                                                                                          =======
=====               Este site foi feito por "Lucas Oliveira"                                   =======
=====               Telefone (Whatsapp): (82) 98878-5978                                       =======
=====               Instagram: @lucasoliveirawd                                                =======
=====               E-mail: lukasforever02@gmail.com                                           =======
=====                                                                                          =======
===================================================================================================-->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-179040042-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-179040042-1');
</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" type="text/css" href="assets/css/animation.css"/>
    <link rel="stylesheet" type="text/css" href="assets/css/geral.css"/>
    <link rel="stylesheet" type="text/css" href="assets/css/roteiros.css"/>
    <link rel="stylesheet" type="text/css" href="assets/css/footer.css"/>
    <link rel="stylesheet" type="text/css" href="assets/css/canis-top.css"/>
    <link rel="stylesheet" type="text/css" href="assets/css/canis-slide.css"/>
    <link rel="stylesheet" type="text/css" href="assets/css/canis-piranhas.css"/>
    <link rel="stylesheet" type="text/css" href="assets/css/canis-msg-enviada.css"/>
    <title>Canistur Turismo</title>
</head>
<body class="show-sl6">

<!--=======================================================================================
                                destaques
============================================================================================-->
<section id="section-destaques">
        <div class="destaque">
            <div class="img-wrapper">
                <img src="assets/img/angicos.jpg" alt="">
            </div>
            <h3>Promoção</h3>
            <h2>Rota do Cangaço</h2>
        </div>

        <div class="destaque">
            <div class="img-wrapper">
                <img src="assets/img/logo2.png" alt="">
            </div>
        </div>

        <div class="destaque">
            <div class="img-wrapper">
                <img src="assets/img/canyons.jpeg" alt="">
            </div>
            <h2>Passeio aos Canyons</h2>
            <h3>Promoção</h3>
        </div>
</section>

<!--                                       Header                                       -->    

    <header class="header-bottom">
                
                <div class="container">
                    <nav>
                        <ul class="menu-principal">
                            <li class="menu-principal-item">
                                <a href="index.html">Página principal</a>
                            </li>
                            <li class="menu-principal-item"><a href="servicos.html">Serviços</a></li>
                            <li class="menu-principal-item"><a href="">Promoções</a></li>
                            <li class="active" class="menu-principal-item">
                                <a href="canis-contato.html">Contato com cliente</a>
                            </li>
                        </ul>
                    </nav>    
                </div>
        </header>   

<?php

$name = $phone = $email = $msg = '';
    
if(isset($_POST['email']) && !empty($_POST['email'])){

    $name = addslashes($_POST["name"]);
    $phone = addslashes($_POST["phone"]);
    $email = addslashes($_POST["email"]);
    $msg = addslashes($_POST["msg"]);

    $to = 'canisturturismo@gmail.com';
    $subject = 'Contato do Site';
    $body = 'Nome: '.$name. "\r\n".
            "Email: ".$email. "\r\n".
            "Telefone: ".$phone. "\r\n".
            "Mensagem: ".$msg;
    $header = "From:lukasforever02@gmail.com"."\r\n".
                "Reply-To:".$email."\r\n".
                "X=Msilrt:PHP/".phpversion();

    if(mail($to, $subject, $body, $header)){
        echo('<section id="section-msg-enviada">
        <div class="container">
            <p class="msg-eviada"> Mensagem enviada!</p>
            <p class="canis-agradece">A Canistur agradece o seu contato!
                Sua mensagem será respondida o mais breve possível</p>
        </div>        
    </section>');
    } else {
        echo('Ocorreu um erro durante o envio!');
    }
}
    //define variables and set to empty values
    $nameErr = $phoneErr = $emailErr = '';
    $name = $phone = $email = $assunto = $msg = '';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST['name'])){
            $nameErr = 'Digite um nome';
        } else {
        }

        if (empty($_POST['phone'])){
            $emailErr = 'Digite um número de telefone';
        } else {
            $phone = test_input($_POST["phone"]);
        }

        if (empty($_POST['email'])){
            $email = '';
        } else {
            $email = test_input($_POST["email"]);
        }

        if (empty($_POST['msg'])){
            $msgErr = 'Digite uma mensagem';
        } else {
            $msg = test_input($_POST["msg"]);
        }
    }

    function test_input($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>

 <!--                        Footer                                      -->

 <footer>
        <div class="container">
            <div class="footer-top flex"> 
                <div class="footer-section">
                    <div class="problema-no-site">
                        <h4>Encontrou algum problema no site?</h4>
                        <input type="text" placeholder="Deixe seu comentário" name="conte-nos o que você encontrou">
                    </div>
                    <div class="contate">
                        <h4>Ou contate o desenvolvedor, em uma das redes sociais abaixo</h4>
                        <div class="footer-social-media flex">
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5582988785978">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/lucasoliveirawebdesigner/?hl=pt-br">
                                <i class="fab fa-instagram"></i>
                            </a>    
                            <a target="_blank" href="mailto:lukasforever02@gmail.com">
                                <i class="fas fa-envelope"></i>
                            </a> 
                        </div>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Formas de pagamento</h4>
                    <div class="payforms flex column">
                        <div class="img-wrapper">
                            <img src="assets/img/icon-pagseguro.png" alt="icone do pagseguro">
                        </div>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Trabalhamos com:</h4>
                    <ul>
                        <li>Reservas de hotéis e pousadas;</li>
                        <li>Locações de veículos;</li>
                        <li>Lanchas rápidas;</li>
                        <li>Casas de veraneio;</li>
                        <li>Locação de catamarã;</li>
                    </ul>
                    <div class="social-media">
                        <a target="_blank" href="https://www.facebook.com/canisturturismo">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/canistur.com.br/?hl=pt-br">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="mailto:canisturturismo@gmail.com">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=5582981784691&text=A%20Canistur%20Turismo%20agradece%20o%20seu%20contato%2C%20em%20que%20podemos%20te%20ajudar%3F">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bar"></div>
            <div class="footer-autor">
                <p>Site criado por <a target="_blank" href="http://lucasoliveirawd.com/">Lucas Oliveira</a></p>
                <div>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5582988785978&text=Opa!%20meu%20nome%20%C3%A9%20Lucas%20Oliveira%20e%20sou%20Web%20Develonper%20e%20Front-end%20Design.%20Diga-me%20o%20que%20deseja!"><i class="fab fa-whatsapp"></i></a>
                    <a target="_blank" href='https://www.instagram.com/lucasoliveirawebdesigner/?hl=pt-br'><i class="fab fa-instagram"></i></a>
                    <a><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>
    </footer>
    <script src="assets/js/header-slide.js"></script>
</body>
</html>
