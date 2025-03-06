
import parse from "html-react-parser";
import getNews from "@/lib/getNews";
import React from 'react'
import NewsPreview from "@/components/NewsPreview";
import { previewData } from "@/lib/previewData";




export default function newsPreview() {
    return <div className="md:px-40">{parse(previewData)}</div>;
}



// export default function newsPreview() {
//     return <NewsPreview />
// }