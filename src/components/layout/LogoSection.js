import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@material-ui/core";

// project imports
import Logo from "../../assets/images/vyvaha.png";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={"/home"}>
        <img src={Logo} />
    </ButtonBase>
);

export default LogoSection;
