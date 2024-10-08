"use client";
import data from "../../../../data/providers.json";
import { useState, useEffect } from "react";
import PatientLayout from "@/components/PatientLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X, Heart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("search");
  const handlePageChange = (page, filters = {}) => {
    setCurrentPage(page);
    setFilters(filters);
  };
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
      const specialties = new Set(data.map((item) => item.specialty));
      setSpecialties([...specialties]);

      const insurance = new Set(data.map((item) => item.accepted_insurance));
      setInsurance([...insurance]);

      const locations = new Set(data.map((item) => item.location));
      setLocations([...locations]);

      const rateCategories = {
        "<$50 / visit": [],
        "$50-100 / visit": [],
        "$100-200 / visit": [],
        ">$200 / visit": [],
      };
      data.forEach((item) => {
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
          <Card className="w-80 max-h-fit">
            <CardHeader className="flex items-center justify-center">
              <CardTitle>Search Providers</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="specialty">Specialty</Label>
              <Select onValueChange={(value) => setSelectedSpecialty(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Label htmlFor="insurance">Insurance</Label>
              <Select onValueChange={(value) => setSelectedInsurance(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your insurance provider" />
                </SelectTrigger>
                <SelectContent>
                  {insurance.map((insurance) => (
                    <SelectItem key={insurance} value={insurance}>
                      {insurance}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Label htmlFor="location">Location</Label>
              <Select onValueChange={(value) => setSelectedLocation(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Label htmlFor="rate">Rates</Label>
              <Select onValueChange={(value) => setSelectedRate(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget" />
                </SelectTrigger>
                <SelectContent>
                  {rates.map((rate) => (
                    <SelectItem key={rate} value={rate}>
                      {rate}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <Button
                onClick={() =>
                  handlePageChange("dating", {
                    specialty: selectedSpecialty,
                    insurance: selectedInsurance,
                    location: selectedLocation,
                    rate: selectedRate,
                  })
                }
              >
                Set Preferences
              </Button>
            </CardFooter>
          </Card>
        </div>
      </PatientLayout>
    );
  }

  function Dating({ handlePageChange, filters }) {
    const matchedDates = data.filter((provider) => {
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
        (filters.insurance
          ? provider.accepted_insurance === filters.insurance
          : true) &&
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
        <div className="flex flex-col h-screen items-center justify-center space-y-6">
          <Button
            className="max-w-fit"
            onClick={() => handleDatingStatus("return")}
          >
            Return to Search
          </Button>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Button onClick={() => handleDatingStatus("reject")} size="icon">
                <X />
              </Button>
            </div>
            <Card className="w-80 min-h-2/3 max-h-fit mb-10">
              <CardHeader>
                <CardTitle>
                  {provider.first_name} {provider.last_name}
                </CardTitle>
                <CardDescription>
                  {provider.qualifications}, {provider.specialty}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  className="pb-3"
                  src={provider.image}
                  alt={`${provider.first_name} ${provider.last_name}`}
                />
                <CardDescription className="pb-2">
                  {provider.accepted_insurance} - {provider.rates}
                </CardDescription>
                <p>{provider.short_description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-center">
                <Button onClick={() => handleDatingStatus("moreInfo")}>
                  Tell me more
                </Button>
              </CardFooter>
            </Card>
            {datingStatus === "moreInfo" && (
              <MoreInfo bio={provider.long_description} />
            )}
            <div className="flex items-center">
              <Button onClick={() => handleDatingStatus("accept")} size="icon">
                <Heart />
              </Button>
            </div>
          </div>
        </div>
      );
    }

    function MoreInfo({ bio }) {
      return (
        <Card className="max-w-96 max-h-fit">
          <CardHeader>
            <CardTitle>
              About {provider.first_name} {provider.last_name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{bio}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button onClick={() => setDatingStatus("browse")}>Close</Button>
          </CardFooter>
        </Card>
      );
    }

    function ProviderContact({ provider }) {
      return (
        <>
          <Button className="mb-6" onClick={() => handleDatingStatus("return")}>
            Return to Search
          </Button>
          <Card className="w-80 min-h-2/3 max-h-fit">
            <CardHeader>
              <CardTitle>
                {provider.first_name} {provider.last_name}
              </CardTitle>
              <CardDescription>
                {provider.qualifications}, {provider.specialty}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                className="pb-3"
                src={provider.image}
                alt={`${provider.first_name} ${provider.last_name}`}
              />
              <CardDescription className="pb-2">
                {provider.accepted_insurance} - {provider.rates}
              </CardDescription>
              <p>{provider.short_description}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p>
                <strong>Phone Number</strong>{" "}
                <Link href={"tel:" + provider.phone_number}>
                  {provider.phone_number}
                </Link>
              </p>
              <p>
                <strong>Email</strong>{" "}
                <Link href={"mailto:" + provider.email}>{provider.email}</Link>
              </p>
            </CardFooter>
          </Card>
        </>
      );
    }

    return (
      <PatientLayout>
        <div className="flex flex-col items-center justify-center h-fill">
          {(datingStatus === "browse" || datingStatus === "moreInfo") && (
            <BrowseProviders />
          )}
          {datingStatus === "accept" && <ProviderContact provider={provider} />}
        </div>
      </PatientLayout>
    );
  }

  return (
    <>
      {currentPage === "search" && (
        <Search handlePageChange={handlePageChange} />
      )}
      {currentPage === "dating" && (
        <Dating handlePageChange={handlePageChange} filters={filters} />
      )}
    </>
  );
}
