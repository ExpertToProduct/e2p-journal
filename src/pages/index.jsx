import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Subscribe from '@site/src/components/Subscribe/Subscribe';
import styles from './index.module.css';

/**
 * Homepage Expert To Product
 *
 * Sections :
 *   1. Hero : titre + sous-titre + Subscribe (variant card)
 *   2. À propos : pitch éditorial + lien vers articles
 *   3. CTA final : Subscribe (variant inline)
 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      {/* ===========================================
        * HERO — Bandeau principal
        * =========================================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Le journal d'un DAF qui transforme son expertise en produit
          </h1>
          <p className={styles.heroSubtitle}>
            Sans quitter son emploi. Sans lever de fonds. Sans se présenter comme consultant.
          </p>
          <div className={styles.heroSubscribe}>
            <Subscribe variant="card" title="Recevez le journal chaque semaine" />
          </div>
          <div className={styles.heroActions}>
            <Link
              className={styles.heroSecondaryLink}
              to="/articles"
            >
              Lire les articles publiés →
            </Link>
          </div>
        </div>
      </section>

      {/* ===========================================
        * À PROPOS — Pitch éditorial
        * =========================================== */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ce que vous trouverez ici</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutItem}>
              <h3 className={styles.aboutItemTitle}>Le journal hebdomadaire</h3>
              <p className={styles.aboutItemDescription}>
                Chaque semaine, le récit honnête d'un DAF qui construit, lance et vend un produit numérique. Décisions, doutes, victoires, échecs.
              </p>
            </div>
            <div className={styles.aboutItem}>
              <h3 className={styles.aboutItemTitle}>La bibliothèque de ressources</h3>
              <p className={styles.aboutItemDescription}>
                Des outils, méthodes et frameworks téléchargeables. Construits pour des opérationnels finance qui veulent passer à l'action.
              </p>
            </div>
            <div className={styles.aboutItem}>
              <h3 className={styles.aboutItemTitle}>Pas de promesse de richesse</h3>
              <p className={styles.aboutItemDescription}>
                Ni success story, ni recettes miracles. Juste le quotidien d'un salarié-expert qui documente ce qu'il fait, ce qu'il apprend, ce qui marche et ce qui ne marche pas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
        * CTA FINAL — Subscribe inline
        * =========================================== */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <Subscribe
            variant="card"
            title="Prêt à rejoindre l'aventure ?"
            description="Une newsletter par semaine. Désinscription en un clic. Aucun spam, jamais."
          />
        </div>
      </section>
    </Layout>
  );
}
