import styles from '../styles/Package.module.css';
import Packagecards from './Packagecards';


export default function Prepackage(){
    const items = [
        "Pickup & Drop",
        "Dharmashala",
        "Guided Tour",
        "Intercity Transfers",
        "Activities",
    ];

    // Itineraries
    const itineraries = [
        "Ram Mandir",
        "Kanak Bhawan",
        "Dashrath Mahal",
        "Hanuman Gadhi",
        "Guptar Ghat",
        "Hanuman Gufa",
        "Nageshwarnath",
        "Naya Ghat",
    ];
    const img="https://www.aryavrittravels.com/wp-content/uploads/2023/10/Ram-Mandir-Ayodhya-Tour.jpg"
    const title="Student Enlightment"
    const description ="3N Ayodhya"
    const duration ='2N/3D'
    const price="1330"
    return (
        <div id="packages" style={{position:"relative"}}>
        <div className={styles.packagecontainer}>
            <div className={styles.packageheading}>
            <h3>Preset <span style={{color:"black"}}>Plans</span></h3>
            <p className='text-center text-muted px-1' style={{marginTop:"-6px",fontSize:"14px"}}>Explore our <span style={{color:"#3cc2bd"}}>curated packages</span> designed for every kind of <span style={{color:"orange"}}>Darshanarthi!</span></p>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
                <Packagecards 
                items = {[
                    "Pickup & Drop",
                    "Dharmashala",
                    "Guided Tour",
                    "Intercity Transfers",
                    "Activities",
                ]} itineraries = {[
                    "Ram Mandir",
                    "Kanak Bhawan",
                    "Dashrath Mahal",
                    "Hanuman Gadhi",
                    "Guptar Ghat",
                    "Hanuman Gufa",
                    "Nageshwarnath",
                    "Naya Ghat",
                ]} img="https://www.aryavrittravels.com/wp-content/uploads/2023/10/Ram-Mandir-Ayodhya-Tour.jpg" title="Student Enlightment" description ="Affordable Adventures" duration ='1N/2D' price="1200" link="/ayodhyapackages/student-enlightment"/>
                 <Packagecards 
                items = {[
                    "Pickup & Drop",
                    "Suite Room",
                    "Guided Tour",
                    "Intercity Transfers",
                    "Activities",
                    "Pooja Arrangements"
                ]} itineraries = {[
                    "Ram Mandir",
                    "Kanak Bhawan",
                    "Dashrath Mahal",
                    "Swaminarayan Mandir",
                    "Mani Parvat",
                    "Hanuman Gadhi",
                    "Guptar Ghat",
                    "Hanuman Gufa",
                    "Nageshwarnath",
                    "Naya Ghat",
                ]} img="https://www.tirthayatra.org/wp-content/uploads/2021/08/Ayodhya-bhoomi-pujan.jpg" title="Moksha Yatra" description ="Elegance Redefined" duration ='2N/3D' price="9500" link="/ayodhyapackages/moksha-yatra"/>
         

         <Packagecards 
                items = {[
                    "Pickup & Drop",
                    "Standard Room",
                    "Guided Tour",
                    "Intercity Transfers",
                    "Activities",
                    "Pooja Arrangements"
                ]} itineraries = {[
                    "Ram Mandir",
                    "Kanak Bhawan",
                    "Dashrath Mahal",
                    "Hanuman Gadhi",
                    "Guptar Ghat",
                    "Hanuman Gufa",
                    "Nageshwarnath",
                    "Naya Ghat",
                ]} img="https://www.abhibus.com/blog/wp-content/uploads/2023/11/Ayodhya-Ram-Mandir-History-Opening-Date-How-to-Reach.jpg" title="Tirth Essentials" description ="Value with Comfort" duration ='2N/3D' price="4200" link="/ayodhyapackages/tirth-essentials"/>
         

            </div>
        </div>
        </div>
    )
    }