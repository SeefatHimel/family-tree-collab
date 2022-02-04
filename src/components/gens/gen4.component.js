import { useEffect, useState } from "react";
import SingleGen from "../singleGen.component";
import Gen5 from "./gen5.component";

const Gen4 = (props) => {
    const { father_id, mother_id, males, females } =
    props;
    const [totalSuccessor , setTotalSuccessor] = useState(0);


useEffect(() => {
}, []);
    return (
        <>
            <SingleGen
                genNo={4}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen5}
                totalSuccessor={totalSuccessor}
            />
        </>
    );
};

export default Gen4;
