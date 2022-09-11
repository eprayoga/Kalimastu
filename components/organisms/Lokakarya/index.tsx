import Link from 'next/link';
import Button from '../../atoms/Button';
import LokakaryaCard from '../../molecules/LokakaryaCard';
import { LokakaryaList, LokakaryaSection, Title } from './lokakaryaElements';

export default function Lokakarya() {
  return (
    <LokakaryaSection>
      <Title>
        <p>Program Kerja</p>
        <h1>Lokakarya Kalimastu ITG</h1>
      </Title>
      <LokakaryaList>
        <LokakaryaCard
          thumbnail="lokakarya.jpg"
          type="Proker Informatika"
          locate="SMP Plus IT Husnul Khotimah"
          name="Pelatihan TIK"
        />
        <LokakaryaCard
          thumbnail="meningkatkan_umkm.jpg"
          type="Proker Industri"
          name="Meningkatkan UMKM Masyarakat"
          locate="UMKM KP Pangkalan Desa Sindangratu"
        />
        <LokakaryaCard
          thumbnail="penunjuk_arah_jalan.jpg"
          type="Proker Sipil"
          name="Pembuatan Visual Display atau Penunjuk Arah Jalan"
          locate="Jalan Kampung Pangkalan"
        />
      </LokakaryaList>
      <Link href="/lokakarya">
        <Button btnOutline>Selengkapnya</Button>
      </Link>
    </LokakaryaSection>
  );
}
