import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

export const Content = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--title);

  :last-child {
    background: var(--green);
    color: var(--shape);

    strong {
      color: var(--shape);
    }
  }

  strong {
    display: block;
    color: var(--title);
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
    font-weight: 500;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
