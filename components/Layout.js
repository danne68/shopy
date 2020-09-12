import Head from 'next/head'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Layout(props) {
    return (
        <div>
            <Head>
                <title>Shopping Cart</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>
            <div className="main container px-2 min-h-screen mb-16">{props.children}</div>
            <Footer/>
        </div>
    )
}
export default Layout