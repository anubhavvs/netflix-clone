import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;

  @media (max-width: 600px) {
    padding: 15px 15px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 750px;
  font-size: 4rem;
  font-weight: bold;
  margin: 0 auto;
  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: 400;
  margin: 1rem auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;