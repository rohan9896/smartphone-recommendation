import React, { useState } from "react";
import "./styles.css";
import apple from "./img/apple-svgrepo-com.svg";
import realme from "./img/realme-logo.svg";
import motorola from "./img/motorola.svg";
import samsung from "./img/samsung.svg";
import oneplus from "./img/oneplus.svg";
import xiaomi from "./img/xiaomi.svg";

const phonesDb = {
  "Under 10k": [
    {
      name: "Realme Narzo 20A",
      price: "₹ 9,499",
      link: "https://www.realme.com/in/realme-narzo-20a",
      img: realme,
      alt: "realme"
    },
    {
      name: "Xiaomi Redmi 9 Prime",
      price: "₹ 9,999",
      link: "https://www.mi.com/in/redmi-9-prime/",
      img: xiaomi,
      alt: "xiaomi"
    },
    {
      name: "Xiaomi Redmi 9",
      price: "₹ 8,999",
      link: "https://www.mi.com/in/redmi-9/",
      img: xiaomi,
      alt: "xiaomi"
    },
    {
      name: "Samsung Galaxy M11",
      price: "₹ 9,999",
      link:
        "https://www.flipkart.com/samsung-galaxy-m11-black-32-gb/p/itm0871b45a83143?pid=MOBFRZZHRFVXDUZZ&lid=LSTMOBFRZZHRFVXDUZZAORQQU&marketplace=FLIPKART&sattr[]=color&sattr[]=storage&sattr[]=ram&st=ram",
      img: samsung,
      alt: "samsung"
    }
  ],
  "Under 20k": [
    {
      name: "Poco X3",
      price: "₹ 15,999",
      link:
        "https://www.flipkart.com/poco-x3-cobalt-blue-64-gb/p/itme71cba415d626",
      img: xiaomi,
      alt: "xiaomi"
    },
    {
      name: "Realme 7 Pro",
      price: "₹ 19,999",
      link: "https://www.realme.com/in/realme-7-pro",
      img: realme,
      alt: "realme"
    },
    {
      name: "Motorola One Fusion+",
      price: "₹ 17,499",
      link:
        "https://www.flipkart.com/motorola-one-fusion-twilight-blue-128-gb/p/itm9c0e4b9b56acd",
      img: motorola,
      alt: "motorola"
    },
    {
      name: "Samsung Galaxy M31s",
      price: "₹ 19,499",
      link:
        "https://www.amazon.in/Samsung-Galaxy-Mirage-128GB-Storage/dp/B07DJCJBB3",
      img: samsung,
      alt: "samsung"
    }
  ],
  "Under 50k": [
    {
      name: "OnePlus 8T",
      price: "₹ 42,999",
      link:
        "https://www.amazon.in/OnePlus-Mirror-Black-128GB-Storage/dp/B085J19V4P",
      img: oneplus,
      alt: "oneplus"
    },
    {
      name: "Samsung Galaxy S20+",
      price: "₹ 49,999",
      link:
        "https://www.flipkart.com/samsung-galaxy-s20-cosmic-black-128-gb/p/itm1766e05e06464",
      img: samsung,
      alt: "samsung"
    },
    {
      name: "Samsung Galaxy S10 Plus",
      price: "₹ 44,999",
      link:
        "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B07KXC7WQZ",
      img: samsung,
      alt: "samsung"
    },
    {
      name: "OnePlus 8",
      price: "₹ 39,999",
      link: "https://www.oneplus.in/oneplus-8",
      img: oneplus,
      alt: "oneplus"
    }
  ],
  "Above 50k": [
    {
      name: "Apple iPhone 12 Pro Max",
      price: "₹ 1,29,900",
      link: "https://www.apple.com/in/iphone-12-pro/",
      img: apple,
      alt: "apple"
    },
    {
      name: "Samsung Galaxy Z Fold2",
      price: "₹ 1,49,999",
      link:
        "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B086KFBNV5",
      img: samsung,
      alt: "samsung"
    },
    {
      name: "Samsung Galaxy S20 Ultra",
      price: "₹86,999",
      link:
        "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B08444S68Q",
      img: samsung,
      alt: "samsung"
    },
    {
      name: "Samsung Galaxy Note 20 Ultra",
      price: "₹ 1,04,999",
      link:
        "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B089MSCW8P",
      img: samsung,
      alt: "samsung"
    }
  ]
};

var phoneArr = Object.keys(phonesDb);

export default function App() {
  const [category, setCategory] = useState("Under 10k");

  var categoryClickHandler = (category) => {
    // console.log(category);
    setCategory(category);
  };

  return (
    <div className="App">
      <h3>📱Check out my recommended smartphones📱</h3>
      <hr></hr>
      <div
        style={{
          textAlign: "left",
          margin: "1rem"
        }}
      >
        {phoneArr.map((category) => (
          <button onClick={() => categoryClickHandler(category)} class="btn">
            {category}
          </button>
        ))}
        <hr></hr>
      </div>

      <div>
        <ul class="not-bullet">
          {phonesDb[category].map((category) => {
            return (
              <li>
                <div class="container">
                  <img src={category.img} alt={category.alt} class="logo"></img>
                  <h4>{category.name}</h4>
                  <h4>{category.price}</h4>
                  <a
                    style={{ textDecoration: "none", color: "red" }}
                    href={category.link}
                  >
                    <h4>Buy here</h4>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
