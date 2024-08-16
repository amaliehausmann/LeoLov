import './App.css'
import { Header } from './Header/Header'
import { Nav } from './Nav/Nav'
import { Card } from './Card/Card'
import { About } from './About/About.jsx'
import { AboutContent } from './About/AboutContent.jsx/AboutContent.jsx'
import { AboutImage } from './About/AboutImage.jsx/AboutImage.jsx'
import { cards, members } from '../src/data/data.js'
import { Team } from './Team/Team.jsx'

function App() {

  return (
    <>
    <Nav></Nav>
    <Header></Header>
    <section className='cardSection'>
    {cards.map((item) => (
      <Card key={item.content} title = {item.title} content = {item.content}></Card>
    ))}
    </section>
    <About>
      <AboutImage image = 'about1.jpg'></AboutImage>
      <AboutContent title = 'INTET PROBLEM' content = 'Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.' content2 = 'Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!'></AboutContent>
    </About>
    <About>
      <AboutContent title = 'EVIG GARANTI' content = 'Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.' content2 = 'Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!'></AboutContent>
      <AboutImage image = 'about2.jpg'></AboutImage>
    </About>
    <h3 className='meetTheTeam'>MØD HOLDET</h3>
    <section className='teamSection'>
      {members.map((item) => (
        <Team key={item.image} image = {item.image} name = {item.name} text = {item.text}></Team>
      ))}
    </section>

    </>
  )
}

export default App
