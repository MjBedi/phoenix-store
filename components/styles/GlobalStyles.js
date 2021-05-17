import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
}

html{
  --primary :  linear-gradient(135deg, #ff8080, #b080ff);
  --red : #ff0000;
  --purple : hsl(263, 100%, 63%);
  --black : #393939;
  --grey : #3a3a3a;
  --gray : var(--grey);
  --lightgrey : #e1e1e1;
  --lightgray : var(--lightgrey);
  /* --offwhite : #ededed; */
  --offwhite : #ffffff;
  --maxwidth : 1000px;
  --bs : 0 12px 24px 0 rgba(0,0,0,0.1);
  --rpGrad: linear-gradient(135deg, #ff8080, #b080ff);
  --lightpurple: #b080ff;
  --lightred: #ff8080;
  --litOne: snow;
  --litTwo: mistyrose;
  --litThree: hsl(6, 100%, 98%);
  box-sizing: border-box;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}

*, *:before, *:after{
  box-sizing: inherit;
  /* margin: 0;
  padding: 0; */
}

body{
  font-family: 'radnika_next',--apple-system, BlinkMacSystemFont,  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 2rem;
  line-height: 1.4;
  background: snow;
}

a{
  text-decoration: none;
  color: var(--black);
}

a:hover{
  text-decoration: underline;
}

button {
  font-family: 'radnika_next',--apple-system, BlinkMacSystemFont,  'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyles;
