import Image from "next/image";
import styles from "./HeroGrid.module.css";

const HeroGrid = () => {
  return (
    <section className={styles.heroGrid}>
      <div className={`${styles.featuredProduct} ${styles.heroGridArea}`}>
        <div className={styles.headline}>
          <h3>New Collection</h3>
          <h2 className={styles.highlight}>Chairs & Stools</h2>
          <p>
            Armchair upholstered in synthetic leather. Powder coated steel legs.
          </p>
        </div>
      </div>
      <div
        className={`${styles.secondaryProduct} ${styles.heroGridArea}`}
      ></div>
      <div className={`${styles.CTA} ${styles.heroGridArea}`}>
        <h4>Shop Now</h4>
        <Image src="/images/arrow-right.png" width={25} height={30} />
      </div>
    </section>
  );
};

export default HeroGrid;
