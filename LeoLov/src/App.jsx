import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { Nav } from "./components/Nav/Nav.jsx";
import { Card } from "./components/Card/Card.jsx";
import { About } from "./components/About/About.jsx";
import { AboutContent } from "./components/About/AboutContent/AboutContent.jsx";
import { AboutImage } from "./components/About/AboutImage/AboutImage.jsx";
import { cards, members } from "../src/data/data.js";
import { Team } from "./components/Team/Team.jsx";
import { AboutContentTwo } from "./components/About/AboutContentTwo.jsx/AboutContentTwo.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { AboutMap } from "./components/About/AboutMap/AboutMap.jsx";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <section className="cardSection">
        {cards.map((item) => (
          <Card
            key={item.content}
            title={item.title}
            content={item.content}
          ></Card>
        ))}
      </section>
      <About>
        <AboutImage image="about1.jpg"></AboutImage>
        <AboutContent
          title="INTET PROBLEM"
          content="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen."
          content2="Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
        ></AboutContent>
      </About>
      <About>
        <AboutContent
          title="EVIG GARANTI"
          content="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen."
          content2="Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
        ></AboutContent>
        <AboutImage image="about2.jpg"></AboutImage>
      </About>
      <h3 className="meetTheTeam" id="advokater">
        MØD HOLDET
      </h3>
      <section className="teamSection">
        {members.map((item) => (
          <Team
            key={item.image}
            image={item.image}
            name={item.name}
            text={item.text}
          ></Team>
        ))}
      </section>
      <About>
        <AboutMap></AboutMap>
        <AboutContent
          title="HER BOR VI"
          content="Vi har valgt at bosætte os i solen!"
          content2="Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget."
        >
          <AboutContentTwo
            content3="“Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er."
            adress1="Leo-Lov ApS"
            adress2="Maldive rd. 22"
            adress3="Seychelles"
          ></AboutContentTwo>
        </AboutContent>
      </About>
      <Footer></Footer>
    </>
  );
}

export default App;
