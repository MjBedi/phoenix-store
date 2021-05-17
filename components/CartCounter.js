import styled from 'styled-components';

// TODO: Add Animation -> React TransitionGroup
const Dot = styled.div`
  /* display: block;
  background: var(--black);
  color: #fff;
  border-radius: 50%;
  padding: 0.5rem;
  font-size: 1.6rem;
  line-height: 2rem;
  min-width: 3rem;
  margin-left: 0.5rem; */
  display: inline-block;
  width: 2.6rem;
  height: 2.6rem;
  background: var(--black);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 200;
  border-radius: 50%;
  margin-left: 0.5rem;
  vertical-align: bottom;
  line-height: 2.4rem;
  /* Prevents Micro Jitters on digit change */
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default function CartCounter({ count }) {
  return <Dot>{count}</Dot>;
}
