import Image from 'next/image';
import {
  LocateIcon,
  LocateName,
  LokakaryaCardContainer,
  LokakaryaImageContainer,
  LokakaryaLocate,
  LokakaryaName,
  LokakaryaType,
} from './LokakaryaCardElements';

interface LokakaryaCardTypes {
  thumbnail: string;
  type: string;
  name: string;
  locate: string;
}
export default function LokakaryaCard(props: LokakaryaCardTypes) {
  const { thumbnail, type, name, locate } = props;

  return (
    <LokakaryaCardContainer>
      <LokakaryaImageContainer>
        <Image
          src={`/assets/img/${thumbnail}`}
          width={270}
          height={215}
          objectFit="cover"
        />
      </LokakaryaImageContainer>
      <LokakaryaType>{type}</LokakaryaType>
      <LokakaryaName>{name}</LokakaryaName>
      <LokakaryaLocate>
        <LocateIcon src="/assets/icon/locate_white_icon.svg" alt="" />
        <LocateName>{locate}</LocateName>
      </LokakaryaLocate>
      {/* <Button small>Selengkapnya</Button> */}
    </LokakaryaCardContainer>
  );
}
