import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { StyledBtn, WrapperDiv } from "./style";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { toggleTheme } from "../../features/theme/themeSlice";

function Header() {
  const location = useLocation();
  const showHomeBtn = location.pathname !== "/";
  const dispatch = useAppDispatch();

  const handleClickThemeSwitchBtn = () => {
    dispatch(toggleTheme());
  };

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
      <StyledBtn onClick={handleClickThemeSwitchBtn}>
        <FontAwesomeIcon icon={faLightbulb} />
      </StyledBtn>
    </WrapperDiv>
  );
}

export default Header;
