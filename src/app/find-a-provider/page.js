'use client';
import "./find-a-provider.css";
import { useState } from "react";

export default function Home() {

    const [currentPage, setCurrentPage] = useState("search");
    const handlePageChange = (page) => { setCurrentPage(page) }

    function Search() {
        return (
            <>
                <h1>What I want in a provider</h1>
                <label htmlFor="specialty">Specialty</label>
                <select name="specialty">
                    <option value="neurology">neurology</option>
                    <option value="dentistry">dentistry</option>
                    <option value="pediatrics">pediatrics</option>
                </select>
                <label htmlFor="insurance">Insurance</label>
                <select name="insurance">
                    <option value="medicare">medicare</option>
                    <option value="crossycross">crossycross</option>
                    <option value="employer">employer</option>
                </select>
                <label htmlFor="location">Location</label>
                <select name="location">
                    <option value="orlando">orlando</option>
                    <option value="miami">miami</option>
                    <option value="fort myers">fort myers</option>
                </select>
                <label htmlFor="rate">Rate</label>
                <select name="rate">
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                </select>
                <button onClick={() => handlePageChange("dating")}>Set Preferences</button>
            </>
        );
    }

    function Dating() {

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
        

        const [datingStatus, setDatingStatus] = useState("browse")
        const handleDatingStatus = (datingStatus) => {
            if (datingStatus == "moreInfo") {
                setDatingStatus("moreInfo")
            }
            else if (datingStatus == "reject") {
                // load another provider
            }
            else {
                // load a messaging window with the current provider
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
    {currentPage === "search" && <Search />}
    {currentPage === "dating" && <Dating />}
    </>
  );
}
