import { useEffect, useState } from "react";
import getChildrenNo from "../../service/getChildrenNo.service";
import SingleGen from "../singleGen.component";
import Gen4 from "./gen4.component";

const Gen3 = (props) => {
    const { father_id, mother_id, males, females, updateTotalSuccessor } =
        props;
        const [totalSuccessor , setTotalSuccessor] = useState(0);

        const updateTotalSuccessor2 = (num) =>{
            console.log("gen3 " + father_id + " " + mother_id + " " + num);
            setTotalSuccessor( num);
        }
    
    useEffect(() => {
        const num = getChildrenNo(males, females, father_id, mother_id);
        setTotalSuccessor(num);
    }, []);
    return (
        <>
            <SingleGen
                genNo={3}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen4}
                totalSuccessor={totalSuccessor}
                updateTotalSuccessor={updateTotalSuccessor}
                updateNextTotalSuccessor={updateTotalSuccessor2}
            />
        </>
    );
};

export default Gen3;
