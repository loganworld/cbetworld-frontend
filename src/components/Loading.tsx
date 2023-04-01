import  styled, { ThemeContext } from "styled-components"

const Loading = ({width=150, height=150, color="#eee", opacity=0.5, show=false}) => {
	// @ts-ignore
	return (
		<>
			{
				show && <div style={{position:'fixed', zIndex: 10001, top:'0', left:'0', width:'100vw', height:'100vh', backgroundColor:`rgba(0, 0, 0, ${opacity})`}}>
					<div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', height:'100%'}}>
						<StyledLoading style={{width: `${width}px`, height: `${height}px`, borderRadius:'5px', backgroundColor:'rgba(0,0,0,0.85)', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
							<span className="loader"></span>
						</StyledLoading>
					</div>
				</div>	
			}
		</>
	)
}
export default Loading

const StyledLoading = styled.div`
	.loader, .loader:before, .loader:after {
		border-radius: 50%;
		width: 2.5em;
		height: 2.5em;
		animation-fill-mode: both;
		animation: bblFadInOut 1.8s infinite ease-in-out;
	}
	.loader {
		color: #FFF;
		font-size: 7px;
		position: relative;
		text-indent: -9999em;
		transform: translateZ(0) translateY(-1.25rem);
		animation-delay: -0.16s;
	}
	.loader:before,
	.loader:after {
		content: '';
		position: absolute;
		top: 0;
	}
	.loader:before {
		left: -3.5em;
		animation-delay: -0.32s;
	}
	.loader:after {
		left: 3.5em;
	}
	
	@keyframes bblFadInOut {
		0%, 80%, 100% { box-shadow: 0 2.5em 0 -1.3em }
		40% { box-shadow: 0 2.5em 0 0 }
	}
`