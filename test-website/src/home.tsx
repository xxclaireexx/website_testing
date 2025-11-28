import './App.css';
import { BackgroundSectionBody, BackgroundSectionDescription, BackgroundSectionPlaceholder, BackgroundSectionTitle } from "./background";
import QuestionForm from './questionform';

export default function Home() {
    return (
        <>
            <div
                style={{
                    backgroundImage: 'url("https://media.istockphoto.com/id/2050866422/vector/web.jpg?s=612x612&w=0&k=20&c=RANOHW3R0BM2tWDqe_Eo5aSUAeWMwuwlW_nttIgaB8Q=")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "auto",
                    width: "100%",
                    backgroundAttachment: "fixed",
                }}>
                <div>
                    <BackgroundSectionTitle className ="section-spacing">
                        <p className="title center" style={{ marginBottom: "20px", marginTop:"10px" }}>Want to get a potential client to know your product?</p>
                        <p className="subtitle center" style={{}}>Get an individual design for your website</p>
                        <p style={{ fontSize: "2rem", fontFamily: "karla", textAlign: "right", paddingRight: "3.5rem", fontWeight: "500" }}>Contact: 1234512345</p>
                    </BackgroundSectionTitle>
                </div>

                <div style={{ marginBottom: "10rem" }}>
                    <BackgroundSectionDescription className ="section-spacing">
                        <p className="subtitle">We conceptualize your website</p>
                        <p className="subtitle">as a digital connection to your clients</p>
                    </BackgroundSectionDescription>
                </div>
                <div>
                    <BackgroundSectionBody className ="section-spacing">
                        <p className="subtitle" style={{ marginBottom: "20px" }}>How we work</p>
                        <p className="text-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </BackgroundSectionBody>
                </div>

                <div>
                    <BackgroundSectionPlaceholder />
                </div>
                
                <div>
                    <BackgroundSectionBody className ="section-spacing">
                        {/* Placeholder, has yet to be replaced */}
                        <p className="subtitle center">Question form</p>
                        <QuestionForm onSubmit={(question) => {
                            alert(`Your question was submitted: ${question}`);
                        }
                        } />
                    </BackgroundSectionBody>                
                
                </div>


            </div>
        </>

    )
}
