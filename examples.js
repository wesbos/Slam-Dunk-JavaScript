/* eslint-disable */

        <div className="cards">
          <div className="card">
            <p>I'm a Card</p>
            <button>Delete</button>
          </div>
          <div className="card">
            <p>I'm a Card</p>
            <button>Delete</button>
          </div>
        </div>

        document
          .querySelectorAll('.card button')
          .forEach(button => {
            button.addEventListener('click', (e) => {
              e.currentTarget.closest('.card').remove()
            });
          })

          button.addEventListener('click', (e) => {
            // does this button have a class of available and a set data-price attribute?
            if(e.currentTarget.matches('.available[data-price]')) {
              // .. go!
            }
          });



        /*
          returns the closest ancestor which
          is a div and has a parent article
        */
        el.closest("article > div");

        /*
          returns the closest ancestor which
          is not a div or an article
        */
        el.closest(":not(div):not(article)");


        /*
          Check if a reference to an element in inside another
        */
        const modal = document.querySelector('.modal');
        modal.contains(button); // true
        modal.querySelector('button'); // <button></button>
        !!modal.querySelector('button'); // true


        Bling.js

window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

$('.card'); // <div class="card"></div>
$$('.card'); // [<div class="card"></div>,<div class="card"></div>]

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

// instead of
document.querySelector('.card').addEventListener('click', handleClick);
// use
$('.card').on('click', handleClick);


NodeList.prototype.__proto__ = Array.prototype;

// Use any array methods on NodeLists
$$('.cards').map(card => card.textContent); // ['card 1','card 2']

NodeList.prototype.on = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
}

// instead of:
document
  .querySelectorAll('.cards')
  .forEach(card => card.addEventListener('click', handleClick));

  // use
$$('.cards').on('click', handleClick);



      window.$ = document.querySelector.bind(document);
      window.$$ = document.querySelectorAll.bind(document);

      Node.prototype.on = window.on = function (name, fn) {
        this.addEventListener(name, fn);
      }

      NodeList.prototype.__proto__ = Array.prototype;

      NodeList.prototype.on  = function (name, fn) {
        this.forEach(function (elem, i) {
          elem.on(name, fn);
        });
      }


function getUsers() {

}


      getUsers().then(users => {
        display(users);
      });

      // OR

      // async function go() {
      //   const users = await getUsers();
      //   display(users);
      // }


    // async function go() {
    //   const [users, products] = await Promise.all([getUsers(), getProducts()]);
    //   display(users);
    //   products(users);
    // }

    async function go() {
      const [users, products] = await Promise.race([getUsers(), getProducts()]);
      display(users);
      products(users);
    }


Array.from({ length: 7 }, (x, index) => (
  new Date(0, 0, index).toLocaleDateString('en-US', { weekday: 'long' })
));


const person = {
  id: 'abc123',
  name: 'Wes',
  twitter: '@wesbos'
};

      // 1:1 copy
      const copyOfWes = { ...wes };

      // copy and overwrite
      const copyNewId = {
        ...wes,
        id: 'def456'
      };

      // everything BUT id
      const { id, ...withoutId } = wes;


      const names = ['wes', 'kait', 'lux', 'poppy', 'snickers'];
      const cousins = ['arie', 'ira', 'roman'];
      // copy an array
      const copy = [...names];
      // combine two arrays
      const allNames = [...names, ...cousins];
      // remove item 3 without mutating the array
      const newNames = [...allNames.slice(0,2), ...allNames.slice(3)]
      // reverse an array without mutating original
      const reversedNames = [...names].reverse();



    function useState(intialState) {
      let initialState =
    }

