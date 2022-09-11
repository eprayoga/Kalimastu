import {
  Date,
  DateDesc,
  Desa,
  DescItem,
  JumbotronSection,
  Kampung,
  Kec,
  KknDesc,
  Location,
  RW,
  RWItem,
  SubLocation,
  Title,
} from './JumbotronElements';

export default function Jumbotron() {
  return (
    <JumbotronSection>
      <img src="/assets/img/hero.png" alt="" />
      <KknDesc>
        <DescItem>
          <img src="/assets/icon/locate_icon.svg" alt="" />
          <Location>
            <Desa>DESA SINDANGRATU</Desa>
            <Kec>KEC WANARAJA</Kec>
          </Location>
          <img src="/assets/icon/line.svg" alt="Garis" />
          <SubLocation>
            <Kampung>DESA SINDANGRATU</Kampung>
            <RW>
              <RWItem>RW 04</RWItem>
              <RWItem>RW 05</RWItem>
              <RWItem>RW 10</RWItem>
              <RWItem>RW 11</RWItem>
            </RW>
          </SubLocation>
        </DescItem>
        <DescItem>
          <img src="/assets/icon/date_icon.svg" alt="Date" />
          <DateDesc>
            <Title>Waktu Pelaksanaan</Title>
            <Date>01 - 31 AGUSTUS 2022</Date>
          </DateDesc>
        </DescItem>
      </KknDesc>
    </JumbotronSection>
  );
}
