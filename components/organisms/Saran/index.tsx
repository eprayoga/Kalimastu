import Image from 'next/image';
import SaranIllustratorImage from '../../../public/assets/img/saran_illustrator.png';
import Button from '../../atoms/Button';
import {
  ContentTitle,
  FormInput,
  Input,
  Label,
  SaranContent,
  SaranIllustrator,
  SaranSection,
  TextArea,
} from './SaranElements';

export default function Product() {
  return (
    <SaranSection>
      <SaranIllustrator>
        <Image src={SaranIllustratorImage} width={540} />
      </SaranIllustrator>
      <SaranContent>
        <ContentTitle>
          <h1>Kritik dan Saran</h1>
          <p>Berikan tanggapan kalian terhadap tim Kalimastu ITG</p>
        </ContentTitle>
        <FormInput>
          <Label>Nama</Label>
          <Input />
        </FormInput>
        <FormInput>
          <Label>Email</Label>
          <Input />
        </FormInput>
        <FormInput>
          <Label>Kritik atau Saran</Label>
          <TextArea />
        </FormInput>
        <Button btnOutline>Kirim</Button>
      </SaranContent>
    </SaranSection>
  );
}
