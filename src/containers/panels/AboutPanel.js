import { React } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import styled from "styled-components";

import PanelFrame from "../../components/panel/PanelFrame";
import PanelHeader from "../../components/panel/PanelHeader";
import PanelBody from "../../components/panel/PanelBody";
import PanelFooter from "../../components/panel/PanelFooter";
import SecondaryButton from "../../components/panel/SecondaryButton";
import SocialLink from "../../components/panel/SocialLink";

const Sections = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TextSection = styled.div`
	margin: 1vmin;
	text-align: center;
`;

const SocialSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 40%;
	margin: 1vmin;
`;

const AboutPanel = () => {
	const navigate = useNavigate();

	return (
		<PanelFrame id="about-panel">
			<PanelHeader text={"About Fruit Fusion"} />
			<PanelBody>
				<Sections>
					<TextSection>
						<p>
							Fruit Fusion was developed by Chad Roberts. Check out more of my
							work on LinkedIn or Github:
						</p>
					</TextSection>
					<SocialSection>
						<SocialLink link={"https://www.linkedin.com/in/chadmroberts88"}>
							<FaLinkedin />
						</SocialLink>
						<SocialLink link={"https://github.com/chadmroberts88"}>
							<FaGithubSquare />
						</SocialLink>
					</SocialSection>
				</Sections>
			</PanelBody>
			<PanelFooter>
				<SecondaryButton
					text={"Back to Menu"}
					handleClick={() => {
						navigate("/fruit-fusion/menu");
					}}
				/>
			</PanelFooter>
		</PanelFrame>
	);
};

export default AboutPanel;
