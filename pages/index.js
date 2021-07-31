import styles from '../styles/Home.module.css'
import {MdSearch, MdMic} from 'react-icons/md'
import Link from 'next/link'

const Home = () =>  {
  return (
    <>
      <main className={styles.g_main}>
          <div>
            <img src='/google.png' height='auto' width='auto'/>
          </div>
          <div className={styles.search_section}>
            <form className={styles.g_form}>
              <div  className={styles.g_search}>
                <div>
                  <MdSearch className={styles.search} size='18px' />
                </div>
                <input type="text" />
                <div>
                  <MdMic className={styles.mic} size='18px' />
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