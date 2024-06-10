import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeaader";
import SectionContent from "./components/SectionContent";
import Caption from "./components/Caption";
import { next } from "./data/next";
import { previous } from "./data/previous";
import Accordion from "./components/Accordion";
import Webinar from "./components/Webinar";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <Header />
      <main>
        <SectionHeader />

        <SectionContent>
          <Caption />
        </SectionContent>

        <SectionContent title="Next Webinar">
          {next.map((element, index) => (
            <Webinar element={element} key={`webinarnext${index}`} />
          ))}
        </SectionContent>

        <SectionContent title="Previous Webinars" previous={true}>
          {previous.map((element, index) => (
            <Accordion id={index}  key={`acc${index}`} >
              <Webinar element={element} key={`webinar${index}`} />
            </Accordion>
          ))}
        </SectionContent>

        <Footer />
      </main>
    </ParallaxProvider>
  );
}

export default App;
