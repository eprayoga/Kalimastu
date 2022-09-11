import LokakaryaCard from '../../molecules/LokakaryaCard';
import {
  LokakaryaList,
  LokakaryaPageHeader,
  LokakaryaPageSection,
} from './LokakaryaPageElements';

const LokakaryaPage = () => {
  return (
    <LokakaryaPageSection>
      <LokakaryaPageHeader>
        <p>Program Kerja</p>
        <h1>Lokakarya Kalimastu ITG</h1>
      </LokakaryaPageHeader>

      <LokakaryaList>
        <LokakaryaCard
          thumbnail="lokakarya.jpg"
          type="Proker Informatika"
          locate="SMP Plus IT Husnul Khotimah"
          name="Pelatihan TIK"
        />
        <LokakaryaCard
          thumbnail="seminar_litdig.jpg"
          type="Proker Unggulan"
          name="Seminar Literasi Digital"
          locate="Gor Serbaguna Husnul Khotimah"
        />
        <LokakaryaCard
          thumbnail="meningkatkan_umkm.jpg"
          type="Proker Industri"
          name="Meningkatkan UMKM Masyarakat"
          locate="UMKM KP Pangkalan Desa Sindangratu"
        />
        <LokakaryaCard
          thumbnail="penunjuk_arah_jalan.JPG"
          type="Proker Sipil"
          name="Pembuatan Visual Display atau Penunjuk Arah Jalan"
          locate="Jalan Kampung Pangkalan"
        />
        <LokakaryaCard
          thumbnail="edukasi_literasi_digital.jpg"
          type="Proker Informatika"
          name="Edukasi Literasi Digital"
          locate="Gor Serbaguna Husnul Khotimah"
        />
        <LokakaryaCard
          thumbnail="lomba_agustusan.jpg"
          type="Proker Tambahan"
          name="Ikut Sukseskan Acara Memperingati HUT RI Ke-77"
          locate="Halaman Masjid Al-Huda"
        />
        <LokakaryaCard
          thumbnail="mengajar_di_sd.jpg"
          type="Proker Umum"
          name="Membantu Proses Mengajar Lembaga Sekolah"
          locate="Madrasah, TK, dan SD"
        />
        <LokakaryaCard
          thumbnail="pengukuran_jalan_rusak.jpg"
          type="Proker Sipil"
          name="Pengukuran Jalan Rusak"
          locate="Jalan dan Gang Kampung Pangkalan"
        />
        <LokakaryaCard
          thumbnail="program_bian.jpg"
          type="Proker Umum"
          name="Sukseskan Program Bulan Imunisasi Nasional (BIAN)"
          locate="Posyandu Assalia 1 dan 2, dan Posyandu Sejahtera"
        />
      </LokakaryaList>
    </LokakaryaPageSection>
  );
};

export default LokakaryaPage;
