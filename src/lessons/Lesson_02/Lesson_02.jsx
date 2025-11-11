import Button from "../../components/Button/Button";
import { animal, getPlanteaterStatus } from "./data";
import "./styles.css";

function Lesson_02() {
  return (
    <div className="lesson_02_wrapper">
      <div className="animal_card">
        <p className="catd_title">Animal Card: {animal.type}</p>
        <img className="avatar" src={animal.avatarURL} alt="Animal Avatar" />
        <p className="card_info">Name: {animal.fullName}</p>
        <p className="card_info">Age: {animal.age}</p>
        <p className="card_info">Color: {animal.color}</p>
        <p className="card_info">
          Is PlantEater: {getPlanteaterStatus(animal.isPlanteater)}
        </p>
        {/* <p className="card_info">
          Is PlantEater: {animal.isPlanteater ? "Yes" : "No"}
        </p> */}
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default Lesson_02;
