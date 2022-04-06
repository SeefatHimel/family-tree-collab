import { useEffect, useState } from "react";
import getChildrenNo from "../service/getChildrenNo.service";
import GetTotalSuccessors from "../service/getTotalSuccessors";
import NextGen from "./nextGen.component";
import '../../../../css/demo.css';

const Gen1 = (props) => {
    const { adam_id, males, females } = props;
    const [totalSuccessor, stt] = useState([
        {
            father_id: -5,
            mother_id: -5,
            child: -1,
        },
    ]);
    let pChildren = 0;
    let PTotalSuccessorNo = 0;

    const uttt = (onj) =>{
        console.log("///////////////////",totalSuccessor);
        stt( [ ...totalSuccessor ,onj]);
    }

    let spouse_id;
    const mp = males.map((male) => {
        if (male.id == adam_id) {
            spouse_id = male.spouse_id;
            return male;
        }
    });
    const num = getChildrenNo(males, females, adam_id, spouse_id);
    useEffect(() => {}, [totalSuccessor]);

    return (
        <>
            {males.map((male, index) => {
                if (male.id == adam_id) {
                    return (
                        <div id="gen 1 1" key={index} className="genContainer">
                            <div id="h1Div">
                                <h1 id="h1gen1">Generation 1 ({num}) </h1>
                            </div>
                            <div id="stk"
                                className="nnrow"
                            >
                                <div className="">
                                    <img
                                        className="propic"                                        
                                        src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
                                        alt=""
                                    />
                                    <p>
                                        {male.id} {male.name}
                                    </p>
                                </div>
                                {females.map((female, index) => {
                                    if (female.id == male.spouse_id) {
                                        return (
                                            <div
                                                className="nncol"
                                                key={index}
                                            >
                                                <img
                                                    className="propic"
                                                    src="https://www.kindpng.com/picc/m/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                                                    alt=""
                                                />
                                                <p>{female.name}</p>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            
                            <div id='gen1col' className=""> 
                            {/* {PTotalSuccessorNo = GetTotalSuccessors(males, females, male.id, male.spouse_id)} */}
                            {/* Total Family Members */}
                                <NextGen
                                    father_id={male.id}
                                    mother_id={male.spouse_id}
                                    males={males}
                                    females={females}
                                    TotalMember={num}
                                    genNo={1}
                                    sss={uttt}
                                    totalSuccessor= {totalSuccessor}
                                    pChildren={num}
                                    PTotalSuccessorNo={PTotalSuccessorNo-2}
                                />
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default Gen1;
