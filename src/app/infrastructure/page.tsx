import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

import Infrastructurebanner from "./infrastructurebanner";
import ImagePopupGallery from "./Imagepopup";

export default function Infrastructure() {
return(
       <>
            <Header />
<main>
            <Infrastructurebanner />
            <ImagePopupGallery />
            </main>
<Footer />
        </>
);


}