import "./styles.css";
import SimpsonsCard from "../../components/SimpsonsCard/SimpsonsCard";

function Homework_02() {
  return (
    <div className="homework02_page_wrapper">
      <SimpsonsCard
        firstName="Homer"
        lastName="Simpson" 
        job="Программист" 
        hobby="Еда и сон"
        avatar="https://avatars.mds.yandex.net/i?id=0452d3168af7c9a8d1344b9ae35164be088b7f45-9233745-images-thumbs&n=1340"
      />

      <SimpsonsCard 
        firstName="Homer"
        lastName="Simpson"
        job="QA-инженер" 
        hobby="Пить пиво"
        avatar="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
      />

      <SimpsonsCard
        firstName="Homer"
        lastName="Simpson"
        job="Frontend dev"
        hobby="Смотреть сериалы"
        avatar="https://tse3.mm.bing.net/th/id/OIP.Tt78xKbjLk2dbxi9VuyLkwHaHJ?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
      />
    </div>
  );
}

export default Homework_02;

