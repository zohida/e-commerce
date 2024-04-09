document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".header-link");
    const cart = document.querySelector(".cart");
    const bigImg = document.getElementById('bigImg');
    const minusIcon = document.getElementById('minusIcon');
    const plusIcon = document.getElementById('plusIcon');
    const calculateBtn = document.getElementById('calculate');
    const count = document.getElementById('count');
    const closeBtn = document.getElementById('close-btn');
    const counter = document.querySelector(".quantity");
    const cartText = document.querySelector(".cart-subtitle");
    const cartBody = document.querySelector(".cart-info");
    const quantity = document.querySelector(".cost-quantity");
    const totalAmount = document.querySelector(".total-cost");
    const deleteBtn = document.querySelector(".delete-button");
    const images = document.querySelectorAll('.hero-item');
    const picture = document.getElementsByClassName('hero-img');
    const box = document.querySelector('.box');
    const menu = document.querySelector('.menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('.body');

    
    cartIcon.addEventListener("click", () => {
        cart.classList.toggle("hidden");
    })

    document.addEventListener('keydown', function(event) {
     // Check if the pressed key is Esc (key code 27)
        if (event.keyCode === 27) {
          // Hide the card by adding the "hidden" class
          if (cart) {
            cart.classList.add('hidden');
          }
        }
      });

    
    images.forEach((image,idx) => {
       image.addEventListener("click", () => {
        bigImg.src = `./../../assets/images/image-product-${idx + 1}.jpg`;
    });
})

    function totalCost(){
         total = count.textContent * 125.00;
         console.log(total);
    }; 

    plusIcon.addEventListener('click', (e) => {
        e.preventDefault();
        count.textContent++;
    })
    
    minusIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if(count.textContent > 0) {
            count.textContent--;
        }
    });


    calculateBtn.addEventListener("click", () => {
        totalCost();
        if(total > 0) {
            cartText.classList.add("hidden");
            cartBody.classList.remove("hidden");
            quantity.textContent = count.textContent;
            totalAmount.textContent = `$${total}.00`;
            box.textContent = quantity.textContent;
        }

        count.textContent = 0;
    }) 

    deleteBtn.addEventListener("click", () => {
            cartText.classList.remove("hidden");
            cartBody.classList.add("hidden");
            quantity.textContent = 0;
            box.textContent = quantity.textContent;

    }) 

    bigImg.addEventListener("click", (e) => {

    })


    menu.addEventListener("click", () => {
        sidebar.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    })

    closeBtn.addEventListener("click", () => {
        sidebar.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    })

    addEventListener.remove()

    
});





