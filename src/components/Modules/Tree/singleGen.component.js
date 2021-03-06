import { useEffect, useState } from "react";
import SinglePerson from "./singlePerson.component";
import '../../../css/demo.css';

const SingleGen = (props) => {
    const {
        genNo,
        males,
        females,
        father_id,
        mother_id,
        GenComponent,
        totalSuccessor,
        setTotalSuccessor,
        PTotalSuccessorNo,
        pChildren,
        sss,
    } = props;
    // console.log("in single gen", father_id, mother_id , genNo);
    console.log("in single gen", PTotalSuccessorNo , pChildren);

    const [colLen, setColLen] = useState(6);
    const [len, setLen] = useState(0);
    const colClassName = "col-" + colLen;

    const calculateColumnLen = (size) => {
        if (size === 0) return;
        const colLen = Math.floor(12 / size);
        setColLen(colLen);
    };
    useEffect(() => {
        const len =
            males.filter(
                (male) =>
                    male.father_id == father_id && male.mother_id == mother_id
            ).length +
            females.filter(
                (female) =>
                    female.father_id == father_id &&
                    female.mother_id == mother_id
            ).length;
        setLen(len);
        calculateColumnLen(len);
    }, []);

    return (
        <>
            <div id="ffff" className="nrow ">
                <SinglePerson
                    males={males}
                    females={females}
                    father_id={father_id}
                    mother_id={mother_id}
                    imgSrc1={
                        "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
                    }
                    imgSrc2={
                        "https://www.kindpng.com/picc/m/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                    }
                    colClassName={colClassName}
                    genNo={genNo}
                    totalSuccessor={totalSuccessor}
                    GenComponent={GenComponent}
                    mode={1}
                    setTotalSuccessor={setTotalSuccessor}
                    sss={sss}
                    pChildren={pChildren}
                    PTotalSuccessorNo={PTotalSuccessorNo}
                />

                <SinglePerson
                    males={males}
                    females={females}
                    father_id={father_id}
                    mother_id={mother_id}
                    imgSrc1={
                        "https://www.kindpng.com/picc/m/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                    }
                    imgSrc2={
                        "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
                    }
                    colClassName={colClassName}
                    genNo={genNo}
                    totalSuccessor={totalSuccessor}
                    GenComponent={GenComponent}
                    mode={0}
                    setTotalSuccessor={setTotalSuccessor}
                    sss={sss}
                    pChildren={pChildren}
                    PTotalSuccessorNo={PTotalSuccessorNo}
                />
            </div>
        </>
    );
};

export default SingleGen;
