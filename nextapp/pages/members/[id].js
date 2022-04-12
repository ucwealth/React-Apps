export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(member => {
        return {
            params: { id: member.id.toString() }
        }
    })

    return {
        paths,
        fallback: false 
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()
    return {
        props: { member: data }
    }
}

const Details = ({ member }) => {
    return ( 
        <div>
            <h1>{member.name}</h1>
            <p>{member.email}</p>
            <p>{member.website}</p>
            <p>{member.address.city}</p>
        </div>
     );
}
 
export default Details;