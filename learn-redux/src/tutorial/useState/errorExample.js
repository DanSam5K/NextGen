import React, { useState } from "react";
import { data } from "../../data";
const ErrorExample = () => {
  const [drink, setDrink] = useState(data);

  const removeDrink = (id) => {
    let newDrinks = drink.filter((drink) => drink.id !== id);
    setDrink(newDrinks);
  };

  // const handleClick = () => {
  //   if (title === [][0]) {
  //     setTitle([].push("Name"));
  //   } else {
  //     setTitle([][0]);
  //   }
  // };
  return (
    <>
      {/* <h2>{title}</h2>{" "}
      <button type="button" className="btn" onClick={handleClick}>
        change title{" "}
      </button> */}

      {drink.map((drinkType) => {
        const { id, name } = drinkType;
        console.log(id);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeDrink(id)}>remove</button>
          </div>
        );
      })}

      <button onClick={() => setDrink([])}>clear items</button>
    </>
  );
};

export default ErrorExample;

// import React from "react";

// const ErrorExample = () => {
//   let title = "random title";

//   const handleClick = () => {
//     title = "hello people";
//     console.log(title);
//   };
//   return (
//     <React.Fragment>
//       <h2>{title}</h2>
//       <button type="button" className="btn" onClick={handleClick}>
//         change title
//       </button>
//     </React.Fragment>
//   );
// };

// export default ErrorExample;
