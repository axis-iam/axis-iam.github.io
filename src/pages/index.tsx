import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {navigation} from '../navigation';
import styles from './index.module.css';

function Arrow() {
  return <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const topics = [
  {id: 'auth', title: 'Authentication', text: 'Hosted, Embedded, Dialog, or your own forms.', path: 'authentication/'},
  {id: 'authorization', title: 'Authorization', text: 'Permissions for your users and resource servers.', path: 'authorization/'},
  {id: 'organizations', title: 'Organizations', text: 'B2B membership and invitation journeys.', path: 'organizations/'},
  {id: 'enterprise', title: 'Enterprise identity', text: 'Application-level SSO and SCIM provisioning.', path: 'enterprise/sso/'},
  {id: 'account', title: 'Account security', text: 'Profiles, identities, MFA, and active sessions.', path: 'authentication/account-security/'},
  {id: 'deployment', title: 'Deployment', text: 'Service isolation, configuration, and operations.', path: 'deployment/'},
] as const;

export default function Home() {
  return (
    <Layout title={translate({id: 'home.meta.title', message: 'Axis Vertex documentation'})} description={translate({id: 'home.meta.description', message: 'Public documentation for the Axis Vertex Application Identity Platform'})}>
      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <nav aria-label={translate({id: 'home.navigation', message: 'Documentation'})}>
            {navigation.map((group, index) => <div className={styles.navGroup} key={group.label}>
              <p>{translate({id: `home.nav.group.${index}`, message: group.label})}</p>
              <ul>{group.items.map((item) => <li key={item.id}><Link to={`/vertex/${item.path}`}>{translate({id: `home.nav.${item.id}`, message: item.label})}</Link></li>)}</ul>
            </div>)}
          </nav>
        </aside>
        <main className={styles.content} id="__docusaurus_skipToContent_fallback">
          <header className={styles.intro}>
            <img src={useBaseUrl('/img/favicon.png')} width="52" height="52" alt="" />
            <h1><Translate id="home.title">Start with your first app.</Translate></h1>
            <p><Translate id="home.intro">Add authentication and authorization to your application. From the first sign-in to enterprise identity, find the next step here.</Translate></p>
          </header>
          <section className={styles.start} aria-labelledby="start-title">
            <div>
              <h2 id="start-title"><Translate id="home.start.title">Connect a new application</Translate></h2>
              <p><Translate id="home.start.text">Create an Application, configure a client, and complete your first sign-in.</Translate></p>
              <Link className={styles.primary} to="/vertex/getting-started/"><Translate id="home.action.start">Get started</Translate><Arrow /></Link>
            </div>
            <ol className={styles.steps}>
              <li><Link to="/vertex/getting-started/connect-application/"><Translate id="home.step.application">Create an Application & client</Translate><Arrow /></Link></li>
              <li><Link to="/vertex/authentication/"><Translate id="home.step.authentication">Choose your sign-in experience</Translate><Arrow /></Link></li>
              <li><Link to="/vertex/authorization/server-resolution/"><Translate id="home.step.authorization">Protect your API</Translate><Arrow /></Link></li>
            </ol>
          </section>
          <section className={styles.sdkSection} aria-labelledby="sdk-title">
            <div className={styles.sectionHeading}><h2 id="sdk-title"><Translate id="home.sdk.title">Build with your stack</Translate></h2><p><Translate id="home.sdk.text">Configuration, quickstarts, and API references.</Translate></p></div>
            <div className={styles.sdks}>{['JavaScript', 'Java', 'Go', 'Python'].map((sdk) => <Link key={sdk} to={`/vertex/sdk/${sdk.toLowerCase()}/`}><span>{sdk}</span><Arrow /></Link>)}</div>
          </section>
          <section className={styles.topicSection} aria-labelledby="topics-title">
            <h2 id="topics-title"><Translate id="home.topics.title">Find a guide</Translate></h2>
            <div className={styles.topics}>{topics.map((topic) => <Link key={topic.id} to={`/vertex/${topic.path}`}><h3>{translate({id: `home.topic.${topic.id}.title`, message: topic.title})}<Arrow /></h3><p>{translate({id: `home.topic.${topic.id}.text`, message: topic.text})}</p></Link>)}</div>
          </section>
          <div className={styles.overview}><Translate id="home.overview.text">New to the platform?</Translate> <Link to="/vertex/"><Translate id="home.overview.link">Understand the Application model</Translate><Arrow /></Link></div>
        </main>
      </div>
    </Layout>
  );
}
