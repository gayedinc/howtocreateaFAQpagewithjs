//using selectors inside the element

/* Selectorları Elemanın İçinde Kullanmak:
Bu yaklaşım, her bir .question öğesini seçer ve bu öğelerin içindeki .question-btn öğelerini bulur. Daha sonra her bir butona bir olay dinleyici ekleyerek, butona tıklandığında ilgili .question öğesine show-text sınıfını ekler veya kaldırır. 
Bu yöntemde, butonun ait olduğu .question öğesini seçmek için querySelector kullanılır. */

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");


    btn.addEventListener("click", function () {


        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });
/* 
DOM Üzerinde Dolaşmak (Traversing the DOM):
Bu yaklaşım, her bir .question-btn öğesini seçer ve bu butonlara bir olay dinleyici ekler. 
Butona tıklandığında, butonun üstündeki iki üst düzey ebeveyn yoluyla (parentElement.parentElement) ilgili .question öğesine erişir ve bu öğeye show-text sınıfını ekler veya kaldırır. */