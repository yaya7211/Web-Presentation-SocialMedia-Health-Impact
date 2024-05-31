import './App.css';
import ExplanationsSection from './Explanations/Explanations';
import Header from './Header/Header';
import Main from './Main/Main';
import Introduction from './Introduction/Introduction'
import data from "./data.json"
import Footer from './Footer/Footer';


function App() {

  const introductions = data.introductions

  const explanations = data.explanations

  return (
    <div className="App">
      <Header />
      <Introduction introductions={introductions}/>
      <Main />
      <ExplanationsSection explanations={explanations}/>
      <div class="button-container">
        <a href="https://docs.google.com/document/d/1phBHx7iDq92vMQFkEoWZGeG9KjNFNFpieRlwUhRlCRo/edit?usp=sharing" className="pdf-button">
          <img src="https://cdn.discordapp.com/attachments/1245373185738932245/1246042642794680380/DALLE_2024-05-31_12.08.22_-_A_simple_and_sober_icon_depicting_a_PDF_report._The_icon_features_a_minimalist_design_of_a_document_with_the_letters_PDF_at_the_top_and_a_chart_or_g.webp?ex=665af324&is=6659a1a4&hm=07eca8a258561fa151865cc08f03c005d689e8771b7f6200b745686ae26730cb&" alt="Rapport complet" className="pdf-icon" />
          Voir le rapport complet sur Google Docs
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;