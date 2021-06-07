window.onload = function () {

    var step = 0;
    var winX = 0;
    var winO = 0;

    var time = 0;
    var game = false;

    var firstStep = false;

    //Выбор хода
    document.getElementById('firstStep').onclick = function (event) {
        if (step == 0){
            if (event.target.id == 'radio1'){
                document.getElementById('radio2').classList.remove('active');
                event.target.classList.add('active');
                firstStep = false;
            } else if (event.target.id == 'radio2'){
                document.getElementById('radio1').classList.remove('active');
                event.target.classList.add('active');
                firstStep = true;
            }
        }
    }

    //Нажатие на поле
    document.getElementById('board').onclick = function (event) {
        if (event.target.className == 'block') {
            var player = '';
            if (step==0){
                game = true;
                timer();
            }
            if (step % 2 == 0 && game) {
                if (event.target.innerHTML == '') {
                    if (firstStep){
                        event.target.innerHTML = 'O';
                        player = 'O';
                    }else{
                        event.target.innerHTML = 'X';
                        player = 'X';
                    }
                    step++;
                    check(player);

                }
            } else if (game){
                if (event.target.innerHTML == '') {
                    if (firstStep){
                        event.target.innerHTML = 'X';
                        player = 'X';
                    }else{
                        event.target.innerHTML = 'O';
                        player = 'O';
                    }
                    step++;
                    check(player);
                }
            }
        }
    }

    //Вывод таймера
   function timer(){
        var seconds = 0;
        var minute = 0;

        seconds = time;

        while (seconds > 60){
            minute++;
            seconds = seconds - 60;
        }

       seconds =((seconds < 10) ? "0" : "") + seconds;
       var clock = minute + ":" + seconds;

        if (game) {
            document.getElementById('time').innerHTML = clock;
            time++;
            setTimeout(timer, 1000);
        }
    }

    //Проверка победы
    function check(player) {
        var board = document.getElementsByClassName('block');
        if (board[0].innerHTML == 'X' && board[1].innerHTML == 'X' && board[2].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([0, 1, 2]);
        }
        else if (board[3].innerHTML == 'X' && board[4].innerHTML == 'X' && board[5].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([3, 4, 5]);
        }
        else if (board[6].innerHTML == 'X' && board[7].innerHTML == 'X' && board[8].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([6, 7, 8]);
        }
        else if (board[0].innerHTML == 'X' && board[4].innerHTML == 'X' && board[8].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([0, 4, 8]);
        }
        else if (board[2].innerHTML == 'X' && board[4].innerHTML == 'X' && board[6].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([2, 4, 6]);
        }
        else if (board[0].innerHTML == 'X' && board[3].innerHTML == 'X' && board[6].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([0, 3, 6]);
        }
        else if (board[1].innerHTML == 'X' && board[4].innerHTML == 'X' && board[7].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([1, 4, 7]);
        }
        else if (board[2].innerHTML == 'X' && board[5].innerHTML == 'X' && board[8].innerHTML == 'X'){
            message('X');
            winX++;
            gameStop([2, 5, 8]);
        }
        else if (board[0].innerHTML == 'O' && board[1].innerHTML == 'O' && board[2].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([0, 1, 2]);
        }
        else if (board[3].innerHTML == 'O' && board[4].innerHTML == 'O' && board[5].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([3, 4, 5]);
        }
        else if (board[6].innerHTML == 'O' && board[7].innerHTML == 'O' && board[8].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([6, 7, 8]);
        }
        else if (board[0].innerHTML == 'O' && board[4].innerHTML == 'O' && board[8].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([0, 4, 8]);
        }
        else if (board[2].innerHTML == 'O' && board[4].innerHTML == 'O' && board[6].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([2, 4, 6]);
        }
        else if (board[0].innerHTML == 'O' && board[3].innerHTML == 'O' && board[6].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([0, 3, 6]);
        }
        else if (board[1].innerHTML == 'O' && board[4].innerHTML == 'O' && board[7].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([1, 4, 7]);
        }
        else if (board[2].innerHTML == 'O' && board[5].innerHTML == 'O' && board[8].innerHTML == 'O'){
            message('O');
            winO++;
            gameStop([2, 5, 8]);
        } else {
            var stop = true;
            for (var i = 0; i < 9; i++){
                if (board[i].innerHTML == ''){
                    stop = false;
                    break;
                }
            }
            if (stop) {
                game=false;
                clean();
            }
        }
        document.getElementById('scoreX').innerHTML = winX;
        document.getElementById('scoreO').innerHTML = winO;
    }

    //Очистка поля
    function clean() {
        message(0);
        step = 0;
        time = 0;
        document.getElementById('time').innerHTML = '0:00';
        var board = document.getElementsByClassName('block');
        for (var i = 0; i < 9; i++) {
            board[i].innerHTML = '';
            board[i].style.color = 'rgba(0, 0, 0, 1)';
        }
    }

    //Конец игры
    function gameStop(arr){
        game = false;

        var board = document.getElementsByClassName('block');
            for (var i = 0; i < 9; i++){
                for (var j = 0; j < 3; j++){
                    if (i != arr[j]){
                        board[i].style.color = 'rgba(0, 0, 0, 0.2)';
                    }else{
                        board[i].style.color = 'rgba(0, 0, 0, 1)';
                        break;
                    }
                }
            }
        document.getElementById('tryAgain').onclick = clean;
    }

    //Вывод сообщения
    function message(text){
        var status = document.getElementById('status');
        var tryagain = document.getElementById('tryAgain');
        if (text == 0){
            status.style.background = 'none';
            tryagain.style.display = 'none';
        } else if (text == 'X') {
            status.style.background = 'url(winnerX.png) no-repeat';
            tryagain.style.display = 'block';
        } else if (text == 'O'){
            status.style.background = 'url(winnerO.png) no-repeat';
            tryagain.style.display = 'block';
        }
    }
}