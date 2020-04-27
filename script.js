var question = $('.question')
var op1 = $('#op1')
var op2 = $('#op2')
var op3 = $('#op3')
var op4 = $('#op4')
var score = 0;
$('.myscore').text(score)
var app = {
    questions: [{
        q: 'HTML stands for?', options: ['Hyper Text Markup Language', 'Holistick Technical Method Library',
            'Hyper Tax Makes Line', 'None of the above'], answer: 1
    },

    {
        q: 'ALL HTML tags are enclosed in what ?', options: ['# and #', '? and !',
            '< and >', '{ and }'], answer: 3
    },
    {
        q: 'Correct HTML tag for the largest heading is', options: ['<head>', '<h6>',
            '<heading>', '<h1>'], answer: 4
    },

    {
        q: 'Markup tags tell the web browser', options: ['How to organise the page', 'How to display the page',
            'How to display message box on page', 'None of these'], answer: 2
    },

    {
        q: 'Which of the following attributes of text box <br> control allow to limit the maximum character?', options: ['size', 'len',
            'maxlength', 'all of these'], answer: 3
    },

    {
        q: 'Web pages starts with which of the following tag?', options: ['<Body>', '<Title>',
            '<HTML>', '<Form>'], answer: 3
    },

    ],
    index: 0,
    next: function () {
        this.index++
        var data = this.index;
        this.load()
        if (data++) {
            $('ul li').css({ pointerEvents: 'auto' })
            $('ul li').removeClass('trueanswer')
            $('ul li').removeClass('wronganswer')
        }
    },
    load: function () {
        if (this.index <= this.questions.length - 1) {
            question.html(this.questions[this.index].q);
            op1.text(this.questions[this.index].options[0])
            op2.text(this.questions[this.index].options[1])
            op3.text(this.questions[this.index].options[2])
            op4.text(this.questions[this.index].options[3])
        } else {
            question.text("Quiz Over...!!!");
            $('.allquestions').append("<h1 style='text-align:center; margin-top:10vh; text-decoration:underline; color:darkblue;'>Thank You For Participating</h1>")
            op1.css({ display: 'none' })
            op2.css({ display: 'none' })
            op3.css({ display: 'none' })
            op4.css({ display: 'none' })
            $('#next').css({ display: 'none' })
        }
    },
    check: function (elem) {
        var id = elem.id.split('')[2]
        if (id == this.questions[this.index].answer) {
            elem.classList.add('trueanswer')
            $('.myscore').text(score = score + 1)
        }
        else {
            elem.classList.add('wronganswer')

        }

    },
    notClickAble: function () {
        $('ul li').css({ pointerEvents: 'none' })
    }


}
app.load()



function button(elem) {
    app.check(elem)
    app.notClickAble()
}


function next() {
    app.next()
}