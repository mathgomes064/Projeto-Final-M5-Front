import MenuCategory from "../CategoryHeader";
import Menu from "../MenuHeader/menu.index";
import { useContext } from "react";
import { UserContext } from "../../context/User";
import { ServicesContext } from "../../context/Services";
import logo from "../../assets/whiteLogo.png";
import { Header } from "./styles";
import { FiSearch } from "react-icons/fi";

const HeaderDashboard = () => {
  const { user } = useContext(UserContext);
  const { filterSearchField } = useContext(ServicesContext);

  return (
    <Header>
      <section className="infoUser">
          <div className="search">
            <input
              type="text"
              placeholder="Pesquise um serviço"
              onChange={(e) => filterSearchField(e.currentTarget.value)}
            />
            <FiSearch className="searchIcon" />
          </div>
          <Menu />
        </section>
        <div className="navegationDiv">
          <img className="whiteLogo" src={logo} alt="logo branca" />
        </div>
    </Header>
  );
};

export default HeaderDashboard;
