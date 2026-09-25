import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewProfile() {

    const { id } = useParams();

    const [profile, setProfile] = useState(null);
    
    useEffect(() => {

    const getProfile = async () => {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/profiles/${id}`
        );

        setProfile(response.data.data);
    };

    
        getProfile()
    }, [id]);

    if (!profile) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>Profile Details</h1>

            <h2>{profile.name}</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>Address: {profile.address}</p>
            <p>Age: {profile.age}</p>
            <p>Created At: {profile.createdAt}</p>
            <p>Updated At: {profile.updatedAt}</p>
        </div>
    );
}

export default ViewProfile;