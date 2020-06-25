import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2> I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {id:1
    name: 'Kimchi',
    image:
      'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.bibigo.com%2Fkr%2Fkorean-food-story-kimchi&psig=AOvVaw3mkSCy6F0apbu6BWpAbpkC&ust=1593154613334000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND2vcmxnOoCFQAAAAAdAAAAABAD',
  },

  {id:2
    name: 'Kimbab',
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2016%2F04%2F08%2F1d26c0444e724bca8ed271b24da0057a1.jpg&imgrefurl=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6846151&tbnid=Xz3xQoYZw3bqEM&vet=12ahUKEwjMwdnasZzqAhWkG6YKHbZcBBsQMygCegUIARC4Ag..i&docid=hloK_yNCG-S1AM&w=743&h=743&q=%EA%B9%80%EB%B0%A5&ved=2ahUKEwjMwdnasZzqAhWkG6YKHbZcBBsQMygCegUIARC4Ag',
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={(dish, image)} />;
}

function App() {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(render.Food)}
    </div>
  );
}
export default App;
