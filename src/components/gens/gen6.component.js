// import Gen6 from "./gen6gen6.component";

import SingleGen from "../singleGen.component";

const Gen6 = (props) => {
    const { father_id, mother_id, males, females } = props;
    return (
        <>
            <SingleGen
                genNo={6}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen6}
            />
        </>
    );
};

export default Gen6;
