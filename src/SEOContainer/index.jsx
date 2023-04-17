import { NextSeo } from "next-seo";

const SEOContainer = ({ seoData={getSeoValues} }) => {
    return (
        seoData && (
            <NextSeo
                title={seoData.title}
                description={seoData.description}
                url={seoData.url}
                keywords={seoData.keywords}   
            />
        )
    );
};
export default SEOContainer;
