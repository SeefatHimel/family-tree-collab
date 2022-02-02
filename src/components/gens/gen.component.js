import { useEffect, useState } from "react";
import getFemales from "../../service/getFemales.service";
import getMales from "../../service/getMales.service";
import Gen1 from "./gen1.component";

const Gen = () => {
    const dataImport = () => {
        const maleData = getMales();
        const femaleData = getFemales();
        setMales(maleData);
        setFemales(femaleData);
    };

    const [males, setMales] = useState([]);
    const [females, setFemales] = useState([]);
    console.log(males);
    console.log(females);

    useEffect(() => {
        console.log("hello");
        dataImport()
    }, []);

    return (
        <>
            {/* <Gen1 adam_id="1" males={males} females={females} /> */}
        </>
    );
};

export default Gen;
