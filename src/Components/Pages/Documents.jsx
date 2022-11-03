import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import house_model from "../../Assets/model_outside.jpg";
import { PrimaryBtn } from "../Partials/Buttons";

const StyledDocuments = styled.section`
  .title {
    width: 70%;
    margin: 4rem auto;
    font-size: ${(props) => props.theme.fontSize.p};
  }
  .grid-section {
    width: 80%;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    gap: 2rem;

    .card {
      padding: 2rem;
      width: 60%;
      margin: 0 auto;

      h4 {
        font-size: ${(props) => props.theme.fontSize.h4};
        font-weight: 700;
        margin: 0;
      }
    }
  }
`;

export const Documents = () => {
  // Function will execute on click of button
  const onButtonClick = (filename) => {
    // using Java Script method to get PDF file
    fetch(`../../Assets/documents/${filename}`).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `${filename}`;
        alink.click();
        console.log("ran function");
      });
    });
  };

  return (
    <StyledDocuments>
      <Hero imgPath={house_model} headerTxt="Dokumenter, m. fl." />
      <p className="title">
        Nedenfor kan du finde dokumentation på beslutninger vedtaget bag
        projektet Ebeltoft Havnefront.
      </p>
      <section className="grid-section">
        <div className="card">
          <h4>Reservationsblanket</h4>
          <p>
            Det er muligt at reservere 1 bolig pr. reservationstager med 3
            prioriteter.
          </p>
          <a href="https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-content/uploads/dokumenter/Reservationsblanket.pdf">
            <PrimaryBtn>Hent reservationsblanket</PrimaryBtn>
          </a>
        </div>
        <div className="card">
          <h4>Købsaftale (udkast)</h4>
          <p>
            Du kan allerede nu hente vores udkast til en købsaftale. Den
            endelige version opdateres i løbet af 2023.
          </p>
          <a href="https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-content/uploads/dokumenter/Koebsaftale.docx">
            <PrimaryBtn>hent købsaftale</PrimaryBtn>
          </a>
        </div>
        <div className="card">
          <h4>Vedtægter (udkast)</h4>
          <p>
            De grundlæggende vedtægter for Ebeltoft Havnefront er formuleret
            herunder
          </p>
          <a href="https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-content/uploads/dokumenter/Vedtaegter.docx">
            <PrimaryBtn>Se vedtægter</PrimaryBtn>
          </a>
        </div>
        <div className="card">
          <h4>Privatlivspolitik</h4>
          <p>Vi sætter sikkerheden af jeres persondata højt.</p>
          <a href="https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-content/uploads/dokumenter/Privatlivspolitik.pdf">
            <PrimaryBtn>Se vores privatlivspolitik</PrimaryBtn>
          </a>
        </div>
        <div className="card">
          <h4>Husorden</h4>
          <p>
            Den midlertidige husorden for Ebeltoft Havnefront står klar og
            opdateres i 2023.
          </p>
          <a href="https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-content/uploads/dokumenter/husorden.pdf">
            <PrimaryBtn>Se husorden</PrimaryBtn>
          </a>
        </div>
        <div className="card">
          <h4>Tillæg til lejekontrakt</h4>
          <p>
            Til nogle lejemål sætter vi tillæg til lejekontrakten, som du kan se
            herunder.
          </p>
          <a href="https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-content/uploads/dokumenter/Tillaeg_lejekontrakt.pdf">
            <PrimaryBtn>Hent tillægskontrakt</PrimaryBtn>
          </a>
        </div>
        <div className="card">
          <h4>Lejekontrakt - Typeformular</h4>
          <p>Herunder kan du hente vores lejekontrakts formular</p>
          <a href="https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-content/uploads/dokumenter/Lejekontrakt_typeformular.pdf">
            <PrimaryBtn>Hent lejekontrakt</PrimaryBtn>
          </a>
        </div>
      </section>
    </StyledDocuments>
  );
};
