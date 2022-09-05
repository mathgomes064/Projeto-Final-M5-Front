import styled from "styled-components";

export const BodyStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  body {
    font-family: "Inter", sans-serif;
  }

  h2 {
    display: none;
  }

  .nextButton {
    display: none;
  }

  .servicesContainer {
    margin-top: 30px;
    display: flex;
    height: 350px;
    overflow: auto;
  }

  .serviceCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    min-width: 200px;
    height: 300px;
    margin: 10px;
    border: 3px solid var(--grey-3);
    border-radius: 5px;
  }

  .serviceImage {
    width: 70%;
    height: 40%;
  }

  .serviceName,
  .serviceValue {
    font-size: 17px;
    font-weight: bold;
    margin: 10px;
  }

  .serviceUserName {
    font-size: 14.5px;
    font-weight: 300;
    margin: 10px;
  }

  .serviceValue {
    font-weight: 700;
  }

  .detailsButton {
    background-color: var(--color-primary);
    color: var(--white);
    border: none;
    border-radius: 3px;
    width: 85%;
    height: 8%;
    font-size: 16px;
    font-weight: 300;
  }

  .detailsButton:focus {
    background-color: var(--color-primary-focus);
  }

  @media (min-width: 770px) {
    .services {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2 {
      display: block;
      color: var(--color-primary);
      text-align: center;
      font-size: 25px;
      font-weight: 700;
      margin: 30px;
    }

    .nextButton {
      display: block;
      color: var(--color-primary);
      background: none;
      border: none;
      width: 55px;
      height: 55px;
    }
    .servicesContainer {
      margin-top: 0px;
    }
  }
`;
