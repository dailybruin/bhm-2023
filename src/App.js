import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DescriptionText from './components/DescriptionArea'
import {CatalogTitle} from './components/DescriptionArea'

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/bhm-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      <DescriptionText description_text={data.description_text}/>
      <CatalogTitle title = "Stories"/>
      <CatalogTitle title = "Related Content"/>
      Hello Daily Bruin!
      <Footer/>
    </div>
  );
}

export default App;
