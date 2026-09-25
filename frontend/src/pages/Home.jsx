import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
    const [profiles, setProfiles] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
    const getProfiles = async () => {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/profiles`
        );

        setProfiles(response.data);
    };

    
        getProfiles();
    }, []);

    const deleteProfile = async (id) => {

        await axios.delete(
            `${import.meta.env.VITE_API_URL}/profiles/${id}`
        );

        alert("Profile deleted successfully");

      
    };

    return (
        <div>
            <h1>Profile Management System</h1>

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