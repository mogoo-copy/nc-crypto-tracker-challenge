import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggleBtn, WrapperDiv } from "./style";

function Header() {
  return (
    <WrapperDiv>
      <ThemeToggleBtn>
        <FontAwesomeIcon icon={faLightbulb} />
      </ThemeToggleBtn>
    </WrapperDiv>
  );
}

export default Header;
