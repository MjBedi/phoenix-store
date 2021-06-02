import styled from 'styled-components';

const Title = styled.h3`
  margin: -1.8rem 1rem 0 1rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: clip;

  @media (max-width: 484px) {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  a {
    background: var(--primary);
    display: inline;
    line-height: 1.3;
    font-size: clamp(1.7rem, 2vw, 2.1rem);
    text-align: center;
    color: white;
    padding: 0.1rem 1rem;
  }
`;

export default Title;
