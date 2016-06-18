$('document').ready(function () {




    function reboot() {
        $('h1').remove();

        $('<h1 />', {
            'text': 'R E B O O T I N G . . .',
            'class': 'terminal'
        }).appendTo('#terminal');


        setTimeout( function() { $('h1').remove(); }, 495 );

        printHome();
    }

    
    function printHome() {
                    //text | cumulative delay | class to appendTo | Id
        var text = [
                   ["c:\\> load alby-heredia.rom",500, 'terminal', ''],
                   ["Bootstrapping...", 1000, 'terminal', ''],
                   ["Start-up Self Check... ", 1250, 'terminal', ''],
                   ["COMPLETE", 2500, 'terminal', ''],
                   ["WELCOME TO Alby Heredia's Portfolio Website!", 2600, 'terminal', ''],
                   ["Please select an option:", 2700, 'terminal', ''],
                   ["1. Reboot", 2800, 'terminal pipmenu', 'pip1'],
                   ["2. About Alby", 2800, 'terminal pipmenu', 'pip2'],
                   ["3. Portfolio Playground", 2800, 'terminal pipmenu', 'pip3'],
                   ["4. Contact Alby", 2850, 'terminal pipmenu', 'pip4'],
                   [">_", 2850, 'terminal', '']
                   ];

        $.each(text, function (i, str) {

            setTimeout(function () {
                $('<h1 />', {
                    'text': str[0],
                    'class': str[2],
                    'id': str[3] == '' ? '' : str[3]
                }).appendTo('#terminal')
            }, str[1])
        });
    }

    function scrollTo( el ){
        el.scrollIntoView(true);
    }

    //event handlers
    $('body').on('click', function (e) {
        console.log("menu: " + e.target.id);

        var scrollto = '';

        if (e.target.id === 'pip1') {
            scrollTo(document.getElementById("home"));
            reboot();
        } else if (e.target.id === 'pip2') {
            scrollTo(document.getElementById("about"));
        } else if (e.target.id === 'pip3') {
            scrollTo(document.getElementById("portfolio"));
        } else if (e.target.id === 'pip4') {
            scrollTo(document.getElementById("contact"));
        }
    });

    $("body").keypress(function (e) {
        console.log(e.which)

        var scrollto = '';

        if (e.which === 49) {
            scrollTo(document.getElementById("home"));
            reboot();
        } else if (e.which === 50) {
            scrollTo(document.getElementById("about"));
        } else if (e.which === 51) {
            scrollTo(document.getElementById("portfolio"));
        } else if (e.which === 52) {
            scrollTo(document.getElementById("contact"));
        }
    });


    //begin
    printHome();

});