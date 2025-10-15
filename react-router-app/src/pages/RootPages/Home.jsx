import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function Home() {
  return (
    <div>
      <Link to={PATHS["DUMMY"]["INDEX"]}>더미 페이지</Link>
    </div>
  );
}
