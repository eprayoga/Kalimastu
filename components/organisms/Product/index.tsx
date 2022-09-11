import Link from 'next/link';
import Button from '../../atoms/Button';
import ProductCard from '../../molecules/ProductCard';
import {
  ProductHeader,
  ProductList,
  ProductSection,
  Title,
} from './ProductElements';

export default function Product() {
  return (
    <ProductSection>
      <ProductHeader>
        <Title>
          <p>Produk UMKM Unggulan Kampung Sindangratu</p>
          <h1>Produk Kalimastu ITG</h1>
        </Title>
        <Link href="produk">
          <Button btnOutline>Lihat Semua Produk</Button>
        </Link>
      </ProductHeader>
      <ProductList>
        <ProductCard
          thumbnail="grandable_sendal_slop.jpg"
          name="Sandal dan Sepatu Kulit Grandable.id"
          by="Grandable.id"
          price="Harga Mulai Rp 86.000"
          href="sandal_sepatu_grandable_id"
        />
        <ProductCard
          thumbnail="all_brand_thrift.jpg"
          name="Pakaian Thrifting"
          by="All brand"
          price="Harga Mulai Rp 50.000"
          href="all_brand_thrift"
        />
        <ProductCard
          thumbnail="ajew_takoyaki.jpg"
          name="Takoyaki"
          by="Ajew Takoyaki"
          price="Rp 5.000"
          href="takoyaki"
        />
      </ProductList>
    </ProductSection>
  );
}
