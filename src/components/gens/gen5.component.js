import { useEffect, useState } from "react";
import SingleGen from "../singleGen.component";
import Gen6 from "./gen6.component";

const Gen5 = (props) => {
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
                genNo={5}
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

export default Gen5;
