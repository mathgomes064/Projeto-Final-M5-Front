import styled from "styled-components";

export const FooterStyle = styled.div`


  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;&display=swap");
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .innerFooter{
    width: 100vw;
    border-top: 1px solid var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .innerDiv{
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .liksAndNames{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 25vw;
    max-width: 80px;
    height: 12.5vh;
    max-height: 45px;
  }

  .links {
    margin: 5px;
    width: 10vw;
    max-width: 25px;
    height: 5vh;
    max-height: 25px;
  }

  .credits {
    font-weight: 200;
    width: 100vw;
    max-width: 250px;
    text-align: center;
    font-size: 15px;
  }
`;
