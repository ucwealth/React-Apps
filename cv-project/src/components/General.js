import pic from "../assets/face.png"

const GeneralInfo = () => {
    return ( 
        <div className="top-section">
            <div className="top-info">
                <div>
                    <h1>Uche Okeke</h1>
                    <h4>Frontend Developer skilled in ReactJS</h4>
                    <p>Innovative Frontend Developer with 2 years experience in the industry. Proficient with React. </p>
                    <p>Used problem-solving aptitude to enhance application performance by 14%. Created data visualization tools and integrated designs. </p>
                </div>
                <div className="top-img">
                    <img src={pic} alt="mon pishur" width="200px" height="200px" />
                </div>
            </div>

            <div className="bottom-info">
                <p>16 Adena Road, Lagos</p>
                <p>Email: ucheokeke16@gmail.com</p>
                <p>Phone No: +2348009002022</p>
            </div>
        </div>
     );
}
 
export default GeneralInfo;