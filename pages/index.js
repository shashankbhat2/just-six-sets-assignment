import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AppsIcon from '@material-ui/icons/Apps';
import Search from '@material-ui/icons/Search'
import { Mic } from '@material-ui/icons';


const Home = () =>  {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
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
                <AppsIcon />
              </div> 
              <div className={styles.avatar}>
                  <p>
                    J
                  </p>
              </div> 
          </div>
        </nav>
      </header>
      <main className={styles.g_main}>
          <div>
            <img src='/google.png'/>
          </div>
          <div className={styles.search_section}>
            <form className={styles.g_form}>
              <div  className={styles.g_search}>
                <div className={styles.icons}>
                  <Search className={styles.search} />
                </div>
                <input type="text" name='q' />
                <div className={styles.icons}>
                  <Mic className={styles.mic}/>
                </div>
              </div>
              <div className={styles.buttons}>
                <button>Google Search</button>
                <Link href='/blog'>
                  <button>I'm Feeling Lucky</button>
                </Link>
              </div>
              <div className={styles.lang_options}>
                 Google offered in:
                 <a href="/">हिन्दी</a>
                 <a href="/">বাংলা</a>
                 <a href="/">తెలుగు</a>
                 <a href="/">मराठी</a>
                 <a href="/">தமிழ்</a>
                 <a href="/">ગુજરાતી</a>
                 <a href="/">ಕನ್ನಡ</a>
                 <a href="/">മലയാളം</a>
                 <a href="/">ਪੰਜਾਬੀ</a>
              </div>
            </form>
          </div>
        </main>
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

export default Home;