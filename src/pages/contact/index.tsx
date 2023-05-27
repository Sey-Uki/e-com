import React, { ReactElement } from 'react';

import s from './contact.module.css';
import Layout from '../../components/layout';
import { MainTitle } from '../../components/mainTitle/mainTitle';
import { NextPageWithLayout } from '../_app';

const ContactPage: NextPageWithLayout = () => {
  return (
    <div className={s.contact}>
      <MainTitle>Связаться с нами</MainTitle>
    </div>
  );
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactPage;
