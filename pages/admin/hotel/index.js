import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignInPage() {
    const [hotelId, setHotelId] = useState('');
    const [hotelPin, setHotelPin] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [btnText,setBtnText]=useState("Sign In")

    const handleSignIn = async (e) => {
        e.preventDefault();
setBtnText("Checking")
        // Validate hotelId and hotelPin (You can add more validation here)
        if (!hotelId || !hotelPin) {
            setError('Both fields are required.');
            return;
        }

        // Send a request to check the credentials
        const response = await fetch('/api/gethoteldata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hotelId, hotelPin }),
        });

        const data = await response.json();
        
        if (data.success) {
            localStorage.setItem("Authorized", "true");
            localStorage.setItem("authorizedHotel",hotelId); 
            router.push(`hotel/${hotelId}`);
        } else {
            setError('Invalid hotel ID or PIN.');
            setBtnText("Sign In")
        }
    };

    return (
        <div style={{height:"100vh"}}>
        <div className='d-flex justify-content-center align-items-center h-100' style={{background:"#fff0c9"}}>
            <form onSubmit={handleSignIn} className='bg-light p-4 d-flex flex-column w-75 justify-content-center align-items-center rounded'>
            <h1>Hotel Dashboard</h1>
                <input
                    type="text"
                    placeholder="Hotel ID"
                    value={hotelId}
                    onChange={(e) => setHotelId(e.target.value)}
                    required
                    className='w-100 mb-2 mt-2'
                />
                <input
                    type="password"
                    placeholder="Hotel PIN"
                    value={hotelPin}
                    className='w-100'
                    onChange={(e) => setHotelPin(e.target.value)}
                    required
                />
                {error && <p>{error}</p>}
                <button type="submit" className='btn btn-primary m-2' disabled={btnText === "Checking"} >{btnText}</button>
            </form>
        </div>
        </div>

    );
}
