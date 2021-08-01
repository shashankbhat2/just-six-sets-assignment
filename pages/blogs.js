import styles from '../styles/Blog.module.css'

//First Method: Fetch data on each request for Server Side Rendering
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
      props: {
        posts,
      },
    }
}
  

//Second Method: Fetches posts for static site rendering (pre-render posts)
// export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await res.json()

//     return {
//       props: {
//         posts,
//       },
//     }
// }
  


const Blogs = ({posts}) => {
    return(
        <div className={styles.container}>
            <div>
                <a href='/'>
                    <img src='/google.png' alt="google_logo" height='50px' width='auto'/>
                </a>
                <div className={styles.blog_heading}>
                    <p>Blogs</p>
                </div>
            </div>
            <div className={styles.blogs_container}> 
                {posts.map((post) => (
                    <div className={styles.blog_card}>
                        <small>{post.id}</small>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Blogs;