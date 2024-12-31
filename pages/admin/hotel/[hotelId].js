import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel'; // Import the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
const HotelDetailsPage = ({ hotelData }) => {
    const [rooms, setRooms] = useState(hotelData.rooms);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [newPrice, setNewPrice] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [isChanging, setIsChanging] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const isAuthorized = localStorage.getItem("Authorized") === "true";
        const authorizedHotel = localStorage.getItem("authorizedHotel");
        const hotelId = router.query.hotelId; // Get the hotel ID from the URL

        // Redirect if not authorized or if the user doesn't have access to the current hotel
        if (!isAuthorized || authorizedHotel !== hotelId) {
            router.push('/admin/hotel'); // Redirect to admin/hotel if not authorized
        }
    }, [router]);
    useEffect(() => {
        // Initialize room details for editing
        if (selectedRoom) {
            setNewPrice(selectedRoom.price);
            setNewStatus(selectedRoom.status);
        }
    }, [selectedRoom]);

    const handleEdit = (room) => {
        setSelectedRoom(room);
    };

    const handleChange = async () => {
        if (isChanging) return;

        setIsChanging(true);

        // Update the room data (mock API call)
        const response = await fetch('/api/updateroom', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hotelId: hotelData.hotelId,
                roomId: selectedRoom.roomid,
                price: newPrice,
                status: newStatus,
            }),
        });

        const data = await response.json();

        if (data.success) {
            setRooms(rooms.map((room) =>
                room.roomid === selectedRoom.roomid
                    ? { ...room, price: newPrice, status: newStatus }
                    : room
            ));
            window.location.reload()
            setSelectedRoom(null); // Close the overlay after successful change
        } else {
            alert('Error updating room details');
        }

        setIsChanging(false);
    };

    const handleClose = () => {
        setSelectedRoom(null); // Close the overlay without making any changes
    };

    return (
        <div>
            <div className='w-100 bg-dark d-flex justify-content-center align-items-center flex-column text-light'>
                <h4 className='mt-1'>Admin GIG</h4>
            </div>
            <div className="container mt-5">
                <h1 className="m-0">{hotelData.name}</h1>
                <p className='m-0 p-0'>{hotelData.location}</p>
                <p className='m-0 p-0'>Contact Person: {hotelData.ContactPerson} Ji</p>
                <p className='mt-0 mb-4 p-0'>Contact Details: {hotelData.Number}</p>
                <div className="row">
                    {hotelData.rooms.map((room) => (
                        <div key={room.roomid} className="col-md-4 mb-4" style={{ overflow: "hidden" }}>
                            <div className="card shadow-sm" style={{ overflow: "hidden" }}>
                                <div style={{ zIndex: "1" , overflow:"hidden" , height:"200px"}}>
                                    <Carousel interval={2500} pause={false} autoPlay infiniteLoop className='bg-dark' style={{ zIndex: "1", height: "max-content" }}>
                                        {room.img.map((img, idx) => (
                                            <div key={idx} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                                <Image src={img} alt={`Hotel Image ${idx}`} width={200} height={200} objectFit='cover' loading="lazy" />
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>

                                {/* <img src={room.img[0]} alt={room.roomName} className="card-img-top" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{room.roomName}</h5>
                                    <ul className=" mx-2 p-0 text-muted" style={{ listStyle: "circle" }}>
                                        {room.info.map((info, index) => (
                                            <li key={index}>
                                                {info}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="card-text mt-2 mb-0">Price: ₹{room.price}</p>
                                    <p className="card-text m-0 ">Status: {room.status}</p>
                                   
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => handleEdit(room)}
                                    >
                                        Edit
                                    </button>
                                </div>

                                {/* Overlay inside the specific card */}
                                {selectedRoom && selectedRoom.roomid === room.roomid && (
                                    <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100 bg-dark bg-opacity-50" style={{ zIndex: "1000" }}>
                                        <div className="overlay-content bg-white p-4 rounded shadow-lg">
                                            <h2>Edit Room</h2>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input
                                                        type="text"
                                                        id="price"
                                                        className="form-control"
                                                        value={newPrice}
                                                        onChange={(e) => setNewPrice(e.target.value)}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="status" className="form-label">Status</label>
                                                    <select
                                                        id="status"
                                                        className="form-select"
                                                        value={newStatus}
                                                        onChange={(e) => setNewStatus(e.target.value)}
                                                    >
                                                        <option value="Available">Available</option>
                                                        <option value="Not Available">Not Available</option>
                                                    </select>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                                        Back
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleChange}
                                                        disabled={isChanging}
                                                    >
                                                        {isChanging ? 'Changing...' : 'Change'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { hotelId } = context.params;
    const response = await fetch(`https://gigmathura.vercel.app/api/gethoteldata?hotelId=${hotelId}`);
    const data = await response.json();
    const hotelData = data.hotelData;

    return {
        props: { hotelData },
    };
}


export default HotelDetailsPage;
