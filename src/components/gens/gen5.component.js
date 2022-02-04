import { useEffect, useState } from "react";
import SingleGen from "../singleGen.component";
import Gen6 from "./gen6.component";

const Gen5 = (props) => {
    const { father_id, mother_id, males, females } =
        props;
        const [totalSuccessor , setTotalSuccessor] = useState(0);

    
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
            />
        </>
    );
};

export default Gen5;
