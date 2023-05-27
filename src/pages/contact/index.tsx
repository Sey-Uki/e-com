import React, { ReactElement } from 'react';

import s from './contact.module.css';
import { ContactForm } from '../../components/contact/form/form';
import { Container } from '../../components/container/container';
import Layout from '../../components/layout';
import { MainTitle } from '../../components/mainTitle/mainTitle';
import { NextPageWithLayout } from '../_app';

const ContactPage: NextPageWithLayout = () => {
  return (
    <div className={s.contact}>
      <Container extraClass={s.container}>
        <MainTitle>Связаться с нами</MainTitle>

        <ContactForm />
      </Container>
    </div>
  );
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactPage;
