import React, {createContext, useState} from 'react';

export const HeaderNavContext = createContext();

function HeaderNavContextProvider(props) {
    const [programmes] = useState([
        {title: "SalesForce Administrator", id: 1 },
        {title: "Data Analytics", id: 2 },
        {title: "Intro to Software Engineering", id: 3 },
        {title: "AWS Cloud Computing", id: 4 }
    ]);

    const [admissions] = useState([
      {title: "Frequently asked Question", id: 5 },
      {title: "Admission Policy", id: 6 },
      {title: "Expectation of Learner", id: 7 }
    ]);

  const [abouts] = useState([
      {title: "ABOUT ALX ", id: 8 },
      {title: "ALX HUB", id: 9 },
      {title: "ALX Journey", id: 10 },
      {title: "WOMXN & Tec", id: 11 },
    ]);

  const [medias ] = useState([
      {title: "Blog ", id: 12 },
      {title: "News", id: 13 }
    ]);

  return (
    <HeaderNavContext.Provider value={{programmes, admissions, abouts, medias}}>
      {props.children}
    </HeaderNavContext.Provider>
  );
}

export default HeaderNavContextProvider;
