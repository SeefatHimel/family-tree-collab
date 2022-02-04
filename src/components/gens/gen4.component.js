import { useEffect, useState } from "react";
import SingleGen from "../singleGen.component";
import Gen5 from "./gen5.component";

const Gen4 = (props) => {
    const { father_id, mother_id, males, females, updateTotalSuccessor } =
    props;
    const [totalSuccessor , setTotalSuccessor] = useState(0);

    const updateTotalSuccessor2 = (num) =>{
                console.log("gen4 " + father_id + " " + mother_id + " " + num);
        setTotalSuccessor( num);
    }

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
                updateTotalSuccessor={updateTotalSuccessor}
                updateNextTotalSuccessor={updateTotalSuccessor2}
            />
        </>
    );
};

export default Gen4;
