import { useEffect, useState } from "react";
import getChildrenNo from "../../service/getChildrenNo.service";
import SingleGen from "../singleGen.component";
import Gen3 from "./gen3.component";

const Gen2 = (props) => {
    const { father_id, mother_id, males, females } =
        props;
        const [totalSuccessor , setTotalSuccessor] = useState(0);

    
    useEffect(() => {
        const num = getChildrenNo(males, females, father_id, mother_id);
        setTotalSuccessor(num);
    }, []);
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
            />
        </>
    );
};

export default Gen2;
