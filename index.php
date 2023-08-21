<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Quiz App</title>
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@600&family=Exo:ital,wght@1,600&display=swap" rel="stylesheet">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
</head>

<body>
<div class="video-container">zz
        <video class="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="assets/mp4/CAF.mp4" type="video/mp4" />
        </video>
    </div> 
    <?php
    class QuizApp
    {
        public function __construct()
        {
            echo '<div id="container">';
            $this->renderStartSection();
            $this->renderGuideSection();
            $this->renderQuizSection();
            $this->renderResultSection();
            echo '</div>';
        }

        public function renderStartSection()
        {
            echo '<div id="start">Iniciar Juego</div>';
        }

        public function renderGuideSection()
        {
            echo '<div id="guide">
                <h2>Guía del Cuestionario</h2>
                <h4>1. Tienes solo 15 segundos para cada pregunta.</h4>
                <h4>2. Una vez que selecciones tu respuesta, no se puede deshacer.</h4>
                <h4>3. Obtendrás puntos en base a tus respuestas correctas.</h4>
                <h4>4. No puedes salir del cuestionario mientras estás jugando.</h4>
                <div id="button">
                    <button id="exit">Salir</button>
                    <button id="continue">Continuar</button>
                </div>
            </div>';
        }        

        public function renderQuizSection()
        {
            echo '<div id="quiz">
                <div id="quiz_header">
                    <h5>Preguntas CAF</h5>
                    <div id="timer">
                        <h6>Tiempo: </h6>
                        <h6 id="time">15</h6>
                    </div>
                </div>
                <div id="question">
                    <h2 id="questionNo"></h2>
                    <h2 id="questionText"></h2>
                </div>
                <div id="optionList">
                    <h4 class="choice_que" id="option1"></h4>
                    <h4 class="choice_que" id="option2"></h4>
                    <h4 class="choice_que" id="option3"></h4>
                    <h4 class="choice_que" id="option4"></h4>
                </div>
                <div id="answersSection">
                    <h3 id="total_correct">3 de 10 preguntas</h3>
                    <h3 id="next_question">Next</h3>
                </div>
            </div>';
        }

        public function renderResultSection()
        {
            echo '<div id="result">
                <img src="img/festejo.gif" alt="GIF" class="gif-image">
                <i class="fas fa-trophy"></i>
                <h6>Juego Completado!!!</h6>
                <h6 id="points">Tu tienes 4 de 10</h6>
                <button id="quit">Salir</button>
                <button id="startAgain">Comenzar de nuevo</button>
            </div>';
        }
    }

    $quizApp = new QuizApp();
    ?>
    <script src="js/questions.js"></script>
    <script src="js/script.js"></script>
</body>

</html>
