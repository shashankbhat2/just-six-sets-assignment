import styles from '../styles/Home.module.css'
import Search from '@material-ui/icons/Search'
import { Mic } from '@material-ui/icons/';
import Link from 'next/link'

const Home = () =>  {
  return (
    <>
      <main className={styles.g_main}>
          <div>
            <img src='/google.png'/>
          </div>
          <div className={styles.search_section}>
            <form className={styles.g_form}>
              <div  className={styles.g_search}>
                <div>
                  <Search className={styles.search} />
                </div>
                <input type="text" />
                <div>
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
    </>
  )
}

export default Home;