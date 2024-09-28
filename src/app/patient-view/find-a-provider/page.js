'use client';
import data from '../../../../data/providers.json';
import { useState, useEffect } from "react";
import PatientLayout from "@/components/PatientLayout";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

            const rateCategories = {
                "<$50 / visit": [],
                "$50-100 / visit": [],
                "$100-200 / visit": [],
                ">$200 / visit": []
            };
            data.forEach(item => {
                const rate = parseFloat(item.rates.replace(/[^0-9.-]+/g, ""));
                if (rate < 50) {
                    rateCategories["<$50 / visit"].push(item.rates);
                } else if (rate >= 50 && rate <= 100) {
                    rateCategories["$50-100 / visit"].push(item.rates);
                } else if (rate > 100 && rate <= 200) {
                    rateCategories["$100-200 / visit"].push(item.rates);
                } else {
                    rateCategories[">$200 / visit"].push(item.rates);
                }
            });

            setRates(Object.keys(rateCategories));
                
        }, []);

        return (
            <PatientLayout>
                <div className="flex items-center justify-center h-screen">
                <Card className="w-80 h-2/3">
                <CardHeader className="flex items-center justify-center">
                    <CardTitle>Search Providers</CardTitle>
                </CardHeader>
                <CardContent>
                    <Label htmlFor="specialty">Specialty</Label>
                    <Select onValueChange={(value) => setSelectedSpecialty(value)}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select a specialty"/>
                        </SelectTrigger>
                        <SelectContent>
                            {specialties.map(specialty => (
                                <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Label htmlFor="insurance">Insurance</Label>
                    <Select onValueChange={(value) => setSelectedInsurance(value)}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select your insurance provider"/>
                        </SelectTrigger>
                        <SelectContent>
                            {insurance.map(insurance => (
                                <SelectItem key={insurance} value={insurance}>{insurance}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Label htmlFor="location">Location</Label>
                    <Select onValueChange={(value) => setSelectedLocation(value)}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select your city"/>
                        </SelectTrigger>
                        <SelectContent>
                            {locations.map(location => (
                                <SelectItem key={location} value={location}>{location}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Label htmlFor="rate">Rates</Label>
                    <Select onValueChange={(value) => setSelectedRate(value)}>
                        <SelectTrigger>
                        <SelectValue placeholder="Select your budget"/>
                        </SelectTrigger>
                        <SelectContent>
                            {rates.map(rate => (
                                <SelectItem key={rate} value={rate}>{rate}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                    <Button onClick={() => handlePageChange("dating", {specialty: selectedSpecialty, insurance: selectedInsurance, location: selectedLocation, rate: selectedRate})}>Set Preferences</Button>
                    </CardFooter>
                </Card>
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
            alert("no options found. please adjust your filters");
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
                        <h2>{provider.accepted_insurance} {provider.rates}</h2>
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
            <div id="Container" className="flex flex-col">
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
