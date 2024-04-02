
interface MyReviewProps {
    className?: string | undefined,
}

const ReviewText: React.FC<MyReviewProps> = ({ className }) => {
    return (
        <>
            <div className={`${className}`}>
                <h4 className="text-white text-2xl lg:text-4xl font-bold">Amazing service</h4>
                <p className="text-gray-400 text-base mt-5 lg:mt-8">Since the online marketplace can be a scary place, the presence of customer reviews on an online store helps establish authenticity, confidence, and trust among shoppers. </p>
                <div className="mt-10">
                    <h6 className="text-primary text-lg font-bold">Wade Warren</h6>
                    <p className="text-sm text-gray-400">Doctor</p>
                </div>
            </div>
        </>
    )
}

export default ReviewText