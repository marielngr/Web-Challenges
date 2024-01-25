import Image from "./Image.js";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Image className="round-image" src={logo} alt="logo" />
    </a>
  );
}
