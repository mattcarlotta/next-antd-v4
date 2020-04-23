import React from "react";
import Link from "../components/Link";

const Home = () => (
  <div className="home">
    <div className="home-card-logo">
      <img
        alt="Ant Design"
        src="https://gw.alipayobjects.com/zos/basement_prod/80e7d303-aa05-4c2d-94e9-2255ab5cea6c.svg"
        className="home-banner-mini"
      />
    </div>
    <p>
      A design system for enterprise-level products. Create an efficient and
      enjoyable work experience.
    </p>
    <ul className="list">
      <li>
        <Link href="/table">Table Example</Link>
      </li>
    </ul>
    <style jsx>{`
      .home {
        text-align: center;
        margin-top: 100px;

        h1 {
          font-size: 3em;
        }
      }
      .home-card-logo {
        position: relative;
        display: inline-block;
        max-width: 490px;
        cursor: pointer;

        &.home-banner-mini {
          display: block;
          max-width: 100%;
        }
      }
      .list {
        margin-top: 20px;
        padding: 0;
        list-style-type: none;
      }
    `}</style>
  </div>
);

export default Home;
