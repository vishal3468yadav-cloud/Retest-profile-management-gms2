import {useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home(){
    const [profiles,setProfiles] = useState([]);
    const navigate = useNavigate();


    const getProfiles = async ()=>{
        const response = await axios.get(
            "http://localhost:5000/api/profiles"
        );
        setProfiles(response.data);
    };
    useEffect(()=>{
        getProfiles();
    },[])

    const deleteProfile = async (id) => {

    await axios.delete(
        `http://localhost:5000/api/profiles/${id}`
    );

    alert("Profile deleted successfully");

    getProfiles();
};

    return(
        <div>
            <h1>profile management system</h1>
             {profiles.map((profile) => (
                <div key={profile.id}>
                    <h2>{profile.name}</h2>
                    <p>Email: {profile.email}</p>
                    <p>Phone: {profile.phone}</p>
                    <p>Address: {profile.address}</p>
                    <p>Age: {profile.age}</p>

                    <button
                        onClick={() =>
                            navigate(`/view-profile/${profile.id}`)
                        }
                    >
                        View
                    </button>

                    <button
                        onClick={() =>
                            navigate(`/edit-profile/${profile.id}`)
                        }
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => deleteProfile(profile.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Home;