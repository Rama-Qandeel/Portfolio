import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import Card from "../card/Card";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
const list = [
  {
    id: "featured",
    title: "Featured",
  },
  {
    id: "web",
    title: "Web App",
  },
  {
    id: "mobile",
    title: "Mobile App",
  },
  {
    id: "design",
    title: "Design",
  },
  {
    id: "content",
    title: "Content",
  },
];
const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
      <div className="header">
        <h2>My <span>Services</span></h2>
        <p>
          dummy text of the printing and typesetting industry. Lorem Ipsum has
        </p>
      </div>
      <div className="line"></div>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((card) => (
         <Card card={card}/>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
