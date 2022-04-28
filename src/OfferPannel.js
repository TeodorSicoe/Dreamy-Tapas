import tapas from "./tapas-normal-shopping.jpg"
import fine_dining from "./fine-dining-1-cropped.jpg"
import wine from "./wine.jpg"

const OfferPannel = () => {
    return (  
        
        <offer class="Offer-pannel">
            <div className="Moto-text">
                <h1>Enjoy the authentic flavour.</h1>
                <h2>Order artisanal latin Tapas from the<br></br>world's best suppliers.</h2>
                <button className="Green-button">Shop now</button>
            </div>

            <div className="Speciality-set">
                <div className="Speciality">
                    <img src={tapas} className="Speciality-resize"/>
                    <p className="Speciality-text">Tapas</p>
                </div>


                <div className="Speciality">
                    <img src={fine_dining} className="Speciality-resize"/>
                    <p className="Speciality-text">Special Packs</p>
                </div>


                <div className="Speciality">
                    <img src={wine} className="Speciality-resize"/>
                    <p className="Speciality-text">Wines</p>
                </div>

            </div>
            
        </offer>
    );
}
 
export default OfferPannel;