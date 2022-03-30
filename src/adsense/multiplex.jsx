
/** 標準ライブラリ */
import { useEffect } from "react";

/**
 * Multiplexコンポーネント
 */
export const Multiplex = () => {

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, []);

    return(
        <>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8526200711405760"
                crossOrigin="anonymous"></script>
            <ins className="adsbygoogle"
                style={{display: "block"}}
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-8526200711405760"
                data-ad-slot="6920794667"></ins>
        </>
    );
}