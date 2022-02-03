// import Gen5 from "./gen5.component";

import SingleGen from "../singleGen.component";

const Gen5 = (props) => {
    const { father_id, mother_id, males, females } = props;
    return (
        <>
            <SingleGen
                genNo={5}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen5}
            />
        </>
    );
};

export default Gen5;
