import "../../styles/Entity.css";
import { Button } from "../pageEssentials/Button";

const CoffeeInfo = () => {
  function potvrdi() {
    console.log("TO DO update and add");
  }

  return (
    <>
      <div className="coffee">
        <div className="row">
          <div className="column">
            <label>Naziv</label>
            <input type="text" maxlength="19" placeholder="" />

            <label>Vrsta</label>
            <input type="text" maxlength="19" placeholder="" />
            <label>Kratak opis</label>
            <input type="text" maxlength="19" placeholder="" />
          </div>
          <div className="column">
            <label>Poreklo</label>
            <input type="text" maxlength="19" placeholder="" />
            <label>Kreator</label>
            <input type="text" maxlength="19" placeholder="" />
          </div>
        </div>
      </div>
      <div className="btnInfo">
        <Button
          className="btnUpdateCoffeeInfo"
          buttonStyle="color"
          buttonSize="small"
          text="Dodaj"
          route="/coffee"
          onClick={potvrdi}
        ></Button>
        <Button
          className="btnUpdateCoffeeInfo"
          buttonStyle="color"
          buttonSize="small"
          text="Izmeni"
          route="/coffee"
          onClick={potvrdi}
        ></Button>
      </div>
    </>
  );
};
export default CoffeeInfo;
