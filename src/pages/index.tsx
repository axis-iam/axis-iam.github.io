import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const sections = [
  {title: <Translate id="home.section.start.title">Start an integration</Translate>, text: <Translate id="home.section.start.text">Create an Application and the right public or confidential client.</Translate>, to: '/vertex/getting-started/'},
  {title: <Translate id="home.section.auth.title">Choose an auth surface</Translate>, text: <Translate id="home.section.auth.text">Compare Hosted, Embedded, and prebuilt Dialog responsibilities.</Translate>, to: '/vertex/authentication/'},
  {title: <Translate id="home.section.authorization.title">Enforce permissions</Translate>, text: <Translate id="home.section.authorization.text">Resolve roles to permissions at the browser and resource-server boundaries.</Translate>, to: '/vertex/authorization/'},
  {title: <Translate id="home.section.sdk.title">Use an SDK</Translate>, text: <Translate id="home.section.sdk.text">Follow tested JavaScript, Java, Go, and Python quickstarts.</Translate>, to: '/vertex/sdk/javascript/'},
  {title: <Translate id="home.section.enterprise.title">Connect enterprise identity</Translate>, text: <Translate id="home.section.enterprise.text">Configure Application-level SSO and inbound SCIM.</Translate>, to: '/vertex/enterprise/sso/'},
  {title: <Translate id="home.section.run.title">Run Vertex</Translate>, text: <Translate id="home.section.run.text">Deploy isolated services with PostgreSQL, Redis, and managed keyrings.</Translate>, to: '/vertex/deployment/'},
];

export default function Home() {
  return (
    <Layout title={translate({id: 'home.meta.title', message: 'Axis Vertex documentation'})} description={translate({id: 'home.meta.description', message: 'Public documentation for the Axis Vertex Application Identity Platform'})}>
      <main>
        <section className={`${styles.hero} vertex-hero`}>
          <div className={styles.heroInner}>
            <div className={styles.copy}>
              <p className={styles.kicker}><Translate id="home.kicker">Application Identity Platform</Translate></p>
              <h1>Axis Vertex</h1>
              <p className={styles.lead}><Translate id="home.lead">Build authentication, application-scoped authorization, B2B organizations, and enterprise connections around one explicit Application boundary.</Translate></p>
              <div className={styles.actions}>
                <Link className="button button--primary" to="/vertex/getting-started/"><Translate id="home.action.start">Get started</Translate></Link>
                <Link className="button button--secondary" to="/vertex/"><Translate id="home.action.overview">Read the overview</Translate></Link>
              </div>
            </div>
            <img className={styles.visual} src="/img/vertex-docs.png" alt={translate({id: 'home.visual.alt', message: 'Application, identity, policy, and enterprise connections converging through Axis Vertex'})} />
          </div>
        </section>
        <section className={styles.section} aria-labelledby="explore-title">
          <div className={styles.sectionInner}>
            <h2 id="explore-title"><Translate id="home.explore">Explore Vertex</Translate></h2>
            <div className={styles.grid}>{sections.map((item) => <Link key={item.to} className={styles.tile} to={item.to}><h3>{item.title}</h3><p>{item.text}</p><span><Translate id="home.openDocs">Open documentation</Translate></span></Link>)}</div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
