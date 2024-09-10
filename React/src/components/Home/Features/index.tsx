const Features = () => {
    return (
        <div className="max-w-1200 mx-auto py-16">
            <div className="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
                <div
                    className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                    <img
                        src="/images/icons/delivery-van.svg"
                        className="lg:w-12 w-10 h-12 object-contain"
                        alt="delivery-van"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">free shipping</h4>
                        <p className="text-gray-500 text-xs lg:text-sm">Order over $200</p>
                    </div>
                </div>

                <div
                    className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                    <img
                        src="/images/icons/money-back.svg"
                        className="lg:w-12 w-10 h-12 object-contain"
                        alt="money-back"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">Money returns</h4>
                        <p className="text-gray-500 text-xs lg:text-sm">30 Days money return</p>
                    </div>
                </div>

                <div
                    className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                    <img
                        src="/images/icons/service-hours.svg"
                        className="lg:w-12 w-10 h-12 object-contain"
                        alt="service-hours"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
                        <p className="text-gray-500 text-xs lg:text-sm">Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;