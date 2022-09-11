import {
  TimPageHeader,
  TimPageSection,
  Title,
  Video,
  VideoSection,
} from './TimPageElements';

const TimPage = () => {
  return (
    <TimPageSection>
      <TimPageHeader>
        <h1>Tim Kalimastu ITG</h1>
        <p>Anggota-anggota Tim Kalimastu ITG</p>
      </TimPageHeader>

      <VideoSection>
        <Title>Tim Kalimastu Teknik Sipil</Title>
        <Video src="https://www.youtube.com/embed/Bepfwt8zW4A" />
      </VideoSection>
      <VideoSection>
        <Title>Tim Kalimastu Teknik Industri</Title>
        <Video src="https://www.youtube.com/embed/0-wmAHQTLKc" />
      </VideoSection>
      <VideoSection>
        <Title>Tim Kalimastu Teknik Informatika</Title>
        <Video
          src="https://www.youtube.com/embed/2JlL2g819Qc"
          title="YouTube video player"
        />
      </VideoSection>
      <VideoSection>
        <Title>Struktur Tim Kalimastu ITG</Title>
        <Video
          src="https://www.youtube.com/embed/6QqY2-sRtT4"
          title="YouTube video player"
        />
      </VideoSection>
    </TimPageSection>
  );
};

export default TimPage;
