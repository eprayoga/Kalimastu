import {
  AllProduct,
  AllProductHeader,
  AllProductList,
  // Category,
  // CategoryHeader,
  // CategoryItem,
  // CategoryList,
  // CategoryName,
  ProductPageHeader,
  ProductPageSection,
} from './ProductPageElements';
import ProductCard from '../../molecules/ProductCard';

const ProductPage = () => {
  return (
    <ProductPageSection>
      <ProductPageHeader>
        <h1>Prouduk Kalimastu ITG</h1>
        <p>Produk UMKM Unggulan Kampung Sindangratu</p>
      </ProductPageHeader>
      {/* <Category>
        <CategoryHeader>Kategori</CategoryHeader>
        <CategoryList>
          <CategoryItem>
            <img src="/assets/icon/kalimastu_food.svg" alt="Kalimastu Food" />
            <CategoryName>Kalimastu Food</CategoryName>
          </CategoryItem>
          <CategoryItem>
            <img
              src="/assets/icon/kalimastu_fashion.svg"
              alt="Kalimastu Food"
            />
            <CategoryName>Kalimastu Fashion</CategoryName>
          </CategoryItem>
        </CategoryList>
      </Category> */}

      <AllProduct>
        <AllProductHeader>Semua Produk</AllProductHeader>
        <AllProductList>
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
        </AllProductList>
      </AllProduct>
    </ProductPageSection>
  );
};

export default ProductPage;
