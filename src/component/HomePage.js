import React, { Fragment } from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './images/mobile_black.png'

const Navbar = Styled.nav`
background-color: ${props => props.bgColor};
color: ${props => props.color};
position: sticky;
top: 0px;
font-size: 20px;
padding: 8px;
text-align:${props => props.text};
`
const LinkTag = Styled(Link)`
color:black;
text-decoration:none;
`
const Logo = Styled.img`
height: 30px;
width: 30px;
margin-bottom:-5px;
`
const Table = Styled.table`
border-collapse: collapse;
border: 3px solid #ddd;
`
const TableData = Styled.td`
border: 3px solid #ddd;
height:30px;
font-size:20px;
font-weight:bold;
padding:40px;
cursor: pointer;
vertical-align:bottom;
text-align:left;
&:hover {background-color: grey;}
`
const TableRow = Styled.tr`
border: 3px solid #ddd;
 &:nth-child(even){background-color: #F2F2F2;}
`
const Button = Styled.button`
color:black;
background-color: powderblue;
height:27px;
font-size: 15px;
outline: none;
border: none;
width: 100px;
float: right;
margin: -2px 15px;
cursor: pointer;
border-radius: 5px;
&:hover {
opacity: 0.5;
`
export const HomePage = () => {
	return (
		<Fragment>
			<Navbar bgColor='powderblue' color='black'>
				<Logo src={logo} />
				Beeja
			</Navbar>
			<Navbar bgColor='grey' color='white' text='center'>
				Home page
				<Button>
					<LinkTag to={'/'}>
						<FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> Logout
					</LinkTag>
				</Button>
			</Navbar>
			<Table>
				<TableRow>
					<TableRow>
						<TableData>
							<LinkTag to={'/hr'}>HR </LinkTag>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData>
							<LinkTag to={'/inventorypage'}> ACCOUNTING</LinkTag>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData>
							<LinkTag to={'/list'}>EMOPLOYEE DIRECTORY</LinkTag>
						</TableData>
					</TableRow>
					<TableRow>
						<TableData> CLIENT</TableData>
					</TableRow>
					<TableRow>
						<TableData>DOCUMENTATION</TableData>
					</TableRow>
				</TableRow>
			</Table>
		</Fragment>
	)
}
