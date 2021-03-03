import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --red-dark: #d13952;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }
  
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  
  body {
    background: var(--background);
    color: var(--text);
  }
  
  body,
  input,
  textarea,
  button {
    font: 400 1rem "Inter", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5.25rem;
    align-content: center;

    @media (max-width: 768px) {
      margin-top: 3rem;
      grid-template-columns: none;
      grid-template-rows: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
