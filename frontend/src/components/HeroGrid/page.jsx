import Image from "next/image";
import React from "react";

const HeroGrid = () => {
  return (
    <section className="heroGrid">
      <div className="featuredProduct" class="heroGridArea">
        <div className="headline">
          <h3 className="newCollection">New Collection</h3>
          <h2 className="chairs-stools">Chairs & Stools</h2>
          <p>
            Armchair upholstered in synthetic leather. Powder coated steel legs.
          </p>
        </div>
      </div>
      <div className="secondaryProduct heroGridArea"></div>
      <div className="CTA heroGridArea">
        <h4 className="shop">Shop Now</h4>
        <Image src="/images/arrow-right.png" width={25} height={30} />
      </div>
    </section>
  );
};

export default HeroGrid;
