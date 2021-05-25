import styled from 'styled-components';

const ItemStyles = styled.div`
  background: var(--litThree);
  /* border: 1px solid var(--offWhite); */
  box-shadow: 0px 16px 24px 6px rgb(0 0 0 / 10%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:before {
    content: '';
    background: var(--primary);
    position: absolute;
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    z-index: -1;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 32rem;
    min-height: 14rem;
    object-fit: cover;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  p {
    height: 100%;
    max-height: 2.8rem;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 1rem;
    font-size: clamp(1.3rem, 1.8vw, 1.6rem);
    text-align: left;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .buttonList {
    background: snow;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    button {
      cursor: pointer;
      flex: 1 1 100px;
      margin: 0.2rem;
      font-size: clamp(1.2rem, 1.3vw, 1.6rem);
      padding: 0.8rem;

      &:hover {
        box-shadow: var(--bs);
        transform: translateY(-1.5%);
        background: hsl(6, 100%, 93%);
      }
    }

    & > * {
      background: mistyrose;
      border: 0;
      font-size: 1.3rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
