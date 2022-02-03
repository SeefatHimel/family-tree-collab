import { useEffect, useState } from "react";
import Gen2 from "./gen2.component";

const Gen1 = (props) => {
    const { adam_id, males, females } = props;

    useEffect(() => {
        console.log("Gen1");
    }, []);


    return (
        <>
            <h1>Generation 1</h1>
            {males.map((male, index) => {
                if (male.id == adam_id) {
                    return (
                        <div key={index}>
                            <h1>
                                {male.name}
                                {females.map((female, index) => {
                                    if (female.id == male.spouse_id) {
                                        return (
                                            <span key={index}>
                                                ==== {female.name}
                                            </span>
                                        );
                                    }
                                })}
                            </h1>
                            <hr />

                            <Gen2 father_id={male.id} mother_id={male.spouse_id} males={males} females={females} />
                        </div>
                    );
                }
            })}

        </>
    );
};

export default Gen1;
