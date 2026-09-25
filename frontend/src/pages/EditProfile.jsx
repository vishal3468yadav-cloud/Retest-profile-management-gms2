import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProfile() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    useEffect(() => {
    const getProfile = async () => {

        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/profiles/${id}`
        );

        const profile = response.data.data;

        setName(profile.name);
        setEmail(profile.email);
        setPhone(profile.phone);
        setAddress(profile.address);
        setAge(profile.age);
    };

    
        getProfile ();
    }, [id]);

    const updateProfile = async (e) => {

        e.preventDefault();

        const updatedProfile = {
            name,
            email,
            phone,
            address,
            age
        };

        await axios.put(
            `${import.meta.env.VITE_API_URL}/api/profiles/${id}`,
            updatedProfile
        );

        alert("Profile updated successfully");

        navigate(`/view-profile/${id}`);
    };

    return (
        <div>
            <h1>Edit Profile</h1>

            <form onSubmit={updateProfile}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <button type="submit">
                    Update Profile
                </button>

            </form>
        </div>
    );
}

export default EditProfile;