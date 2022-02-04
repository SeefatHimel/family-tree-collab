import { useEffect, useState } from "react";
import Gen2 from "./gen2.component";

const Gen1 = (props) => {
    const { adam_id, males, females } = props;

    useEffect(() => {
        console.log("Gen1");
    }, []);

    return (
        <>
            {males.map((male, index) => {
                if (male.id == adam_id) {
                    return (
                        <div key={index} className="col">
                            <h1>Generation 1</h1>
                            <div
                                className="row"
                                style={{ margin: " auto 42%" }}
                            >
                                <div className="col">
                                    <img
                                        className=""
                                        style={{
                                            borderRadius: "45%",
                                            height: "60px",
                                            width: "60px",
                                        }}
                                        src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
                                        alt=""
                                    />
                                    <p>
                                        {male.id} {male.name}
                                    </p>
                                </div>
                                {females.map((female, index) => {
                                    if (female.id == male.spouse_id) {
                                        return (
                                            <div className="col" key={index}>
                                                <img
                                                    className="row"
                                                    style={{
                                                        borderRadius: "45%",
                                                        height: "60px",
                                                        width: "60px",
                                                        margin: "auto",
                                                    }}
                                                    src="https://www.kindpng.com/picc/m/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                                                    alt=""
                                                />
                                                <p>{female.name}</p>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <div className="col">

                            <Gen2
                                father_id={male.id}
                                mother_id={male.spouse_id}
                                males={males}
                                females={females}
                            />
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default Gen1;
