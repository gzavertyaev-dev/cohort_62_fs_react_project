import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";


function Feedback() {

    
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);


        const Like = () => {
            setLikes((prevValue) => {
                return prevValue + 1;
            })
                 
        }
    

        const Dislike = () => {
            setDislikes((prevValue) => {
                return prevValue + 1;
            })
        }
          
    

        const Reset  = () => {
            setLikes(0);
            setDislikes(0);
        }   


  return (
    
    <div className="feedback_wrapper">
        
        <div className="button_control">
            <Button name="Like" onClick={Like} />
            <p className="count">{likes}</p>
        </div>
        

        <div className="button_control">
            <Button name="Dislike" onClick={Dislike} />
            <p className="count">{dislikes}</p>
        </div>

        <div className="button_control">
            <Button name="Reset Results" onClick={Reset } />
        </div>
    </div>
  );
}

export default Feedback;