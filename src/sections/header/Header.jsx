import Container from "../../components/Container";
import { MdOutlineLightMode } from "react-icons/md";
function Header() {
    return (
        <div className="py-4 border-b">
            <Container className="flex justify-between items-center">
                <a className="text-2xl font-bold text-teal-400" href="https://github.com/Ahmad-Maimun" target="blank">
                    Ahmad Maimun
                </a>
                <MdOutlineLightMode className="text-2xl cursor-pointer" />
            </Container>
        </div>
    );
}

export default Header;
