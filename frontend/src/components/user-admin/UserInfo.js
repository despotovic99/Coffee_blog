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
      <div className="coffee">
        <div className="row">
          <div className="column">
            <label>Ime</label>
            <input type="text" maxlength="19" placeholder="" />

            <label>Prezime</label>
            <input type="text" maxlength="19" placeholder="" />
            <label>Email</label>
            <input type="text" maxlength="19" placeholder="" />
          </div>
          <div className="column">
            <label>Sifra</label>
            <input type="text" maxlength="19" placeholder="" />
            <label>Korisnicka uloga</label>
            <div className="in">
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
