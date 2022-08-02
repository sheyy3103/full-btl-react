import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;