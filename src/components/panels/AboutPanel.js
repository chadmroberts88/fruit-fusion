import React from 'react'
import styled from 'styled-components'
import PanelHeader from '../panelComponents/PanelHeader'
import PanelFooter from '../panelComponents/PanelFooter'
import PanelBody from '../panelComponents/PanelBody'
import SecondaryButton from '../panelComponents/SecondaryButton'
import { useNavigate } from 'react-router-dom'
import SocialLink from '../panelComponents/SocialLink'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const Panel = styled.div`
    background-color: #333232;
    border-radius: 10px;
    width: 74vmin;
    height: 82vmin;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
`;

const SocialSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 30%;
    margin: 1vmin;
`;

const AboutPanel = () => {

    const navigate = useNavigate();

    const navigateToMenu = () => {
        navigate('/menu');
    }

    return (
        <Panel id="about-panel">
            <PanelHeader text={'About'} />
            <PanelBody>
                <Content>
                    <p>Fruit Fusion was developed by Chad Roberts.</p>
                    <SocialSection>
                        <SocialLink link={"https://www.linkedin.com/in/chadmroberts88"}>
                            <FaLinkedin />
                        </SocialLink>
                        <SocialLink link={"https://github.com/chadmroberts88"}>
                            <FaGithubSquare />
                        </SocialLink>
                    </SocialSection>
                </Content>
            </PanelBody>
            <PanelFooter>
                <SecondaryButton text={'Back'} handleClick={navigateToMenu} />
            </PanelFooter>
        </Panel>
    )
}

export default AboutPanel