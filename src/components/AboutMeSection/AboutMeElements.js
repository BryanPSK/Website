import styled from "styled-components";
import bg1 from '../../images/bg1.jpg'
import bg2 from '../../images/bg2.jpg'
import bg3 from '../../images/bg3.jpg'
import bg4 from '../../images/bg4.jpg'
import bg5 from '../../images/bg5.jpg'
import bg6 from '../../images/bg6.jpg'

export const AboutMeContainer = styled.div`
    background: url(${bg4});
    background-size: cover;
    object-fit: cover;
    -o-object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1040px;
    position: relative;
    z-index: 1;
`