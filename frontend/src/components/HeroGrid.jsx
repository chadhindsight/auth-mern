import React from "react";

const Header = () => {
  return (
    <section id="heroGrid">
      <div id="featuredProduct" class="heroGridArea">
        <div id="headline">
          <h3 id="newCollection">New Collection</h3>
          <h2 id="chairs-stools">Chairs & Stools</h2>
          <p>
            Armchair upholstered in synthetic leather. Powder coated steel legs.
          </p>
        </div>
      </div>
      <div id="secondaryProduct" class="heroGridArea"></div>
      <div id="CTA" class="heroGridArea">
        <h4 className="shop">Shop Now</h4>
        <Image src="images/arrow-right.png" />
      </div>
    </section>
  );
};

export default Header;
