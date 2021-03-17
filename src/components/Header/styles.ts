import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 10rem;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--green);
    border: 0;
    outline: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Logo = styled.div``;
