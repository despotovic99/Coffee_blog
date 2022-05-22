import "../../styles/Entity.css";
import { Button } from "../pageEssentials/Button";

const UserInfo = () => {
  function potvrdi() {
    var combo = document.getElementById("combo"),
      op = combo.options[combo.selectedIndex].text;
    console.log("selected user role: " + op);
  }
  return (
    <>
      <div class="coffee">
        <div class="row">
          <div class="column">
            <label>Ime</label>
            <input type="text" maxlength="19" placeholder="" />

            <label>Prezime</label>
            <input type="text" maxlength="19" placeholder="" />
            <label>Email</label>
            <input type="text" maxlength="19" placeholder="" />
          </div>
          <div class="column">
            <label>Sifra</label>
            <input type="text" maxlength="19" placeholder="" />
            <label>Korisnicka uloga</label>
            <div class="in">
              <select id="combo">
                <option>admin</option>
                <option>visitor</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="btnInfo">
        <Button
          className="btnUpdateCoffeeInfo"
          buttonStyle="color"
          buttonSize="small"
          text="Dodaj"
          route="/users"
          onClick={potvrdi}
        ></Button>
        <Button
          className="btnUpdateCoffeeInfo"
          buttonStyle="color"
          buttonSize="small"
          text="Izmeni"
          route="/users"
          onClick={potvrdi}
        ></Button>
      </div>
    </>
  );
};
export default UserInfo;
