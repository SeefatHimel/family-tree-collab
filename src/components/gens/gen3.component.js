import SingleGen from "../singleGen.component";
import Gen4 from "./gen4.component";

const Gen3 = (props) => {
    const { father_id, mother_id, males, females } = props;
    return (
        <>
            <SingleGen
                genNo={3}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen4}
            />
        </>
    );
};

export default Gen3;
