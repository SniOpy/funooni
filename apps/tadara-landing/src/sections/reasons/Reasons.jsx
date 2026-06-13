    import styled from 'styled-components'
    import { tadaraTheme } from '../../designSystem'

    function Reasons() {
    return (
        <ReasonsSectionStyled>
            <ReasonsTitleStyled>
            <h1 className="reasons-title">est-ce fait pour votre enfant ?</h1>
            </ReasonsTitleStyled>
            <ReasonsContentStyled>
                <ReasonsBulletsStyled>
                    <div className="reasons-bullets">
                        <ul className="reasons-bullet-list">
                            <li className="reasons-bullet-item">
                                <span className="reasons-bullet-icon">
                                    <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                                </span>
                                Celui qui pose mille questions
                            </li>
                            <li className="reasons-bullet-item">
                                <span className="reasons-bullet-icon">
                                    <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                                </span>
                                Celui dont les parents veulent lui ouvrir les yeux
                                sur une civilisation qui a changé le monde et
                                qu'on raconte encore trop peu
                            </li>
                            <li className="reasons-bullet-item">
                                <span className="reasons-bullet-icon">
                                    <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                                </span>
                                Celui dont les parents veulent transmettre
                            </li>
                            <li className="reasons-bullet-item">
                                <span className="reasons-bullet-icon">
                                    <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                                </span>
                                Celui qui boude la lecture
                            </li>
                            <li className="reasons-bullet-item">
                                <span className="reasons-bullet-icon">
                                    <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                                </span>
                                Celui qui passe trop de temps sur les écrans
                            </li>
                            <li className="reasons-bullet-item">
                                <span className="reasons-bullet-icon">
                                    <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                                </span>
                                Celui qui aime collectionner
                            </li>
                        </ul>
                    </div>
                </ReasonsBulletsStyled>
                <ReasonsImageStyled>
                    <img src="/images/reasons/fillette-letter.png" width={700} height={700} alt="Reasons image"/>
                </ReasonsImageStyled>
            </ReasonsContentStyled>
        </ReasonsSectionStyled>
    )
    }

    const ReasonsSectionStyled = styled.section`
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 80px;
        background-color: ${tadaraTheme.colors.background.cream};

        .reasons-title {
            font-size: 52px;
            text-transform: uppercase;
            font-weight: 700;
            color: ${tadaraTheme.colors.text.primary};
            font-family: ${tadaraTheme.typography.fonts.heading};
            line-height: 1.1;
            margin: 0;
        }
    `
    const ReasonsTitleStyled = styled.div`
            display:flex;
            align-items: center;
            gap: 30px;
            font-size: 24px;
            font-weight: 700;
            color: ${tadaraTheme.colors.text.primary};
            font-family: ${tadaraTheme.typography.fonts.text};
            line-height: 1.1;
            margin: 0;
    `
    const ReasonsContentStyled = styled.div`
        display: flex;
        padding: 0px 0;
    `
    const ReasonsBulletsStyled = styled.div`
        display: flex;
        width: 50%;
        font-size: 32px;
        font-weight: 500;
        color: ${tadaraTheme.colors.text.primary};
        font-family: ${tadaraTheme.typography.fonts.text};

        li {
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .reasons-bullet-list{
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
    `
    const ReasonsImageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
        img {
            border-radius: 50px;
        }
    `
    export default Reasons