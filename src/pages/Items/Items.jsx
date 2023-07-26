import React from "react";

const Items = (props) => {
const { name, price } = props;

return (
<div
className="flex flex-col items-center justify-center bg-white rounded-xl text-black hover:text-black hover:transform hover:bg-gradient-to-tr hover:from-amber-400 hover:to-yellow-200 hover:scale-125 duration-500 h-13 w-60 m-1"
onClick={() => {
props.onClick({ name, price });
}}
>
<h2 className=" text-xl font-semibold">{name}</h2>
<h4 className="text-lg font-medium">{price}</h4>
</div>
);
};

export default Items;