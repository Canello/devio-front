import { useEffect, useState } from "react";
import * as uuid from "uuid";
import { AdditionalCard } from "../subcomponents/AdditionalCard/AdditionalCard.component";

export const useAdditionals = (product) => {
    // Keep track of which additionals are added
    const [checks, setChecks] = useState({});
    const check = (additionalName) => {
        const updatedChecks = structuredClone(checks);
        updatedChecks[additionalName] = !updatedChecks[additionalName];
        setChecks(updatedChecks);
    };

    // Additionals added
    const [added, setAdded] = useState([]);
    const generateAdded = () =>
        product.additionals.filter((additional) => check[additional.name]);
    useEffect(() => {
        generateAdded();
    }, [checks]);

    // Load avaiable additionals on modal opening
    const getProductAdditionals = () => {
        let checkObj = {};
        if (product) {
            product.additionals.forEach((additional) => {
                checkObj[additional.name] = false;
            });
            setChecks(checkObj);
        }
    };
    useEffect(() => {
        getProductAdditionals();
    }, [product]);

    // Generate additional cards when checks or products are updated
    const [additionalCards, setAdditionalCards] = useState([]);
    const generateAdditionalCards = () => {
        const additionalCards = !product
            ? null
            : product.additionals.map((additional) => {
                  return (
                      <AdditionalCard
                          key={uuid.v4()}
                          additional={additional}
                          isChecked={checks[additional.name]}
                          onCheck={() => check(additional.name)}
                      />
                  );
              });

        setAdditionalCards(additionalCards);
    };
    useEffect(() => {
        generateAdditionalCards();
    }, [checks, product]);

    return { additionalCards, added, checks, check };
};
