import { NextSeo } from "next-seo";

const SEOContainer = ({seoData}) => {
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
