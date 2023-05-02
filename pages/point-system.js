import PointSystem from "@/components/PointSystem";
import { NextSeo } from "next-seo";
import { rules_SEO  } from "@/constants/seoData";

export default function PointSystemPage() {
  return (<>
    <NextSeo {...rules_SEO } />
    <PointSystem />
    </>
  )
}