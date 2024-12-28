import { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import styles from '../../styles/Fullpackage.module.css';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel'; // Import the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Head from 'next/head';
import packageObjectData from '../../data/student-enlightment.json';
import placesData from '../../data/placestovisit.json';
import hotelData from '../../data/hotels.json'
import cabData from '../../data/cabs.json'
import activityData from '../../data/activity.json'
import poojaData from '../../data/pooja.json'
import connectDb from '../../lib/mongodb';




const deepClone = obj => JSON.parse(JSON.stringify(obj));
export async function getStaticProps() {
    try {
        // Establish MongoDB connection at build time
        await connectDb();

        // Since you don't need to return anything, just return an empty object
        return {
            props: {},
        };
    } catch (error) {
        console.error("Error establishing database connection:", error);
        return {
            notFound: true, // Optional: Handle the error gracefully if needed
        };
    }
}
export default function Studentenlightenment() {
    const [packageObject, setPackageObject] = useState(packageObjectData);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [isMobileOverlayVisible, setIsMobileOverlayVisible] = useState(false)
    const [tempItinerary, setTempItinerary] = useState([]);
    const [unassignedPlaces, setUnassignedPlaces] = useState([]);

    const [showFullHotelOverlay, setShowFullHotelOverlay] = useState(false);
    const [showAllHotelsOverlay, setShowAllHotelsOverlay] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(packageObject.accommodation[0]);
    const [allHotels, setAllHotels] = useState(hotelData.hotels);
    const [allCabs, setAllCabs] = useState(cabData.cabs);
    const [showPoojaOverlay, setShowPoojaOverlay] = useState(false);
    const [poojaAvailable, setPoojaAvailable] = useState(poojaData.pooja)
    const [showFormOverlay, setShowFormOverlay] = useState(false);
    const [selectedPooja, setSelectedPooja] = useState(
        packageObject.pooja.map((pooja) => pooja.pid)
    );

    const [activityAvailable, setActivityAvailable] = useState(activityData.activities)
    const [showActivityOverlay, setShowActivityOverlay] = useState(false);
    const [selectedActivities, setSelectedActivities] = useState(
        packageObject.localActivity.map((activity) => activity.aid)
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        packageName: packageObject.name, // Set the default package name
        name: '',
        number: '',
        email: '',
        dateOfArrival: '',
        dateOfDeparture: '',
        noOfPersons: 1
    });
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // Handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable button and show submitting state

        if (typeof window !== 'undefined') {
            const submitButton = document.getElementById('submitBtn');
            if (submitButton) {
                submitButton.innerText = 'Submitting...';
            }
        }

        try {
            // Submit form data using fetch
            const response = await fetch('/api/addbooking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData, // Include form data
                    packageObject: packageObject, // Add the packageObject separately
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setFormData({
                    packageName: '',
                    name: '',
                    number: '',
                    email: '',
                    dateOfArrival: '',
                    dateOfDeparture: '',
                    noOfPersons: '',
                });
                setIsSubmitting(false);

                if (typeof window !== 'undefined') {
                    const submitButton = document.getElementById('submitBtn');
                    if (submitButton) {
                        submitButton.innerText = 'Submit';
                    }
                }

                console.log('Data submitted successfully:', data);
                alert('Query Added Successfully! You will be contacted soon.');
                window.location.reload();
                setShowFormOverlay(false); // Close the overlay after submission
            } else {
                alert('Could Not Submit Your Query, Try Again Later or Contact Us on 7505866498');
                console.error('Error submitting data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const handlePhoneInput = (e) => {
        const value = e.target.value;
        // Allow only numbers by removing non-numeric characters
        const numericValue = value.replace(/[^0-9]/g, '');
        e.target.value = numericValue;
        handleFormChange(e);  // Call handleFormChange to update the form data state
    };
    const handleNameInput = (e) => {
        let value = e.target.value;
        // Allow only alphabetic characters (both uppercase and lowercase)
        value = value.replace(/[^a-zA-Z]/g, ''); // Remove non-alphabetic characters
        e.target.value = value;  // Update the input field with the valid value
        handleFormChange(e);  // Call handleFormChange to update the form data state
    };
    const guideOptions = [
        {
            name: "InPerson Guide",
            img: "https://thumbs.dreamstime.com/z/tour-guide-12397691.jpg",
        },
        {
            name: "Virtual Companion",
            img: "https://cdn.prod.website-files.com/64a83d4453b353ae789d6387/65d75a00786dd564c570f5d2_64ea3144799f219ecc3ce9e6_Customer%20Care%20vs%20Customer%20Service%20(5)-min-p-800_11zon.jpg",
        },
    ];

    const [selectedGuide, setSelectedGuide] = useState(packageObject?.guide || "");
    const prevPriceRef = useRef(packageObject.price);

    const handleGuideSelection = (guideName) => {
        setSelectedGuide(guideName); // Update local state
        setPackageObject((prev) => ({ ...prev, guide: guideName })); // Update packageObject
        calculateAndUpdatePrice();
    };

    const toggleActivitySelection = (aid) => {
        setSelectedActivities((prev) =>
            prev.includes(aid) ? prev.filter((id) => id !== aid) : [...prev, aid]
        );
    };


    //fxn for saving changes in Local Activity
    const handleSave = () => {
        const updatedActivities = activityAvailable.filter((activity) =>
            selectedActivities.includes(activity.aid)
        );
        setPackageObject((prev) => {
            const updatedPackage = { ...prev }; // Create a shallow copy of the package object
            updatedPackage.localActivity = updatedActivities;  // Update the localActivity field with new data
            return updatedPackage;  // Return the updated package
        });
        setShowActivityOverlay(false);
    };


    useEffect(() => {
        // Call the function to calculate and update the price whenever packageObject changes
        calculateAndUpdatePrice();
    }, [packageObject]);
    const cabOptions = [
        { label: "Sedan (Swift Etc)", id: "1" },
        { label: "MUV (Ertiga Etc)", id: "2" },
        { label: "Traveller Winger", id: "3" },
        { label: "E-Rickshaw", id: "4" },
        { label: "CNG Auto", id: "5" },
    ];
    const mainContainerRef = useRef(null);
    const aboveMainContainerRef = useRef(null);
    const rating = (ratingV) => {
        let rating = ""
        for (let i = 1; i <= 5; i++) {
            if (i <= parseInt(ratingV)) {
                rating = rating + "⭐"
            }
            else {
                rating = rating + "☆"
            }
        }
        return rating
    }
    const incprice = (originalprice) => {
        let numericPrice = parseFloat(originalprice);
        let increasedPrice = numericPrice * 1.15;
        return increasedPrice.toFixed(2); // Round to 2 decimal places
    }
    //for reload alert
    useEffect(() => {
        // Handler for beforeunload event
        const handleBeforeUnload = (event) => {
            // Check if packageObject is modified
            if (Object.keys(packageObject).length > 0) {
                event.preventDefault();
                event.returnValue = ""; // Required for modern browsers to show a dialog
            }
        };

        // Add event listener
        window.addEventListener("beforeunload", handleBeforeUnload);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [packageObject]);

    useEffect(() => {
        // Adjust the height of `abovemaincontainer` to match `maincontainer`
        if (mainContainerRef.current && aboveMainContainerRef.current) {
            aboveMainContainerRef.current.style.height = `${mainContainerRef.current.offsetHeight}px`;
        }
    }, []); // Run once on mount

    const calculateAndUpdatePrice = () => {
        let totalPrice = 0;

        // Add guide price based on the guide type
        if (packageObject.guide === "Virtual Companion") {
            totalPrice += 0;
        } else if (packageObject.guide === "InPerson Guide") {
            totalPrice += 1000;
        }

        // Add price for all local activities
        packageObject.localActivity.forEach((activity) => {
            totalPrice += parseFloat(activity.price) || 0;
        });

        // Add price for all cabs
        packageObject.cab.forEach((cab) => {
            totalPrice += parseFloat(cab.price) || 0;
        });

        // Add price for all accommodations
        packageObject.accommodation.forEach((accom) => {
            totalPrice += parseFloat(accom.price) || 0;
        });

        // Add price for all pooja activities
        packageObject.pooja.forEach((pooja) => {
            totalPrice += parseFloat(pooja.price) || 0;
        });

        // Only update the price if it's different from the previous one
        if (totalPrice !== prevPriceRef.current) {
            console.log("priceUpdateRunned");
            setPackageObject((prev) => ({ ...prev, price: totalPrice }));
            prevPriceRef.current = totalPrice; // Update the previous price
        }
    };

    useEffect(() => {
        if (isOverlayVisible || isMobileOverlayVisible) {
            // Deep clone the itinerary to avoid direct mutation
            const assignedPlaces = packageObject.itinerary.flatMap(day => day.places.map(p => p.pid));
            const unassigned = placesData.places.filter(place => !assignedPlaces.includes(place.pid));
            setTempItinerary(deepClone(packageObject.itinerary));
            setUnassignedPlaces(unassigned);
        }
    }, [isOverlayVisible, isMobileOverlayVisible]);
    const [draggedPlace, setDraggedPlace] = useState(null); // Track the dragged place
    const [dragging, setDragging] = useState(false);
    // Handle starting the drag action
    const handleDragStart = (place, section, index) => {
        setDraggedPlace({ place, section, index });
        setDragging(true); // Mark that we're dragging
    };

    // Handle drop action
    const handleDrop = (e, targetSection, targetIndex) => {
        e.preventDefault();

        if (!draggedPlace) return; // Check if something is being dragged

        const { place, section: sourceSection, index: sourceIndex } = draggedPlace;

        if (sourceSection === 'unassigned' && targetSection === 'itinerary') {
            // Add the place from 'unassigned' to the itinerary
            const updatedTempItinerary = [...tempItinerary];
            if (updatedTempItinerary[targetIndex].places.length < 6) {
                updatedTempItinerary[targetIndex].places.push(place);
                setTempItinerary(updatedTempItinerary);

                // Remove from unassigned places
                const updatedUnassignedPlaces = [...unassignedPlaces];
                updatedUnassignedPlaces.splice(sourceIndex, 1);
                setUnassignedPlaces(updatedUnassignedPlaces);
            } else {
                alert('You cannot add more than 6 places to a day.');
            }
        } else if (sourceSection === 'itinerary' && targetSection === 'unassigned') {
            // Remove the place from itinerary and add to 'unassigned'
            const updatedTempItinerary = [...tempItinerary];
            updatedTempItinerary[sourceIndex].places = updatedTempItinerary[sourceIndex].places.filter(p => p.pid !== place.pid);
            setTempItinerary(updatedTempItinerary);

            const updatedUnassignedPlaces = [...unassignedPlaces];
            if (!updatedUnassignedPlaces.some(p => p.pid === place.pid)) {
                updatedUnassignedPlaces.push(place);
                setUnassignedPlaces(updatedUnassignedPlaces);
            }
        } else if (sourceSection === 'itinerary' && targetSection === 'itinerary') {
            // Move a place within the itinerary between days
            const updatedTempItinerary = [...tempItinerary];
            const sourceDay = updatedTempItinerary[sourceIndex];
            const targetDay = updatedTempItinerary[targetIndex];

            // Remove place from source day
            const placeToMove = sourceDay.places.find(p => p.pid === place.pid);
            sourceDay.places = sourceDay.places.filter(p => p.pid !== place.pid);

            // Add place to target day
            if (targetDay.places.length < 6) {
                targetDay.places.push(placeToMove);
                setTempItinerary(updatedTempItinerary);
            } else {
                alert('You cannot add more than 6 places to a day.');
            }
        }

        setDragging(false); // End dragging
        setDraggedPlace(null); // Clear dragged place state
    };

    // Handle the drag over event
    const handleDragOver = (e) => {
        e.preventDefault(); // Necessary to allow drop
    };

    // Handle the drag end event
    const handleDragEnd = () => {
        setDragging(false); // End drag when touch or mouse ends
        setDraggedPlace(null); // Clear dragged place
    };

    const saveChanges = () => {
        setPackageObject(prev => ({
            ...prev,
            itinerary: deepClone(tempItinerary),
            // accommodation: deepClone(packageObject.accommodation), 
        }));
        setIsOverlayVisible(false);
        setIsMobileOverlayVisible(false)
        //for price updation
        return calculateAndUpdatePrice(packageObject);
    };

    const closeOverlay = () => {
        // Close overlay without saving changes
        setIsOverlayVisible(false);
    };
    const handleMoveToDay = (place, targetDayIndex, addtostart = false) => {
        const updatedTempItinerary = [...tempItinerary];
        const updatedUnassignedPlaces = [...unassignedPlaces];

        // Remove place from unassigned if it's there (unassigned -> any day)
        const placeIndexInUnassigned = updatedUnassignedPlaces.findIndex(p => p.pid === place.pid);
        if (placeIndexInUnassigned !== -1) {
            updatedUnassignedPlaces.splice(placeIndexInUnassigned, 1);  // Remove from unassigned
        } else {
            // Remove place from the source day (it can only be in a day, not in both)
            const placeIndexInSourceDay = updatedTempItinerary.findIndex(day =>
                day.places.some(p => p.pid === place.pid)
            );
            if (placeIndexInSourceDay !== -1) {
                const placeIndexInSourceDayArray = updatedTempItinerary[placeIndexInSourceDay].places.findIndex(p => p.pid === place.pid);
                if (placeIndexInSourceDayArray !== -1) {
                    updatedTempItinerary[placeIndexInSourceDay].places.splice(placeIndexInSourceDayArray, 1); // Remove from current day
                }
            }
        }
        if (addtostart) {
            updatedTempItinerary[targetDayIndex].places.unshift(place);

        } else {
            updatedTempItinerary[targetDayIndex].places.push(place);

        }
        // Add the place to the target day

        // Update the states
        setTempItinerary(updatedTempItinerary);
        setUnassignedPlaces(updatedUnassignedPlaces);
    };


    // Move place back to unassigned
    const handleMoveToUnassigned = (place, sourceDayIndex) => {
        const updatedTempItinerary = [...tempItinerary];
        const updatedUnassignedPlaces = [...unassignedPlaces];

        // Remove place from the source day
        const placeIndexInDay = updatedTempItinerary[sourceDayIndex].places.findIndex(p => p.pid === place.pid);
        if (placeIndexInDay !== -1) {
            updatedTempItinerary[sourceDayIndex].places.splice(placeIndexInDay, 1);
        }

        // Add place back to unassigned
        updatedUnassignedPlaces.push(place);

        // Update the states
        setTempItinerary(updatedTempItinerary);
        setUnassignedPlaces(updatedUnassignedPlaces);
    };

    // Handle up arrow movement
    const handleUpArrow = (place, sourceDayIndex) => {

        // Move the place based on its current position
        if (sourceDayIndex === 0) {
            handleMoveToUnassigned(place, sourceDayIndex); // Move to unassigned if it's already in day 1
        } else {
            // Before moving to the previous day, remove it from the source day
            handleMoveToDay(place, sourceDayIndex - 1); // Move up to the previous day
        }
    };


    // Handle down arrow movement
    const handleDownArrow = (place, targetDayIndex) => {
        // Check if the targetDayIndex is valid and within the limits
        if (targetDayIndex === tempItinerary.length) return; // If already at the last day

        // Check if we are moving from unassigned places
        if (targetDayIndex === 0 && unassignedPlaces.some(p => p.pid === place.pid)) {
            handleMoveToDay(place, targetDayIndex, true); // Move to the first day
        } else {
            // Move to the next day if we're not in the first day
            handleMoveToDay(place, targetDayIndex + 1, true);
        }
    };


    const handleViewHotel = (hotelId) => {
        // Find the specific hotel by hotelId
        const selectedHotel = hotelData.hotels.find(hotel => hotel.hotelId === hotelId);

        if (selectedHotel) {
            console.log("Selected Hotel:", selectedHotel);
            setSelectedHotel(selectedHotel);

        } else {
            console.error("Hotel not found for hotelId:", hotelId);
        }

        // Open the overlay
        setShowFullHotelOverlay(true);
    };
    const handleRoomSubmit = (rname, roomid, hotelId, hname, ratingValue, location, img, price) => {
        // Close overlay without saving changes
        const updatedAccommodation = {
            hotelId: hotelId,
            name: hname,
            roomid: roomid,
            roomName: rname,
            ratingValue: ratingValue,
            location: location,
            img: img, // Assuming room details are stored in the room object
            price: price
        };

        setPackageObject((prev) => {
            const updatedPackage = { ...prev }; // Copy the entire package object
            updatedPackage.accommodation = [updatedAccommodation]; // Wrap in an array
            return updatedPackage;
        });
        setShowFullHotelOverlay(false);
        setShowAllHotelsOverlay(false)
    };
    const handleSelectCab = (selectedCabId) => {
        // Find the cab from the `cabs` array based on `cid`
        const selectedCab = allCabs.find((cab) => cab.cid === selectedCabId);

        if (selectedCab) {
            // Update the package object with the selected cab
            const updatedCab = {
                cid: selectedCab.cid,
                name: selectedCab.name,
                img: selectedCab.img,
                cabPerson: selectedCab.cabPerson,
                price: selectedCab.price
            }
            // setPackageObject((prev) => ({
            //     ...prev,
            //     cab: [],
            // }));
            setPackageObject((prev) => {
                const updatedPackage = { ...prev }; // Copy the entire package object
                updatedPackage.cab = [updatedCab]; // Wrap in an array
                return updatedPackage;
            });
        } else {
            console.error("Cab not found for id:", selectedCabId);
        }
    };
    const togglePoojaSelection = (pid) => {
        setSelectedPooja((prev) =>
            prev.includes(pid) ? prev.filter((id) => id !== pid) : [...prev, pid]
        );
    };

    const handlePoojaSave = () => {
        const updatedPooja = poojaAvailable.filter((pooja) =>
            selectedPooja.includes(pooja.pid)
        );
        setPackageObject((prev) => {
            const updatedPackage = { ...prev }; // Create a shallow copy of the package object
            updatedPackage.pooja = updatedPooja;  // Update the localActivity field with new data
            return updatedPackage;  // Return the updated package
        });
        setShowPoojaOverlay(false);
    };

    const scrollToSection = (id) => {
        if (typeof window !== 'undefined') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };
    const [scrolling, setScrolling] = useState(false); // Track if user is scrolling

    // Detect scroll behavior to hide/show navbar
    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            if (!scrolling) {
                setScrolling(true);
            }

            // Reset the scroll timeout after the user stops scrolling
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setScrolling(false);
            }, 150); // 150ms after scroll stops
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);
    return (
        <div>

            <Head>
                <title>{packageObject.name}</title>
                <meta
                    name="description"
                    content="Package for Ayodhya Darshan"
                />
                <meta name="keywords" content="cheap ayodhya package,ayodhya package,ayodhya, ayodhya darshan,Tour packages,GIG, local guides, pilgrimage, Indian holy places, hygienic accommodations, transport rental, customized itineraries" />
                <meta name="author" content="GIG" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={`${packageObject.name} package for your darshan by GIG - Your Trusted Local Companion for Religious Travel in India`} />
                <meta
                    property="og:description"
                    content="GIG act as your local rishtedar/companion who helps you plan your darshan and manages it end-to-end— the only thing you need for your darshan."
                />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:url" content="https://www.yourgigwebsite.com" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.yourgigwebsite.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            {/* Heading */}
            <div className={`packagename ${styles.heading}`}>
                <h2>{packageObject.name}</h2>
                <div style={{ border: "1px solid #7a1e1e", borderRadius: "3px", color: "#7a1e1e", fontSize: "13px", padding: "0 3px", height: "max-content", marginLeft: "10px", background: "#f6d9d9" }} className="duration">
                    {packageObject.duration}
                </div>
            </div>
            {/* Above Main Content */}
            <div
                ref={aboveMainContainerRef}
                className={styles.abovemaincontainer}
            ></div>
            {/* Main Content */}
            <div ref={mainContainerRef} className={styles.maincontainer}>
                {/* Package Overview Section */}
                <div className={styles.packageoverview}>
                    {/* Carousel Section */}
                    <div className={`packageimglistdiv ${styles.corousalcontainer}`}>
                        <Carousel infiniteLoop showThumbs={false} showStatus={false} dynamicHeight autoPlay interval={3000} transitionTime={500} className={styles.imgcorousel}>
                            {packageObject.pimageslist.map((link, index) => (
                                <div className='w-100 h-100' key={index}>
                                    <img src={link} alt="Image 1" className={styles.packageImage} loading="lazy" />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Menu */}
                    <div className="d-flex justify-content-start flex-wrap mt-2 mb-4">
                        <span className={styles.menupackage} onClick={() => scrollToSection('overview')}>Overview</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('itinerary')}>Itenerary</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('companion')} >Companion</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('accommodation')} >Accomodation</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('city-transfer')}>City Transfer</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('activities')}>Activites</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('pooja')}>Pooja</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('inclusion-exclusion')}>Inclusion/Exclusion</span>
                        <span className={styles.menupackage} onClick={() => scrollToSection('additional-info')}>Additional Info</span>
                        <span className={`${styles.menupackage} ${styles.makequerymenu}`} onClick={() => scrollToSection('costdiv')}>Make Query</span>

                    </div>
                    <div className={`${styles.mobilecostdiv} ${scrolling ? styles.hidden : ''}`} >
                        <div className='ml-4' style={{ width: "50%", padding: "13px", color: "black", borderBottom: "1px solid #2a9d8f", marginLeft: "16px" }}>
                            <p className='m-0 text-muted' style={{ fontSize: "10px" }}>Starting From</p>
                            <div className='d-flex justify-content-start align-items-center w-100'>
                                <h5 style={{ textDecoration: "line-through", margin: "0" }}>{incprice(packageObject.price)}</h5>
                                <h4 style={{ fontWeight: "bold", margin: "0", marginLeft: "7px" }}>₹{packageObject.price} <span style={{ fontSize: "10px" }}></span></h4>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center w-50'>
                            <button className="btn btn-outline-primary m-2 w-75" onClick={() => setShowFormOverlay(true)}>Make Query</button>
                        </div>
                    </div>
                    <div className={`${styles.mobilecostdiv} ${scrolling ? styles.hidden : ''}`} >
                        <div className='ml-4' style={{ width: "50%", padding: "13px", color: "black", borderBottom: "1px solid #2a9d8f", marginLeft: "16px" }}>
                            <p className='m-0 text-muted' style={{ fontSize: "10px" }}>Starting From</p>
                            <div className='d-flex justify-content-start align-items-center w-100'>
                                <h5 style={{ textDecoration: "line-through", margin: "0",color:"#2a9d8f" }}>{incprice(packageObject.price)}</h5>
                                <h4 style={{ fontWeight: "bold", margin: "0", marginLeft: "7px",color:"#2a9d8f" }}>₹{packageObject.price} <span style={{ fontSize: "10px" }}></span></h4>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center w-50'>
                            <button className="btn btn-outline-info m-2 w-75" onClick={() => setShowFormOverlay(true)} style={{background:"transparent",color:"#2a9d8f",border:"1px solid #2a9d8f"}}>Make Query</button>
                        </div>
                    </div>
                    <div id="overview" className={`packageoverviewtext ${styles.overviewdiv}`}>
                        <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>Package Overview</h4>
                        <div className="text-dark">
                            {packageObject.packageOverview}
                        </div>
                    </div>

                    {/* Itinirary */}
                    <div id="itinerary" className={`itinirarydiv ${styles.overviewdiv}`}>
                        <div className="text-dark d-flex align-items-center justify-content-between mb-4">
                            <h4 className="text-dark d-flex align-items-center" style={{ borderLeft: '3px solid blue', paddingLeft: '7px' }}>
                                Itinerary
                            </h4>
                            <button
                                className={`btn btn-primary ${styles.deskItenerybtn}`}
                                onClick={() => setIsOverlayVisible(true)}
                            >
                                Customize Itinerary
                            </button>
                            <button
                                className={`btn btn-primary ${styles.mobItenerybtn}`}
                                onClick={() => setIsMobileOverlayVisible(true)}
                            >
                                Customize Itinerary
                            </button>
                        </div>
                        {packageObject.itinerary.map((dayData, index) => (
                            <div key={index} className="alldaywisediv" style={{ borderRadius: '25px', overflow: 'hidden', border: '1px solid #2a9d8f', marginBottom: '10px', width: '100%' }}>
                                <div style={{ background: '#e7f7f9', padding: '15px', color: 'black', borderBottom: '1px solid #2a9d8f' }}>
                                    <h5 className="m-0 p-0">{dayData.day}</h5>
                                    <p className="text-muted p-0 m-0" style={{ fontSize: '8px' }}>
                                        *Click on them to know more
                                    </p>
                                </div>
                                <div className={`d-flex ${styles.allplacescontainer}`} style={{ overflowX: 'auto', padding: "10px" }}>
                                    {dayData.places.map((place, placeIndex) => (
                                        <a key={placeIndex} href={place.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} className='initeraryitem'>
                                            <div key={placeIndex} className={styles.itinerarycirclediv} >
                                                <div style={{ width: "70px", height: "70px", overflow: "hidden" }}>
                                                    <Image src={place.img} alt={place.name} width={80} height={80} loading="lazy" objectFit='cover' />
                                                </div>
                                                <h6 className={`text-center mx-2 ${styles.itinerarycircledivpara}`}>{place.name}</h6>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*Accomadation section*/}
                    <div id="accommodation" className={styles.overviewdiv}>
                        <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>Accomodation</h4>
                        {packageObject.accommodation && packageObject.accommodation.length > 0 ? (
                            <div className={styles.accomodationdiv}>
                                <div className={styles.accomodationimgdiv} style={{ borderRadius: "25px", overflow: "hidden", background: "grey" }}>
                                    <Image src={packageObject.accommodation[0].img} alt="Hotel Image" width={280} objectFit='cover' height={180} loading="lazy" />
                                </div>
                                <div className={styles.accomodationdetaildiv}>
                                    <h5 className=''> {packageObject.accommodation[0].name}</h5>
                                    <p className="text-muted m-0" style={{ fontSize: "1.8vmin", width: "90%" }}>{packageObject.accommodation[0].location}</p>
                                    <p style={{ fontSize: "3vmin", margin: "0px", marginTop: "3px", marginBottom: "4px" }}>{rating(packageObject.accommodation[0].ratingValue)} ({packageObject.accommodation[0].ratingValue}/5.0 Rating)</p>
                                    <p className="text-muted m-0" style={{ fontSize: "3vmin", width: "90%" }}>{packageObject.accommodation[0].roomName}</p>
                                    <button className="btn btn-primary" onClick={() => handleViewHotel(packageObject.accommodation[0].hotelId)}>View Details</button>
                                    <button className="btn btn-secondary m-2" onClick={() => setShowAllHotelsOverlay(true)}>Change</button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-muted">Fetching accommodation details.....</p>
                        )}
                    </div>

                    <div id="companion" className={`companiondiv  ${styles.overviewdiv}`}>
                        <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>
                            Companion
                        </h4>
                        <div className={styles.guidediv} style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                            {guideOptions.map((guide, index) => (
                                <div key={index} className={styles.itinerarycirclediv} style={{
                                    height: "max-content", width: "max-content",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    margin: "3px",
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    border: `2px solid ${selectedGuide === guide.name ? "#CBDAE9" : "grey"}`,
                                    color: selectedGuide === guide.name ? "blue" : "grey",
                                    backgroundColor:
                                        selectedGuide === guide.name ? "#CBDAE9" : "#f5f5f5",
                                    cursor: "pointer",
                                    padding: "10px",
                                }}
                                    onClick={() => handleGuideSelection(guide.name)}
                                >
                                    <div style={{ width: "70px", height: "70px", overflow: "hidden", borderRadius: "50%" }}>
                                        <Image src={guide.img} alt={guide.name} width={80} height={80} loading="lazy" objectFit="cover" />
                                    </div>
                                    <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`} style={{ marginTop: "0.5rem" }}>
                                        {guide.name}
                                    </h6>
                                </div>
                            ))}
                        </div>
                        <p className={`text-muted mt-2 ${styles.pguide}`}>
                            {packageObject.guide === "Virtual Companion"
                                ? "Your personal guide in the palm of your hand.  Our Virtual Companion helps you follow your itinerary, provides real-time information about places, offers local insights, and ensures your journey runs smoothly—just like an in-person guide, but virtually at your fingertips"
                                : packageObject.guide === "InPerson Guide"
                                    ? "Experience the city through the eyes of a local. Our In-Person Guide offers hands-on assistance, walking you through every step of your journey, making sure you get the most out of your darshan."
                                    : `With our ${packageObject.guide} by your side, you'll never feel unattended—seamlessly guiding your journey and making every moment hassle-free.`}
                        </p>
                    </div>

                    {/*Transport Div*/}
                    <div id="city-transfer" className={`transportdiv ${styles.overviewdiv}`}>
                        <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>Incity Transfer</h4>
                        <div className={styles.accomodationdiv}>
                            <div className={styles.accomodationimgdiv} style={{ borderRadius: "25px", overflow: "hidden", background: "grey", height: "180px" }}>
                                <Image src={packageObject.cab[0].img} alt="Image 2" width={340} objectFit="cover" height={190} loading="lazy" />
                            </div>
                            <div className={styles.traveldetaildiv}>
                                <h5 className='m-0 p-0'>{packageObject.cab[0].name}</h5>
                                <p className="text-muted m-0" style={{ fontSize: "2vmin", width: "90%" }}>Max {packageObject.cab[0].cabPerson} Allowed</p>
                                <p className={`text-muted ${styles.pguide}`} style={{ margin: "0px", marginTop: "13px", marginBottom: "4px", flex: "1" }}>The image displayed is for illustrative purposes only. The actual cab may vary and will be confirmed before your journey.</p>
                                <select
                                    onChange={(e) => handleSelectCab(e.target.value)} // Trigger on selection
                                    defaultValue=""
                                    className='btn btn-primary' style={{ width: "max-content" }}
                                >
                                    <option value="" disabled>More Options</option>
                                    {cabOptions.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/*local Activity Div*/}
                    <div id="activities" className={`localactivitydiv ${styles.overviewdiv}`}>
                        <div className="text-dark d-flex align-items-center justify-content-between mb-4">
                            <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>Local Activities</h4>
                            <button className='btn btn-primary' onClick={() => setShowActivityOverlay(true)}>Customize</button>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                            {Array.isArray(packageObject.localActivity) && packageObject.localActivity.length > 0 ? (
                                packageObject.localActivity.map((place, placeIndex) => (
                                    <a key={placeIndex} href={place.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} className="initeraryitem">
                                        <div className={styles.itinerarycirclediv} style={{ height: "max-content", width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", margin: "3px", borderRadius: "15px", overflow: "hidden", border: "1px solid #2a9d8f", color: "#2a9d8f", backgroundColor: "#e7f7f9" }}>

                                            <div style={{ width: "70px", height: "70px", overflow: "hidden" }}>
                                                <Image src={place.img} alt={place.name} width={80} height={80} loading="lazy" objectFit="cover" />
                                            </div>
                                            <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                                                {place.name}
                                            </h6>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <p className="text-muted">No local activities in this package! Add a touch of excitement by choosing some from our list!</p>
                            )}
                        </div>

                    </div>

                    {/*pooja Div*/}
                    <div id="pooja" className={`poojadiv ${styles.overviewdiv}`}>
                        <div className="text-dark d-flex align-items-center justify-content-between mb-4">
                            <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>Pooja</h4>
                            {Array.isArray(poojaAvailable) && poojaAvailable.length > 0 && (
                                <button className='btn btn-primary' onClick={() => setShowPoojaOverlay(true)}>Customize</button>
                            )}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                            {Array.isArray(packageObject.pooja) && packageObject.pooja.length > 0 ? (
                                packageObject.pooja.map((pooja, poojaIndex) => (
                                    <a
                                        key={poojaIndex}
                                        href={pooja.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none" }}
                                        className="initeraryitem"
                                    >
                                        <div
                                            className={styles.itinerarycirclediv}
                                            style={{
                                                height: "max-content",
                                                width: "max-content",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                margin: "3px",
                                                borderRadius: "15px",
                                                overflow: "hidden",
                                                border: "1px solid #2a9d8f",
                                                color: "#2a9d8f",
                                                backgroundColor: "#e7f7f9",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "70px",
                                                    height: "70px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <Image
                                                    src={pooja.img}
                                                    alt={pooja.name}
                                                    width={80}
                                                    height={80}
                                                    loading="lazy"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                                                {pooja.name}
                                            </h6>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <p className="text-muted">No Special Pooja arrangements chosen</p>
                            )}
                        </div>
                    </div>


                    {showPoojaOverlay && (
                        <div style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
                            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", maxWidth: "600px", width: "90%" }}>
                                <h4 className='text-dark'>Select Pooja</h4>
                                {poojaAvailable.length > 0 ? (
                                    <div style={{ maxHeight: "400px", overflowY: "auto", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                        {poojaAvailable.map((pooja) => (
                                            <label key={pooja.pid} style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", maxWidth: "250px" }}>
                                                <input type="checkbox" checked={selectedPooja.includes(pooja.pid)} onChange={() => togglePoojaSelection(pooja.pid)} />
                                                <div className={styles.itinerarycirclediv} style={{ height: "max-content", width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", margin: "3px", borderRadius: "15px", overflow: "hidden", border: "1px solid #2a9d8f", color: "#2a9d8f", backgroundColor: "#e7f7f9" }}>
                                                    <div style={{ width: "70px", height: "70px", overflow: "hidden", }} >
                                                        <Image src={pooja.img} alt={pooja.name} width={80} height={80} loading="lazy" objectFit="cover" />
                                                    </div>
                                                    <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                                                        {pooja.name}
                                                    </h6>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-muted">No Special Pooja arrangements available</p>
                                )}
                                <div style={{ marginTop: "20px", textAlign: "right" }}>
                                    <button onClick={handlePoojaSave} className="btn btn-primary mx-2">
                                        Save
                                    </button>
                                    <button className="btn btn-secondary" onClick={() => setShowPoojaOverlay(false)} >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}


                    <div id="inclusion-exclusion" className={styles.overviewdiv}>
                        <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}><span style={{ color: "green" }}>Inclusions</span> & <span style={{ color: "red" }}>Exclusions</span></h4>
                        <div className=" text-dark d-flex justify-content-center align-item-center flex-wrap">
                            <ul className={`inclusionlistdiv ${styles.customlist}`}>
                                {packageObject.inclusion.map((item, index) => (
                                    <li key={index}><i className="fa fa-check" aria-hidden="true" style={{ color: "#2a9d8f", marginRight: "10px", fontSize: "18px" }}></i>{item}</li>

                                ))}
                            </ul>
                            <ul className={`exclusionlistdiv ${styles.customlist}`}>
                                {packageObject.exclusion.map((item, index) => (
                                    <li key={index}><i className="fa fa-times" aria-hidden="true" style={{ color: "red", marginRight: "10px", fontSize: "18px" }}></i>{item}</li>

                                ))}
                            </ul>
                        </div>
                    </div>
                    <div id="additional-info" className={`additionalinfodiv ${styles.overviewdiv}`}>
                        <h4 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>Additional Info</h4>
                        <div className="text-dark ml-2">
                            <ul className="m-0 p-3" style={{ listStyle: "circle" }}>
                                {packageObject.additionalInfo.map((info, index) => (
                                    <li key={index}>
                                        {info}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Cost Section */}
                <div id='costdiv' className={styles.costdiv}>
                    <div className='d-flex justify-content-center align-items-center flex-column' style={{ borderRadius: "25px", overflow: "hidden", border: "1px solid #2a9d8f", marginBottom: "10px", width: "100%" }} >
                        <div className='w-100' style={{ background: "#e7f7f9", padding: "15px", color: "black", borderBottom: "1px solid #2a9d8f" }}>
                            <p className='m-0 text-muted' style={{ fontSize: "10px" }}>Starting From</p>
                            <h6 style={{ textDecoration: "line-through", margin: "0" }}>{incprice(packageObject.price)}</h6>
                            <h4 style={{ fontWeight: "bold", margin: "0" }}>₹{packageObject.price} <span style={{ fontSize: "10px" }}>per person</span></h4>
                        </div>
                        <button className="btn btn-outline-primary m-2 w-75" onClick={() => setShowFormOverlay(true)}>Submit Your Query</button>
                    </div>
                    <div style={{ background: "#faecd4s", borderRadius: "25px", overflow: "hidden", border: "1px solid #ffd68f", marginBottom: "10px", width: "100%" }} >
                        <h4 style={{ padding: "15px", color: "black", margin: "0" }}><span><i className="fa fa-comments"></i></span> Need help?</h4>
                        <div style={{ paddingLeft: "15px", paddingBottom: "15px" }}>
                            <a href="tel:7505866498" style={{ textDecoration: "none", color: "black" }}>Call Us At:7505866498</a><br />
                            <a href="mailto:gigayodhya@gmail.com" style={{ textDecoration: "none", color: "black" }}>Mail Us At:gigayodhya@gmail.com</a>
                        </div>

                    </div>
                </div>


            </div>
            {/* Overlay */}
            {isOverlayVisible && (
                <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <h6 className='text-muted text-center my-2 mb-3'>Drag and Drop the Places , Click on places to know more</h6>
                        <div className='d-flex w-100 flex-column' style={{ height: "90%" }}>
                            <div className={`d-flex flex-column flex-wrap w-100 ${styles.unassignedcontainer}`}>
                                <h6 className='m-0' style={{ paddingLeft: "15px" }}>More Places To Explore</h6>

                                <div
                                    onDragOver={handleDragOver} // Enable dragging over
                                    onDrop={(e) => handleDrop(e, 'unassigned', -1)}
                                    data-drop-target="true"
                                    className={styles.unassignedPlacesSection}

                                >
                                    {unassignedPlaces.map((place, index) => (
                                        <a key={index} href={place.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} className='initeraryitem'>
                                            <div key={index}
                                                draggable
                                                onTouchStart={() => handleDragStart(place, 'unassigned', index)} // Start dragging on touch
                                                onMouseDown={() => handleDragStart(place, 'unassigned', index)} // Start dragging on mouse down
                                                onTouchEnd={handleDragEnd} // End dragging on touch end
                                                onMouseUp={handleDragEnd}
                                                className={styles.itinerarycirclediv} >
                                                <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "grey" }}>
                                                    <Image src={place.img} alt={place.name} width={80} height={80} loading="lazy" objectFit='cover' />
                                                </div>
                                                <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>{place.name}</h6>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className={`w-100 ${styles.daysectioncontainer}`}>
                                {tempItinerary.map((day, index) => (

                                    <div className='mt-3' key={index}><h5 style={{ paddingLeft: "15px", margin: "0" }}>{day.day}</h5>
                                        <div
                                            key={index}
                                            onDragOver={handleDragOver} // Enable dragging over
                                            onDrop={(e) => handleDrop(e, 'itinerary', index)}
                                            className={styles.daySection}

                                        >
                                            {day.places.map((place, placeIndex) => (
                                                <a key={placeIndex} href={place.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} className='initeraryitem'>
                                                    <div key={placeIndex}
                                                        draggable
                                                        onDragStart={() => handleDragStart(place, 'itinerary', index)}
                                                        onTouchStart={() => handleDragStart(place, 'itinerary', index)}  // Touch start for mobile
                                                        onTouchEnd={handleDragEnd}
                                                        onMouseUp={handleDragEnd}
                                                        className={styles.itinerarycirclediv} >
                                                        <div style={{ width: "70px", height: "70px", overflow: "hidden", background: "grey" }}>
                                                            <Image src={place.img} alt={place.name} width={80} height={80} loading="lazy" objectFit='cover' />
                                                        </div>
                                                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`} >{place.name}</h6>
                                                    </div>
                                                </a>

                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                    </div>
                    <div className='d-flex'>
                        <button className="btn btn-primary m-2" onClick={saveChanges}>
                            Save Changes
                        </button>
                        <button className="btn btn-secondary m-2" onClick={closeOverlay}>
                            Back
                        </button>
                    </div>
                </div>

            )}

            {isMobileOverlayVisible && (
                <div className={styles.overlay}>
                    <div className={styles.itineraryoverlayContent}>
                        <div className='w-100 bg-light' style={{ position: "sticky", top: "0", zIndex: "100000" }}>
                            <div className="d-flex w-100 justify-content-between">
                                <button className="btn btn-secondary m-2" onClick={() => setIsMobileOverlayVisible(false)}>
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
                                </button>
                                <button className="btn btn-primary m-2" onClick={saveChanges}>
                                    Save Changes
                                </button>

                            </div>
                            <h6 className="text-muted text-center my-2 mb-3">Use ↑/↓ arrows to move, click to explore.</h6>

                        </div>
                        <div className="d-flex w-100 flex-column" style={{ marginTop: "700px" }}>
                            {/* Unassigned Places */}
                            <div className={styles.unassignedcontainer}>
                                <h6 className='px-2'>More Places To Explore</h6>
                                <div className={styles.unassignedPlacesSection}>
                                    {unassignedPlaces.map((place, index) => (
                                        <div key={index} className={styles.itinerarycircleoverlaymobdiv}>
                                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "80%", height: "100%" }}>
                                                <div style={{ width: '70px', height: '70px', background: 'grey' }}>
                                                    <Image src={place.img} alt={place.name} width={80} height={80} objectFit="cover" />
                                                </div>
                                                <a href={place.link} target='_blank' style={{ textDecoration: "none", color: "#2a9d8f" }}>
                                                    <h6 className=" bg-ifo mx-4">{place.name}</h6>
                                                </a>
                                            </div>
                                            <div className={styles.arrows} >
                                                <button
                                                    // onClick={() => handleUpArrow(place, dayIndex)} // Move up
                                                    className={`bt btn-ino ${styles.upArrow}`}
                                                    disabled={true}

                                                // disabled={dayIndex === 0 && !unassignedPlaces.some(p => p.pid === place.pid)}
                                                >
                                                    ↑
                                                </button>
                                                <button
                                                    onClick={() => handleDownArrow(place, 0)} // Move down
                                                    className={`bt btn-inf ${styles.downArrow}`}
                                                // disabled={dayIndex === tempItinerary.length - 1}
                                                >
                                                    ↓
                                                </button>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Itinerary Days */}
                            {tempItinerary.map((day, dayIndex) => (
                                <div key={dayIndex} className={styles.daysectioncontainer}>
                                    <h5 className='m-0 p-0 px-2'>{day.day}</h5>

                                    <div key={dayIndex} className={styles.daySection}>
                                        <div className='w-100'>
                                            {day.places.map((place, placeIndex) => (
                                                <div key={placeIndex} className={styles.itinerarycircleoverlaymobdiv}>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "80%", height: "100%" }}>
                                                        <div style={{ width: '70px', height: '70px', background: 'grey' }}>
                                                            <Image src={place.img} alt={place.name} width={80} height={80} objectFit="cover" />
                                                        </div>
                                                        <a href={place.link} target='_blank' style={{ textDecoration: "none", color: "#2a9d8f" }}>
                                                            <h6 className=" bg-ifo mx-4">{place.name}</h6>
                                                        </a>
                                                    </div>
                                                    <div className={styles.arrows}>
                                                        <button
                                                            onClick={() => handleUpArrow(place, dayIndex)} // Move up
                                                            className={styles.upArrow}
                                                        >
                                                            ↑
                                                        </button>
                                                        <button
                                                            onClick={() => handleDownArrow(place, dayIndex)} // Move down
                                                            className={styles.downArrow}
                                                            disabled={dayIndex === tempItinerary.length - 1}
                                                        >
                                                            ↓
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>


                        {/* Save & Close Buttons */}

                    </div>

                </div>
            )}
            {showFullHotelOverlay && (
                <div className={`${styles.overlay}`} style={{ zIndex: "1800" }}>
                    <div className={styles.fullhoteloverlayContentContainer}>
                        <div className={`${styles.overlayContent} ${styles.fhoverlayContent}`}  >
                        <div className='w-100' style={{ cursor: "pointer",display:"flex",justifyContent:"flex-end" }}>
                                <button className=" btn btn-outline-secondary mb-2 px-2 py-1" onClick={() => setShowFullHotelOverlay(false)}>Back <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </div>
                            <div className={styles.fhImageDescription}  >
                                <div className={styles.fhdescription}>
                                    <h2 className='mb-0'>{selectedHotel.name}</h2>
                                    <p className='text-muted m-0 p-0'>{selectedHotel.location}</p>
                                    <a href={selectedHotel.map} target="_blank">View On Map</a>
                                    <p style={{ fontSize: "3vmin", margin: "0px", marginTop: "3px", marginBottom: "4px" }}>{rating(selectedHotel.ratingValue)} ({selectedHotel.ratingValue}/5.0 Rating)</p>
                                    <p style={{ fontSize: "3vmin", margin: "0px", marginTop: "3px", marginBottom: "4px" }}>Type - {selectedHotel.type}</p>
                                    <p className={`text-muted ${styles.fhdescriptionpara}`}>{selectedHotel.description}</p>
                                </div>
                                <div className={styles.fhImage} style={{ zIndex: "1" }}>
                                    <Carousel interval={2500} pause={false} autoPlay infiniteLoop style={{ zIndex: "1" }}>
                                        {selectedHotel.img.map((image, index) => (
                                            <div key={index} className='w-100 h-100' style={{ zIndex: "1" }}>
                                                <Image src={image} alt={`Hotel Image ${index}`} width={300} height={400} objectFit='cover' />
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                            <div className={styles.fhfacilitiesContainer}>
                                <div className={`${styles.fhfacilities}`}>
                                    <h4 className='text-dark' style={{ borderBottom: "1px solid blue", width: "max-content" }}>What this place Offers?</h4>
                                    <ul className={`inclusionlistdiv ${styles.customlist}`} style={{ display: "flex", flexWrap: "wrap" }}>
                                        {selectedHotel.amenities.map((item, index) => (
                                            <li key={index} className='m-2'><i className="fa fa-check" aria-hidden="true" style={{ color: "#2a9d8f", marginRight: "10px", fontSize: "18px", width: "max-content" }}></i>{item}</li>

                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.fhfacilities}>
                                    <h4 className='text-dark' style={{ borderBottom: "1px solid blue", width: "max-content" }}>Additional Info</h4>
                                    <ul className="m-0 pb-0" style={{ listStyle: "circle" }}>
                                        {selectedHotel.AdditionalInfo.map((info, index) => (
                                            <li key={index}>
                                                {info}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <h3 className='mt-5' style={{ borderBottom: "1px solid blue" }}>Rooms</h3>
                            <div className={`mb-5 ${styles.roomContainer}`} >
                                {selectedHotel.rooms.map((room, index) => (
                                    <div key={index} className={styles.roomcard}>
                                        <div style={{ width: "100%", height: "200px", background: "#bdbaba" }}>
                                            <Carousel interval={2500} pause={false} autoPlay infiniteLoop>
                                                {room.img.map((roomImg, idx) => (
                                                    <div key={idx} style={{ width: "100%", height: "200px", background: "grey" }}>
                                                        <Image src={roomImg} alt={`Room ${idx}`} width={200} height={200} />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                        <h4 className='mt-1'>{room.roomName}</h4>
                                        <div className='d-flex flex-column'>
                                            <ul className={`w-100 inclusionlistdiv ${styles.customlist}`} style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                                                {room.amenities.map((item, index) => (
                                                    <li key={index} className='m-2'><i className="fa fa-check" aria-hidden="true" style={{ color: "#2a9d8f", marginRight: "10px", fontSize: "18px", width: "max-content" }}></i>{item}</li>
                                                ))}
                                            </ul>
                                            <ul className="m-0" style={{ listStyle: "circle", display: "flex", flexWrap: "wrap", paddingLeft: "20px" }}>
                                                {room.info.map((info, index) => (
                                                    <li className='' style={{ marginRight: "20px" }} key={index}>
                                                        {info}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='d-flex w-100 justify-content-between p-3 bg-light'>
                                            <p className='text-danger'>Get At: <span style={{ textDecoration: "line-through" }}>{incprice(room.price)} </span><span className='text-dark'>₹{room.price}</span></p>
                                            <button className="btn btn-primary" style={{ height: "max-content" }} onClick={() => handleRoomSubmit(room.roomName, room.roomid, selectedHotel.hotelId, selectedHotel.name, selectedHotel.ratingValue, selectedHotel.location, selectedHotel.img[0], room.price)}>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {showAllHotelsOverlay && (
                <div className={styles.overlay} style={{ zIndex: "1000" }}>
                    <div className={styles.allhoverlaycontainer}>
                    <div className='w-100 mt-5 px-3' style={{ cursor: "pointer",display:"flex",justifyContent:"flex-end" }}>
                                <button className=" btn btn-outline-secondary mb-2 px-2 py-1" onClick={() => setShowAllHotelsOverlay(false)}>Back <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </div>
                        <h2 className='text-dark m-0 p-0'>Available Hotels</h2>
                        <div className={`${styles.overlayContent} ${styles.allhoverlaycontent}`} style={{ width: "98%" }}>

                            <div className={styles.hotelGrid} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                {allHotels.map((hotel, index) => (
                                    <div key={index} className={`${styles.hotelCard} ${styles.allhotelcard}`} style={{ cursor: "pointer" }} onClick={() => handleViewHotel(hotel.hotelId)} >
                                        <div className={styles.allhotelcardcorosaldiv}>
                                            <Carousel interval={2500} pause={false} autoPlay infiniteLoop>
                                                {hotel.img.map((img, idx) => (
                                                    <div key={idx} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                                        <Image src={img} alt={`Hotel Image ${idx}`} width={200} height={200} objectFit='cover' loading="lazy" />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                        <div className={styles.allhotelcarddesc}>
                                            <h3 className='mb-0 p-0'>{hotel.name}</h3>
                                            <p className='m-0 text-muted' style={{ fontSize: "12px", paddingRight: "3px" }}>{hotel.location}</p>
                                            <p className='mt-1'>{rating(hotel.ratingValue)}({hotel.ratingValue}/5.0 Rating)</p>
                                            <p className='text-danger m-0'>Starting At: <span style={{ textDecoration: "line-through" }}>{incprice(hotel.startprice)} </span><span className='text-dark'>₹{hotel.startprice}</span></p>
                                            <button className="btn btn-primary w-100" onClick={() => handleViewHotel(hotel.hotelId)}>
                                                View details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showActivityOverlay && (
                <div style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
                    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", maxWidth: "600px", width: "90%" }}>
                        <h4>Select Local Activities</h4>
                        <div style={{ maxHeight: "400px", overflowY: "auto", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                            {activityAvailable.map((activity) => (

                                <label key={activity.aid} style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", maxWidth: "250px" }} >
                                    <input type="checkbox" checked={selectedActivities.includes(activity.aid)} onChange={() => toggleActivitySelection(activity.aid)} />
                                    <div className={styles.itinerarycirclediv} style={{ height: "max-content", width: "max-content", display: "flex", justifyContent: "center", alignItems: "center", margin: "3px", borderRadius: "15px", overflow: "hidden", border: "1px solid #2a9d8f", color: " #2a9d8f", backgroundColor: " #e7f7f9" }}>
                                        <div style={{ width: "70px", height: "70px", overflow: "hidden" }}>
                                            <Image src={activity.img} alt={activity.name} width={80} height={80} loading="lazy" objectFit="cover" />
                                        </div>
                                        <h6 className={`mx-2 text-center ${styles.itinerarycircledivpara}`}>
                                            {activity.name}
                                        </h6>
                                    </div>
                                </label>
                            ))}
                        </div>
                        <div style={{ marginTop: "20px", textAlign: "right" }}>
                            <button onClick={handleSave} className='btn btn-primary mx-2'>
                                Save
                            </button>
                            <button className='btn btn-secondary' onClick={() => setShowActivityOverlay(false)}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {showFormOverlay && (
                <div className={styles.overlay}>
                    <div className={`${styles.formDiv} ${styles.overlayContent}`}>
                        <button className={`btn btn-secondary mt-2 ${styles.formclosebtn}`} onClick={() => setShowFormOverlay(false)}>Back</button>
                        <form onSubmit={handleFormSubmit} style={{ width: "90%" }}>
                            <h3>Submit Your Query</h3>

                            <div className="mb-2">
                                <label htmlFor="packageName" className="form-label m-0">Package Name</label>
                                <input
                                    type="text"
                                    name="packageName"
                                    value={formData.packageName}
                                    onChange={handleFormChange}
                                    disabled
                                    className="form-control m-0"
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="name" className="form-label m-0">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => {
                                        handleFormChange(e);
                                        handleNameInput(e);  // Ensure only numbers are entered
                                    }}
                                    className="form-control m-0"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="number" className="form-label m-0">Your Number</label>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={(e) => {
                                        handleFormChange(e);
                                        handlePhoneInput(e);  // Ensure only numbers are entered
                                    }}
                                    className="form-control m-0"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="email" className="form-label m-0">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="form-control m-0"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="dateOfArrival" className="form-label m-0">Date of Arrival</label>
                                <input
                                    type="date"
                                    name="dateOfArrival"
                                    value={formData.dateOfArrival}
                                    onChange={handleFormChange}
                                    className="form-control m-0"
                                    required

                                />
                            </div>
                            {/* <div className="row mb-2">
                                <div className="col-md-6">
                                    <label htmlFor="dateOfArrival" className="form-label m-0">Date of Arrival</label>
                                    <input
                                        type="date"
                                        name="dateOfArrival"
                                        value={formData.dateOfArrival}
                                        onChange={handleFormChange}
                                        className="form-control m-0"
                                        required

                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="dateOfDeparture" className="form-label m-0">Date of Departure</label>
                                    <input
                                        type="date"
                                        name="dateOfDeparture"
                                        value={formData.dateOfDeparture}
                                        onChange={handleFormChange}
                                        className="form-control m-0"
                                        required

                                    />
                                </div>
                            </div> */}

                            <div className="mb-2">
                                <label htmlFor="noOfPersons" className="form-label m-0">Number of Persons</label>
                                <input
                                    type="text"
                                    name="noOfPersons"
                                    value={formData.noOfPersons}
                                    onChange={(e) => {
                                        handleFormChange(e);
                                        handlePhoneInput(e);  // Ensure only numbers are entered
                                    }}
                                    className="form-control m-0"
                                    required

                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                id="submitBtn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>

            )}

            <Footer />
        </div>
    );
}
