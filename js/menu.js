const dishes = document.querySelector('#dishes');
const searchFoods = document.querySelector('#searchFoods');
const Footer = document.querySelector('#footer');

//food menu object
let searchMenu = [{
        price: 120,
        img: 'images/f2.jpg',
        food: 'chilla',
        desc: 'A short description'
    },
    {
        price: 20,
        img: 'images/f3.webp',
        food: 'laddu',
        desc: 'A short description'
    },
    {
        price: 50,
        img: 'images/f1.jpg',
        food: 'hot water',
        desc: 'A short description'
    },
    {
        price: 35,
        img: 'images/f2.jpg',
        food: 'cold water',
        desc: 'A short description'
    },
    {
        price: 35,
        img: 'images/f2.jpg',
        food: 'Juice',
        desc: 'A short description'
    },
    {
        price: 99,
        img: 'images/f2.jpg',
        food: 'Pizza',
        desc: 'Yummy Pizza'
    }
];
searchMenu = searchMenu.map((item, index) => ({...item, id: index })) //added an id generator

//generating markup
const generateMarkupCard = (menu) => {
    return `
        <div class="col-md-6 col-lg-3">
            <div class="card item" >
                <div class="card-body text-center"> 
                    <h4 class="price">$${menu.price}</h4>
                    <img src="${menu.img}" class="rounded-circle my-3 w-50">

                    <h3 class="card-title title">${menu.food}</h3>
                    <p class="lead card-text text-muted">
                       ${menu.desc} 
                    </p>

                    <input type="text" class="qtty fontAwesome border-0 border-bottom mb-3 text-center form-control" name="qtty" placeholder="&#xf500; Enter Quantity" style="font-family: Arial, 'Font Awesome 5 Pro'" required>

                    <button class="btnOrd" data-fp="${menu.price}" data-fn="${menu.food}">Order Now!</button>
                </div>
            </div>
        </div>
    `;
}

//rendering results
const render = (menu) => {
    dishes.innerHTML = '';
    menu.map(dish => dishes.insertAdjacentHTML('beforeend', generateMarkupCard(dish)))
}

//default
render(searchMenu);

//searching
searchFoods.addEventListener('input', () => {
    const input = (searchFoods.value).toLowerCase();
    const searchFood = searchMenu.filter(menu => menu.food.toLowerCase().includes(input));
    Footer.style.display = 'block';
    if (searchFood.length === 0) {
        Footer.style.display = 'none';
        return dishes.innerHTML = `
            <h1 class='m-auto text-center'>No Results</h1>
            `
    } else if (input === '') {
        render(searchMenu);
    } else {
        render(searchFood);
    }
    const food = parent.querySelector('.title');


})


/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@___BILLING___@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
const orderBtns = document.querySelectorAll('.btnOrd');
// const qtty = document.querySelector('.qtty');
const bill = document.querySelector('.bill');
const billText = document.querySelector('#bill');

// const prices = [];
// const foods = [];
let userOrders = []
orderBtns.forEach((order) => {
    order.addEventListener('click', e => {
        e.preventDefault();
        const parent = e.target.closest('.card');
        const qtty = parent.querySelector('.qtty');
        const food = parent.querySelector('.title');
        const priceOrg = parent.querySelector('.price').textContent;
        const price = +(priceOrg.replace('$', ''))
            // console.log(parent);

        if (qtty.value == '') {
            alert("Please enter the qtty");
        } else {
            // console.log((qtty.value) * price);
            order.textContent = 'Ordered!';

            userOrders.push({ price: ((qtty.value) * price), name: (food.textContent) })
            generateMarkupOrders();

            parent.classList.add('selected');
            qtty.value = '';
        }

        // const fp = +order.dataset.fp;
        // const fn = order.dataset.fn;


    })
})

bill.addEventListener('click', () => {
    const prices = userOrders.map(item => item.price)
    if (userOrders.length === 0) {
        billText.textContent = "Please order something!"

    } else {
        billText.textContent = '$' + prices.reduce((totalPrice, price) => totalPrice + price, 0)
        console.log(prices)

    }

})

/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@___CART___@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
const orders = document.querySelector('#Orders');
const ordersList = document.querySelector('.orders-list');
const cancel = document.querySelector('.cancel');

const generateMarkupOrders = () => {

    ordersList.innerHTML = userOrders.map(item =>
        `
        <li class="list-group-item d-flex justify-content-between align-items-start mb-2  border-left">
          <div class="ms-3 me-auto">
             <h4>${item.name}</h4>
                <span class="text-center">$${item.price}</span>
          </div>
          <button class="btn btn-secondary border-0 bg-orange rounded text-light cancel">
              Cancel
          </button>
      </li>
    `
    )



}


orders.addEventListener('click', (e) => {
    console.log(userOrders);


})


orders.addEventListener('click', e => {
    if (e.target.classList.contains('cancel')) {
        console.log(e.target.parentElement.children[0].children[0].textContent)

        for (let i = 0; i < userOrders.length; i++) {
            if (e.target.parentElement.children[0].children[0].textContent === userOrders[i].name) {
                e.target.parentElement.remove()
                userOrders.splice([i], 1);

            }
        }



    }
    if (userOrders.length === 0) {
        for (let i = 0; i < orderBtns.length; i++) orderBtns[i].textContent = 'Order Now!'
    } else {
        const food = document.querySelectorAll('.title');
        for (let j = 0; j < food.length; j++) {

            if (food[j].textContent === e.target.parentElement.children[0].children[0].textContent) {
                orderBtns[j].textContent = 'Order Now!'
            }

        }
    }
})