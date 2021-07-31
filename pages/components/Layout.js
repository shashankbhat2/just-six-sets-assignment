import Head from 'next/head'
import { Apps } from '@material-ui/icons/';
import styles from '../../styles/Layout.module.css'
import Link from 'next/link'

const Layout = ({children}) => {
    return(
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
        <title>Google | Assignment</title>
      </Head>
      <header>
        <nav  className={styles.g_nav}>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  Gmail
                </a>
              </Link>
            </li> 
            <li>
              <Link href='/'>
                <a>
                  Images
                </a>
              </Link>
            </li> 
          </ul>
          <div className={styles.icons}>
              <div  className={styles.menu}>
                <Apps />
              </div> 
              <div className={styles.avatar}>
                  <p>
                    MD
                  </p>
              </div> 
          </div>
        </nav>
      </header>
      {children}
      <footer className={styles.footer}>
          <div>
             <p>India</p> 
          </div>
          <div className={styles.footer_links}>
            <ul >
              <li>
                <a href="/">
                  About
                </a>
              </li>
              <li>
                <a href="/">
                  Advertising
                </a>
              </li>
              <li>
                <a href="/">
                  Business
                </a>
              </li>
              <li>
                <a href="/">
                  How Search Works
                </a>
              </li>
            </ul>
            <ul>
            <li>
                <a href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/">
                  Terms
                </a>
              </li>
              <li>
                <a href="/">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </footer>
    </>
    )
}

export default Layout;