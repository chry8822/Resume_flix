import { Profiler } from "react"
import "./featured.scss"
import { PlayArrow, InfoOutlined } from "@material-ui/icons";


export default function Featured() {
  return (
    <div className="featured">
      (
        <div className="category">
          <span>Skills</span>
          <select name="HTML" id="HTML">
            <option value="">HTML</option>
            <option value="">CSS</option>
            <option value="">JavaScript</option>
            <option value="">React</option>
            <option value="">Sass</option>
          </select>
        </div>
      )
      <img src={process.env.PUBLIC_URL + "/대문사진.jpg"} alt="" />
      <div className="info">
        <div className="title">About me</div>
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ratione quas, a explicabo, quibusdam error reprehenderit possimus soluta ipsum eum voluptates quae, accusamus ipsam. Ullam praesentium doloribus exercitationem sunt fuga vero hic, optio suscipit! Ab corporis, architecto exercitationem nostrum ex quia modi voluptates corrupti omnis nesciunt dolorem laborum labore quae impedit. Fuga deleniti repellat quo laborum accusantium atque blanditiis voluptatum veritatis nesciunt quas reprehenderit harum maxime, magni explicabo sequi ipsum earum officiis laudantium modi cupiditate debitis illo. Deserunt adipisci architecto ex laudantium? Illum iusto laboriosam incidunt exercitationem maxime voluptatum asperiores atque repellat, accusamus, error repellendus ullam quis impedit? Optio, quas?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
