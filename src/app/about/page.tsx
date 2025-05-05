import type { Metadata } from 'next';

import Image from 'next/image';
import myImage from '../../../public/images/avatar.jpg';

import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'App Blog | Home',
  description: 'App Blog Home Page',
};

const AboutPage = () => {
  return (
    <article className={styles.container}>
      <Image
        className={styles.avatar}
        src={myImage}
        alt="Valerii Gurnak Photo"
        loading="eager"
      />

      <div>
        I am Frontend developer. My technology stack includes HTML5, CSS3,
        JavaScript, TypeScript, React, ReduxToolkit, Node.js, MongoDB, REST API,
        GitI have practical experience using Scrum methodology and Agile
        principles in team projects.In teamwork I value communication,
        organization, responsibility and cooperation.My goal is to work in a
        company where I can improve my developer skills and be useful to the
        team toachieve good results in the long term.
      </div>
    </article>
  );
};

export default AboutPage;
