import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Accomp from './Components/Accomplishment/Accomp';
import BgAnimate from './Components/BgAnimate/BgAnimate';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Skill from './Components/Skills/Skill';
import Tech from './Components/Technologies/Tech';
import { Layout } from './Layout/Layout';
import { Section } from './Theme/Globals';

function App() {
    console.log("App");
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={ <>
                        <Section grid>
                            <Hero />
                            <BgAnimate />
                        </Section>
                        <Projects />
                        <Tech />
                        <Skill />
                        <Accomp />
                    </> } />
                </Routes>
            </Layout>
        </div>
  );
}

export default App;
