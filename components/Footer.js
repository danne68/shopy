const Footer = () => {

    return (
        <footer className="px-2 py-4 flex flex-col justify-end border-t border-white text-white font-small bg-gray-900">
            <div className="container flex flex-row text-center justify-center">
                <div className="flex-auto mx-4">
                    <h5 className="uppercase font-bold">Contact Us</h5>
                    <p className="text-sm">You can contact us on 234-8094-34033-33</p>
                </div>
                <div className="flex-auto mx-4">
                    <h5 className="uppercase font-bold">Return Policy</h5>
                    <p className="text-sm">We accept returns after 7 days max</p>
                </div>
            </div>
            <div className="text-center py-3 font-thin">© 2019 Copyright:<span className="font-semibold"> Shoppr</span></div>
        </footer>
    );
};
export default Footer;