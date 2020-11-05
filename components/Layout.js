import Head from 'next/head'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({...props}) => {
    return (
        <div>
            <Head>
                <title>Shopping Cart</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <div className="main min-h-screen mb-16">{props.children}</div>
            <Footer/>
        </div>
    )
}
export default Layout