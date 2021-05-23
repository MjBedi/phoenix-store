import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';

// ----WRAPPER----

const InnerStyles = styled.div`
  max-width: var(--maxwidth);
  margin: 0 auto;
  padding: 0 2rem;
`;

// ------------------PAGE COMPONENT------------------

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <InnerStyles>{children}</InnerStyles>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
