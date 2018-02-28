import Head from 'next/head'
import Link from 'next/link'
export default () =>
    <div> Welcome to next.js again!
        <Head>
            <title> this is my first page </title>
        </Head>
        <img src = '/static/tt.png'/>

        <div>
        // here if you add replace attr when you click back button will not get before page
        <Link prefetch  href = '/login'>
            <a> to Login </a>
        </Link>
        </div>

        <style jsx>{`
            div {
                background: red;
            }
            `}
            </style>
     </div>

