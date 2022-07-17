import Head from 'next/head';
import Navbar from './header';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Note App</title>
        </Head>
        <Navbar />
        {children}
    </>
)

export default Layout;