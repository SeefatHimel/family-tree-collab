import { useEffect, useState } from "react";
import getChildrenNo from "../service/getChildrenNo.service";
import SingleGen from "..////singleGen.component";

const NextGen = (props) => {
    const {
        father_id,
        mother_id,
        males,
        females,
        TotalMember,
        genNo,
        sss,
        totalSuccessor,
        PTotalSuccessorNo,
        pChildren,
    } = props;
    // const [totalSuccessor, stt] = useState([
    //     {
    //         father_id: -5,
    //         mother_id: -5,
    //         child: -1,
    //     },
    // ]);
    const setTotalSuccessor = (father_id, mother_id, num) => {
        // num+=totalSuccessor;
        if (totalSuccessor?.find((obj) => obj.father_id === father_id))
            console.log("llloooooooooooooollllllllllllllllll", totalSuccessor);
        else {
            console.log("========================", {
                father_id: father_id,
                mother_id: mother_id,
                child: num,
            });
            sss({ father_id: father_id, mother_id: mother_id, child: num });
            // if(genNo === 1)
            //  sss(totalSuccessor);
        }
    };

    // console.log(
    //     "In NextGen comp",
    //     father_id,
    //     mother_id,
    //     TotalMember,
    //     totalSuccessor,
    //     genNo
    // );

    useEffect(() => {
        // const num = getChildrenNo(males, females, father_id, mother_id);
        // setTotalSuccessor(num);
    }, []);
    return (
        <>
            <SingleGen
                genNo={genNo + 1}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={NextGen}
                totalSuccessor={totalSuccessor}
                setTotalSuccessor={setTotalSuccessor}
                sss={sss}
                pChildren={pChildren}
                PTotalSuccessorNo={PTotalSuccessorNo}
            />
        </>
    );
};

export default NextGen;
