
import { useEffect } from "react";

/**
 * 関連広告系コンポーネント
 * @returns Multiplex { JSX.Element }
 */
export const MultiplexAd = () => {

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