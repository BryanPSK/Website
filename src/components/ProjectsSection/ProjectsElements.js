import styled from "styled-components";
import projects from '../../images/projects.jpg'
import bg1 from '../../images/bg1.jpg'
import bg2 from '../../images/bg2.jpg'
import bg3 from '../../images/bg3.jpg'
import bg4 from '../../images/bg4.jpg'
import bg5 from '../../images/bg5.jpg'
import bg6 from '../../images/bg6.jpg'

export const ProjectsContainer = styled.div`
    background: url(${bg5});
    background-size: cover;
    object-fit: cover;
    -o-object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1200px;
    position: relative;
    z-index: 1;
`

export const ProjectsBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const ProjectsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`

export const ProjectsH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    position: absolute;
    text-align: left;
    left: 0;

    @media screen and (max-width: 768px){
        font-size: 48px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const ProjectsWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: space-between;
`
// export const ProjectsRow = styled.div`
//     display: grid;
//     grid-column-gap: 400px;
//     /* grid-auto-columns: 30%; */
//     grid-auto-columns: minmax(auto, 1fr);
//     align-items: center;
//     grid-template-areas: 'col1 col2 col3';
//     /* justify-content: space-between; */

//     @media screen and (max-width: 768px) {
//         grid-template-areas: 'col1 col1' 'col2 col2' 'col3 col3' ;
//     }
// `
export const ProjectsRow = styled.div`
    display: grid;
    grid-column-gap: 20% ;
    /* grid-auto-columns: 30%; */
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3' 'con1 con2 con3' 'tech1 tech2 tech3';
    /* justify-content: space-between; */

    @media screen and (max-width: 768px) {
        /* grid-template-areas: 'col1 con1 tech1' 'col2 con2 tech2' 'col3 con3 tech3' ; */
        grid-template-areas: 'col1' 'con1' 'tech1' 'col2' 'con2' 'tech2' 'col3' 'con3' 'tech3' ;
    }
`
export const Col1 = styled.h1`
    min-width:200px;
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    border-bottom: 1px solid #fff;
    /* text-overflow: wrap; */
    grid-area: col1;
    align-items:top;
    justify-items:bottom;
`
export const Col2 = styled.h1`
    min-width:200px;
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    border-bottom: 1px solid #fff;
    grid-area: col2;
`
export const Col3 = styled.h1`
    min-width:200px;
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    border-bottom: 1px solid #fff;
    grid-area: col3;
`
export const Con1 = styled.p`
    max-width: 200px;
    overflow-wrap: break-word;
    grid-area: con1;
`
export const Con2 = styled.p`
    grid-area: con2;
`
export const Con3 = styled.p`
    grid-area: con3;
`
export const Tech1 = styled.p`
    grid-area: tech1;
`

export const Column1 = styled.div`
    /* position: relative; */
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    justify-content: top;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    justify-content: top;
    align-items: top;
    place-self:top;
`
export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
`
// export const Column1 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col1;
// `
// export const Column2 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
// `
// export const Column3 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col3;
// `
export const TextWrapper = styled.div`
    top: 0;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    border-bottom: 1px solid #fff;

`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;

`