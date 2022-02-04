// import Gen6 from "./gen6gen6.component";

import { useEffect, useState } from "react";
import SingleGen from "../singleGen.component";

const Gen6 = (props) => {
    const { father_id, mother_id, males, females, updateTotalSuccessor } =
    props;
    const [totalSuccessor , setTotalSuccessor] = useState(0);

    const updateTotalSuccessor2 = (num) =>{
        setTotalSuccessor(totalSuccessor + num);
    }

useEffect(() => {
    
}, []);
    return (
        <>
            <SingleGen
                genNo={6}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen6}
                totalSuccessor={totalSuccessor}
                updateTotalSuccessor={updateTotalSuccessor}
                updateNextTotalSuccessor={updateTotalSuccessor2}
            />
        </>
    );
};

export default Gen6;
