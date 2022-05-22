import "../../styles/Entity.css";
import { Button } from "../pageEssentials/Button";

const CategoryInfo = () => {
  function potvrdi() {
    console.log("TO DO update and add");
  }

  return (
    <>
      <div class="coffee">
        <div class="row">
          <div class="column">
            <label>Naziv</label>
            <input type="text" maxlength="19" placeholder="" />
          </div>
          <div class="column">
            <label>Skracenica</label>
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
          route="/categories"
          onClick={potvrdi}
        ></Button>
        <Button
          className="btnUpdateCoffeeInfo"
          buttonStyle="color"
          buttonSize="small"
          text="Izmeni"
          route="/categories"
          onClick={potvrdi}
        ></Button>
      </div>
    </>
  );
};
export default CategoryInfo;
