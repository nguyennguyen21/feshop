import ContainerNav from "../src/modules/Lib/components/Header/ContainerNav/header";
import NavItem from "../src/modules/Lib/components/Header/NavItem/navItem";
import Submenu from "../src/modules/Lib/components/Header/Submenu/submenu";

export default function SharedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ContainerNav>
                <NavItem href="/">Trang chủ</NavItem>

                <Submenu trigger="Sản phẩm">
                    <NavItem href="/phone">Điện thoại</NavItem>
                    <NavItem href="/laptop">Laptop</NavItem>
                    <NavItem href="/tablet">Máy tính bảng</NavItem>
                </Submenu>

                <NavItem href="/about">Giới thiệu</NavItem>

                <NavItem href="/contact">Liên hệ</NavItem>
            </ContainerNav>

            <main>{children}</main>
        </>
    );
}