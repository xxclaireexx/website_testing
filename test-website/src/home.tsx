import './App.css';
import { BackgroundSectionBody, BackgroundSectionDescription, BackgroundSectionPlaceholder, BackgroundSectionTitle } from "./background"

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
                    <BackgroundSectionTitle>
                        <p className="title center" style={{ marginBottom: "20px" }}>Want to get a potential client to know your product?</p>
                        <p className="subtitle center" style={{}}>Get an individual design for your website</p>
                        <p style={{ fontSize: "3rem", fontFamily: "karla", textAlign: "right", paddingRight: "7.5rem", fontWeight: "500" }}>Contact: 1234512345</p>
                    </BackgroundSectionTitle>
                </div>

                <div style={{marginBottom:"50rem"}}>
                    <BackgroundSectionDescription />
                </div>
                <div>
                    <BackgroundSectionBody>
                        <p className="subtitle">How we work</p>
                        <p className="text-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </BackgroundSectionBody>
                </div>

                <div>
                    <BackgroundSectionPlaceholder />
                </div>
            </div>
        </>

    )
}
