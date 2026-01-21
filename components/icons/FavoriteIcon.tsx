import React from "react";

export const FavoriteIcon = ({ className = "" }: { className?: string }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g filter="url(#filter0_i_3364_4713)">
                <rect width="32" height="32" rx="6" fill="black" fillOpacity="0.4" />
                <g opacity="0.01">
                    <path d="M17.7719 12.3672C17.0828 12.3672 16.4335 12.6833 16 13.1982C15.5665 12.6833 14.9172 12.3672 14.2281 12.3672C13.0071 12.3672 12.0625 13.3175 12.0625 14.5461C12.0625 16.051 13.4009 17.2588 15.4283 19.1215L16 19.6364L16.5717 19.1215C18.5991 17.2588 19.9375 16.051 19.9375 14.5461C19.9375 13.3175 18.9929 12.3672 17.7719 12.3672ZM16.2423 18.6009L16.1628 18.6748L16 18.8224L15.8372 18.6748L15.7577 18.6009C14.8036 17.7245 13.9782 16.9672 13.4349 16.2914C12.9049 15.6346 12.6702 15.0969 12.6702 14.5461C12.6702 14.1126 12.8292 13.715 13.1188 13.4235C13.4066 13.132 13.8003 12.973 14.2281 12.973C14.7222 12.973 15.2125 13.2039 15.5362 13.5882L16 14.1391L16.4638 13.5882C16.7875 13.202 17.2778 12.973 17.7719 12.973C18.1997 12.973 18.5934 13.132 18.8831 13.4235C19.1727 13.715 19.3317 14.1145 19.3317 14.5461C19.3317 15.095 19.0951 15.6346 18.5669 16.2914C18.0218 16.9672 17.1983 17.7245 16.2423 18.6009Z" fill="white" />
                </g>
                <g filter="url(#filter1_d_3364_4713)">
                    <g filter="url(#filter2_d_3364_4713)">
                        <path d="M20.2564 10.1564C20.0485 10.0892 19.8284 10.0464 19.6021 10.0219C16.7162 9.72843 15.9763 12.4799 15.9763 12.4799C15.9763 12.4799 15.2365 9.72843 12.3566 10.0219C9.67856 10.2909 8.27226 13.6661 10.0271 16.5031C10.5285 17.3163 11.3111 18.1907 12.1488 19.0039C13.8302 20.6364 15.7256 21.9938 15.9763 21.9938C16.3554 21.9938 20.4092 18.955 21.9256 16.5092C23.5336 13.9106 22.4942 10.8596 20.2564 10.1564Z" fill="#E3E3E3" />
                        <path opacity="0.12" d="M21.9253 16.5029C23.5333 13.9105 22.4939 10.8594 20.256 10.1562C20.256 10.1562 22.4878 12.3085 21.2038 14.5219C19.9198 16.7353 15.6275 19.4867 15.0222 19.5846C14.5208 19.664 13.249 19.5479 12.1484 19.0098C13.8299 20.6423 15.7253 21.9997 15.976 21.9997C16.3551 21.9936 20.4089 18.9548 21.9253 16.5029Z" fill="black" />
                        <path opacity="0.1" d="M11.833 12.6705C12.3753 12.0281 12.5515 11.2849 12.2264 11.0104C11.9013 10.736 11.1982 11.0343 10.6558 11.6767C10.1135 12.3191 9.93735 13.0623 10.2624 13.3368C10.5875 13.6112 11.2907 13.3129 11.833 12.6705Z" fill="black" />
                    </g>
                </g>
            </g>
            <defs>
                <filter id="filter0_i_3364_4713" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3364_4713" />
                </filter>
                <filter id="filter1_d_3364_4713" x="3" y="4" width="26" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3364_4713" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3364_4713" result="shape" />
                </filter>
                <filter id="filter2_d_3364_4713" x="9" y="10" width="13.9551" height="12.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="0.5" />
                    <feGaussianBlur stdDeviation="0.125" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3364_4713" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3364_4713" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};
