import { useEffect, useState } from "react";

const Gen1 = (props) => {
    const { adam_id, males, females } = props;

    const [family_id, setFamilyID] = useState({"spouse_id": 1,
    "father_id": 0,
    "mother_id": 0});

    const setAll = (spouse_id, father_id) => {
        setFamilyID({"spouse_id": 1,
        "father_id": 0,
        "mother_id": 0});
    };
    useEffect()

    // const father;

    return (
        <>
            <h1>Generation 1</h1>
            {males.map((male) => {
                if (male.id == adam_id) {
                    setAll(male.spouse_id, male.id);
                    return (
                        <>
                            <h1>{male.name}</h1>
                        </>
                    );
                }
            })}
            {females.map((female) => {
                if (female.id == female) {
                    return (
                        <>
                            <h1>{female.name}</h1>
                        </>
                    );
                }
            })}
        </>
    );
};

export default Gen1;
