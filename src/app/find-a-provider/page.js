'use client';
import { useState } from "react";

export default function Home() {

    const [currentPage, setCurrentPage] = useState("search");
    const handlePageChange = (page) => { setCurrentPage(page) }

    function Search() {
        return (
            <>
                <h1>What I want in a provider</h1>
                <label for="specialty">Specialty</label>
                <select name="specialty">
                    <option value="neurology">neurology</option>
                    <option value="dentistry">dentistry</option>
                    <option value="pediatrics">pediatrics</option>
                </select>
                <label for="insurance">Insurance</label>
                <select name="insurance">
                    <option value="medicare">medicare</option>
                    <option value="crossycross">crossycross</option>
                    <option value="employer">employer</option>
                </select>
                <label for="location">Location</label>
                <select name="location">
                    <option value="orlando">orlando</option>
                    <option value="miami">miami</option>
                    <option value="fort myers">fort myers</option>
                </select>
                <label for="rate">Rate</label>
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
                    <h1>Replace this with an image.</h1>
                    <h1>FirstName LastName</h1>
                    <p>Short description</p>
                    <button onClick={() => handleDatingStatus("moreInfo")}>Tell me more</button>
                </div>
                <button onClick={() => handleDatingStatus("accept")}>&lt;3</button>
                {datingStatus === "moreInfo" && <MoreInfo />}
            </>
        );
    }

    function MoreInfo() {
        return (
            <>
                <p>This is a long description for a provider.</p>
                <p>Lorem ipsum to be, or not to be, thats the question Nor made to court an amorous looking-glass; So clear in his great office, that his virtues

She gave me for my pains a world of sighs Said he not so? or did I dream it so? We'ld jump the life to come. but in these cases You sulphurous and thought-executing fires, Hath borne his faculties so meek, hath been

But as the riper should by time decease, The deep damnation of his taking-off; To strut before a wanton ambling nymph; Here's to my love!

Deformed, unfinish'd, sent before my time But still the house-affairs would draw her thence Vaunt-couriers to oak-cleaving thunderbolts, From this world-wearied flesh. eyes, look your last!

</p>
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
