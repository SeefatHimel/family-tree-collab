import { useEffect, useState } from "react";
import getChildrenNo from "./service/getChildrenNo.service";
import GetTotalSuccessors from "./service/getTotalSuccessors";
import "../../../css/demo.css";

const SinglePerson = (props) => {
    const {
        males,
        females,
        father_id,
        mother_id,
        nClassName,
        genNo,
        GenComponent,
        mode,
        imgSrc1,
        imgSrc2,
        setTotalSuccessor,
        totalSuccessor,
        PTotalSuccessorNo,
        pChildren,
        sss,
    } = props;
    // console.log("iN SINGLE PERSON",father_id, mother_id,  genNo);

    const [data1, setData1] = useState(males);
    const [data2, setData2] = useState(females);
    let children = 0;
    let totalSuccessorNo = 0;
    const defWidth = 100;

    let mul = 100;

    const setmul = () => {
        mul = Math.floor(
            defWidth * pChildren
                ? pChildren
                : (1 * totalSuccessorNo) / PTotalSuccessorNo
                ? PTotalSuccessorNo
                : 1
        );
        console.log(
            "m = ",
            mul,
            pChildren ? pChildren : 1,
            PTotalSuccessorNo ? PTotalSuccessorNo : 1
        );
    };

    const childrenFunc = (person) => {
        const childrenNo = getChildrenNo(
            males,
            females,
            mode == 1 ? person.id : person.spouse_id,
            mode == 1 ? person.spouse_id : person.id
        );

        return childrenNo;
    };

    useEffect(() => {
        if (mode == 0) {
            setData1(females);
            setData2(males);
        }
    }, []);

    return (
        <>
            {data1.map((person1, index) => {
                if (
                    person1.father_id == father_id &&
                    person1.mother_id == mother_id
                ) {
                    return (
                        <div
                            id="sp 1 1"
                            className="ncol "
                            key={index}
                        >
                            <div id="rrrroooww23" className="card">
                                <div id="rrrroooww22" className="ncol">
                                        Generation {genNo}
                                         {/* - (
                                    <p>
                                        {(children = childrenFunc(person1))} ) = 
                                        (
                                        {
                                            (totalSuccessorNo =
                                                GetTotalSuccessors(
                                                    males,
                                                    females,
                                                    mode == 1
                                                        ? person1.id
                                                        : person1.spouse_id,
                                                    mode == 1
                                                        ? person1.spouse_id
                                                        : person1.id
                                                ))
                                        }
                                        {setmul()})
                                    </p> */}
                                    {/* pChildren = sibling no
                                        totalSuccessorNo = totalSuccessor including parents
                                        PTotalSuccessorNo = totalSuccessor of grand parents exluding  them
                                        */}
                                    {/* <p>
                                        {pChildren} * {totalSuccessorNo} /{" "}
                                        {PTotalSuccessorNo} ={" "}
                                        {Math.floor(
                                            (defWidth *
                                                pChildren *
                                                totalSuccessorNo) /
                                                PTotalSuccessorNo
                                        )}{" "}
                                    </p> */}
                                    <div id="couple" className="nnrow">
                                        <div id="person1" className=" ">
                                            <img
                                                className="propic"
                                                src={imgSrc1}
                                                alt=""
                                            />
                                            <p>
                                                {person1.id} {person1.name}
                                            </p>
                                        </div>
                                        {data2.map((person2, index) => {
                                            if (
                                                person2.id == person1.spouse_id
                                            ) {
                                                return (
                                                    <div id="person1" 
                                                        className=" "
                                                        key={index}
                                                    >
                                                        <img
                                                            className="nrow"
                                                            style={{
                                                                borderRadius:
                                                                    "45%",
                                                                height: "60px",
                                                                width: "60px",
                                                                margin: "auto",
                                                            }}
                                                            src={imgSrc2}
                                                            alt=""
                                                        />
                                                        <p>{person2.name}</p>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>

                                    {genNo < 6 ? (
                                        <GenComponent
                                            father_id={
                                                mode == 1
                                                    ? person1.id
                                                    : person1.spouse_id
                                            }
                                            mother_id={
                                                mode == 1
                                                    ? person1.spouse_id
                                                    : person1.id
                                            }
                                            males={males}
                                            females={females}
                                            TotalMember
                                            genNo={genNo}
                                            sss={sss}
                                            pChildren={children}
                                            PTotalSuccessorNo={
                                                totalSuccessorNo - 2
                                            }
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default SinglePerson;
