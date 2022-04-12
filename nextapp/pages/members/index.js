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
                <a>
                    <h3>{ member.name }</h3>
                </a>
            ))}
        </div>
     );
}
 
export default Members;