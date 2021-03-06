import styled from 'styled-components';

const ItemStyles = styled.div`
  background: var(--litThree);
  /* border: 1px solid var(--offWhite); */
  box-shadow: 0px 16px 24px 6px rgb(0 0 0 / 10%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 484px) {
    flex-direction: row;
  }

  &:before {
    content: '';
    background: var(--primary);
    position: absolute;
    top: -4px;
    left: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
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
    cursor: pointer;

    @media (max-width: 484px) {
      max-width: 48%;
      max-height: 20rem;
      min-height: 18rem;
    }
  }

  .media {
    width: 100%;

    p {
      height: 100%;
      max-height: 2.8rem;
      line-height: 2;
      font-weight: 400;
      flex-grow: 1;
      padding: 0 1rem;
      font-size: clamp(1.4rem, 1.8vw, 1.6rem);
      text-align: center;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .buttonList {
      background: var(--litThree);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      button {
        cursor: pointer;
        flex: 1 1 100px;
        font-size: clamp(1.2rem, 1.3vw, 1.6rem);
        margin: 0.2rem;
        padding: 0.8rem;
        border-radius: 0.6rem;

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

    @media (max-width: 484px) {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;

      p {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
`;

export default ItemStyles;
