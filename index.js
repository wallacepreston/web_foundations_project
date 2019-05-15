// const data = {
//   customers: [
//     {
//       name: 'Moe',
//       Foo: 0,
//       Bar: 0,
//       Bazz: 0
//     },
//     {
//       name: 'Larry',
//       Foo: 0,
//       Bar: 0,
//       Bazz: 0
//     },
//     {
//       name: 'Curly',
//       Foo: 0,
//       Bar: 0,
//       Bazz: 0
//     }
//   ],
//   prizes: {
//     Foo: 1,
//     Bar: 3,
//     Bazz: 5
//   }
// };

// const state = {
//   counters: [ 1, 2 ],
// }

// const template = (data) => `
//   <div>
//     <ul>
//     ${ data.counters.map( num => `<li> ${num} </li>`).join('') }
//     </ul>
//     <br />
//     <button data-action='dec'>-</button>
//     <button data-action='inc'>+</button>
//   </div>
// `
// const div = document.querySelector('#square');

// // div.innerHTML = template(state);
// div.addEventListener('click', (ev) => {
//   const action = ev.target.getAttribute('data-action');
//   if(action === 'dec'){
//     state.counters = state.counters.slice(1)
//   }
//   if(action === 'inc'){
//     state.counters.push(5);
//   }
//   // console.log('click');
//   // state.counter++;
//   render();
// })
// const mainBody = document.getElementById('main');

// mainBody.innerHTML = `<p>Hello ${data.customers.map(customer =>{
//   return `<div>
//     ${customer.name}
//   </div>`
// }).join('')} </p>`


const data = {
  Foo: 'LEFT',
  Bar: 'LEFT',
  Bazz: 'RIGHT',
  Quq: "LEFT"
};

const left = document.querySelector('#left');
const right = document.querySelector('#right');

const handler = (evt) => {
  if (evt.target.tagName === 'BUTTON'){
    data[evt.target.innerHTML] = data[evt.target.innerHTML] === 'LEFT' ? 'RIGHT' : 'LEFT';
    render();
  }
}

left.addEventListener('click', handler);
right.addEventListener('click', handler);

const renderSection = (side, div) => {
  const html = `
  <ul>
  ${
    Object.keys(data).map( key => `<li><button ${ data[key] !== side ? 'disabled' : '' }> ${key} </li>`).join('')
  }
  </ul>
  `;
  div.innerHTML = html;
};

const render = () => {
  renderSection('LEFT', left);
  renderSection('RIGHT', right);
}

// render();
