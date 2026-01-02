import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { StyledBtn, WrapperDiv } from "./style";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const showHomeBtn = location.pathname !== "/";

  return (
    <WrapperDiv>
      {showHomeBtn ? (
        <Link to="/">
          <StyledBtn>
            <FontAwesomeIcon icon={faHouse} />
          </StyledBtn>
        </Link>
      ) : (
        <div></div>
      )}
      <StyledBtn>
        <FontAwesomeIcon icon={faLightbulb} />
      </StyledBtn>
    </WrapperDiv>
  );
}

export default Header;
