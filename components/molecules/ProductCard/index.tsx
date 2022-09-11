import Image from 'next/image';
import Link from 'next/link';
import {
  Price,
  ProductBy,
  ProductCardContainer,
  ProductImageContainer,
  ProductName,
} from './ProductCardElements';

interface ProductCardTypes {
  thumbnail: string;
  name: string;
  by: string;
  price: string;
  href: string;
}
export default function ProductCard(props: ProductCardTypes) {
  const { thumbnail, name, by, price, href } = props;

  return (
    <Link href={`/produk/${href}`} passHref>
      <ProductCardContainer>
        <ProductImageContainer>
          <Image
            src={`/assets/img/${thumbnail}`}
            width={270}
            height={270}
            objectFit="cover"
          />
        </ProductImageContainer>
        <ProductName>{name}</ProductName>
        <ProductBy>{`by ${by}`}</ProductBy>
        <Price>{price}</Price>
      </ProductCardContainer>
    </Link>
  );
}
