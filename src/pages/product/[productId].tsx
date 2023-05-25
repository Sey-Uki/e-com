import React, { ReactElement, useMemo, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import s from './product.module.css';
import { Container } from '../../components/container/container';
import Layout from '../../components/layout';
import { CommentsTab } from '../../components/product/tabs/comments/comments';
import { DetailsTab } from '../../components/product/tabs/details/details';
import { SpecsTab } from '../../components/product/tabs/specs/specs';
import { SectionTitle } from '../../components/sectionTitle/sectionTitle';
import { PRODUCTS } from '../../utils/products';
import { NextPageWithLayout } from '../_app';

const ProductPage: NextPageWithLayout = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);

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

      <section className={s.tabs}>
        <button
          className={activeTab === 0 ? s.active : ''}
          onClick={() => setActiveTab(0)}
        >
          Описание
        </button>
        <button
          className={activeTab === 1 ? s.active : ''}
          onClick={() => setActiveTab(1)}
        >
          Характеристики
        </button>
        <button
          className={activeTab === 2 ? s.active : ''}
          onClick={() => setActiveTab(2)}
        >
          Отзывы
        </button>
      </section>
      {activeTab === 0 && (
        <DetailsTab
          description={product?.description}
          price={product?.price}
          title={product?.name}
        />
      )}
      {activeTab === 1 && <SpecsTab specs={product?.specs} />}
      {activeTab === 2 && <CommentsTab comments={product?.comments} />}
    </Container>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProductPage;
