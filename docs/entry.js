
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/components/documented.js';
reactComponents['Documented'] = Component0;

import Component1 from '../src/components/header.js';
reactComponents['Header'] = Component1;

import Component2 from '../src/components/playerstable.js';
reactComponents['PlayersTable'] = Component2;

import Component3 from '../src/components/seo.js';
reactComponents['SEO'] = Component3;

import Component4 from '../src/components/user.js';
reactComponents['User'] = Component4;