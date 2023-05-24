import React, { ReactElement, useMemo } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import s from './product.module.css';
import { Container } from '../../components/container/container';
import Layout from '../../components/layout';
import { MainTitle } from '../../components/mainTitle/mainTitle';
import { PRODUCTS } from '../../components/products/data';
import { SectionTitle } from '../../components/sectionTitle/sectionTitle';
import { NextPageWithLayout } from '../_app';

const ProductPage: NextPageWithLayout = () => {
  const router = useRouter();

  const { productId } = router.query;

  const product = useMemo(
    () => PRODUCTS.find(({ id }) => '' + id === productId),
    [productId],
  );

  return (
    <Container extraClass={s.container}>
      <SectionTitle>Информация о товаре</SectionTitle>
      {product?.thumbnail && (
        <div className={s.preview}>
          <Image
            priority
            alt={product?.name}
            height={0}
            sizes="100vw"
            src={product.thumbnail}
            width={0}
          />
        </div>
      )}

      <MainTitle>{product?.name}</MainTitle>
    </Container>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProductPage;
