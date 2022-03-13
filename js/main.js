const searchingBook = () => {
    let btn = document.getElementById('cta-btn');
    let overlay = document.getElementById('overlay');

    btn.addEventListener('click', () => {
        overlay.style.display = 'grid';
        overlay.classList.add('animate-overlay')
    })

    delay(3000).then(() => {
        let overlay1 = document.getElementById('overlay');
        overlay1.style.display = "none";
    })

    location.href = "../UltimateBook.html";

}

function navSlide() {
    let burger = document.getElementById('burger');
    let nav = document.getElementById('nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        console.log(index)
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
    });

    burger.classList.toggle('toggle');
}


// const app = () => {
//     navSlide();
//     // searchingBook();

// }

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
    $(".add-new").click(function () {
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add", function () {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else {
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            input.each(function () {
                $(this).parent("td").html($(this).val());
            });
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
        }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function () {
        $(this).parents("tr").find("td:not(:last-child)").each(function () {
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function () {
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
    });
});


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function test() {
    alert("Something")
}