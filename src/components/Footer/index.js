import React from "react";
import {Box,Container, FRights} from "./FooterElements";
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

	const toggleHome = ()=> {
        scroll.scrollToTop();
    }

return (
	<Box>
	<Container>
		<FRights onClick={toggleHome}>Niram Arts © 2021 <br/> All Rights Reserved.</FRights>
	</Container>
	</Box>
);
};
export default Footer;
