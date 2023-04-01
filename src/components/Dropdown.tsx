import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

interface SwitchInterface{
	values?: any
	selectedKey?: string
	onChange: Function
	props?: any
}


export default function Dropdown({values, selectedKey, props, onChange}: SwitchInterface) {
	// @ts-ignore
	
	const [status, setStatus] = React.useState({
		selectedKey: selectedKey	
	})

	const panelRef = React.useRef(null)

	return (
		<StyledDropdownPanel {...props} onMouseUp={() => {panelRef.current.style.display = "block" }} onBlur={() => {panelRef.current.style.display = "none" }}>
			{status.selectedKey}
			<div className="drop-icon">
				<Icon icon="Down" />
			</div>
			<div className="menu-panel" ref={panelRef}>
				{
					values && values.map((item, index) => {
						return <div key={index} className="item flex middle" onBlur={() => {panelRef.current.style.display = "none" }} onClick={() => {setStatus({selectedKey: item.symbol || item.name}); onChange(item.key || item.symbol); panelRef.current.style.display = "none" }}>
							{item.symbol || item.name }
						</div>		
					})
				}
			</div>
		</StyledDropdownPanel>
	);
}

const StyledDropdownPanel = styled.div`
	background-color: ${({theme}) => theme.dropdown};
	color: ${({theme}) => theme.text};
	padding: 10px 1rem;
	border-radius: 25px;
	cursor: pointer;
	position: relative;
	min-width: 140px;
	font-size: 1rem;
	.drop-icon{
		position: absolute;
		right: 1rem;
		top: 0.6rem;
	}
	.menu-panel{
		position: absolute;
		top: 101%;
		left: 5%;
		display: none;
		overflow: hidden;
		width: 90%;
		z-index: 1001;
        border-radius: 8px;
		.item{
			width: 100%;
            background: #0f4d88;
			padding: 1rem;
			transition: 0.2s all;
			color: white;
			&:hover{
				background-color: #011c33;
				color: ${({theme}) => theme.text}!important;
			}
		}
	}
`
