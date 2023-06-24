import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  padding: 20px 40px;

  & .country_info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
    margin-top: 20px;
  }
  & .image {
    display: flex;
    flex: 1;
    align-items: center;
    justify-items: center;
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  & .image img {
    width: 100%;
    height: 100%;
    
  }

  & .info {
    display: flex;
    width: 40%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: space-between;
  }

  & .info .col_1 {
    display: flex;
    flex: 1;
    gap: 0;
    flex-direction: column;
    flex-wrap: wrap;
  }

  & .info .col_2 {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
  }

  & h1 {
    width: 100%;
  }

  & p {
    margin: 4px 0;
    padding: 0;
  }
  @media (max-width: 650px) {
    flex-direction: column;

    & .info {
      width: 90%;
      flex-direction: column;
    }
    & .country_info {
      width: 90%;
      flex-direction: column;
    }
  }
`;

export const Button = styled.div`
  align-items: center;
  max-width: 100px;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 15px rgba(0, 0, 0, 0.2);
`;
