import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 5%);
  background: var(--litTwo);
  /* border: 5px solid var(--litThree); */
  border-radius: 1rem;
  padding: 2rem 2.5rem;
  font-size: clamp(1.8rem, 2.5vw, 2.1rem);
  line-height: 1.8;
  font-weight: 500;
  label {
    display: block;
    margin-bottom: 1.6rem;
  }

  h2 {
    font-size: clamp(2.2rem, 3vw, 2.6rem);
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: clamp(1.5rem, 2vw, 1.8rem);
    border: 1px solid #fee;
    border-radius: 0.6rem;
    line-height: 1.8;
    &:focus {
      outline: 0;
      border-color: var(--purple);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: var(--purple);
    color: white;
    margin: 1.6rem 0;
    border: 0;
    border-radius: 0.6rem;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;

    &:hover {
      background: hsl(264, 90%, 60%);
      /* box-shadow: 0px 5px 8px 1px rgb(0 0 0 / 18%); */
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 8px;
      content: '';
      display: block;
      margin-bottom: 2.2rem;
      background-image: linear-gradient(
        to right,
        #b080ff 0%,
        #ff8080 50%,
        #b080ff 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.7s linear infinite;
    }
  }

  span {
    font-weight: bold;
  }
`;

export default Form;
