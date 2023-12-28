import React from "react";
import "./Card.css";
export default function Card() {
  return (
    <div className="cardParent">
      <img src="https://tse1.mm.bing.net/th?&id=OVP.-g0fwTzwCXFqUqPv8grwcAHgFo&w=330&h=186&c=7&pid=1.7&rs=1" />
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi .{" "}
      </p>
      <h4>
        <div>
          views <span>+999</span>{" "}
        </div>
        <div>
        minutes <span>+999</span>{" "}
        </div>
        <div>
          play <span>+999</span>{" "}
        </div>
      </h4>
    </div>
  );
}
