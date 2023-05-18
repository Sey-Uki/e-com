import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';

import Layout from '../../components/layout';
import { NextPageWithLayout } from '../_app';

const ProductPage: NextPageWithLayout = () => {
  const router = useRouter();

  return <div>{router.query.productId}</div>;
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProductPage;
