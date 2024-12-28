import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/Planbot.module.css";
import Typewriter from '../components/Typewriter';

import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel'; // Import the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import placesData from '../data/placestovisit.json';
import hotelData from '../data/hotels.json';
import cabData from '../data/cabs.json';
import activityData from '../data/activity.json';
import poojaData from '../data/pooja.json';



import itineraryData from "@/data/itinirary.json"; // Import itinerary data
import Image from "next/image";
import Link from "next/link";
const deepClone = obj => JSON.parse(JSON.stringify(obj));

export default function Planbot() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [chatHistory, setChatHistory] = useState([]);
    const [dates, setDates] = useState({
        arrivalDate: "",
        arrivalTime: "Day",
        departureDate: "",
        departureTime: "Day",
    });
    const [messageTracker, setMessageTracker] = useState({
        step0: false,
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
        step8: false,
        step9: false,
        step10: false
    });
    const [duration, setDuration] = useState("");
    const [itinerary, setItinerary] = useState([]);
    const [tempItinerary, setTempItinerary] = useState([]);
    const [unassignedPlaces, setUnassignedPlaces] = useState([]);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [finalUserPackage, setFinalUserPackage] = useState({});
    const [isMobileOverlayVisible, setIsMobileOverlayVisible] = useState(false)



    const initialMessageAdded = useRef(false); // Track if initial message has been added
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
    // Helper function to add messages to chat history
    const addToChat = (type, text) => {
        setChatHistory((prev) => [...prev, { type, text }]);
    };


    // Add bot questions automatically when the step changes
    useEffect(() => {
        if (step === 0 && !messageTracker.step0 && !initialMessageAdded.current) {
            addToChat(
                "bot",
                "Namaskaram! I’m Shravan, your virtual rishtedar here to make your pilgrimage smooth and memorable. How would you like to proceed?"
            );
            initialMessageAdded.current = true;
            setMessageTracker((prev) => ({ ...prev, step0: true }));
        }
        else if (step === 1 && !messageTracker.step1) {
            addToChat("bot", "What are your travel dates?");
            setMessageTracker((prev) => ({ ...prev, step1: true }));
        } else if (step === 2 && !messageTracker.step2) {
            addToChat(
                "bot",
                `Your selected travel dates indicate a duration of ${duration}. Let’s proceed with planning your itinerary!`
            );
            setMessageTracker((prev) => ({ ...prev, step2: true }));
        } else if (step === 3 && !messageTracker.step3) {
            addToChat("bot", "Here’s the suggested itinerary for your trip, feel free to customize");
            setMessageTracker((prev) => ({ ...prev, step3: true }));
        } else if (step === 4 && !messageTracker.step4) {
            addToChat("bot", "Your itinerary is saved, now select your Accomodation");
            setMessageTracker((prev) => ({ ...prev, step4: true }));
        } else if (step === 5 && !messageTracker.step5) {
            addToChat("bot", "Your accomodation is saved, now select your Transport");
            setMessageTracker((prev) => ({ ...prev, step5: true }));
        } else if (step === 6 && !messageTracker.step6) {
            addToChat("bot", "Your transport is saved, now select your Companion");
            setMessageTracker((prev) => ({ ...prev, step6: true }));
        } else if (step === 7 && !messageTracker.step7) {
            addToChat("bot", "Your Companion is saved, now select any Local Acitvity (We got you one Compelementary, Enjoy!)");
            setMessageTracker((prev) => ({ ...prev, step7: true }));
        } else if (step === 8 && !messageTracker.step8) {
            addToChat("bot", "Your preference for activity is saved , now select any pooja arrangements you want");
            setMessageTracker((prev) => ({ ...prev, step8: true }));
        } else if (step === 9 && !messageTracker.step9) {
            addToChat("bot", "Almost finished! Just Enter Your Details");
            setMessageTracker((prev) => ({ ...prev, step9: true }));
        } else if (step === 10 && !messageTracker.step10) {
            addToChat("bot", "Thank You for Planning With Me! I hope you liked my assistance! We will contact you soon for final bookings.");
            setMessageTracker((prev) => ({ ...prev, step10: true }));
        }

    }, [step, messageTracker]);

    const handleDurationBack = () => {
        if (step == 2) {
            setStep((prev) => prev - 1);
            setFinalUserPackage((prev) => ({
                ...prev,
                arrivalDate: "",
                arrivalTime: "",
                departureDate: "",
                departureTime: "",
            }));
            addToChat("user", "Back");
            setMessageTracker((prev) => ({ ...prev, step1: false, step2: false }));
        }
    };
    const handleTravelBack = () => {
        if (step == 1) {
            setStep((prev) => prev - 1);
            addToChat("user", "Back");
            setMessageTracker((prev) => ({ ...prev, step0: false, step1: false }));
            addToChat(
                "bot",
                "Namaskaram! I’m Shravan, your virtual rishtedar here to make your pilgrimage smooth and memorable. How would you like to proceed?"
            );

        }
    };
    const handleDateChange = (field, value) => {
        setDates((prev) => ({ ...prev, [field]: value }));
    };

    const calculateDuration = () => {
        const arrival = new Date(dates.arrivalDate);
        const departure = new Date(dates.departureDate);

        // Calculate full days between arrival and departure
        const fullDays = Math.floor((departure - arrival) / (1000 * 60 * 60 * 24));

        // Initialize daytime and nighttime with full days
        let daytime = fullDays - 1;
        let nighttime = fullDays - 1;

        // Adjust for arrival time
        if (dates.arrivalTime === "Day") {
            daytime += 1; // Add 1 to daytime if arrival is during the day
            nighttime += 1;
        } else if (dates.arrivalTime === "Night") {
            nighttime += 1; // Add 1 to nighttime if arrival is during the night
        }

        // Adjust for departure time
        if (dates.departureTime === "Night") {
            daytime += 1; // Add 1 to daytime if departure is during the night
        }

        // Generate duration text
        const durationText = `${daytime} Days and ${nighttime} Nights`;
        if (daytime > 3) {
            addToChat(
                "user",
                `Arrival: ${dates.arrivalDate} (${dates.arrivalTime}), Departure: ${dates.departureDate} (${dates.departureTime})`
            );


            setFinalUserPackage((prev) => ({
                ...prev,
                arrivalDate: "",
                arrivalTime: "",
                departureDate: "",
                departureTime: "",
            }));
            addToChat(
                "bot",
                "Oops! All the places of Ayodhya can be covered in 3 Days! Either set the dates for a maximum of 3 Days or Call/WhatsApp us at 7505866498 for assistance."
            );
            return; // Exit the function early to stop moving to the next step
        }
        if (daytime < 1 || nighttime < 1) {
            addToChat(
                "user",
                `Arrival: ${dates.arrivalDate} (${dates.arrivalTime}), Departure: ${dates.departureDate} (${dates.departureTime})`
            );

            setFinalUserPackage((prev) => ({
                ...prev,
                arrivalDate: "",
                arrivalTime: "",
                departureDate: "",
                departureTime: "",
            }));
            addToChat(
                "bot",
                "Oops! You have to spend minimum of 1 Day and 1 Night here! Either set the dates for a minimum of 1 Day or Call/WhatsApp us at 7505866498 for assistance."
            );
            return; // Exit the function early to stop moving to the next step
        }
        // Set the calculated duration

        setDuration(durationText);

        // Add user response to chat
        addToChat(
            "user",
            `Arrival: ${dates.arrivalDate} (${dates.arrivalTime}), Departure: ${dates.departureDate} (${dates.departureTime})`
        );

        // Move to the next step
        setStep(2);

    };



    useEffect(() => {
        if (isOverlayVisible || isMobileOverlayVisible) {
            // Deep clone the itinerary to avoid direct mutation
            const assignedPlaces = itinerary.flatMap(day => day.places.map(p => p.pid));
            const unassigned = placesData.places.filter(place => !assignedPlaces.includes(place.pid));
            setTempItinerary(deepClone(itinerary));
            setUnassignedPlaces(unassigned);
        }
    }, [isOverlayVisible, isMobileOverlayVisible]);
    const fetchItinerary = () => {
        const itineraryForDuration = JSON.parse(JSON.stringify(itineraryData.itineraries[duration]));
        // const itineraryForDuration = itineraryData.itineraries[duration];
        if (itineraryForDuration) {
            setItinerary(itineraryForDuration);
            setTempItinerary(itineraryForDuration);
            setFinalUserPackage((prev) => ({
                ...prev,
                arrivalDate: dates.arrivalDate,
                arrivalTime: dates.arrivalTime,
                departureDate: dates.departureDate,
                departureTime: dates.departureTime,
            }));
        } else {
            addToChat("bot", "No itinerary available for the selected duration.");
        }
        setStep(3);




    };

    const handleDragStart = (event, place, source, sourceIndex) => {
        event.dataTransfer.setData(
            "draggedPlace",
            JSON.stringify({ place, source, sourceIndex })
        );
    };

    const handleDrop = (event, target, targetIndex) => {
        const draggedData = JSON.parse(event.dataTransfer.getData("draggedPlace"));
        const updatedTempItinerary = [...tempItinerary];
        const updatedUnassignedPlaces = [...unassignedPlaces];

        // Validate: Ensure the target day does not exceed 6 places
        if (target === "itinerary" && updatedTempItinerary[targetIndex].places.length >= 6) {
            alert("You can add a maximum of 6 places to a day.");
            return;
        }

        if (draggedData.source === "unassigned") {
            // Remove from unassigned and add to target day
            updatedUnassignedPlaces.splice(draggedData.sourceIndex, 1);
            updatedTempItinerary[targetIndex].places.push(draggedData.place);
        } else if (draggedData.source === "itinerary") {
            // Remove from the source day
            updatedTempItinerary[draggedData.sourceIndex].places.splice(
                draggedData.sourceIndex,
                1
            );

            // Add to the target
            if (target === "unassigned") {
                updatedUnassignedPlaces.push(draggedData.place);
            } else {
                updatedTempItinerary[targetIndex].places.push(draggedData.place);
            }
        }

        // Update state
        setTempItinerary(updatedTempItinerary);
        setUnassignedPlaces(updatedUnassignedPlaces);
    };


    const saveChanges = () => {
        setItinerary(deepClone(tempItinerary));
        setIsOverlayVisible(false);
        setIsMobileOverlayVisible(false)
        addToChat("bot", "Your updated itinerary has been saved!");
    };

    const useThisItinerary = () => {
        setFinalUserPackage((prev) => ({
            ...prev,
            itinerary: itinerary,
        }));
        addToChat("user", "Confirm This Itinerary.");
        // addToChat("bot", "Your Itinerary is Confirmed!");
        setStep(4); // Move to next step
    };
    const handleItineraryBack = () => {
        setStep((prev) => prev - 1);

        // Deep copy the original itinerary before resetting
        const itineraryForDuration = JSON.parse(JSON.stringify(itineraryData.itineraries[duration]));

        // Reset itinerary and tempItinerary to the original state
        setItinerary(itineraryForDuration);  // Set the deep-copied original itinerary
        setTempItinerary(itineraryForDuration);  // Reset tempItinerary to original

        // Clear any user-modified itinerary in finalUserPackage
        setFinalUserPackage((prev) => ({
            ...prev,
            itinerary: [],  // Clear any user-modified itinerary
        }));


        addToChat("user", "Back");
        setMessageTracker((prev) => ({ ...prev, step3: false, step2: false }));

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

    const scrollToSection = (id) => {
        if (typeof window !== 'undefined') { // Ensure this runs in the browser
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            console.warn('scrollToSection called in a non-browser environment');
        }
    };

    const handleNavigation = (section) => {
        if (router.pathname === '/') {
            // Scroll to the specific section on the home page
            scrollToSection(section);

            // Clean the URL by replacing with "/"
            router.replace('/', undefined, { shallow: true });
        } else {
            // Navigate to the home page and include the scrollTo query
            router.push(`/?scrollTo=${section}`).then(() => {
                // Scroll after navigation and clean the URL
                scrollToSection(section);
                router.replace('/', undefined, { shallow: true });
            });
        }
    };
    const [selectedHotel, setSelectedHotel] = useState(null); // Track the selected hotel
    const [selectedRoom, setSelectedRoom] = useState(null);   // Track the selected room
    const [showFullHotelOverlay, setShowFullHotelOverlay] = useState(false)
    const handleViewHotel = (hotel) => {
        setSelectedHotel(hotel);   // Set selected hotel
        setShowFullHotelOverlay(true); // Show overlay
    };
    const handleRoomSubmit = (roomName, roomid, hotelId, hname, ratingValue, location, img, price) => {
        setSelectedRoom(roomName);
        setFinalUserPackage((prev) => ({
            ...prev,
            accommodation: [
                {
                    name: hname,
                    location: location,
                    ratingValue: ratingValue,
                    roomName: roomName,
                    img: img, // You can choose another image if needed
                    hotelId: hotelId,
                    roomid: roomid,
                    price: price,
                },
            ],
        }));
        setShowFullHotelOverlay(false);
    }
    const handleAccom = () => {
        addToChat("user", `Finalize ${selectedRoom} in ${selectedHotel.name} for my Accomodation`);
        // addToChat("bot", "Your Accomodation is Finalized.");
        setStep(5);
    }
    const handleAccomBack = () => {
        setStep((prev) => prev - 1);
        setFinalUserPackage((prev) => ({
            ...prev,
            accommodation: []
        }));
        setSelectedHotel(null)
        setSelectedRoom(null)
        addToChat("user", "Back");
        setMessageTracker((prev) => ({ ...prev, step3: false, step4: false }));
    }
    const [selectedCab, setSelectedCab] = useState(null);
    const handleTravelConfirm = () => {
        setFinalUserPackage((prev) => ({
            ...prev,
            cab: [
                {
                    name: selectedCab.name,
                    cid: selectedCab.cid,
                    price: selectedCab.price
                }
            ],
        })
        );
        addToChat("user", `Finalize ${selectedCab.name} for my Incity Transfer`);
        // addToChat("bot", "Your Cab is Finalized.");
        setStep(6);
    }
    const handleTravelcabBack = () => {
        setStep((prev) => prev - 1);
        setFinalUserPackage((prev) => ({
            ...prev,
            cab: [],
        }));
        setSelectedCab(null);
        addToChat("user", "Back");
        setMessageTracker((prev) => ({ ...prev, step4: false, step5: false }));
    }
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
    const [selectedGuide, setSelectedGuide] = useState(null);
    const handleCompanionConfirm = () => {
        setFinalUserPackage((prev) => ({
            ...prev,
            guide: selectedGuide,
        }));
        addToChat("user", `Finalize ${selectedGuide.name} as my Companion`);
        // addToChat("bot", "Your Companion is Finalized.");
        setStep(7);


    }
    const handleCompanionBack = () => {
        setStep((prev) => prev - 1);
        setFinalUserPackage((prev) => ({
            ...prev,
            guide: "",
        }));
        setSelectedGuide(null);
        addToChat("user", "Back");
        setMessageTracker((prev) => ({ ...prev, step5: false, step6: false }));
    }
    const [showActivityOverlay, setShowActivityOverlay] = useState(false);
    const [selectedActivities, setSelectedActivities] = useState([1]);
    const toggleActivitySelection = (aid) => {
        setSelectedActivities((prev) =>
            prev.includes(aid) ? prev.filter((id) => id !== aid) : [...prev, aid]
        );
    };
    const handleSave = () => {
        setShowActivityOverlay(false);
    };
    const selectedActivityDetails = activityData.activities.filter((activity) =>
        selectedActivities.includes(activity.aid)
    );
    const handleActivitySubmit = () => {
        // Update the final package with selected activities
        setFinalUserPackage((prev) => ({
            ...prev,
            activity: selectedActivities,
        }));

        // Map selected activity IDs to their names
        const activityNames = selectedActivities.map((id) => {
            const activity = activityData.activities.find((act) => act.aid === id);
            return activity ? activity.name : "Unknown Activity";
        });

        // Generate the message with activity names
        const activityMessage = activityNames.length > 0
            ? `Finalize ${activityNames.join(", ")} as my local activities.`
            : "No local activities selected.";

        // Add the message to the chat
        addToChat("user", activityMessage);
        setStep(8);
    };


    const handleActivityBack = () => {
        setStep((prev) => prev - 1);
        setFinalUserPackage((prev) => ({
            ...prev,
            activity: [1],
        }));
        setSelectedActivities([1]);
        addToChat("user", "Back");
        setMessageTracker((prev) => ({ ...prev, step6: false, step7: false }));

    }
    const [showPoojaOverlay, setShowPoojaOverlay] = useState(false);
    const [selectedPoojas, setSelectedPoojas] = useState([]);
    const togglePoojaSelection = (pid) => {
        setSelectedPoojas((prev) =>
            prev.includes(pid) ? prev.filter((id) => id !== pid) : [...prev, pid]
        );
    };

    const handleSavePooja = () => {
        setShowPoojaOverlay(false);
    };
    const selectedPoojaDetails = poojaData.pooja.filter((pooja) =>
        selectedPoojas.includes(pooja.pid)
    );
    const handlePoojaSubmit = () => {
        // Update the final package with selected Poojas
        setFinalUserPackage((prev) => ({
            ...prev,
            pooja: selectedPoojas,
        }));

        // Map selected Pooja IDs to their names
        const poojaNames = selectedPoojas.map((id) => {
            const pooja = poojaData.pooja.find((p) => p.pid === id);
            return pooja ? pooja.name : "Unknown Pooja";
        });

        // Generate the message with Pooja names
        const poojaMessage = poojaNames.length > 0
            ? `Finalize ${poojaNames.join(", ")} as my Pooja arrangements.`
            : "No Pooja arrangements selected.";

        // Add the message to the chat
        addToChat("user", poojaMessage);

        // Move to the next step
        setStep(9);
    };

    const handlePoojaBack = () => {
        setStep((prev) => prev - 1);
        setFinalUserPackage((prev) => ({
            ...prev,
            pooja: [],
        }));
        setSelectedPoojas([]);
        addToChat("user", "Back");
        setMessageTracker((prev) => ({ ...prev, step7: false, step8: false }));
    }
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        packageName: "Customized", // Set the default package name
        name: '',
        number: '',
        dateOfArrival: dates.arrivalDate,
        dateOfDeparture: dates.departureDate,
        email: '',
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

        let submitButton;
        if (typeof window !== 'undefined') {
            submitButton = document.getElementById('submitBtn');
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
                    packageObject: finalUserPackage, // Add the packageObject separately
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setFormData({
                    packageName: 'Customized',
                    name: '',
                    number: '',
                    email: '',
                    dateOfArrival: dates.arrivalDate,
                    dateOfDeparture: dates.departureDate,
                    noOfPersons: '',
                });
                setIsSubmitting(false);

                if (submitButton) {
                    submitButton.innerText = 'Submit';
                }

                alert('Query Added Successfully! You will be contacted soon.');
                addToChat('user', 'Submit Details');
                setStep(10);
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
    const [chatIndex, setChatIndex] = useState(false);

    const handleTypingComplete = () => {
        // After typing completes, move to the next chat message or load other divs
        setChatIndex(true);
    };
    const handleTypingStart = () => {
        // After typing completes, move to the next chat message or load other divs
        setChatIndex(false);
    };
    // Function to scroll to the newly added step or chat message

    if (typeof window !== "undefined") {
        // Get the container element
        const allchatContainer = document.getElementById('allchatContainer');
        console.log("all chat container: ", allchatContainer);

        if (allchatContainer) {
            // Function to scroll to the latest chat
            function scrollToLatestChat() {
                const chatDivs = allchatContainer.getElementsByClassName('chat');
                if (chatDivs.length > 0) {
                    const latestChat = chatDivs[chatDivs.length - 1];
                    latestChat.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    console.log("Function executed: Scrolled to latest chat.");
                }
            }

            // Create a MutationObserver instance
            const observer = new MutationObserver(() => {
                scrollToLatestChat();
            });

            // Start observing the container for child changes
            observer.observe(allchatContainer, {
                childList: true, // Observe direct child additions/removals
                subtree: false,  // Don't observe descendants
            });

            // Cleanup logic to disconnect observer when no longer needed
            window.addEventListener("beforeunload", () => {
                observer.disconnect();
                console.log("Observer disconnected.");
            });
        } else {
            console.error("Element 'allchatContainer' not found.");
        }
    }

    return (
        <div>
            <Navbar />
            <div id="allchatContainer" className={styles.allChatContainer}>
                {/* Chat History */}
                {chatHistory.map((chat, index) => (
                    <div
                        key={index}
                        className={`chat ${styles.chatContainer} ${chat.type === "bot" ? styles.botContainer : styles.userContainer}`}
                    >
                        {chat.type === "bot" && (
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/010/044/383/non_2x/chat-bot-icon-isolated-contour-symbol-illustration-vector.jpg"
                                alt="Bot"
                                className={styles.botAvatar}
                            />
                        )}
                        <div className={`${styles.chatBubble} ${chat.type === "bot" ? styles.bot : styles.user}`}>
                            {chat.type === "bot" ? (
                                <Typewriter text={chat.text} speed={20} onComplete={handleTypingComplete} onStarting={handleTypingStart} />
                            ) : (
                                chat.text
                            )}
                        </div>
                        {chat.type === "user" && (
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/11772/11772904.png"
                                alt="User"
                                className={styles.userAvatar}
                            />
                        )}
                    </div>
                ))}



                {/* Step 0: Welcome */}
                {step === 0 && chatIndex && (
                    <div className={styles.options} style={{ marginLeft: "50px", marginTop: "0px" }}>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                addToChat("user", "Browse Traditional Packages");
                                handleNavigation('packages')
                            }}
                        >
                            Browse Traditional Packages
                        </button>
                        <button
                            className="btn btn-primary mx-2 my-2"
                            onClick={() => {
                                addToChat("user", "Customize My Journey");
                                setStep(1);
                            }}
                        >
                            Customize My Journey
                        </button>
                    </div>
                )}

                {/* Step 1: Travel Dates */}
                {step === 1 && chatIndex && (
                    <div className={`${styles.dateInputs} ${styles.widthCorrector} ${styles.overviewdiv}`} style={{ marginLeft: "50px", marginTop: "0px", width: "70%" }}>
                        <h4
                            className="text-dark"
                            style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                        >
                            Arrival Date:
                        </h4>
                        <input
                            type="date"
                            className="text-dark"
                            style={{background:"white", border:"1px solid black",paddingLeft:"7px"}}
                            value={dates.arrivalDate}
                            onChange={(e) => handleDateChange("arrivalDate", e.target.value)}
                            required
                        />
                        <select
                        className="p-1 bg-light text-dark"
                            value={dates.arrivalTime}
                            onChange={(e) => handleDateChange("arrivalTime", e.target.value)}
                        >
                            <option value="Day">Day</option>
                            <option value="Night">Night</option>
                        </select>
                        <h4
                            className="text-dark mt-1 text-dark"
                            style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                        >
                            Departure Date:
                        </h4>

                        <input
                            type="date"
                            className="text-dark"
                            style={{background:"white", border:"1px solid black",paddingLeft:"7px"}}
                            value={dates.departureDate}
                            onChange={(e) => handleDateChange("departureDate", e.target.value)}
                            required
                        />
                        <select
                            value={dates.departureTime}
                            className="p-1 bg-light text-dark"
                            onChange={(e) => handleDateChange("departureTime", e.target.value)}
                        >
                            <option value="Day">Day</option>
                            <option value="Night">Night</option>
                        </select>
                        <div className={styles.options}>
                            <button
                                className="btn btn-primary"
                                onClick={calculateDuration}
                                disabled={!dates.arrivalDate || !dates.departureDate}
                            >
                                Proceed
                            </button>
                            <button className="btn btn-secondary mx-2 my-2" onClick={() => handleTravelBack()}>Back</button>
                        </div>
                    </div>
                )}

                {/* Step 2: Duration Summary */}
                {step === 2 && chatIndex && (
                    <div className={styles.options} style={{ marginLeft: "50px", marginTop: "0px", width: "70%" }}>
                        <button className="btn btn-primary" onClick={fetchItinerary} id="show-itinerary-btn">
                            Show Itinerary
                        </button>
                        <button className="btn btn-secondary mx-2 my-2" onClick={() => handleDurationBack()}>Back</button>

                    </div>
                )}

                {/* Step 3: Show Itinerary */}
                {step === 3 && chatIndex && (
                    <div className={styles.widthCorrector}>
                        <div id="itinerary" className={`itinirarydiv ${styles.overviewdiv}`}>
                            <div className="text-dark d-flex align-items-center justify-content-between mb-4">
                                <h4
                                    className="text-dark d-flex align-items-center"
                                    style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                                >
                                    Itinerary
                                </h4>
                                <button
                                    className={`btn btn-primary ${styles.deskItenerybtn}`}
                                    onClick={() => { setIsOverlayVisible(true); addToChat("user", "Customize Itinerary"); }}
                                >
                                    Customize Itinerary
                                </button>
                                <button
                                    className={`btn btn-primary ${styles.mobItenerybtn}`}
                                    onClick={() => { setIsMobileOverlayVisible(true); addToChat("user", "Customize Itinerary"); }}
                                >
                                    Customize Itinerary
                                </button>
                                {/* <button
                                    className="btn btn-primary mx-2"
                                    onClick={() => { setIsOverlayVisible(true); addToChat("user", "Customize Itinerary"); }}>
                                    Customize Itinerary
                                </button> */}
                            </div>
                            {itinerary.map((dayData, index) => (
                                <div
                                    key={index}
                                    className="alldaywisediv"
                                    style={{
                                        borderRadius: "25px",
                                        overflow: "hidden",
                                        border: "1px solid #2a9d8f",
                                        marginBottom: "10px",
                                        width: "100%",
                                    }}
                                >
                                    <div
                                        style={{
                                            background: "#e7f7f9",
                                            padding: "15px",
                                            color: "black",
                                            borderBottom: "1px solid #2a9d8f",
                                        }}
                                    >
                                        <h5 className="m-0 p-0">{dayData.day}</h5>
                                        <p
                                            className="text-muted p-0 m-0"
                                            style={{ fontSize: "8px" }}
                                        >
                                            *Click on them to know more
                                        </p>
                                    </div>
                                    <div
                                        className={`d-flex ${styles.allplacescontainer}`}
                                        style={{ overflowX: "auto", padding: "10px" }}
                                    >
                                        {dayData.places.map((place, placeIndex) => (
                                            <a
                                                key={placeIndex}
                                                href={place.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "none" }}
                                                className="initeraryitem"
                                            >
                                                <div
                                                    key={placeIndex}
                                                    className={styles.itinerarycirclediv}
                                                >
                                                    <div
                                                        style={{
                                                            width: "70px",
                                                            height: "70px",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <Image
                                                            src={place.img}
                                                            alt={place.name}
                                                            width={80}
                                                            height={80}
                                                            loading="lazy"
                                                            objectFit="cover"
                                                        />
                                                    </div>
                                                    <h6
                                                        className={`text-center mx-2 ${styles.itinerarycircledivpara}`}
                                                    >
                                                        {place.name}
                                                    </h6>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.options}>
                            <button
                                className="btn btn-primary mx-2"
                                onClick={useThisItinerary}
                            >
                                Use This Itinerary
                            </button>
                            <button
                                className="btn btn-secondary mx-2"
                                onClick={handleItineraryBack}
                            >
                                Back
                            </button>

                        </div>
                    </div>
                )}
                {/* Overlay for Customization for Step 3*/}
                {isOverlayVisible && (
                    <div className={styles.overlay}>
                        <div className={styles.overlayContent}>
                            <h6 className="text-muted text-center my-2 mb-3">
                                Drag and Drop the Places, Click on places to know more
                            </h6>
                            <div className="d-flex w-100 flex-column" style={{ height: "90%" }}>
                                <div
                                    className={`d-flex flex-column flex-wrap w-100 ${styles.unassignedcontainer}`}
                                >
                                    <h6 className="m-0" style={{ paddingLeft: "15px" }}>
                                        More Places To Explore
                                    </h6>

                                    <div
                                        className={styles.unassignedPlacesSection}
                                        onDrop={(event) => handleDrop(event, "unassigned", -1)}
                                        onDragOver={(event) => event.preventDefault()}
                                    >
                                        {unassignedPlaces.map((place, index) => (
                                            <a
                                                key={index}
                                                href={place.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "none" }}
                                                className="initeraryitem"
                                            >
                                                <div
                                                    key={index}
                                                    draggable
                                                    onDragStart={(event) =>
                                                        handleDragStart(event, place, "unassigned", index)
                                                    }
                                                    className={styles.itinerarycirclediv}
                                                >
                                                    <div
                                                        style={{
                                                            width: "70px",
                                                            height: "70px",
                                                            overflow: "hidden",
                                                            background: "grey",
                                                        }}
                                                    >
                                                        <Image
                                                            src={place.img}
                                                            alt={place.name}
                                                            width={80}
                                                            height={80}
                                                            loading="lazy"
                                                            objectFit="cover"
                                                        />
                                                    </div>
                                                    <h6
                                                        className={`mx-2 text-center ${styles.itinerarycircledivpara}`}
                                                    >
                                                        {place.name}
                                                    </h6>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className={`w-100 ${styles.daysectioncontainer}`}>
                                    {tempItinerary.map((day, index) => (
                                        <div className="mt-3" key={index}>
                                            <h5 style={{ paddingLeft: "15px", margin: "0" }}>
                                                {day.day}
                                            </h5>
                                            <div
                                                className={styles.daySection}
                                                onDrop={(event) =>
                                                    handleDrop(event, "itinerary", index)
                                                }
                                                onDragOver={(event) => event.preventDefault()}
                                            >
                                                {day.places.map((place, placeIndex) => (
                                                    <a
                                                        key={placeIndex}
                                                        href={place.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ textDecoration: "none" }}
                                                        className="initeraryitem"
                                                    >
                                                        <div
                                                            key={placeIndex}
                                                            draggable
                                                            onDragStart={(event) =>
                                                                handleDragStart(event, place, "itinerary", index)
                                                            }
                                                            className={styles.itinerarycirclediv}
                                                        >
                                                            <div
                                                                style={{
                                                                    width: "70px",
                                                                    height: "70px",
                                                                    overflow: "hidden",
                                                                    background: "grey",
                                                                }}
                                                            >
                                                                <Image
                                                                    src={place.img}
                                                                    alt={place.name}
                                                                    width={80}
                                                                    height={80}
                                                                    loading="lazy"
                                                                    objectFit="cover"
                                                                />
                                                            </div>
                                                            <h6
                                                                className={`mx-2 text-center ${styles.itinerarycircledivpara}`}
                                                            >
                                                                {place.name}
                                                            </h6>
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-primary m-2" onClick={saveChanges}>
                                Save Changes
                            </button>
                            <button
                                className="btn btn-secondary m-2"
                                onClick={() => setIsOverlayVisible(false)}
                            >
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

                {/* Step 4: Show Accomodation */}
                {step === 4 && chatIndex && (
                    <div id="accommodation" className={`${styles.widthCorrector} ${styles.overviewdiv}`}>
                        <h4
                            className="text-dark"
                            style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                        >
                            Accommodation
                        </h4>
                        <div
                            //   className={styles.hcardcontainer}
                            style={{
                                display: "flex",
                                overflowX: "auto",
                                gap: "10px",
                                padding: "10px 0",
                                width: "100%",
                            }}
                        >
                            {hotelData.hotels && hotelData.hotels.length > 0 ? (
                                hotelData.hotels.map((hotel, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.hotelhCard}`}
                                        style={{
                                            cursor: "pointer",
                                            border: "1px solid #ccc",
                                            borderRadius: "10px",
                                            padding: "10px",
                                            minWidth: "250px",
                                            maxWidth: "250px",
                                            textAlign: "center",
                                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                                            background: "white",
                                        }}
                                    >
                                        <div
                                            //   className={styles.allhotelcardcorosaldiv}
                                            style={{
                                                width: "100%",
                                                height: "150px",
                                                overflow: "hidden",
                                                borderRadius: "8px",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            <Carousel
                                                interval={2500}
                                                pause={false}
                                                showThumbs={false}
                                                autoPlay
                                                infiniteLoop
                                            >
                                                {hotel.img.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`Hotel Image ${idx}`}
                                                            width={250}
                                                            height={150}
                                                            objectFit="cover"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                        <h5 className="mb-0 p-0">{hotel.name}</h5>
                                        <p className="m-0 text-muted" style={{ fontSize: "12px" }}>
                                            {hotel.location}
                                        </p>
                                        <p className="mt-1">
                                            {rating(hotel.ratingValue)} ({hotel.ratingValue}/5.0 Rating)
                                        </p>
                                        <p className="text-secondary m-0">
                                            Starting At:{" "}
                                            <span style={{ textDecoration: "line-through" }}>
                                                {incprice(hotel.startprice)}
                                            </span>
                                            <span className="text-dark">₹{hotel.startprice}</span>
                                        </p>
                                        <button
                                            className="btn btn-dark mt-2"
                                            onClick={() => handleViewHotel(hotel)}
                                        >
                                            View details
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted">Fetching accommodation details.....</p>
                            )}
                        </div>
                        {selectedHotel && selectedRoom ? (
                            <>
                                <p
                                    className="mt-4 text-dark"
                                    style={{
                                        borderRadius: "40px",
                                        maxWidth: "100%",
                                        width: "max-content",
                                        fontWeight: "bolder"
                                    }}
                                >
                                    You Choosed <span style={{ color: "orange" }}>{selectedRoom}</span> in {selectedHotel.name}{" "}
                                    {rating(selectedHotel.ratingValue)}
                                </p>
                                <button className="btn btn-primary" onClick={() => handleAccom()}>
                                    Confirm Stay
                                </button>
                                <button
                                    className="btn btn-secondary mx-2 my-2"
                                    onClick={() => handleAccomBack()}
                                >
                                    Back
                                </button>
                            </>
                        ) : (
                            <>
                                <p
                                    className="mt-4 text-dark"
                                    style={{
                                        borderRadius: "40px",
                                        maxWidth: "100%",
                                        width: "max-content",
                                        fontWeight: "bolder"
                                    }}
                                >
                                    Select Accommodation according to your need
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleAccom()}
                                    disabled
                                >
                                    Confirm Accommodation
                                </button>
                                <button
                                    className="btn btn-secondary mx-2 my-2"
                                    onClick={() => handleAccomBack()}
                                >
                                    Back
                                </button>
                            </>
                        )}
                    </div>

                )}
                {showFullHotelOverlay && (
                    <div className={`${styles.overlay}`} style={{ zIndex: "1800" }}>
                        <div className={styles.fullhoteloverlayContentContainer}>
                            <div className={`${styles.overlayContent} ${styles.fhoverlayContent}`}  >
                                <div className='w-100' style={{ cursor: "pointer", display: "flex", justifyContent: "flex-end" }}>
                                    <button className=" btn btn-outline-secondary mb-2 px-2 py-1" onClick={() => setShowFullHotelOverlay(false)}>Back <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                </div>
                                {/* <div className='w-100 pt-2' style={{ cursor: "pointer" }}>
                                    <button className=" btn btn-secondary mb-2" onClick={() => setShowFullHotelOverlay(false)}> <i className="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
                                </div> */}
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
                                                <p className='text-secondary'>Get At: <span style={{ textDecoration: "line-through" }}>{incprice(room.price)} </span><span className='text-dark'>₹{room.price}</span></p>
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

                {/* Step 5: Show Travel */}
                {step === 5 && chatIndex && (
                    <div id="city-transfer" className={`transportdiv ${styles.widthCorrector} ${styles.overviewdiv}`}>
                        <h4
                            className="text-dark"
                            style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                        >
                            Incity Transfer
                        </h4>
                        <div
                            className={styles.accomodationdiv}
                            style={{
                                display: "flex",
                                overflowX: "auto",
                                gap: "10px",
                                padding: "5px 0",
                                width: "100%",
                            }}
                        >
                            {cabData.cabs.map((cab) => (
                                <div
                                    key={cab.cid}
                                    onClick={() => setSelectedCab(cab)}
                                    className={`${styles.cabCard} ${selectedCab?.cid === cab.cid ? styles.selected : ""
                                        }`}
                                    style={{
                                        cursor: "pointer",
                                        border: selectedCab?.cid === cab.cid ? "2px solid green" : "1px solid #ccc",
                                        borderRadius: "10px",
                                        padding: "10px",
                                        minWidth: "200px",
                                        textAlign: "center",
                                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                                        background: "white",
                                    }}
                                >
                                    <img
                                        src={cab.img}
                                        alt={cab.name}
                                        style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }}
                                    />
                                    <h5 className="mt-2">{cab.name}</h5>
                                    <p className="text-muted">Capacity: {cab.cabPerson} Persons</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-dark"
                            style={{
                                borderRadius: "40px",
                                maxWidth: "100%",
                                width: "max-content",
                                fontWeight: "bolder"
                            }}>
                            {selectedCab ? `Selected Cab: ${selectedCab.name}` : "Click to choose a cab"}
                        </p>
                        <button className="btn btn-primary" onClick={handleTravelConfirm} disabled={!selectedCab}>
                            Confirm Cab
                        </button>
                        <button className="btn btn-secondary mx-2 my-2" onClick={handleTravelcabBack}>
                            Back
                        </button>
                    </div>
                )}

                {/* Step 6: Show Companion */}
                {step === 6 && chatIndex && (
                    <div id="companion" className={`${styles.widthCorrector} ${styles.overviewdiv}`}>
                        <h4
                            className="text-dark"
                            style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                        >
                            Choose Your Companion
                        </h4>
                        <div
                            className={styles.guideOptions}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "20px",
                                marginTop: "20px",
                            }}
                        >
                            {guideOptions.map((guide, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedGuide(guide)}
                                    className={`${styles.guideCard} ${selectedGuide?.name === guide.name ? styles.selected : ""
                                        }`}
                                    style={{
                                        cursor: "pointer",
                                        border:
                                            selectedGuide?.name === guide.name
                                                ? "2px solid green"
                                                : "1px solid #ccc",
                                        borderRadius: "10px",
                                        padding: "10px",
                                        width: "calc(50% - 10px)", // Split cards equally
                                        textAlign: "center",
                                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px",
                                        background: "white",
                                    }}
                                >
                                    <img
                                        src={guide.img}
                                        alt={guide.name}
                                        style={{
                                            width: "100%",
                                            height: "150px",
                                            objectFit: "cover",
                                            borderRadius: "8px",
                                        }}
                                    />
                                    <h5 className="mt-2">{guide.name}</h5>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-dark"
                            style={{
                                borderRadius: "40px",
                                maxWidth: "100%",
                                width: "max-content",

                            }}>
                            {selectedGuide ? (
                                selectedGuide.name === "Virtual Companion" ? (
                                    <>
                                        Your personal guide in the palm of your hand. Our Virtual
                                        Companion helps you follow your itinerary, provides real-time
                                        information about places, offers local insights, and ensures your
                                        journey runs smoothly—just like an in-person guide, but virtually
                                        at your fingertips.
                                    </>
                                ) : (
                                    <>
                                        Experience the city through the eyes of a local. Our In-Person
                                        Guide offers hands-on assistance, walking you through every step
                                        of your journey, making sure you get the most out of your darshan.
                                    </>
                                )
                            ) : (
                                "Choose your companion"
                            )}
                        </p>
                        <button className="btn btn-primary mt-3" onClick={handleCompanionConfirm} disabled={!selectedGuide}>
                            Confirm Companion
                        </button>
                        <button className="btn btn-secondary mt-3 mx-2" onClick={handleCompanionBack}>
                            Back
                        </button>
                    </div>)}

                {/* Step 7: Show Activites */}
                {step === 7 && chatIndex && (
                    <div id="activities" className={`localactivitydiv ${styles.widthCorrector} ${styles.overviewdiv}`} >
                        <div className="text-dark d-flex align-items-center justify-content-between mb-4">
                            <h4
                                className="text-dark"
                                style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                            >
                                Local Activities
                            </h4>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowActivityOverlay(true)}
                            >
                                See More
                            </button>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                            {selectedActivityDetails.length > 0 ? (
                                selectedActivityDetails.map((place, placeIndex) => (
                                    <a
                                        key={placeIndex}
                                        href={place.link}
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
                                            <div style={{ width: "70px", height: "70px", overflow: "hidden" }}>
                                                <Image
                                                    src={place.img}
                                                    alt={place.name}
                                                    width={80}
                                                    height={80}
                                                    loading="lazy"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <h6
                                                className={`mx-2 text-center ${styles.itinerarycircledivpara}`}
                                            >
                                                {place.name}
                                            </h6>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <p className="text-muted">
                                    No local activities in this package! Add a touch of excitement by
                                    choosing some from our list!
                                </p>
                            )}
                        </div>

                        <button
                            className="btn btn-primary mt-3"
                            onClick={handleActivitySubmit}
                        >
                            Confirm Activites
                        </button>
                        <button
                            className="btn btn-secondary mt-3 mx-2"
                            onClick={handleActivityBack}
                        >
                            Back
                        </button>

                        {/* Activity Selection Overlay */}
                        {showActivityOverlay && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 1000,
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "20px",
                                        borderRadius: "8px",
                                        maxWidth: "600px",
                                        width: "90%",
                                    }}
                                >
                                    <h4>Select Local Activities</h4>
                                    <div
                                        style={{
                                            maxHeight: "400px",
                                            overflowY: "auto",
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "1rem",
                                        }}
                                    >
                                        {activityData.activities.map((activity) => (
                                            <label
                                                key={activity.aid}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    width: "100%",
                                                    maxWidth: "250px",
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedActivities.includes(activity.aid)}
                                                    onChange={() => toggleActivitySelection(activity.aid)}
                                                />
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
                                                            src={activity.img}
                                                            alt={activity.name}
                                                            width={80}
                                                            height={80}
                                                            loading="lazy"
                                                            objectFit="cover"
                                                        />
                                                    </div>
                                                    <h6
                                                        className={`mx-2 text-center ${styles.itinerarycircledivpara}`}
                                                    >
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
                    </div>
                )}

                {/* Step 7: Show Pooja */}
                {step === 8 && chatIndex && (
                    <div id="pooja" className={`localactivitydiv ${styles.widthCorrector} ${styles.overviewdiv}`}>
                        <div className="text-dark d-flex align-items-center justify-content-between mb-4">
                            <h4
                                className="text-dark"
                                style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}
                            >
                                Pooja Selection
                            </h4>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowPoojaOverlay(true)}
                            >
                                See More
                            </button>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                            {selectedPoojaDetails.length > 0 ? (
                                selectedPoojaDetails.map((pooja, poojaIndex) => (
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
                                            <div style={{ width: "70px", height: "70px", overflow: "hidden" }}>
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
                                <p className="text-muted">
                                    No poojas selected! Choose the most divine experiences from our list!
                                </p>
                            )}
                        </div>
                        <button className="btn btn-primary mt-3" onClick={handlePoojaSubmit}>
                            Finalize Pooja
                        </button>
                        <button
                            className="btn btn-secondary mt-3 mx-2"
                            onClick={handlePoojaBack}
                        >
                            Back
                        </button>

                        {/* Pooja Selection Overlay */}
                        {showPoojaOverlay && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 1000,
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "20px",
                                        borderRadius: "8px",
                                        maxWidth: "600px",
                                        width: "90%",
                                    }}
                                >
                                    <h4>Select Poojas</h4>
                                    <div
                                        style={{
                                            maxHeight: "400px",
                                            overflowY: "auto",
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "1rem",
                                        }}
                                    >
                                        {poojaData.pooja.map((pooja) => (
                                            <label
                                                key={pooja.pid}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem",
                                                    width: "100%",
                                                    maxWidth: "250px",
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedPoojas.includes(pooja.pid)}
                                                    onChange={() => togglePoojaSelection(pooja.pid)}
                                                />
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
                                            </label>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: "20px", textAlign: "right" }}>
                                        <button
                                            onClick={handleSavePooja}
                                            className="btn btn-primary mx-2"
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => setShowPoojaOverlay(false)}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Step 7: Show Form */}
                {step === 9 && chatIndex && (
                    <div className={`${styles.widthCorrector} ${styles.overviewdiv}`} >
                        <form onSubmit={handleFormSubmit} style={{ width: "90%" }}>
                            <h3 className="text-dark" style={{ borderLeft: "3px solid blue", paddingLeft: "7px" }}>Enter Your Details</h3>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label m-0">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
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
                )}

                {step === 10 && chatIndex && (
                    <div className={styles.widthCorrector}>
                        <Link href="/"><button className="btn btn-primary">Go to Home</button></Link>
                        <a a href="https://wa.me/7505866498" target="_blank" className="btn btn-success mx-2">Contact Us</a>
                    </div>
                )}
            </div>
            {/* <Footer /> */}
        </div>
    );
}
