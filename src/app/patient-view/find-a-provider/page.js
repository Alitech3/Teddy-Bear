'use client';
// import "./find-a-provider.css";
import data from '../../../../data/providers.json';
import { useState, useEffect } from "react";
import PatientLayout from "@/components/PatientLayout";

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

            // Map rates to predefined categories
            const rateCategories = {
                "<$50": [],
                "$50-100": [],
                "$100-200": [],
                ">$200": []
            };
            data.forEach(item => {
                const rate = parseFloat(item.rates.replace(/[^0-9.-]+/g, "")); // Parse numeric value from rate string
                if (rate < 50) {
                    rateCategories["<$50"].push(item.rates);
                } else if (rate >= 50 && rate <= 100) {
                    rateCategories["$50-100"].push(item.rates);
                } else if (rate > 100 && rate <= 200) {
                    rateCategories["$100-200"].push(item.rates);
                } else {
                    rateCategories[">$200"].push(item.rates);
                }
            });

            setRates(Object.keys(rateCategories));
                
        }, []);

        return (
            <PatientLayout>

            
            <div id="Container">
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
                    <option value="">What's your insurance?</option>
                    {insurance.map(insurance => (
                        <option key={insurance} value={insurance}>{insurance}</option>
                    ))}
                </select>
                <label htmlFor="location">Location</label>
                <select name="location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                    <option value="">Where you at?</option>
                    {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
                <label htmlFor="rate">Rate</label>
                <select name="rate" value={selectedRate} onChange={(e) => setSelectedRate(e.target.value)}>
                    <option value="">How much are we talkin' about?</option>
                    {rates.map(rate => (
                        <option key={rate} value={rate}>{rate}</option>
                    ))}
                </select>
                <button onClick={() => handlePageChange("dating", {specialty: selectedSpecialty, insurance: selectedInsurance, location: selectedLocation, rate: selectedRate})}>Set Preferences</button>
            </div>
            </PatientLayout>
        );
    }

    function Dating({ handlePageChange, filters }) {
       
        const matchedDates = data.filter(provider => {
            const providerRate = parseFloat(provider.rates.replace(/[^0-9.-]+/g, ""));
            let rateFilter = true;

            if (filters.rate) {
                if (filters.rate === "<$50") {
                    rateFilter = providerRate < 50;
                } else if (filters.rate === "$50-100") {
                    rateFilter = providerRate >= 50 && providerRate <= 100;
                } else if (filters.rate === "$100-200") {
                    rateFilter = providerRate > 100 && providerRate <= 200;
                } else if (filters.rate === ">$200") {
                    rateFilter = providerRate > 200;
                }
            }

            return (
                (filters.specialty ? provider.specialty === filters.specialty : true) &&
                (filters.insurance ? provider.accepted_insurance === filters.insurance : true) &&
                (filters.location ? provider.location === filters.location : true) &&
                rateFilter
            );
        });

        const [currentDate, setCurrentDate] = useState(0);

        if (matchedDates.length === 0) {
            alert("YOU'RE TOO PICKY");
            handlePageChange("search");
        }

        const provider = matchedDates[currentDate];

        const [datingStatus, setDatingStatus] = useState("browse");
        const handleDatingStatus = (datingStatus) => {
            if (datingStatus === "moreInfo") {
                setDatingStatus("moreInfo");
            } else if (datingStatus === "reject") {
                if (currentDate < matchedDates.length - 1) {
                    setCurrentDate(currentDate + 1);
                    setDatingStatus("browse");
                } else {
                    alert("out of options");
                    handlePageChange("search");
                }
            } else if (datingStatus === "accept") {
                setDatingStatus("accept");
            } else if (datingStatus === "return") {
                handlePageChange("search");
            }
        };

        function BrowseProviders() {
            return (
                <>
                    <button onClick={() => handleDatingStatus("return")}>Return to Search</button>
                    <button onClick={() => handleDatingStatus("reject")}>X</button>
                    <div>
                        <img src={provider.image} alt={`${provider.first_name} ${provider.last_name}`} />
                        <h1>{provider.first_name} {provider.last_name}</h1>
                        <h2>{provider.rates}</h2>
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
                    More Info
                    <p>{bio}</p>
                </>
            );
        }

        function ProviderContact({ provider }) {
            return (
                <>
                    <button onClick={() => handleDatingStatus("return")}>Return to Search</button>
                    <h1>Contact</h1>
                    <img src={provider.image} alt={`${provider.first_name} ${provider.last_name}`} />
                    <h2>{provider.first_name} {provider.last_name}, {provider.qualifications}</h2>
                    <h3>{provider.specialty}</h3>
                    <p>Phone Number: {provider.phone_number}</p>
                    <p>Email: {provider.email}</p>
                </>
            );
        }

        return (
            <div id="Container">
                <PatientLayout>
                    {(datingStatus === "browse" || datingStatus === "moreInfo") && <BrowseProviders />}
                    {datingStatus === "accept" && <ProviderContact provider={provider} />}
                </PatientLayout>
            </div>
        );
    }

  return (
    <>
      {currentPage === "search" && <Search handlePageChange={handlePageChange} />}
      {currentPage === "dating" && <Dating handlePageChange={handlePageChange} filters={filters} />}
    </>
  );
}
