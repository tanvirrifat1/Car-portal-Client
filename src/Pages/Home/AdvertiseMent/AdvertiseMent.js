import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../Loading/Loading";
import AdvertiseCard from "./AdvertiseCard";


const AdvertiseMent = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["advertise"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/advertise`
            );
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Loading></Loading>;
    }
    console.log(products, "get this product");
    return (
        <>
            {products.length > 0 && (
                <>
                    <h4 className="text-5xl font-bold text-center mb-16">
                        Our latest Cars
                    </h4>
                    <div className="grid w-11/12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
                        {products?.map((product) => (
                            <AdvertiseCard
                                key={product._id}
                                product={product}
                            ></AdvertiseCard>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default AdvertiseMent;