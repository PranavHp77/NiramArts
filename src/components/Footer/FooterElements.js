import styled from 'styled-components';

export const Box = styled.div`
height: 100px;
background: #101522;
position: relative;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 10px;
}
`;

export const Container = styled.div`
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const FRights = styled.div`
	color: #fff;
	display: table;
	padding: 20px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
	cursor: pointer;
`