'use client';
import "./find-a-provider.css";
import data from '../../../../data/providers.json';
import Sidebar from "@/components/Sidebar"
import { useState, useEffect } from "react";

export default function Home() {

    const [currentPage, setCurrentPage] = useState("search");
    const handlePageChange = (page, filters = {}) => { setCurrentPage(page); setFilters(filters) }
    const [filters, setFilters] = useState({});

    function Search({ handlePageChange }) {

        const [specialties, setSpecialties] = useState([]);
        const [insurance, setInsurance] = useState([]);
        const [locations, setLocations] = useState([]);
        const [rates, setRates] = useState([]);

        const [selectedSpecialty, setSelectedSpecialty] = useState("");
        const [selectedInsurance, setSelectedInsurance] = useState("");
        const [selectedLocation, setSelectedLocation] = useState("");
        const [selectedRate, setSelectedRate] = useState("");

        useEffect(() => {
            const specialties = new Set(data.map(item => item.specialty));
            setSpecialties([...specialties]);

            const insurance = new Set(data.map(item => item.accepted_insurance));
            setInsurance([...insurance]);
            
            const locations = new Set(data.map(item => item.location));
            setLocations([...locations]);

            const rates = new Set(data.map(item => item.rates));
            setRates([...rates].sort((a, b) => a - b));
                
        }, []);

        return (
            <div id="Container">
                <Sidebar/>
                <h1>What I want in a provider</h1>
                <label htmlFor="specialty">Specialty</label>
                <select name="specialty" value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                    <option value="">Select a specialty</option>
                    {specialties.map(specialty => (
                        <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                </select>
                <label htmlFor="insurance">Insurance</label>
                <select name="insurance" value={selectedInsurance} onChange={(e) => setSelectedInsurance(e.target.value)}>
                    <option value="">Whats your insurance</option>
                    {insurance.map(insurance => (
                        <option key={insurance} value={insurance}>{insurance}</option>
                    ))}
                </select>
                <label htmlFor="location">Location</label>
                <select name="location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                    <option value="">Where you at</option>
                    {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
                <label htmlFor="rate">Rate</label>
                <select name="rate" value={selectedRate} onChange={(e) => setSelectedRate(e.target.value)}>
                    <option value="">How much we talkin bout here</option>
                    {rates.map(rate => (
                        <option key={rate} value={rate}>{rate}</option>
                    ))}
                </select>
                <button onClick={() => handlePageChange("dating", {specialty: selectedSpecialty, insurance: selectedInsurance, location: selectedLocation, rate: selectedRate})}>Set Preferences</button>
            </div>
        );
    }

    function Dating({ handlePageChange, filters }) {
        /*
        const provider = {
            first_name: "Betty",
            last_name:"Boop",
            image:"https://media.discordapp.net/attachments/1288011053891846164/1289465524270661632/IMG_0837.jpg?ex=66f8ebda&is=66f79a5a&hm=1daf97f3dd43dffeb0e05bce409df9b752803554f30b765b27dc01343f359ddf&=&format=webp&width=458&height=611",
            specialty:"Therapy",
            qualifications:"PhD",
            phone_number:"508-788-0445",
            email:"betty.boop@email.co",
            location:"Orlando",
            accepted_insurance:"Humana",
            rates:479.08,
            short_description: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            long_description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        };
        */
       
        const matchedDates = data.filter(provider => {
            return (
                (filters.specialty ? provider.specialty === filters.specialty : true) &&
                (filters.insurance ? provider.accepted_insurance === filters.insurance : true) &&
                (filters.location ? provider.location === filters.location : true) &&
                (filters.rate ? provider.rates === parseFloat(filters.rate) : true)
            );
        });

        const [currentDate, setCurrentDate] = useState(0);

        if (matchedDates.length == 0) {
            alert("YOU'RE TOO PICKY");
            handlePageChange("search");
        }

        const provider = matchedDates[currentDate]

        const [datingStatus, setDatingStatus] = useState("browse")
        const handleDatingStatus = (datingStatus) => {
            if (datingStatus == "moreInfo") {
                setDatingStatus("moreInfo")
            }
            else if (datingStatus == "reject") {
                if (currentDate < matchedDates.length - 1) {
                    setCurrentDate(currentDate + 1)
                    setDatingStatus("browse")
                }
                else {
                    alert("out of options")
                    handlePageChange("search")
                }
            }
            else {
                // load a messaging window with the current provider
                alert("hooray!")
            }
        }
        return (
            <>
                <button onClick={() => handleDatingStatus("reject")}>X</button>
                <div>
                    <img src={provider.image} alt={`${provider.first_name} ${provider.last_name}`}/>
                    <h1>{provider.first_name} {provider.last_name}</h1>
                    <p>{provider.short_description}</p>
                    <button onClick={() => handleDatingStatus("moreInfo")}>Tell me more</button>
                </div>
                <button onClick={() => handleDatingStatus("accept")}>&lt;3</button>
                {datingStatus === "moreInfo" && <MoreInfo bio={provider.long_description} />}
            </>
        );
    }

    function MoreInfo({ bio }) {
        return (
            <>
                <p>{bio}</p>
            </>
        )
    }
    

  return (
    <>
    {currentPage === "search" && <Search handlePageChange={handlePageChange} />}
    {currentPage === "dating" && <Dating handlePageChange={handlePageChange} filters={filters} />}
    </>
  );
}