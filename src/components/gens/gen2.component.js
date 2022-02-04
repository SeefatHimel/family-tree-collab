import { useEffect, useState } from "react";
import SingleGen from "../singleGen.component";
import Gen3 from "./gen3.component";

const Gen2 = (props) => {
    const { father_id, mother_id, males, females, updateTotalSuccessor } =
        props;
        const [totalSuccessor , setTotalSuccessor] = useState(0);

        const updateTotalSuccessor2 = (num) =>{
            console.log("gen2 " + father_id + " " + mother_id + " " + num);
            setTotalSuccessor( num);
        }
    
    useEffect(() => {
        
    }, [totalSuccessor]);
    return (
        <>
            <SingleGen
                genNo={2}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen3}
                totalSuccessor={totalSuccessor}
                updateTotalSuccessor={updateTotalSuccessor}
                updateNextTotalSuccessor={updateTotalSuccessor2}
            />
        </>
    );
};

export default Gen2;
