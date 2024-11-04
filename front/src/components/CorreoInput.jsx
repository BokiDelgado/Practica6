import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Iniciar from "./Iniciar";
import Registro from "./Registro";


function CorreoInput() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">TIME-BOXING</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            TO-DO
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Anteriores
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Registro/>
        </NavbarItem>
        <NavbarItem>
            <Iniciar/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default CorreoInput;