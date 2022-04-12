import styles from '../../styles/Members.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { members: data }
    }
}
const Members = ({ members }) => {
    return ( 
        <div>
            <h1>All Members</h1>
            {members.map(member => (
                <Link href={`/members/${member.id}`} key={member.id}>
                    <a className={styles.single}>
                        <h3>{ member.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Members;