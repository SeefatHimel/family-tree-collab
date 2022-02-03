import SingleGen from "../singleGen.component";
import Gen3 from "./gen3.component";

const Gen2 = (props) => {
    const { father_id, mother_id, males, females } = props;
    return (
        <>
            <SingleGen
                genNo={2}
                males={males}
                females={females}
                father_id={father_id}
                mother_id={mother_id}
                GenComponent={Gen3}
            />
        </>
    );
};

export default Gen2;
