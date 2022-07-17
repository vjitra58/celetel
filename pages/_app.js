import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css'
import {store} from '../store';
import {Provider} from 'react-redux';

const App = ({
  Component,
  pageProps
}) => {
  return (
    <SessionProvider session={pageProps.session}>
       <Provider store={store}><Component {...pageProps} /></Provider>
    </SessionProvider>
  )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}

export default App