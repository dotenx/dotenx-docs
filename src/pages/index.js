import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <p className="hero__title">DoTenX has two functionalities</p> */}
        <div className={styles.infoRow}>
          Note: This documentation is still a work in progress and will be updated as we progress.
        </div>
        <div className={styles.infoRow}>
          <p className="hero__subtitle">Building the back-end of your application?</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/builder_studio/intro">
              Learn about the Builder Studio
            </Link>
          </div>
        </div>

        <div className={styles.infoRow}>
          <p className="hero__subtitle">Automating workflows?</p>

          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/automation_studio/intro">
              Lear about the Automation Studio
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Automation with DoTenX ${siteConfig.title}`}
      description="Learn how to automate workflows or build applications with DoTenX <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
