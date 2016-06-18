$('document').ready(function () {

    
    function printHome() {
        var text = [
                   ["c:\\> load alby-heredia.rom",500],
                   ["Bootstrapping...",1000],
                   ["Start-up Self Check... ",1250],
                   ["COMPLETE",2500],
                   ["WELCOME TO Alby Heredia's Portfolio Website!", 2600],
                   ["Please select an option:", 2700],
                   ["1. Reboot", 2800],
                   ["2. About Alby", 2800],
                   ["3. Portfolio Playground", 2800],
                   ["4. Contact Alby", 2850],
                   [">_", 2850]
                   ];

        $.each(text, function ( i , str ) {
            (function() {
                setTimeout(function () {
                $('<h1 />', {
                    'text': str[0],
                    'class': 'terminal'
                }).appendTo('#terminal')
            }, str[1] ) })();
        })
      

    }


    printHome();

});