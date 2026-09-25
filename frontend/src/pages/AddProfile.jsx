import { useState } from "react";
import axios from "axios";

function AddProfile() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");

    const addProfile = async (e) => {
        e.preventDefault();

        const newProfile = {
            name,
            email,
            phone,
            address,
            age
        };

        await axios.post(
            `${import.meta.env.VITE_API_URL}/profiles`,
            newProfile
        );

        alert("Profile added successfully");

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setAge("");
    };

    return (
        <div>
            <h1>Add profile</h1>

            <form onSubmit={addProfile}>

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
                    Add Profile
                </button>

            </form>
        </div>
    );
}

export default AddProfile;