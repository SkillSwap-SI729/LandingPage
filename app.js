document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle("active");

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

    window.onscroll = function() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollTotop = document.getElementById('scroll-to-top');
        if (scrollTop > 100) {
            scrollTotop.classList.add('show');
        } else {
            scrollTotop.classList.remove('show');
        }
    };

    const scrollToTop = document.getElementById('scroll-to-top');
    scrollToTop.addEventListener('click', function() {
        console.log("Botón presionado");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


});

