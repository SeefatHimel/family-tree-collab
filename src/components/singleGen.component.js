import { useState } from "react";
import SinglePerson from "./singlePerson.component";

const SingleGen = (props) => {
    const { genNo, males, females, father_id, mother_id, GenComponent } = props;
    const [colLen, setColLen] = useState(6);
    const [colTotal, setColtotal] = useState(0);
    const colClassName = "col-" + colLen;

    const calculateColumnLen = (size) => {
        if (size === 0) return;
        const colLen = 12 / size;
        setColLen(colLen);
    };
    useState(() => {
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
        calculateColumnLen(len);
    }, []);

    return (
        <>
            <div className="row">
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
                    GenComponent={GenComponent}
                    mode={1}
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
                    GenComponent={GenComponent}
                    mode={0}
                />
            </div>
        </>
    );
};

export default SingleGen;
