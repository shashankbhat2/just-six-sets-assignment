import styles from '../styles/Home.module.css'
import {MdSearch, MdMic} from 'react-icons/md'
import Link from 'next/link'

const Home = () =>  {
  return (
    <>
      <main className={styles.g_main}>
          <div>
            <a href='/'>
              <img src='/google.png' alt="google_logo" height='80px' width='auto'/>
            </a>
          </div>
          <div className={styles.search_section}>
            <form className={styles.g_form}>
              <div  className={styles.g_search}>
                <div>
                  <MdSearch className={styles.search} size='20px' />
                </div>
                <input type="text" autoFocus={true} />
                <div>
                  <MdMic className={styles.mic} size='20px' />
                </div>
              </div>
              <div className={styles.buttons}>
                <button type='submit'>Google Search</button>
                <Link href='/blogs'>
                  <button>I'm Feeling Lucky</button>
                </Link>
              </div>
            </form>
          </div>
          <div className={styles.lang}>
            <ul className={styles.lang_options}>
              Google offered in: 
              <li><a href="/">हिन्दी</a></li>
              <li><a href="/">বাংলা</a></li>
              <li><a href="/">తెలుగు</a></li>
              <li><a href="/">मराठी</a></li>
              <li><a href="/">தமிழ்</a></li>
              <li><a href="/">ગુજરાતી</a></li>
              <li><a href="/">ಕನ್ನಡ</a></li>
              <li><a href="/">മലയാളം</a></li>
              <li><a href="/">ਪੰਜਾਬੀ</a></li>
            </ul>
          </div>
        </main>
    </>
  )
}

export default Home;